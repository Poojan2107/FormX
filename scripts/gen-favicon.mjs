import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = path.join(__dirname, "../src/app");
const pub = path.join(__dirname, "../public");

function svg(size) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#0A0A0A"/>
  <path d="M8.2 6.5h5.1L16 13.2 18.7 6.5h5.1L18.2 16l5.7 9.5h-5.2L16 18.8 13.3 25.5H8.1L13.8 16 8.2 6.5z" fill="#DE3024"/>
</svg>`);
}

const svgSource = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#0A0A0A"/>
  <path d="M8.2 6.5h5.1L16 13.2 18.7 6.5h5.1L18.2 16l5.7 9.5h-5.2L16 18.8 13.3 25.5H8.1L13.8 16 8.2 6.5z" fill="#DE3024"/>
</svg>
`;

await sharp(svg(32)).png().toFile(path.join(app, "icon.png"));
await sharp(svg(180)).resize(180, 180).png().toFile(path.join(app, "apple-icon.png"));
await sharp(svg(32)).resize(32, 32).toFile(path.join(app, "favicon.ico"));
await sharp(svg(48)).resize(48, 48).png().toFile(path.join(pub, "favicon-48.png"));
fs.writeFileSync(path.join(app, "icon.svg"), svgSource);
console.log("FormX favicons generated");
