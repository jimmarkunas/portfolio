import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const geometry = fs.readFileSync(path.join(root, "src/app/pdma2026/pdmaGeometry.ts"), "utf8");
const required = ["slide01","slide02","slide03","slide04","slide05","slide06","slide07","slide08","slide09","slide10","slide11","slide12","slide13","slide14","slide15"];
for (const key of required) if (!new RegExp(`\\b${key}\\s*:`).test(geometry)) throw new Error(`Missing ${key} in pdmaGeometry`);
for (const file of ["pdmaCssGeometry.ts","pdmaSlideGeometry.ts"]) if (fs.existsSync(path.join(root, "src/app/pdma2026", file))) throw new Error(`${file} still exists`);
const legacy = path.join(root, "src/app/pdma2026/components/slides/canonicalShared.tsx");
if (fs.existsSync(legacy)) throw new Error("canonicalShared.tsx still exists");
const slides = fs.readdirSync(path.join(root, "src/app/pdma2026/components/slides")).filter((f) => /^Slide\d+\.tsx$/.test(f)).map((f) => fs.readFileSync(path.join(root, "src/app/pdma2026/components/slides", f), "utf8"));
for (const source of slides) for (const token of ["pdmaCssGeometry", "pdmaSlideGeometry", "canonicalShared"]) if (source.includes(token)) throw new Error(`Legacy token ${token} remains in slide source`);
console.log("PDMA unified geometry guard passed (15 slides, one registry, one primitive surface).");
