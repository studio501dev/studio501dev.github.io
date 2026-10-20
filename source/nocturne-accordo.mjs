// Nocturne games (Sudoku, Solitaire), Nocturne Bébé and Accordo — Android apps, paid, offline, no Internet permission.
// Facts reviewed against the apps' merged release manifests and source code (October 2026).

const preparing = {
  statusLabel: { fr: "Publication en préparation", en: "Preparing for release" },
  storeLabel: { fr: "Bientôt sur Google Play", en: "Coming soon on Google Play" },
};

export const nocturneApps = [
  {
    slug: "sudoku-nocturne",
    name: "Sudoku Nocturne",
    platform: "Android",
    platformKey: "android",
    status: "preparing",
    ...preparing,
    packageName: "com.nocturne.sudoku",
    icon: "/assets/apps/sudoku-nocturne/icon.png",
    screenshots: [],
    accent: "gold",
    applicationCategory: "GameApplication",
    featuresTitle: { fr: "Pourquoi on y revient", en: "Why you will keep coming back" },
    summary: {
      fr: "Le Sudoku élégant qui vous explique ses indices. Sans pub, sans compte, hors ligne.",
      en: "The elegant Sudoku whose hints explain themselves. No ads, no account, fully offline.",
    },
    description: {
      fr: [
        "Un Sudoku qui vous respecte. Pas de pub qui coupe votre réflexion, pas de compte à créer, pas de connexion requise : juste une grille, un décor d’acajou et de laiton, et le plaisir de trouver le bon chiffre.",
        "Les indices vous apprennent quelque chose : ils expliquent pourquoi ce chiffre, pas seulement lequel. Chaque jour, une grille identique pour tout le monde vous attend.",
        "Achat unique, sans abonnement. Les mises à jour sont proposées par Google Play à l’ouverture ; le jeu reste utilisable hors connexion.",
      ],
      en: [
        "A Sudoku that respects you. No ads breaking your train of thought, no account to create, no connection required: just a grid, a mahogany-and-brass setting, and the pleasure of finding the right digit.",
        "Hints teach you something: they explain why a digit fits, not only which one. Every day a puzzle, identical for everyone, is waiting for you.",
        "One-time purchase, no subscription. Google Play offers updates when the app opens; the game stays playable offline.",
      ],
    },
    features: {
      fr: ["Quatre niveaux, de Facile à Expert", "Grille du jour identique pour tous, avec série à garder", "Indices qui expliquent le raisonnement", "Notes en un geste et bouton « tous les candidats »", "Annuler, pause, chronomètre et compteur d’erreurs", "Statistiques et meilleurs temps par niveau", "Thème Nuit, Jour ou Automatique", "Chiffres plus grands et option « choisir le chiffre d’abord »", "Sans publicité, sans compte, hors ligne", "10 langues : français, anglais, espagnol, allemand, italien, portugais, néerlandais, indonésien, japonais et coréen"],
      en: ["Four levels, from Easy to Expert", "Daily puzzle, the same for everyone, with a streak to keep", "Hints that explain the reasoning", "One-gesture notes and a “fill all candidates” button", "Undo, pause, timer and mistake counter", "Statistics and best times per level", "Night, Day or Automatic theme", "Larger numbers and a “pick the number first” option", "No ads, no account, fully offline", "10 languages: French, English, Spanish, German, Italian, Portuguese, Dutch, Indonesian, Japanese and Korean"],
    },
    privacyLead: {
      fr: "Les parties, réglages et statistiques restent sur votre appareil. Aucune publicité, aucun compte, aucune permission Internet. Google Play gère séparément achat et mises à jour.",
      en: "Games, settings and statistics stay on your device. No ads, no account, no Internet permission. Google Play handles purchase and updates separately.",
    },
  },
  {
    slug: "solitaire-nocturne",
    name: "Solitaire Nocturne",
    platform: "Android",
    platformKey: "android",
    status: "preparing",
    ...preparing,
    packageName: "com.nocturne.solitaire",
    icon: "/assets/apps/solitaire-nocturne/icon.png",
    screenshots: [],
    accent: "mint",
    applicationCategory: "GameApplication",
    featuresTitle: { fr: "Ce qui fait la différence", en: "What makes the difference" },
    summary: {
      fr: "Le Klondike classique, avec option donnes gagnables. Sans pub, sans compte, hors ligne.",
      en: "Classic Klondike with an option for winnable deals. No ads, no account, fully offline.",
    },
    description: {
      fr: [
        "Le Solitaire comme on l’aime, enfin sans pub. Tapis vert, belles cartes, glisser-déposer fluide : Solitaire Nocturne vous laisse jouer tranquille, sans pop-up, sans compte, sans connexion.",
        "Avec l’option « donnes gagnables », on vérifie qu’une donne peut se gagner avant de vous la proposer. Un indice quand vous séchez, l’annulation d’un coup si vous regrettez.",
        "Achat unique, sans abonnement. Les mises à jour sont proposées par Google Play à l’ouverture ; le jeu reste utilisable hors connexion.",
      ],
      en: [
        "Solitaire the way you like it, finally without ads. Green felt, handsome cards, smooth drag and drop: Solitaire Nocturne lets you play in peace, with no pop-ups, no account and no connection.",
        "With the “winnable deals” option, a deal is checked for a possible win before it is offered to you. Get a hint when you are stuck, and undo a move if you regret it.",
        "One-time purchase, no subscription. Google Play offers updates when the app opens; the game stays playable offline.",
      ],
    },
    features: {
      fr: ["Option « donnes gagnables » : une solution existe avant le début de la partie", "Tirage de 1 ou de 3 cartes", "Glisser-déposer fluide", "Indice et annulation d’un coup", "Fin de partie automatique quand la victoire est assurée", "Statistiques et meilleurs temps par mode de tirage", "Thème Nuit, Jour ou Automatique, son et vibrations réglables", "Sans publicité, sans compte, hors ligne", "10 langues : français, anglais, espagnol, allemand, italien, portugais, néerlandais, indonésien, japonais et coréen"],
      en: ["“Winnable deals” option: a solution exists before the game starts", "Draw 1 or draw 3", "Smooth drag and drop", "Hint and single-move undo", "Automatic finish once the win is secured", "Statistics and best times per draw mode", "Night, Day or Automatic theme, adjustable sound and vibration", "No ads, no account, fully offline", "10 languages: French, English, Spanish, German, Italian, Portuguese, Dutch, Indonesian, Japanese and Korean"],
    },
    privacyLead: {
      fr: "Les parties, réglages et statistiques restent sur votre appareil. Aucune publicité, aucun compte, aucune permission Internet. Google Play gère séparément achat et mises à jour.",
      en: "Games, settings and statistics stay on your device. No ads, no account, no Internet permission. Google Play handles purchase and updates separately.",
    },
  },
  {
    slug: "nocturne-bebe",
    name: "Nocturne Bébé",
    platform: "Android",
    platformKey: "android",
    status: "preparing",
    ...preparing,
    packageName: "com.nocturne.baby",
    icon: "/assets/apps/nocturne-bebe/icon.png",
    screenshots: [],
    accent: "violet",
    applicationCategory: "LifestyleApplication",
    featuresTitle: { fr: "Ce que vous allez apprécier", en: "What you will appreciate" },
    summary: {
      fr: "Bruit blanc, cœur, pluie, berceuses : 12 sons pour apaiser bébé. Sans pub, hors ligne.",
      en: "White noise, heartbeat, rain, lullabies: 12 sounds to soothe your baby. No ads, fully offline.",
    },
    description: {
      fr: [
        "Un souffle régulier, un battement de cœur, la pluie sur une vitre : Nocturne Bébé diffuse des sons doux et continus que les tout-petits connaissent bien. Mélangez-les, réglez chaque volume et lancez le tout d’un seul geste. L’application s’adresse aux parents.",
        "Les sons sont générés par l’application elle-même : tout fonctionne hors ligne, même dans une chambre sans réseau. Pour la sécurité de bébé, gardez le téléphone à au moins 2 mètres du lit, à volume modéré.",
        "Nocturne Bébé ne donne aucun avis médical et ne prétend soigner aucune affection. Achat unique, sans abonnement ; les mises à jour sont proposées par Google Play à l’ouverture.",
      ],
      en: [
        "A steady breath, a heartbeat, rain on a window: Nocturne Baby plays the soft, continuous sounds little ones know well. Mix them, set each volume and start everything with one gesture. The app is designed for parents.",
        "Sounds are generated by the app itself: everything works offline, even in a room without network. For your baby’s safety, keep the phone at least 2 metres from the cot, at a moderate volume.",
        "Nocturne Baby gives no medical advice and does not claim to treat any condition. One-time purchase, no subscription; Google Play offers updates when the app opens.",
      ],
    },
    features: {
      fr: ["12 sons à mélanger, chacun avec son volume : bruit blanc, rose et brun, battements de cœur, ventre maternel, pluie, vagues, ventilateur, sèche-cheveux, trajet en voiture, boîte à musique, chuchotement", "Ambiances toutes prêtes", "Votre mélange préféré enregistré et raccourci vers le dernier son", "Minuteur, ou lecture toute la nuit", "Lecture écran verrouillé avec commandes dans la notification", "Veilleuse douce à luminosité réglable", "Rappels de sécurité : distance au lit et volume modéré", "Sans publicité, sans compte, aucune donnée collectée, hors ligne", "10 langues : français, anglais, espagnol, allemand, italien, portugais, néerlandais, indonésien, japonais et coréen"],
      en: ["12 sounds to mix, each with its own volume: white, pink and brown noise, heartbeat, womb, rain, waves, fan, hair dryer, car ride, music box, whisper", "Ready-made ambiences", "Your favourite mix saved, with a shortcut to the last sound", "Timer, or all-night playback", "Playback with the screen locked, with controls in the notification", "Soft night light with adjustable brightness", "Safety reminders: distance from the cot and moderate volume", "No ads, no account, no data collected, fully offline", "10 languages: French, English, Spanish, German, Italian, Portuguese, Dutch, Indonesian, Japanese and Korean"],
    },
    privacyLead: {
      fr: "Les sons sont générés sur l’appareil. Aucune publicité, aucun compte, aucune donnée collectée, aucune permission Internet. Google Play gère séparément achat et mises à jour.",
      en: "Sounds are generated on the device. No ads, no account, no data collected, no Internet permission. Google Play handles purchase and updates separately.",
    },
  },
  {
    slug: "accordo",
    name: "Accordo",
    platform: "Android",
    platformKey: "android",
    status: "preparing",
    ...preparing,
    packageName: "com.accordo.tuner",
    icon: "/assets/apps/accordo/icon.png",
    screenshots: [],
    accent: "coral",
    applicationCategory: "MusicApplication",
    featuresTitle: { fr: "L’accordeur et le métronome de votre poche", en: "The tuner and metronome in your pocket" },
    summary: {
      fr: "Accordez-vous en un coup d’œil. Guitare, basse, ukulélé, violon. Sans pub, hors ligne.",
      en: "Tune at a glance. Guitar, bass, ukulele, violin. No ads, works offline.",
    },
    description: {
      fr: [
        "Accordez-vous vite, jouez juste. Accordo réunit un accordeur et un métronome : une aiguille claire, des réglages simples et aucune publicité qui surgit au mauvais moment.",
        "Le micro sert uniquement à écouter votre instrument : le son est analysé sur votre téléphone, jamais enregistré, jamais envoyé.",
        "Achat unique, sans abonnement. Les mises à jour sont proposées par Google Play à l’ouverture ; l’application fonctionne sans connexion.",
      ],
      en: [
        "Tune quickly, play in tune. Accordo brings a tuner and a metronome together: a clear needle, simple settings and no ad popping up at the wrong moment.",
        "The microphone is used only to listen to your instrument: sound is analysed on your phone, never recorded, never sent.",
        "One-time purchase, no subscription. Google Play offers updates when the app opens; the app works without a connection.",
      ],
    },
    features: {
      fr: ["Chromatique, guitare 6 et 7 cordes, basse 4 et 5 cordes, ukulélé, violon, alto et violoncelle", "Accordages alternatifs et accordages personnalisés enregistrables", "Détection automatique de la corde ou verrouillage de celle de votre choix", "Notes de référence pour accorder à l’oreille, diapason réglable", "Métronome de 20 à 300 BPM, tempo tapé", "Mesures avec accent réglable sur chaque temps et subdivisions", "Plusieurs sons de clic ou vibration seule", "Le métronome continue écran verrouillé", "Sans publicité, sans compte, hors ligne", "10 langues : français, anglais, espagnol, allemand, italien, portugais, néerlandais, indonésien, japonais et coréen"],
      en: ["Chromatic, 6- and 7-string guitar, 4- and 5-string bass, ukulele, violin, viola and cello", "Alternate tunings and savable custom tunings", "Automatic string detection or lock the string you want", "Reference notes to tune by ear, adjustable reference pitch", "Metronome from 20 to 300 BPM, tap tempo", "Time signatures with adjustable accent on each beat, and subdivisions", "Several click sounds or vibration only", "The metronome keeps playing with the screen locked", "No ads, no account, works offline", "10 languages: French, English, Spanish, German, Italian, Portuguese, Dutch, Indonesian, Japanese and Korean"],
    },
    privacyLead: {
      fr: "Le micro analyse le son sur l’appareil sans jamais l’enregistrer ni l’envoyer. Aucune publicité, aucun compte, aucune permission Internet. Google Play gère séparément achat et mises à jour.",
      en: "The microphone analyses sound on the device and never records or sends it. No ads, no account, no Internet permission. Google Play handles purchase and updates separately.",
    },
  },
];

