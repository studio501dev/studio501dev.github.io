import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import { apps } from "../source/apps.mjs";

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

// Publication status is the single source of truth for counts and store buttons.
const publishedAndroidCount = apps.filter((app) => app.platformKey === "android" && app.status === "published").length;
const publicApps = JSON.parse(await readFile(join(root, "apps.json"), "utf8"));
if (publicApps.length !== apps.length) errors.push("apps.json: nombre d’applications incohérent");
for (const app of apps) {
  const entry = publicApps.find((item) => item.slug === app.slug);
  if (!entry || entry.status !== app.status || entry.storeUrl !== app.storeUrl || entry.icon !== app.icon) errors.push(`${app.slug}: catalogue JSON désynchronisé`);
  if (app.status === "published" && !app.storeUrl) errors.push(`${app.slug}: application publiée sans lien boutique`);
  if (app.status !== "published" && app.storeUrl) errors.push(`${app.slug}: lien boutique actif pour une application non publiée`);
  if (app.storeUrl && app.platformKey === "android") {
    const store = new URL(app.storeUrl);
    if (store.origin !== "https://play.google.com" || store.pathname !== "/store/apps/details" || store.searchParams.get("id") !== app.packageName) errors.push(`${app.slug}: lien Google Play incorrect`);
  }
  for (const lang of ["fr", "en"]) {
    const prefix = lang === "fr" ? "" : "en/";
    for (const page of [`apps/${app.slug}/index.html`, `privacy/${app.privacySlug || app.slug}/index.html`]) {
      const html = await readFile(join(root, prefix, page), "utf8");
      if (!html.includes(`status--${app.status}`) || !html.includes(app.statusLabel[lang])) errors.push(`${prefix}${page}: statut incohérent`);
      if (app.storeUrl && !html.includes(`href="${app.storeUrl}"`)) errors.push(`${prefix}${page}: bouton boutique manquant`);
      if (app.status === "published" && /Publication en préparation|Preparing for release|Visuels à venir avec la publication officielle|Visuals will be added with the official release/.test(html)) errors.push(`${prefix}${page}: texte de prépublication obsolète`);
    }
  }
}
for (const lang of ["fr", "en"]) {
  const prefix = lang === "fr" ? "" : "en/";
  const home = await readFile(join(root, prefix, "index.html"), "utf8");
  const android = await readFile(join(root, prefix, "android/index.html"), "utf8");
  const catalogue = await readFile(join(root, prefix, "apps/index.html"), "utf8");
  const headline = lang === "fr" ? `${publishedAndroidCount} applications déjà publiées.` : `${publishedAndroidCount} applications already published.`;
  const lead = lang === "fr" ? `${publishedAndroidCount} applications premium sont publiées sur Google Play` : `${publishedAndroidCount} premium applications are published on Google Play`;
  if (!home.includes(`<h2>${headline}</h2>`) || !android.includes(lead)) errors.push(`${prefix}: compteur Android incorrect`);
  if (!home.includes(`${lang === "fr" ? "Voir les" : "View all"} ${apps.length} applications`)) errors.push(`${prefix}: compteur du catalogue incorrect`);
  if ([...catalogue.matchAll(/<article class="app-card /g)].length !== apps.length) errors.push(`${prefix}: nombre de cartes incorrect`);
  for (const app of apps) {
    if (!catalogue.includes(`href="/${prefix}apps/${app.slug}/"`) || (app.storeUrl && !catalogue.includes(`href="${app.storeUrl}"`))) errors.push(`${prefix}: application ou lien boutique absent du catalogue : ${app.slug}`);
  }
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const name = relative(root, file).replaceAll("\\", "/");
  if (!/^<!doctype html>/i.test(html)) errors.push(`${name}: doctype manquant`);
  if (!/<html lang="(fr|en|fr-FR|en-US|de-DE|es-ES|it-IT|pt-BR)">/.test(html)) errors.push(`${name}: langue HTML manquante`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${name}: title manquant`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${name}: description manquante`);
  if (!/<link rel="canonical" href="https:\/\/studio501\.fr\//.test(html)) errors.push(`${name}: canonical manquante`);
  if (!/<h1[ >]/.test(html)) errors.push(`${name}: h1 manquant`);
  if (/googletagmanager|google-analytics|analytics\.js|facebook\.net|connect\.facebook\.net|clarity\.ms|hotjar|matomo|plausible/i.test(html)) errors.push(`${name}: tracker détecté`);
  if (/<form[ >]/i.test(html)) errors.push(`${name}: formulaire inattendu`);
  if (/(?:href|src)="http:\/\//i.test(html)) errors.push(`${name}: ressource HTTP non sécurisée`);
  const frenchPage = /<html lang="fr(?:-FR)?">/.test(html);
  const legalPath = frenchPage ? "/mentions-legales/" : "/en/mentions-legales/";
  const websitePrivacyPath = frenchPage ? "/confidentialite/" : "/en/confidentialite/";
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
  "apps/widget-pilulier/index.html", "privacy/widget-pilulier/index.html", "apps/memoa/index.html", "privacy/memoa/index.html", "apps/arcade-501/index.html", "privacy/arcade-501/index.html",
  "en/index.html", "en/windows/index.html", "en/android/index.html", "en/apps/index.html", "en/privacy/index.html", "en/confidentialite/index.html", "en/mentions-legales/index.html",
  "en/apps/widget-pilulier/index.html", "en/privacy/widget-pilulier/index.html", "en/apps/memoa/index.html", "en/privacy/memoa/index.html", "en/apps/arcade-501/index.html", "en/privacy/arcade-501/index.html",
]) {
  if (!await exists(join(root, required))) errors.push(`fichier requis manquant: ${required}`);
}

const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
for (const expected of [
  "https://studio501.fr/", "https://studio501.fr/windows/", "https://studio501.fr/android/", "https://studio501.fr/privacy/",
  "https://studio501.fr/confidentialite/", "https://studio501.fr/mentions-legales/", "https://studio501.fr/en/confidentialite/", "https://studio501.fr/en/mentions-legales/",
  "https://studio501.fr/apps/ma-liste-de-courses/", "https://studio501.fr/privacy/budget-assistant/", "https://studio501.fr/en/privacy/myhomeassistant/",
  "https://studio501.fr/apps/memoa/", "https://studio501.fr/privacy/memoa/", "https://studio501.fr/en/apps/memoa/", "https://studio501.fr/en/privacy/memoa/",
  "https://studio501.fr/apps/widget-pilulier/", "https://studio501.fr/privacy/widget-pilulier/", "https://studio501.fr/en/apps/widget-pilulier/", "https://studio501.fr/en/privacy/widget-pilulier/",
  "https://studio501.fr/apps/arcade-501/", "https://studio501.fr/privacy/arcade-501/", "https://studio501.fr/en/apps/arcade-501/", "https://studio501.fr/en/privacy/arcade-501/",
]) if (!sitemap.includes(`<loc>${expected}</loc>`)) errors.push(`sitemap: URL manquante ${expected}`);

const clientCode = await Promise.all(files.filter((file) => file.endsWith(".js")).map((file) => readFile(file, "utf8")));
if (/localStorage|sessionStorage|document\.cookie|indexedDB|XMLHttpRequest|\bfetch\s*\(/i.test(clientCode.join("\n"))) errors.push("code client: stockage ou appel réseau inattendu");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validation réussie : ${htmlFiles.length} pages HTML, liens internes, métadonnées et fichiers publics vérifiés.`);
}
