import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { fileURLToPath } from "url";
import { join, extname, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2); // ['--out','dist','--baseUrl','https://example.com']

function getArg(name) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i+1] : undefined;
}

const PORT = 8080;
const ROOT = getArg("--root") ?? join(__dirname, "bin/www");

// Types MIME de base
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".json": "application/json",
  ".txt": "text/plain",
};

const server = createServer(async (req, res) => {
  try {
    // URL → chemin du fichier
    let filePath = join(ROOT, req.url === "/" ? "/index.html" : req.url);
    
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      filePath = join(filePath, "index.html");
    }

    const ext = extname(filePath).toLowerCase();
    const mime = MIME[ext] || "application/octet-stream";

    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mime });
    res.end(data);
  } catch (err) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 - Fichier non trouvé");
  }
});

server.listen(PORT, () => {
  console.log(`Serveur statique en marche sur http://localhost:${PORT}`);
});
