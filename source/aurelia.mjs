export const aureliaApp = {
  slug: "aurelia",
  name: "Aurélia — Les Jardins oubliés",
  platform: "Android", platformKey: "android", applicationCategory: "GameApplication",
  status: "preparing",
  statusLabel: { fr: "Publication en préparation", en: "Preparing for release" },
  storeLabel: { fr: "Bientôt sur Google Play", en: "Coming soon on Google Play" },
  packageName: "com.studio501.aurelia",
  icon: "/assets/apps/aurelia/icon.png",
  screenshots: ["/assets/apps/aurelia/01-fusionner.png", "/assets/apps/aurelia/02-restaurer.png", "/assets/apps/aurelia/03-jardin.png"], accent: "mint",
  summary: {
    fr: "Fusionnez des objets enchantés et redonnez vie à des jardins oubliés. Sans pub, sans énergie, hors ligne.",
    en: "Merge enchanted objects and bring forgotten gardens back to life. Offline, with no ads or energy timer.",
  },
  description: {
    fr: ["Une graine devient une pousse, puis une fleur. Deux objets identiques se transforment en une création plus précieuse : dans Aurélia, chaque fusion rapproche un jardin de son réveil.", "Restaurez les lieux, découvrez les familles d’objets et développez votre atelier. Commandes courtes, créations rares et distributeurs spéciaux vous invitent à choisir comment utiliser la place sur le plateau.", "Jeu en français, achat unique prévu à 1 € en France, sans publicité, abonnement ni achat intégré. Pas de jauge d’énergie : jouez à votre rythme, même hors connexion. Android 8 ou ultérieur avec un composant Android System WebView ou Chrome à jour."],
    en: ["A seed becomes a shoot, then a flower. Merge two matching objects into something more precious: every creation brings a forgotten garden closer to life.", "Restore each location, discover item families and grow your workshop. Short orders, rare creations and special dispensers let you decide how to use the space on your board.", "The game interface is in French. Planned one-time price: €1 in France, with no ads, subscription or in-app purchases. No energy timer: play at your own pace, even offline. Requires Android 8 or later and an up-to-date Android System WebView or Chrome."],
  },
  features: {
    fr: ["Fusion par glisser-déposer ou sélection au toucher", "Huit jardins à restaurer progressivement", "Six familles d’objets et des créations alchimiques rares", "Distributeurs spéciaux à reconstruire sans perdre leurs produits", "Commandes, améliorations permanentes et défis", "Sauvegarde locale et export/import de progression", "Sons, animations et réglages intégrés", "Sans publicité, compte, abonnement ni achat intégré"],
    en: ["Drag-and-drop or tap-to-select merging", "Eight gardens to restore over time", "Six item families and rare alchemical creations", "Rebuild special dispensers while keeping their products", "Orders, permanent upgrades and challenges", "Local saves with progress export and import", "Built-in sound, animations and settings", "No ads, account, subscription or in-app purchases"],
  },
  privacyLead: {
    fr: "La progression reste dans l’espace privé de l’application, sauf export choisi ou sauvegarde Android. Google Play gère séparément l’achat et les mises à jour.",
    en: "Progress stays in private app storage, apart from exports you choose and Android backups. Google Play handles purchases and updates separately.",
  },
};

