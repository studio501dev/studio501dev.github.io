// Budget Pilot — application Windows de gestion de budget, 100 % locale (MSIX, Microsoft Store).
// Faits vérifiés dans le code de l’application (version 2.0, octobre 2026) : aucune permission réseau, aucun compte, aucune télémétrie.
// Prix et lien Microsoft Store : à renseigner à la publication (status: "published" + storeUrl).

const preparing = {
  statusLabel: { fr: "Publication en préparation", en: "Preparing for release" },
  storeLabel: { fr: "Bientôt sur Microsoft Store", en: "Coming soon on Microsoft Store" },
};

export const budgetPilotApps = [
  {
    slug: "budget-pilot",
    name: "Budget Pilot",
    platform: "Windows",
    platformKey: "windows",
    status: "preparing",
    ...preparing,
    icon: "/assets/apps/budget-pilot/icon.png",
    screenshots: {
      fr: Array.from({ length: 5 }, (_, index) => `/assets/apps/budget-pilot/fr-${index + 1}.jpg`),
      en: Array.from({ length: 5 }, (_, index) => `/assets/apps/budget-pilot/en-${index + 1}.jpg`),
    },
    accent: "mint",
    applicationCategory: "FinanceApplication",
    featuresTitle: { fr: "Ce qui change votre rapport à l’argent", en: "What changes your relationship with money" },
    summary: {
      fr: "Budgets, objectifs d’épargne et suivi des dépenses. Privé, hors ligne, sans compte.",
      en: "Budgets, savings goals and spending tracking. Private, offline, no account.",
    },
    description: {
      fr: [
        "Budget Pilot vous montre où part votre argent et vous aide à mieux le dépenser. Suivez vos comptes, vos revenus et vos dépenses, fixez un plafond mensuel par catégorie et soyez prévenu avant de le dépasser.",
        "Épargnez pour ce qui compte avec des objectifs qui indiquent combien mettre de côté chaque mois. Loyer, salaire et abonnements s’enregistrent tout seuls, et l’import du fichier CSV de votre banque remplace la saisie à la main.",
        "Vos données restent sur votre ordinateur : pas de compte, pas de connexion bancaire, pas de publicité. Le score de santé financière et les conseils sont indicatifs et ne remplacent pas l’avis d’un professionnel.",
      ],
      en: [
        "Budget Pilot shows you where your money goes and helps you spend it better. Track your accounts, income and spending, set a monthly limit per category and get a warning before you go over it.",
        "Save for what matters with goals that tell you how much to set aside each month. Rent, salary and subscriptions record themselves, and importing your bank’s CSV file replaces typing by hand.",
        "Your data stays on your computer: no account, no bank connection, no advertising. The financial health score and the tips are indicative and do not replace professional advice.",
      ],
    },
    features: {
      fr: [
        "Tableau de bord : solde, courbe sur 30 jours, revenus, dépenses et solde prévu en fin de mois",
        "Score de santé financière et conseils en langage clair",
        "Budgets par catégorie avec alertes verte, orange et rouge",
        "Objectifs d’épargne avec le montant mensuel à viser",
        "Opérations récurrentes ajoutées automatiquement à chaque échéance",
        "Import de l’export CSV de la banque : doublons ignorés, catégories devinées",
        "Virements entre comptes sans effet sur les dépenses",
        "Annulation après chaque suppression et sauvegarde automatique quotidienne",
        "Thèmes sombre et clair, 7 devises, code PIN facultatif",
        "Interface en français, anglais, espagnol, allemand, italien, portugais du Brésil et néerlandais",
      ],
      en: [
        "Dashboard: balance, 30-day curve, income, spending and projected month-end balance",
        "Financial health score and plain-language tips",
        "Budgets by category with green, orange and red alerts",
        "Savings goals with the monthly amount to aim for",
        "Recurring items added automatically on each due date",
        "Import your bank’s CSV export: duplicates skipped, categories guessed",
        "Transfers between accounts that do not count as spending",
        "Undo after every deletion and a daily automatic backup",
        "Dark and light themes, 7 currencies, optional PIN lock",
        "Interface in French, English, Spanish, German, Italian, Brazilian Portuguese and Dutch",
      ],
    },
    privacyLead: {
      fr: "Comptes, transactions, budgets et objectifs restent sur votre ordinateur. Aucun compte, aucune publicité, aucune télémétrie, aucune connexion à votre banque.",
      en: "Accounts, transactions, budgets and goals stay on your computer. No account, no advertising, no telemetry, no connection to your bank.",
    },
  },
];

