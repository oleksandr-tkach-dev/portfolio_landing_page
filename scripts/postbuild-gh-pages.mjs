import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const indexHtml = resolve(dist, "index.html");
const notFoundHtml = resolve(dist, "404.html");

if (!existsSync(indexHtml)) {
  console.error("postbuild-gh-pages: dist/index.html missing — run vite build first.");
  process.exit(1);
}

copyFileSync(indexHtml, notFoundHtml);
console.log("postbuild-gh-pages: copied index.html → 404.html (SPA fallback for GitHub Pages).");
