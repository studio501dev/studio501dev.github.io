const pending = {
  platform: "Windows", platformKey: "windows", status: "preparing",
  statusLabel: { fr: "Publication en préparation", en: "Preparing for release" },
  storeLabel: { fr: "Voir sur Microsoft Store", en: "View on Microsoft Store" },
  storeUrl: null, screenshots: [],
};

export const ciselPairlineApps = [
  {
    ...pending, slug: "cisel", name: "Cisel Video Cutter", accent: "gold",
    icon: "/assets/apps/cisel/icon.png", monogram: "C",
    summary: { fr: "Gardez les passages utiles et exportez un nouveau MP4. Votre original reste intact.", en: "Keep the useful passages and export a new MP4. Your original remains intact." },
    description: {
      fr: ["Ouvrez une vidéo locale, choisissez les passages à conserver, relisez le montage et exportez un nouveau fichier.", "Cisel utilise les fonctions multimédias de Windows pour les vidéos MP4, M4V et MOV compatibles H.264/AAC. Les modes Précis et Rapide peuvent réencoder la vidéo."],
      en: ["Open a local video, choose the passages to retain, preview the edit and export a new file.", "Cisel uses Windows media features for compatible H.264/AAC MP4, M4V and MOV videos. Precise and Fast modes may re-encode the video."],
    },
    features: {
      fr: ["Plusieurs passages dans l’ordre d’origine", "Réglage des débuts et fins, séparation et annulation", "Aperçu du montage avant l’export", "Export d’un nouveau MP4", "Traitement local sans compte ni publicité"],
      en: ["Multiple passages in their original order", "Adjust start and end points, split and undo", "Preview the edit before export", "Export a new MP4", "Local processing without an account or ads"],
    },
    privacyLead: { fr: "Les vidéos et montages restent sur le PC. Des sessions et un journal de récupération sont conservés localement.", en: "Videos and edits stay on the PC. Sessions and an export recovery journal are retained locally." },
  },
  {
    ...pending, slug: "pairline", name: "Pairline", accent: "violet",
    icon: "/assets/apps/pairline/icon.png", monogram: "P",
    summary: { fr: "Trouvez les copies strictement identiques et vérifiez lesquelles garder.", en: "Find strictly identical copies and review which ones to keep." },
    description: {
      fr: ["Ajoutez les dossiers à analyser, ignorer ou protéger. Pairline confirme les doublons par comparaison du contenu octet par octet.", "L’analyse ne déplace aucun fichier. Les copies choisies sont vérifiées à nouveau avant une demande confirmée de déplacement vers la Corbeille Windows. La V1 analyse les emplacements NTFS locaux validés et exclut les emplacements réseau, cloud et amovibles."],
      en: ["Add folders to scan, exclude or protect. Pairline confirms duplicates by comparing their content byte by byte.", "Scanning moves no files. Selected copies are revalidated before a confirmed request to move them to the Windows Recycle Bin. V1 scans validated local NTFS locations and excludes network, cloud and removable locations."],
    },
    features: {
      fr: ["Doublons exacts, même si les noms diffèrent", "Dossiers à analyser, ignorer ou protéger", "Une référence conservée par groupe", "Aucune suppression sélectionnée automatiquement", "Vérification et confirmation avant la Corbeille", "Interface française et anglaise"],
      en: ["Exact duplicates even when names differ", "Folders to scan, exclude or protect", "One retained reference per group", "No automatic deletion selection", "Revalidation and confirmation before recycling", "French and English interface"],
    },
    privacyLead: { fr: "Le contenu, les chemins et les empreintes des fichiers restent sur le PC. Aucun compte, publicité ni télémétrie.", en: "File content, paths and fingerprints stay on the PC. No account, ads or telemetry." },
  },
];

