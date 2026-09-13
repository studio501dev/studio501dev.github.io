// Translations of the existing French and English policy dated September 4, 2026.
// App behavior, contact details and data processing are unchanged.
export const subscriptionPolicyLanguages = [
  { key: "fr", tag: "fr-FR", name: "Français", path: "/privacy/mes-abonnements/", navLabel: "Langue de la politique de confidentialité" },
  { key: "en", tag: "en-US", name: "English", path: "/en/privacy/mes-abonnements/", navLabel: "Privacy policy language" },
  { key: "de", tag: "de-DE", name: "Deutsch", path: "/de/privacy/mes-abonnements/", navLabel: "Sprache der Datenschutzerklärung" },
  { key: "es", tag: "es-ES", name: "Español", path: "/es/privacy/mes-abonnements/", navLabel: "Idioma de la política de privacidad" },
  { key: "it", tag: "it-IT", name: "Italiano", path: "/it/privacy/mes-abonnements/", navLabel: "Lingua dell’informativa sulla privacy" },
  { key: "pt-br", tag: "pt-BR", name: "Português (Brasil)", path: "/pt-br/privacy/mes-abonnements/", navLabel: "Idioma da política de privacidade" },
];

export const subscriptionPolicyTranslations = {
  de: {
    title: "Datenschutzerklärung",
    updatedLabel: "Zuletzt aktualisiert", updated: "4. September 2026",
    appLink: "Zur App (Englisch)", supportLink: "Hilfe (Englisch)",
    legalLink: "Impressum (Englisch)", websiteLink: "Datenschutz der Website (Englisch)",
    skip: "Zum Inhalt", linksLabel: "Weitere Informationen", contactTitle: "Kontakt",
    contactLead: "Bei Fragen zu dieser Datenschutzerklärung erreichen Sie Studio501 unter:",
    storeContact: "Die Adresse studio501.dev@gmail.com steht weiterhin für bestehende Store-Einträge zur Verfügung.",
    summary: "Abonnements, Beträge und Dokumente werden lokal verarbeitet. Google Play übernimmt die Suche nach App-Updates und deren Installation als separaten Vorgang.",
    sections: [
      { title: "Verantwortlicher und Kontakt", paragraphs: [
        "Mes Abonnements (My Subscriptions) wird von Nanouk Candela veröffentlicht, Einzelunternehmer unter dem Geschäftsnamen Studio501, 61 rue de Lyon, 75012 Paris, Frankreich. SIREN: 104 315 957.",
        "Kontakt für Datenschutz und Hilfe: contact@studio501.fr. Auch studio501.dev@gmail.com ist weiterhin erreichbar."
      ] },
      { title: "Lokale Nutzung", paragraphs: [
        "Die App ist für die lokale Nutzung ohne Internetverbindung ausgelegt. Sie verwendet weder ein Studio501-Konto noch Werbung, Marketinganalysen, Tracking-SDKs oder einen Studio501-Server.",
        "Die App fordert keine Internetberechtigung an. Die automatische Android-Sicherung und die automatische Übertragung der App-Daten sind deaktiviert."
      ] },
      { title: "Auf Ihrem Gerät verarbeitete Daten", paragraphs: [
        "Je nach Ihren Eingaben kann die App Namen und Kategorien von Abonnements, Beträge und Währungen, Fälligkeiten und Wiederholungsregeln, Testzeiträume, Kündigungstermine, Erinnerungen, Preisverläufe, manuell eingegebene Wechselkurse, Notizen, optionale Kundennummern, Einstellungen und importierte Dokumente speichern. Diese Daten werden für die Übersicht, Vorausberechnungen, Erinnerungen, Exporte und Sicherungen verwendet."
      ] },
      { title: "Datenerhebung und Weitergabe durch Studio501", paragraphs: [
        "Studio501 erhält, erhebt, verkauft oder teilt keine eingegebenen Abonnementdaten. Die App nimmt keinen Kontakt zu Banken oder Anbietern auf und kündigt keine Dienste.",
        "Wenn Sie die Android-Dateiauswahl, die Teilen-Funktion, einen Speicherort für Sicherungen oder ein externes Anzeigeprogramm nutzen, wählen Sie selbst eine App oder einen Dienst eines Drittanbieters aus. Für die dorthin übertragenen Daten gelten dessen Bedingungen."
      ] },
      { title: "App-Updates", paragraphs: [
        "Beim Öffnen kann die App bei Google Play prüfen, ob ein Update verfügbar ist. Google Play übernimmt die Prüfung, den Download und die Installation. Der Dienst verarbeitet Gerätemetadaten, die App-Version sowie installierte Module oder Datenpakete, um die Verfügbarkeit und Größe eines Updates zu bestimmen. Diese Informationen werden verschlüsselt und gemäß den Regeln von Google Play verarbeitet.",
        "Abonnements, Beträge, Dokumente, Notizen und andere in der App erfasste Daten werden durch diese Funktion nicht übertragen. Die Funktionen zur Abonnementverwaltung bleiben ohne Internetverbindung nutzbar."
      ], links: [{ label: "Informationen zur Datenverarbeitung beim Google Play-Updatedienst", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" }] },
      { title: "Benachrichtigungen und Datenschutz", paragraphs: [
        "Bei den betreffenden Android-Versionen wird die Berechtigung für Benachrichtigungen erst angefragt, wenn Sie Ihre erste Erinnerung aktivieren. Sie können die Berechtigung ablehnen oder später widerrufen. Der Datenschutzmodus kann Beträge in Benachrichtigungen und im Widget ausblenden. Android garantiert keine Zustellung zu einem genauen Zeitpunkt."
      ] },
      { title: "Dokumente, Exporte und Sicherungen", paragraphs: [
        "Ausgewählte Dokumente werden in den privaten Speicherbereich der App kopiert. CSV-Dateien, PDF-Dateien und Sicherungen verlassen diesen Bereich nur über das von Ihnen gewählte Ziel. Eine unverschlüsselte Datei kann vertrauliche Informationen enthalten und sollte sorgfältig aufbewahrt werden.",
        "Wenn Sie eine passwortgeschützte Sicherung wählen, erfolgt die Verschlüsselung lokal. Studio501 kennt Ihr Passwort nicht und kann es nicht wiederherstellen."
      ] },
      { title: "Speicherdauer, Löschung und Ihre Möglichkeiten", paragraphs: [
        "Die Daten bleiben im privaten Speicherbereich der App, bis Sie sie ändern, löschen, bei einer Wiederherstellung ersetzen, den Android-App-Speicher leeren oder die App deinstallieren. Sie können Daten ansehen, bearbeiten, archivieren, löschen und exportieren sowie Erinnerungen deaktivieren. Exportierte Dateien bleiben am gewählten Speicherort und müssen dort separat gelöscht werden."
      ] },
      { title: "Sicherheit", paragraphs: [
        "Die in der App verwendeten Daten werden durch die von Android bereitgestellte App-Isolierung geschützt. Auf einem kompromittierten Gerät bietet diese keinen absoluten Schutz. Teilen Sie Dateien nur mit vertrauenswürdigen Empfängern oder Diensten."
      ] },
      { title: "Kinder und Änderungen", paragraphs: [
        "Die App dient der persönlichen Finanzübersicht und richtet sich nicht speziell an Kinder. Diese Datenschutzerklärung wird aktualisiert, wenn sich Berechtigungen, eingebundene Softwarekomponenten, Funktionen oder Verfahren zur Datenverarbeitung ändern."
      ] },
    ],
  },
  es: {
    title: "Política de privacidad",
    updatedLabel: "Última actualización", updated: "4 de septiembre de 2026",
    appLink: "Página de la aplicación (inglés)", supportLink: "Ayuda (inglés)",
    legalLink: "Aviso legal (inglés)", websiteLink: "Privacidad del sitio web (inglés)",
    skip: "Ir al contenido", linksLabel: "Información útil", contactTitle: "Contacto",
    contactLead: "Para cualquier consulta sobre esta política, puede contactar con Studio501 en:",
    storeContact: "La dirección studio501.dev@gmail.com sigue disponible para las fichas de las tiendas ya existentes.",
    summary: "Las suscripciones, los importes y los documentos se procesan localmente. Google Play gestiona por separado la comprobación y la instalación de actualizaciones.",
    sections: [
      { title: "Responsable y contacto", paragraphs: [
        "Mes Abonnements (My Subscriptions) está publicada por Nanouk Candela, empresario individual que opera con el nombre comercial Studio501, 61 rue de Lyon, 75012 París, Francia. SIREN: 104 315 957.",
        "Contacto de privacidad y asistencia: contact@studio501.fr. La dirección studio501.dev@gmail.com también sigue disponible."
      ] },
      { title: "Funcionamiento local", paragraphs: [
        "La aplicación está diseñada para funcionar localmente y sin conexión, sin cuenta de Studio501, publicidad, análisis de marketing, SDK de seguimiento ni servidor de Studio501.",
        "La aplicación no solicita el permiso de Internet. La copia de seguridad automática de Android y la transferencia automática de los datos de la aplicación están desactivadas."
      ] },
      { title: "Datos tratados en su dispositivo", paragraphs: [
        "Según la información que introduzca, la aplicación puede guardar nombres y categorías de suscripciones, importes y divisas, vencimientos y reglas de recurrencia, periodos de prueba, fechas de cancelación, recordatorios, historial de precios, tipos de cambio introducidos manualmente, notas, referencias de cliente opcionales, preferencias y documentos importados. Estos datos se utilizan para el panel de resumen, las previsiones, los recordatorios, las exportaciones y las copias de seguridad."
      ] },
      { title: "Recogida y comunicación de datos por Studio501", paragraphs: [
        "Studio501 no recibe, recoge, vende ni comparte los datos de suscripciones que se introducen. La aplicación no contacta con bancos ni proveedores y no cancela ningún servicio.",
        "Al utilizar el selector de archivos de Android, la función para compartir, un destino para las copias de seguridad o un visor externo, usted elige una aplicación o un servicio de terceros. Los datos enviados quedan sujetos a las condiciones de ese destino."
      ] },
      { title: "Actualizaciones de la aplicación", paragraphs: [
        "Al abrirse, la aplicación puede consultar a Google Play si hay una actualización disponible. Google Play gestiona la comprobación, la descarga y la instalación. Este servicio trata metadatos del dispositivo, la versión de la aplicación y los módulos o paquetes instalados para determinar la disponibilidad y el tamaño de una actualización. Esta información se cifra y se trata conforme a las normas de Google Play.",
        "Esta función no transmite suscripciones, importes, documentos, notas ni otros datos registrados en la aplicación. Las funciones de seguimiento siguen disponibles sin conexión."
      ], links: [{ label: "Información sobre los datos del servicio de actualizaciones de Google Play", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" }] },
      { title: "Notificaciones y privacidad", paragraphs: [
        "En las versiones de Android correspondientes, el permiso de notificaciones solo se solicita al activar el primer recordatorio. Puede rechazarlo o retirarlo. El modo de privacidad permite ocultar los importes en las notificaciones y en el widget. Android no garantiza que las notificaciones se entreguen a una hora exacta."
      ] },
      { title: "Documentos, exportaciones y copias de seguridad", paragraphs: [
        "Los documentos seleccionados se copian en el espacio privado de la aplicación. Los archivos CSV, PDF y las copias de seguridad solo salen de ese espacio hacia el destino que usted elija. Un archivo sin cifrar puede contener información sensible y debe guardarse con precaución.",
        "Si elige una copia de seguridad protegida con contraseña, el cifrado se realiza localmente. Studio501 no conoce su contraseña y no puede recuperarla."
      ] },
      { title: "Conservación, eliminación y opciones", paragraphs: [
        "Los datos permanecen en el espacio privado de la aplicación hasta que se modifican, se eliminan, se sustituyen durante una restauración, se borra el almacenamiento de la aplicación desde Android o se desinstala la aplicación. Puede consultar, modificar, archivar, eliminar y exportar los datos, así como desactivar los recordatorios. Los archivos exportados permanecen en el destino elegido y deben eliminarse por separado."
      ] },
      { title: "Seguridad", paragraphs: [
        "Los datos utilizados por la aplicación se basan en el aislamiento entre aplicaciones que ofrece Android. Esto no supone una garantía absoluta en un dispositivo comprometido. Comparta sus archivos únicamente con destinos de confianza."
      ] },
      { title: "Menores y cambios", paragraphs: [
        "La aplicación es una herramienta de seguimiento financiero personal y no está dirigida específicamente a menores. Esta política se actualizará si cambian los permisos, los componentes de software integrados, las funciones o las prácticas de tratamiento de datos."
      ] },
    ],
  },
  it: {
    title: "Informativa sulla privacy",
    updatedLabel: "Ultimo aggiornamento", updated: "4 settembre 2026",
    appLink: "Pagina dell’app (inglese)", supportLink: "Assistenza (inglese)",
    legalLink: "Note legali (inglese)", websiteLink: "Privacy del sito (inglese)",
    skip: "Vai al contenuto", linksLabel: "Informazioni utili", contactTitle: "Contatti",
    contactLead: "Per domande su questa informativa, è possibile contattare Studio501 all’indirizzo:",
    storeContact: "L’indirizzo studio501.dev@gmail.com rimane disponibile anche per le schede degli store già esistenti.",
    summary: "Abbonamenti, importi e documenti vengono elaborati localmente. Google Play gestisce separatamente la verifica e l’installazione degli aggiornamenti.",
    sections: [
      { title: "Titolare e contatti", paragraphs: [
        "Mes Abonnements (My Subscriptions) è pubblicata da Nanouk Candela, imprenditore individuale che opera con il nome commerciale Studio501, 61 rue de Lyon, 75012 Parigi, Francia. SIREN: 104 315 957.",
        "Contatto per privacy e assistenza: contact@studio501.fr. È disponibile anche l’indirizzo studio501.dev@gmail.com."
      ] },
      { title: "Funzionamento locale", paragraphs: [
        "L’app è progettata per funzionare localmente e senza connessione, senza account Studio501, pubblicità, analisi di marketing, SDK di tracciamento o server Studio501.",
        "L’app non richiede l’autorizzazione Internet. Il backup automatico di Android e il trasferimento automatico dei dati dell’app sono disattivati."
      ] },
      { title: "Dati trattati sul dispositivo", paragraphs: [
        "In base alle informazioni inserite, l’app può memorizzare nomi e categorie degli abbonamenti, importi e valute, scadenze e regole di ricorrenza, periodi di prova, date di disdetta, promemoria, cronologia dei prezzi, tassi di cambio inseriti manualmente, note, riferimenti cliente facoltativi, preferenze e documenti importati. Questi dati servono per il riepilogo, le previsioni, i promemoria, le esportazioni e i backup."
      ] },
      { title: "Raccolta e condivisione dei dati da parte di Studio501", paragraphs: [
        "Studio501 non riceve, raccoglie, vende o condivide i dati degli abbonamenti inseriti. L’app non contatta banche o fornitori e non disdice alcun servizio.",
        "Quando si utilizza il selettore di file di Android, la funzione di condivisione, una destinazione per i backup o un visualizzatore esterno, si sceglie un’app o un servizio di terzi. I dati inviati sono soggetti alle condizioni di quella destinazione."
      ] },
      { title: "Aggiornamenti dell’app", paragraphs: [
        "All’apertura, l’app può verificare tramite Google Play se è disponibile un aggiornamento. Google Play gestisce la verifica, il download e l’installazione. Il servizio tratta i metadati del dispositivo, la versione dell’app e i moduli o pacchetti installati per determinare la disponibilità e le dimensioni di un aggiornamento. Queste informazioni vengono cifrate e trattate secondo le regole di Google Play.",
        "Questa funzione non trasmette abbonamenti, importi, documenti, note o altri dati registrati nell’app. Le funzioni di monitoraggio restano disponibili senza connessione."
      ], links: [{ label: "Informazioni sui dati del servizio di aggiornamento di Google Play", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" }] },
      { title: "Notifiche e privacy", paragraphs: [
        "Nelle versioni di Android interessate, l’autorizzazione alle notifiche viene richiesta solo quando si attiva il primo promemoria. È possibile rifiutarla o revocarla. La modalità privacy può nascondere gli importi nelle notifiche e nel widget. Android non garantisce la consegna a un orario preciso."
      ] },
      { title: "Documenti, esportazioni e backup", paragraphs: [
        "I documenti selezionati vengono copiati nello spazio privato dell’app. I file CSV, PDF e i backup escono da questo spazio solo verso la destinazione scelta. Un file non cifrato può contenere informazioni sensibili e deve essere conservato con attenzione.",
        "Se si sceglie un backup protetto da password, la cifratura viene eseguita localmente. Studio501 non conosce la password e non può recuperarla."
      ] },
      { title: "Conservazione, eliminazione e scelte", paragraphs: [
        "I dati rimangono nello spazio privato dell’app fino alla loro modifica, eliminazione o sostituzione durante un ripristino, alla cancellazione dei dati dell’app da Android o alla disinstallazione. È possibile consultare, modificare, archiviare, eliminare ed esportare i dati e disattivare i promemoria. I file esportati restano nella destinazione scelta e devono essere eliminati separatamente."
      ] },
      { title: "Sicurezza", paragraphs: [
        "I dati utilizzati dall’app si basano sull’isolamento tra applicazioni fornito da Android, che non offre una garanzia assoluta su un dispositivo compromesso. Condividere i file solo con destinazioni affidabili."
      ] },
      { title: "Minori e modifiche", paragraphs: [
        "L’app è uno strumento per il monitoraggio delle finanze personali e non è rivolta specificamente ai minori. Questa informativa verrà aggiornata in caso di modifiche alle autorizzazioni, ai componenti software integrati, alle funzioni o alle pratiche di trattamento dei dati."
      ] },
    ],
  },
  "pt-br": {
    title: "Política de privacidade",
    updatedLabel: "Última atualização", updated: "4 de setembro de 2026",
    appLink: "Página do aplicativo (inglês)", supportLink: "Ajuda (inglês)",
    legalLink: "Informações legais (inglês)", websiteLink: "Privacidade do site (inglês)",
    skip: "Ir para o conteúdo", linksLabel: "Informações úteis", contactTitle: "Contato",
    contactLead: "Em caso de dúvidas sobre esta política, entre em contato com a Studio501:",
    storeContact: "O endereço studio501.dev@gmail.com também continua disponível para as páginas já existentes nas lojas de aplicativos.",
    summary: "As assinaturas, os valores e os documentos são processados localmente. O Google Play gerencia separadamente a verificação e a instalação de atualizações.",
    sections: [
      { title: "Responsável e contato", paragraphs: [
        "Mes Abonnements (My Subscriptions) é publicado por Nanouk Candela, empresário individual que atua com o nome comercial Studio501, 61 rue de Lyon, 75012 Paris, França. SIREN: 104 315 957.",
        "Contato para privacidade e suporte: contact@studio501.fr. O endereço studio501.dev@gmail.com também continua disponível."
      ] },
      { title: "Funcionamento local", paragraphs: [
        "O aplicativo foi desenvolvido para funcionar localmente e sem conexão, sem conta Studio501, publicidade, análises de marketing, SDK de rastreamento ou servidor Studio501.",
        "O aplicativo não solicita a permissão de Internet. O backup automático do Android e a transferência automática dos dados do aplicativo estão desativados."
      ] },
      { title: "Dados tratados no seu dispositivo", paragraphs: [
        "Conforme as informações inseridas, o aplicativo pode armazenar nomes e categorias de assinaturas, valores e moedas, vencimentos e regras de recorrência, períodos de teste, datas de cancelamento, lembretes, histórico de preços, taxas de câmbio inseridas manualmente, notas, identificadores opcionais de cliente, preferências e documentos importados. Esses dados são usados no painel de resumo, nas projeções, nos lembretes, nas exportações e nos backups."
      ] },
      { title: "Coleta e compartilhamento pela Studio501", paragraphs: [
        "A Studio501 não recebe, coleta, vende nem compartilha os dados de assinaturas inseridos. O aplicativo não entra em contato com bancos ou fornecedores e não cancela nenhum serviço.",
        "Ao usar o seletor de arquivos do Android, a função de compartilhamento, um destino de backup ou um visualizador externo, você escolhe um aplicativo ou serviço de terceiros. Os dados enviados passam a estar sujeitos às condições desse destino."
      ] },
      { title: "Atualizações do aplicativo", paragraphs: [
        "Ao abrir, o aplicativo pode consultar o Google Play para verificar se há uma atualização disponível. O Google Play gerencia a verificação, o download e a instalação. Esse serviço trata metadados do dispositivo, a versão do aplicativo e os módulos ou pacotes instalados para determinar a disponibilidade e o tamanho de uma atualização. Essas informações são criptografadas e tratadas de acordo com as regras do Google Play.",
        "Esse recurso não transmite assinaturas, valores, documentos, notas ou outros dados registrados no aplicativo. As funções de acompanhamento continuam disponíveis sem conexão."
      ], links: [{ label: "Informações sobre os dados do serviço de atualizações do Google Play", href: "https://developer.android.com/guide/playcore/in-app-updates#data-safety" }] },
      { title: "Notificações e privacidade", paragraphs: [
        "Nas versões do Android que exigem essa permissão, a autorização para notificações só é solicitada quando o primeiro lembrete é ativado. Você pode recusá-la ou revogá-la. O modo de privacidade pode ocultar valores nas notificações e no widget. O Android não garante a entrega em um horário exato."
      ] },
      { title: "Documentos, exportações e backups", paragraphs: [
        "Os documentos selecionados são copiados para o espaço privado do aplicativo. Arquivos CSV, PDF e backups só saem desse espaço para o destino escolhido. Um arquivo não criptografado pode conter informações sensíveis e deve ser armazenado com cuidado.",
        "Ao escolher um backup protegido por senha, a criptografia é feita localmente. A Studio501 não conhece sua senha e não pode recuperá-la."
      ] },
      { title: "Retenção, exclusão e opções", paragraphs: [
        "Os dados permanecem no espaço privado do aplicativo até serem alterados, excluídos ou substituídos durante uma restauração, ou até que os dados do aplicativo sejam apagados pelo Android ou o aplicativo seja desinstalado. Você pode consultar, editar, arquivar, excluir e exportar os dados e desativar os lembretes. Os arquivos exportados permanecem no destino escolhido e devem ser excluídos separadamente."
      ] },
      { title: "Segurança", paragraphs: [
        "Os dados usados pelo aplicativo contam com o isolamento entre aplicativos fornecido pelo Android, que não oferece garantia absoluta em um dispositivo comprometido. Compartilhe arquivos apenas com destinos confiáveis."
      ] },
      { title: "Crianças e alterações", paragraphs: [
        "O aplicativo é uma ferramenta de acompanhamento financeiro pessoal e não é destinado especificamente a crianças. Esta política será atualizada se houver mudanças nas permissões, nos componentes de software integrados, nos recursos ou nas práticas de tratamento de dados."
      ] },
    ],
  },
};
