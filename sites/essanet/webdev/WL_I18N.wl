// ============================================================
// Collection globale WEBDEV : COL_I18N
// Copier dans : Projet → Collections de procédures → Nouvelle
// ============================================================

// Variable globale projet (à déclarer aussi dans l'analyse / globales) :
GLOBAL
	gsLangue is string = "FR"

// ------------------------------------------------------------
PROCEDURE Traduire(sCle is string) : string
// Retourne le texte selon gsLangue
// ------------------------------------------------------------
SWITCH gsLangue
	CASE "EN"
		RESULT TraduireEN(sCle)
	CASE "AR"
		RESULT TraduireAR(sCle)
	OTHER CASE
		RESULT TraduireFR(sCle)
END

// ------------------------------------------------------------
PROCEDURE AppliquerLangue(sLang is string)
// Appeler au chargement page et sur BTN_FR / BTN_EN / BTN_AR
// ------------------------------------------------------------
gsLangue = Upper(sLang)

// --- Header ---
Lien_Versions..Libellé = Traduire("navVersions")
Lien_Fonctions..Libellé = Traduire("navFunctions")
Lien_Telechargements..Libellé = Traduire("navDownloads")
Lien_Formation..Libellé = Traduire("navTraining")
Lien_Contact..Libellé = Traduire("navContact")
BTN_EspaceClient..Libellé = Traduire("clientSpace")
BTN_Telecharger..Libellé = Traduire("download")

// --- Hero ---
LIB_HeroTitre..Libellé = Traduire("heroTitle")
LIB_HeroLead..Libellé = Traduire("heroLead")
BTN_Demo..Libellé = Traduire("tryDemo")
BTN_VoirVersions..Libellé = Traduire("seeVersions")

// --- Versions ---
LIB_VersionsEyebrow..Libellé = Traduire("versionsEyebrow")
LIB_VersionsTitre..Libellé = Traduire("versionsTitle")
LIB_VersionsLead..Libellé = Traduire("versionsLead")
LIB_MonoTitre..Libellé = Traduire("monoTitle")
LIB_MonoTexte..Libellé = Traduire("monoText")
LIB_ReseauxTitre..Libellé = Traduire("networkTitle")
LIB_ReseauxTexte..Libellé = Traduire("networkText")
LIB_ServeurTitre..Libellé = Traduire("serverTitle")
LIB_ServeurTexte..Libellé = Traduire("serverText")
LIB_AndroidTitre..Libellé = Traduire("androidTitle")
LIB_AndroidTexte..Libellé = Traduire("androidText")

// --- Fonctions ---
LIB_FonctionsEyebrow..Libellé = Traduire("featuresEyebrow")
LIB_FonctionsTitre..Libellé = Traduire("featuresTitle")
LIB_FonctionsLead..Libellé = Traduire("featuresLead")
LIB_F1Titre..Libellé = Traduire("f1Title")
LIB_F1Texte..Libellé = Traduire("f1Text")
LIB_F2Titre..Libellé = Traduire("f2Title")
LIB_F2Texte..Libellé = Traduire("f2Text")
LIB_F3Titre..Libellé = Traduire("f3Title")
LIB_F3Texte..Libellé = Traduire("f3Text")
LIB_F4Titre..Libellé = Traduire("f4Title")
LIB_F4Texte..Libellé = Traduire("f4Text")
LIB_F5Titre..Libellé = Traduire("f5Title")
LIB_F5Texte..Libellé = Traduire("f5Text")
LIB_F6Titre..Libellé = Traduire("f6Title")
LIB_F6Texte..Libellé = Traduire("f6Text")

// --- Téléchargements ---
LIB_DLEyebrow..Libellé = Traduire("downloadsEyebrow")
LIB_DLTitre..Libellé = Traduire("downloadsTitle")
LIB_DLLead..Libellé = Traduire("downloadsLead")
LIB_NewTag..Libellé = Traduire("newTag")
LIB_PC2026Titre..Libellé = Traduire("pc2026Title")
LIB_PC2026Texte..Libellé = Traduire("pc2026Text")
BTN_DL_PC2026..Libellé = Traduire("download")

