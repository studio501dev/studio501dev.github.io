import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { apps, site } from "../source/apps.mjs";
import { policies } from "../source/privacy.mjs";

const root = resolve(import.meta.dirname, "..");
const languages = ["fr", "en"];

const labels = {
  fr: {
    nav: { home: "Accueil", windows: "Windows", android: "Android", apps: "Applications", privacy: "Confidentialité", support: "Support", about: "À propos" },
    menu: "Menu", language: "EN", platform: "Plateforme", discover: "Découvrir", allApps: "Toutes les applications", privacyPolicy: "Politique de confidentialité", support: "Obtenir de l’aide", backApps: "Retour aux applications", updated: "Dernière mise à jour", features: "Fonctions principales", screenshots: "Captures de l’application", noScreens: "Visuels à venir avec la publication officielle.", local: "Une approche respectueuse des données", footer: "Applications Windows et Android conçues en France.", publisher: "Studio501 — Nanouk Candela, entrepreneur individuel.", storeContact: "Adresse de support conservée pour les fiches Store :", appPrivacy: "Confidentialité des applications", websitePrivacy: "Politique de confidentialité", legalNotice: "Mentions légales", skip: "Aller au contenu", current: "Page actuelle", openExternal: "Ouvre un site externe" },
  en: {
    nav: { home: "Home", windows: "Windows", android: "Android", apps: "Applications", privacy: "Privacy", support: "Support", about: "About" },
    menu: "Menu", language: "FR", platform: "Platform", discover: "Discover", allApps: "All applications", privacyPolicy: "Privacy policy", support: "Get support", backApps: "Back to applications", updated: "Last updated", features: "Key features", screenshots: "Application screenshots", noScreens: "Visuals will be added with the official release.", local: "A privacy-conscious approach", footer: "Windows and Android applications designed in France.", publisher: "Studio501 — Nanouk Candela, sole proprietor.", storeContact: "Support address retained for Store listings:", appPrivacy: "Application privacy", websitePrivacy: "Website privacy policy", legalNotice: "Legal notice", skip: "Skip to content", current: "Current page", openExternal: "Opens an external website" },
};

