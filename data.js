const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "ia", label: "IA & LLM" },
  { id: "data", label: "Data & BI" },
  { id: "app", label: "Applications métier" },
  { id: "cloud", label: "Cloud, DevOps & réseaux" },
  { id: "dev", label: "Web & logiciel" }
];

const PROJECTS = [
  /* ---------------- Marsa Maroc ---------------- */
  {
    id: "marsa-insight",
    title: "Marsa Insight AI",
    tagline: "Assistant décisionnel qui transforme une question métier en analyse chiffrée.",
    context: "Stage", org: "Marsa Maroc · DSI", date: "2026",
    cats: ["ia", "data"], featured: true, accent: "#f26a1b",
    team: "Projet réalisé en binôme avec Yasser Nadi.",
    problem: "Les équipes métier dépendaient de la DSI pour chaque extraction de données portuaires (trafic, terminaux, coûts). L'objectif : leur permettre d'interroger directement la base, en langage naturel, sans jamais compromettre la sécurité des données.",
    actions: [
      "Pipeline agentique LangGraph : compréhension de la question, demande de clarification si elle est ambiguë, génération SQL, contrôle, exécution puis interprétation.",
      "Contexte métier par RAG (ChromaDB) : schéma, définitions et exemples de requêtes injectés au moment de la génération.",
      "Sécurité en profondeur : validation de l'arbre syntaxique SQL avec sqlglot, rôle PostgreSQL en lecture seule, transaction read-only, délai maximal de 10 s, plafond de 5 000 lignes.",
      "Contrôle d'accès par rôle (administrateur, RH, opérations portuaires, finance, logistique) et authentification JWT.",
      "Interface React : discussion, graphiques Plotly, tableau de bord, comparaison de périodes et de sites, rapport exportable, dictée vocale, version française, anglaise et arabe."
    ],
    results: [["84", "tests automatisés"], ["5", "rôles métier"], ["3", "langues dont l'arabe"], ["10 s", "délai maximal par requête"]],
    stack: ["Python", "FastAPI", "LangGraph", "RAG", "ChromaDB", "sqlglot", "PostgreSQL", "React 19", "Tailwind", "Plotly", "JWT"],
    images: ["visuel-marsa-insight.jpg", "marsa_chat.png", "marsa_dashboard.png", "marsa_compare.png", "marsa_report.png"]
  },

  /* ---------------- Damane Cash ---------------- */
  {
    id: "erp-launchpad",
    title: "Portail ERP Launchpad",
    tagline: "Un point d'entrée unique pour toutes les applications internes.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["app", "dev"], featured: true, accent: "#8c4a32",
    problem: "Au fil du stage, les applications internes se sont multipliées : extraction, RIB, SIMT/MAD, commissions, factures. Chacune avait son adresse, ce qui compliquait l'accès pour les équipes. Il fallait un endroit unique pour tout regrouper.",
    actions: [
      "Portail de type launchpad : une tuile par application, avec catégorie, description et statut.",
      "Deux espaces distincts, interne et externe, avec visibilité configurable par application.",
      "Mode administrateur protégé par jeton signé (HMAC-SHA256) : ajout, modification, désactivation et réorganisation des tuiles par glisser-déposer.",
      "Bannière d'accueil éditable sans redéploiement."
    ],
    results: [["1", "seul point d'accès"], ["2", "espaces interne / externe"]],
    stack: ["Next.js 15", "React 19", "TypeScript", "Express", "Prisma", "SQL Server"],
    images: ["visuel-erp-launchpad.jpg"]
  },
  {
    id: "gestion-rib",
    title: "Application de gestion des RIB",
    tagline: "Circuit de validation Back-Office vers Conformité, entièrement tracé.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["app"], featured: true, accent: "#8c4a32",
    problem: "Les RIB des partenaires étaient saisis et vérifiés manuellement, sans historique des modifications ni contrôle systématique.",
    actions: [
      "Saisie et modification par le Back-Office, validation ou refus par la Conformité.",
      "Contrôle automatique des RIB marocains : 24 chiffres et clé de contrôle modulo 97.",
      "Détection des doublons avant enregistrement.",
      "Historique d'audit complet (qui, quoi, quand) et export.",
      "Quatre profils d'accès et tests unitaires sur les règles de validation."
    ],
    results: [["4", "profils d'accès"], ["24", "chiffres contrôlés + clé modulo 97"]],
    stack: ["Python", "Streamlit", "FastAPI", "SQL Server", "pyodbc"],
    images: ["visuel-gestion-rib.jpg"]
  },
  {
    id: "simt-mad",
    title: "Générateur de fichiers SIMT / MAD",
    tagline: "Du fichier Excel au fichier bancaire normé, sans ressaisie.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["app", "data"], accent: "#8c4a32",
    problem: "Les fichiers de virements au format bancaire étaient préparés à la main, avec un risque d'erreur à chaque étape.",
    actions: [
      "Import Excel ou CSV avec reconnaissance des variantes de noms de colonnes.",
      "Rapprochement automatique avec le référentiel RIB et isolement des lignes rejetées.",
      "Génération du fichier à format fixe attendu par la banque, avec aperçu avant téléchargement.",
      "Historique des fichiers générés avec traçabilité de l'auteur ; application déployée sur un serveur interne."
    ],
    results: [["2", "formats bancaires : SIMT et MAD"]],
    stack: ["Python", "Streamlit", "FastAPI", "Pandas", "SQL Server"],
    images: ["visuel-simt-mad.jpg"]
  },
  {
    id: "cms-crc",
    title: "CMS CRC · relevés de commissions",
    tagline: "Refonte d'une application monolithique en architecture modulaire.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["app", "data"], accent: "#8c4a32",
    problem: "Une application de consultation de 5 500 lignes, dont près de 4 400 n'étaient plus utilisées, devenait difficile à maintenir.",
    actions: [
      "Suppression du code mort et découpage en modules métier : réseau, correspondances, base détaillants, relevé des commissions.",
      "Requêtes SQL paramétrées, filtres multicritères et indicateurs sur la page commissions.",
      "Export Excel et CSV des résultats."
    ],
    results: [["-80 %", "de code"], ["5", "modules métier"]],
    stack: ["Python", "Streamlit", "Pandas", "SQL Server", "openpyxl"],
    images: ["visuel-cms-crc.jpg"]
  },
  {
    id: "factures-pdf",
    title: "Portail des factures PDF",
    tagline: "Recherche, aperçu et téléchargement des factures, avec journal d'audit.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["app"], accent: "#8c4a32",
    problem: "Les factures étaient dispersées dans plusieurs dossiers réseau, sans trace des consultations.",
    actions: [
      "Huit catégories de factures, recherche et aperçu PDF dans le navigateur.",
      "Journal SQL de chaque téléchargement.",
      "Protection contre l'accès à des fichiers hors du périmètre autorisé."
    ],
    results: [["8", "catégories de factures"]],
    stack: ["Python", "Flask", "JavaScript", "SQL Server"],
    images: ["visuel-factures-pdf.jpg"]
  },
  {
    id: "extraction",
    title: "Plateforme d'extraction de données",
    tagline: "Extraction par activité : Fundex, Damane Pay, Adria, Change, MTO.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["data", "app"], accent: "#8c4a32",
    problem: "Chaque demande d'extraction passait par une requête écrite à la main.",
    actions: [
      "Une interface par activité avec filtres de période et de critères.",
      "Export direct des résultats pour les équipes métier."
    ],
    results: [["5", "activités couvertes"]],
    stack: ["Python", "Streamlit", "SQL Server", "Pandas"],
    images: ["visuel-extraction.jpg"]
  },
  {
    id: "etl-pentaho",
    title: "Flux ETL Pentaho",
    tagline: "Intégration de fichiers hétérogènes vers des tables exploitables.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["data"], accent: "#8c4a32",
    problem: "Les fichiers de retour bancaires et les transactions arrivaient dans des formats différents (Excel, CSV, bases).",
    actions: [
      "Conception de transformations et de jobs Pentaho Data Integration.",
      "Nettoyage, contrôle et chargement des fichiers de retour bancaires et des transactions.",
      "Alimentation de tables prêtes pour le reporting."
    ],
    results: [],
    stack: ["Pentaho PDI", "SQL Server", "MySQL", "SQL"],
    images: ["visuel-etl-pentaho.jpg"]
  },
  {
    id: "rpa",
    title: "Automatisation des rapports (RPA)",
    tagline: "Des robots qui récupèrent chaque jour les rapports des plateformes partenaires.",
    context: "Stage", org: "BMCE Damane Cash", date: "2026",
    cats: ["data", "dev"], accent: "#8c4a32",
    problem: "Les rapports quotidiens des plateformes partenaires étaient téléchargés à la main, chaque jour.",
    actions: [
      "Scripts Selenium pour trois plateformes partenaires : connexion, navigation, téléchargement.",
      "Lancement planifié et classement automatique des fichiers récupérés."
    ],
    results: [["3", "plateformes automatisées"]],
    stack: ["Python", "Selenium", "Planificateur Windows"],
    images: ["visuel-rpa.jpg"]
  },

  /* ---------------- Autres expériences ---------------- */
  {
    id: "devis-ai",
    title: "Devis-AI",
    tagline: "Génération de devis assistée par un LLM, en trois gammes de prix.",
    context: "Stage", org: "Web Success", date: "2025",
    cats: ["ia", "dev"], accent: "#3b82f6",
    problem: "La rédaction des devis prenait du temps et manquait d'homogénéité.",
    actions: [
      "API REST Django avec authentification JWT et gestion des rôles.",
      "Génération par LLM de trois variantes (économique, standard, premium) à partir d'un besoin client.",
      "Export PDF du devis et interface Next.js."
    ],
    results: [["3", "variantes par devis"]],
    stack: ["Django", "DRF", "JWT", "Groq · Llama 3.1", "ReportLab", "Next.js"],
    links: [["Code source", "https://github.com/sab12sab/AIDevis"]],
    images: ["visuel-devis-ai.jpg"]
  },
  {
    id: "gsmag",
    title: "GSMAG · logiciel de gestion commerciale",
    tagline: "Application de bureau multi-postes et site vitrine multilingue.",
    context: "Expérience", org: "Essanet Maroc", date: "2026",
    cats: ["dev", "app"], accent: "#0ea5e9",
    problem: "Moderniser un logiciel de gestion commerciale et sa présence en ligne.",
    actions: [
      "Version 1 du logiciel en C# .NET 8 (WinForms) avec base PostgreSQL et gestion multi-clients.",
      "Site vitrine GSMAG et site ESSANET Academy en français, anglais et arabe, avec assistant conversationnel intégré."
    ],
    results: [["3", "langues"]],
    stack: ["C#", ".NET 8", "WinForms", "PostgreSQL", "HTML/CSS/JS"],
    images: ["visuel-gsmag.jpg"]
  },
  {
    id: "gsmag-web",
    title: "Site vitrine GSMAG",
    tagline: "Présentation du logiciel, des versions et des téléchargements, en trois langues.",
    context: "Expérience", org: "Essanet Maroc", date: "2026",
    cats: ["dev"], accent: "#0ea5e9",
    problem: "Le logiciel GSMAG avait besoin d'une vitrine pour expliquer les versions, les fonctions et les téléchargements.",
    actions: [
      "Site en français, anglais et arabe : accueil, versions Mono, Réseaux, Serveur et Android, fonctions et téléchargements.",
      "Accès à l'espace client et lien direct vers la formation ESSANET Academy."
    ],
    results: [["3", "langues"]],
    stack: ["HTML", "CSS", "JavaScript"],
    links: [["Voir le site", "sites/essanet/index.html"]],
    images: ["visuel-gsmag-web.jpg"]
  },
  {
    id: "essanet-academy",
    title: "ESSANET Academy",
    tagline: "Plateforme de cours GSMAG : modules, chapitres, quiz et suivi de progression.",
    context: "Expérience", org: "Essanet Maroc", date: "2026",
    cats: ["dev"], accent: "#0ea5e9",
    problem: "Les clients et les formateurs avaient besoin d'un parcours en ligne pour apprendre GSMAG, module par module.",
    actions: [
      "Parcours : cours d'introduction, puis fichiers de base, stocks, ventes, achats et caisse.",
      "Chapitres, étapes pratiques et quiz, avec suivi de la progression.",
      "Espace formateur et assistant conversationnel, en français, anglais et arabe."
    ],
    results: [["5", "modules GSMAG"]],
    stack: ["HTML", "CSS", "JavaScript"],
    links: [["Voir le site", "sites/essanet/formation/index.html"]],
    images: ["visuel-essanet-academy.jpg"]
  },

  /* ---------------- Académique · IA ---------------- */
  {
    id: "foodpassport",
    title: "FoodPassport AI",
    tagline: "Moteur de recommandation culinaire explicable, avec un chef conversationnel.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["ia"], featured: true, accent: "#111827",
    team: "Projet d'équipe (3 personnes). Mon rôle : full stack et expérience utilisateur.",
    problem: "Proposer des plats du monde à partir de ce que l'utilisateur a chez lui, sans laisser le modèle de langage inventer des recettes ni ignorer les allergies.",
    actions: [
      "Moteur de score déterministe : ingrédients disponibles, temps, régime, avec filtre strict des allergènes.",
      "Le LLM explique le classement et propose des adaptations, mais ne décide jamais du score.",
      "Garde-fous : refus hors sujet, aucune recette inventée, réponses fondées sur le corpus.",
      "Évaluation de deux versions de prompt sur 12 scénarios de test."
    ],
    results: [["12/12", "scénarios réussis (contre 5/12 en V1)"], ["16", "tests automatisés"], ["11", "pays représentés"]],
    stack: ["FastAPI", "React", "Vite", "Groq", "Ollama", "pytest"],
    images: ["visuel-foodpassport.jpg"]
  },
  {
    id: "rag-scolarite",
    title: "Assistant scolarité (RAG)",
    tagline: "Réponses sourcées sur les règlements de l'université, avec citations vérifiées.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["ia"], featured: true, accent: "#7c3aed",
    team: "Projet réalisé en binôme.",
    problem: "Retrouver rapidement une règle précise dans des documents PDF longs, contenant de nombreux tableaux.",
    actions: [
      "Extraction PDF et réécriture des tableaux en phrases complètes pour qu'ils restent interrogeables.",
      "Comparaison de deux découpages : taille fixe (102 segments) et structure du document (166 segments).",
      "Embeddings multilingues, base vectorielle Chroma, seuil de pertinence pour refuser les questions hors corpus.",
      "Vérification que chaque citation renvoyée existe bien dans la source."
    ],
    results: [["1,00", "Hit@k (découpage structurel)"], ["0,85", "MRR contre 0,78 en taille fixe"]],
    stack: ["Python", "PyMuPDF", "FastEmbed", "ChromaDB", "FastAPI", "React", "TypeScript"],
    images: ["visuel-rag-scolarite.jpg"]
  },
  {
    id: "tp-embeddings",
    title: "Embeddings et RAG avec LangChain",
    tagline: "Classification zero-shot, similarité multilingue et FAQ sémantique.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["ia"], accent: "#7c3aed",
    problem: "Mesurer ce que les embeddings apportent sans entraînement spécifique.",
    actions: [
      "Classification zero-shot par similarité cosinus.",
      "Recherche multilingue et FAQ avec seuil de confiance.",
      "Chaîne RAG LangChain + Chroma avec test de garde-fou."
    ],
    results: [["90 %", "de précision en zero-shot"], ["5/5", "questions bien retrouvées"]],
    stack: ["Python", "OpenAI Embeddings", "LangChain", "ChromaDB"],
    images: ["visuel-tp-embeddings.jpg"]
  },
  {
    id: "keras",
    title: "Réseaux de neurones avec Keras",
    tagline: "Régression et classification sur des données de résultats scolaires.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["ia"], accent: "#7c3aed",
    problem: "Comparer un réseau de neurones dense pour une tâche de régression et une tâche de classification.",
    actions: ["Préparation et normalisation des données.", "Architecture dense, choix de la fonction de perte et des métriques adaptées à chaque tâche."],
    results: [],
    stack: ["Python", "TensorFlow", "Keras", "scikit-learn"],
    images: ["visuel-keras.jpg"]
  },
  {
    id: "film-reco",
    title: "Recommandation de films et ACP interactive",
    tagline: "TF-IDF, clustering et réduction de dimension dans une application Streamlit.",
    context: "Académique", org: "Université Mundiapolis", date: "2025",
    cats: ["ia", "data"], accent: "#7c3aed",
    problem: "Recommander des films proches d'un titre donné et visualiser la structure du catalogue.",
    actions: ["Vectorisation TF-IDF et similarité cosinus.", "Regroupement K-Means et projection ACP.", "Seconde application dédiée à l'exploration d'une ACP."],
    results: [],
    stack: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    images: ["visuel-film-reco.jpg"]
  },

  /* ---------------- Académique · Data / ERP ---------------- */
  {
    id: "dw-hotel",
    title: "Entrepôt de données d'une chaîne hôtelière",
    tagline: "Modèle en étoile, chargement ETL et tableaux de bord Power BI.",
    context: "Académique", org: "Université Mundiapolis", date: "2025",
    cats: ["data"], accent: "#059669",
    team: "Projet d'équipe.",
    problem: "Piloter l'activité d'une chaîne d'hôtels à partir de sources dispersées.",
    actions: ["Modélisation dimensionnelle (faits et dimensions).", "Flux Pentaho vers PostgreSQL conteneurisé.", "Tableaux de bord Power BI : occupation, chiffre d'affaires, saisonnalité."],
    results: [],
    stack: ["Pentaho", "PostgreSQL", "Docker", "Power BI"],
    images: ["visuel-dw-hotel.jpg"]
  },
  {
    id: "odoo",
    title: "Module Odoo de location de matériel événementiel",
    tagline: "Un module ERP complet : réservations, QR codes, rapports et indicateurs.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["app"], featured: true, accent: "#714b67",
    problem: "Gérer la location de matériel pour des événements : disponibilité, réservations, retours et facturation.",
    actions: [
      "Une douzaine de modèles métier (matériel, réservation, événement, client, retour).",
      "QR code par équipement pour le suivi des sorties et retours.",
      "Cinq rapports PDF QWeb et tableau de bord d'indicateurs.",
      "Trois profils d'accès avec règles de sécurité."
    ],
    results: [["12", "modèles métier"], ["5", "rapports PDF"], ["3", "profils"]],
    stack: ["Odoo 17", "Python", "XML", "QWeb", "PostgreSQL"],
    images: ["visuel-odoo.jpg"]
  },
  {
    id: "algofusion",
    title: "ALGOFUSION",
    tagline: "Moteur de recherche, compression de Huffman et plus court chemin de Dijkstra.",
    context: "Académique", org: "Université Mundiapolis", date: "2024",
    cats: ["dev"], accent: "#3d6f99",
    problem: "Rendre visibles et manipulables des algorithmes classiques.",
    actions: ["Moteur de recherche dans un corpus.", "Compression et décompression de Huffman.", "Calcul d'itinéraires avec Dijkstra."],
    results: [],
    stack: ["Python", "Streamlit"],
    links: [["Code source", "https://github.com/sab12sab/Algorithme"]],
    images: ["visuel-algofusion.jpg"]
  },

  /* ---------------- Académique · Cloud / DevOps / Réseaux ---------------- */
  {
    id: "mlops-docker",
    title: "Industrialisation d'un modèle ML avec Docker",
    tagline: "Du notebook à une API conteneurisée, optimisée et scannée.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["cloud", "ia"], featured: true, accent: "#0db7ed",
    problem: "Passer d'un modèle de classification (revenus, jeu Adult Income) à un service prêt pour la production.",
    actions: [
      "Entraînement et API de prédiction séparés dans deux images.",
      "Optimisation pas à pas : image slim, cache des couches, installation des dépendances.",
      "Orchestration Docker Compose et analyse de vulnérabilités avec Trivy."
    ],
    results: [["624 → 173", "Mo d'image"], ["85 → 14 s", "de reconstruction"], ["0,93", "AUC"], ["0,88", "accuracy"]],
    stack: ["Python", "scikit-learn", "FastAPI", "Docker", "Docker Compose", "Trivy"],
    images: ["visuel-mlops-docker.jpg"]
  },
  {
    id: "iris-redis",
    title: "API de prédiction avec cache Redis",
    tagline: "Service conteneurisé avec statistiques persistantes.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["cloud"], accent: "#0db7ed",
    problem: "Conserver les statistiques d'utilisation d'une API de prédiction entre deux redémarrages.",
    actions: ["API de classification conteneurisée.", "Redis avec persistance AOF via Docker Compose.", "Tests d'arrêt, de redémarrage et de suppression des volumes."],
    results: [],
    stack: ["Python", "FastAPI", "Redis", "Docker Compose"],
    links: [["Code source", "https://github.com/sab12sab/TP4"]],
    images: ["visuel-iris-redis.jpg"]
  },
  {
    id: "zabbix-aws",
    title: "Supervision Zabbix sur AWS",
    tagline: "Infrastructure réseau sur mesure et supervision centralisée.",
    context: "Académique", org: "Université Mundiapolis", date: "2025",
    cats: ["cloud"], accent: "#ff9900",
    problem: "Superviser plusieurs serveurs dans le cloud depuis un point central.",
    actions: ["VPC, sous-réseaux et groupes de sécurité.", "Trois instances EC2.", "Serveur Zabbix sous Docker Compose et agents sur les machines supervisées."],
    results: [["3", "instances EC2"]],
    stack: ["AWS EC2", "VPC", "Docker Compose", "Zabbix", "Linux"],
    images: ["visuel-zabbix-aws.jpg"]
  },
  {
    id: "glpi-aws",
    title: "GLPI et WordPress sur AWS",
    tagline: "Déploiement d'applications web sur des instances EC2.",
    context: "Académique", org: "Université Mundiapolis", date: "2025",
    cats: ["cloud"], accent: "#ff9900",
    problem: "Déployer un outil de gestion de parc et un site web dans le cloud.",
    actions: ["Installation LAMP sur EC2.", "Déploiement GLPI et WordPress, configuration des bases de données."],
    results: [],
    stack: ["AWS EC2", "Linux", "Apache", "MySQL", "GLPI", "WordPress"],
    images: ["visuel-glpi-aws.jpg"]
  },
  {
    id: "packetfence",
    title: "Contrôle d'accès réseau 802.1X",
    tagline: "Authentification des postes avec PacketFence et Active Directory.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["cloud"], accent: "#dc2626",
    problem: "N'autoriser sur le réseau que les postes et utilisateurs reconnus.",
    actions: ["Mise en place de PacketFence.", "Authentification 802.1X adossée à Active Directory.", "Gestion des profils d'accès."],
    results: [],
    stack: ["PacketFence", "802.1X", "RADIUS", "Active Directory"],
    images: ["visuel-packetfence.jpg"]
  },
  {
    id: "mqtt",
    title: "Smart Factory avec MQTT",
    tagline: "Remontée de mesures de capteurs industriels en temps réel.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["cloud", "data"], accent: "#660066",
    problem: "Collecter et diffuser des mesures de capteurs d'une usine simulée.",
    actions: ["Broker MQTT, publication et abonnement par sujets.", "Traitement et affichage des mesures."],
    results: [],
    stack: ["MQTT", "Python", "IoT"],
    images: ["visuel-mqtt.jpg"]
  },
  {
    id: "blockchain",
    title: "Blockchain : preuve de travail et preuve d'enjeu",
    tagline: "Implémentation d'une chaîne de blocs et de ses mécanismes de consensus.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["dev"], accent: "#f59e0b",
    problem: "Comprendre de l'intérieur le fonctionnement d'une blockchain.",
    actions: ["Blocs, hachage et minage par preuve de travail.", "Mécanisme de preuve d'enjeu."],
    results: [],
    stack: ["Python", "Cryptographie"],
    images: ["visuel-blockchain.jpg"]
  },
  {
    id: "git",
    title: "Workflow Git en équipe",
    tagline: "Branches, revues et résolution de conflits.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["cloud"], accent: "#f05032",
    problem: "Mettre en pratique un flux de travail collaboratif.",
    actions: ["Branches de fonctionnalités et pull requests.", "Résolution de conflits et historique propre."],
    results: [],
    stack: ["Git", "GitHub"],
    links: [["Code source", "https://github.com/sab12sab/tp-git-c17"]],
    images: ["visuel-git.jpg"]
  },
  {
    id: "event-manager",
    title: "EventManagerAI",
    tagline: "Tableau Kanban de gestion d'événements avec suggestions générées.",
    context: "Académique", org: "Université Mundiapolis", date: "2026",
    cats: ["ia", "dev"], accent: "#7c3aed",
    team: "Projet d'équipe. Ma part : refactorisation, qualité de code et documentation.",
    problem: "Organiser les tâches d'un événement et proposer des actions pertinentes.",
    actions: ["Refactorisation du code Flask.", "Correction des anomalies de qualité relevées par l'analyse statique.", "Documentation technique."],
    results: [],
    stack: ["Python", "Flask", "Gemini API", "SonarLint"],
    images: ["visuel-event-manager.jpg"]
  },
  {
    id: "tests-dab",
    title: "Campagne de tests d'un distributeur automatique",
    tagline: "Cas de test, exécution et suivi des anomalies.",
    context: "Académique", org: "Université Mundiapolis", date: "2025",
    cats: ["app"], accent: "#64748b",
    problem: "Valider le comportement d'un distributeur de billets.",
    actions: ["Rédaction des cas de test fonctionnels.", "Suivi des anomalies dans MantisBT."],
    results: [],
    stack: ["MantisBT", "Tests fonctionnels"],
    images: ["visuel-tests-dab.jpg"]
  },
  {
    id: "anti-gaspi",
    title: "Projet entrepreneurial anti-gaspillage",
    tagline: "Étude terrain et plateforme de revente des invendus de restaurants.",
    context: "Académique", org: "Université Mundiapolis", date: "2025",
    cats: ["data"], accent: "#16a34a",
    problem: "Mesurer le gaspillage alimentaire dans la restauration et proposer une solution.",
    actions: ["Observation de six restaurants et estimation des pertes.", "Proposition d'une plateforme de vente des invendus à prix réduit."],
    results: [["15-20 %", "de nourriture perdue"], ["~6 165 MAD", "de pertes par jour"]],
    stack: ["Étude de marché", "Business model"],
    images: ["visuel-anti-gaspi.jpg"]
  },

  /* ---------------- Personnels ---------------- */
  {
    id: "coran",
    title: "Wanis · application Coran",
    tagline: "Identification d'une récitation à partir de la voix, en ligne.",
    context: "Personnel", org: "Projet personnel", date: "2026",
    cats: ["ia", "dev"], featured: true, accent: "#1d4d3c",
    problem: "Reconnaître le verset récité à partir d'un simple enregistrement, et réunir lecture, horaires de prière et invocations dans une seule application.",
    actions: [
      "Transcription de l'audio en arabe, normalisation du texte (diacritiques, variantes d'écriture).",
      "Recherche du verset le plus proche par distance de Levenshtein.",
      "Application web et mobile : lecture, horaires de prière, qibla, adhkar."
    ],
    results: [["En ligne", "accessible publiquement"]],
    stack: ["React 19", "Express", "Capacitor", "Deepgram", "Levenshtein"],
    links: [["Voir l'application", "https://coran-nour.vercel.app"], ["Code source", "https://github.com/sab12sab/coran-nour"]],
    images: ["visuel-coran.jpg"]
  },
  {
    id: "studio-photo",
    title: "Studio photo produit",
    tagline: "Détourage automatique et fonds professionnels pour photos de produits.",
    context: "Personnel", org: "Projet personnel", date: "2026",
    cats: ["ia", "dev"], accent: "#475569",
    problem: "Obtenir des photos de produits propres pour la vente en ligne, sans studio.",
    actions: [
      "Détourage par segmentation (U²-Net, ISNet).",
      "Huit fonds au choix et export haute définition (2 400 px).",
      "Lecture du texte présent sur l'image par OCR.",
      "Accès depuis le téléphone par QR code."
    ],
    results: [["8", "fonds disponibles"], ["2 400 px", "en sortie"]],
    stack: ["Python", "FastAPI", "rembg", "ISNet", "OCR"],
    images: ["visuel-studio-photo.jpg"]
  },
  {
    id: "golden-spark",
    title: "Golden Spark",
    tagline: "Boutique en ligne de bijoux : site e-commerce et pilotage de l'activité.",
    context: "Entrepreneuriat", org: "Golden Spark", date: "2025 - aujourd'hui",
    cats: ["dev"], accent: "#b8860b",
    problem: "Lancer et faire vivre une boutique en ligne.",
    actions: ["Site e-commerce : catalogue, panier, commandes.", "Stratégie de contenu Instagram et TikTok, suivi des commandes et des performances."],
    results: [],
    stack: ["React 19", "Flask", "Marketing digital"],
    links: [["Code source", "https://github.com/sab12sab/master"]],
    images: ["visuel-golden-spark.jpg"]
  },
  {
    id: "win2lang",
    title: "Win2Lang",
    tagline: "Conversion de code WinDev vers C# .NET.",
    context: "Personnel", org: "Projet personnel", date: "2026",
    cats: ["dev"], accent: "#512bd4",
    problem: "Faciliter la migration d'applications WinDev vers un environnement moderne.",
    actions: ["Analyse du code source WinDev.", "Génération de code C# .NET 8 équivalent."],
    results: [],
    stack: ["C#", ".NET 8", "Analyse syntaxique"],
    images: ["visuel-win2lang.jpg"]
  },
  {
    id: "lumen",
    title: "Lumen",
    tagline: "Production d'une vidéo à partir d'un script texte.",
    context: "Personnel", org: "Projet personnel", date: "2026",
    cats: ["ia", "dev"], accent: "#0f172a",
    problem: "Passer d'un script écrit à une vidéo montée.",
    actions: ["Découpage du script en scènes.", "Génération des plans et assemblage avec ffmpeg."],
    results: [],
    stack: ["Next.js", "fal.ai", "ffmpeg"],
    images: ["visuel-lumen.jpg"]
  },
  {
    id: "pdf-translate",
    title: "Traducteur de documents PDF",
    tagline: "Traduction en conservant la mise en page, y compris pour les PDF scannés.",
    context: "Personnel", org: "Projet personnel", date: "2026",
    cats: ["ia", "dev"], accent: "#334155",
    problem: "Traduire un PDF sans perdre sa mise en page.",
    actions: ["Extraction du texte positionné.", "OCR pour les pages scannées.", "Réinsertion de la traduction à l'emplacement d'origine."],
    results: [],
    stack: ["Python", "PyMuPDF", "RapidOCR", "deep-translator"],
    images: ["visuel-pdf-translate.jpg"]
  }
];

