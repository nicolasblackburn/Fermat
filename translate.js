import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";

const srcDir = "src/www"; // dossiers source contenant Markdown FR et éventuellement en/
const destDir = srcDir;   // on écrit dans le même répertoire

// traduction avec Google Translate non-officielle
async function translate(text, toLang = "en") {
  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
    toLang +
    "&dt=t&q=" +
    encodeURIComponent(text);

  const res = await fetch(url);
  const json = await res.json();
  return json[0].map(chunk => chunk[0]).join("");
}

// créer le dossier si besoin
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {}
}

// fonction récursive pour parcourir le dossier
async function traverseAndTranslate(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);

    // on ignore tout ce qui est dans src/www/en
    if (srcPath.includes(path.join("src", "www", "en"))) continue;

    const destPath = path.join(dest, "en", path.relative(srcDir, srcPath)); 

    if (entry.isDirectory()) {
      await traverseAndTranslate(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      await ensureDir(path.dirname(destPath));
      const content = await fs.readFile(srcPath, "utf-8");
      console.log(`Translating ${srcPath} → ${destPath}`);
      const translated = await translate(content, "en");
      await fs.writeFile(destPath, translated, "utf-8");
    }
  }
}

// lancer le script
(async () => {
  await traverseAndTranslate(srcDir, destDir);
  console.log("✅ Traduction terminée !");
})();