const esc = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const langPath = (lang, path) => lang === "fr" ? path : path === "/" ? "/en/" : `/en${path}`;
const alternatePath = (lang, path) => langPath(lang === "fr" ? "en" : "fr", path);
const absolute = (path) => `${site.baseUrl}${path}`;
const policySlug = (app) => app.privacySlug || app.slug;
const screenshotsFor = (app, lang) => Array.isArray(app.screenshots) ? app.screenshots : app.screenshots?.[lang] || [];

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
    <div><strong>Studio501</strong><a href="${langPath(lang, "/privacy/")}">${t.appPrivacy}</a><a href="${langPath(lang, "/confidentialite/")}">${t.websitePrivacy}</a><a href="${langPath(lang, "/mentions-legales/")}">${t.legalNotice}</a><a href="${langPath(lang, "/support/")}">${t.nav.support}</a><a href="${langPath(lang, "/about/")}">${t.nav.about}</a></div>
    <div><strong>Contact</strong><a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a><span class="footer-note">${t.storeContact}<br>${site.storeEmail}</span></div>
  </div>
  <div class="shell footer-bottom"><span>© ${year} Studio501 — Nanouk Candela EI</span><span>France · FR / EN</span></div>
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
  const publishedAndroidCount = apps.filter((app) => app.platformKey === "android" && app.status === "published").length;
  const structuredData = [{ "@context": "https://schema.org", "@type": "Organization", name: site.name, legalName: site.publisher, url: site.baseUrl, email: site.primaryEmail, identifier: site.siren, areaServed: "Worldwide", address: { "@type": "PostalAddress", streetAddress: site.address.street, postalCode: site.address.postalCode, addressLocality: site.address.city, addressCountry: site.address.countryCode } }];
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
        <div class="floating-app floating-app--three">${iconMarkup(apps[3], "floating-icon")}<span>Budget<br>Assistant</span></div>
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
  <section class="section platform-split"><div class="shell split-grid"><article class="platform-panel platform-panel--windows" data-reveal><p class="eyebrow">Windows</p><h2>${fr ? "Des outils complets pour le PC." : "Complete tools for your PC."}</h2><p>${fr ? "Créez des procédures interactives avec Decision Tree Studio et préparez vos conversions locales avec Universal Converter Studio." : "Create interactive procedures with Decision Tree Studio and prepare local conversions with Universal Converter Studio."}</p><a class="button button--light" href="${langPath(lang, "/windows/")}">${fr ? "Explorer Windows" : "Explore Windows"}</a></article><article class="platform-panel platform-panel--android" data-reveal><p class="eyebrow">Android · Google Play</p><h2>${fr ? `${publishedAndroidCount} applications déjà publiées.` : `${publishedAndroidCount} applications already published.`}</h2><p>${fr ? "Des outils premium, locaux et sans publicité pour le quotidien." : "Premium, local and ad-free tools for everyday life."}</p><a class="button button--light" href="${langPath(lang, "/android/")}">${fr ? "Explorer Android" : "Explore Android"}</a></article></div></section>`;
  return layout({ lang, path, current: "home", title, description, content, structuredData });
}

function platformPage(lang, platformKey) {
  const fr = lang === "fr";
  const isWindows = platformKey === "windows";
  const path = isWindows ? "/windows/" : "/android/";
  const platformApps = apps.filter((app) => app.platformKey === platformKey);
  const publishedPlatformCount = platformApps.filter((app) => app.status === "published").length;
  const title = isWindows ? (fr ? "Applications Windows — Studio501" : "Windows applications — Studio501") : (fr ? "Applications Android — Studio501" : "Android applications — Studio501");
  const description = isWindows ? (fr ? "Applications Studio501 pour Windows : Decision Tree Studio et Universal Converter Studio." : "Studio501 applications for Windows: Decision Tree Studio and Universal Converter Studio.") : (fr ? "Studio501 sur Google Play : Ma Liste de Courses, Budget Assistant, Widget Pilulier et MyHomeAssistant." : "Studio501 on Google Play: Ma Liste de Courses, Budget Assistant, Widget Pilulier and MyHomeAssistant.");
  const intro = isWindows ? {
    kicker: "Studio501 · Windows", heading: fr ? "Des logiciels Windows qui restent clairs." : "Windows software that stays clear.", lead: fr ? "Des outils premium pour créer, organiser et convertir, avec un fonctionnement local au cœur de l’expérience." : "Premium tools for creating, organising and converting, with local operation at the core of the experience.",
  } : {
    kicker: "Studio501 · Google Play", heading: fr ? "Applications Android" : "Android applications", lead: fr ? `${publishedPlatformCount} applications premium publiées sur Google Play, sans publicité et sans compte obligatoire.` : `${publishedPlatformCount} premium applications published on Google Play, with no advertising or mandatory account.`,
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
  const portraitScreenshots = app.screenshotAspect === "portrait";
  const appScreenshots = screenshotsFor(app, lang);
  const screenshots = appScreenshots.length ? `<div class="screenshot-rail${portraitScreenshots ? " screenshot-rail--portrait" : ""}">${appScreenshots.map((source, index) => `<figure><img src="${source}" alt="${esc(app.name)} — ${fr ? "capture" : "screenshot"} ${index + 1}" loading="lazy" width="${portraitScreenshots ? "333" : "1052"}" height="592"><figcaption>${app.name} · ${index + 1}/${appScreenshots.length}</figcaption></figure>`).join("")}</div>` : `<div class="empty-visual">${iconMarkup(app)}<p>${t.noScreens}</p></div>`;
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

function legalNoticePage(lang) {
  const fr = lang === "fr";
  const path = "/mentions-legales/";
  const hostAddress = fr ? site.host.address : site.host.address.replace("États-Unis", "United States");
  const mediatorSection = site.mediator ? `<section class="policy-section" id="mediation"><h2><span>05</span>${fr ? "Médiation de la consommation" : "Consumer mediation"}</h2><p>${esc(site.mediator.name)} — ${esc(site.mediator.address)} — <a href="${esc(site.mediator.url)}" target="_blank" rel="noopener">${esc(site.mediator.url)}</a></p></section>` : "";
  const content = `${pageIntro("Studio501", fr ? "Mentions légales" : "Legal notice", fr ? "Informations légales relatives à l’édition et à l’hébergement de Studio501.fr." : "Legal information about the publisher and hosting of Studio501.fr.")}
  <div class="shell policy-layout">
    <nav class="policy-nav" aria-label="${fr ? "Sommaire" : "Contents"}"><a href="#editeur">${fr ? "Éditeur" : "Publisher"}</a><a href="#hebergement">${fr ? "Hébergement" : "Hosting"}</a><a href="#propriete">${fr ? "Propriété intellectuelle" : "Intellectual property"}</a><a href="#acquisition">${fr ? "Acquisition des applications" : "Application acquisition"}</a></nav>
    <article class="policy-content">
      <p class="updated"><strong>${labels[lang].updated} :</strong> ${fr ? "23 août 2026" : "23 August 2026"}</p>
      <section class="policy-section" id="editeur"><h2><span>01</span>${fr ? "Éditeur du site" : "Website publisher"}</h2>
        <p>${fr ? "Studio501 est le nom commercial sous lequel Nanouk Candela, entrepreneur individuel, développe et publie des applications." : "Studio501 is the trading name under which Nanouk Candela, sole proprietor, develops and publishes applications."}</p>
        <ul><li>${fr ? "Exploitant" : "Operator"} : Nanouk Candela — ${fr ? "entrepreneur individuel (EI)" : "sole proprietor"}</li><li>${fr ? "Nom commercial" : "Trading name"} : Studio501</li><li>SIREN : ${site.siren}</li><li>SIRET : ${site.siret}</li><li>${fr ? "Immatriculation" : "Registration"} : ${fr ? site.register : "French National Business Register (RNE)"}</li><li>${fr ? "Code APE" : "Business activity code"} : ${site.activityCode} — ${fr ? site.activityLabel : "Application software publishing"}</li><li>${fr ? "Adresse professionnelle" : "Business address"} : ${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}</li><li>${fr ? "Courriel" : "Email"} : <a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a></li></ul>
        <p>${fr ? "Responsable de la publication : Nanouk Candela." : "Publication manager: Nanouk Candela."}</p>
      </section>
      <section class="policy-section" id="hebergement"><h2><span>02</span>${fr ? "Hébergement" : "Hosting"}</h2><p>${site.host.name} — ${site.host.company}<br>${esc(hostAddress)}<br><a href="${site.host.supportUrl}" target="_blank" rel="noopener">${fr ? "Assistance GitHub" : "GitHub Support"}</a></p></section>
      <section class="policy-section" id="propriete"><h2><span>03</span>${fr ? "Propriété intellectuelle" : "Intellectual property"}</h2><p>${fr ? "Les textes, interfaces et éléments graphiques originaux créés pour Studio501 sont protégés par les droits applicables. Toute reproduction non autorisée est interdite." : "Original text, interfaces and graphic elements created for Studio501 are protected by applicable rights. Unauthorised reproduction is prohibited."}</p><p>${fr ? "Les marques, noms, logos et éléments appartenant à Microsoft, Windows, Microsoft Store, Google, Android, Google Play ou à d’autres tiers restent la propriété de leurs titulaires respectifs. Leur mention sert uniquement à identifier les plateformes concernées." : "Microsoft, Windows, Microsoft Store, Google, Android, Google Play and other third-party marks, names, logos and elements remain the property of their respective owners. They are mentioned only to identify the relevant platforms."}</p></section>
      <section class="policy-section" id="acquisition"><h2><span>04</span>${fr ? "Acquisition des applications" : "Application acquisition"}</h2><p>${fr ? "Studio501.fr ne permet ni commande ni paiement direct. Les boutons d’acquisition ouvrent Microsoft Store ou Google Play, où s’appliquent les informations et conditions de la plateforme concernée." : "Studio501.fr does not process orders or payments. Acquisition buttons open Microsoft Store or Google Play, where the information and terms of the relevant platform apply."}</p></section>
