// build.js — Node ≥18 (ESM)
import { readdir, mkdir, cp, writeFile, readFile } from "fs/promises";
import { join, parse, dirname } from "path";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import { promisify } from "util";
import { minify } from "html-minifier-terser";
import { renderFile } from "ejs";

const exec = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC = join(__dirname, "src/www");
const OUT = join(__dirname, "www");

// HTML template
const layoutFile = join(__dirname, "src/views/layout.ejs");

async function htmlTemplate(title, content) {
  return await renderFile(layoutFile, {title, content});
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function convertMdToHtml(srcFile, outFile) {
  // pandoc: convert md → HTML fragment
  const { stdout } = await exec("pandoc", ["-t", "html", srcFile]);
  const title = parse(srcFile).name;
  const fullHtml = await htmlTemplate(title, stdout);

  // minify HTML
  const minHtml = await minify(fullHtml, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    minifyCSS: true,
    minifyJS: true,
  });

  await writeFile(outFile, minHtml, "utf-8");
}

async function walk(curDir) {
  const entries = await readdir(curDir, { withFileTypes: true });
  for (const e of entries) {
    const abs = join(curDir, e.name);
    const rel = abs.slice(SRC.length + 1);
    const outPath = join(OUT, rel);

    if (e.isDirectory()) {
      await ensureDir(outPath);
      await walk(abs);
    } else {
      const { ext, name, dir } = parse(outPath);
      if (ext === ".md") {
        const outHtml = join(dir, `${name}.html`);
        await ensureDir(dir);
        await convertMdToHtml(abs, outHtml);
        console.log("MD → HTML :", rel, "→", outHtml.slice(OUT.length + 1));
      } else {
        await ensureDir(dir);
        await cp(abs, outPath);
        console.log("COPY :", rel);
      }
    }
  }
}

await ensureDir(OUT);
await walk(SRC);
console.log("Build terminé !");