export const aureliaPolicy = {
  lastUpdated: { fr: "6 novembre 2026", en: "November 6, 2026" },
  summary: { fr: "Aurélia fonctionne hors ligne, sans compte, publicité ni suivi publicitaire. Studio501 ne reçoit pas votre progression.", en: "Aurélia works offline, with no account, ads or advertising tracking. Studio501 does not receive your progress." },
  sections: {
    fr: [
      { title: "Éditeur et contact", paragraphs: ["Aurélia — Les Jardins oubliés (com.studio501.aurelia) est édité par Nanouk Candela, entrepreneur individuel sous le nom Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN : 104 315 957.", "Contact confidentialité et assistance : contact@studio501.fr. L’adresse studio501.dev@gmail.com reste disponible."] },
      { title: "Progression et fonctionnement local", paragraphs: ["L’application conserve votre progression, vos objets, vos réglages et vos records dans son espace privé sur l’appareil. Elle ne nécessite aucun compte Studio501 et n’intègre ni publicité, ni SDK publicitaire, ni mesure d’audience. Les ressources du jeu sont embarquées dans l’application ; le jeu ne télécharge pas de code distant."] },
      { title: "Achat, mises à jour et accès Internet", paragraphs: ["L’achat unique est géré par Google Play. Studio501 ne reçoit pas vos coordonnées bancaires. Le jeu ne propose aucun achat intégré ni abonnement.", "La permission Internet est déclarée. Les ressources du jeu restent locales. Google Play In-App Updates vérifie si une version plus récente est disponible ; Google indique que ce service traite des métadonnées de l’appareil, la version de l’application et la liste des modules ou packs installés pour déterminer la disponibilité et la taille d’une mise à jour. Ces échanges sont chiffrés et relèvent des règles de Google Play. Ils ne contiennent pas votre progression. Vous pouvez reporter une mise à jour et continuer à jouer hors ligne.", "Un composant Android System WebView ou Chrome récent est nécessaire à l’affichage. Si le composant est trop ancien, l’application propose d’ouvrir sa fiche de mise à jour dans Google Play."], links: [{ label: "Données du service de mise à jour Google Play", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" }] },
      { title: "Sauvegardes et fichiers choisis", paragraphs: ["Vous pouvez exporter ou importer une sauvegarde JSON avec le sélecteur de fichiers Android. Le fichier contient la progression et les réglages du jeu. Vous choisissez sa destination, qui peut être un service tiers : ses propres règles s’appliquent alors.", "La sauvegarde Android des données WebView est autorisée. Selon votre appareil et vos réglages de sauvegarde, Android ou Google peut conserver et restaurer une copie des données de l’application. Ce mécanisme est distinct de Studio501 et se règle dans Android."] },
      { title: "Conservation et suppression", paragraphs: ["Les données locales sont conservées tant que vous utilisez le jeu. Vous pouvez effacer les données de l’application depuis les réglages Android. La désinstallation supprime l’espace privé ; les fichiers exportés et les éventuelles sauvegardes Android doivent être gérés séparément. Studio501 ne peut pas restaurer une progression qu’il ne détient pas."] },
      { title: "Support, droits et modifications", paragraphs: ["Si vous écrivez au support, votre adresse e-mail et votre message servent à vous répondre et à assurer le suivi pendant la durée nécessaire. Ils ne sont ni vendus ni utilisés pour du démarchage. Vous pouvez demander l’accès, la rectification ou la suppression des informations transmises à contact@studio501.fr.", "Le jeu ne cible pas spécifiquement les enfants de moins de 13 ans et ne demande pas de données personnelles aux joueurs. Toute modification importante de ces traitements sera indiquée sur cette page."] },
    ],
    en: [
      { title: "Publisher and contact", paragraphs: ["Aurélia — Les Jardins oubliés (com.studio501.aurelia) is published by Nanouk Candela, sole proprietor trading as Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN: 104 315 957.", "Privacy and support: contact@studio501.fr. studio501.dev@gmail.com also remains available."] },
      { title: "Local progress", paragraphs: ["Progress, objects, settings and records are kept in the app’s private storage on your device. No Studio501 account, advertising SDK, advertising or usage analytics is included. Game resources are bundled with the app; no remote game code is downloaded."] },
      { title: "Purchase, updates and Internet access", paragraphs: ["Google Play handles the one-time purchase. Studio501 does not receive your payment card details. The game contains no in-app purchases or subscription.", "The Internet permission is declared. Game resources stay local. Google Play In-App Updates checks for newer releases. Google states that this service processes device metadata, the application version and installed modules or asset packs to determine update availability and size. These exchanges are encrypted and governed by Google Play policies. They do not include game progress. Updates can be postponed, and the game stays playable offline.", "A recent Android System WebView or Chrome component is required. If yours is too old, the app offers to open its Google Play update page."], links: [{ label: "Google Play update service data information", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" }] },
      { title: "Backups and selected files", paragraphs: ["You may export and import a JSON save using Android’s file picker. It contains game progress and settings. You choose the destination, including any third-party service whose own policies then apply.", "Android backup of WebView data is enabled. Depending on device and backup settings, Android or Google may back up and restore the app’s data. This operates separately from Studio501 and is controlled in Android settings."] },
      { title: "Retention and deletion", paragraphs: ["Local data remains while you use the game. Clear the app’s data in Android settings to remove it. Uninstalling removes private storage; exported files and Android backups are managed separately. Studio501 cannot restore progress it does not hold."] },
      { title: "Support, rights and changes", paragraphs: ["If you contact support, your email and message are used only to reply and follow up for as long as needed. They are not sold or used for advertising. Contact contact@studio501.fr to request access, correction or deletion of information you sent us.", "The game is not specifically directed at children under 13 and does not ask players for personal information. Material changes to these practices will be published here."] },
    ],
  },
};

export const aureliaSupport = {
  fr: [
    { title: "Comment fusionner ?", paragraphs: ["Glissez un objet sur son double ou sélectionnez les deux objets identiques au toucher. Leur famille et leur rang doivent correspondre. L’objet obtenu occupe une seule case."] },
    { title: "Le plateau est plein", paragraphs: ["Livrez une commande accessible, fusionnez les doubles ou utilisez les commandes courtes pour libérer de la place. Les produits d’un distributeur sont conservés lorsque vous reconstruisez le même distributeur."] },
    { title: "Comment conserver ma progression ?", paragraphs: ["Le jeu sauvegarde localement. Dans Réglages, exportez une sauvegarde JSON avant de changer d’appareil ou d’effacer ses données. Conservez ce fichier dans un emplacement de confiance, puis importez-le sur l’autre appareil."] },
    { title: "Le jeu demande une mise à jour WebView", paragraphs: ["Mettez à jour Android System WebView ou Chrome depuis Google Play puis relancez Aurélia. Il s’agit du composant Android qui affiche le jeu, pas d’un achat supplémentaire. Une fois installé, le jeu reste utilisable hors connexion."] },
    { title: "Une question ou un problème ?", paragraphs: ["Écrivez à contact@studio501.fr avec le modèle du téléphone, la version Android, la version d’Aurélia et les étapes du problème. N’envoyez pas de mot de passe ni de données de paiement."] },
  ],
  en: [
    { title: "How do I merge?", paragraphs: ["Drag an object onto its match, or tap to select two matching objects. Their family and rank must match. The result takes one cell."] },
    { title: "My board is full", paragraphs: ["Complete an available order, merge matching objects or use short orders to free space. Products from a special dispenser remain when you rebuild that dispenser."] },
    { title: "How do I keep my progress?", paragraphs: ["The game saves locally. Export a JSON backup in Settings before changing devices or clearing data. Keep it somewhere you trust, then import it on the other device."] },
    { title: "The game asks for a WebView update", paragraphs: ["Update Android System WebView or Chrome through Google Play, then reopen Aurélia. This is Android’s game display component, not an additional purchase. Once installed, the game remains playable offline."] },
    { title: "Need help?", paragraphs: ["Email contact@studio501.fr with the phone model, Android version, Aurélia version and steps to reproduce the issue. Do not send passwords or payment details."] },
  ],
};
