import { readdir, mkdir, cp, writeFile, readFile } from "fs/promises";
import { join, parse, dirname } from "path";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import { promisify } from "util";
import { minify } from "html-minifier-terser";
import { renderFile } from "ejs";
import * as cheerio from 'cheerio';

const exec = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2); // ['--out','dist','--baseUrl','https://example.com']

function getArg(name) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i+1] : undefined;
}

const SRC = getArg('--src') ?? join(__dirname, "src/www");
const OUT = getArg('--out') ?? join(__dirname, "bin/www");
const baseUrl = getArg('--baseUrl') ?? "/";

// HTML template
const layoutFile = join(__dirname, "src/views/layout.ejs");

async function htmlTemplate(data) {
  return await renderFile(layoutFile, data);
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function convertMdToHtml(srcFile, outFile) {
  let lang = "fr";
  
  if (srcFile.match(join(SRC, "en"))) {
    lang = "en";
  }

  // pandoc: convert md → HTML fragment
  const { stdout } = await exec("pandoc", ["-t", "html", srcFile]);
  const $ = cheerio.load(stdout);
  //const data = $("table").first().remove();
  const title = $("h1").first().remove().text();
  const content = $.html();
  const fullHtml = await htmlTemplate({
    lang,
    title, 
    content,
    baseUrl
  });

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
