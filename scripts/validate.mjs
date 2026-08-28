import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const ignoredDirectories = new Set([".git", "node_modules", "source", "scripts", "reports", "tmp"]);
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const target = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(target));
    else files.push(target);
  }
  return files;
}

function localTarget(reference) {
  if (/^(mailto:|tel:|data:|javascript:|#)/i.test(reference)) return null;
  let parsed;
  try { parsed = new URL(reference, "https://studio501.fr/"); } catch { return null; }
  if (parsed.hostname !== "studio501.fr") return null;
  let pathname = decodeURIComponent(parsed.pathname);
  if (pathname.endsWith("/")) pathname += "index.html";
  else if (!extname(pathname)) pathname += "/index.html";
  return join(root, pathname.replace(/^\//, ""));
}

async function exists(path) {
  try { await access(path, constants.F_OK); return true; } catch { return false; }
}

const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const name = relative(root, file).replaceAll("\\", "/");
  if (!/^<!doctype html>/i.test(html)) errors.push(`${name}: doctype manquant`);
  if (!/<html lang="(fr|en)">/.test(html)) errors.push(`${name}: langue HTML manquante`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${name}: title manquant`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${name}: description manquante`);
  if (!/<link rel="canonical" href="https:\/\/studio501\.fr\//.test(html)) errors.push(`${name}: canonical manquante`);
  if (!/<h1[ >]/.test(html)) errors.push(`${name}: h1 manquant`);
  if (/googletagmanager|google-analytics|analytics\.js|facebook\.net|connect\.facebook\.net|clarity\.ms|hotjar|matomo|plausible/i.test(html)) errors.push(`${name}: tracker détecté`);
  if (/<form[ >]/i.test(html)) errors.push(`${name}: formulaire inattendu`);
  if (/(?:href|src)="http:\/\//i.test(html)) errors.push(`${name}: ressource HTTP non sécurisée`);
  const legalPath = /<html lang="en">/.test(html) ? "/en/mentions-legales/" : "/mentions-legales/";
  const websitePrivacyPath = /<html lang="en">/.test(html) ? "/en/confidentialite/" : "/confidentialite/";
  if (!html.includes(`href="${legalPath}"`)) errors.push(`${name}: lien vers les mentions légales manquant`);
  if (!html.includes(`href="${websitePrivacyPath}"`)) errors.push(`${name}: lien vers la confidentialité du site manquant`);
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    const target = localTarget(reference);
    if (target && !await exists(target)) errors.push(`${name}: cible introuvable ${reference}`);
  }
}

for (const required of [
  "index.html", "windows/index.html", "android/index.html", "apps/index.html", "privacy/index.html", "confidentialite/index.html", "mentions-legales/index.html", "support/index.html", "about/index.html",
  "privacy.html", "universal-converter-privacy.html", "robots.txt", "sitemap.xml", "apps.json", "CNAME", ".nojekyll",
  "en/index.html", "en/windows/index.html", "en/android/index.html", "en/apps/index.html", "en/privacy/index.html", "en/confidentialite/index.html", "en/mentions-legales/index.html",
]) {
  if (!await exists(join(root, required))) errors.push(`fichier requis manquant: ${required}`);
}

const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
for (const expected of [
  "https://studio501.fr/", "https://studio501.fr/windows/", "https://studio501.fr/android/", "https://studio501.fr/privacy/",
  "https://studio501.fr/confidentialite/", "https://studio501.fr/mentions-legales/", "https://studio501.fr/en/confidentialite/", "https://studio501.fr/en/mentions-legales/",
  "https://studio501.fr/apps/ma-liste-de-courses/", "https://studio501.fr/privacy/budget-assistant/", "https://studio501.fr/en/privacy/myhomeassistant/",
  "https://studio501.fr/apps/memoa/", "https://studio501.fr/privacy/memoa/", "https://studio501.fr/en/apps/memoa/", "https://studio501.fr/en/privacy/memoa/",
]) if (!sitemap.includes(`<loc>${expected}</loc>`)) errors.push(`sitemap: URL manquante ${expected}`);

const clientCode = await Promise.all(files.filter((file) => file.endsWith(".js")).map((file) => readFile(file, "utf8")));
if (/localStorage|sessionStorage|document\.cookie|indexedDB|XMLHttpRequest|\bfetch\s*\(/i.test(clientCode.join("\n"))) errors.push("code client: stockage ou appel réseau inattendu");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validation réussie : ${htmlFiles.length} pages HTML, liens internes, métadonnées et fichiers publics vérifiés.`);
}