// --- À propos / Formation / Contact ---
LIB_AboutTitre..Libellé = Traduire("aboutTitle")
LIB_AboutP1..Libellé = Traduire("aboutP1")
LIB_AboutP2..Libellé = Traduire("aboutP2")
BTN_Youtube..Libellé = Traduire("youtube")
LIB_FormationEyebrow..Libellé = Traduire("trainingEyebrow")
LIB_FormationTitre..Libellé = Traduire("trainingTitle")
LIB_FormationTexte..Libellé = Traduire("trainingText")
BTN_DemanderFormation..Libellé = Traduire("askTraining")
LIB_ContactEyebrow..Libellé = Traduire("contactEyebrow")
LIB_ContactTitre..Libellé = Traduire("contactTitle")
LIB_ContactLead..Libellé = Traduire("contactLead")
LIB_AdresseTitre..Libellé = Traduire("address")
LIB_AdresseTexte..Libellé = Traduire("addressText")
LIB_EmailTitre..Libellé = Traduire("email")
LIB_TelTitre..Libellé = Traduire("phone")
LIB_DejaClient..Libellé = Traduire("alreadyClient")
LIB_EspaceSecurise..Libellé = Traduire("secureSpace")
BTN_Login..Libellé = Traduire("login")

// Style boutons langue
BTN_FR..CouleurFond = (gsLangue = "FR" ? 0xE03131 ELSE 0x00000000)
BTN_EN..CouleurFond = (gsLangue = "EN" ? 0xE03131 ELSE 0x00000000)
BTN_AR..CouleurFond = (gsLangue = "AR" ? 0xE03131 ELSE 0x00000000)

// Mémoriser (cookie / stockage navigateur selon version WEBDEV)
// Exemple simple :
CookieEcrit("gsmag-lang", gsLangue)

// ------------------------------------------------------------
PROCEDURE TraduireFR(sCle is string) : string
// ------------------------------------------------------------
SWITCH sCle
	CASE "navVersions" : RESULT "Versions"
	CASE "navFunctions" : RESULT "Fonctions"
	CASE "navDownloads" : RESULT "Téléchargements"
	CASE "navTraining" : RESULT "Formation"
	CASE "navContact" : RESULT "Contact"
	CASE "clientSpace" : RESULT "Espace client"
	CASE "download" : RESULT "Télécharger"
	CASE "heroTitle" : RESULT "La gestion commerciale qui suit votre rythme"
	CASE "heroLead" : RESULT "Stock, facturation, clients, caisse — une solution complète pour les entreprises marocaines, du mono-poste au multi-utilisateurs."
	CASE "tryDemo" : RESULT "Essayer la démo"
	CASE "seeVersions" : RESULT "Voir les versions"
	CASE "versionsEyebrow" : RESULT "Configurations"
	CASE "versionsTitle" : RESULT "Quatre versions, une même puissance"
	CASE "versionsLead" : RESULT "Choisissez l’édition adaptée à votre organisation et à votre matériel."
	CASE "monoTitle" : RESULT "Version Mono"
	CASE "monoText" : RESULT "Idéale pour un seul poste : gestion simple et efficace du stock, des ventes et de la caisse."
	CASE "networkTitle" : RESULT "Version Réseaux"
	CASE "networkText" : RESULT "Partagez vos données entre plusieurs postes et coordonnez vos équipes en temps réel."
	CASE "serverTitle" : RESULT "Version Serveur"
	CASE "serverText" : RESULT "Accès simultané multi-utilisateurs avec base SQL client/serveur pour les structures exigeantes."
	CASE "androidTitle" : RESULT "Version Android"
	CASE "androidText" : RESULT "Interface tactile pour tablettes — mode, retail, force de vente et suivi terrain."
	CASE "featuresEyebrow" : RESULT "Fonctionnalités"
	CASE "featuresTitle" : RESULT "Du devis à la facture, tout est couvert"
	CASE "featuresLead" : RESULT "GSMAG prend en charge toute la chaîne commerciale avec des indicateurs clés et des tableaux de bord."
	CASE "f1Title" : RESULT "Clients & fournisseurs"
	CASE "f1Text" : RESULT "Fiches détaillées, historique, suivi des règlements et relances."
	CASE "f2Title" : RESULT "Documents commerciaux"
	CASE "f2Text" : RESULT "Devis, bons de commande, bons de livraison, factures et avoirs."
	CASE "f3Title" : RESULT "Stock & produits"
	CASE "f3Text" : RESULT "Catégories, familles, PAMP, prix, marges — suivi en temps réel."
	CASE "f4Title" : RESULT "Caisse & règlements"
	CASE "f4Text" : RESULT "Encaissements clients et fournisseurs, suivi de caisse au quotidien."
	CASE "f5Title" : RESULT "Statistiques"
	CASE "f5Text" : RESULT "Tableaux de bord et indicateurs pour piloter votre activité."
	CASE "f6Title" : RESULT "Multi-sociétés"
	CASE "f6Text" : RESULT "Nombre illimité de sociétés dans une même installation."
	CASE "downloadsEyebrow" : RESULT "Téléchargements"
	CASE "downloadsTitle" : RESULT "Installez GSMAG 2026"
	CASE "downloadsLead" : RESULT "Démos, versions Windows, packs tablette et modèles Excel prêts à l’emploi."
	CASE "newTag" : RESULT "Nouveau"
	CASE "pc2026Title" : RESULT "Version PC Windows 2026"
	CASE "pc2026Text" : RESULT "Installation complète GSMAG 2026 pour postes Windows."
	CASE "aboutTitle" : RESULT "Qui sommes-nous ?"
	CASE "aboutP1" : RESULT "ESSANET Maroc Sarl conçoit et déploie GSMAG, un logiciel de gestion commerciale pensé pour les réalités des entreprises locales — commerce, distribution, retail et force de vente."
	CASE "aboutP2" : RESULT "Notre mission : automatiser le stock, la facturation et les règlements pour gagner du temps et réduire les erreurs."
	CASE "youtube" : RESULT "Chaîne YouTube"
	CASE "trainingEyebrow" : RESULT "Accompagnement"
	CASE "trainingTitle" : RESULT "Stage & formation"
	CASE "trainingText" : RESULT "Montez en compétence sur GSMAG avec nos sessions de formation — prise en main, paramétrage et bonnes pratiques métier."
	CASE "askTraining" : RESULT "Demander une formation"
	CASE "contactEyebrow" : RESULT "Contact"
	CASE "contactTitle" : RESULT "Parlons de votre projet"
	CASE "contactLead" : RESULT "ESSANET Maroc Sarl — Technopark, Casablanca"
	CASE "address" : RESULT "Adresse"
	CASE "addressText" : RESULT "465, Technopark" + RC + "Route Noucer — Casablanca"
	CASE "email" : RESULT "Email"
	CASE "phone" : RESULT "Téléphone"
	CASE "alreadyClient" : RESULT "Déjà client ?"
	CASE "secureSpace" : RESULT "Accédez à votre espace sécurisé."
	CASE "login" : RESULT "Se connecter"
	OTHER CASE
		RESULT sCle