const controller = {
  fr: { title: "Éditeur et portée", paragraphs: ["Cette politique concerne uniquement l’application Windows Budget Pilot, éditée par Nanouk Candela, entrepreneur individuel sous le nom commercial Studio501, France.", "Contact pour la confidentialité et le support : contact@studio501.fr. L’adresse studio501.dev@gmail.com reste disponible."] },
  en: { title: "Publisher and scope", paragraphs: ["This policy applies only to the Budget Pilot Windows application, published by Nanouk Candela, a sole proprietor trading as Studio501, France.", "Privacy and support contact: contact@studio501.fr. studio501.dev@gmail.com also remains available."] },
};

export const budgetPilotPolicies = {
  "budget-pilot": {
    lastUpdated: { fr: "21 octobre 2026", en: "October 21, 2026" },
    summary: {
      fr: "Budget Pilot ne collecte aucune donnée personnelle. Tout reste sur votre ordinateur et l’application n’utilise pas Internet.",
      en: "Budget Pilot collects no personal data. Everything stays on your computer and the app does not use the Internet.",
    },
    sections: {
      fr: [
        controller.fr,
        { title: "Informations enregistrées sur votre appareil", paragraphs: ["Budget Pilot enregistre ce que vous saisissez : comptes et soldes, transactions, catégories, budgets, objectifs d’épargne et opérations récurrentes. Il enregistre aussi vos réglages : thème, langue, devise, taille et position de la fenêtre, et l’empreinte de votre code PIN si vous en définissez un (le code lui-même n’est jamais conservé).", "Ces informations sont stockées dans le dossier de données de l’application de votre session Windows (%LOCALAPPDATA%\\MonBudget). Aucune n’est transmise à Studio501 ni à un serveur."] },
        { title: "Ce que l’application ne fait pas", paragraphs: ["Budget Pilot n’exige aucun compte, n’affiche aucune publicité, ne contient aucun outil d’analyse d’usage ni de suivi et n’établit aucune connexion Internet. Il ne se connecte pas à votre banque et ne demande ni numéro de compte, ni numéro de carte, ni mot de passe bancaire."] },
        { title: "Import CSV, exports et sauvegardes", paragraphs: ["L’import lit localement le fichier CSV que vous choisissez : date, libellé et montant. Il sert uniquement à créer des transactions dans Budget Pilot, sans copie ailleurs.", "Une sauvegarde automatique est enregistrée chaque jour dans %LOCALAPPDATA%\\MonBudget\\backups et les 14 plus récentes sont conservées. Les exports CSV et les sauvegardes JSON que vous créez vous-même sont enregistrés à l’emplacement que vous choisissez ; ils ne sont pas protégés par le code PIN."] },
        { title: "Code PIN", paragraphs: ["Le code PIN facultatif verrouille l’accès à l’application à son ouverture. Il ne chiffre pas le fichier de données : une personne qui peut lire vos fichiers Windows peut lire ce fichier. Pour protéger l’ensemble, utilisez aussi le verrouillage de session Windows et le chiffrement du disque."] },
        { title: "Journal d’erreurs", paragraphs: ["Si une erreur inattendue survient, un message technique est ajouté à %LOCALAPPDATA%\\MonBudget\\error.log. Il reste sur votre ordinateur et peut, exceptionnellement, contenir une valeur que vous venez de saisir. Rien n’est envoyé automatiquement : vous pouvez le joindre à une demande de support si vous le souhaitez."] },
        { title: "Conservation et suppression", paragraphs: ["Vos données restent jusqu’à ce que vous les supprimiez. Désinstaller Budget Pilot depuis Windows supprime son dossier de données. Vous pouvez aussi supprimer manuellement %LOCALAPPDATA%\\MonBudget, ainsi que les exports et sauvegardes que vous avez créés."] },
        { title: "Score de santé financière et conseils", paragraphs: ["Le score et les conseils sont calculés sur votre appareil à partir de vos saisies. Ils sont indicatifs et ne constituent pas un conseil financier, fiscal ou juridique."] },
        { title: "Services Windows et Microsoft distincts", paragraphs: ["Windows, Microsoft Store, l’achat éventuel, les mises à jour et les rapports de fiabilité du système sont exploités séparément par Microsoft selon ses réglages et politiques. Budget Pilot n’ajoute aucun suivi et ne leur transmet pas vos données financières."] },
        { title: "Support et droits", paragraphs: ["Les informations que vous envoyez volontairement au support, notamment votre adresse e-mail et le contenu du message, servent uniquement à répondre à votre demande et à son suivi. Elles ne sont ni vendues ni utilisées pour la publicité et sont conservées uniquement pendant la durée raisonnablement nécessaire.", "Vous pouvez demander l’accès, la rectification ou la suppression de ces informations à contact@studio501.fr. N’envoyez pas de relevés ou de fichiers personnels qui ne sont pas nécessaires à votre demande."] },
        { title: "Modifications et enfants", paragraphs: ["Toute modification des traitements décrits ici sera accompagnée d’une mise à jour de cette politique et de sa date. L’application ne cible pas spécifiquement les enfants et ne collecte aucune donnée auprès d’eux."] },
      ],
      en: [
        controller.en,
        { title: "Information stored on your device", paragraphs: ["Budget Pilot stores what you enter: accounts and balances, transactions, categories, budgets, savings goals and recurring items. It also stores your settings: theme, language, currency, window size and position, and a hash of your PIN if you set one (the PIN itself is never kept).", "This information is stored in the application data folder of your Windows user session (%LOCALAPPDATA%\\MonBudget). None of it is sent to Studio501 or to any server."] },
        { title: "What the app does not do", paragraphs: ["Budget Pilot requires no account, shows no advertising, contains no usage analytics or tracking tool and makes no Internet connection. It does not connect to your bank and never asks for a bank account number, card number or banking password."] },
        { title: "CSV import, exports and backups", paragraphs: ["Import reads the CSV file you choose locally: date, description and amount. It is used only to create transactions inside Budget Pilot, with no copy elsewhere.", "A daily automatic backup is saved in %LOCALAPPDATA%\\MonBudget\\backups and the 14 most recent are kept. CSV exports and JSON backups you create yourself are saved where you choose; they are not protected by the PIN."] },
        { title: "PIN", paragraphs: ["The optional PIN locks access to the app when it opens. It does not encrypt the data file: anyone who can read your Windows files can read it. To protect everything, also use Windows session locking and disk encryption."] },
        { title: "Error log", paragraphs: ["If an unexpected error occurs, a technical message is appended to %LOCALAPPDATA%\\MonBudget\\error.log. It stays on your computer and may, exceptionally, contain a value you have just entered. Nothing is sent automatically: you may attach it to a support request if you wish."] },
        { title: "Retention and deletion", paragraphs: ["Your data remains until you delete it. Uninstalling Budget Pilot from Windows removes its data folder. You can also manually delete %LOCALAPPDATA%\\MonBudget, as well as any exports and backups you created."] },
        { title: "Financial health score and tips", paragraphs: ["The score and tips are computed on your device from what you enter. They are indicative and are not financial, tax or legal advice."] },
        { title: "Separate Windows and Microsoft services", paragraphs: ["Windows, Microsoft Store, any purchase, updates and system reliability reports are operated separately by Microsoft under their own settings and policies. Budget Pilot adds no tracking and does not send them your financial data."] },
        { title: "Support and your rights", paragraphs: ["Information voluntarily sent to support, including your email address and message, is used only to respond and follow up. It is not sold or used for advertising and is retained only as reasonably necessary.", "You may request access, correction or deletion of that information at contact@studio501.fr. Do not send statements or personal files that are unnecessary for your request."] },
        { title: "Changes and children", paragraphs: ["Changes to the processing described here will be accompanied by an updated policy and date. The app is not specifically directed at children and collects no data from them."] },
      ],
    },
  },
};
