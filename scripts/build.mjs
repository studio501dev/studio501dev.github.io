import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { apps, site } from "../source/apps.mjs";
import { policies } from "../source/privacy.mjs";

const root = resolve(import.meta.dirname, "..");
const languages = ["fr", "en"];

const labels = {
  fr: {
    nav: { home: "Accueil", windows: "Windows", android: "Android", apps: "Applications", privacy: "Confidentialité", support: "Support", about: "À propos" },
    menu: "Menu", language: "EN", platform: "Plateforme", discover: "Découvrir", allApps: "Toutes les applications", privacyPolicy: "Politique de confidentialité", support: "Obtenir de l’aide", backApps: "Retour aux applications", updated: "Dernière mise à jour", features: "Fonctions principales", screenshots: "Captures de l’application", noScreens: "Visuels à venir avec la publication officielle.", local: "Une approche respectueuse des données", footer: "Applications Windows et Android conçues en France.", publisher: "Entreprise éditrice : Candela — France.", storeContact: "Adresse de support conservée pour les fiches Store :", skip: "Aller au contenu", current: "Page actuelle", openExternal: "Ouvre un site externe" },
  en: {
    nav: { home: "Home", windows: "Windows", android: "Android", apps: "Applications", privacy: "Privacy", support: "Support", about: "About" },
    menu: "Menu", language: "FR", platform: "Platform", discover: "Discover", allApps: "All applications", privacyPolicy: "Privacy policy", support: "Get support", backApps: "Back to applications", updated: "Last updated", features: "Key features", screenshots: "Application screenshots", noScreens: "Visuals will be added with the official release.", local: "A privacy-conscious approach", footer: "Windows and Android applications designed in France.", publisher: "Publishing business: Candela — France.", storeContact: "Support address retained for Store listings:", skip: "Skip to content", current: "Current page", openExternal: "Opens an external website" },
};

const esc = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const langPath = (lang, path) => lang === "fr" ? path : path === "/" ? "/en/" : `/en${path}`;
const alternatePath = (lang, path) => langPath(lang === "fr" ? "en" : "fr", path);
const absolute = (path) => `${site.baseUrl}${path}`;
const policySlug = (app) => app.privacySlug || app.slug;

function iconMarkup(app, className = "app-icon") {
  if (app.icon) return `<img class="${className}" src="${app.icon}" width="112" height="112" alt="Icône ${esc(app.name)}" loading="lazy">`;
  return `<span class="${className} app-icon--generated app-icon--${app.accent}" aria-hidden="true">${esc(app.monogram || app.name.slice(0, 2))}</span>`;
}

