// Public content adapted from the applications’ store policies and support FAQs.
// Reviewed against current source manifests and Google Play In-App Updates documentation.
export const launchPolicies = {
  "ma-voiture": {
    "lastUpdated": {
      "fr": "4 septembre 2026",
      "en": "September 4, 2026"
    },
    "summary": {
      "fr": "Les données du carnet automobile restent sur votre appareil, sauf export ou partage choisi. Google Play gère les vérifications et l’installation des mises à jour.",
      "en": "Vehicle logbook data stays on your device unless you choose to export or share it. Google Play handles update checks and installation."
    },
    "sections": {
      "en": [
        {
          "title": "Controller and contact",
          "paragraphs": [
            "Ma Voiture (My Car) is published by Nanouk Candela, sole proprietor trading as Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN: 104 315 957.",
            "Privacy and support contact: contact@studio501.fr. studio501.dev@gmail.com also remains available."
          ]
        },
        {
          "title": "Local operation",
          "paragraphs": [
            "The app is designed to work offline, with no Studio501 account, advertising, marketing analytics, tracking SDK, or Studio501 server. It does not request the Internet permission, and Android automatic backup is disabled."
          ]
        },
        {
          "title": "Data processed on your device",
          "paragraphs": [
            "Depending on your choices, the app may store optional vehicle identity, registration and VIN, photos, odometer readings, maintenance, fuel or charging entries, costs, tyres, reminders, notes, preferences, and imported document metadata/files. This information is used only for local logbook features, calculations, notifications, exports, and backups."
          ]
        },
        {
          "title": "Collection and sharing by Studio501",
          "paragraphs": [
            "Studio501 does not receive, collect, sell, or share entered vehicle data. The app does not contact a VIN decoder, OBD service, manufacturer, or bank."
          ]
        },
        {
          "title": "App updates",
          "paragraphs": [
            "When you open the app, it may ask Google Play whether an update is available. Google Play handles this check, download and installation with your consent. Google documents that this service processes device metadata, the app version and installed modules to determine update availability and size. This information is encrypted and processed under Google Play policies. This feature does not transmit vehicles, documents, expenses or other logbook information.",
            "You can postpone installation. The logbook remains usable offline and on devices without Google Play. .",
            "When you use Android’s file picker, Sharesheet, an external viewer, or a backup destination, you choose a third-party app or service. Data you send there is governed by that destination’s practices."
          ],
          "links": [
            {
              "label": "Google Play update service data information",
              "href": "https://developer.android.com/guide/playcore/in-app-updates#data-safety"
            }
          ]
        },
        {
          "title": "Documents and sensitive data",
          "paragraphs": [
            "Chosen images and PDFs are validated by media type and signature, limited to 50 MiB, then copied without modifying the source into private app storage. External opening and sharing receive a temporary read grant. A digital copy is not guaranteed to have legal validity. Use masking controls and share only with destinations you trust."
          ]
        },
        {
          "title": "Notifications",
          "paragraphs": [
            "On applicable Android versions, permission is requested only after you enable a reminder. You may refuse or revoke it. Wording is generic, Android may delay delivery, and no exact-alarm permission is requested."
          ]
        },
        {
          "title": "Exports and backups",
          "paragraphs": [
            "CSV, PDF, and backup files leave private storage only for a destination you select. A backup may include attachments. Without a password it is not encrypted. With the password option, it is protected locally using AES-256-GCM and a PBKDF2-HMAC-SHA256 derived key (210,000 iterations in this version). Studio501 does not know or recover the password. This encryption protects the backup file, not the active database."
          ]
        },
        {
          "title": "Retention and deletion",
          "paragraphs": [
            "Data stays in the app’s storage until you edit or delete it, clear storage, or uninstall. You can archive or delete vehicles and records, export a copy, and then clear local data. Files already exported remain under your control at their destination."
          ]
        },
        {
          "title": "Security, children, and changes",
          "paragraphs": [
            "Active data relies on Android application sandboxing, which is not an absolute guarantee on a compromised device. My Car is a personal utility and is not specifically directed at children. This policy will be revised if permissions, dependencies, or processing practices change."
          ]
        }
      ],
      "fr": [
        {
          "title": "Responsable et contact",
          "paragraphs": [
            "Ma Voiture est éditée par Nanouk Candela, entrepreneur individuel exerçant sous le nom commercial Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN : 104 315 957.",
            "Contact confidentialité et assistance : contact@studio501.fr. L’adresse studio501.dev@gmail.com reste également disponible."
          ]
        },
        {
          "title": "Fonctionnement local",
          "paragraphs": [
            "L’application est conçue pour fonctionner hors connexion, sans compte Studio501, publicité, analyse marketing, SDK de suivi ni serveur Studio501. Elle ne demande pas la permission Internet et la sauvegarde Android automatique est désactivée."
          ]
        },
        {
          "title": "Données traitées sur votre appareil",
          "paragraphs": [
            "Selon vos choix, l’application peut stocker l’identité facultative de véhicules, immatriculation et VIN, photos, kilométrages, entretiens, pleins ou recharges, dépenses, pneus, rappels, notes, préférences et métadonnées/documents importés. Ces informations servent uniquement aux fonctions du carnet, aux calculs locaux, notifications, exports et sauvegardes."
          ]
        },
        {
          "title": "Collecte et partage par Studio501",
          "paragraphs": [
            "Studio501 ne reçoit, ne collecte, ne vend et ne partage aucune donnée automobile saisie. Aucun décodeur VIN, service OBD, constructeur ou banque n’est contacté."
          ]
        },
        {
          "title": "Mises à jour de l’application",
          "paragraphs": [
            "À l’ouverture, l’application peut demander à Google Play si une mise à jour est disponible. Google Play gère cette vérification, le téléchargement et l’installation après votre accord. Selon la documentation de Google, ce service traite des métadonnées de l’appareil, la version de l’application et les modules installés pour déterminer la mise à jour disponible et sa taille. Les informations sont chiffrées et traitées selon les règles de Google Play. Les véhicules, documents, dépenses et autres données du carnet ne sont pas transmis par cette fonctionnalité.",
            "Vous pouvez remettre l’installation à plus tard. Le carnet reste utilisable hors connexion et sur un appareil sans Google Play. .",
            "Quand vous utilisez le sélecteur de fichiers, la feuille de partage, un lecteur externe ou une destination de sauvegarde, vous choisissez une application ou un service tiers. Les données que vous lui confiez sont alors régies par ses propres pratiques."
          ],
          "links": [
            {
              "label": "Données du service de mise à jour Google Play",
              "href": "https://developer.android.com/guide/playcore/in-app-updates#data-safety"
            }
          ]
        },
        {
          "title": "Documents et données sensibles",
          "paragraphs": [
            "Les images et PDF choisis sont validés par type et signature, limités à 50 Mio, puis copiés sans modifier la source dans l’espace privé de l’application. Les ouvertures et partages reçoivent une autorisation de lecture temporaire. Une copie numérique n’a pas de valeur légale garantie. Utilisez les options de masquage et ne partagez qu’avec des destinations de confiance."
          ]
        },
        {
          "title": "Notifications",
          "paragraphs": [
            "Sur les versions Android concernées, l’autorisation est demandée seulement après l’activation d’un rappel. Vous pouvez la refuser ou la retirer. Le contenu est générique et Android peut différer sa remise ; aucun réveil exact n’est demandé."
          ]
        },
        {
          "title": "Exports et sauvegardes",
          "paragraphs": [
            "Les CSV, PDF et sauvegardes quittent l’espace privé uniquement vers la destination que vous sélectionnez. Une sauvegarde peut inclure des pièces jointes. Sans mot de passe, elle n’est pas chiffrée. Avec l’option mot de passe, elle est protégée localement par AES-256-GCM et une clé dérivée par PBKDF2-HMAC-SHA256 (210 000 itérations dans cette version). Studio501 ne connaît pas le mot de passe et ne peut pas le récupérer. Ce chiffrement concerne le fichier de sauvegarde, pas la base active."
          ]
        },
        {
          "title": "Conservation et suppression",
          "paragraphs": [
            "Les données restent dans l’espace de l’application jusqu’à leur modification, suppression, effacement du stockage ou désinstallation. Vous pouvez archiver ou supprimer des véhicules et enregistrements, exporter une copie puis effacer les données. Les fichiers déjà exportés restent sous votre contrôle dans leur destination."
          ]
        },
        {
          "title": "Sécurité, enfants et modifications",
          "paragraphs": [
            "Les données actives reposent sur l’isolation applicative Android, qui ne constitue pas une garantie absolue sur un appareil compromis. Ma Voiture est un outil personnel et ne cible pas spécifiquement les enfants. Cette politique sera révisée si les permissions, dépendances ou pratiques de traitement changent."
          ]
        }
      ]
    }
  },
  "mes-abonnements": {
    "lastUpdated": {
      "fr": "4 septembre 2026",
      "en": "September 4, 2026"
    },
    "summary": {
      "fr": "Les abonnements, montants et documents sont traités localement. Google Play gère séparément les vérifications et l’installation des mises à jour.",
      "en": "Subscriptions, amounts and documents are processed locally. Google Play separately handles update checks and installation."
    },
    "sections": {
      "en": [
        {
          "title": "Controller and contact",
          "paragraphs": [
            "Mes Abonnements (My Subscriptions) is published by Nanouk Candela, sole proprietor trading as Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN: 104 315 957.",
            "Privacy and support contact: contact@studio501.fr. studio501.dev@gmail.com also remains available."
          ]
        },
        {
          "title": "Local operation",
          "paragraphs": [
            "The app is designed to work locally and offline, with no Studio501 account, advertising, marketing analytics, tracking SDK, or Studio501 server.",
            "The app does not request the Internet permission. Android automatic backup and automatic transfer of app data are disabled."
          ]
        },
        {
          "title": "Data processed on your device",
          "paragraphs": [
            "Depending on your entries, the app may store subscription names and categories, amounts and currencies, due dates and recurrence rules, trials, cancellation dates, reminders, price history, manual rates, notes, optional customer references, preferences, and imported documents. This data supports the dashboard, projections, reminders, exports, and backups."
          ]
        },
        {
          "title": "Collection and sharing by Studio501",
          "paragraphs": [
            "Studio501 does not receive, collect, sell or share entered subscription data. The app does not contact banks or providers and does not cancel services.",
            "If you use Android’s file picker, Sharesheet, a backup destination, or an external viewer, you choose a third-party app or service. Data sent there is governed by that destination’s terms."
          ]
        },
        {
          "title": "App updates",
          "paragraphs": [
            "When the app opens, it may check with Google Play whether an update is available. Google Play handles the check, download and installation. The service processes device metadata, the app version and installed modules or asset packs to determine update availability and size. This information is encrypted and processed under Google Play policies.",
            "This feature does not transmit subscriptions, amounts, documents, notes or other logbook data. Tracking features remain available offline."
          ],
          "links": [
            {
              "label": "Google Play update service data information",
              "href": "https://developer.android.com/guide/playcore/in-app-updates#data-safety"
            }
          ]
        },
        {
          "title": "Notifications and privacy",
          "paragraphs": [
            "Notification permission is requested only when you enable your first reminder on applicable Android versions. You can refuse or revoke it. Privacy mode can hide amounts in notifications and the widget. Android does not guarantee an exact delivery time."
          ]
        },
        {
          "title": "Documents, exports, and backups",
          "paragraphs": [
            "Chosen documents are copied into private app storage. CSV, PDF, and backup files leave that space only for the destination you select. An unencrypted file can contain sensitive information and should be stored carefully.",
            "When you choose a password-protected backup, encryption is performed locally. Studio501 does not know and cannot recover your password."
          ]
        },
        {
          "title": "Retention, deletion, and choices",
          "paragraphs": [
            "Data stays in private app storage until you edit or delete it, replace it during a restore, clear Android app storage or uninstall. You can view, edit, archive, delete, export and disable reminders. Exported files remain at the chosen destination and must be deleted separately."
          ]
        },
        {
          "title": "Security",
          "paragraphs": [
            "Active data relies on Android application sandboxing, which is not an absolute guarantee on a compromised device. Share files only with destinations you trust."
          ]
        },
        {
          "title": "Children and changes",
          "paragraphs": [
            "The app is a personal financial tracking tool and is not specifically directed at children. This policy will be updated if permissions, dependencies, features, or processing practices change."
          ]
        }
      ],
      "fr": [
        {
          "title": "Responsable et contact",
          "paragraphs": [
            "Mes Abonnements est éditée par Nanouk Candela, entrepreneur individuel exerçant sous le nom commercial Studio501, 61 rue de Lyon, 75012 Paris, France. SIREN : 104 315 957.",
            "Contact confidentialité et assistance : contact@studio501.fr. L’adresse studio501.dev@gmail.com reste également disponible."
          ]
        },
        {
          "title": "Fonctionnement local",
          "paragraphs": [
            "L’application est conçue pour fonctionner localement et hors connexion, sans compte Studio501, publicité, analyse marketing, SDK de suivi ni serveur Studio501.",
            "L’application ne demande pas la permission Internet. La sauvegarde automatique Android et le transfert automatique des données de l’application sont désactivés."
          ]
        },
        {
          "title": "Données traitées sur votre appareil",
          "paragraphs": [
            "Selon vos saisies, l’application peut stocker des noms et catégories d’abonnements, montants et devises, échéances et règles de récurrence, essais, dates de résiliation, rappels, historique des prix, taux manuels, notes, identifiants client facultatifs, préférences et documents importés. Ces données servent au tableau de bord, aux projections, rappels, exports et sauvegardes."
          ]
        },
        {
          "title": "Collecte et partage par Studio501",
          "paragraphs": [
            "Studio501 ne reçoit, ne collecte, ne vend et ne partage aucune donnée d’abonnement saisie. L’application ne contacte ni banque ni fournisseur et ne résilie aucun service.",
            "Si vous utilisez le sélecteur de fichiers, la feuille de partage, un emplacement de sauvegarde ou un lecteur externe, vous choisissez une application ou un service tiers. Les données envoyées sont alors soumises à ses propres conditions."
          ]
        },
        {
          "title": "Mises à jour de l’application",
          "paragraphs": [
            "À l’ouverture, l’application peut vérifier auprès de Google Play si une mise à jour est disponible. Google Play gère la vérification, le téléchargement et l’installation. Ce service traite des métadonnées de l’appareil, la version de l’application et les modules ou packs installés pour déterminer la disponibilité et la taille d’une mise à jour. Ces informations sont chiffrées et traitées selon les règles de Google Play.",
            "Les abonnements, montants, documents, notes et autres données du carnet ne sont pas transmis par cette fonctionnalité. Les fonctions de suivi restent disponibles hors connexion."
          ],
          "links": [
            {
              "label": "Données du service de mise à jour Google Play",
              "href": "https://developer.android.com/guide/playcore/in-app-updates#data-safety"
            }
          ]
        },
        {
          "title": "Notifications et confidentialité",
          "paragraphs": [
            "L’autorisation de notification n’est demandée que lorsque vous activez un premier rappel sur les versions Android concernées. Vous pouvez la refuser ou la retirer. Le mode de confidentialité peut masquer les montants dans les notifications et le widget. Android ne garantit pas une heure de livraison exacte."
          ]
        },
        {
          "title": "Documents, exports et sauvegardes",
          "paragraphs": [
            "Les documents choisis sont copiés dans l’espace privé de l’application. Les CSV, PDF et sauvegardes quittent cet espace uniquement vers la destination que vous sélectionnez. Un fichier non chiffré peut contenir des informations sensibles et doit être conservé avec précaution.",
            "Lorsque vous choisissez une sauvegarde protégée par mot de passe, le chiffrement est réalisé localement. Studio501 ne connaît pas et ne peut pas récupérer votre mot de passe."
          ]
        },
        {
          "title": "Conservation, suppression et choix",
          "paragraphs": [
            "Les données restent dans l’espace privé de l’application jusqu’à leur modification, suppression, remplacement lors d’une restauration, effacement du stockage Android ou désinstallation. Vous pouvez consulter, modifier, archiver, supprimer, exporter et désactiver les rappels. Les fichiers exportés restent dans la destination choisie et doivent être supprimés séparément."
          ]
        },
        {
          "title": "Sécurité",
          "paragraphs": [
            "Les données actives reposent sur l’isolation applicative fournie par Android, sans garantie absolue sur un appareil compromis. Ne partagez vos fichiers qu’avec des destinations de confiance."
          ]
        },
        {
          "title": "Enfants et modifications",
          "paragraphs": [
            "L’application est un outil personnel de suivi financier et ne cible pas spécifiquement les enfants. Cette politique sera mise à jour si les permissions, dépendances, fonctionnalités ou pratiques de traitement changent."
          ]
        }
      ]
    }
  }
};

