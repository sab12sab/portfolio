(() => {
  const SESSION_KEY = "gsmag-academy-session";
  const PROGRESS_KEY = "gsmag-academy-progress";
  const THEME_KEY = "gsmag-academy-theme";
  const LANG_KEY = "gsmag-lang";
  const CURRICULUM_KEY = "gsmag-academy-curriculum";
  const USERS_KEY = "gsmag-academy-users";
  const VIEW_MODE_KEY = "gsmag-academy-view-mode";
  const CERTS_KEY = "gsmag-academy-certificates";
  const USER_PATCHES_KEY = "gsmag-academy-user-patches";
  const USER_DELETED_KEY = "gsmag-academy-user-deleted";
  const NOTIFS_KEY = "gsmag-academy-notifications";

  const ACADEMY_I18N = {
    fr: {
      backSite: "Retour au site",
      back: "Retour",
      login: "Se connecter",
      start: "Commencer",
      register: "Créer un compte",
      heroTitle: "ESSANET Academy",
      heroSub: "La formation GSMAG pas à pas",
      heroLead:
        "Chapitres, cours vidéo, étapes pratiques et quiz. Suivez votre progression module par module.",
      programTitle: "Programme de formation",
      programLead: "Cours introductif ESSANET Technologie, puis 5 modules GSMAG — étapes, captures et quiz.",
      ch1: "I. Gestion des fichiers de base",
      ch1Items: "Articles · Clients · Fournisseurs",
      ch2: "II. Gestion des stocks",
      ch2Items: "Entrées · Sorties · Transferts · Inventaire",
      ch3: "III. Gestion des ventes",
      ch3Items: "Commandes · BL · Factures · Règlements",
      ch4: "IV. Gestion des achats",
      ch4Items: "Commandes · Réceptions · Factures fournisseurs",
      ch5: "V. Caisse",
      ch5Items: "Encaissements · Décaissements · Suivi",
      themeLight: "Clair",
      themeDark: "Sombre",
      themeToLight: "Passer en mode clair",
      themeToDark: "Passer en mode sombre",
      settings: "Paramètres",
      profile: "Profil",
      logout: "Déconnexion",
      adminFollow: "Suivi & admin",
      appearance: "Apparence",
      changePhoto: "Changer la photo",
      removePhoto: "Retirer la photo",
      navHome: "Accueil",
      navPath: "Mon parcours",
      navCourses: "Mes cours",
      navCalendar: "Calendrier",
      navCerts: "Certificats",
      navUsers: "Utilisateurs",
      navChat: "Chatbox",
      soon: "Bientôt",
      space: "Espace",
      roleLearner: "Apprenant",
      roleTrainer: "Formateur",
      roleAdmin: "Administrateur",
      statusSoon: "À venir",
      statusLocked: "Verrouillé",
      statusDone: "Terminé",
      statusProgress: "En cours",
      statusTodo: "À commencer",
      hello: "Bonjour,",
      homeHint: "Votre formation GSMAG en un clin d’œil.",
      resume: "Reprendre →",
      review: "Revoir →",
      recentCerts: "Certificats récents",
      seeAll: "Tout voir",
      myCourses: "Mes cours",
      notifications: "Notifications",
      markAllRead: "Tout lu",
      noNotif: "Aucune notification.",
      searchModule: "Rechercher un module…",
      searchUser: "Rechercher nom, e-mail…",
      yourProgress: "Votre progression",
      continue: "Continuer",
      upcoming: "À venir",
      welcome: "Bienvenue !",
      welcomeText: "Commencez le module ESSANET Technologie.",
      goodPace: "Bon rythme",
      goodPaceText: "Chaque quiz validé débloque la suite du parcours.",
      bravo: "Bravo, continuez !",
      bravoText: "Vous avez déjà parcouru plus de la moitié du programme.",
      pathDone: "Parcours terminé !",
      pathDoneText: "Félicitations — vous maîtrisez le programme GSMAG.",
      statDone: "Terminés",
      statProgress: "En cours",
      statTodo: "À commencer",
      statLocked: "Verrouillés",
      statGlobal: "Avancement global",
      modules: "Modules",
      certificates: "Certificats",
      progress: "Progression",
      steps: "Étapes",
      nextStep: "Prochaine étape",
      noModule: "Aucun module disponible.",
      openChapter: "Rouvrir le chapitre",
      continueNow: "Continuer maintenant",
      noCertYet: "Aucun certificat pour l’instant — terminez un module pour en obtenir un.",
      myCerts: "Mes certificats",
      myCertsLead: "Un certificat nominatif est délivré à chaque module terminé — avec votre prénom et nom.",
      noCertTitle: "Pas encore de certificat",
      noCertLead: "Terminez tous les chapitres d’un module (quiz inclus) pour recevoir un certificat à votre nom.",
      seePath: "Voir mon parcours",
      viewCert: "Voir le certificat",
      usersManage: "Gestion des utilisateurs",
      usersLead: "Ajouter, modifier ou supprimer des comptes, et suivre l’avancement de chaque apprenant.",
      addUser: "+ Utilisateur",
      allRoles: "Tous les rôles",
      userCol: "Utilisateur",
      roleCol: "Rôle",
      progressCol: "Progression",
      certsCol: "Certificats",
      tracking: "Suivi",
      close: "Fermer",
      edit: "Modifier",
      del: "Suppr.",
      save: "Enregistrer",
      cancel: "Annuler",
      print: "Imprimer",
      firstName: "Prénom",
      lastName: "Nom",
      email: "E-mail",
      password: "Mot de passe",
      role: "Rôle",
      passwordHint: "Laissez vide pour ne pas changer le mot de passe.",
      newUser: "Nouvel utilisateur",
      editUser: "Modifier l’utilisateur",
      certTitle: "Certificat de réussite",
      certAwarded: "est décerné à",
      certFor: "pour avoir terminé avec succès le module",
      certBrand: "ESSANET Academy",
      certGsmag: "Formation GSMAG",
      chatTitle: "Chatbox",
      chatSoon: "Posez une question sur vos cours — le tuteur répond à partir des chapitres et sous-chapitres.",
      chatLead: "Tuteur IA ancré sur le contenu GSMAG (cours, chapitres, sous-chapitres).",
      chatPlaceholder: "Ex. : Comment créer un fournisseur dans GSMAG ?",
      chatSend: "Envoyer",
      chatYou: "Vous",
      chatBot: "Tuteur ESSANET",
      chatWelcome:
        "Bonjour ! Je m’appuie sur le contenu de vos cours (chapitres et sous-chapitres). Posez une question sur la formation GSMAG.",
      chatThinking: "Analyse des cours…",
      chatNoMatch:
        "Je n’ai pas trouvé d’extrait assez proche dans les cours disponibles. Reformulez (ex. « fichier fournisseurs », « articles », « clients ») ou ouvrez le module concerné.",
      chatAnswerIntro: "Voici ce que contiennent vos cours à ce sujet :",
      chatAnswerOutro: "Ouvrez la source ci-dessous pour voir le chapitre complet.",
      chatSources: "Sources",
      chatSettings: "IA",
      chatProvider: "Fournisseur LLM",
      chatProviderLocal: "Local (sans API)",
      chatApiKey: "Clé API",
      chatApiHint: "",
      chatApiWhere: "",
      chatAdminHint: "Réservé admin. Préférez coller la clé dans formation/chat.js (CHAT_LLM_CONFIG).",
      chatNew: "Nouvelle discussion",
      chatMic: "Parler",
      chatMicListening: "Écoute… (recliquez pour arrêter)",
      chatMicUnsupported: "La dictée vocale n’est pas supportée sur ce navigateur. Utilisez Chrome ou Edge.",
      chatMicError: "Impossible d’accéder au micro. Autorisez le microphone pour ce site.",
      chatModeLocal: "Mode local activé — réponses basées sur l’analyse des cours.",
      chatModeLlm: "Mode LLM activé — les réponses utiliseront le modèle avec le contexte des cours.",
      chatLlmError: "Erreur LLM — bascule sur l’analyse locale des cours.",
      chatFallback: "Le LLM n’a pas répondu ; voici la réponse à partir des cours :",
      chatSuggestPrefix: "Que dit le cours sur",
      loginTitle: "Se connecter",
      loginSub: "Espace client & formateur",
      loginSubmit: "Entrer",
      noAccount: "Pas encore de compte ?",
      demoAccounts: "Comptes démo",
      registerTitle: "Créer un compte",
      registerSub: "Compte client pour suivre la formation GSMAG",
      confirmPassword: "Confirmer le mot de passe",
      createAccount: "Créer mon compte",
      hasAccount: "Déjà inscrit ?",
      nextChapter: "Passer au chapitre suivant →",
      nextCourse: "Passer au cours suivant →",
      backToCourse: "Retour au cours",
      backToLaunchpad: "Retour au launchpad →",
      chapters: "chapitres",
      duration: "durée estimée",
      minScore: "note mini quiz",
      path: "Parcours",
      video: "Vidéo",
      subchapters: "Sous-chapitres",
      finalQuiz: "Quiz final",
      open: "Ouvrir",
      startBtn: "Commencer",
      continueBtn: "Continuer",
      reviewBtn: "Revoir",
      lockedBtn: "Verrouillé",
      justNow: "À l’instant",
      minAgo: " min",
      hourAgo: " h",
      adminMode: "Admin",
      allUpToDate: "Tout est à jour — bravo.",
      trainerIdleTitle: "Formateur inactif",
      trainerIdleBody: " n’a pas encore commencé sa formation.",
      trainerIdleAlertTitle: "Alerte formateurs",
      trainerIdleAlertLead: "Ces formateurs n’ont pas encore démarré leur formation :",
      trainerIdleBadge: "Pas commencé",
      trainerIdleSeeUsers: "Voir les utilisateurs",
    },
    en: {
      backSite: "Back to site",
      back: "Back",
      login: "Sign in",
      start: "Get started",
      register: "Create an account",
      heroTitle: "ESSANET Academy",
      heroSub: "GSMAG training, step by step",
      heroLead:
        "Chapters, video lessons, practical steps and quizzes. Track your progress module by module.",
      programTitle: "Training program",
      programLead: "Introductory ESSANET Technologie course, then 5 GSMAG modules — steps, screenshots and quizzes.",
      ch1: "I. Basic file management",
      ch1Items: "Items · Customers · Suppliers",
      ch2: "II. Stock management",
      ch2Items: "Entries · Exits · Transfers · Inventory",
      ch3: "III. Sales management",
      ch3Items: "Orders · Delivery notes · Invoices · Payments",
      ch4: "IV. Purchasing management",
      ch4Items: "Supplier orders · Receptions · Supplier invoices",
      ch5: "V. Cash desk",
      ch5Items: "Receipts · Disbursements · Cash tracking",
      themeLight: "Light",
      themeDark: "Dark",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      settings: "Settings",
      profile: "Profile",
      logout: "Log out",
      adminFollow: "Tracking & admin",
      appearance: "Appearance",
      changePhoto: "Change photo",
      removePhoto: "Remove photo",
      navHome: "Home",
      navPath: "My path",
      navCourses: "My courses",
      navCalendar: "Calendar",
      navCerts: "Certificates",
      navUsers: "Users",
      navChat: "Chatbox",
      soon: "Soon",
      space: "Workspace",
      roleLearner: "Learner",
      roleTrainer: "Trainer",
      roleAdmin: "Administrator",
      statusSoon: "Coming soon",
      statusLocked: "Locked",
      statusDone: "Completed",
      statusProgress: "In progress",
      statusTodo: "To start",
      hello: "Hello,",
      homeHint: "Your GSMAG training at a glance.",
      resume: "Resume →",
      review: "Review →",
      recentCerts: "Recent certificates",
      seeAll: "See all",
      myCourses: "My courses",
      notifications: "Notifications",
      markAllRead: "Mark all read",
      noNotif: "No notifications.",
      searchModule: "Search a module…",
      searchUser: "Search name, email…",
      yourProgress: "Your progress",
      continue: "Continue",
      upcoming: "Up next",
      welcome: "Welcome!",
      welcomeText: "Start with the ESSANET Technologie module.",
      goodPace: "Good pace",
      goodPaceText: "Each passed quiz unlocks the next step.",
      bravo: "Well done, keep going!",
      bravoText: "You have already completed more than half of the program.",
      pathDone: "Path completed!",
      pathDoneText: "Congratulations — you master the GSMAG program.",
      statDone: "Completed",
      statProgress: "In progress",
      statTodo: "To start",
      statLocked: "Locked",
      statGlobal: "Overall progress",
      modules: "Modules",
      certificates: "Certificates",
      progress: "Progress",
      steps: "Steps",
      nextStep: "Next step",
      noModule: "No module available.",
      openChapter: "Reopen chapter",
      continueNow: "Continue now",
      noCertYet: "No certificate yet — finish a module to earn one.",
      myCerts: "My certificates",
      myCertsLead: "A named certificate is issued for each completed module — with your first and last name.",
      noCertTitle: "No certificate yet",
      noCertLead: "Complete every chapter in a module (including quizzes) to receive your certificate.",
      seePath: "View my path",
      viewCert: "View certificate",
      usersManage: "User management",
      usersLead: "Add, edit or delete accounts, and track each learner’s progress.",
      addUser: "+ User",
      allRoles: "All roles",
      userCol: "User",
      roleCol: "Role",
      progressCol: "Progress",
      certsCol: "Certificates",
      tracking: "Tracking",
      close: "Close",
      edit: "Edit",
      del: "Del.",
      save: "Save",
      cancel: "Cancel",
      print: "Print",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      password: "Password",
      role: "Role",
      passwordHint: "Leave blank to keep the current password.",
      newUser: "New user",
      editUser: "Edit user",
      certTitle: "Certificate of completion",
      certAwarded: "is awarded to",
      certFor: "for successfully completing the module",
      certBrand: "ESSANET Academy",
      certGsmag: "GSMAG Training",
      chatTitle: "Chatbox",
      chatSoon: "Ask a question about your courses — the tutor answers from chapters and subchapters.",
      chatLead: "AI tutor grounded in GSMAG content (courses, chapters, subchapters).",
      chatPlaceholder: "E.g. How do I create a supplier in GSMAG?",
      chatSend: "Send",
      chatYou: "You",
      chatBot: "ESSANET Tutor",
      chatWelcome:
        "Hello! I use your course content (chapters and subchapters). Ask anything about GSMAG training.",
      chatThinking: "Analyzing courses…",
      chatNoMatch:
        "I could not find a close enough excerpt in the available courses. Rephrase (e.g. “suppliers file”, “items”, “customers”) or open the related module.",
      chatAnswerIntro: "Here is what your courses say on this topic:",
      chatAnswerOutro: "Open a source below to view the full chapter.",
      chatSources: "Sources",
      chatSettings: "AI",
      chatProvider: "LLM provider",
      chatProviderLocal: "Local (no API)",
      chatApiKey: "API key",
      chatApiHint: "",
      chatApiWhere: "",
      chatAdminHint: "Admin only. Prefer pasting the key in formation/chat.js (CHAT_LLM_CONFIG).",
      chatNew: "New chat",
      chatMic: "Speak",
      chatMicListening: "Listening… (click again to stop)",
      chatMicUnsupported: "Voice input is not supported in this browser. Use Chrome or Edge.",
      chatMicError: "Cannot access the microphone. Allow mic permission for this site.",
      chatModeLocal: "Local mode on — answers based on course analysis.",
      chatModeLlm: "LLM mode on — answers will use the model with course context.",
      chatLlmError: "LLM error — falling back to local course analysis.",
      chatFallback: "The LLM did not respond; here is the answer from the courses:",
      chatSuggestPrefix: "What does the course say about",
      loginTitle: "Sign in",
      loginSub: "Client & trainer space",
      loginSubmit: "Enter",
      noAccount: "No account yet?",
      demoAccounts: "Demo accounts",
      registerTitle: "Create an account",
      registerSub: "Client account to follow the GSMAG training",
      confirmPassword: "Confirm password",
      createAccount: "Create my account",
      hasAccount: "Already registered?",
      nextChapter: "Go to next chapter →",
      nextCourse: "Go to next course →",
      backToCourse: "Back to course",
      backToLaunchpad: "Back to launchpad →",
      chapters: "chapters",
      duration: "estimated duration",
      minScore: "min quiz score",
      path: "Path",
      video: "Video",
      subchapters: "Sub-chapters",
      finalQuiz: "Final quiz",
      open: "Open",
      startBtn: "Start",
      continueBtn: "Continue",
      reviewBtn: "Review",
      lockedBtn: "Locked",
      justNow: "Just now",
      minAgo: " min",
      hourAgo: " h",
      adminMode: "Admin",
      trainerIdleTitle: "Inactive trainer",
      trainerIdleBody: " has not started training yet.",
      trainerIdleAlertTitle: "Trainer alert",
      trainerIdleAlertLead: "These trainers have not started their training yet:",
      trainerIdleBadge: "Not started",
      trainerIdleSeeUsers: "View users",
      allUpToDate: "All caught up — well done.",
      noUsers: "No users.",
    },
    ar: {
      backSite: "العودة إلى الموقع",
      back: "رجوع",
      login: "تسجيل الدخول",
      start: "ابدأ",
      register: "إنشاء حساب",
      heroTitle: "ESSANET Academy",
      heroSub: "تكوين GSMAG خطوة بخطوة",
      heroLead: "فصول، دروس فيديو، خطوات عملية واختبارات. تابع تقدمك وحدة بوحدة.",
      programTitle: "برنامج التكوين",
      programLead: "دورة ESSANET Technologie التمهيدية ثم 5 وحدات GSMAG — خطوات ولقطات واختبارات.",
      ch1: "I. تدبير الملفات الأساسية",
      ch1Items: "المقالات · الزبناء · الموردون",
      ch2: "II. تدبير المخزون",
      ch2Items: "المداخيل · المخارج · التحويلات · الجرد",
      ch3: "III. تدبير المبيعات",
      ch3Items: "الطلبات · سندات التسليم · الفواتير · التسويات",
      ch4: "IV. تدبير المشتريات",
      ch4Items: "طلبات الموردين · الاستلامات · فواتير الموردين",
      ch5: "V. الصندوق",
      ch5Items: "المقبوضات · المدفوعات · متابعة الصندوق",
      themeLight: "فاتح",
      themeDark: "داكن",
      themeToLight: "الوضع الفاتح",
      themeToDark: "الوضع الداكن",
      settings: "الإعدادات",
      profile: "الملف الشخصي",
      logout: "تسجيل الخروج",
      adminFollow: "المتابعة والإدارة",
      appearance: "المظهر",
      changePhoto: "تغيير الصورة",
      removePhoto: "إزالة الصورة",
      navHome: "الرئيسية",
      navPath: "مساري",
      navCourses: "دوراتي",
      navCalendar: "التقويم",
      navCerts: "الشهادات",
      navUsers: "المستخدمون",
      navChat: "الدردشة",
      soon: "قريباً",
      space: "المساحة",
      roleLearner: "متعلم",
      roleTrainer: "مكون",
      roleAdmin: "مسؤول",
      statusSoon: "قريباً",
      statusLocked: "مقفل",
      statusDone: "مكتمل",
      statusProgress: "جارٍ",
      statusTodo: "للبدء",
      hello: "مرحباً،",
      homeHint: "تكوين GSMAG في لمحة.",
      resume: "متابعة →",
      review: "مراجعة →",
      recentCerts: "أحدث الشهادات",
      seeAll: "عرض الكل",
      myCourses: "دوراتي",
      notifications: "الإشعارات",
      markAllRead: "تعليم الكل كمقروء",
      noNotif: "لا توجد إشعارات.",
      searchModule: "البحث عن وحدة…",
      searchUser: "بحث بالاسم أو البريد…",
      yourProgress: "تقدمك",
      continue: "متابعة",
      upcoming: "التالي",
      welcome: "مرحباً!",
      welcomeText: "ابدأ بوحدة ESSANET Technologie.",
      goodPace: "وتيرة جيدة",
      goodPaceText: "كل اختبار ناجح يفتح الخطوة التالية.",
      bravo: "أحسنت، واصل!",
      bravoText: "لقد أنجزت أكثر من نصف البرنامج.",
      pathDone: "اكتمل المسار!",
      pathDoneText: "تهانينا — أنت تتقن برنامج GSMAG.",
      statDone: "مكتملة",
      statProgress: "جارٍ",
      statTodo: "للبدء",
      statLocked: "مقفلة",
      statGlobal: "التقدم الإجمالي",
      modules: "الوحدات",
      certificates: "الشهادات",
      progress: "التقدم",
      steps: "الخطوات",
      nextStep: "الخطوة التالية",
      noModule: "لا توجد وحدة متاحة.",
      openChapter: "إعادة فتح الفصل",
      continueNow: "المتابعة الآن",
      noCertYet: "لا شهادة بعد — أنهِ وحدة للحصول على واحدة.",
      myCerts: "شهاداتي",
      myCertsLead: "تُسلَّم شهادة باسمك عند إنهاء كل وحدة.",
      noCertTitle: "لا شهادة بعد",
      noCertLead: "أكمل كل فصول الوحدة (بما فيها الاختبارات) للحصول على شهادتك.",
      seePath: "عرض مساري",
      viewCert: "عرض الشهادة",
      usersManage: "إدارة المستخدمين",
      usersLead: "إضافة أو تعديل أو حذف الحسابات ومتابعة تقدم كل متعلم.",
      addUser: "+ مستخدم",
      allRoles: "كل الأدوار",
      userCol: "المستخدم",
      roleCol: "الدور",
      progressCol: "التقدم",
      certsCol: "الشهادات",
      tracking: "المتابعة",
      close: "إغلاق",
      edit: "تعديل",
      del: "حذف",
      save: "حفظ",
      cancel: "إلغاء",
      print: "طباعة",
      firstName: "الاسم الشخصي",
      lastName: "النسب",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      role: "الدور",
      passwordHint: "اتركه فارغاً للإبقاء على كلمة المرور الحالية.",
      newUser: "مستخدم جديد",
      editUser: "تعديل المستخدم",
      certTitle: "شهادة إتمام",
      certAwarded: "تُمنح لـ",
      certFor: "لإتمامه بنجاح وحدة",
      certBrand: "ESSANET Academy",
      certGsmag: "تكوين GSMAG",
      chatTitle: "الدردشة",
      chatSoon: "اطرح سؤالاً عن دروسك — يجيب المساعد من الفصول والفصول الفرعية.",
      chatLead: "مساعد ذكي مبني على محتوى GSMAG (الدورات والفصول والفصول الفرعية).",
      chatPlaceholder: "مثال: كيف أنشئ مورّداً في GSMAG؟",
      chatSend: "إرسال",
      chatYou: "أنت",
      chatBot: "مساعد ESSANET",
      chatWelcome:
        "مرحباً! أعتمد على محتوى دوراتك (الفصول والفصول الفرعية). اسأل عن تكوين GSMAG.",
      chatThinking: "جارٍ تحليل الدروس…",
      chatNoMatch:
        "لم أجد مقطعاً قريباً بما يكفي في الدروس المتاحة. أعد صياغة السؤال أو افتح الوحدة المعنية.",
      chatAnswerIntro: "إليك ما تحتويه دروسك حول هذا الموضوع:",
      chatAnswerOutro: "افتح المصدر أدناه لرؤية الفصل كاملاً.",
      chatSources: "المصادر",
      chatSettings: "AI",
      chatProvider: "مزود النموذج",
      chatProviderLocal: "محلي (بدون API)",
      chatApiKey: "مفتاح API",
      chatApiHint: "",
      chatApiWhere: "",
      chatAdminHint: "للمشرف فقط. يُفضّل وضع المفتاح في formation/chat.js (CHAT_LLM_CONFIG).",
      chatNew: "محادثة جديدة",
      chatMic: "تكلم",
      chatMicListening: "يستمع… (انقر مجدداً للإيقاف)",
      chatMicUnsupported: "الإدخال الصوتي غير مدعوم. استخدم Chrome أو Edge.",
      chatMicError: "تعذر الوصول إلى الميكروفون. اسمح بالميكروفون لهذا الموقع.",
      chatModeLocal: "الوضع المحلي مفعّل — الإجابات من تحليل الدروس.",
      chatModeLlm: "وضع LLM مفعّل — ستستخدم الإجابات النموذج مع سياق الدروس.",
      chatLlmError: "خطأ في النموذج — الرجوع إلى التحليل المحلي.",
      chatFallback: "لم يجب النموذج؛ هذه الإجابة من الدروس:",
      chatSuggestPrefix: "ماذا يقول الدرس عن",
      loginTitle: "تسجيل الدخول",
      loginSub: "فضاء الزبناء والمكونين",
      loginSubmit: "دخول",
      noAccount: "ليس لديك حساب؟",
      demoAccounts: "حسابات تجريبية",
      registerTitle: "إنشاء حساب",
      registerSub: "حساب زبون لمتابعة تكوين GSMAG",
      confirmPassword: "تأكيد كلمة المرور",
      createAccount: "إنشاء حسابي",
      hasAccount: "لديك حساب؟",
      nextChapter: "الفصل التالي →",
      nextCourse: "الدورة التالية →",
      backToCourse: "العودة إلى الدورة",
      backToLaunchpad: "العودة إلى اللوحة →",
      chapters: "فصول",
      duration: "المدة التقديرية",
      minScore: "الحد الأدنى للاختبار",
      path: "المسار",
      video: "فيديو",
      subchapters: "الفصول الفرعية",
      finalQuiz: "الاختبار النهائي",
      open: "فتح",
      startBtn: "ابدأ",
      continueBtn: "متابعة",
      reviewBtn: "مراجعة",
      lockedBtn: "مقفل",
      justNow: "الآن",
      minAgo: " د",
      hourAgo: " س",
      adminMode: "مسؤول",
      allUpToDate: "كل شيء محدّث — أحسنت.",
      noUsers: "لا مستخدمين.",
      trainerIdleTitle: "مكون غير نشط",
      trainerIdleBody: " لم يبدأ تكوينه بعد.",
      trainerIdleAlertTitle: "تنبيه المكونين",
      trainerIdleAlertLead: "هؤلاء المكونون لم يبدأوا تكوينهم بعد:",
      trainerIdleBadge: "لم يبدأ",
      trainerIdleSeeUsers: "عرض المستخدمين",
    },
  };

  const TILE_COLORS = ["#e03131", "#2ec4b6", "#f0c75e", "#4c6ef5", "#ae3ec9", "#fd7e14"];

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  const Academy = {
    /* ——— i18n / theme chrome ——— */
    getLang() {
      try {
        const l = localStorage.getItem(LANG_KEY);
        return ACADEMY_I18N[l] ? l : "fr";
      } catch {
        return "fr";
      }
    },
    t(key) {
      const dict = ACADEMY_I18N[this.getLang()] || ACADEMY_I18N.fr;
      return dict[key] != null ? dict[key] : key;
    },
    applyLang(lang) {
      const next = ACADEMY_I18N[lang] ? lang : "fr";
      const dict = ACADEMY_I18N[next];
      document.documentElement.lang = next;
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
      document.body.classList.toggle("is-ar", next === "ar");
      try {
        localStorage.setItem(LANG_KEY, next);
      } catch (_) {}
      document.querySelectorAll("[data-ac-i18n]").forEach((el) => {
        const key = el.getAttribute("data-ac-i18n");
        if (dict[key] != null) el.textContent = dict[key];
      });
      document.querySelectorAll("[data-ac-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-ac-i18n-placeholder");
        if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
      });
      document.querySelectorAll("[data-ac-i18n-title]").forEach((el) => {
        const key = el.getAttribute("data-ac-i18n-title");
        if (dict[key] != null) el.setAttribute("title", dict[key]);
      });
      document.querySelectorAll(".lang-btn").forEach((btn) => {
        const active = btn.getAttribute("data-lang") === next;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
      const settings = document.querySelector("[data-settings-menu]");
      if (settings) settings.remove();
      const profile = document.querySelector("[data-profile-menu]");
      if (profile) profile.remove();
      this.mountSettingsMenu();
      this.mountUserMenu();
      this.applyTheme(this.getTheme());
      try {
        document.dispatchEvent(new CustomEvent("academy:lang", { detail: { lang: next } }));
      } catch (_) {}
      return next;
    },
    mountLangSwitch() {
      const nav = document.querySelector(".ac-nav");
      if (!nav || nav.querySelector(".lang-switch")) return;
      const wrap = document.createElement("div");
      wrap.className = "lang-switch";
      wrap.setAttribute("role", "group");
      wrap.setAttribute("aria-label", "Language");
      ["fr", "en", "ar"].forEach((code) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-btn";
        btn.setAttribute("data-lang", code);
        btn.textContent = code.toUpperCase();
        btn.addEventListener("click", () => this.applyLang(code));
        wrap.appendChild(btn);
      });
      nav.insertBefore(wrap, nav.firstChild);
    },
    getTheme() {
      try {
        const t = localStorage.getItem(THEME_KEY);
        return t === "light" || t === "dark" ? t : "dark";
      } catch {
        return "dark";
      }
    },
    applyTheme(theme) {
      const next = theme === "light" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (_) {}
      const isLight = next === "light";
      document.querySelectorAll("[data-theme-option]").forEach((btn) => {
        const val = btn.getAttribute("data-theme-option");
        btn.classList.toggle("is-active", val === next);
      });
      document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
        btn.setAttribute("aria-label", isLight ? this.t("themeToDark") : this.t("themeToLight"));
      });
      return next;
    },
    toggleTheme() {
      return this.applyTheme(this.getTheme() === "light" ? "dark" : "light");
    },
    closeAllMenus() {
      document.querySelectorAll(".ac-menu.is-open").forEach((m) => m.classList.remove("is-open"));
      document.querySelectorAll("[data-menu-trigger]").forEach((b) => b.setAttribute("aria-expanded", "false"));
    },
    mountSettingsMenu() {
      const nav = document.querySelector(".ac-nav");
      if (!nav || nav.querySelector("[data-settings-menu]")) return;

      const wrap = document.createElement("div");
      wrap.className = "ac-menu";
      wrap.setAttribute("data-settings-menu", "1");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ac-icon-btn";
      btn.setAttribute("data-menu-trigger", "settings");
      btn.setAttribute("aria-haspopup", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", this.t("settings"));
      btn.title = this.t("settings");
      btn.innerHTML =
        '<svg class="ac-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">' +
        '<circle cx="12" cy="12" r="3"/>' +
        '<path d="M12 1v2.5M12 20.5V23M4.2 4.2l1.8 1.8M18 18l1.8 1.8M1 12h2.5M20.5 12H23M4.2 19.8l1.8-1.8M18 6l1.8-1.8"/>' +
        "</svg>";

      const panel = document.createElement("div");
      panel.className = "ac-menu-panel";
      panel.setAttribute("role", "menu");
      panel.innerHTML =
        '<p class="ac-menu-label">' +
        this.t("appearance") +
        "</p>" +
        '<button type="button" class="ac-menu-item" data-theme-option="light" role="menuitem">' +
        '<span class="theme-icon" aria-hidden="true">☀</span><span>' +
        this.t("themeLight") +
        "</span></button>" +
        '<button type="button" class="ac-menu-item" data-theme-option="dark" role="menuitem">' +
        '<span class="theme-icon" aria-hidden="true">☾</span><span>' +
        this.t("themeDark") +
        "</span></button>";

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = !wrap.classList.contains("is-open");
        this.closeAllMenus();
        if (open) {
          wrap.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });

      panel.querySelectorAll("[data-theme-option]").forEach((opt) => {
        opt.addEventListener("click", (e) => {
          e.stopPropagation();
          this.applyTheme(opt.getAttribute("data-theme-option"));
          this.closeAllMenus();
        });
      });

      wrap.appendChild(btn);
      wrap.appendChild(panel);
      panel.addEventListener("click", (e) => e.stopPropagation());
      const lang = nav.querySelector(".lang-switch");
      if (lang) nav.insertBefore(wrap, lang.nextSibling);
      else nav.insertBefore(wrap, nav.firstChild);
      this.applyTheme(this.getTheme());
    },
    mountUserMenu() {
      const nav = document.querySelector(".ac-nav");
      const user = this.getSession();
      if (!nav || !user || nav.querySelector("[data-profile-menu]")) return;

      ["userLabel", "logoutBtn", "adminLink"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      });

      const wrap = document.createElement("div");
      wrap.className = "ac-menu";
      wrap.setAttribute("data-profile-menu", "1");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ac-avatar-btn";
      btn.id = "topAvatarBtn";
      btn.setAttribute("data-menu-trigger", "profile");
      btn.setAttribute("aria-haspopup", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", this.t("profile"));
      btn.title = this.t("profile");
      btn.innerHTML = this.avatarHTML(user).replace(
        /class="ac-avatar"/,
        'class="ac-avatar" id="topAvatar"'
      );

      const panel = document.createElement("div");
      panel.className = "ac-menu-panel ac-menu-panel--profile";
      panel.setAttribute("role", "menu");

      let html =
        '<div class="ac-profile-head">' +
        this.avatarHTML(user, "ac-avatar--lg").replace(
          /class="ac-avatar ac-avatar--lg"/,
          'class="ac-avatar ac-avatar--lg" data-profile-avatar="1"'
        ) +
        "<div>" +
        "<strong>" +
        this.userFullName(user) +
        "</strong>" +
        '<p class="muted">' +
        (user.email || "") +
        "</p>" +
        '<p class="ac-role-pill">' +
        this.roleLabel(user.role) +
        "</p>" +
        "</div></div>" +
        '<label class="ac-menu-item ac-menu-item--file" role="menuitem">' +
        '<span aria-hidden="true">🖼</span><span>' +
        this.t("changePhoto") +
        "</span>" +
        '<input type="file" accept="image/*" data-avatar-file hidden />' +
        "</label>";

      if (user.avatar) {
        html +=
          '<button type="button" class="ac-menu-item" data-avatar-clear role="menuitem">' +
          this.t("removePhoto") +
          "</button>";
      }

      html +=
        '<button type="button" class="ac-menu-item ac-menu-item--danger" data-logout role="menuitem">' +
        this.t("logout") +
        "</button>";
      panel.innerHTML = html;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = !wrap.classList.contains("is-open");
        this.closeAllMenus();
        if (open) {
          wrap.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });

      const fileInput = panel.querySelector("[data-avatar-file]");
      if (fileInput) {
        fileInput.addEventListener("change", () => {
          const file = fileInput.files && fileInput.files[0];
          if (!file) return;
          this.readImageFile(file, 400).then((dataUrl) => {
            const res = this.setUserAvatar(user.id, dataUrl);
            if (!res.ok) {
              alert(res.error || "Impossible d’enregistrer la photo.");
              return;
            }
            this.mountUserMenuRebuild();
            this.refreshAvatars(this.getSession());
          });
        });
      }
      const clearBtn = panel.querySelector("[data-avatar-clear]");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          const res = this.setUserAvatar(user.id, "");
          if (!res.ok) return;
          this.mountUserMenuRebuild();
          this.refreshAvatars(this.getSession());
        });
      }

      const logoutBtn = panel.querySelector("[data-logout]");
      if (logoutBtn) logoutBtn.addEventListener("click", () => this.logout());

      wrap.appendChild(btn);
      wrap.appendChild(panel);
      panel.addEventListener("click", (e) => e.stopPropagation());
      nav.appendChild(wrap);
    },
    mountUserMenuRebuild() {
      const nav = document.querySelector(".ac-nav");
      if (!nav) return;
      const old = nav.querySelector("[data-profile-menu]");
      if (old) old.remove();
      this.mountUserMenu();
    },
    mountChrome() {
      this.mountLangSwitch();
      this.mountSettingsMenu();
      this.mountUserMenu();
      this.applyLang(this.getLang());
      if (!window.__acMenuDocBound) {
        window.__acMenuDocBound = true;
        document.addEventListener("click", () => this.closeAllMenus());
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") this.closeAllMenus();
        });
      }
    },

    /* ——— auth ——— */
    getSession() {
      try {
        return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      } catch {
        return null;
      }
    },
    setSession(user) {
      const safe = {
        id: user.id,
        email: user.email,
        name: user.name,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        role: user.role,
        avatar: user.avatar || "",
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(safe));
      return safe;
    },
    logout() {
      localStorage.removeItem(SESSION_KEY);
      location.href = "login.html";
    },
    isAdmin(user) {
      const u = user || this.getSession();
      return u && (u.role === "admin" || u.role === "formateur");
    },
    isEditor(user) {
      const u = user || this.getSession();
      return u && u.role === "admin";
    },
    getViewMode() {
      const user = this.getSession();
      if (!this.isEditor(user)) return "visitor";
      try {
        const m = localStorage.getItem(VIEW_MODE_KEY);
        return m === "admin" || m === "visitor" ? m : "admin";
      } catch {
        return "admin";
      }
    },
    setViewMode(mode) {
      const next = mode === "visitor" ? "visitor" : "admin";
      try {
        localStorage.setItem(VIEW_MODE_KEY, next);
      } catch (_) {}
      return next;
    },
    canEditCurriculum(user) {
      return this.isEditor(user) && this.getViewMode() === "admin";
    },
    roleLabel(role) {
      if (role === "admin") return this.t("roleAdmin");
      if (role === "formateur") return this.t("roleTrainer");
      return this.t("roleLearner");
    },
    userInitial(user) {
      const u = user || this.getSession();
      if (!u) return "?";
      const first = this.userFirstName(u);
      return String(first || u.email || "?").trim().charAt(0).toUpperCase() || "U";
    },
    avatarHTML(user, extraClass) {
      const u = user || this.getSession();
      const cls = "ac-avatar" + (extraClass ? " " + extraClass : "");
      if (u && u.avatar) {
        return (
          '<img class="' +
          cls +
          '" src="' +
          String(u.avatar).replace(/"/g, "&quot;") +
          '" alt="" />'
        );
      }
      return (
        '<span class="' +
        cls +
        '" aria-hidden="true">' +
        this.userInitial(u) +
        "</span>"
      );
    },
    refreshAvatars(user) {
      const u = user || this.getSession();
      if (!u) return;
      const apply = (el, extra) => {
        if (!el) return;
        const id = el.id;
        const attrs = {};
        ["data-user-avatar", "data-profile-avatar"].forEach((a) => {
          if (el.hasAttribute(a)) attrs[a] = el.getAttribute(a);
        });
        const tmp = document.createElement("div");
        tmp.innerHTML = this.avatarHTML(u, extra || "");
        const next = tmp.firstChild;
        if (id) next.id = id;
        Object.keys(attrs).forEach((a) => next.setAttribute(a, attrs[a]));
        el.parentNode.replaceChild(next, el);
      };
      apply(document.getElementById("topAvatar"));
      apply(document.getElementById("sideAvatar"));
      document.querySelectorAll("[data-profile-avatar]").forEach((el) => apply(el, "ac-avatar--lg"));
      document.querySelectorAll("[data-menu-trigger='profile'] .ac-avatar, [data-menu-trigger='profile'] img.ac-avatar").forEach((el) => {
        apply(el);
      });
    },
    setUserAvatar(userId, dataUrl) {
      return this.updateUser(userId, { avatar: dataUrl || "" });
    },
    userFirstName(user) {
      const u = user || this.getSession();
      if (!u) return "";
      if (u.firstName) return String(u.firstName).trim();
      return String(u.name || "").trim().split(/\s+/)[0] || "";
    },
    userLastName(user) {
      const u = user || this.getSession();
      if (!u) return "";
      if (u.lastName) return String(u.lastName).trim();
      const parts = String(u.name || "").trim().split(/\s+/);
      return parts.slice(1).join(" ");
    },
    userFullName(user) {
      const u = user || this.getSession();
      if (!u) return "";
      const first = this.userFirstName(u);
      const last = this.userLastName(u);
      const full = [first, last].filter(Boolean).join(" ").trim();
      return full || String(u.name || u.email || "").trim();
    },
    getAllCertificates() {
      try {
        return JSON.parse(localStorage.getItem(CERTS_KEY) || "{}");
      } catch (e) {
        return {};
      }
    },
    getUserCertificates(userId) {
      const all = this.getAllCertificates();
      const list = all[userId] || [];
      return list.slice().sort(function (a, b) {
        return String(b.issuedAt || "").localeCompare(String(a.issuedAt || ""));
      });
    },
    saveUserCertificates(userId, list) {
      const all = this.getAllCertificates();
      all[userId] = list;
      localStorage.setItem(CERTS_KEY, JSON.stringify(all));
    },
    /** Crée / met à jour les certificats pour tous les cours terminés */
    syncCertificates(userId, user) {
      const u = user || this.getSession() || {};
      const list = this.getUserCertificates(userId);
      const byCourse = {};
      list.forEach(function (c) { byCourse[c.courseId] = c; });
      let changed = false;
      const firstName = this.userFirstName(u);
      const lastName = this.userLastName(u);
      const fullName = this.userFullName(u);
      this.getCoursesSorted().forEach((course) => {
        if (!this.isCourseComplete(userId, course)) return;
        if (byCourse[course.id]) {
          if (
            byCourse[course.id].firstName !== firstName ||
            byCourse[course.id].lastName !== lastName ||
            byCourse[course.id].fullName !== fullName
          ) {
            byCourse[course.id].firstName = firstName;
            byCourse[course.id].lastName = lastName;
            byCourse[course.id].fullName = fullName;
            changed = true;
          }
          return;
        }
        byCourse[course.id] = {
          id: "cert-" + course.id + "-" + userId,
          userId: userId,
          courseId: course.id,
          courseNumber: course.number || "",
          courseTitle: course.title || "",
          firstName: firstName,
          lastName: lastName,
          fullName: fullName,
          issuedAt: new Date().toISOString(),
        };
        changed = true;
      });
      if (changed) {
        this.saveUserCertificates(userId, Object.keys(byCourse).map(function (k) { return byCourse[k]; }));
      }
      return this.getUserCertificates(userId);
    },
    /** Retourne le certificat s’il vient d’être créé pour ce cours, sinon null */
    issueCertificateForCourse(userId, courseId, user) {
      const existed = this.getUserCertificates(userId).some(function (c) {
        return c.courseId === courseId;
      });
      this.syncCertificates(userId, user);
      if (existed) return null;
      const course = this.getCourse(courseId);
      if (!course || !this.isCourseComplete(userId, course)) return null;
      const cert = this.getUserCertificates(userId).find(function (c) {
        return c.courseId === courseId;
      }) || null;
      if (cert) {
        const who = this.getUserById(userId) || user || this.getSession();
        const fullName = this.userFullName(who) || cert.fullName || "Un apprenant";
        const courseLabel =
          (cert.courseNumber ? "Module " + cert.courseNumber + " — " : "") +
          (cert.courseTitle || course.title || "un module");
        this.pushNotification(userId, {
          type: "certificate",
          title: "Nouveau certificat",
          body: "Félicitations ! Votre certificat pour « " + courseLabel + " » est disponible.",
          href: "dashboard.html#certificats",
          meta: { courseId: courseId, certId: cert.id },
        });
        this.notifyAdmins({
          type: "course_completed",
          title: "Cours terminé",
          body: fullName + " a terminé « " + courseLabel + " ». Un certificat a été délivré.",
          href: "dashboard.html#utilisateurs",
          meta: { userId: userId, courseId: courseId, certId: cert.id },
        });
      }
      return cert;
    },
    getAllNotificationsStore() {
      try {
        return JSON.parse(localStorage.getItem(NOTIFS_KEY) || "{}");
      } catch (e) {
        return {};
      }
    },
    saveNotificationsStore(store) {
      localStorage.setItem(NOTIFS_KEY, JSON.stringify(store));
    },
    getNotifications(userId) {
      const store = this.getAllNotificationsStore();
      const list = store[userId] || [];
      return list.slice().sort(function (a, b) {
        return String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
      });
    },
    getUnreadNotificationCount(userId) {
      return this.getNotifications(userId).filter(function (n) { return !n.read; }).length;
    },
    pushNotification(userId, payload) {
      if (!userId || !payload) return null;
      const store = this.getAllNotificationsStore();
      const list = store[userId] || [];
      const note = {
        id: "n_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
        type: payload.type || "info",
        title: payload.title || "Notification",
        body: payload.body || "",
        href: payload.href || "",
        read: false,
        createdAt: new Date().toISOString(),
        meta: payload.meta || {},
      };
      list.unshift(note);
      store[userId] = list.slice(0, 80);
      this.saveNotificationsStore(store);
      return note;
    },
    notifyAdmins(payload) {
      this.getAllUsers()
        .filter(function (u) { return u.role === "admin"; })
        .forEach((admin) => {
          this.pushNotification(admin.id, payload);
        });
    },
    hasStartedTraining(userId) {
      const prog = this.getProgressSummary(userId);
      return !!(prog && prog.done > 0);
    },
    getIdleTrainers() {
      return this.listUsers().filter((u) => {
        return u.role === "formateur" && !this.hasStartedTraining(u.id);
      });
    },
    /** Crée une notif admin (sans doublon non lu) pour chaque formateur inactif */
    syncIdleTrainerAlerts() {
      const idle = this.getIdleTrainers();
      const idleIds = {};
      idle.forEach((t) => {
        idleIds[t.id] = true;
      });
      this.getAllUsers()
        .filter(function (u) { return u.role === "admin"; })
        .forEach((admin) => {
          const notes = this.getNotifications(admin.id);
          idle.forEach((trainer) => {
            const already = notes.some(function (n) {
              return (
                n.type === "trainer_idle" &&
                n.meta &&
                n.meta.userId === trainer.id &&
                !n.read
              );
            });
            if (already) return;
            const name = this.userFullName(trainer) || trainer.email || trainer.id;
            this.pushNotification(admin.id, {
              type: "trainer_idle",
              title: this.t("trainerIdleTitle"),
              body: name + this.t("trainerIdleBody"),
              href: "dashboard.html#utilisateurs",
              meta: { userId: trainer.id },
            });
          });
          // Marquer comme lues les alertes des formateurs qui ont démarré
          notes.forEach((n) => {
            if (
              n.type === "trainer_idle" &&
              n.meta &&
              n.meta.userId &&
              !idleIds[n.meta.userId] &&
              !n.read
            ) {
              this.markNotificationRead(admin.id, n.id);
            }
          });
        });
      return idle;
    },
    markNotificationRead(userId, notifId) {
      const store = this.getAllNotificationsStore();
      const list = store[userId] || [];
      let changed = false;
      list.forEach(function (n) {
        if (n.id === notifId && !n.read) {
          n.read = true;
          changed = true;
        }
      });
      if (changed) {
        store[userId] = list;
        this.saveNotificationsStore(store);
      }
    },
    markAllNotificationsRead(userId) {
      const store = this.getAllNotificationsStore();
      const list = store[userId] || [];
      let changed = false;
      list.forEach(function (n) {
        if (!n.read) {
          n.read = true;
          changed = true;
        }
      });
      if (changed) {
        store[userId] = list;
        this.saveNotificationsStore(store);
      }
    },
    formatNotifTime(iso) {
      try {
        const d = new Date(iso);
        const diff = Date.now() - d.getTime();
        if (diff < 60000) return this.t("justNow");
        if (diff < 3600000) return Math.floor(diff / 60000) + this.t("minAgo");
        if (diff < 86400000) return Math.floor(diff / 3600000) + this.t("hourAgo");
        const loc = this.getLang() === "ar" ? "ar" : this.getLang() === "en" ? "en-GB" : "fr-FR";
        return d.toLocaleDateString(loc, { day: "numeric", month: "short" });
      } catch (e) {
        return "";
      }
    },
    mountNotifications(userId) {
      const btn = document.getElementById("notifBtn");
      const menu = document.querySelector("[data-notif-menu]");
      const list = document.getElementById("notifList");
      const badge = document.getElementById("notifBadge");
      const markAll = document.getElementById("notifMarkAll");
      const panel = document.getElementById("notifPanel");
      if (!btn || !menu || !list || !badge) return;

      const render = () => {
        const notes = this.getNotifications(userId);
        const unread = this.getUnreadNotificationCount(userId);
        if (unread > 0) {
          badge.style.display = "";
          badge.textContent = unread > 9 ? "9+" : String(unread);
        } else {
          badge.style.display = "none";
        }
        if (!notes.length) {
          list.innerHTML = '<li class="muted lms-notif-empty">' + this.t("noNotif") + "</li>";
          return;
        }
        list.innerHTML = notes
          .map((n) => {
            const ico =
              n.type === "certificate"
                ? "★"
                : n.type === "user_registered"
                  ? "👤"
                  : n.type === "course_completed"
                    ? "✓"
                    : n.type === "trainer_idle"
                      ? "!"
                      : "•";
            return (
              '<li class="lms-notif-item' +
              (n.read ? "" : " is-unread") +
              '">' +
              '<button type="button" class="lms-notif-btn" data-notif-id="' +
              n.id +
              '" data-href="' +
              String(n.href || "").replace(/"/g, "") +
              '">' +
              '<span class="lms-notif-ico" aria-hidden="true">' +
              ico +
              "</span><div><strong>" +
              n.title +
              '</strong><p class="muted">' +
              n.body +
              '</p><span class="lms-notif-time">' +
              this.formatNotifTime(n.createdAt) +
              "</span></div></button></li>"
            );
          })
          .join("");
        list.querySelectorAll("[data-notif-id]").forEach((el) => {
          el.onclick = () => {
            const id = el.getAttribute("data-notif-id");
            const href = el.getAttribute("data-href");
            this.markNotificationRead(userId, id);
            this.closeAllMenus();
            if (href) location.href = href;
            else render();
          };
        });
      };

      if (!btn.dataset.notifBound) {
        btn.dataset.notifBound = "1";
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const open = !menu.classList.contains("is-open");
          this.closeAllMenus();
          if (open) {
            menu.classList.add("is-open");
            render();
          }
        });
        if (panel) panel.addEventListener("click", (e) => e.stopPropagation());
        if (markAll) {
          markAll.addEventListener("click", () => {
            this.markAllNotificationsRead(userId);
            render();
          });
        }
      }
      render();
    },
    getCertificate(userId, certId) {
      return this.getUserCertificates(userId).find(function (c) { return c.id === certId; }) || null;
    },
    formatCertDate(iso) {
      try {
        const loc = this.getLang() === "ar" ? "ar" : this.getLang() === "en" ? "en-GB" : "fr-FR";
        return new Date(iso).toLocaleDateString(loc, {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      } catch (e) {
        return "";
      }
    },
    getResumeLesson(userId) {
      const courses = this.getCoursesSorted();
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        if (!this.isCourseUnlocked(userId, course.id)) continue;
        const open = (course.chapters || []).filter((ch) => !ch.comingSoon);
        for (let j = 0; j < open.length; j++) {
          const ch = open[j];
          const cp = this.chapterProgress(userId, ch.id);
          if (!cp.quizPassed) {
            return {
              course,
              chapter: this.getChapter(ch.id),
              percent: cp.percent,
              href: "chapitre.html?id=" + encodeURIComponent(ch.id),
            };
          }
        }
      }
      const first = courses[0];
      const firstCh = first && (first.chapters || []).find((c) => !c.comingSoon);
      if (firstCh) {
        return {
          course: first,
          chapter: this.getChapter(firstCh.id),
          percent: 100,
          href: "chapitre.html?id=" + encodeURIComponent(firstCh.id),
          done: true,
        };
      }
      return null;
    },
    getUpcomingLessons(userId, limit) {
      const max = limit || 3;
      const out = [];
      this.getCoursesSorted().forEach((course) => {
        (course.chapters || []).forEach((ch) => {
          if (out.length >= max || ch.comingSoon) return;
          const cp = this.chapterProgress(userId, ch.id);
          if (cp.quizPassed) return;
          out.push({
            course,
            chapter: ch,
            duration: ch.duration || "—",
            unlocked: this.isCourseUnlocked(userId, course.id),
            href: "chapitre.html?id=" + encodeURIComponent(ch.id),
          });
        });
      });
      return out;
    },
    courseStatus(userId, course) {
      const cp = this.courseProgress(userId, course);
      const open = (course.chapters || []).filter((ch) => !ch.comingSoon);
      if (!open.length) return { key: "soon", label: this.t("statusSoon") };
      if (this.isCourseComplete(userId, course)) return { key: "done", label: this.t("statusDone") };
      if (cp.percent > 0) return { key: "progress", label: this.t("statusProgress") };
      return { key: "todo", label: this.t("statusTodo") };
    },
    requireGuest() {
      const s = this.getSession();
      if (!s) return;
      location.href = "dashboard.html";
    },
    requireAuth(roles) {
      const session = this.getSession();
      if (!session) {
        location.href = "login.html";
        return null;
      }
      if (roles && roles.length && !roles.includes(session.role)) {
        location.href = "dashboard.html";
        return null;
      }
      return session;
    },
    login(email, password) {
      const user = this.getAllUsers().find(
        (u) => u.email.toLowerCase() === String(email).trim().toLowerCase() && u.password === password
      );
      if (!user) return { ok: false, error: "Email ou mot de passe incorrect." };
      this.setSession(user);
      return { ok: true, user };
    },
    getRegisteredUsers() {
      try {
        return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
      } catch {
        return [];
      }
    },
    getUserPatches() {
      try {
        return JSON.parse(localStorage.getItem(USER_PATCHES_KEY) || "{}");
      } catch {
        return {};
      }
    },
    getDeletedUserIds() {
      try {
        return JSON.parse(localStorage.getItem(USER_DELETED_KEY) || "[]");
      } catch {
        return [];
      }
    },
    isSeedUser(userId) {
      return (window.GSMAG_USERS || []).some((u) => u.id === userId);
    },
    getAllUsers() {
      const deleted = this.getDeletedUserIds();
      const patches = this.getUserPatches();
      const seeds = (window.GSMAG_USERS || [])
        .filter((u) => deleted.indexOf(u.id) < 0)
        .map((u) => Object.assign({}, u, patches[u.id] || {}));
      const registered = this.getRegisteredUsers()
        .filter((u) => deleted.indexOf(u.id) < 0)
        .map((u) => Object.assign({}, u, patches[u.id] || {}));
      return seeds.concat(registered);
    },
    getUserById(userId) {
      return this.getAllUsers().find((u) => u.id === userId) || null;
    },
    createUser({ firstName, lastName, email, password, role }) {
      const cleanEmail = String(email || "").trim().toLowerCase();
      const cleanFirst = String(firstName || "").trim();
      const cleanLast = String(lastName || "").trim();
      const cleanName = [cleanFirst, cleanLast].filter(Boolean).join(" ");
      const cleanRole = ["client", "formateur", "admin"].indexOf(role) >= 0 ? role : "client";
      if (!cleanFirst || !cleanLast || !cleanEmail || !password) {
        return { ok: false, error: "Prénom, nom, e-mail et mot de passe sont requis." };
      }
      if (String(password).length < 6) {
        return { ok: false, error: "Le mot de passe doit contenir au moins 6 caractères." };
      }
      if (this.getAllUsers().some((u) => u.email.toLowerCase() === cleanEmail)) {
        return { ok: false, error: "Un compte existe déjà avec cet e-mail." };
      }
      const user = {
        id: "u_" + Date.now(),
        email: cleanEmail,
        password: String(password),
        firstName: cleanFirst,
        lastName: cleanLast,
        name: cleanName,
        role: cleanRole,
      };
      const list = this.getRegisteredUsers();
      list.push(user);
      localStorage.setItem(USERS_KEY, JSON.stringify(list));
      return { ok: true, user: this.listUsers().find((u) => u.id === user.id) };
    },
    updateUser(userId, patch) {
      const current = this.getUserById(userId);
      if (!current) return { ok: false, error: "Utilisateur introuvable." };
      const next = {
        firstName:
          patch.firstName != null
            ? String(patch.firstName).trim()
            : this.userFirstName(current) || current.firstName || "",
        lastName:
          patch.lastName != null
            ? String(patch.lastName).trim()
            : this.userLastName(current) || current.lastName || "",
        email: patch.email != null ? String(patch.email).trim().toLowerCase() : current.email,
        role: patch.role != null ? patch.role : current.role,
      };
      if (!next.firstName || !next.lastName || !next.email) {
        return { ok: false, error: "Prénom, nom et e-mail sont requis." };
      }
      if (["client", "formateur", "admin"].indexOf(next.role) < 0) {
        return { ok: false, error: "Rôle invalide." };
      }
      if (
        this.getAllUsers().some(
          (u) => u.id !== userId && u.email.toLowerCase() === next.email
        )
      ) {
        return { ok: false, error: "Cet e-mail est déjà utilisé." };
      }
      const data = {
        firstName: next.firstName,
        lastName: next.lastName,
        name: next.firstName + " " + next.lastName,
        email: next.email,
        role: next.role,
      };
      if (patch.avatar !== undefined) {
        data.avatar = patch.avatar || "";
      }
      if (patch.password && String(patch.password).trim()) {
        if (String(patch.password).length < 6) {
          return { ok: false, error: "Le mot de passe doit contenir au moins 6 caractères." };
        }
        data.password = String(patch.password);
      }
      const list = this.getRegisteredUsers();
      const idx = list.findIndex((u) => u.id === userId);
      if (idx >= 0) {
        list[idx] = Object.assign({}, list[idx], data);
        localStorage.setItem(USERS_KEY, JSON.stringify(list));
      } else {
        const patches = this.getUserPatches();
        patches[userId] = Object.assign({}, patches[userId] || {}, data);
        localStorage.setItem(USER_PATCHES_KEY, JSON.stringify(patches));
      }
      const session = this.getSession();
      if (session && session.id === userId) {
        this.setSession(this.getUserById(userId));
      }
      return { ok: true, user: this.listUsers().find((u) => u.id === userId) };
    },
    deleteUser(userId, actorId) {
      if (!userId) return { ok: false, error: "Utilisateur introuvable." };
      if (actorId && userId === actorId) {
        return { ok: false, error: "Vous ne pouvez pas supprimer votre propre compte." };
      }
      const target = this.getUserById(userId);
      if (!target) return { ok: false, error: "Utilisateur introuvable." };
      const admins = this.getAllUsers().filter((u) => u.role === "admin");
      if (target.role === "admin" && admins.length <= 1) {
        return { ok: false, error: "Impossible de supprimer le dernier administrateur." };
      }
      const list = this.getRegisteredUsers().filter((u) => u.id !== userId);
      localStorage.setItem(USERS_KEY, JSON.stringify(list));
      if (this.isSeedUser(userId)) {
        const deleted = this.getDeletedUserIds();
        if (deleted.indexOf(userId) < 0) {
          deleted.push(userId);
          localStorage.setItem(USER_DELETED_KEY, JSON.stringify(deleted));
        }
      }
      const patches = this.getUserPatches();
      if (patches[userId]) {
        delete patches[userId];
        localStorage.setItem(USER_PATCHES_KEY, JSON.stringify(patches));
      }
      return { ok: true };
    },
    getUserCourseProgress(userId) {
      return this.getCoursesSorted().map((course) => {
        const open = (course.chapters || []).filter((ch) => !ch.comingSoon);
        const cp = this.courseProgress(userId, course);
        const status = this.courseStatus(userId, course);
        const chapters = open.map((ch) => {
          const p = this.chapterProgress(userId, ch.id);
          return {
            id: ch.id,
            title: ch.title,
            percent: p.percent,
            quizPassed: !!p.quizPassed,
            done: p.done,
            total: p.total,
          };
        });
        return {
          id: course.id,
          number: course.number,
          title: course.title,
          percent: cp.percent,
          status: status,
          chapters: chapters,
        };
      });
    },
    register({ firstName, lastName, name, email, password }) {
      const result = this.createUser({
        firstName,
        lastName,
        email,
        password,
        role: "client",
      });
      if (!result.ok) return result;
      const full = this.getUserById(result.user.id);
      this.setSession(full);
      this.notifyAdmins({
        type: "user_registered",
        title: "Nouveau compte",
        body:
          this.userFullName(full) +
          " (" +
          (full.email || "") +
          ") vient de créer un compte.",
        href: "dashboard.html#utilisateurs",
        meta: { userId: full.id },
      });
      return { ok: true, user: full };
    },
    listUsers() {
      return this.getAllUsers().map(({ password, ...u }) => u);
    },
    listLearners() {
      return this.listUsers().filter((u) => u.role === "client" || u.role === "formateur");
    },

    /* ——— curriculum CMS : COURS → CHAPITRES → SOUS-CHAPITRES (sections) → étapes ——— */
    sectionLetter(i) {
      return String.fromCharCode(65 + (Math.max(0, i) % 26));
    },
    normalizeStep(s) {
      if (typeof s === "string") return { text: s, image: "", imageZoom: 1 };
      return {
        text: (s && (s.text || s.detail || s.title)) || "",
        image: (s && s.image) || "",
        imageZoom: s && s.imageZoom != null ? s.imageZoom : 1,
      };
    },
    normalizeSection(sec, i) {
      const letter = this.sectionLetter(i);
      return {
        title: (sec && sec.title) || "Sous-chapitre " + letter,
        note: (sec && sec.note) || "",
        example: (sec && sec.example) || "",
        steps: ((sec && sec.steps) || []).map((st) => this.normalizeStep(st)),
      };
    },
    /** Anciens steps plats → sections ; sinon normalise sections[] */
    ensureChapterSections(ch) {
      if (!ch) return ch;
      if (Array.isArray(ch.sections) && ch.sections.length) {
        ch.sections = ch.sections.map((s, i) => this.normalizeSection(s, i));
      } else if (Array.isArray(ch.steps) && ch.steps.length) {
        ch.sections = ch.steps.map((s, i) =>
          this.normalizeSection(
            {
              title: s.title || "Partie " + this.sectionLetter(i),
              note: "",
              example: "",
              steps: [
                {
                  text: s.detail || s.text || s.title || "",
                  image: s.image || "",
                  imageZoom: s.imageZoom != null ? s.imageZoom : 1,
                },
              ],
            },
            i
          )
        );
      } else {
        ch.sections = Array.isArray(ch.sections) ? ch.sections : [];
      }
      ch.steps = this.flattenSectionSteps(ch.sections);
      return ch;
    },
    flattenSectionSteps(sections) {
      const out = [];
      (sections || []).forEach((sec, si) => {
        (sec.steps || []).forEach((st, ti) => {
          out.push({
            text: st.text || "",
            title: this.sectionLetter(si) + (ti + 1) + ". " + String(st.text || "").slice(0, 48),
            detail: st.text || "",
            image: st.image || "",
            imageZoom: st.imageZoom != null ? st.imageZoom : 1,
            sectionIndex: si,
            stepIndex: ti,
            key: si + "-" + ti,
          });
        });
      });
      return out;
    },
    countChapterSteps(ch) {
      if (!ch) return 0;
      if (Array.isArray(ch.sections) && ch.sections.length) {
        return ch.sections.reduce((n, s) => n + ((s.steps && s.steps.length) || 0), 0);
      }
      return (ch.steps || []).length;
    },
    seedCurriculum() {
      const base = deepClone(window.GSMAG_CURRICULUM || { title: "Formation", courses: [], version: 7 });
      // Migration ancienne structure chapters[] → courses[]
      if (!base.courses && base.chapters) {
        base.courses = base.chapters.map((ch) => ({
          ...ch,
          chapters: (ch.courses || []).map((c) => ({ ...c })),
        }));
        delete base.chapters;
      }
      base.version = base.version || 7;
      base.passPercent = base.passPercent || 70;
      base.courses = base.courses || [];
      base.courses.forEach((course, i) => {
        course.sortOrder = course.sortOrder != null ? course.sortOrder : i;
        course.image = course.image || "";
        if (course.imageZoom == null) course.imageZoom = 1;
        if (!course.imageFit) course.imageFit = "cover";
        course.color = course.color || TILE_COLORS[i % TILE_COLORS.length];
        if (!Array.isArray(course.chapters) && Array.isArray(course.courses)) {
          course.chapters = course.courses;
          delete course.courses;
        }
        course.chapters = course.chapters || [];
        course.chapters.forEach((ch) => {
          if (ch.passPercent == null) ch.passPercent = base.passPercent;
          if (!Array.isArray(ch.quiz)) ch.quiz = [];
          if (ch.videoUrl == null) ch.videoUrl = "";
          if (ch.image == null) ch.image = "";
          this.ensureChapterSections(ch);
        });
      });
      return base;
    },
    getCurriculum() {
      try {
        const raw = localStorage.getItem(CURRICULUM_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          const seedVer = (window.GSMAG_CURRICULUM && window.GSMAG_CURRICULUM.version) || 7;
          const needsRepair =
            !parsed.version ||
            parsed.version < seedVer ||
            (!parsed.courses && parsed.chapters) ||
            !(parsed.courses || []).length;
          if (needsRepair) {
            const fresh = this.seedCurriculum();
            const oldTiles = parsed.courses || parsed.chapters || [];
            oldTiles.forEach((old) => {
              const neu =
                fresh.courses.find((c) => c.id === old.id) ||
                fresh.courses.find((c) => c.number === old.number);
              if (neu) {
                if (old.image) neu.image = old.image;
                if (old.color) neu.color = old.color;
                if (old.sortOrder != null) neu.sortOrder = old.sortOrder;
                if (old.title) neu.title = old.title;
                if (old.description) neu.description = old.description;
                if (old.imageZoom != null) neu.imageZoom = old.imageZoom;
                if (old.imageFit) neu.imageFit = old.imageFit;
              }
            });
            fresh.version = seedVer;
            this.saveCurriculum(fresh);
            window.FORMATION = fresh;
            return fresh;
          }
          (parsed.courses || []).forEach((course) => {
            (course.chapters || []).forEach((ch) => this.ensureChapterSections(ch));
          });
          window.FORMATION = parsed;
          return parsed;
        }
      } catch (_) {}
      const seed = this.seedCurriculum();
      this.saveCurriculum(seed);
      return seed;
    },
    saveCurriculum(data) {
      try {
        localStorage.setItem(CURRICULUM_KEY, JSON.stringify(data));
      } catch (err) {
        console.error(err);
        alert("Impossible d’enregistrer (image trop lourde pour le navigateur). Utilisez une image plus petite ou une URL.");
        throw err;
      }
      window.FORMATION = data;
      return data;
    },
    resetCurriculum() {
      localStorage.removeItem(CURRICULUM_KEY);
      return this.getCurriculum();
    },

    getCoursesSorted() {
      return [...(this.getCurriculum().courses || [])].sort(
        (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
      );
    },
    getCourse(courseId) {
      return this.getCoursesSorted().find((c) => c.id === courseId) || null;
    },
    getChapter(chapterId) {
      for (const course of this.getCoursesSorted()) {
        const found = (course.chapters || []).find((ch) => ch.id === chapterId);
        if (found) {
          this.ensureChapterSections(found);
          return {
            ...found,
            code: found.id,
            available: !found.comingSoon,
            course,
            passPercent:
              found.passPercent != null ? found.passPercent : this.getCurriculum().passPercent || 70,
          };
        }
      }
      return null;
    },
    courseDuration(course) {
      let mins = 0;
      (course.chapters || []).forEach((ch) => {
        if (ch.comingSoon) return;
        const m = String(ch.duration || "").match(/(\d+)/);
        if (m) mins += Number(m[1]);
      });
      return mins;
    },
    reorderCourses(ids) {
      const cur = this.getCurriculum();
      const map = Object.fromEntries(cur.courses.map((c) => [c.id, c]));
      cur.courses = ids
        .map((id, i) => {
          const c = map[id];
          if (c) c.sortOrder = i;
          return c;
        })
        .filter(Boolean);
      cur.courses.forEach((c, i) => {
        if (c.sortOrder == null) c.sortOrder = i;
      });
      return this.saveCurriculum(cur);
    },
    updateCourse(courseId, patch) {
      const cur = this.getCurriculum();
      const c = cur.courses.find((x) => x.id === courseId);
      if (!c) return null;
      Object.assign(c, patch);
      this.saveCurriculum(cur);
      return c;
    },
    addCourse({ title, description, number, image, color }) {
      const cur = this.getCurriculum();
      const id = "course_" + Date.now();
      const course = {
        id,
        number: number || String(cur.courses.length + 1),
        title: title || "Nouveau cours",
        description: description || "",
        image: image || "",
        imageZoom: 1,
        imageFit: "cover",
        color: color || TILE_COLORS[cur.courses.length % TILE_COLORS.length],
        sortOrder: cur.courses.length,
        chapters: [],
      };
      cur.courses.push(course);
      this.saveCurriculum(cur);
      return course;
    },
    deleteCourse(courseId) {
      const cur = this.getCurriculum();
      cur.courses = cur.courses.filter((c) => c.id !== courseId);
      cur.courses.forEach((c, i) => (c.sortOrder = i));
      this.saveCurriculum(cur);
    },
    addChapter(courseId, chapter) {
      const cur = this.getCurriculum();
      const course = cur.courses.find((c) => c.id === courseId);
      if (!course) return null;
      const id =
        chapter.id ||
        (course.number || "x") + "." + ((course.chapters || []).length + 1);
      const item = {
        id,
        title: chapter.title || "Nouveau chapitre",
        duration: chapter.duration || "20 min",
        level: chapter.level || "Débutant",
        purpose: chapter.purpose || "",
        videoUrl: chapter.videoUrl || "",
        image: chapter.image || "",
        sections: Array.isArray(chapter.sections) ? chapter.sections : [],
        quiz: chapter.quiz || [],
        comingSoon: !!chapter.comingSoon,
        passPercent: chapter.passPercent != null ? chapter.passPercent : cur.passPercent || 70,
      };
      this.ensureChapterSections(item);
      course.chapters = course.chapters || [];
      course.chapters.push(item);
      this.saveCurriculum(cur);
      return item;
    },
    updateChapter(chapterId, patch) {
      const cur = this.getCurriculum();
      for (const course of cur.courses) {
        const ch = (course.chapters || []).find((x) => x.id === chapterId);
        if (ch) {
          Object.assign(ch, patch);
          if (Array.isArray(patch.sections)) {
            ch.sections = patch.sections;
            this.ensureChapterSections(ch);
          } else if (Array.isArray(patch.steps) && !patch.sections) {
            ch.steps = patch.steps;
            ch.sections = undefined;
            this.ensureChapterSections(ch);
          } else {
            this.ensureChapterSections(ch);
          }
          this.saveCurriculum(cur);
          return ch;
        }
      }
      return null;
    },
    /** Lit un fichier image → data URL (redimensionné pour localStorage) */
    readImageFile(file, maxSide) {
      const limit = maxSide || 1280;
      return new Promise((resolve, reject) => {
        if (!file) return resolve("");
        const reader = new FileReader();
        reader.onerror = () => reject(reader.error);
        reader.onload = () => {
          const src = String(reader.result || "");
          const img = new Image();
          img.onload = () => {
            let w = img.width;
            let h = img.height;
            const scale = Math.min(1, limit / Math.max(w, h, 1));
            w = Math.round(w * scale);
            h = Math.round(h * scale);
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, w, h);
            try {
              resolve(canvas.toDataURL("image/jpeg", 0.82));
            } catch (err) {
              resolve(src);
            }
          };
          img.onerror = () => resolve(src);
          img.src = src;
        };
        reader.readAsDataURL(file);
      });
    },
    deleteChapter(chapterId) {
      const cur = this.getCurriculum();
      for (const course of cur.courses) {
        const before = (course.chapters || []).length;
        course.chapters = (course.chapters || []).filter((c) => c.id !== chapterId);
        if (course.chapters.length !== before) {
          this.saveCurriculum(cur);
          return true;
        }
      }
      return false;
    },

    /* ——— progress (clé = id chapitre, ex. 1.1) ——— */
    getAllProgress() {
      try {
        return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
      } catch {
        return {};
      }
    },
    getUserProgress(userId) {
      const all = this.getAllProgress();
      if (!all[userId]) {
        all[userId] = { courses: {} };
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
      }
      return all[userId];
    },
    saveUserProgress(userId, data) {
      const all = this.getAllProgress();
      all[userId] = data;
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
    },
    ensureChapterProgress(userId, chapterId, existingProg) {
      const prog = existingProg || this.getUserProgress(userId);
      if (!prog.courses) prog.courses = {};
      if (!prog.courses[chapterId]) {
        prog.courses[chapterId] = {
          stepsDone: [],
          sectionsDone: [],
          videoSeen: false,
          quizScore: null,
          quizTotal: null,
          quizPercent: null,
          quizPassed: false,
          completed: false,
          lastAccess: null,
        };
        if (!existingProg) this.saveUserProgress(userId, prog);
      }
      const c = prog.courses[chapterId];
      if (c.videoSeen == null) c.videoSeen = false;
      if (!Array.isArray(c.stepsDone)) c.stepsDone = [];
      if (!Array.isArray(c.sectionsDone)) c.sectionsDone = [];
      return c;
    },
    markVideoSeen(userId, chapterId) {
      const prog = this.getUserProgress(userId);
      const c = this.ensureChapterProgress(userId, chapterId, prog);
      c.videoSeen = true;
      c.lastAccess = new Date().toISOString();
      this.saveUserProgress(userId, prog);
      return c;
    },
    markStep(userId, chapterId, stepKey) {
      const prog = this.getUserProgress(userId);
      const c = this.ensureChapterProgress(userId, chapterId, prog);
      const key = String(stepKey);
      if (!c.stepsDone.map(String).includes(key)) c.stepsDone.push(key);
      c.lastAccess = new Date().toISOString();
      this._refreshCompleted(chapterId, c);
      this.saveUserProgress(userId, prog);
      return c;
    },
    /** Indices plats des étapes d’un sous-chapitre */
    sectionStepKeys(chapter, sectionIndex) {
      const sections = chapter.sections || [];
      let offset = 0;
      for (let i = 0; i < sectionIndex; i++) {
        offset += ((sections[i] && sections[i].steps) || []).length;
      }
      const n = ((sections[sectionIndex] && sections[sectionIndex].steps) || []).length;
      const keys = [];
      for (let i = 0; i < n; i++) keys.push(String(offset + i));
      return keys;
    },
    isSectionComplete(userId, chapter, sectionIndex) {
      const c = this.ensureChapterProgress(userId, chapter.id);
      if ((c.sectionsDone || []).map(Number).includes(Number(sectionIndex))) return true;
      const keys = this.sectionStepKeys(chapter, sectionIndex);
      if (!keys.length) return true;
      const done = new Set((c.stepsDone || []).map(String));
      return keys.every((k) => done.has(k));
    },
    /** Valide tout un sous-chapitre d’un coup (bouton Suivant) */
    completeSection(userId, chapter, sectionIndex) {
      const keys = this.sectionStepKeys(chapter, sectionIndex);
      const prog = this.getUserProgress(userId);
      const c = this.ensureChapterProgress(userId, chapter.id, prog);
      keys.forEach((key) => {
        if (!c.stepsDone.map(String).includes(String(key))) c.stepsDone.push(String(key));
      });
      if (!c.sectionsDone.map(Number).includes(Number(sectionIndex))) {
        c.sectionsDone.push(Number(sectionIndex));
      }
      c.lastAccess = new Date().toISOString();
      this._refreshCompleted(chapter.id, c);
      this.saveUserProgress(userId, prog);
      return c;
    },
    countSectionsDone(userId, chapter) {
      const sections = chapter.sections || [];
      let n = 0;
      for (let i = 0; i < sections.length; i++) {
        if (this.isSectionComplete(userId, chapter, i)) n += 1;
      }
      return n;
    },
    areAllSectionsComplete(userId, chapter) {
      const sections = chapter.sections || [];
      if (!sections.length) return true;
      return sections.every((_, i) => this.isSectionComplete(userId, chapter, i));
    },
    /** Étape du parcours : video | section:N | quiz | done */
    getLessonStage(userId, chapter) {
      const prog = this.getUserProgress(userId);
      const c = this.ensureChapterProgress(userId, chapter.id, prog);
      const hasVideo = !!(chapter.videoUrl && String(chapter.videoUrl).trim());
      if (hasVideo && !c.videoSeen) return { type: "video" };
      const sections = chapter.sections || [];
      for (let i = 0; i < sections.length; i++) {
        if (!this.isSectionComplete(userId, chapter, i)) {
          return { type: "section", index: i };
        }
      }
      if (chapter.quiz && chapter.quiz.length && !c.quizPassed) {
        return { type: "quiz" };
      }
      return { type: "done" };
    },
    _refreshCompleted(chapterId, c) {
      const chapter = this.getChapter(chapterId);
      if (!chapter || !chapter.available) return;
      const total = this.countChapterSteps(chapter);
      const quizOk = !chapter.quiz || !chapter.quiz.length || c.quizPassed;
      c.completed = (total === 0 || c.stepsDone.length >= total) && quizOk;
    },
    submitQuiz(userId, chapterId, answers) {
      const chapter = this.getChapter(chapterId);
      if (!chapter || !chapter.quiz || !chapter.quiz.length) {
        return { ok: false, score: 0, total: 0, percent: 0, needed: 70 };
      }
      let score = 0;
      chapter.quiz.forEach((q, i) => {
        if (Number(answers[i]) === Number(q.answer)) score += 1;
      });
      const total = chapter.quiz.length;
      const percent = Math.round((score / total) * 100);
      const needed = chapter.passPercent != null ? chapter.passPercent : 70;
      const passed = percent >= needed;
      const prog = this.getUserProgress(userId);
      const c = this.ensureChapterProgress(userId, chapterId, prog);
      c.quizScore = score;
      c.quizTotal = total;
      c.quizPercent = percent;
      c.quizPassed = passed;
      c.lastAccess = new Date().toISOString();
      this._refreshCompleted(chapterId, c);
      this.saveUserProgress(userId, prog);
      const chapterRef = this.getChapter(chapterId);
      let newCert = null;
      if (passed && chapterRef && chapterRef.course) {
        newCert = this.issueCertificateForCourse(userId, chapterRef.course.id);
      } else {
        this.syncCertificates(userId);
      }
      return { ok: passed, score, total, percent, needed, certificate: newCert };
    },
    /** Chapitre suivant dans le même cours (hors comingSoon), sinon null */
    getNextChapter(chapterId) {
      const cur = this.getChapter(chapterId);
      if (!cur || !cur.course) return null;
      const open = (cur.course.chapters || []).filter((ch) => !ch.comingSoon);
      const idx = open.findIndex((ch) => ch.id === chapterId);
      if (idx < 0 || idx >= open.length - 1) return null;
      return this.getChapter(open[idx + 1].id);
    },
    /**
     * Suite du parcours après un chapitre validé :
     * - next chapter same course
     * - sinon premier chapitre ouvert du cours suivant
     * - sinon lien vers le cours suivant / dashboard
     */
    getNextLesson(chapterId) {
      const nextCh = this.getNextChapter(chapterId);
      if (nextCh) {
        return {
          type: "chapter",
          chapter: nextCh,
          label: this.t("nextChapter"),
          href: "chapitre.html?id=" + encodeURIComponent(nextCh.id),
        };
      }
      const cur = this.getChapter(chapterId);
      if (!cur || !cur.course) {
        return { type: "dashboard", label: this.t("backToLaunchpad"), href: "dashboard.html" };
      }
      const courses = this.getCoursesSorted();
      const cIdx = courses.findIndex((c) => c.id === cur.course.id);
      if (cIdx >= 0 && cIdx < courses.length - 1) {
        const nextCourse = courses[cIdx + 1];
        const open = (nextCourse.chapters || []).filter((ch) => !ch.comingSoon);
        if (open.length) {
          return {
            type: "chapter",
            chapter: this.getChapter(open[0].id),
            course: nextCourse,
            label: this.t("nextCourse"),
            href: "chapitre.html?id=" + encodeURIComponent(open[0].id),
          };
        }
        return {
          type: "course",
          course: nextCourse,
          label: this.t("nextCourse"),
          href: "cours.html?id=" + encodeURIComponent(nextCourse.id),
        };
      }
      return {
        type: "course",
        course: cur.course,
        label: this.t("backToCourse") + " →",
        href: "cours.html?id=" + encodeURIComponent(cur.course.id),
      };
    },
    chapterProgress(userId, chapterId) {
      const chapter = typeof chapterId === "string" ? this.getChapter(chapterId) : chapterId;
      if (!chapter || !chapter.available) return { done: 0, total: 0, percent: 0 };
      const id = chapter.id || chapterId;
      const c = this.ensureChapterProgress(userId, id);
      const stepTotal = this.countChapterSteps(chapter);
      const quizTotal = chapter.quiz && chapter.quiz.length ? 1 : 0;
      const total = stepTotal + quizTotal || 1;
      const stepDone = Math.min(c.stepsDone.length, stepTotal);
      const quizDone = c.quizPassed ? quizTotal : 0;
      const done = stepDone + quizDone;
      return {
        done,
        total,
        percent: Math.round((done / total) * 100),
        quizPassed: !!c.quizPassed,
        quizPercent: c.quizPercent,
        stepsDone: c.stepsDone,
        completed: !!c.completed,
      };
    },
    isCourseComplete(userId, course) {
      const open = (course.chapters || []).filter((ch) => !ch.comingSoon);
      if (!open.length) return false;
      return open.every((ch) => {
        const cp = this.chapterProgress(userId, ch.id);
        if (ch.quiz && ch.quiz.length) return cp.quizPassed;
        return cp.completed || cp.percent >= 100;
      });
    },
    isCourseUnlocked(userId, courseId) {
      return true;
    },
    courseProgress(userId, course) {
      const open = (course.chapters || []).filter((ch) => !ch.comingSoon);
      if (!open.length) return { percent: 0, done: 0, total: 0 };
      let done = 0;
      let total = 0;
      open.forEach((ch) => {
        const p = this.chapterProgress(userId, ch.id);
        done += p.done;
        total += p.total;
      });
      return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
    },
    getProgressSummary(userId) {
      let done = 0;
      let total = 0;
      this.getCoursesSorted().forEach((course) => {
        (course.chapters || []).forEach((ch) => {
          if (ch.comingSoon) return;
          const p = this.chapterProgress(userId, ch.id);
          done += p.done;
          total += p.total;
        });
      });
      return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
    },
    progressDetailLabel(userId) {
      const parts = [];
      this.getCoursesSorted().forEach((course) => {
        const p = this.courseProgress(userId, course);
        if (p.percent > 0) parts.push(course.number + " " + p.percent + "%");
      });
      return parts.length ? parts.join(" · ") : "Aucune activité";
    },
    seedDemoProgress() {
      const all = this.getAllProgress();
      if (!all.u1 || Object.keys(all.u1.courses || {}).length === 0) {
        all.u1 = {
          courses: {
            "1.1": {
              stepsDone: ["0", "1"],
              quizScore: null,
              quizPassed: false,
              completed: false,
              lastAccess: new Date().toISOString(),
            },
          },
        };
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
      }
      if (!all.u2) {
        all.u2 = {
          courses: {
            "1.1": {
              stepsDone: ["0", "1", "2", "3"],
              quizScore: 2,
              quizTotal: 2,
              quizPercent: 100,
              quizPassed: true,
              completed: true,
              lastAccess: new Date().toISOString(),
            },
          },
        };
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
      }
    },
  };

  Academy.applyTheme(Academy.getTheme());
  Academy.getCurriculum();
  Academy.seedDemoProgress();
  window.Academy = Academy;
  window.GSMAGAcademy = Academy;
  window.FORMATION = Academy.getCurriculum();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => Academy.mountChrome());
  } else {
    Academy.mountChrome();
  }
})();