const controller = {
  fr: { title: "Éditeur et portée", paragraphs: ["Cette politique concerne uniquement l’application Windows nommée sur cette page, éditée par Nanouk Candela, entrepreneur individuel sous le nom commercial Studio501, France.", "Contact pour la confidentialité et le support : contact@studio501.fr. L’adresse studio501.dev@gmail.com reste disponible."] },
  en: { title: "Publisher and scope", paragraphs: ["This policy applies only to the Windows application named on this page, published by Nanouk Candela, a sole proprietor trading as Studio501, France.", "Privacy and support contact: contact@studio501.fr. studio501.dev@gmail.com also remains available."] },
};
const support = {
  fr: { title: "Support et droits", paragraphs: ["Les informations que vous envoyez volontairement au support, notamment votre adresse e-mail et le contenu du message, servent uniquement à répondre à votre demande et à son suivi. Elles ne sont ni vendues ni utilisées pour la publicité et sont conservées uniquement pendant la durée raisonnablement nécessaire.", "Vous pouvez demander l’accès, la rectification ou la suppression des informations transmises au support à contact@studio501.fr. N’envoyez pas de fichiers personnels qui ne sont pas nécessaires à votre demande."] },
  en: { title: "Support and your rights", paragraphs: ["Information voluntarily sent to support, including your email address and message, is used only to respond and follow up. It is not sold or used for advertising and is retained only as reasonably necessary.", "You may request access, correction or deletion of information sent to support at contact@studio501.fr. Do not send personal files that are unnecessary for your request."] },
};
const microsoft = {
  fr: { title: "Services Windows et Microsoft distincts", paragraphs: ["Windows, Microsoft Store, la licence d’achat, les mises à jour et les éventuels rapports de fiabilité du système sont exploités séparément par Microsoft selon ses réglages et politiques. L’application n’ajoute aucun suivi et ne leur transmet pas le contenu de vos fichiers.", "Un envoi que vous déclenchez depuis un autre logiciel ou un contact volontaire avec le support relève des pratiques de la destination choisie."] },
  en: { title: "Separate Windows and Microsoft services", paragraphs: ["Windows, Microsoft Store, purchase licensing, updates and optional system reliability reports are operated separately by Microsoft under their own settings and policies. The app adds no tracking and does not send them your file content.", "A transfer you initiate through another application or a voluntary support request is governed by the chosen destination’s practices."] },
};
const changes = {
  fr: { title: "Modifications", paragraphs: ["Toute modification des traitements décrits ici sera accompagnée d’une mise à jour de cette politique et de sa date. L’application ne comporte pas de compte, publicité ou outil d’analyse d’usage et ne cible pas spécifiquement les enfants."] },
  en: { title: "Changes", paragraphs: ["Changes to the processing described here will be accompanied by an updated policy and date. The app has no account, advertising or usage analytics and is not specifically directed at children."] },
};
const updated = { fr: "10 octobre 2026", en: "October 10, 2026" };

