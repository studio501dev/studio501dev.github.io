import { site } from "../source/apps.mjs";
import { subscriptionPolicyLanguages, subscriptionPolicyTranslations } from "../source/mes-abonnements-policy-locales.mjs";

const esc = (value = "") => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const absolute = (path) => `${site.baseUrl}${path}`;
export const additionalSubscriptionPolicyPaths = subscriptionPolicyLanguages.filter((item) => subscriptionPolicyTranslations[item.key]).map((item) => item.path);

function alternates() {
  return subscriptionPolicyLanguages.map((item) => `  <link rel="alternate" hreflang="${item.tag}" href="${absolute(item.path)}">`).join("\n") + `\n  <link rel="alternate" hreflang="x-default" href="${absolute(subscriptionPolicyLanguages[0].path)}">`;
}

function languageNavigation(key) {
  const current = subscriptionPolicyLanguages.find((item) => item.key === key);
  return `<nav class="policy-language-switcher shell" aria-label="${esc(current.navLabel)}"><span>${esc(current.navLabel)}</span><ul>${subscriptionPolicyLanguages.map((item) => `<li><a href="${item.path}" lang="${item.tag}" hreflang="${item.tag}"${item.key === key ? ' aria-current="page"' : ""}>${esc(item.name)}</a></li>`).join("")}</ul></nav>`;
}

// Preserve the existing FR/EN policy text and site shell; only add locale metadata and navigation.
export function decorateSubscriptionPolicy(key, html) {
  const current = subscriptionPolicyLanguages.find((item) => item.key === key);
  return html
    .replace(`<html lang="${key}">`, `<html lang="${current.tag}">`)
    .replaceAll('content="en_GB"', 'content="en_US"')
    .replace(/  <link rel="alternate" hreflang="[^"]+" href="[^"]+">\r?\n/g, "")
    .replace(/(<link rel="canonical" href="[^"]+">)/, `$1\n${alternates()}`)
    .replace('</head>', '  <link rel="stylesheet" href="/assets/subscription-policy.css">\n</head>')
    .replace('<main id="main">', `<main id="main">${languageNavigation(key)}`);
}

export function renderSubscriptionPolicy(key) {
  const locale = subscriptionPolicyLanguages.find((item) => item.key === key);
  const t = subscriptionPolicyTranslations[key];
  const url = absolute(locale.path);
  const title = `${t.title} — Mes Abonnements — Studio501`;
  const sections = t.sections.map((section, index) => `<section class="policy-section"><h2><span>${String(index + 1).padStart(2, "0")}</span>${esc(section.title)}</h2>${section.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}${(section.links || []).map((link) => `<p><a href="${esc(link.href)}" target="_blank" rel="noopener">${esc(link.label)}</a></p>`).join("")}</section>`).join("\n");
  return `<!doctype html>
<html lang="${locale.tag}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(t.summary)}">
  <meta name="theme-color" content="#0b1020">
  <meta name="color-scheme" content="dark light">
  <link rel="canonical" href="${url}">
${alternates()}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Studio501">
  <meta property="og:locale" content="${locale.tag.replace("-", "_")}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(t.summary)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${absolute("/assets/og.png")}">
  <link rel="icon" type="image/png" href="/assets/favicon.png">
  <link rel="stylesheet" href="/assets/site.css">
  <link rel="stylesheet" href="/assets/subscription-policy.css">
</head>
<body>
  <a class="skip-link" href="#main">${esc(t.skip)}</a>
  <header class="subscription-policy-header shell"><a class="brand" href="/en/" aria-label="Studio501"><span class="brand-mark" aria-hidden="true">5</span><span>Studio501</span></a><nav aria-label="${esc(t.linksLabel)}"><a href="/en/apps/mes-abonnements/" hreflang="en">${esc(t.appLink)}</a><a href="/en/support/mes-abonnements/" hreflang="en">${esc(t.supportLink)}</a></nav></header>
  <main id="main">
    ${languageNavigation(key)}
    <section class="policy-hero"><div class="shell"><img class="product-icon" src="/assets/apps/mes-abonnements/icon.png" width="112" height="112" alt="Mes Abonnements"><p class="eyebrow">Android · Studio501</p><h1>${esc(t.title)}<span>Mes Abonnements</span></h1><p class="lead">${esc(t.summary)}</p><p class="updated"><strong>${esc(t.updatedLabel)} :</strong> ${esc(t.updated)}</p></div></section>
    <article class="policy-content subscription-policy-content shell">
      ${sections}
      <section class="policy-contact"><h2>${esc(t.contactTitle)}</h2><p>${esc(t.contactLead)} <a href="mailto:${site.primaryEmail}">${site.primaryEmail}</a>.</p><p>${esc(t.storeContact)}</p></section>
    </article>
  </main>
  <footer class="subscription-policy-footer shell"><span>Studio501 · Nanouk Candela</span><nav aria-label="${esc(t.linksLabel)}"><a href="/en/mentions-legales/" hreflang="en">${esc(t.legalLink)}</a><a href="/en/confidentialite/" hreflang="en">${esc(t.websiteLink)}</a></nav></footer>
</body>
</html>
`;
}