END

// ------------------------------------------------------------
PROCEDURE TraduireEN(sCle is string) : string
// ------------------------------------------------------------
SWITCH sCle
	CASE "navVersions" : RESULT "Versions"
	CASE "navFunctions" : RESULT "Features"
	CASE "navDownloads" : RESULT "Downloads"
	CASE "navTraining" : RESULT "Training"
	CASE "navContact" : RESULT "Contact"
	CASE "clientSpace" : RESULT "Client area"
	CASE "download" : RESULT "Download"
	CASE "heroTitle" : RESULT "Business management that keeps up with you"
	CASE "heroLead" : RESULT "Stock, invoicing, customers, cash register — a complete solution for Moroccan businesses, from single workstation to multi-user setups."
	CASE "tryDemo" : RESULT "Try the demo"
	CASE "seeVersions" : RESULT "See versions"
	CASE "versionsEyebrow" : RESULT "Configurations"
	CASE "versionsTitle" : RESULT "Four versions, the same power"
	CASE "versionsLead" : RESULT "Choose the edition that fits your organization and hardware."
	CASE "monoTitle" : RESULT "Mono Version"
	CASE "monoText" : RESULT "Ideal for a single workstation: simple and efficient stock, sales and cash management."
	CASE "networkTitle" : RESULT "Network Version"
	CASE "networkText" : RESULT "Share data across multiple workstations and coordinate your teams in real time."
	CASE "serverTitle" : RESULT "Server Version"
	CASE "serverText" : RESULT "Simultaneous multi-user access with SQL client/server database for demanding structures."
	CASE "androidTitle" : RESULT "Android Version"
	CASE "androidText" : RESULT "Touch interface for tablets — fashion, retail, sales force and field tracking."
	CASE "featuresEyebrow" : RESULT "Features"
	CASE "featuresTitle" : RESULT "From quote to invoice, everything is covered"
	CASE "featuresLead" : RESULT "GSMAG supports the full commercial chain with key indicators and dashboards."
	CASE "f1Title" : RESULT "Customers & suppliers"
	CASE "f1Text" : RESULT "Detailed records, history, payment tracking and reminders."
	CASE "f2Title" : RESULT "Commercial documents"
	CASE "f2Text" : RESULT "Quotes, purchase orders, delivery notes, invoices and credit notes."
	CASE "f3Title" : RESULT "Stock & products"
	CASE "f3Text" : RESULT "Categories, families, weighted average cost, prices, margins — real-time tracking."
	CASE "f4Title" : RESULT "Cash & payments"
	CASE "f4Text" : RESULT "Customer and supplier payments, daily cash register tracking."
	CASE "f5Title" : RESULT "Statistics"
	CASE "f5Text" : RESULT "Dashboards and indicators to steer your business."
	CASE "f6Title" : RESULT "Multi-company"
	CASE "f6Text" : RESULT "Unlimited number of companies in one installation."
	CASE "downloadsEyebrow" : RESULT "Downloads"
	CASE "downloadsTitle" : RESULT "Install GSMAG 2026"
	CASE "downloadsLead" : RESULT "Demos, Windows versions, tablet packs and ready-to-use Excel templates."
	CASE "newTag" : RESULT "New"
	CASE "pc2026Title" : RESULT "PC Windows Version 2026"
	CASE "pc2026Text" : RESULT "Full GSMAG 2026 installation for Windows PCs."
	CASE "aboutTitle" : RESULT "Who we are"
	CASE "aboutP1" : RESULT "ESSANET Morocco Sarl designs and deploys GSMAG, a business management software built for local companies — trade, distribution, retail and sales force."
	CASE "aboutP2" : RESULT "Our mission: automate stock, invoicing and payments to save time and reduce errors."
	CASE "youtube" : RESULT "YouTube channel"
	CASE "trainingEyebrow" : RESULT "Support"
	CASE "trainingTitle" : RESULT "Internship & training"
	CASE "trainingText" : RESULT "Build your GSMAG skills with our training sessions — onboarding, setup and best practices."
	CASE "askTraining" : RESULT "Request training"
	CASE "contactEyebrow" : RESULT "Contact"
	CASE "contactTitle" : RESULT "Let's talk about your project"
	CASE "contactLead" : RESULT "ESSANET Morocco Sarl — Technopark, Casablanca"
	CASE "address" : RESULT "Address"
	CASE "addressText" : RESULT "465, Technopark" + RC + "Route Noucer — Casablanca"
	CASE "email" : RESULT "Email"
	CASE "phone" : RESULT "Phone"
	CASE "alreadyClient" : RESULT "Already a client?"
	CASE "secureSpace" : RESULT "Access your secure area."
	CASE "login" : RESULT "Sign in"
	OTHER CASE
		RESULT TraduireFR(sCle)
