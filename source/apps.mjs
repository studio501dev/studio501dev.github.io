export const site = {
  baseUrl: "https://studio501.fr",
  name: "Studio501",
  publisher: "Nanouk Candela",
  tradeName: "Studio501",
  legalForm: "Entrepreneur individuel",
  siren: "104 315 957",
  siret: "104 315 957 00019",
  register: "Registre national des entreprises (RNE)",
  activityCode: "5829C",
  activityLabel: "Édition de logiciels applicatifs",
  address: {
    street: "61 rue de Lyon",
    postalCode: "75012",
    city: "Paris",
    country: "France",
    countryCode: "FR",
  },
  country: "France",
  primaryEmail: "contact@studio501.fr",
  storeEmail: "studio501.dev@gmail.com",
  phone: null,
  vatNumber: null,
  mediator: null,
  host: {
    name: "GitHub Pages",
    company: "GitHub, Inc.",
    address: "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
    supportUrl: "https://support.github.com/",
  },
};

export const apps = [
  {
    slug: "decision-tree-studio",
    name: "Decision Tree Studio",
    platform: "Windows",
    platformKey: "windows",
    status: "published",
    statusLabel: { fr: "Disponible sur Microsoft Store", en: "Available on Microsoft Store" },
    storeLabel: { fr: "Voir sur Microsoft Store", en: "View on Microsoft Store" },
    storeUrl: "https://apps.microsoft.com/detail/9PGPZ8W0TW2D?hl=fr-fr&gl=FR",
    icon: "/assets/apps/decision-tree/icon.png",
    screenshots: Array.from({ length: 6 }, (_, index) => `/assets/apps/decision-tree/screen-${index + 1}.jpg`),
    accent: "violet",
    summary: {
      fr: "Transformez vos procédures en arbres de décision, guides de diagnostic et parcours interactifs clairs.",
      en: "Turn procedures into clear decision trees, diagnostic guides and interactive journeys.",
    },
    description: {
      fr: [
        "Decision Tree Studio transforme les procédures complexes en parcours visuels faciles à créer et simples à suivre.",
        "Pensé pour le support, la formation, le dépannage et les procédures internes, il réunit l’édition et la présentation dans une interface claire.",
      ],
      en: [
        "Decision Tree Studio turns complex procedures into visual journeys that are easy to create and follow.",
        "Designed for support, training, troubleshooting and internal procedures, it brings editing and presentation together in a clear interface.",
      ],
    },
    features: {
      fr: ["Éditeur visuel avec cartes et connexions", "Questions, choix, résultats et cartes libres", "Projets réunissant plusieurs arbres", "Images, liens et fichiers intégrés", "Mode Présentation guidé", "Import et sauvegarde JSON", "Export HTML responsive", "Interface française et anglaise, réglable jusqu’aux écrans 4K"],
      en: ["Visual editor with cards and connections", "Questions, choices, results and free-form cards", "Projects containing multiple trees", "Embedded images, links and files", "Guided Presentation mode", "JSON import and backup", "Responsive HTML export", "French and English interface scalable for 4K displays"],
    },
    privacyLead: {
      fr: "Les projets restent sur l’appareil, sauf export ou partage déclenché par l’utilisateur. Aucun compte ni publicité.",
      en: "Projects remain on the device unless the user exports or shares them. No account and no advertising.",
    },
  },
  {
    slug: "universal-converter",
    privacySlug: "universal-converter-studio",
    name: "Universal Converter Studio",
    platform: "Windows",
    platformKey: "windows",
    status: "published",
    statusLabel: { fr: "Disponible sur Microsoft Store", en: "Available on Microsoft Store" },
    storeLabel: { fr: "Voir sur Microsoft Store", en: "View on Microsoft Store" },
    storeUrl: "https://apps.microsoft.com/detail/9NBR4F51XP7N?hl=fr-fr&gl=FR",
    icon: "/assets/apps/universal-converter/icon.png",
    screenshots: [],
    accent: "cyan",
    monogram: "UC",
    summary: {
      fr: "Convertissez vidéos, images, fichiers audio et CD audio directement sur votre PC.",
      en: "Convert video, images, audio files and audio CDs directly on your PC.",
    },
    description: {
      fr: [
        "Universal Converter Studio regroupe les conversions vidéo, image et audio dans une interface cohérente pour Windows 10 et 11.",
        "Un fichier, un dossier ou un lot peut être traité localement. L’import de CD audio prend en charge MP3, FLAC et WAV.",
      ],
      en: [
        "Universal Converter Studio brings video, image and audio conversion together in one consistent interface for Windows 10 and 11.",
        "A file, a folder or a batch can be processed locally. Audio CD import supports MP3, FLAC and WAV.",
      ],
    },
    features: {
      fr: ["Conversion vidéo, image et audio", "Traitement d’un fichier, d’un dossier ou par lots", "Import de CD audio", "File d’attente et historique locaux", "Moteur FFmpeg exécuté sur le PC", "Aucun compte", "Aucun abonnement", "Aucun envoi des médias vers un serveur de conversion"],
      en: ["Video, image and audio conversion", "Single-file, folder and batch processing", "Audio CD import", "Local queue and history", "FFmpeg engine running on the PC", "No account", "No subscription", "No media upload to a conversion server"],
    },
    privacyLead: {
      fr: "Les médias et l’historique de conversion restent sur le PC. Aucun compte, publicité ou analyse d’usage.",
      en: "Media and conversion history remain on the PC. No account, advertising or usage analytics.",
    },
  },
  {
    slug: "ma-liste-de-courses",
    name: "Ma Liste de Courses",
    platform: "Android",
    platformKey: "android",
    status: "published",
    statusLabel: { fr: "Disponible sur Google Play", en: "Available on Google Play" },
    storeLabel: { fr: "Disponible sur Google Play", en: "Get it on Google Play" },
    storeUrl: "https://play.google.com/store/apps/details?id=com.nanouk.digitalshoppinglist",
    packageName: "com.nanouk.digitalshoppinglist",
    icon: "/assets/apps/shopping-list/icon.webp",
    screenshots: Array.from({ length: 6 }, (_, index) => `/assets/apps/shopping-list/screen-${index + 1}.webp`),
    screenshotAspect: "portrait",
    accent: "mint",
    summary: {
      fr: "Une liste de courses premium, rapide, claire et 100 % locale, sans publicité ni abonnement.",
      en: "A fast, clear and fully local premium shopping list with no ads or subscription.",
    },
    description: {
      fr: [
        "Préparez vos courses simplement avec plusieurs listes, l’ajout rapide, les quantités et un classement automatique par catégories.",
        "Plus de 1 400 produits et variantes sont reconnus. Vous pouvez corriger une catégorie ou une icône, puis l’application mémorise votre choix.",
      ],
      en: [
        "Prepare your shopping simply with multiple lists, quick entry, quantities and automatic category sorting.",
        "More than 1,400 products and variants are recognised. You can correct a category or icon and the app remembers your choice.",
      ],
    },
    features: {
      fr: ["Achat unique, sans abonnement", "Aucune publicité et aucun compte obligatoire", "Plusieurs listes et ajout rapide avec quantités", "Plus de 1 400 produits et variantes reconnus", "Classement par catégories et correction manuelle", "Mémorisation des choix", "Partage et import de listes", "Sauvegarde et restauration complètes", "Thèmes, français et anglais"],
      en: ["One-time purchase, no subscription", "No ads and no mandatory account", "Multiple lists and quick entry with quantities", "More than 1,400 recognised products and variants", "Category sorting with manual correction", "Choice memory", "List sharing and import", "Complete backup and restore", "Themes, French and English"],
    },
    privacyLead: {
      fr: "Les listes restent sur l’appareil. Un fichier ne quitte l’application que lorsque l’utilisateur choisit de le partager ou l’exporter.",
      en: "Lists remain on the device. A file leaves the app only when the user chooses to share or export it.",
    },
  },
  {
    slug: "budget-assistant",
    name: "Budget Assistant",
    platform: "Android",
    platformKey: "android",
    status: "published",
    statusLabel: { fr: "Disponible sur Google Play", en: "Available on Google Play" },
    storeLabel: { fr: "Disponible sur Google Play", en: "Get it on Google Play" },
    storeUrl: "https://play.google.com/store/apps/details?id=com.nanouk.widgetbudgetminute",
    packageName: "com.nanouk.widgetbudgetminute",
    icon: "/assets/apps/budget-assistant/icon.webp",
    screenshots: Array.from({ length: 6 }, (_, index) => `/assets/apps/budget-assistant/screen-${index + 1}.webp`),
    screenshotAspect: "portrait",
    accent: "coral",
    summary: {
      fr: "Suivez dépenses, budgets et charges fixes sans compte, publicité ni connexion bancaire.",
      en: "Track expenses, budgets and fixed costs with no account, ads or bank connection.",
    },
    description: {
      fr: [
        "Budget Assistant aide à comprendre rapidement ce qu’il reste à dépenser sur le jour, la semaine ou le mois.",
        "Ajoutez vos dépenses et entrées positives, suivez les charges récurrentes, consultez l’historique et gardez une synthèse dans un rapport PDF.",
      ],
      en: [
        "Budget Assistant helps you quickly understand what remains to spend for the day, week or month.",
        "Add expenses and positive entries, follow recurring costs, review history and keep a clear PDF summary.",
      ],
    },
    features: {
      fr: ["Achat unique, sans abonnement", "Suivi par jour, semaine et mois", "Budget mensuel et calcul du restant", "Dépenses, entrées positives et catégories", "Charges fixes et dépenses récurrentes", "Historique complet", "Widget Android", "Rapports PDF mensuels", "Sauvegarde et restauration", "Fonctionnement local, sans connexion bancaire"],
      en: ["One-time purchase, no subscription", "Daily, weekly and monthly tracking", "Monthly budget and remaining balance", "Expenses, positive entries and categories", "Fixed and recurring costs", "Complete history", "Android widget", "Monthly PDF reports", "Backup and restore", "Local operation with no bank connection"],
    },
    privacyLead: {
      fr: "Les données budgétaires sont stockées localement et ne sont pas envoyées à un serveur Studio501.",
      en: "Budget data is stored locally and is not sent to a Studio501 server.",
    },
  },
  {
    slug: "widget-pilulier",
    name: "Widget Pilulier",
    platform: "Android",
    platformKey: "android",
    status: "preparing",
    statusLabel: { fr: "À venir", en: "Coming soon" },
    storeLabel: null,
    storeUrl: null,
    packageName: "com.nanouk.widgetpilulier",
    icon: "/assets/apps/widget-pilulier/icon.webp",
    screenshots: {
      fr: Array.from({ length: 6 }, (_, index) => `/assets/apps/widget-pilulier/fr/screen-${index + 1}.webp`),
      en: Array.from({ length: 6 }, (_, index) => `/assets/apps/widget-pilulier/en/screen-${index + 1}.webp`),
    },
    screenshotAspect: "portrait",
    accent: "gold",
    summary: {
      fr: "Planifiez vos prises et gardez-les visibles sur votre écran d’accueil.",
      en: "Plan your doses and keep them visible on your home screen.",
    },
    description: {
      fr: [
        "Widget Pilulier vous aide à organiser vos médicaments, vitamines et compléments au quotidien. Planifiez les horaires de prise, recevez des rappels locaux et consultez les prises du jour depuis l’application ou le widget Android.",
        "L’application fonctionne sans compte, sans publicité et sans serveur applicatif. Vos traitements, horaires, historiques et préférences restent sous votre contrôle, sur votre appareil.",
      ],
      en: [
        "Widget Pilulier helps you organize medications, vitamins, and supplements day by day. Schedule dose times, receive local reminders, and view today’s intakes in the app or on the Android home screen widget.",
        "The app works without an account, ads, or an app server. Your treatments, schedules, history, and preferences remain under your control, on your device.",
      ],
    },
    features: {
      fr: ["Achat unique, sans abonnement", "Prises du jour regroupées par moment", "Actions Pris, Ignorer et suivi des prises manquées", "Widget Android personnalisable en plusieurs tailles", "Action Pris directement depuis le widget", "Rappels locaux et rappel tardif configurable", "Horaires et fréquences flexibles", "Pause temporaire d’un traitement", "Historique et statistiques simples", "Sauvegarde et restauration JSON locales", "Thèmes clair et sombre, français et anglais"],
      en: ["One-time purchase, no subscription", "Today’s intakes grouped by time of day", "Taken and Skip actions with missed-dose tracking", "Customizable Android widget in multiple sizes", "Mark a dose as Taken directly from the widget", "Local reminders and an optional late reminder", "Flexible times and frequencies", "Temporarily pause a treatment", "Local history and simple statistics", "Local JSON backup and restore", "Light and dark themes, English and French"],
    },
    privacyLead: {
      fr: "Les traitements, horaires, historiques et préférences restent sur l’appareil. Aucun compte, publicité ni serveur applicatif.",
      en: "Treatments, schedules, history and preferences remain on the device. No account, ads or app server.",
    },
  },
  {
    slug: "myhomeassistant",
    name: "MyHomeAssistant",
    platform: "Android",
    platformKey: "android",
    status: "published",
    statusLabel: { fr: "Disponible sur Google Play", en: "Available on Google Play" },
    storeLabel: { fr: "Disponible sur Google Play", en: "Get it on Google Play" },
    storeUrl: "https://play.google.com/store/apps/details?id=com.nanouk.myhomeassistant",
    packageName: "com.nanouk.myhomeassistant",
    icon: "/assets/apps/myhomeassistant/icon.webp",
    screenshots: Array.from({ length: 6 }, (_, index) => `/assets/apps/myhomeassistant/screen-${index + 1}.webp`),
    screenshotAspect: "portrait",
    accent: "gold",
    summary: {
      fr: "Organisez l’entretien de votre maison avec équipements, tâches, rappels locaux et widget.",
      en: "Organise home maintenance with equipment, tasks, local reminders and a widget.",
    },
    description: {
      fr: [
        "MyHomeAssistant vous aide à suivre les petites tâches importantes liées à la maison, au jardin et à vos équipements.",
        "Créez des tâches périodiques ou uniques, utilisez des modèles et visualisez clairement ce qui est en retard, proche ou prévu plus tard.",
      ],
      en: [
        "MyHomeAssistant helps you follow important recurring tasks for your home, garden and equipment.",
        "Create recurring or one-off tasks, use templates and clearly see what is overdue, coming soon or planned later.",
      ],
    },
    features: {
      fr: ["Équipements personnalisés", "Tâches périodiques et tâches uniques", "Modèles préremplis et checklists modifiables", "Priorités : en retard, sous 7 jours ou plus tard", "Historique des actions", "Rappels et notifications locales", "Widget Android", "Sauvegarde et restauration locales", "Modes clair et sombre, français et anglais"],
      en: ["Custom equipment", "Recurring and one-off tasks", "Ready-made templates and editable checklists", "Overdue, next 7 days and later priorities", "Action history", "Local reminders and notifications", "Android widget", "Local backup and restore", "Light and dark modes, French and English"],
    },
    privacyLead: {
      fr: "Les équipements, tâches et préférences restent sur l’appareil, sauf export ou partage volontaire.",
      en: "Equipment, tasks and preferences remain on the device unless voluntarily exported or shared.",
    },
  },
  {
    slug: "memoa",
    name: "Memoa",
    platform: "Android",
    platformKey: "android",
    status: "preparing",
    statusLabel: { fr: "Bientôt disponible", en: "Coming soon" },
    storeLabel: null,
    storeUrl: null,
    packageName: "com.nanouk.widgetanniversairesdates",
    icon: "/assets/apps/memoa/icon.png",
    screenshots: [],
    accent: "gold",
    summary: {
      fr: "Anniversaires et dates importantes, visibles sur votre écran d’accueil.",
      en: "Birthdays and important dates, right on your Android home screen.",
    },
    description: {
      fr: [
        "Les belles attentions commencent par une date que l’on n’oublie pas.",
        "Memoa réunit vos anniversaires, rendez-vous, échéances et événements personnels dans une application claire, pensée autour d’un widget Android élégant. Consultez ce qui arrive, organisez vos proches et gardez vos prochaines dates visibles depuis l’écran d’accueil.",
      ],
      en: [
        "Thoughtful moments start with a date you remember.",
        "Memoa brings birthdays, appointments, deadlines, and personal events together in a clear app built around an elegant Android widget. See what’s coming up, organize the people who matter, and keep your next dates visible from your home screen.",
      ],
    },
    features: {
      fr: ["Achat unique, sans abonnement ni achat intégré", "Anniversaires et autres dates importantes", "Récurrence annuelle ou événement ponctuel", "Personnes et photos locales facultatives", "Catégories intégrées ou personnalisées", "Compte à rebours avant chaque événement", "Vue calendrier mensuelle", "Rappels locaux à l’heure choisie", "Widget redimensionnable", "Contenu et couleurs du widget personnalisables", "Thèmes clair, sombre ou système", "Export et import des données principales au format JSON", "Français et anglais"],
      en: ["One-time purchase with no subscription or in-app purchase", "Birthdays and other important dates", "Yearly recurrence or one-time events", "People and optional locally stored photos", "Built-in or custom categories", "Days remaining before each event", "Monthly calendar view", "Local reminders at the chosen time", "Resizable home-screen widget", "Customisable widget content and colours", "Light, dark or system theme", "JSON export and import for main data", "English and French"],
    },
    privacyLead: {
      fr: "Les événements, personnes, notes et photos restent dans l’espace privé de l’application sur votre appareil.",
      en: "Events, people, notes and photos remain in the app’s private storage on your device.",
    },
  },
];

export const findApp = (slug) => apps.find((app) => app.slug === slug || app.privacySlug === slug);