const EXPERIENCES = [
  {
    org: "BMCE Damane Cash", sub: "Filiale de Bank of Africa",
    role: "Stagiaire en ingénierie des données et applications métier",
    date: "Mars – Juillet 2026", length: "5 mois", place: "Casablanca",
    points: [
      "Flux ETL Pentaho pour intégrer des fichiers bancaires hétérogènes.",
      "Applications internes : gestion des RIB, générateur SIMT/MAD, relevés de commissions, factures PDF, extraction de données.",
      "Robots Selenium qui récupèrent chaque jour les rapports des plateformes partenaires.",
      "Portail ERP Launchpad pour regrouper toutes les applications en un seul point d'accès."
    ],
    tags: ["Pentaho", "Python", "Selenium", "SQL Server", "Streamlit", "FastAPI", "Next.js"],
    projects: ["erp-launchpad", "gestion-rib", "simt-mad", "cms-crc", "factures-pdf", "extraction", "etl-pentaho", "rpa"]
  },
  {
    org: "Marsa Maroc", sub: "Direction des Systèmes d'Information",
    role: "Stagiaire Data & IA (PFA)",
    date: "Juillet – Septembre 2026", length: "3 mois", place: "Casablanca",
    points: [
      "Assistant décisionnel Marsa Insight AI : une question en langage naturel devient une requête SQL contrôlée, un graphique et une interprétation.",
      "Accès en lecture seule, contrôle par rôle, validation de chaque requête avant exécution.",
      "Import CSV/Excel, comparaison de périodes et de sites, rapport exportable.",
      "Formation SAP suivie chez Marsa Maroc."
    ],
    tags: ["LangGraph", "RAG", "FastAPI", "PostgreSQL", "React", "SAP"],
    projects: ["marsa-insight"]
  },
  {
    org: "Web Success", sub: "Agence web",
    role: "Stagiaire développeuse full stack",
    date: "Juillet – Août 2025", length: "2 mois", place: "Casablanca",
    points: ["Application Devis-AI : génération de devis par LLM, API REST sécurisée, export PDF."],
    tags: ["Django", "Next.js", "LLM"],
    projects: ["devis-ai"]
  },
  {
    org: "Essanet Maroc", sub: "Éditeur de logiciels de gestion",
    role: "Responsable Pack Sohoula, puis développement",
    date: "Étés 2023 et 2024", length: "", place: "Casablanca",
    points: [
      "Gestion et suivi technique du site Pack Sohoula (WordPress).",
      "Par la suite : logiciel GSMAG en C# .NET et sites vitrines multilingues."
    ],
    tags: ["WordPress", "C#", ".NET", "PostgreSQL"],
    projects: ["gsmag", "gsmag-web", "essanet-academy"]
  }
];

const SKILLS = [
  { title: "IA & LLM", items: ["Machine learning (scikit-learn)", "Deep learning (Keras)", "RAG", "Agents LangGraph", "Text-to-SQL", "Embeddings", "Évaluation de prompts", "Vision (segmentation, OCR)"] },
  { title: "Data", items: ["Python", "SQL", "Pandas", "ETL Pentaho", "PostgreSQL", "SQL Server", "MySQL", "Power BI", "Modélisation en étoile"] },
  { title: "Développement", items: ["FastAPI", "Flask", "Django", "Streamlit", "React", "Next.js", "TypeScript", "C# .NET", "Odoo"] },
  { title: "Cloud & DevOps", items: ["AWS (EC2, VPC)", "Docker", "Docker Compose", "Git", "Trivy", "Linux", "Redis", "Zabbix"] },
  { title: "Sécurité", items: ["JWT", "Contrôle d'accès par rôle", "Validation SQL", "802.1X", "Journalisation d'audit"] },
  { title: "Langues", items: ["Arabe : langue maternelle", "Français : bilingue (C2)", "Anglais : courant (C2)"] }
];