${mediatorSection}
    </article>
  </div>`;
  return layout({ lang, path, current: "", title: fr ? "Mentions légales — Studio501" : "Legal notice — Studio501", description: fr ? "Mentions légales et informations d’hébergement de Studio501.fr." : "Legal and hosting information for Studio501.fr.", content });
}

function websitePrivacyPage(lang) {
  const fr = lang === "fr";
  const path = "/confidentialite/";
  const content = `${pageIntro("Studio501.fr", fr ? "Politique de confidentialité" : "Website privacy policy", fr ? "Cette politique concerne uniquement le site Studio501.fr." : "This policy applies only to the Studio501.fr website.")}
  <div class="shell policy-layout">
    <nav class="policy-nav" aria-label="${fr ? "Sommaire" : "Contents"}"><a href="#responsable">${fr ? "Responsable" : "Controller"}</a><a href="#navigation">${fr ? "Navigation" : "Browsing"}</a><a href="#contact">Contact</a><a href="#cookies">Cookies</a><a href="#droits">${fr ? "Vos droits" : "Your rights"}</a><a href="${langPath(lang, "/privacy/")}">${fr ? "Confidentialité des applications" : "Application privacy"}</a></nav>
    <article class="policy-content">
      <p class="updated"><strong>${labels[lang].updated} :</strong> ${fr ? "23 août 2026" : "23 August 2026"}</p>
      <section class="policy-section" id="responsable"><h2><span>01</span>${fr ? "Responsable du traitement" : "Data controller"}</h2><p>${fr ? "Nanouk Candela, entrepreneur individuel exerçant sous le nom commercial Studio501." : "Nanouk Candela, sole proprietor trading as Studio501."}</p><p>${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}<br><a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a></p></section>
      <section class="policy-section" id="navigation"><h2><span>02</span>${fr ? "Données liées à la navigation" : "Browsing data"}</h2><p>${fr ? "Studio501.fr ne comporte ni compte utilisateur, ni formulaire, ni publicité, ni outil de mesure d’audience, ni pixel de suivi. Studio501 ne reçoit donc aucune donnée directement pendant une simple consultation du site." : "Studio501.fr has no user account, form, advertising, audience measurement tool or tracking pixel. Studio501 therefore receives no data directly during a simple website visit."}</p><p>${fr ? "Le site est hébergé par GitHub Pages. GitHub indique enregistrer et conserver l’adresse IP des visiteurs pour des raisons de sécurité, qu’ils soient ou non connectés à GitHub." : "The site is hosted by GitHub Pages. GitHub states that visitors’ IP addresses are logged and stored for security purposes, whether or not they are signed in to GitHub."} <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" target="_blank" rel="noopener">${fr ? "Documentation GitHub Pages" : "GitHub Pages documentation"}</a>. ${fr ? "GitHub étant un prestataire américain, ce traitement peut impliquer les États-Unis et relève également de" : "As GitHub is a US provider, this processing may involve the United States and is also governed by"} <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">${fr ? "la déclaration de confidentialité de GitHub" : "GitHub’s privacy statement"}</a>.</p></section>
      <section class="policy-section" id="contact"><h2><span>03</span>${fr ? "Contact volontaire par courriel" : "Voluntary contact by email"}</h2><p>${fr ? "Si vous choisissez d’écrire à Studio501, votre adresse électronique, le contenu du message et les informations que vous fournissez sont utilisés uniquement pour répondre à votre demande et en assurer le suivi." : "If you choose to email Studio501, your email address, message content and the information you provide are used only to answer and follow up your request."}</p><p>${fr ? "Ce traitement repose sur l’intérêt légitime de Studio501 à répondre aux demandes et, lorsque la demande concerne un contrat, sur les mesures précontractuelles ou l’exécution de ce contrat. Les messages sont conservés le temps nécessaire au traitement et au suivi de la demande, puis supprimés ou archivés uniquement lorsqu’une obligation légale ou un litige le justifie. Ils sont accessibles à Studio501 et aux prestataires techniques de messagerie nécessaires à leur transmission." : "This processing is based on Studio501’s legitimate interest in answering requests and, where the request concerns a contract, on pre-contractual steps or performance of that contract. Messages are retained only as long as needed to handle and follow up the request, then deleted or archived only where a legal obligation or dispute requires it. They are accessible to Studio501 and to the technical email providers needed for transmission."}</p></section>
      <section class="policy-section" id="liens"><h2><span>04</span>${fr ? "Liens vers les boutiques" : "Store links"}</h2><p>${fr ? "Les liens vers Microsoft Store et Google Play sont de simples liens externes. Aucune donnée n’est envoyée à ces plateformes par Studio501.fr avant que vous choisissiez de cliquer. Après le clic, la politique de la plateforme concernée s’applique." : "Microsoft Store and Google Play buttons are simple external links. Studio501.fr sends no data to those platforms before you choose to click. After the click, the relevant platform’s policy applies."}</p></section>
      <section class="policy-section" id="cookies"><h2><span>05</span>Cookies</h2><p>${fr ? "Studio501 n’utilise aucun cookie publicitaire, cookie de suivi ou traceur soumis au consentement sur ce site. Aucun bandeau de consentement n’est donc affiché." : "Studio501 uses no advertising cookie, tracking cookie or consent-based tracker on this website. No consent banner is therefore displayed."}</p></section>
      <section class="policy-section" id="droits"><h2><span>06</span>${fr ? "Vos droits" : "Your rights"}</h2><p>${fr ? "Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation de vos données, vous opposer à leur traitement et exercer votre droit à la portabilité lorsqu’il s’applique, en écrivant à" : "You may request access, rectification, erasure or restriction of your data, object to processing and exercise data portability where applicable by writing to"} <a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a>. ${fr ? "Vous pouvez également adresser une réclamation à la" : "You may also lodge a complaint with the"} <a href="https://www.cnil.fr/" target="_blank" rel="noopener">CNIL</a>.</p></section>
      <section class="policy-contact"><h2>${fr ? "Politiques des applications" : "Application policies"}</h2><p>${fr ? "Les applications Windows et Android disposent de politiques distinctes, qui ne sont pas remplacées par cette page." : "Windows and Android applications have separate policies, which are not replaced by this page."}</p><a href="${langPath(lang, "/privacy/")}">${fr ? "Consulter les politiques des applications" : "View application privacy policies"}</a></section>
    </article>
  </div>`;
  return layout({ lang, path, current: "", title: fr ? "Politique de confidentialité du site — Studio501" : "Website privacy policy — Studio501", description: fr ? "Traitements de données liés au site Studio501.fr et au contact par courriel." : "Data processing related to Studio501.fr and voluntary email contact.", content });
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
  const content = `${pageIntro(fr ? "Studio indépendant français" : "Independent French studio", fr ? "Des logiciels utiles, conçus avec attention." : "Useful software, designed with care.", fr ? "Studio501 développe et publie des applications Windows et Android qui répondent à des besoins concrets sans ajouter de complexité inutile." : "Studio501 develops and publishes Windows and Android applications that answer concrete needs without adding needless complexity.")}<section class="section"><div class="shell about-grid"><article data-reveal><p class="eyebrow">Studio501</p><h2>${fr ? "Une identité, deux plateformes." : "One identity, two platforms."}</h2><p>${fr ? "Le studio réunit ses applications Windows et Android sous une même exigence : une interface claire, des fonctions utiles et une gestion raisonnable des données." : "The studio brings its Windows and Android applications together under one standard: a clear interface, useful features and sensible data handling."}</p><p>${fr ? "Lorsque l’application peut fonctionner localement, ce choix est privilégié. Les comptes, la publicité et les services en ligne ne sont pas ajoutés par défaut." : "When an application can work locally, that approach is preferred. Accounts, advertising and online services are not added by default."}</p></article><aside class="identity-card" data-reveal><span class="brand-mark brand-mark--large" aria-hidden="true">5</span><dl><div><dt>${fr ? "Studio" : "Studio"}</dt><dd>Studio501</dd></div><div><dt>${fr ? "Exploitant" : "Operator"}</dt><dd>Nanouk Candela</dd></div><div><dt>${fr ? "Statut" : "Status"}</dt><dd>${fr ? "Entrepreneur individuel" : "Sole proprietor"}</dd></div><div><dt>${fr ? "Pays" : "Country"}</dt><dd>France</dd></div><div><dt>${fr ? "Plateformes" : "Platforms"}</dt><dd>Windows · Android</dd></div></dl></aside></div></section><section class="section section--tinted"><div class="shell statement"><p>${fr ? "« Faire simple ne veut pas dire faire moins. Cela veut dire choisir ce qui compte. »" : "“Keeping things simple does not mean doing less. It means choosing what matters.”"}</p></div></section>`;
  return layout({ lang, path, current: "about", title: fr ? "À propos — Studio501" : "About — Studio501", description: fr ? "Studio501, studio indépendant français d’applications Windows et Android exploité par Nanouk Candela, entrepreneur individuel." : "Studio501, an independent French Windows and Android app studio operated by Nanouk Candela, sole proprietor.", content });
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
  for (const directory of ["windows", "android", "apps", "privacy", "confidentialite", "mentions-legales", "support", "about", "en"]) await rm(join(root, directory), { recursive: true, force: true });
  for (const lang of languages) {
    const prefix = lang === "fr" ? "" : "en/";
    await output(`${prefix}index.html`, homePage(lang));
    await output(`${prefix}windows/index.html`, platformPage(lang, "windows"));
    await output(`${prefix}android/index.html`, platformPage(lang, "android"));
    await output(`${prefix}apps/index.html`, applicationsPage(lang));
    await output(`${prefix}privacy/index.html`, privacyCentrePage(lang));
    await output(`${prefix}confidentialite/index.html`, websitePrivacyPage(lang));
    await output(`${prefix}mentions-legales/index.html`, legalNoticePage(lang));
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
  const canonicalPaths = ["/", "/windows/", "/android/", "/apps/", "/privacy/", "/confidentialite/", "/mentions-legales/", "/support/", "/about/", ...apps.flatMap((app) => [`/apps/${app.slug}/`, `/privacy/${policySlug(app)}/`])];
  const sitemapUrls = canonicalPaths.flatMap((path) => [langPath("fr", path), langPath("en", path)]).map((path) => `  <url><loc>${absolute(path)}</loc></url>`).join("\n");
  await output("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`);
  await output("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.baseUrl}/sitemap.xml\n`);
  await output("site.webmanifest", JSON.stringify({ name: "Studio501", short_name: "Studio501", description: "Applications Windows et Android", start_url: "/", display: "standalone", background_color: "#0b1020", theme_color: "#0b1020", icons: [{ src: "/assets/favicon.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }] }, null, 2));
  await output("README.md", `# Studio501\n\nSite officiel statique de Studio501 pour Windows et Android, publié avec GitHub Pages sur https://studio501.fr/.\n\n- Source structurée : \`source/apps.mjs\` et \`source/privacy.mjs\`\n- Génération : \`node scripts/build.mjs\`\n- Validation : \`node scripts/validate.mjs\`\n`);
}

await build();
