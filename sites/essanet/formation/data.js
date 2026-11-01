/* Curriculum GSMAG — Tuile = COURS → CHAPITRES → SOUS-CHAPITRES (A/B/C…) → étapes + captures */
window.GSMAG_CURRICULUM = {
  version: 7,
  title: "Formation GSMAG",
  subtitle: "Parcours officiel ESSANET — de la prise en main au pilotage",
  passPercent: 70,
  courses: [
    {
      id: "course-intro",
      number: "0",
      title: "ESSANET Technologie",
      description:
        "Cours introductif : qui nous sommes, les versions GSMAG, les fonctionnalités, la technologie et nos partenaires.",
      sortOrder: 0,
      chapters: [
        {
          id: "0.1",
          title: "Qui sommes-nous ?",
          duration: "20 min",
          level: "Introduction",
          purpose:
            "Découvrir ESSANET Maroc Sarl en détail : qui nous sommes, ce que nous faisons, pour qui, et comment nous accompagnons nos clients au Maroc.",
          videoUrl: "",
          image: "../assets/about.jpg",
          sections: [
            {
              title: "Présentation d’ESSANET Maroc",
              note: "ESSANET Maroc Sarl — 465, Technopark, Route Noucer, Casablanca · www.essanet.net",
              steps: [
                {
                  text:
                    "ESSANET Maroc Sarl est une société spécialisée dans la conception et le déploiement de solutions informatiques pour les entreprises. Notre produit phare, GSMAG, est un logiciel de gestion commerciale complet : il permet de suivre le stock, de facturer, de gérer les clients et les fournisseurs, et de piloter la caisse au quotidien.",
                },
                {
                  text:
                    "GSMAG a été pensé pour les réalités du marché marocain. Les écrans, les documents (devis, factures, BL) et les façons de travailler correspondent aux besoins concrets des commerçants, des distributeurs et des points de vente — pas à un logiciel générique importé sans adaptation.",
                },
                {
                  text:
                    "Nous accompagnons surtout quatre types d’activité : le commerce de détail, la distribution, le retail (magasins et enseignes) et la force de vente sur le terrain. Dans tous ces cas, l’objectif est le même : avoir une information claire, à jour, et partageable entre l’équipe et la direction.",
                },
                {
                  text:
                    "Notre siège se trouve au Technopark de Casablanca (465, Route Noucer). C’est de là que partent le développement, le support et les formations. Vous pouvez aussi nous retrouver en ligne sur essanet.net.",
                  image: "../assets/about.jpg",
                },
              ],
            },
            {
              title: "Notre mission",
              steps: [
                {
                  text:
                    "Notre mission est simple à comprendre : automatiser ce qui fait perdre du temps. Au lieu de noter le stock sur papier ou dans des fichiers Excel dispersés, GSMAG centralise les articles, les mouvements, les prix et les marges. La facturation et les règlements suivent la même logique : tout est enregistré au même endroit.",
                },
                {
                  text:
                    "Quand le logiciel est bien utilisé, les équipes commerciales et comptables gagnent du temps chaque jour. Moins de double saisie, moins de recherche d’information, plus de temps pour vendre, relancer un client ou contrôler la caisse.",
                },
                {
                  text:
                    "Automatiser, c’est aussi réduire les erreurs. Une mauvaise quantité, un prix oublié ou un règlement non suivi coûtent cher. GSMAG aide à garder un historique fiable des clients et des fournisseurs, pour savoir qui doit quoi, et ce qui a déjà été livré ou facturé.",
                },
              ],
            },
            {
              title: "Accompagnement & présence",
              example: "Formation terrain · ESSANET Academy en ligne · Chaîne YouTube · Assistance TeamViewer · Contact : essanet@essanet.net",
              steps: [
                {
                  text:
                    "Installer un logiciel ne suffit pas : il faut savoir l’utiliser correctement. ESSANET propose des stages et des sessions de formation sur GSMAG. On y voit la prise en main, le paramétrage (sociétés, utilisateurs, documents) et les bonnes pratiques métier adaptées à votre activité.",
                },
                {
                  text:
                    "En plus de la formation en présentiel, l’ESSANET Academy (cet espace) permet d’apprendre à son rythme : chapitres, étapes guidées, captures d’écran et quiz. C’est un complément idéal pour réviser après une session ou pour former un nouveau collaborateur.",
                },
                {
                  text:
                    "Sur YouTube, ESSANET publie des démonstrations et des tutoriels pour voir le logiciel en situation réelle. C’est utile pour découvrir une fonction avant de l’appliquer en entreprise.",
                },
                {
                  text:
                    "Pour nous joindre : essanet@essanet.net. Téléphones : 0669 148 474, 0669 917 804, 0522 824 343 et 0522 50 42 72. En cas de besoin, une assistance à distance peut être organisée (par exemple via TeamViewer) pour vous aider directement sur votre poste.",
                },
              ],
            },
          ],
          quiz: [
            {
              q: "Que conçoit et déploie ESSANET Maroc ?",
              options: ["Un réseau social", "Le logiciel de gestion commerciale GSMAG", "Un service de livraison uniquement"],
              answer: 1,
            },
            {
              q: "Où se situe ESSANET Maroc ?",
              options: ["Rabat — Agdal", "Casablanca — Technopark", "Marrakech — Gueliz"],
              answer: 1,
            },
          ],
        },
        {
          id: "0.2",
          title: "Les versions GSMAG",
          duration: "25 min",
          level: "Introduction",
          purpose:
            "Comprendre en détail les quatre versions GSMAG (Mono, Réseaux, Serveur, Android) pour choisir celle qui correspond à la taille et à l’organisation de l’entreprise.",
          videoUrl: "",
          sections: [
            {
              title: "Version Mono",
              example: "Exemple : une boutique avec un seul ordinateur à la caisse, ou un petit magasin géré par une seule personne.",
              steps: [
                {
                  text:
                    "La Version Mono est faite pour un seul poste de travail. Toute l’activité passe par cet ordinateur : consultation du stock, vente, facture, encaissement. C’est la configuration la plus simple à installer et à comprendre.",
                },
                {
                  text:
                    "Malgré sa simplicité, elle garde la puissance de GSMAG : fichiers articles, clients, fournisseurs, documents commerciaux et caisse. Elle convient très bien quand l’entreprise n’a pas besoin que plusieurs personnes travaillent en même temps sur le même logiciel.",
                },
                {
                  text:
                    "À retenir : un poste, un utilisateur principal, toute la gestion commerciale au même endroit. Si demain l’entreprise grandit, on pourra évoluer vers une version multi-postes.",
                  image: "../assets/version-mono.png",
                },
              ],
            },
            {
              title: "Version Réseaux",
              example: "Exemple : un magasin avec une caisse + un bureau administratif, ou deux postes qui doivent voir le même stock.",
              steps: [
                {
                  text:
                    "La Version Réseaux permet de connecter plusieurs ordinateurs entre eux. Les données (articles, clients, ventes) ne restent plus sur une seule machine : elles sont partagées. Ainsi, ce qui est vendu à la caisse est visible immédiatement au bureau, et inversement.",
                },
                {
                  text:
                    "Cela aide les équipes à se coordonner. Le vendeur, le magasinier et la personne qui facture travaillent sur la même information, au même moment. On évite les « versions » différentes d’un fichier Excel ou les appels pour savoir s’il reste du stock.",
                },
                {
                  text:
                    "À retenir : plusieurs postes, une même base d’information, travail en temps réel. C’est le pas naturel après la Version Mono lorsque l’entreprise s’agrandit.",
                  image: "../assets/version-reseaux.png",
                },
              ],
            },
            {
              title: "Version Serveur",
              example: "Exemple : une PME avec plusieurs utilisateurs simultanés, des volumes importants, besoin de performance et de stabilité.",
              steps: [
                {
                  text:
                    "La Version Serveur va plus loin : plusieurs personnes peuvent utiliser GSMAG en même temps, de façon fluide. L’architecture repose sur une base SQL en mode client/serveur, conçue pour les structures qui ont un vrai volume d’activité.",
                },
                {
                  text:
                    "Concrètement, le serveur centralise les données ; les postes clients s’y connectent. Cela apporte plus de performance, une meilleure organisation des accès, et une solution adaptée aux entreprises qui ne peuvent plus se contenter d’un petit partage simple.",
                },
                {
                  text:
                    "À retenir : multi-utilisateurs, base SQL client/serveur, destiné aux organisations plus exigeantes. C’est souvent le choix des entreprises qui veulent un outil durable et scalable.",
                  image: "../assets/version-serveur.png",
                },
              ],
            },
            {
              title: "Version Android",
              example: "Exemple : un commercial qui visite des clients avec une tablette, ou un point de vente mobile en magasin.",
              steps: [
                {
                  text:
                    "La Version Android apporte GSMAG sur tablette, avec une interface tactile. L’idée n’est plus d’être collé à un bureau : on peut consulter, saisir ou suivre l’activité là où se trouve le client ou la marchandise.",
                },
                {
                  text:
                    "Elle est particulièrement utile pour la force de vente, le retail, et tout suivi terrain. Un commercial peut préparer une visite, enregistrer une commande ou vérifier une information sans revenir immédiatement sur un PC fixe.",
                },
                {
                  text:
                    "À retenir : GSMAG aussi en mobilité. La Version Android complète les versions Windows ; elle ne remplace pas forcément le poste de bureau, elle l’étend hors du local.",
                  image: "../assets/version-android.png",
                },
              ],
            },
          ],
          quiz: [
            {
              q: "Quelle version convient à un seul poste de caisse ?",
              options: ["Version Serveur", "Version Mono", "Version Android uniquement"],
              answer: 1,
            },
            {
              q: "Quelle version est destinée aux tablettes et à la force de vente ?",
              options: ["Version Mono", "Version Android", "Version Réseaux uniquement"],
              answer: 1,
            },
          ],
        },
        {
          id: "0.3",
          title: "Fonctionnalités clés",
          duration: "20 min",
          level: "Introduction",
          purpose:
            "Voir en détail ce que GSMAG couvre dans la chaîne commerciale : du fichier client jusqu’aux statistiques, en passant par le stock et la caisse.",
          videoUrl: "",
          sections: [
            {
              title: "Clients, fournisseurs & documents",
              steps: [
                {
                  text:
                    "Avec GSMAG, chaque client et chaque fournisseur a sa fiche : coordonnées, historique, solde, règlements. On peut retrouver rapidement qui a acheté quoi, ce qui reste à payer, et relancer si besoin. C’est la base d’un bon suivi commercial et d’une relation client claire.",
                },
                {
                  text:
                    "Ensuite vient la chaîne des documents : devis, bon de commande, bon de livraison, facture, avoir. L’idée est de ne pas tout recommencer à zéro à chaque étape. On part d’un devis, on le transforme, on livre, on facture — avec une traçabilité entre les documents.",
                },
                {
                  text:
                    "Cette continuité évite les oublis (livrer sans facturer, facturer sans livrer) et donne une vision propre de l’activité. Pour l’apprenant, c’est important de comprendre que GSMAG n’est pas « juste une facture » : c’est tout le cycle commercial.",
                },
              ],
            },
            {
              title: "Stock, caisse & pilotage",
              steps: [
                {
                  text:
                    "Le module stock organise les produits par catégories et familles, avec prix d’achat, prix de vente, marges et PAMP. On suit les quantités en temps réel : entrées, sorties, alertes de stock minimum. Cela permet de savoir ce qu’il faut commander avant d’être en rupture.",
                },
                {
                  text:
                    "La caisse et les règlements enregistrent les encaissements (clients) et les paiements (fournisseurs). Au quotidien, on peut contrôler ce qui est entré et sorti, et clôturer la caisse avec une vision claire de la journée.",
                },
                {
                  text:
                    "Les statistiques et tableaux de bord servent à piloter : quelles ventes, quels articles marchent, quels clients sont actifs. Ce n’est plus seulement « saisir » : c’est comprendre l’activité pour décider.",
                },
                {
                  text:
                    "Enfin, GSMAG gère le multi-sociétés : plusieurs sociétés dans une même installation, sans limite artificielle. Utile pour un groupe, un gérant multi-magasins, ou des activités séparées qui restent dans le même outil.",
                },
              ],
            },
            {
              title: "GSMAG 2026 — installation & démarrage",
              example: "Démo · Install Windows 2026 · Packs tablette · Modèles Excel Articles / Clients / Fournisseurs",
              steps: [
                {
                  text:
                    "GSMAG 2026 se télécharge et s’installe sur PC Windows. La version complète permet de démarrer l’outil en entreprise avec l’accompagnement ESSANET (paramétrage, reprise éventuelle de données, formation).",
                },
                {
                  text:
                    "Il existe aussi une version démo : elle sert à découvrir le logiciel avant de s’engager. C’est idéal pour tester les écrans, comprendre le parcours (article → vente → caisse) et poser des questions à l’équipe ESSANET.",
                },
                {
                  text:
                    "Pour accélérer la mise en route, ESSANET fournit des packs tablette et des modèles Excel (articles, clients, fournisseurs). On prépare les données proprement, puis on les intègre dans GSMAG — plutôt que de tout saisir à la main le premier jour.",
                },
              ],
            },
          ],
          quiz: [
            {
              q: "GSMAG permet-il de gérer plusieurs sociétés ?",
              options: ["Non, une seule société", "Oui, un nombre illimité de sociétés", "Uniquement deux sociétés"],
              answer: 1,
            },
            {
              q: "Parmi ces éléments, lequel fait partie de la chaîne commerciale GSMAG ?",
              options: ["Uniquement la messagerie", "Devis, BL, factures et avoirs", "Uniquement le site web"],
              answer: 1,
            },
          ],
        },
        {
          id: "0.4",
          title: "Technologie & partenaires",
          duration: "20 min",
          level: "Introduction",
          purpose:
            "Comprendre avec quels outils techniques GSMAG est construit, et avec quels partenaires ESSANET travaille au quotidien (PC Soft, TeamViewer, clients métier).",
          videoUrl: "",
          sections: [
            {
              title: "Base de données HFSQL",
              note: "HFSQL 2026 Client/Serveur — base SQL portable, gratuite et adaptée aux besoins métier illimités en volume utile.",
              steps: [
                {
                  text:
                    "Derrière GSMAG, les données (articles, clients, documents, caisse…) sont stockées dans une base SQL appelée HFSQL, en version 2026, en mode Client/Serveur. Cela signifie qu’un serveur gère la base, et que les postes s’y connectent pour lire et enregistrer les informations.",
                },
                {
                  text:
                    "HFSQL est présentée comme une base portable, gratuite et sans limite artificielle pour le besoin métier. Pour l’entreprise, cela veut dire : pas besoin d’acheter une licence de base de données coûteuse juste pour faire tourner GSMAG, tout en gardant une vraie technologie SQL fiable.",
                },
                {
                  text:
                    "HFSQL est la technologie base de données de l’éditeur PC Soft. C’est un choix cohérent avec le reste de la stack (WinDev) : même écosystème, même logique de maintenance et d’évolution.",
                  image: "../assets/hfsql.jpg",
                },
              ],
            },
            {
              title: "Développé avec WinDev",
              steps: [
                {
                  text:
                    "GSMAG est développé avec WinDev, un environnement de développement de PC Soft, souvent appelé langage de 5e génération. Concrètement, cela permet de créer des applications métier Windows riches : fenêtres, états, accès base de données, traitements métier.",
                },
                {
                  text:
                    "Pour vous, utilisateur, WinDev n’est pas quelque chose à apprendre. Mais c’est important de savoir que GSMAG repose sur une technologie professionnelle, stable, conçue pour les logiciels de gestion — pas sur un bricolage temporaire.",
                },
                {
                  text:
                    "Le partenaire technologique principal d’ESSANET sur ce socle est donc l’écosystème PC Soft : WinDev pour l’application, HFSQL pour les données. C’est le cœur technique de GSMAG.",
                },
              ],
            },
            {
              title: "Avec qui nous travaillons",
              example: "PC Soft (WinDev / HFSQL) · TeamViewer (support à distance) · Entreprises commerce, distribution, retail, force de vente",
              steps: [
                {
                  text:
                    "PC Soft est l’éditeur de WinDev et HFSQL. ESSANET s’appuie sur ces outils pour construire et faire évoluer GSMAG. Quand on parle « avec qui nous travaillons » au niveau technologique, PC Soft est le partenaire de référence.",
                },
                {
                  text:
                    "TeamViewer est l’outil souvent utilisé pour l’assistance à distance. Si vous avez un problème de paramétrage ou besoin d’aide sur votre poste, un technicien ESSANET peut se connecter (avec votre accord) pour voir votre écran et vous guider sans se déplacer immédiatement.",
                },
                {
                  text:
                    "Nos clients sont les entreprises qui vendent, stockent et facturent au quotidien : commerces, distributeurs, enseignes retail, équipes de force de vente. Ce sont eux qui utilisent GSMAG sur le terrain — et c’est pour eux que le logiciel et la formation sont conçus.",
                },
                {
                  text:
                    "ESSANET ne se limite pas à « vendre un logiciel ». Nous formons, paramétrons et accompagnons, pour que la prise en main réussisse. L’Academy, les sessions de formation et le support font partie de cette relation de long terme avec nos clients.",
                },
              ],
            },
          ],
          quiz: [
            {
              q: "Quelle base de données propulse GSMAG ?",
              options: ["Oracle uniquement", "HFSQL 2026 Client/Serveur", "Excel uniquement"],
              answer: 1,
            },
            {
              q: "Avec quel outil ESSANET assure souvent l’assistance à distance ?",
              options: ["TeamViewer", "Un réseau social", "Un lecteur PDF"],
              answer: 0,
            },
          ],
        },
      ],
    },
    {
      id: "course-1",
      number: "I",
      title: "Gestion des fichiers de base",
      description: "Créer et maîtriser les fichiers Articles, Clients et Fournisseurs.",
      sortOrder: 1,
      chapters: [
        {
          id: "1.1",
          title: "Fichier Articles",
          duration: "25 min",
          level: "Débutant",
          purpose:
            "Cette rubrique permet de voir : création des catégories de produits, création des familles d’articles, création et saisie de la désignation détaillée des articles, renseignement des informations relatives à chaque article.",
          videoUrl: "",
          sections: [
            {
              title: "Créer une catégorie de produits",
              note: "La catégorie créée pourra ensuite être associée aux articles.",
              example: "Boissons · Produits alimentaires · Produits d’entretien",
              steps: [
                { text: "Ouvrir GSMAG." },
                { text: "Aller dans le menu Articles." },
                { text: "Ouvrir Catégories." },
                { text: "Cliquer sur Ajouter / Nouveau." },
                { text: "Saisir le nom de la catégorie." },
                { text: "Ajouter éventuellement une description." },
                { text: "Cliquer sur Enregistrer." },
              ],
            },
            {
              title: "Créer une famille d’articles",
              example: "Catégorie : Boissons → Famille : Boissons gazeuses → Articles : Coca-Cola, Pepsi, Sprite, etc.",
              steps: [
                { text: "Aller dans Articles → Familles." },
                { text: "Cliquer sur Nouveau." },
                { text: "Saisir le nom de la famille." },
                { text: "Sélectionner éventuellement la catégorie correspondante." },
                { text: "Enregistrer." },
              ],
            },
            {
              title: "Créer un article et saisir sa désignation détaillée",
              example:
                "Code : ART001 · Désignation : Coca-Cola · Désignation détaillée : Coca-Cola Original 33 cl · Catégorie : Boissons · Famille : Boissons gazeuses · Prix d’achat : 5 DH · Prix de vente : 7 DH",
              steps: [
                { text: "Aller dans Articles → Fichier Articles." },
                { text: "Cliquer sur Nouvel article." },
                { text: "Saisir le code/article." },
                { text: "Saisir la désignation de l’article." },
                { text: "Saisir la désignation détaillée si nécessaire." },
                { text: "Sélectionner : la catégorie ; la famille ; l’unité de vente ; la marque, si disponible." },
                { text: "Renseigner les prix et les informations commerciales." },
                { text: "Cliquer sur Enregistrer." },
              ],
            },
            {
              title: "Renseigner les informations relatives à chaque article",
              note: "Puis cliquer sur Enregistrer.",
              steps: [
                { text: "Ouvrir la fiche de l’article." },
                { text: "Renseigner : code article, désignation, désignation détaillée." },
                { text: "Renseigner : catégorie, famille, prix d’achat, prix de vente." },
                { text: "Renseigner : quantité en stock, stock minimum, unité." },
                { text: "Renseigner : référence fournisseur, code-barres, marque, TVA si utilisée." },
                { text: "Compléter les autres informations nécessaires à la gestion." },
                { text: "Cliquer sur Enregistrer." },
              ],
            },
          ],
          quiz: [
            {
              q: "À quoi servent les catégories dans le fichier Articles ?",
              options: ["À facturer automatiquement", "À classer les produits pour les retrouver facilement", "À fermer la caisse"],
              answer: 1,
            },
            {
              q: "Que peut-on renseigner sur une fiche article ?",
              options: ["Uniquement le nom du client", "Prix, stock, code-barres, famille, etc.", "Uniquement l’adresse du fournisseur"],
              answer: 1,
            },
          ],
        },
        {
          id: "1.2",
          title: "Fichier Clients",
          duration: "20 min",
          level: "Débutant",
          purpose:
            "Cette rubrique permet d’accéder au fichier clients, d’ajouter un nouveau client, de saisir et modifier les informations client, et de consulter les données enregistrées.",
          videoUrl: "",
          sections: [
            {
              title: "Accéder au fichier clients",
              steps: [
                { text: "Ouvrir GSMAG." },
                { text: "Aller dans le menu Clients." },
                { text: "Cliquer sur Fichier clients." },
                { text: "La liste des clients enregistrés s’affiche." },
                { text: "Utiliser la recherche pour retrouver rapidement un client." },
              ],
            },
            {
              title: "Ajouter un nouveau client",
              example:
                "Code client : CL001 · Nom : Ahmed · Prénom : Mohamed · Téléphone : 06 XX XX XX XX · Adresse : Casablanca · ICE : … · Solde : 0 DH",
              steps: [
                { text: "Ouvrir Clients → Fichier clients." },
                { text: "Cliquer sur Nouveau client." },
                { text: "Saisir les informations demandées." },
                { text: "Cliquer sur Enregistrer." },
              ],
            },
            {
              title: "Saisir ou modifier les informations client",
              note: "Cela permet notamment de mettre à jour le téléphone, l’adresse, les informations fiscales ou les autres données enregistrées.",
              steps: [
                { text: "Ouvrir Fichier clients." },
                { text: "Rechercher le client." },
                { text: "Sélectionner le client." },
                { text: "Cliquer sur Modifier." },
                { text: "Modifier les informations nécessaires." },
                { text: "Cliquer sur Enregistrer." },
              ],
            },
            {
              title: "Consulter les données enregistrées",
              note: "Selon les fonctionnalités activées dans GSMAG, la fiche peut également permettre de consulter les informations commerciales liées au client (ventes, crédit…).",
              steps: [
                { text: "Ouvrir Fichier clients." },
                { text: "Rechercher le client par code, nom, téléphone ou autre critère." },
                { text: "Ouvrir sa fiche." },
                { text: "Consulter les informations enregistrées." },
              ],
            },
          ],
          quiz: [
            {
              q: "Que permet le fichier Clients ?",
              options: ["Uniquement imprimer des étiquettes", "Ajouter, modifier et consulter les fiches clients", "Configurer le serveur HFSQL"],
              answer: 1,
            },
            {
              q: "Après avoir ajouté un client, que peut-on faire ?",
              options: ["Uniquement le supprimer", "Saisir, modifier et consulter ses informations", "Rien d’autre"],
              answer: 1,
            },
          ],
        },
        {
          id: "1.3",
          title: "Fichier Fournisseurs",
          duration: "20 min",
          level: "Débutant",
          purpose:
            "Cette rubrique permet d’accéder au fichier fournisseurs, d’ajouter un nouveau fournisseur, de saisir et modifier les informations fournisseur, et de consulter les données enregistrées.",
          videoUrl: "",
          sections: [
            {
              title: "Accéder au fichier fournisseurs",
              steps: [
                { text: "Ouvrir GSMAG." },
                { text: "Aller dans le menu Fournisseurs." },
                { text: "Cliquer sur Fichier fournisseurs." },
                { text: "La liste des fournisseurs enregistrés apparaît." },
                { text: "Utiliser la recherche pour retrouver un fournisseur." },
              ],
            },
            {
              title: "Ajouter un nouveau fournisseur",
              example:
                "Code fournisseur : FR001 · Raison sociale : Société ABC · Contact : Mohamed · Téléphone : 05 XX XX XX XX · Adresse : Casablanca · ICE : … · Email : …",
              steps: [
                { text: "Aller dans Fournisseurs → Fichier fournisseurs." },
                { text: "Cliquer sur Nouveau fournisseur." },
                { text: "Saisir les informations du fournisseur." },
                { text: "Vérifier les données." },
                { text: "Cliquer sur Enregistrer." },
              ],
            },
            {
              title: "Saisir et modifier les informations fournisseur",
              steps: [
                { text: "Ouvrir le Fichier fournisseurs." },
                { text: "Rechercher le fournisseur." },
                { text: "Sélectionner sa fiche." },
                { text: "Cliquer sur Modifier." },
                { text: "Modifier les informations souhaitées." },
                { text: "Cliquer sur Enregistrer." },
              ],
            },
            {
              title: "Consulter les données enregistrées",
              note: "Tu peux également consulter, si cette fonction existe dans ta version de GSMAG, les opérations liées au fournisseur : achats, commandes, règlements, historique, etc.",
              steps: [
                { text: "Ouvrir Fichier fournisseurs." },
                { text: "Rechercher le fournisseur." },
                { text: "Ouvrir sa fiche." },
                { text: "Consulter les informations enregistrées." },
              ],
            },
          ],
          quiz: [
            {
              q: "Le fichier Fournisseurs sert à :",
              options: ["Gérer uniquement la caisse", "Créer et suivre les fiches fournisseurs", "Remplacer l’inventaire"],
              answer: 1,
            },
            {
              q: "Dans le fichier Fournisseurs, on peut :",
              options: ["Seulement imprimer", "Accéder, ajouter, modifier et consulter", "Uniquement facturer un client"],
              answer: 1,
            },
          ],
        },
      ],
    },
    {
      id: "course-2",
      number: "II",
      title: "Gestion des stocks",
      description: "Entrées, sorties, transferts et inventaire.",
      sortOrder: 2,
      chapters: [
        { id: "2.1", title: "Entrées", duration: "—", level: "À venir", purpose: "Enregistrer les entrées de stock.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "2.2", title: "Sorties", duration: "—", level: "À venir", purpose: "Enregistrer les sorties de stock.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "2.3", title: "Transferts", duration: "—", level: "À venir", purpose: "Transférer le stock entre dépôts.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "2.4", title: "Inventaire", duration: "—", level: "À venir", purpose: "Contrôler et ajuster les stocks physiques.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
      ],
    },
    {
      id: "course-3",
      number: "III",
      title: "Gestion des ventes",
      description: "Commandes, BL, factures et règlements clients.",
      sortOrder: 3,
      chapters: [
        { id: "3.1", title: "Commandes", duration: "—", level: "À venir", purpose: "Gérer les commandes clients.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "3.2", title: "Bons de livraison", duration: "—", level: "À venir", purpose: "Émettre et suivre les BL.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "3.3", title: "Factures", duration: "—", level: "À venir", purpose: "Facturer les ventes.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "3.4", title: "Règlements", duration: "—", level: "À venir", purpose: "Enregistrer les paiements clients.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
      ],
    },
    {
      id: "course-4",
      number: "IV",
      title: "Gestion des achats",
      description: "Commandes, réceptions et factures fournisseurs.",
      sortOrder: 4,
      chapters: [
        { id: "4.1", title: "Commandes fournisseurs", duration: "—", level: "À venir", purpose: "Passer des commandes fournisseurs.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "4.2", title: "Réceptions", duration: "—", level: "À venir", purpose: "Réceptionner la marchandise.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "4.3", title: "Factures fournisseurs", duration: "—", level: "À venir", purpose: "Enregistrer les factures d’achat.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
      ],
    },
    {
      id: "course-5",
      number: "V",
      title: "Caisse",
      description: "Encaissements, décaissements et suivi de caisse.",
      sortOrder: 5,
      chapters: [
        { id: "5.1", title: "Encaissements", duration: "—", level: "À venir", purpose: "Saisir les encaissements.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "5.2", title: "Décaissements", duration: "—", level: "À venir", purpose: "Saisir les sorties de caisse.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
        { id: "5.3", title: "Suivi de caisse", duration: "—", level: "À venir", purpose: "Contrôler et clôturer la caisse.", videoUrl: "", sections: [], quiz: [], comingSoon: true },
      ],
    },
  ],
};

window.GSMAG_USERS = [];
