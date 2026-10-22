const shots = (lang) => Array.from({ length: 6 }, (_, index) => `/assets/apps/escale/screen-${lang}-${index + 1}.jpg`);

export const escaleApps = [
  {
    slug: "escale",
    name: "Escale – Carnet de voyage et PDF",
    platform: "Windows",
    platformKey: "windows",
    status: "published",
    statusLabel: { fr: "Disponible sur Microsoft Store", en: "Available on Microsoft Store" },
    storeLabel: { fr: "Essayer sur Microsoft Store", en: "Try on Microsoft Store" },
    storeUrl: "https://apps.microsoft.com/detail/9NWVQSVP03RH",
    icon: "/assets/apps/escale/icon.png",
    monogram: "E",
    accent: "cyan",
    screenshots: { fr: shots("fr"), en: shots("en") },
    summary: {
      fr: "Planifiez vos voyages jour par jour, suivez budget et réservations, et emportez un magnifique carnet PDF.",
      en: "Plan your trips day by day, track budget and bookings, and take a beautiful PDF travel book with you.",
    },
    description: {
      fr: [
        "Escale transforme la préparation d’un voyage en plaisir : programme jour par jour, réservations, budget multi-devises, valise intelligente et un carnet PDF soigné à emporter.",
        "Tapez « 14h30 Musée du Chiado, Chiado » et Escale crée l’étape. Les voyages peuvent compter plusieurs destinations et plusieurs pays, avec monnaie, prises, langue, sens de la conduite, décalage horaire et numéros d’urgence suivis pour chacun. Des vérifications automatiques signalent une nuit sans hébergement, un passeport qui expire trop tôt ou une démarche en retard.",
        "Le carnet PDF réunit couverture illustrée, programme avec QR codes d’itinéraire, adresses cliquables, réservations, budget, valise et fiche d’urgence, en A4 ou Letter. Le programme s’exporte aussi vers votre calendrier.",
        "Essai gratuit de 7 jours via Microsoft Store, puis achat unique de 4,49 € en France (prix en devise locale affiché par Microsoft ailleurs). Sans abonnement, sans compte, sans publicité : vos voyages restent sur votre PC et tout fonctionne hors ligne.",
      ],
      en: [
        "Escale turns trip planning into something you enjoy: a day-by-day itinerary, bookings, a multi-currency budget, a smart suitcase and a polished PDF travel book to take along.",
        "Type “2:30pm Chiado Museum, Chiado” and Escale builds the stop. Trips can include several destinations and countries, with currency, plugs, language, driving side, time difference and emergency numbers tracked for each. Automatic checks flag a night without accommodation, a passport expiring too soon or a task running late.",
        "The PDF travel book brings together an illustrated cover, an itinerary with route QR codes, clickable addresses, bookings, budget, packing list and an emergency sheet, in A4 or Letter. The itinerary can also be exported to your calendar.",
        "Free 7-day trial through Microsoft Store, then a one-time purchase of €4.49 in France (Microsoft shows the local currency price elsewhere). No subscription, no account, no ads: your trips stay on your PC and everything works offline.",
      ],
    },
    features: {
      fr: [
        "Programme jour par jour : ajoutez une étape en une phrase, glissez-la d’un jour à l’autre",
        "Voyages à plusieurs destinations avec monnaie, prises, décalage horaire et urgences par pays",
        "Vérifications automatiques : nuits sans hébergement, passeport trop court, démarches en retard",
        "Réservations en cartes d’embarquement, avec numéros de confirmation et captures de billets",
        "Budget en devises locales avec conversion, et « qui doit quoi »",
        "Valise intelligente selon la durée, le climat et les activités",
        "Carnet PDF soigné avec QR codes d’itinéraire, adresses cliquables et fiche d’urgence",
        "Privé et hors ligne, interface en français, anglais, espagnol, allemand, italien et portugais",
      ],
      en: [
        "Day-by-day itinerary: add a stop in one sentence, drag stops between days",
        "Multi-destination trips with currency, plugs, time difference and emergency numbers per country",
        "Automatic checks: nights without accommodation, passports expiring too soon, overdue tasks",
        "Bookings shown as boarding passes, with confirmation numbers and ticket screenshots",
        "Budget with local currencies and conversion, plus “who owes what”",
        "Smart suitcase based on trip length, climate and activities",
        "Polished PDF travel book with QR route codes, clickable addresses and an emergency sheet",
        "Private and offline, in French, English, Spanish, German, Italian and Portuguese",
      ],
    },
    privacyLead: {
      fr: "Vos voyages, réservations, budgets et photos restent sur le PC. Aucun compte, aucune publicité, aucune analyse d’usage.",
      en: "Your trips, bookings, budgets and photos stay on the PC. No account, no ads, no usage analytics.",
    },
  },
];

const updated = { fr: "22 octobre 2026", en: "October 22, 2026" };

