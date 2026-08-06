const fs = require("fs");
const files = [
  "src/data/projects.ts",
  "src/data/services.ts",
  "src/data/content.ts",
  "src/data/serviceStories.ts",
  "src/data/sectors.ts",
];
for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  s = s.split("â€”").join("\u2014");
  s = s.split("â€™").join("'");
  s = s.split("â€˜").join("'");
  s = s.split("â€œ").join('"');
  s = s.split("â€").join('"');
  s = s.split("â†’").join("\u2192");
  fs.writeFileSync(f, s);
  console.log("fixed", f);
}