END

// ------------------------------------------------------------
PROCEDURE TraduireAR(sCle is string) : string
// ------------------------------------------------------------
SWITCH sCle
	CASE "navVersions" : RESULT "الإصدارات"
	CASE "navFunctions" : RESULT "الوظائف"
	CASE "navDownloads" : RESULT "التحميلات"
	CASE "navTraining" : RESULT "التكوين"
	CASE "navContact" : RESULT "اتصل بنا"
	CASE "clientSpace" : RESULT "فضاء الزبون"
	CASE "download" : RESULT "تحميل"
	CASE "heroTitle" : RESULT "تسيير تجاري يواكب وتيرة عملكم"
	CASE "heroLead" : RESULT "المخزون، الفوترة، الزبناء، الصندوق — حل متكامل للمقاولات المغربية، من محطة واحدة إلى تعدد المستخدمين."
	CASE "tryDemo" : RESULT "جرّب النسخة التجريبية"
	CASE "seeVersions" : RESULT "عرض الإصدارات"
	CASE "versionsEyebrow" : RESULT "التكوينات"
	CASE "versionsTitle" : RESULT "أربعة إصدارات، نفس القوة"
	CASE "versionsLead" : RESULT "اختَر الإصدار المناسب لتنظيمكم ومعداتكم."
	CASE "monoTitle" : RESULT "إصدار Mono"
	CASE "monoText" : RESULT "مثالي لمحطة واحدة: تسيير بسيط وفعّال للمخزون والمبيعات والصندوق."
	CASE "networkTitle" : RESULT "إصدار الشبكة"
	CASE "networkText" : RESULT "شاركوا البيانات بين عدة محطات ونسّقوا فرقكم في الوقت الحقيقي."
	CASE "serverTitle" : RESULT "إصدار الخادم"
	CASE "serverText" : RESULT "وصول متزامن لعدة مستخدمين مع قاعدة بيانات SQL خادم/عميل للبنيات المتطلبة."
	CASE "androidTitle" : RESULT "إصدار أندرويد"
	CASE "androidText" : RESULT "واجهة لمسية للوحات — الموضة، التجزئة، قوة البيع والمتابعة الميدانية."
	CASE "featuresEyebrow" : RESULT "الوظائف"
	CASE "featuresTitle" : RESULT "من العرض إلى الفاتورة، كل شيء مغطى"
	CASE "featuresLead" : RESULT "GSMAG يغطي السلسلة التجارية كاملة مع مؤشرات ولوحات قيادة."
	CASE "f1Title" : RESULT "الزبناء والموردون"
	CASE "f1Text" : RESULT "بطاقات مفصلة، سجل، تتبع المدفوعات والتذكيرات."
	CASE "f2Title" : RESULT "الوثائق التجارية"
	CASE "f2Text" : RESULT "عروض أسعار، أوامر طلب، سندات تسليم، فواتير وإشعارات دائن."
	CASE "f3Title" : RESULT "المخزون والمنتجات"
	CASE "f3Text" : RESULT "فئات، عائلات، التكلفة المتوسطة المرجحة، الأسعار، الهوامش — تتبع فوري."
	CASE "f4Title" : RESULT "الصندوق والمدفوعات"
	CASE "f4Text" : RESULT "تحصيل الزبناء ومدفوعات الموردين، متابعة الصندوق يومياً."
	CASE "f5Title" : RESULT "الإحصائيات"
	CASE "f5Text" : RESULT "لوحات قيادة ومؤشرات لتوجيه نشاطكم."
	CASE "f6Title" : RESULT "تعدد الشركات"
	CASE "f6Text" : RESULT "عدد غير محدود من الشركات في نفس التثبيت."
	CASE "downloadsEyebrow" : RESULT "التحميلات"
	CASE "downloadsTitle" : RESULT "ثبّتوا GSMAG 2026"
	CASE "downloadsLead" : RESULT "نسخ تجريبية، إصدارات ويندوز، حزم اللوحات ونماذج Excel جاهزة."
	CASE "newTag" : RESULT "جديد"
	CASE "pc2026Title" : RESULT "إصدار حاسوب ويندوز 2026"
	CASE "pc2026Text" : RESULT "تثبيت كامل لـ GSMAG 2026 على أجهزة ويندوز."
	CASE "aboutTitle" : RESULT "من نحن؟"
	CASE "aboutP1" : RESULT "ESSANET المغرب ش.م.م. تصمم وتنشر GSMAG، برنامج تسيير تجاري مهيأ لواقع المقاولات المحلية."
	CASE "aboutP2" : RESULT "مهمتنا: أتمتة المخزون والفوترة والمدفوعات لتوفير الوقت وتقليل الأخطاء."
	CASE "youtube" : RESULT "قناة يوتيوب"
	CASE "trainingEyebrow" : RESULT "المواكبة"
	CASE "trainingTitle" : RESULT "تدريب وتكوين"
	CASE "trainingText" : RESULT "طوّروا مهاراتكم على GSMAG عبر جلسات التكوين."
	CASE "askTraining" : RESULT "طلب تكوين"
	CASE "contactEyebrow" : RESULT "اتصل بنا"
	CASE "contactTitle" : RESULT "لنتحدث عن مشروعكم"
	CASE "contactLead" : RESULT "ESSANET المغرب — تكنوبارك، الدار البيضاء"
	CASE "address" : RESULT "العنوان"
	CASE "addressText" : RESULT "465، تكنوبارك" + RC + "طريق نوصر — الدار البيضاء"
	CASE "email" : RESULT "البريد الإلكتروني"
	CASE "phone" : RESULT "الهاتف"
	CASE "alreadyClient" : RESULT "زبون بالفعل؟"
	CASE "secureSpace" : RESULT "ادخلوا إلى فضائكم الآمن."
	CASE "login" : RESULT "تسجيل الدخول"
	OTHER CASE
		RESULT TraduireFR(sCle)
END