export const appSupport = {
  "ma-voiture": {
    "en": [
      {
        "title": "Does the app connect to my vehicle?",
        "paragraphs": [
          "No. It does not read OBD data, fetch the odometer automatically, or decode a VIN online. You enter the information you want to keep."
        ]
      },
      {
        "title": "Where is my data stored?",
        "paragraphs": [
          "In the app’s private local storage. No Studio501 account is required, the Internet permission is absent, and Android automatic backup is disabled."
        ]
      },
      {
        "title": "Are maintenance intervals official?",
        "paragraphs": [
          "No. Suggested values are editable examples. Refer to the vehicle manual, a qualified professional, and applicable rules for real deadlines."
        ]
      },
      {
        "title": "Why is no consumption result shown?",
        "paragraphs": [
          "The calculation needs coherent odometer readings and sufficient complete fills/charges. Partial entries are retained but must not create a misleading result."
        ]
      },
      {
        "title": "Why are currencies kept separate?",
        "paragraphs": [
          "My Car does not download exchange rates. Amounts in different currencies remain separate to avoid a false combined total."
        ]
      },
      {
        "title": "Why did a reminder not arrive at the exact time?",
        "paragraphs": [
          "Android schedules work efficiently and may delay it. Check notification permission and battery restrictions. A reminder is not a substitute for checking an important obligation."
        ]
      },
      {
        "title": "Do imported documents have legal validity?",
        "paragraphs": [
          "Not necessarily. The app keeps a convenient private copy but does not guarantee administrative or legal acceptance. Retain any required original."
        ]
      },
      {
        "title": "What goes into the resale report?",
        "paragraphs": [
          "Only the sections you choose. VIN, registration, and costs can be hidden. Always review the PDF before sending it."
        ]
      },
      {
        "title": "I forgot my backup password.",
        "paragraphs": [
          "Studio501 does not receive or retain it and cannot recover it. A protected backup cannot be opened without the correct password."
        ]
      },
      {
        "title": "How do I install an update?",
        "paragraphs": [
          "For an app installed through Google Play, an update may be offered when it opens. Follow the displayed Google Play flow and save your work before restarting. You can also use the Play Store’s usual updates."
        ]
      },
      {
        "title": "How do I ask for help?",
        "paragraphs": [
          "Contact: contact@studio501.fr. Do not send unnecessary VINs, registrations, documents, passwords, or financial details."
        ]
      }
    ],
    "fr": [
      {
        "title": "L’application se connecte-t-elle à ma voiture ?",
        "paragraphs": [
          "Non. Elle ne lit pas l’OBD, ne récupère pas automatiquement le compteur et ne décode pas le VIN en ligne. Vous saisissez les informations que vous souhaitez conserver."
        ]
      },
      {
        "title": "Où sont stockées mes données ?",
        "paragraphs": [
          "Dans l’espace local privé de l’application. Aucun compte Studio501 n’est nécessaire, la permission Internet est absente et la sauvegarde Android automatique est désactivée."
        ]
      },
      {
        "title": "Les intervalles d’entretien sont-ils officiels ?",
        "paragraphs": [
          "Non. Les valeurs proposées sont des exemples modifiables. Consultez le manuel du véhicule, un professionnel et les règles applicables pour vos échéances réelles."
        ]
      },
      {
        "title": "Pourquoi aucune consommation ne s’affiche-t-elle ?",
        "paragraphs": [
          "Le calcul exige des relevés de compteur cohérents et des pleins/recharges complets suffisants. Les entrées partielles sont conservées mais ne doivent pas produire un résultat trompeur."
        ]
      },
      {
        "title": "Pourquoi mes devises restent-elles séparées ?",
        "paragraphs": [
          "Ma Voiture ne télécharge aucun taux de change. Des montants dans des devises différentes restent séparés afin d’éviter un total faux."
        ]
      },
      {
        "title": "Pourquoi un rappel n’est-il pas arrivé exactement à l’heure ?",
        "paragraphs": [
          "Android planifie les travaux de façon économe et peut les différer. Vérifiez l’autorisation de notification et les restrictions de batterie. Un rappel ne remplace pas la vérification d’une obligation importante."
        ]
      },
      {
        "title": "Mes documents importés ont-ils une valeur légale ?",
        "paragraphs": [
          "Pas nécessairement. L’application conserve une copie privée pratique, mais ne garantit pas sa validité administrative ou juridique. Gardez les originaux requis."
        ]
      },
      {
        "title": "Que contient le dossier de revente ?",
        "paragraphs": [
          "Uniquement les sections que vous choisissez. VIN, immatriculation et coûts peuvent être masqués. Contrôlez toujours le PDF avant de le transmettre."
        ]
      },
      {
        "title": "J’ai oublié le mot de passe de ma sauvegarde.",
        "paragraphs": [
          "Studio501 ne le reçoit ni ne le conserve et ne peut pas le récupérer. Une sauvegarde protégée devient inaccessible sans le bon mot de passe."
        ]
      },
      {
        "title": "Comment installer une mise à jour ?",
        "paragraphs": [
          "Si votre version vient de Google Play, Ma Voiture recherche les mises à jour à l’ouverture et vous propose celles disponibles pour votre appareil. Vous pouvez accepter ou continuer. Après téléchargement, « Installer et redémarrer » termine l’installation ; enregistrez d’abord votre saisie en cours. Les mises à jour automatiques habituelles de Google Play restent également possibles."
        ]
      },
      {
        "title": "Comment demander de l’aide ?",
        "paragraphs": [
          "Contact : contact@studio501.fr. N’envoyez pas de VIN, immatriculation, document, mot de passe ou donnée financière inutile."
        ]
      }
    ]
  },
  "mes-abonnements": {
    "en": [
      {
        "title": "Does the app detect my subscriptions automatically?",
        "paragraphs": [
          "No. You add and edit the information yourself. The app does not connect to your bank or the services you track."
        ]
      },
      {
        "title": "Can it cancel a subscription for me?",
        "paragraphs": [
          "No. “Mark as cancelled” only records your decision inside the app. You must cancel directly with the relevant provider."
        ]
      },
      {
        "title": "Where is my data stored?",
        "paragraphs": [
          "In the app’s local space on your device. No Studio501 account is required, and the app is designed without the Internet permission."
        ]
      },
      {
        "title": "Why do I see more than one total?",
        "paragraphs": [
          "When subscriptions use multiple currencies and no eligible manual rate exists, the app keeps them separate to avoid a false combined total. You can add a dated rate in currency settings."
        ]
      },
      {
        "title": "Are exchange rates updated automatically?",
        "paragraphs": [
          "No. Rates are entered manually and their date remains visible. The app does not describe them as live rates."
        ]
      },
      {
        "title": "Why did a reminder not arrive at the exact time?",
        "paragraphs": [
          "Android schedules reminders efficiently and may delay them. Check notification permission, the app’s notification channel, and battery restrictions. Reminders are not a replacement for checking a contract."
        ]
      },
      {
        "title": "What does an export contain?",
        "paragraphs": [
          "It depends on the chosen format and scope. CSV contains structured data, PDF provides a readable summary, and a versioned backup can include attachments after a warning."
        ]
      },
      {
        "title": "I forgot the password for an encrypted backup.",
        "paragraphs": [
          "Studio501 does not receive or retain that password and cannot recover it. Keep it somewhere safe."
        ]
      },
      {
        "title": "What happens if I uninstall the app?",
        "paragraphs": [
          "Uninstalling deletes private app data. Create a local backup before uninstalling and keep its password if encrypted. Android automatic backup is disabled; previously saved exports remain at their destination."
        ]
      },
      {
        "title": "How do I install an app update?",
        "paragraphs": [
          "For an app installed through Google Play, an update may be offered when it opens. Follow the displayed Google Play flow and save your work before restarting. You can also use the Play Store’s usual updates."
        ]
      },
      {
        "title": "How do I ask for help?",
        "paragraphs": [
          "Contact: contact@studio501.fr. Do not send sensitive documents, backup passwords, customer references, or unnecessary financial details."
        ]
      }
    ],
    "fr": [
      {
        "title": "L’application détecte-t-elle automatiquement mes abonnements ?",
        "paragraphs": [
          "Non. Vous ajoutez et modifiez vous-même les informations. L’application ne se connecte ni à votre banque ni aux services suivis."
        ]
      },
      {
        "title": "Peut-elle résilier un abonnement à ma place ?",
        "paragraphs": [
          "Non. « Marquer comme résilié » enregistre uniquement votre décision dans l’application. Vous devez effectuer la résiliation auprès du fournisseur concerné."
        ]
      },
      {
        "title": "Où sont stockées mes données ?",
        "paragraphs": [
          "Dans l’espace local de l’application sur votre appareil. Aucun compte Studio501 n’est nécessaire et l’application est conçue sans permission Internet."
        ]
      },
      {
        "title": "Pourquoi plusieurs totaux s’affichent-ils ?",
        "paragraphs": [
          "Lorsque des abonnements utilisent plusieurs devises sans taux manuel applicable, l’application les sépare pour éviter un total faux. Vous pouvez ajouter un taux daté dans les réglages de devises."
        ]
      },
      {
        "title": "Les taux de change sont-ils mis à jour automatiquement ?",
        "paragraphs": [
          "Non. Ils sont saisis manuellement et leur date reste visible. L’application ne les présente pas comme des taux en direct."
        ]
      },
      {
        "title": "Pourquoi un rappel n’est-il pas arrivé exactement à l’heure ?",
        "paragraphs": [
          "Android planifie les rappels de façon économe et peut les différer. Vérifiez l’autorisation de notification, le canal de l’application et les restrictions de batterie. Les rappels ne remplacent pas une vérification contractuelle."
        ]
      },
      {
        "title": "Que contient un export ?",
        "paragraphs": [
          "Le contenu dépend du format et de la portée choisis. Un CSV contient des données structurées ; un PDF fournit une synthèse lisible ; une sauvegarde versionnée peut inclure les pièces jointes après avertissement."
        ]
      },
      {
        "title": "J’ai oublié le mot de passe de ma sauvegarde chiffrée.",
        "paragraphs": [
          "Studio501 ne reçoit ni ne conserve ce mot de passe et ne peut pas le récupérer. Conservez-le dans un endroit sûr."
        ]
      },
      {
        "title": "Que se passe-t-il si je supprime l’application ?",
        "paragraphs": [
          "La désinstallation supprime les données privées de l’application. Créez une sauvegarde locale avant de désinstaller et conservez son mot de passe si elle est chiffrée. La sauvegarde Android automatique est désactivée ; les exports déjà enregistrés restent dans leur destination."
        ]
      },
      {
        "title": "Comment installer une mise à jour ?",
        "paragraphs": [
          "Pour une application installée depuis Google Play, une mise à jour peut être proposée à l’ouverture. Suivez le parcours Google Play affiché et enregistrez votre saisie avant un redémarrage. Vous pouvez également utiliser les mises à jour habituelles du Play Store."
        ]
      },
      {
        "title": "Comment demander de l’aide ?",
        "paragraphs": [
          "Contact : contact@studio501.fr. N’envoyez pas de document sensible, mot de passe de sauvegarde, identifiant client ou détail financier inutile."
        ]
      }
    ]
  }
};
