import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = path.join(__dirname, "../src/app");
const pub = path.join(__dirname, "../public");

function createIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(pngBuffers.length, 4); // count

  let offset = 6 + 16 * pngBuffers.length;
  const entries = [];

  for (const img of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map((b) => b.buffer)]);
}

async function generate() {
  const logoSource = path.join(pub, "formx-logo-nav.png");
  const navTrimmed = await sharp(logoSource).trim().toBuffer();

  // Create crisp 512x512 master square on solid white background for high legibility
  const master512 = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      {
        input: await sharp(navTrimmed).resize(460, null, { fit: "inside" }).toBuffer(),
        gravity: "center",
      },
    ])
    .png()
    .toBuffer();

  // 1. App icon (192x192)
  await sharp(master512)
    .resize(192, 192)
    .png()
    .toFile(path.join(app, "icon.png"));

  // 2. Apple touch icon (180x180)
  await sharp(master512)
    .resize(180, 180)
    .png()
    .toFile(path.join(app, "apple-icon.png"));

  // 3. Google search & crawler favicon (48x48)
  await sharp(master512)
    .resize(48, 48)
    .png()
    .toFile(path.join(pub, "favicon-48.png"));

  // 4. ICO file containing 16x16, 32x32, and 48x48
  const png16 = await sharp(master512).resize(16, 16).png().toBuffer();
  const png32 = await sharp(master512).resize(32, 32).png().toBuffer();
  const png48 = await sharp(master512).resize(48, 48).png().toBuffer();
  const icoData = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(path.join(app, "favicon.ico"), icoData);
  fs.writeFileSync(path.join(pub, "favicon.ico"), icoData);

  // 5. SVG icon with embedded high-res master
  const base64Master = master512.toString("base64");
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" fill="#ffffff"/>
  <image href="data:image/png;base64,${base64Master}" width="512" height="512"/>
</svg>
`;
  fs.writeFileSync(path.join(app, "icon.svg"), svgContent);

  console.log("FormX logo favicons generated successfully!");
}

generate();