// ---- Privacy policies ------------------------------------------------------------------------------------------

const updated = { fr: "20 octobre 2026", en: "October 20, 2026" };
const playLink = {
  fr: { label: "Données du service de mise à jour Google Play", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" },
  en: { label: "Google Play update service data information", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" },
};

function sections(lang, name, specific) {
  const fr = lang === "fr";
  const controller = fr
    ? { title: "Responsable et contact", paragraphs: [`${name} est éditée par Nanouk Candela, entrepreneur individuel exerçant sous le nom commercial Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN : 104 315 957.`, "Contact confidentialité et assistance : contact@studio501.fr. L’adresse studio501.dev@gmail.com reste également disponible."] }
    : { title: "Controller and contact", paragraphs: [`${name} is published by Nanouk Candela, sole proprietor trading as Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN: 104 315 957.`, "Privacy and support contact: contact@studio501.fr. studio501.dev@gmail.com also remains available."] };
  const local = fr
    ? { title: "Fonctionnement local", paragraphs: ["L’application est conçue pour fonctionner hors connexion, sans compte Studio501, publicité, analyse marketing, SDK de suivi ni serveur Studio501. Elle ne demande pas la permission Internet."] }
    : { title: "Local operation", paragraphs: ["The app is designed to work offline, with no Studio501 account, advertising, marketing analytics, tracking SDK or Studio501 server. It does not request the Internet permission."] };
  const updates = fr
    ? { title: "Achat et mises à jour de l’application", paragraphs: ["L’achat et la licence sont gérés par Google Play, séparément de l’application. Studio501 ne reçoit aucune donnée de paiement.", "À l’ouverture, l’application vérifie automatiquement auprès de Google Play si une mise à jour est disponible. Selon la documentation de Google, ce service traite des métadonnées de l’appareil, la version de l’application et les modules installés pour déterminer la mise à jour disponible et sa taille. Les informations sont chiffrées pendant le transfert et traitées selon les règles de Google Play. Aucune donnée saisie ou produite dans l’application n’est transmise par cette fonctionnalité.", "Vous pouvez remettre l’installation à plus tard. L’application reste utilisable hors connexion et sur un appareil sans Google Play."], links: [playLink.fr] }
    : { title: "Purchase and app updates", paragraphs: ["Purchase and licensing are handled by Google Play, separately from the app. Studio501 receives no payment data.", "When the app opens, it automatically checks with Google Play whether an update is available. Google documents that this service processes device metadata, the app version and installed modules to determine update availability and size. This information is encrypted in transit and processed under Google Play policies. This feature does not transmit anything entered or produced in the app.", "You can postpone installation. The app remains usable offline and on devices without Google Play."], links: [playLink.en] };
  const retention = fr
    ? { title: "Conservation et suppression", paragraphs: ["Les données restent dans l’espace privé de l’application jusqu’à ce que vous les modifiiez ou les supprimiez, que vous effaciez le stockage de l’application ou que vous la désinstalliez."] }
    : { title: "Retention and deletion", paragraphs: ["Data stays in the app’s private storage until you edit or delete it, clear the app’s storage, or uninstall it."] };
  const closing = fr
    ? { title: "Support, droits et modifications", paragraphs: ["Si vous contactez le support, votre adresse e-mail et le contenu de votre message servent uniquement à répondre et à assurer le suivi ; ils ne sont ni vendus ni utilisés à des fins publicitaires. Vous pouvez demander l’accès, la rectification ou la suppression de ces informations à contact@studio501.fr.", `${name} ne cible pas spécifiquement les enfants. Cette politique sera révisée si les permissions, les dépendances ou les traitements changent.`] }
    : { title: "Support, rights and changes", paragraphs: ["If you contact support, your email address and message are used only to reply and follow up; they are not sold or used for advertising. You may ask for access, correction or deletion of this information at contact@studio501.fr.", `${name} is not specifically directed at children. This policy will be revised if permissions, dependencies or processing change.`] };
  return [controller, local, ...specific, updates, retention, closing];
}

const gameSpecific = (fr, what) => fr
  ? [
      { title: "Données traitées sur votre appareil", paragraphs: [`L’application enregistre localement ${what}. Ces informations servent uniquement au fonctionnement du jeu.`] },
      { title: "Collecte et partage par Studio501", paragraphs: ["Studio501 ne reçoit, ne collecte, ne vend et ne partage aucune donnée de jeu. L’application ne demande aucune permission sensible."] },
    ]
  : [
      { title: "Data processed on your device", paragraphs: [`The app stores locally ${what}. This information is used only to run the game.`] },
      { title: "Collection and sharing by Studio501", paragraphs: ["Studio501 does not receive, collect, sell or share any game data. The app requests no sensitive permission."] },
    ];

export const nocturnePolicies = {
  "sudoku-nocturne": {
    lastUpdated: updated,
    summary: {
      fr: "Les parties, réglages et statistiques restent sur votre appareil. Aucune publicité, aucun compte, aucune permission Internet.",
      en: "Games, settings and statistics stay on your device. No ads, no account, no Internet permission.",
    },
    sections: {
      fr: sections("fr", "Sudoku Nocturne", gameSpecific(true, "vos parties en cours, la grille du jour, vos statistiques, meilleurs temps et séries, ainsi que vos préférences (thème, son, vibrations, options d’aide)")),
      en: sections("en", "Sudoku Nocturne", gameSpecific(false, "your games in progress, the daily puzzle, your statistics, best times and streaks, and your preferences (theme, sound, vibration, help options)")),
    },
  },
  "solitaire-nocturne": {
    lastUpdated: updated,
    summary: {
      fr: "Les parties, réglages et statistiques restent sur votre appareil. Aucune publicité, aucun compte, aucune permission Internet.",
      en: "Games, settings and statistics stay on your device. No ads, no account, no Internet permission.",
    },
    sections: {
      fr: sections("fr", "Solitaire Nocturne", gameSpecific(true, "vos parties en cours, vos statistiques et meilleurs temps par mode de tirage, ainsi que vos préférences (thème, son, vibrations, option « donnes gagnables »)")),
      en: sections("en", "Solitaire Nocturne", gameSpecific(false, "your games in progress, your statistics and best times per draw mode, and your preferences (theme, sound, vibration, “winnable deals” option)")),
    },
  },
  "nocturne-bebe": {
    lastUpdated: updated,
    summary: {
      fr: "Les sons sont générés sur l’appareil. Aucune publicité, aucun compte, aucune donnée collectée, aucune permission Internet.",
      en: "Sounds are generated on the device. No ads, no account, no data collected, no Internet permission.",
    },
    sections: {
      fr: sections("fr", "Nocturne Bébé", [
        { title: "Données traitées sur votre appareil", paragraphs: ["L’application enregistre localement vos réglages (volumes, mélange enregistré, dernier son, minuteur, veilleuse). Les sons sont générés par l’application elle-même ; aucun enregistrement ni fichier audio personnel n’est utilisé."] },
        { title: "Autorisations demandées et leur utilité", paragraphs: ["Service de premier plan de lecture multimédia et maintien en éveil : pour que le son continue écran verrouillé ou application en arrière-plan.", "Notifications : pour afficher la notification de lecture et ses commandes (pause, arrêt). Android peut demander votre accord ; vous pouvez le refuser ou le retirer."] },
        { title: "Collecte et partage par Studio501", paragraphs: ["Studio501 ne reçoit, ne collecte, ne vend et ne partage aucune donnée."] },
        { title: "Public et sécurité", paragraphs: ["Nocturne Bébé s’adresse aux parents, pas aux enfants. Gardez le téléphone à au moins 2 mètres du lit de bébé et un volume modéré. L’application ne donne aucun avis médical et ne prétend soigner aucune affection."] },
      ]),
      en: sections("en", "Nocturne Baby", [
        { title: "Data processed on your device", paragraphs: ["The app stores your settings locally (volumes, saved mix, last sound, timer, night light). Sounds are generated by the app itself; no recording or personal audio file is used."] },
        { title: "Permissions requested and why", paragraphs: ["Media-playback foreground service and wake lock: so the sound keeps playing with the screen locked or the app in the background.", "Notifications: to show the playback notification and its controls (pause, stop). Android may ask for your consent; you may refuse or revoke it."] },
        { title: "Collection and sharing by Studio501", paragraphs: ["Studio501 does not receive, collect, sell or share any data."] },
        { title: "Audience and safety", paragraphs: ["Nocturne Baby is designed for parents, not for children. Keep the phone at least 2 metres from the cot at a moderate volume. The app gives no medical advice and does not claim to treat any condition."] },
      ]),
    },
  },
  accordo: {
    lastUpdated: updated,
    summary: {
      fr: "Le micro analyse le son sur l’appareil sans jamais l’enregistrer ni l’envoyer. Aucune publicité, aucun compte, aucune permission Internet.",
      en: "The microphone analyses sound on the device and never records or sends it. No ads, no account, no Internet permission.",
    },
    sections: {
      fr: sections("fr", "Accordo", [
        { title: "Données traitées sur votre appareil", paragraphs: ["L’application enregistre localement vos accordages personnalisés, morceaux et réglages du métronome, le diapason et vos préférences."] },
        { title: "Microphone", paragraphs: ["L’accordeur utilise le microphone uniquement pour analyser en temps réel le son de votre instrument. Le son est analysé sur votre téléphone ; il n’est jamais enregistré, conservé ni envoyé. L’autorisation du micro est demandée par Android et peut être refusée ou retirée dans les réglages ; le métronome reste alors utilisable."] },
        { title: "Autres autorisations", paragraphs: ["Service de premier plan de lecture multimédia : pour que le métronome continue écran verrouillé. Notifications : pour la notification du métronome et son bouton d’arrêt. Vibration : retour de justesse et clic par vibration."] },
        { title: "Collecte et partage par Studio501", paragraphs: ["Studio501 ne reçoit, ne collecte, ne vend et ne partage aucune donnée."] },
      ]),
      en: sections("en", "Accordo", [
        { title: "Data processed on your device", paragraphs: ["The app stores locally your custom tunings, songs and metronome settings, the reference pitch and your preferences."] },
        { title: "Microphone", paragraphs: ["The tuner uses the microphone only to analyse your instrument’s sound in real time. Sound is analysed on your phone; it is never recorded, stored or sent. Android asks for the microphone permission and you can refuse or revoke it in settings; the metronome stays usable."] },
        { title: "Other permissions", paragraphs: ["Media-playback foreground service: so the metronome keeps playing with the screen locked. Notifications: for the metronome notification and its stop button. Vibration: in-tune feedback and vibration click."] },
        { title: "Collection and sharing by Studio501", paragraphs: ["Studio501 does not receive, collect, sell or share any data."] },
      ]),
    },
  },
};

// ---- Support FAQ -------------------------------------------------------------------------------------------------

const faqUpdates = {
  fr: { title: "Comment installer une mise à jour ?", paragraphs: ["Pour une application installée depuis Google Play, une mise à jour peut être proposée à l’ouverture. Suivez le parcours Google Play affiché ou mettez l’application à jour depuis le Play Store comme d’habitude."] },
  en: { title: "How do I install an update?", paragraphs: ["For an app installed through Google Play, an update may be offered when the app opens. Follow Google Play’s displayed flow, or update the app from the Play Store as usual."] },
};
const faqData = {
  fr: { title: "Où mes données sont-elles enregistrées ?", paragraphs: ["Dans l’espace privé de l’application, sur votre appareil. Aucun compte Studio501 n’est requis, la permission Internet est absente et rien n’est envoyé à un serveur Studio501."] },
  en: { title: "Where is my data stored?", paragraphs: ["In the app’s private storage on your device. No Studio501 account is required, the Internet permission is absent and nothing is sent to a Studio501 server."] },
};
const faqHelp = (name) => ({
  fr: { title: "Comment demander de l’aide ?", paragraphs: [`Écrivez à contact@studio501.fr en indiquant le modèle du téléphone, la version d’Android, la version de ${name} et une description précise du problème.`] },
  en: { title: "How do I ask for help?", paragraphs: [`Contact contact@studio501.fr and include your phone model, Android version, ${name} version and a precise description of the issue.`] },
});

export const nocturneSupport = {
  "sudoku-nocturne": {
    fr: [faqData.fr, { title: "Qu’est-ce que la grille du jour ?", paragraphs: ["Une grille identique pour tous les joueurs à une date donnée. Terminer chaque jour entretient votre série."] }, { title: "Pourquoi les indices expliquent-ils au lieu de remplir ?", paragraphs: ["Pour vous apprendre le raisonnement : l’indice montre pourquoi un chiffre convient à une case. Si un chiffre posé est faux, il peut aussi vous l’indiquer."] }, faqUpdates.fr, faqHelp("Sudoku Nocturne").fr],
    en: [faqData.en, { title: "What is the daily puzzle?", paragraphs: ["A puzzle identical for all players on a given date. Finishing each day keeps your streak going."] }, { title: "Why do hints explain instead of just filling in?", paragraphs: ["To teach the reasoning: a hint shows why a digit fits a cell. If a digit you placed is wrong, it can also tell you."] }, faqUpdates.en, faqHelp("Sudoku Nocturne").en],
  },
  "solitaire-nocturne": {
    fr: [faqData.fr, { title: "Que fait l’option « donnes gagnables » ?", paragraphs: ["Avant de vous proposer une donne, l’application vérifie qu’une solution existe. Désactivez l’option pour jouer des donnes purement aléatoires."] }, { title: "Comment annuler un coup ?", paragraphs: ["Utilisez le bouton Annuler en bas de l’écran de jeu."] }, faqUpdates.fr, faqHelp("Solitaire Nocturne").fr],
    en: [faqData.en, { title: "What does the “winnable deals” option do?", paragraphs: ["Before offering a deal, the app checks that a solution exists. Turn the option off to play purely random deals."] }, { title: "How do I undo a move?", paragraphs: ["Use the Undo button at the bottom of the game screen."] }, faqUpdates.en, faqHelp("Solitaire Nocturne").en],
  },
  "nocturne-bebe": {
    fr: [faqData.fr, { title: "Le son s’arrête pendant la nuit, pourquoi ?", paragraphs: ["Certains téléphones arrêtent les applications pour économiser la batterie. Ouvrez les réglages de batterie depuis les réglages de l’application et autorisez-la à fonctionner sans restriction."] }, { title: "À quelle distance placer le téléphone ?", paragraphs: ["À au moins 2 mètres du lit de bébé, avec un volume modéré. Préférez le minuteur à une lecture toute la nuit."] }, faqUpdates.fr, faqHelp("Nocturne Bébé").fr],
    en: [faqData.en, { title: "Why does the sound stop during the night?", paragraphs: ["Some phones stop apps to save battery. Open the battery settings from the app’s settings and allow it to run without restriction."] }, { title: "How far should the phone be placed?", paragraphs: ["At least 2 metres from the cot, at a moderate volume. Prefer the timer to all-night playback."] }, faqUpdates.en, faqHelp("Nocturne Baby").en],
  },
  accordo: {
    fr: [faqData.fr, { title: "Pourquoi l’accordeur demande-t-il le micro ?", paragraphs: ["Pour écouter votre instrument. Le son est analysé sur votre téléphone et n’est jamais enregistré ni envoyé. Sans micro, le métronome reste utilisable."] }, { title: "L’accordeur ne détecte pas ma note.", paragraphs: ["Rapprochez le téléphone de l’instrument, jouez une corde à la fois dans une pièce calme et vérifiez le diapason (440 Hz par défaut) dans les réglages."] }, faqUpdates.fr, faqHelp("Accordo").fr],
    en: [faqData.en, { title: "Why does the tuner ask for the microphone?", paragraphs: ["To listen to your instrument. Sound is analysed on your phone and never recorded or sent. Without the microphone, the metronome stays usable."] }, { title: "The tuner does not detect my note.", paragraphs: ["Move the phone closer to the instrument, play one string at a time in a quiet room and check the reference pitch (440 Hz by default) in settings."] }, faqUpdates.en, faqHelp("Accordo").en],
  },
};