export const ciselPairlinePolicies = {
  cisel: {
    lastUpdated: updated,
    summary: { fr: "Cisel traite les vidéos sur votre PC sans les transmettre. Les sessions et récupérations d’export sont enregistrées localement.", en: "Cisel processes videos on your PC without transmitting them. Sessions and export recovery details are stored locally." },
    sections: {
      fr: [controller.fr,
        { title: "Informations traitées localement", paragraphs: ["Cisel lit la vidéo que vous sélectionnez ou déposez, son chemin, sa taille, sa date, sa durée et ses caractéristiques audio/vidéo. Les passages gardés, leurs libellés, les réglages d’export et la destination sont utilisés uniquement pour votre montage.", "Le traitement utilise les fonctions multimédias de Windows. Aucun fichier, chemin, contenu ou empreinte n’est transmis à Studio501 ou à un serveur de traitement."] },
        { title: "Sauvegarde automatique des sessions", paragraphs: ["Un petit fichier JSON est automatiquement enregistré dans %LOCALAPPDATA%\\Cisel\\Video Cutter\\Sessions pour restaurer le montage lorsque la même vidéo est rouverte.", "Il contient le chemin complet, la taille, la date de modification, la durée, les passages et leurs libellés éventuels ainsi que le mode, la qualité et le nom d’export. Une empreinte SHA-256, calculée sur la longueur et les premiers et derniers 256 Kio, aide à reconnaître une vidéo remplacée. Elle reste locale.", "La version actuelle ne propose pas d’option pour désactiver cette sauvegarde ni de bouton pour effacer les sessions."] },
        { title: "Export et récupération", paragraphs: ["Le rendu est créé dans le dossier de sortie sous un nom temporaire .VideoCutter-<identifiant>.partial.mp4, puis publié sous le nom final après vérification, sans écraser un fichier existant.", "Si la publication d’un rendu complet échoue, Cisel peut conserver ce fichier et un journal %LOCALAPPDATA%\\Cisel\\Video Cutter\\export-recovery.json contenant l’identifiant, les chemins temporaire et final, la taille et l’heure. Au lancement suivant, une récupération peut être proposée ; la découverte ne supprime pas automatiquement le rendu."] },
        { title: "Conservation et suppression", paragraphs: ["Les sessions et le journal restent jusqu’à leur remplacement ou leur suppression locale. Après fermeture de Cisel, vous pouvez supprimer manuellement le dossier %LOCALAPPDATA%\\Cisel\\Video Cutter. Cela efface les sessions et le journal, sans supprimer les sources ou exports terminés.", "Un rendu .partial.mp4 conservé dans un dossier d’export se récupère ou se supprime séparément. La désinstallation ne garantit pas la suppression du dossier local explicite de Cisel."] },
        microsoft.fr, support.fr, changes.fr],
      en: [controller.en,
        { title: "Information processed locally", paragraphs: ["Cisel reads the selected or dropped video, its path, size, modification date, duration and media properties. Retained passages, labels, export settings and destination are used only for your edit.", "Processing uses Windows media features. No file, path, content or fingerprint is sent to Studio501 or a processing server."] },
        { title: "Automatic session saving", paragraphs: ["A small JSON file is automatically saved in %LOCALAPPDATA%\\Cisel\\Video Cutter\\Sessions to restore an edit when the same video is reopened.", "It includes the full path, size, modification date, duration, passages and optional labels, export mode, quality and output name. A SHA-256 fingerprint derived from the length and first and last 256 KiB helps detect a replaced video and stays local.", "The current version has no option to disable session saving or button to clear sessions."] },
        { title: "Export and recovery", paragraphs: ["Rendering creates a temporary .VideoCutter-<identifier>.partial.mp4 in the output folder, then publishes it under the final name after verification without overwriting an existing file.", "If publishing a complete render fails, Cisel may retain it and a %LOCALAPPDATA%\\Cisel\\Video Cutter\\export-recovery.json journal containing the operation identifier, temporary and final paths, size and time. Recovery may be offered at the next launch; discovery does not automatically delete the render."] },
        { title: "Retention and deletion", paragraphs: ["Sessions and the journal remain until replaced or removed locally. After closing Cisel, you can manually remove %LOCALAPPDATA%\\Cisel\\Video Cutter. This clears sessions and the journal without deleting source videos or finished exports.", "A retained .partial.mp4 in an export folder must be recovered or removed separately. Uninstalling does not guarantee deletion of Cisel’s explicit local folder."] },
        microsoft.en, support.en, changes.en],
    },
  },
  pairline: {
    lastUpdated: updated,
    summary: { fr: "Pairline compare les fichiers uniquement sur votre PC. Les fichiers, chemins et empreintes ne sont jamais envoyés à Studio501.", en: "Pairline compares files only on your PC. Files, paths and fingerprints are never sent to Studio501." },
    sections: {
      fr: [controller.fr,
        { title: "Données utilisées sur votre appareil", paragraphs: ["Pairline lit les dossiers que vous ajoutez, les exclusions et protections choisies, les noms, chemins, tailles, dates, attributs et identifiants des fichiers. Le contenu binaire est lu localement pour calculer les empreintes et confirmer les doublons octet par octet.", "Les préférences de thème, langue et comparaison ainsi que les racines mémorisées sur demande restent dans le stockage local de l’application. Aucun compte, publicité, télémétrie, analyse d’usage ou synchronisation cloud n’est intégré."] },
        { title: "Conservation locale", paragraphs: ["Résultats, identifiants, empreintes, miniatures et sélections restent en mémoire et disparaissent à la fermeture ou lors d’une nouvelle analyse. Aucun cache d’empreintes n’est conservé entre deux analyses.", "Les préférences et chemins que vous choisissez de mémoriser peuvent être affichés et effacés depuis Pairline. Un journal de sécurité minimal peut garder une heure, un état, des compteurs et une catégorie d’erreur après une opération, sans nom, chemin ou empreinte de fichier."] },
        { title: "Choix et Corbeille Windows", paragraphs: ["L’analyse seule ne déplace aucun fichier. Aucune copie n’est présélectionnée pour la Corbeille à l’ouverture des résultats. Vous choisissez les copies et confirmez l’action après vérification.", "Pairline demande à Windows de déplacer les copies choisies vers la Corbeille, en gardant une référence par groupe. Il ne propose pas de suppression permanente de secours. La place indiquée n’est récupérée qu’après vidage de la Corbeille, et la restauration dépend ensuite de Windows et de vos actions."] },
        { title: "Effacement et limites", paragraphs: ["Les préférences, chemins mémorisés et le journal local peuvent être effacés dans l’application. La désinstallation suit les règles de Windows. Pairline ne garde pas de copie privée des fichiers analysés.", "La V1 concerne les emplacements NTFS locaux validés et exclut les emplacements réseau, cloud et amovibles. Elle recherche les contenus strictement identiques, pas des photos similaires ou versions modifiées."] },
        microsoft.fr, support.fr, changes.fr],
      en: [controller.en,
        { title: "Data used on your device", paragraphs: ["Pairline reads folders you add, chosen exclusions and protections, and file names, paths, sizes, dates, attributes and identifiers. Binary content is read locally to calculate fingerprints and confirm duplicates byte by byte.", "Theme, language and comparison preferences and roots you explicitly choose to remember remain in local app storage. There is no account, advertising, telemetry, usage analytics or cloud synchronisation."] },
        { title: "Local retention", paragraphs: ["Results, identifiers, fingerprints, thumbnails and selections stay in memory and disappear on closing or starting a new scan. No fingerprint cache is retained between scans.", "Preferences and paths you choose to remember can be viewed and cleared in Pairline. A minimal safety journal may retain a time, status, counters and error category after an operation, without file names, paths or fingerprints."] },
        { title: "Your choices and the Windows Recycle Bin", paragraphs: ["Scanning alone moves no files. No copy is preselected for recycling when results open. You select copies and confirm the action after review.", "Pairline asks Windows to move selected copies to the Recycle Bin, retaining one reference per group. It offers no permanent-delete fallback. The indicated space is reclaimed only after emptying the Bin; restoration then depends on Windows and your actions."] },
        { title: "Clearing data and limitations", paragraphs: ["Preferences, remembered paths and the local journal can be cleared in the app. Uninstallation follows Windows rules. Pairline retains no private copy of scanned files.", "V1 supports validated local NTFS locations and excludes network, cloud and removable locations. It finds strictly identical content, not similar photos or modified versions."] },
        microsoft.en, support.en, changes.en],
    },
  },
};