export const escalePolicies = {
  escale: {
    lastUpdated: updated,
    summary: {
      fr: "Escale garde vos voyages sur votre PC, sans compte ni envoi de données. Les PDF sont enregistrés là où vous le choisissez.",
      en: "Escale keeps your trips on your PC, with no account and no data sent. PDFs are saved where you choose.",
    },
    sections: {
      fr: [
        { title: "Éditeur et portée", paragraphs: ["Cette politique concerne uniquement l’application Windows Escale – Carnet de voyage et PDF, éditée par Nanouk Candela, entrepreneur individuel sous le nom commercial Studio501, France.", "Contact pour la confidentialité et le support : contact@studio501.fr."] },
        { title: "Informations traitées localement", paragraphs: ["Escale enregistre sur votre PC les informations que vous saisissez : voyages, étapes, réservations, numéros de confirmation, budgets, dépenses, listes de valise, documents à vérifier et images (par exemple des captures de billets) que vous ajoutez. Ces données sont conservées dans le stockage local de l’application sur votre appareil.", "Aucune de ces informations n’est transmise à Studio501 ni à un serveur : l’application ne contient aucun compte, aucune publicité, aucun outil d’analyse et ne fonctionne pas via un service en ligne. Les données de référence par pays (monnaie, prises, numéros d’urgence) sont intégrées à l’application."] },
        { title: "Carnet PDF, calendrier et sauvegardes", paragraphs: ["Le carnet PDF, l’export calendrier (.ics) et les sauvegardes sont créés sur votre PC à l’emplacement que vous choisissez. Studio501 n’y a pas accès. Si vous partagez ces fichiers, leur contenu relève de votre choix.", "Les adresses du carnet et les codes QR ouvrent un itinéraire dans votre application ou site de cartes seulement lorsque vous cliquez ou scannez ; le service de cartes choisi applique alors sa propre politique."] },
        { title: "Conservation et suppression", paragraphs: ["Les données restent sur l’appareil jusqu’à ce que vous les supprimiez dans l’application (suppression d’un voyage) ou que vous désinstalliez Escale, ce qui supprime les données locales de l’application. Les fichiers PDF, calendrier et sauvegardes que vous avez exportés restent à leur emplacement jusqu’à ce que vous les supprimiez."] },
        { title: "Services Windows et Microsoft distincts", paragraphs: ["Windows, Microsoft Store, la licence d’achat, l’essai gratuit, les mises à jour et le composant Microsoft Edge WebView2 utilisé pour l’affichage sont exploités séparément par Microsoft selon ses réglages et politiques. L’application n’ajoute aucun suivi et ne leur transmet pas le contenu de vos voyages. Un compte Microsoft Store peut être nécessaire pour obtenir l’essai ou acheter l’application ; aucun compte Studio501 n’est créé."] },
        { title: "Support et droits", paragraphs: ["Les informations que vous envoyez volontairement au support, notamment votre adresse e-mail et le contenu du message, servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni utilisées pour la publicité. Vous pouvez demander l’accès, la rectification ou la suppression de ces informations à contact@studio501.fr."] },
        { title: "Modifications", paragraphs: ["Toute modification des traitements décrits ici sera accompagnée d’une mise à jour de cette politique et de sa date. L’application ne cible pas spécifiquement les enfants."] },
      ],
      en: [
        { title: "Publisher and scope", paragraphs: ["This policy applies only to the Windows app Escale – Travel Planner & PDF, published by Nanouk Candela, a sole proprietor trading as Studio501, France.", "Privacy and support contact: contact@studio501.fr."] },
        { title: "Information processed locally", paragraphs: ["Escale stores on your PC the information you enter: trips, stops, bookings, confirmation numbers, budgets, expenses, packing lists, documents to check and images you add (for example screenshots of tickets). This data is kept in the app’s local storage on your device.", "None of this information is sent to Studio501 or to any server: the app has no account, no ads, no analytics and does not rely on an online service. Reference data per country (currency, plugs, emergency numbers) is built into the app."] },
        { title: "PDF travel book, calendar and backups", paragraphs: ["The PDF travel book, the calendar export (.ics) and backups are created on your PC in the location you choose. Studio501 has no access to them. If you share these files, their content is your choice.", "Addresses and QR codes in the travel book open a route in your maps app or website only when you click or scan; the chosen maps service then applies its own policy."] },
        { title: "Retention and deletion", paragraphs: ["Data stays on your device until you delete it in the app (deleting a trip) or uninstall Escale, which removes the app’s local data. PDF, calendar and backup files you exported stay where you saved them until you delete them."] },
        { title: "Separate Windows and Microsoft services", paragraphs: ["Windows, Microsoft Store, the purchase licence, the free trial, updates and the Microsoft Edge WebView2 component used for display are operated separately by Microsoft under its own settings and policies. The app adds no tracking and does not send the content of your trips to them. A Microsoft Store account may be needed to start the trial or buy the app; no Studio501 account is created."] },
        { title: "Support and your rights", paragraphs: ["Information you voluntarily send to support, such as your email address and message, is used only to answer your request. It is not sold or used for advertising. You can request access, correction or deletion at contact@studio501.fr."] },
        { title: "Changes", paragraphs: ["Any change to the processing described here will come with an update of this policy and its date. The app does not specifically target children."] },
      ],
    },
  },
};