function head({ lang, path, title, description, structuredData = [] }) {
  const canonical = absolute(langPath(lang, path));
  const alternate = absolute(alternatePath(lang, path));
  const locale = lang === "fr" ? "fr_FR" : "en_GB";
  const otherLocale = lang === "fr" ? "en_GB" : "fr_FR";
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#0b1020">
  <meta name="color-scheme" content="dark light">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="fr" href="${absolute(langPath("fr", path))}">
  <link rel="alternate" hreflang="en" href="${absolute(langPath("en", path))}">
  <link rel="alternate" hreflang="x-default" href="${absolute(langPath("fr", path))}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Studio501">
  <meta property="og:locale" content="${locale}">
  <meta property="og:locale:alternate" content="${otherLocale}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${absolute("/assets/og.png")}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Studio501 — Windows · Android">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${absolute("/assets/og.png")}">
  <link rel="icon" type="image/png" href="/assets/favicon.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/site.css">
${structuredData.map((data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`).join("\n")}
</head>`;
}

function header(lang, current, path) {
  const t = labels[lang];
  const items = [
    ["windows", "/windows/"], ["android", "/android/"], ["apps", "/apps/"], ["privacy", "/privacy/"], ["support", "/support/"], ["about", "/about/"],
  ];
  const links = items.map(([key, itemPath]) => `<a ${current === key ? 'aria-current="page" class="is-current"' : ""} href="${langPath(lang, itemPath)}">${t.nav[key]}</a>`).join("");
  return `<body>
<a class="skip-link" href="#main">${t.skip}</a>
<header class="site-header">
  <div class="shell header-inner">
    <a class="brand" href="${langPath(lang, "/")}" aria-label="Studio501 — ${t.nav.home}"><span class="brand-mark" aria-hidden="true">5</span><span>Studio501</span></a>
    <nav class="desktop-nav" aria-label="${t.menu}">${links}<a class="lang-switch" href="${alternatePath(lang, path)}" lang="${lang === "fr" ? "en" : "fr"}">${t.language}</a></nav>
    <details class="mobile-nav">
      <summary>${t.menu}</summary>
      <nav aria-label="${t.menu}">${links}<a class="lang-switch" href="${alternatePath(lang, path)}" lang="${lang === "fr" ? "en" : "fr"}">${t.language}</a></nav>
    </details>
  </div>
</header>`;
}

function footer(lang) {
  const t = labels[lang];
  const year = new Date().getUTCFullYear();
  return `<footer class="site-footer">
  <div class="shell footer-grid">
    <div><a class="brand brand--footer" href="${langPath(lang, "/")}"><span class="brand-mark" aria-hidden="true">5</span><span>Studio501</span></a><p>${t.footer}</p><p>${t.publisher}</p></div>
    <div><strong>${t.nav.apps}</strong><a href="${langPath(lang, "/windows/")}">Windows</a><a href="${langPath(lang, "/android/")}">Android</a><a href="${langPath(lang, "/apps/")}">${t.nav.apps}</a></div>
    <div><strong>Studio501</strong><a href="${langPath(lang, "/privacy/")}">${t.nav.privacy}</a><a href="${langPath(lang, "/support/")}">${t.nav.support}</a><a href="${langPath(lang, "/about/")}">${t.nav.about}</a></div>
    <div><strong>Contact</strong><a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a><span class="footer-note">${t.storeContact}<br>${site.storeEmail}</span></div>
  </div>
  <div class="shell footer-bottom"><span>© ${year} Studio501 — Candela</span><span>France · FR / EN</span></div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>`;
}

function layout({ lang, path, current, title, description, content, structuredData = [] }) {
  return `${head({ lang, path, title, description, structuredData })}\n${header(lang, current, path)}\n<main id="main">${content}</main>\n${footer(lang)}`;
}

function appCard(app, lang, compact = false) {
  const t = labels[lang];
  const appPath = langPath(lang, `/apps/${app.slug}/`);
  return `<article class="app-card app-card--${app.accent}${compact ? " app-card--compact" : ""}" data-reveal>
    <div class="app-card-top">${iconMarkup(app)}<div><span class="platform-badge platform-badge--${app.platformKey}">${app.platform}</span><span class="status status--${app.status}">${esc(app.statusLabel[lang])}</span></div></div>
    <h3><a href="${appPath}">${esc(app.name)}</a></h3>
    <p>${esc(app.summary[lang])}</p>
    <div class="card-actions"><a class="text-link" href="${appPath}">${t.discover}<span aria-hidden="true"> →</span></a>${app.storeUrl && !compact ? `<a class="store-link" href="${app.storeUrl}" target="_blank" rel="noopener" aria-label="${esc(app.storeLabel[lang])} — ${t.openExternal}">${esc(app.storeLabel[lang])}</a>` : ""}</div>
  </article>`;
}

function pageIntro(kicker, title, lead) {
  return `<section class="page-hero"><div class="shell page-hero-inner"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p class="lead">${lead}</p></div></section>`;
}

function homePage(lang) {
  const fr = lang === "fr";
  const path = "/";
  const title = fr ? "Studio501 — Applications Windows et Android" : "Studio501 — Windows and Android applications";
  const description = fr ? "Studio501 développe des applications Windows et Android simples, utiles, premium et respectueuses des données." : "Studio501 develops simple, useful, premium and privacy-conscious Windows and Android applications.";
  const featured = [apps[0], apps[2], apps[3]];
  const structuredData = [{ "@context": "https://schema.org", "@type": "Organization", name: site.name, legalName: site.publisher, url: site.baseUrl, email: site.primaryEmail, areaServed: "Worldwide", address: { "@type": "PostalAddress", addressCountry: "FR" } }];
  const content = `<section class="home-hero">
    <div class="shell hero-grid">
      <div class="hero-copy" data-reveal>
        <p class="eyebrow">${fr ? "Studio indépendant français · Windows + Android" : "Independent French studio · Windows + Android"}</p>
        <h1>${fr ? "Des applications simples.<br> <span>Des outils utiles.</span>" : "Simple applications.<br> <span>Useful tools.</span>"}</h1>
        <p class="hero-lead">${fr ? "Studio501 conçoit des applications modernes, efficaces sans complexité inutile et pensées pour respecter vos données." : "Studio501 creates modern applications that stay effective without needless complexity and are designed to respect your data."}</p>
        <div class="hero-actions"><a class="button button--primary" href="${langPath(lang, "/apps/")}">${fr ? "Découvrir les applications" : "Discover the applications"}</a><a class="button button--secondary" href="${langPath(lang, "/windows/")}">Windows</a><a class="button button--secondary" href="${langPath(lang, "/android/")}">Android</a></div>
        <div class="trust-line"><span>${fr ? "Sans publicité" : "No advertising"}</span><span>${fr ? "Sans compte inutile" : "No needless account"}</span><span>${fr ? "Local lorsque possible" : "Local when possible"}</span></div>
      </div>
      <div class="hero-system" aria-label="${fr ? "Applications Studio501 pour Windows et Android" : "Studio501 applications for Windows and Android"}" data-reveal>
        <div class="system-glow"></div><div class="system-path"></div>
        <div class="floating-app floating-app--one">${iconMarkup(apps[0], "floating-icon")}<span>Decision Tree<br>Studio</span></div>
        <div class="floating-app floating-app--two">${iconMarkup(apps[2], "floating-icon")}<span>Ma Liste de<br>Courses</span></div>
        <div class="floating-app floating-app--three">${iconMarkup(apps[4], "floating-icon")}<span>MyHomeAssistant</span></div>
        <div class="platform-chip platform-chip--windows">Windows</div><div class="platform-chip platform-chip--android">Android</div>
      </div>
    </div>
  </section>
  <section class="section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">${fr ? "À découvrir" : "Featured"}</p><h2>${fr ? "Applications mises en avant" : "Featured applications"}</h2></div><a class="text-link" href="${langPath(lang, "/apps/")}">${fr ? "Voir les 5 applications" : "View all 5 applications"}<span aria-hidden="true"> →</span></a></div><div class="app-grid">${featured.map((app) => appCard(app, lang)).join("")}</div></div></section>
  <section class="section section--tinted"><div class="shell"><div class="section-heading"><div><p class="eyebrow">${fr ? "Pourquoi Studio501" : "Why Studio501"}</p><h2>${fr ? "Le logiciel, avec juste ce qu’il faut." : "Software with just what you need."}</h2></div></div><div class="value-grid">
    ${[
      [fr ? "Expérience soignée" : "Polished experience", fr ? "Des interfaces claires, travaillées pour être agréables dès la première utilisation." : "Clear interfaces designed to feel good from the first use."],
      [fr ? "Respect des données" : "Respect for data", fr ? "Le fonctionnement local est privilégié chaque fois que le produit le permet." : "Local operation is preferred whenever the product allows it."],
      [fr ? "Pas de complexité inutile" : "No needless complexity", fr ? "Pas de compte imposé, de publicité ou de service en ligne sans raison." : "No forced account, advertising or online service without a reason."],
      [fr ? "Pensées pour durer" : "Built to last", fr ? "Des applications utiles, maintenables et simples à retrouver au quotidien." : "Useful, maintainable applications that remain easy to use every day."],
    ].map(([heading, text], index) => `<article class="value-card" data-reveal><span class="value-number">0${index + 1}</span><h3>${heading}</h3><p>${text}</p></article>`).join("")}
  </div></div></section>
  <section class="section platform-split"><div class="shell split-grid"><article class="platform-panel platform-panel--windows" data-reveal><p class="eyebrow">Windows</p><h2>${fr ? "Des outils complets pour le PC." : "Complete tools for your PC."}</h2><p>${fr ? "Créez des procédures interactives avec Decision Tree Studio et préparez vos conversions locales avec Universal Converter Studio." : "Create interactive procedures with Decision Tree Studio and prepare local conversions with Universal Converter Studio."}</p><a class="button button--light" href="${langPath(lang, "/windows/")}">${fr ? "Explorer Windows" : "Explore Windows"}</a></article><article class="platform-panel platform-panel--android" data-reveal><p class="eyebrow">Android · Google Play</p><h2>${fr ? "Trois applications déjà publiées." : "Three applications already published."}</h2><p>${fr ? "Courses, budget et entretien de la maison : des outils premium, locaux et sans publicité." : "Shopping, budgeting and home maintenance: premium, local and ad-free tools."}</p><a class="button button--light" href="${langPath(lang, "/android/")}">${fr ? "Explorer Android" : "Explore Android"}</a></article></div></section>`;
  return layout({ lang, path, current: "home", title, description, content, structuredData });
}

function platformPage(lang, platformKey) {
  const fr = lang === "fr";
  const isWindows = platformKey === "windows";
  const path = isWindows ? "/windows/" : "/android/";
  const platformApps = apps.filter((app) => app.platformKey === platformKey);
  const title = isWindows ? (fr ? "Applications Windows — Studio501" : "Windows applications — Studio501") : (fr ? "Applications Android — Studio501" : "Android applications — Studio501");
  const description = isWindows ? (fr ? "Applications Studio501 pour Windows : Decision Tree Studio et Universal Converter Studio." : "Studio501 applications for Windows: Decision Tree Studio and Universal Converter Studio.") : (fr ? "Studio501 sur Google Play : Ma Liste de Courses, Budget Assistant et MyHomeAssistant." : "Studio501 on Google Play: Ma Liste de Courses, Budget Assistant and MyHomeAssistant.");
  const intro = isWindows ? {
    kicker: "Studio501 · Windows", heading: fr ? "Des logiciels Windows qui restent clairs." : "Windows software that stays clear.", lead: fr ? "Des outils premium pour créer, organiser et convertir, avec un fonctionnement local au cœur de l’expérience." : "Premium tools for creating, organising and converting, with local operation at the core of the experience.",
  } : {
    kicker: "Studio501 · Google Play", heading: fr ? "Applications Android" : "Android applications", lead: fr ? "Trois applications premium publiées sur Google Play, sans publicité et sans compte obligatoire." : "Three premium applications published on Google Play, with no advertising or mandatory account.",
  };
  const content = `${pageIntro(intro.kicker, intro.heading, intro.lead)}<section class="section"><div class="shell"><div class="app-grid app-grid--wide">${platformApps.map((app) => appCard(app, lang)).join("")}</div></div></section><section class="section section--compact"><div class="shell privacy-banner" data-reveal><div><p class="eyebrow">${labels[lang].nav.privacy}</p><h2>${fr ? "Une politique claire pour chaque application." : "A clear policy for every application."}</h2><p>${fr ? "Chaque politique est publique, directe, lisible sur mobile et utilisable par les Stores." : "Every policy is public, direct, mobile-friendly and ready for Store use."}</p></div><a class="button button--primary" href="${langPath(lang, "/privacy/")}">${fr ? "Ouvrir le centre de confidentialité" : "Open the privacy centre"}</a></div></section>`;
  return layout({ lang, path, current: platformKey, title, description, content });
}

function applicationsPage(lang) {
  const fr = lang === "fr";
  const path = "/apps/";
  const content = `${pageIntro(fr ? "Catalogue Studio501" : "Studio501 catalogue", fr ? "Toutes les applications" : "All applications", fr ? "Windows ou Android, chaque application répond à un besoin concret avec une expérience claire et respectueuse des données." : "On Windows or Android, every application answers a concrete need with a clear, privacy-conscious experience.")}<section class="section"><div class="shell"><div class="app-grid app-grid--wide">${apps.map((app) => appCard(app, lang)).join("")}</div></div></section>`;
  return layout({ lang, path, current: "apps", title: fr ? "Applications — Studio501" : "Applications — Studio501", description: fr ? "Découvrez toutes les applications Windows et Android publiées par Studio501." : "Discover every Windows and Android application published by Studio501.", content });
}

function applicationPage(lang, app) {
  const fr = lang === "fr";
  const t = labels[lang];
  const path = `/apps/${app.slug}/`;
  const privacyPath = `/privacy/${policySlug(app)}/`;
  const structuredData = [{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: app.name, applicationCategory: app.platformKey === "windows" ? "BusinessApplication" : "LifestyleApplication", operatingSystem: app.platform, url: absolute(langPath(lang, path)), description: app.summary[lang], author: { "@type": "Organization", name: site.name, url: site.baseUrl }, ...(app.storeUrl ? { downloadUrl: app.storeUrl } : {}) }];
  const screenshots = app.screenshots.length ? `<div class="screenshot-rail">${app.screenshots.map((source, index) => `<figure><img src="${source}" alt="${esc(app.name)} — ${fr ? "capture" : "screenshot"} ${index + 1}" loading="lazy" width="1052" height="592"><figcaption>${app.name} · ${index + 1}/${app.screenshots.length}</figcaption></figure>`).join("")}</div>` : `<div class="empty-visual">${iconMarkup(app)}<p>${t.noScreens}</p></div>`;
  const content = `<section class="product-hero product-hero--${app.accent}"><div class="shell product-hero-grid"><div class="product-identity" data-reveal>${iconMarkup(app, "product-icon")}<div><div class="product-meta"><span class="platform-badge platform-badge--${app.platformKey}">${app.platform}</span><span class="status status--${app.status}">${esc(app.statusLabel[lang])}</span></div><h1>${esc(app.name)}</h1><p class="lead">${esc(app.summary[lang])}</p><div class="hero-actions">${app.storeUrl ? `<a class="button button--primary" href="${app.storeUrl}" target="_blank" rel="noopener">${esc(app.storeLabel[lang])}</a>` : ""}<a class="button button--secondary" href="${langPath(lang, privacyPath)}">${t.privacyPolicy}</a></div></div></div><div class="product-copy" data-reveal>${app.description[lang].map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</div></div></section>
  <section class="section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">${t.features}</p><h2>${fr ? "Tout ce qu’il faut, clairement." : "Everything you need, clearly."}</h2></div></div><ul class="feature-grid">${app.features[lang].map((feature) => `<li data-reveal><span aria-hidden="true">✓</span>${esc(feature)}</li>`).join("")}</ul></div></section>
  <section class="section section--tinted"><div class="shell"><div class="section-heading"><div><p class="eyebrow">${t.screenshots}</p><h2>${fr ? "L’application en images" : "See the application"}</h2></div></div>${screenshots}</div></section>
  <section class="section"><div class="shell product-bottom-grid"><article class="privacy-panel" data-reveal><p class="eyebrow">${t.local}</p><h2>${t.privacyPolicy}</h2><p>${esc(app.privacyLead[lang])}</p><a class="button button--primary" href="${langPath(lang, privacyPath)}">${t.privacyPolicy}</a></article><article class="support-panel" data-reveal><p class="eyebrow">Support</p><h2>${fr ? "Une question sur l’application ?" : "A question about the application?"}</h2><p>${fr ? "Écrivez à Studio501 en indiquant l’application, votre appareil et une description précise." : "Email Studio501 with the application name, your device and a precise description."}</p><a class="button button--secondary" href="${langPath(lang, `/support/?app=${encodeURIComponent(app.slug)}`)}">${t.support}</a></article></div><p class="back-link"><a href="${langPath(lang, "/apps/")}">← ${t.backApps}</a></p></section>`;
  return layout({ lang, path, current: "apps", title: `${app.name} — Studio501`, description: app.summary[lang], content, structuredData });
}

function privacyCentrePage(lang) {
  const fr = lang === "fr";
  const path = "/privacy/";
  const cards = apps.map((app) => `<article class="privacy-card" data-reveal>${iconMarkup(app)}<div><span class="platform-badge platform-badge--${app.platformKey}">${app.platform}</span><h2>${esc(app.name)}</h2><p>${esc(app.privacyLead[lang])}</p><a class="button button--secondary" href="${langPath(lang, `/privacy/${policySlug(app)}/`)}">${labels[lang].privacyPolicy}</a></div></article>`).join("");
  const content = `${pageIntro(fr ? "Centre officiel Studio501" : "Official Studio501 centre", fr ? "Confidentialité" : "Privacy", fr ? "Une page publique, directe et stable pour chaque application Windows et Android." : "A public, direct and stable page for every Windows and Android application.")}<section class="section"><div class="shell privacy-list">${cards}</div></section><section class="section section--compact"><div class="shell note-panel"><strong>${fr ? "Sans compte, sans bannière cookies." : "No account, no cookie banner."}</strong><p>${fr ? "Ce site n’intègre ni publicité, ni outil d’analyse marketing, ni cookie de suivi." : "This website includes no advertising, marketing analytics or tracking cookies."}</p></div></section>`;
  return layout({ lang, path, current: "privacy", title: fr ? "Centre de confidentialité — Studio501" : "Privacy centre — Studio501", description: fr ? "Politiques de confidentialité officielles des applications Windows et Android Studio501." : "Official privacy policies for Studio501 Windows and Android applications.", content });
}

function policyPage(lang, app, { legacyPath = null } = {}) {
  const fr = lang === "fr";
  const canonicalPath = `/privacy/${policySlug(app)}/`;
  const path = legacyPath || canonicalPath;
  const policy = policies[policySlug(app)];
  const sections = policy.sections[lang].map((section, index) => `<section class="policy-section"><h2><span>${String(index + 1).padStart(2, "0")}</span>${esc(section.title)}</h2>${(section.paragraphs || []).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : ""}</section>`).join("");
  const content = `<section class="policy-hero"><div class="shell policy-hero-grid"><div>${iconMarkup(app, "product-icon")}<p class="eyebrow">${app.platform} · Studio501</p><h1>${fr ? "Politique de confidentialité" : "Privacy policy"}<span>${esc(app.name)}</span></h1><p class="lead">${esc(policy.summary[lang])}</p><p class="updated"><strong>${labels[lang].updated} :</strong> ${esc(policy.lastUpdated[lang])}</p></div><aside class="policy-summary"><span class="status status--${app.status}">${esc(app.statusLabel[lang])}</span><p>${esc(app.privacyLead[lang])}</p>${app.storeUrl ? `<a class="text-link" href="${app.storeUrl}" target="_blank" rel="noopener">${esc(app.storeLabel[lang])} ↗</a>` : ""}</aside></div></section><div class="shell policy-layout"><nav class="policy-nav" aria-label="${fr ? "Sommaire" : "Contents"}"><a href="${langPath(lang, "/privacy/")}">← ${fr ? "Toutes les politiques" : "All policies"}</a><a href="${langPath(lang, `/apps/${app.slug}/`)}">${fr ? "Fiche de l’application" : "Application page"}</a><a href="mailto:${site.primaryEmail}">Contact Studio501</a></nav><article class="policy-content">${sections}<section class="policy-contact"><h2>${fr ? "Contact" : "Contact"}</h2><p>${fr ? "Pour toute question concernant cette politique, contactez Studio501 :" : "For any question about this policy, contact Studio501:"} <a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a>.</p><p>${fr ? "L’adresse studio501.dev@gmail.com reste également disponible pour les fiches Store existantes." : "studio501.dev@gmail.com also remains available for existing Store listings."}</p></section></article></div>`;
  const html = layout({ lang, path: canonicalPath, current: "privacy", title: `${fr ? "Confidentialité" : "Privacy"} — ${app.name} — Studio501`, description: policy.summary[lang], content });
  if (!legacyPath) return html;
  return html.replace(`<link rel="canonical" href="${absolute(langPath(lang, canonicalPath))}">`, `<link rel="canonical" href="${absolute(langPath(lang, canonicalPath))}">`).replace(new RegExp(`href="${alternatePath(lang, canonicalPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `href="${alternatePath(lang, canonicalPath)}"`);
}

function supportPage(lang) {
  const fr = lang === "fr";
  const path = "/support/";
  const cards = apps.map((app) => `<article class="support-app" data-reveal>${iconMarkup(app)}<div><h2>${esc(app.name)}</h2><p>${esc(app.summary[lang])}</p><a class="button button--secondary" href="mailto:${site.primaryEmail}?subject=${encodeURIComponent(`Support ${app.name}`)}">${fr ? "Contacter le support" : "Contact support"}</a></div></article>`).join("");
  const content = `${pageIntro("Studio501", "Support", fr ? "Choisissez l’application concernée et décrivez précisément votre question. Nous vous répondrons par e-mail." : "Choose the relevant application and describe your question precisely. We will reply by email.")}<section class="section"><div class="shell support-list">${cards}</div></section><section class="section section--compact"><div class="shell contact-grid"><article><p class="eyebrow">${fr ? "Contact principal" : "Primary contact"}</p><h2><a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a></h2><p>${fr ? "Adresse officielle du site Studio501." : "Official Studio501 website address."}</p></article><article><p class="eyebrow">${fr ? "Fiches Store existantes" : "Existing Store listings"}</p><h2><a href="mailto:${site.storeEmail}">${site.storeEmail}</a></h2><p>${fr ? "Cette adresse reste active pour assurer la continuité des applications déjà publiées." : "This address remains active for continuity with already published applications."}</p></article></div></section>`;
  return layout({ lang, path, current: "support", title: "Support — Studio501", description: fr ? "Support centralisé pour les applications Windows et Android Studio501." : "Central support for Studio501 Windows and Android applications.", content });
}

function aboutPage(lang) {
  const fr = lang === "fr";
  const path = "/about/";
  const content = `${pageIntro(fr ? "Studio indépendant français" : "Independent French studio", fr ? "Des logiciels utiles, conçus avec attention." : "Useful software, designed with care.", fr ? "Studio501 développe et publie des applications Windows et Android qui répondent à des besoins concrets sans ajouter de complexité inutile." : "Studio501 develops and publishes Windows and Android applications that answer concrete needs without adding needless complexity.")}<section class="section"><div class="shell about-grid"><article data-reveal><p class="eyebrow">Studio501</p><h2>${fr ? "Une identité, deux plateformes." : "One identity, two platforms."}</h2><p>${fr ? "Le studio réunit ses applications Windows et Android sous une même exigence : une interface claire, des fonctions utiles et une gestion raisonnable des données." : "The studio brings its Windows and Android applications together under one standard: a clear interface, useful features and sensible data handling."}</p><p>${fr ? "Lorsque l’application peut fonctionner localement, ce choix est privilégié. Les comptes, la publicité et les services en ligne ne sont pas ajoutés par défaut." : "When an application can work locally, that approach is preferred. Accounts, advertising and online services are not added by default."}</p></article><aside class="identity-card" data-reveal><span class="brand-mark brand-mark--large" aria-hidden="true">5</span><dl><div><dt>${fr ? "Studio" : "Studio"}</dt><dd>Studio501</dd></div><div><dt>${fr ? "Entreprise éditrice" : "Publishing business"}</dt><dd>Candela</dd></div><div><dt>${fr ? "Pays" : "Country"}</dt><dd>France</dd></div><div><dt>${fr ? "Plateformes" : "Platforms"}</dt><dd>Windows · Android</dd></div></dl></aside></div></section><section class="section section--tinted"><div class="shell statement"><p>${fr ? "« Faire simple ne veut pas dire faire moins. Cela veut dire choisir ce qui compte. »" : "“Keeping things simple does not mean doing less. It means choosing what matters.”"}</p></div></section>`;
  return layout({ lang, path, current: "about", title: fr ? "À propos — Studio501" : "About — Studio501", description: fr ? "Studio501, studio indépendant français d’applications Windows et Android, édité par Candela." : "Studio501, an independent French Windows and Android app studio published by Candela.", content });
}

function notFoundPage(lang) {
  const fr = lang === "fr";
  const path = "/404.html";
  return `${head({ lang, path, title: fr ? "Page introuvable — Studio501" : "Page not found — Studio501", description: fr ? "Cette page n’existe pas ou a été déplacée." : "This page does not exist or has moved." })}${header(lang, "", path)}<main id="main"><section class="not-found"><div class="shell"><span class="brand-mark brand-mark--large">5</span><p class="eyebrow">${fr ? "Erreur 404" : "Error 404"}</p><h1>${fr ? "Cette page reste à inventer." : "This page is yet to be invented."}</h1><p>${fr ? "La page demandée n’existe pas ou a été déplacée." : "The requested page does not exist or has moved."}</p><a class="button button--primary" href="${langPath(lang, "/")}">${fr ? "Retour à l’accueil" : "Back to home"}</a></div></section></main>${footer(lang)}`;
}

async function output(path, content) {
  const target = join(root, path.replace(/^\//, ""));
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, content, "utf8");
}

async function build() {
  for (const directory of ["windows", "android", "apps", "privacy", "support", "about", "en"]) await rm(join(root, directory), { recursive: true, force: true });
  for (const lang of languages) {
    const prefix = lang === "fr" ? "" : "en/";
    await output(`${prefix}index.html`, homePage(lang));
    await output(`${prefix}windows/index.html`, platformPage(lang, "windows"));
    await output(`${prefix}android/index.html`, platformPage(lang, "android"));
    await output(`${prefix}apps/index.html`, applicationsPage(lang));
    await output(`${prefix}privacy/index.html`, privacyCentrePage(lang));
    await output(`${prefix}support/index.html`, supportPage(lang));
    await output(`${prefix}about/index.html`, aboutPage(lang));
    for (const app of apps) {
      await output(`${prefix}apps/${app.slug}/index.html`, applicationPage(lang, app));
      await output(`${prefix}privacy/${policySlug(app)}/index.html`, policyPage(lang, app));
    }
  }
  await output("privacy.html", policyPage("fr", apps[0], { legacyPath: "/privacy.html" }));
  await output("universal-converter-privacy.html", policyPage("fr", apps[1], { legacyPath: "/universal-converter-privacy.html" }));
  await output("404.html", notFoundPage("fr"));
  await output("en/404.html", notFoundPage("en"));
  const publicApps = apps.map((app) => ({ slug: app.slug, name: app.name, platform: app.platform, status: app.status, icon: app.icon, summary: app.summary, features: app.features, screenshots: app.screenshots, storeUrl: app.storeUrl, privacyUrl: `${site.baseUrl}/privacy/${policySlug(app)}/` }));
  await output("apps.json", JSON.stringify(publicApps, null, 2));
  const canonicalPaths = ["/", "/windows/", "/android/", "/apps/", "/privacy/", "/support/", "/about/", ...apps.flatMap((app) => [`/apps/${app.slug}/`, `/privacy/${policySlug(app)}/`])];
  const sitemapUrls = canonicalPaths.flatMap((path) => [langPath("fr", path), langPath("en", path)]).map((path) => `  <url><loc>${absolute(path)}</loc></url>`).join("\n");
  await output("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`);
  await output("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.baseUrl}/sitemap.xml\n`);
  await output("site.webmanifest", JSON.stringify({ name: "Studio501", short_name: "Studio501", description: "Applications Windows et Android", start_url: "/", display: "standalone", background_color: "#0b1020", theme_color: "#0b1020", icons: [{ src: "/assets/favicon.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }] }, null, 2));
  await output("README.md", `# Studio501\n\nSite officiel statique de Studio501 pour Windows et Android, publié avec GitHub Pages sur https://studio501.fr/.\n\n- Source structurée : \`source/apps.mjs\` et \`source/privacy.mjs\`\n- Génération : \`node scripts/build.mjs\`\n- Validation : \`node scripts/validate.mjs\`\n`);
}

await build();
