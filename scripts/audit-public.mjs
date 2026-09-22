// Read-only post-deployment check: public pages must match this checkout.
import { readFile } from "node:fs/promises";
import { resolve, join } from "node:path";

const root = resolve(import.meta.dirname, "..");
const base = "https://studio501.fr";
const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
const pages = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
pages.push("/privacy.html", "/universal-converter-privacy.html");
const assets = new Set(["/assets/og.png", "/assets/favicon.png", "/site.webmanifest"]);
const failures = [];
const normalize = (text) => text.replaceAll("\r\n", "\n");
async function parallel(items, callback) {
  const queue = [...items];
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const item = queue.shift();
      try { await callback(item); } catch (error) { failures.push(`${item}: ${error.message}`); }
    }
  }));
}
await parallel(pages, async (path) => {
  const local = await readFile(join(root, path.slice(1), path.endsWith("/") ? "index.html" : ""), "utf8");
  for (const match of local.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) assets.add(match[1]);
  const response = await fetch(base + path, { signal: AbortSignal.timeout(20000), headers: { "Cache-Control": "no-cache" } });
  if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
  if (normalize(await response.text()) !== normalize(local)) throw new Error("contenu public différent du fichier validé");
});
await parallel([...assets], async (path) => {
  const response = await fetch(base + path, { method: "HEAD", signal: AbortSignal.timeout(20000) });
  if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
  if (/\.(png|jpe?g|webp|svg)$/.test(path) && !response.headers.get("content-type")?.startsWith("image/")) throw new Error("type image incorrect");
});
const response = await fetch(base + "/apps.json", { signal: AbortSignal.timeout(20000), headers: { "Cache-Control": "no-cache" } });
if (response.status !== 200 || normalize(await response.text()) !== normalize(await readFile(join(root, "apps.json"), "utf8"))) failures.push("apps.json: catalogue public désynchronisé");
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Contrôle public réussi : ${pages.length} pages HTTP 200 conformes, ${assets.size} ressources accessibles, catalogue JSON synchronisé.`);
}
