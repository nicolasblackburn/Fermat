// build.js — Node ≥18 (ESM)
import { readdir, mkdir, cp, writeFile } from "fs/promises";
import { join, parse, dirname } from "path";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import { promisify } from "util";
import { minify } from "html-minifier-terser";

const exec = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC = join(__dirname, "src/www");
const OUT = join(__dirname, "www");

// HTML template
function htmlTemplate(title, content) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']]
  },
  svg: { fontCache: 'global' }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<style>
  body { font-family: sans-serif; margin: 2rem; max-width: 800px; }
  header { border-bottom: 1px solid #ccc; margin-bottom: 1rem; padding-bottom: 0.5rem; }
  nav a { margin-right: 1rem; text-decoration: none; color: #333; }
</style>
</head>
<body>
<header>
  <h1>${title}</h1>
  <nav>
    <a href="/">Accueil</a>
    <a href="/about.html">À propos</a>
  </nav>
</header>
<main>
${content}
</main>
</body>
</html>
`;
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function convertMdToHtml(srcFile, outFile) {
  // pandoc: convert md → HTML fragment
  const { stdout } = await exec("pandoc", ["-t", "html", srcFile]);
  const title = parse(srcFile).name;
  const fullHtml = htmlTemplate(title, stdout);

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
