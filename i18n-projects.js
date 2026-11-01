I18N.en.projects = {
  "marsa-insight": {
    tagline: "A decision assistant that turns a business question into a quantified analysis.",
    org: "Marsa Maroc · IS department",
    team: "Built as a pair with Yasser Nadi.",
    problem: "Business teams depended on the IS department for every extraction of port data (traffic, terminals, costs). The goal was to let them query the database in natural language without ever compromising data security.",
    actions: [
      "LangGraph agent pipeline: understand the question, ask for clarification when it is ambiguous, generate SQL, check it, run it, then interpret the result.",
      "Business context through RAG (ChromaDB): schema, definitions and example queries injected at generation time.",
      "Defence in depth: SQL syntax-tree validation with sqlglot, a read-only PostgreSQL role, a read-only transaction, a 10 s timeout and a cap of 5,000 rows.",
      "Role-based access (administrator, HR, port operations, finance, logistics) and JWT authentication.",
      "React interface: conversation, Plotly charts, dashboard, comparison of periods and sites, exportable report, voice dictation, and French, English and Arabic."
    ],
    results: [["84", "automated tests"], ["5", "business roles"], ["3", "languages, including Arabic"], ["10 s", "maximum time per query"]]
  },
  "erp-launchpad": {
    title: "ERP Launchpad portal",
    tagline: "A single entry point for every internal application.",
    problem: "During the internship the internal applications multiplied: extraction, RIB, SIMT/MAD, commissions, invoices. Each had its own address, which made access harder for the teams. They needed one place that gathered them all.",
    actions: [
      "Launchpad-style portal: one tile per application, with category, description and status.",
      "Two separate spaces, internal and external, with visibility set per application.",
      "Administrator mode protected by a signed token (HMAC-SHA256): add, edit, disable and reorder tiles by drag and drop.",
      "A welcome banner that can be edited without a redeploy."
    ],
    results: [["1", "single access point"], ["2", "internal / external spaces"]]
  },
  "gestion-rib": {
    title: "RIB management application",
    tagline: "A fully traced validation flow from Back Office to Compliance.",
    problem: "Partners' bank details were entered and checked by hand, with no history of changes and no systematic control.",
    actions: [
      "Entry and edits by Back Office, approval or rejection by Compliance.",
      "Automatic check of Moroccan RIBs: 24 digits and a modulo-97 control key.",
      "Duplicate detection before saving.",
      "Full audit history (who, what, when) and export.",
      "Four access profiles and unit tests on the validation rules."
    ],
    results: [["4", "access profiles"], ["24", "digits checked + modulo-97 key"]]
  },
  "simt-mad": {
    title: "SIMT / MAD file generator",
    tagline: "From an Excel file to a standard bank file, with no retyping.",
    problem: "Bank-format transfer files were prepared by hand, with a risk of error at every step.",
    actions: [
      "Excel or CSV import that recognises column-name variants.",
      "Automatic match against the RIB reference data, with rejected rows set aside.",
      "Generation of the fixed-width file the bank expects, with a preview before download.",
      "History of generated files with the author traced; the application is deployed on an internal server."
    ],
    results: [["2", "bank formats: SIMT and MAD"]]
  },
  "cms-crc": {
    title: "CMS CRC · commission statements",
    tagline: "A monolithic application rebuilt as a modular architecture.",
    problem: "A 5,500-line lookup application, of which nearly 4,400 lines were no longer used, had become hard to maintain.",
    actions: [
      "Removal of dead code and a split into business modules: network, matching, retailer database, commission statement.",
      "Parameterised SQL queries, multi-criteria filters and indicators on the commissions page.",
      "Excel and CSV export of the results."
    ],
    results: [["-80%", "of code"], ["5", "business modules"]]
  },
  "factures-pdf": {
    title: "PDF invoice portal",
    tagline: "Search, preview and download invoices, with an audit log.",
    problem: "Invoices were scattered across several network folders, with no record of who opened them.",
    actions: [
      "Eight invoice categories, search, and PDF preview in the browser.",
      "A SQL log of every download.",
      "Protection against access to files outside the allowed scope."
    ],
    results: [["8", "invoice categories"]]
  },
  "extraction": {
    title: "Data extraction platform",
    tagline: "Extraction by activity: Fundex, Damane Pay, Adria, Change, MTO.",
    problem: "Every extraction request went through a query written by hand.",
    actions: [
      "One interface per activity, with period and criteria filters.",
      "Direct export of the results for the business teams."
    ],
    results: [["5", "activities covered"]]
  },
  "etl-pentaho": {
    title: "Pentaho ETL flows",
    tagline: "Integration of heterogeneous files into tables that can be used.",
    problem: "Bank return files and transactions arrived in different formats (Excel, CSV, databases).",
    actions: [
      "Design of Pentaho Data Integration transformations and jobs.",
      "Cleaning, checks and loading of bank return files and transactions.",
      "Loading of tables ready for reporting."
    ]
  },
  "rpa": {
    title: "Report automation (RPA)",
    tagline: "Robots that collect partner-platform reports every day.",
    problem: "Daily reports from partner platforms were downloaded by hand, every day.",
    actions: [
      "Selenium scripts for three partner platforms: sign-in, navigation, download.",
      "Scheduled runs and automatic filing of the files collected."
    ],
    results: [["3", "platforms automated"]],
    stack: ["Python", "Selenium", "Windows Task Scheduler"]
  },
  "devis-ai": {
    tagline: "LLM-assisted quotes, in three price ranges.",
    problem: "Writing quotes took time and lacked consistency.",
    actions: [
      "Django REST API with JWT authentication and role management.",
      "LLM generation of three variants (economy, standard, premium) from a client brief.",
      "PDF export of the quote and a Next.js interface."
    ],
    results: [["3", "variants per quote"]]
  },
  "gsmag": {
    title: "GSMAG · business management software",
    tagline: "A multi-workstation desktop application and a multilingual showcase site.",
    problem: "Modernise a business-management application and its online presence.",
    actions: [
      "Version 1 of the software in C# .NET 8 (WinForms) with a PostgreSQL database and multi-client management.",
      "GSMAG showcase site and the ESSANET Academy site in French, English and Arabic, with a built-in conversational assistant."
    ],
    results: [["3", "languages"]]
  },
  "gsmag-web": {
    title: "GSMAG showcase website",
    tagline: "Presentation of the software, its editions and downloads, in three languages.",
    problem: "GSMAG needed a showcase to explain the editions, the features and the downloads.",
    actions: [
      "Site in French, English and Arabic: home, Mono, Network, Server and Android editions, features and downloads.",
      "Access to the client area and a direct link to ESSANET Academy training."
    ],
    results: [["3", "languages"]]
  },
  "essanet-academy": {
    title: "ESSANET Academy",
    tagline: "GSMAG course platform: modules, chapters, quizzes and progress tracking.",
    problem: "Clients and trainers needed an online path to learn GSMAG, module by module.",
    actions: [
      "Path: an introductory course, then master files, stock, sales, purchases and the cash register.",
      "Chapters, practical steps and quizzes, with progress tracking.",
      "A trainer area and a conversational assistant, in French, English and Arabic."
    ],
    results: [["5", "GSMAG modules"]]
  },
  "foodpassport": {
    tagline: "An explainable food-recommendation engine, with a conversational chef.",
    org: "Université Mundiapolis",
    team: "Team project (3 people). My role: full stack and user experience.",
    problem: "Suggest dishes from around the world based on what the user has at home, without letting the language model invent recipes or ignore allergies.",
    actions: [
      "Deterministic scoring engine: available ingredients, time, diet, with a strict allergen filter.",
      "The LLM explains the ranking and suggests adaptations, but never decides the score.",
      "Guardrails: off-topic requests are refused, no invented recipes, answers grounded in the corpus.",
      "Evaluation of two prompt versions on 12 test scenarios."
    ],
    results: [["12/12", "scenarios passed (versus 5/12 in V1)"], ["16", "automated tests"], ["11", "countries represented"]]
  },
  "rag-scolarite": {
    title: "Academic-rules assistant (RAG)",
    tagline: "Sourced answers on university regulations, with verified citations.",
    team: "Built as a pair.",
    problem: "Find a precise rule quickly inside long PDF documents that contain many tables.",
    actions: [
      "PDF extraction and rewriting of tables into full sentences so they stay searchable.",
      "Comparison of two splits: fixed size (102 segments) and document structure (166 segments).",
      "Multilingual embeddings, a Chroma vector store, and a relevance threshold that refuses questions outside the corpus.",
      "A check that every returned citation really exists in the source."
    ],
    results: [["1.00", "Hit@k (structural split)"], ["0.85", "MRR versus 0.78 for fixed size"]]
  },
  "tp-embeddings": {
    title: "Embeddings and RAG with LangChain",
    tagline: "Zero-shot classification, multilingual similarity and a semantic FAQ.",
    problem: "Measure what embeddings provide without task-specific training.",
    actions: [
      "Zero-shot classification by cosine similarity.",
      "Multilingual search and a FAQ with a confidence threshold.",
      "A LangChain + Chroma RAG chain with a guardrail test."
    ],
    results: [["90%", "zero-shot accuracy"], ["5/5", "questions correctly retrieved"]]
  },
  "keras": {
    title: "Neural networks with Keras",
    tagline: "Regression and classification on academic-results data.",
    problem: "Compare a dense neural network on a regression task and a classification task.",
    actions: ["Data preparation and normalisation.", "Dense architecture, and a loss function and metrics chosen for each task."]
  },
  "film-reco": {
    title: "Film recommendation and interactive PCA",
    tagline: "TF-IDF, clustering and dimensionality reduction in a Streamlit app.",
    problem: "Recommend films close to a given title and show the structure of the catalogue.",
    actions: ["TF-IDF vectorisation and cosine similarity.", "K-Means grouping and PCA projection.", "A second app dedicated to exploring a PCA."]
  },
  "dw-hotel": {
    title: "Data warehouse for a hotel chain",
    tagline: "Star schema, ETL loading and Power BI dashboards.",
    team: "Team project.",
    problem: "Steer a hotel chain's activity from scattered sources.",
    actions: ["Dimensional modelling (facts and dimensions).", "Pentaho flows into containerised PostgreSQL.", "Power BI dashboards: occupancy, revenue, seasonality."]
  },
  "odoo": {
    title: "Odoo module for event-equipment rental",
    tagline: "A complete ERP module: bookings, QR codes, reports and indicators.",
    problem: "Manage equipment rental for events: availability, bookings, returns and invoicing.",
    actions: [
      "About a dozen business models (equipment, booking, event, client, return).",
      "A QR code per item to track check-out and return.",
      "Five QWeb PDF reports and an indicator dashboard.",
      "Three access profiles with security rules."
    ],
    results: [["12", "business models"], ["5", "PDF reports"], ["3", "profiles"]]
  },
  "algofusion": {
    tagline: "A search engine, Huffman compression and Dijkstra's shortest path.",
    problem: "Make classic algorithms visible and usable.",
    actions: ["Search across a corpus.", "Huffman compression and decompression.", "Route calculation with Dijkstra."]
  },
  "mlops-docker": {
    title: "Taking an ML model to production with Docker",
    tagline: "From a notebook to a containerised API, optimised and scanned.",
    problem: "Move a classification model (income, Adult Income dataset) to a service ready for production.",
    actions: [
      "Training and the prediction API separated into two images.",
      "Step-by-step optimisation: slim image, layer cache, dependency install.",
      "Docker Compose orchestration and a vulnerability scan with Trivy."
    ],
    results: [["624 → 173", "MB image size"], ["85 → 14 s", "rebuild time"], ["0.93", "AUC"], ["0.88", "accuracy"]]
  },
  "iris-redis": {
    title: "Prediction API with a Redis cache",
    tagline: "A containerised service with persistent statistics.",
    problem: "Keep a prediction API's usage statistics across restarts.",
    actions: ["A containerised classification API.", "Redis with AOF persistence through Docker Compose.", "Tests of stop, restart and volume removal."]
  },
  "zabbix-aws": {
    title: "Zabbix monitoring on AWS",
    tagline: "A custom network and centralised monitoring.",
    problem: "Monitor several servers in the cloud from one place.",
    actions: ["VPC, subnets and security groups.", "Three EC2 instances.", "A Zabbix server under Docker Compose and agents on the monitored machines."],
    results: [["3", "EC2 instances"]]
  },
  "glpi-aws": {
    title: "GLPI and WordPress on AWS",
    tagline: "Web applications deployed on EC2 instances.",
    problem: "Deploy an asset-management tool and a website in the cloud.",
    actions: ["LAMP installed on EC2.", "GLPI and WordPress deployed, with the databases configured."]
  },
  "packetfence": {
    title: "802.1X network access control",
    tagline: "Workstation authentication with PacketFence and Active Directory.",
    problem: "Allow onto the network only workstations and users that are recognised.",
    actions: ["PacketFence set up.", "802.1X authentication backed by Active Directory.", "Access-profile management."]
  },
  "mqtt": {
    title: "Smart Factory with MQTT",
    tagline: "Industrial sensor readings streamed in real time.",
    problem: "Collect and broadcast sensor readings from a simulated factory.",
    actions: ["MQTT broker, publish and subscribe by topic.", "Processing and display of the readings."]
  },
  "blockchain": {
    title: "Blockchain: proof of work and proof of stake",
    tagline: "An implementation of a blockchain and its consensus mechanisms.",
    problem: "Understand how a blockchain works from the inside.",
    actions: ["Blocks, hashing and mining by proof of work.", "A proof-of-stake mechanism."],
    stack: ["Python", "Cryptography"]
  },
  "git": {
    title: "Team Git workflow",
    tagline: "Branches, reviews and conflict resolution.",
    problem: "Practise a collaborative workflow.",
    actions: ["Feature branches and pull requests.", "Conflict resolution and a clean history."]
  },
  "event-manager": {
    tagline: "A Kanban board for events, with generated suggestions.",
    team: "Team project. My part: refactoring, code quality and documentation.",
    problem: "Organise an event's tasks and suggest relevant actions.",
    actions: ["Refactoring of the Flask code.", "Fixes for quality issues found by static analysis.", "Technical documentation."]
  },
  "tests-dab": {
    title: "Test campaign for an ATM",
    tagline: "Test cases, execution and defect tracking.",
    problem: "Validate the behaviour of a cash machine.",
    actions: ["Functional test cases written.", "Defects tracked in MantisBT."],
    stack: ["MantisBT", "Functional testing"]
  },
  "anti-gaspi": {
    title: "Anti-waste venture project",
    tagline: "Field study and a platform to resell restaurant leftovers.",
    problem: "Measure food waste in restaurants and propose a solution.",
    actions: ["Observation of six restaurants and an estimate of the losses.", "Proposal of a platform to sell leftovers at a reduced price."],
    results: [["15-20%", "of food lost"], ["~6,165 MAD", "lost per day"]],
    stack: ["Market study", "Business model"]
  },
  "coran": {
    title: "Wanis · Quran application",
    tagline: "Identify a recitation from the voice, online.",
    org: "Personal project",
    problem: "Recognise the verse being recited from a simple recording, and bring reading, prayer times and invocations into one application.",
    actions: [
      "Transcription of the audio into Arabic, and text normalisation (diacritics, spelling variants).",
      "Search for the closest verse by Levenshtein distance.",
      "Web and mobile application: reading, prayer times, qibla, adhkar."
    ],
    results: [["Online", "publicly available"]]
  },
  "studio-photo": {
    title: "Product photo studio",
    tagline: "Automatic cut-out and professional backgrounds for product photos.",
    org: "Personal project",
    problem: "Get clean product photos for online selling, without a studio.",
    actions: [
      "Cut-out by segmentation (U²-Net, ISNet).",
      "Eight backgrounds to choose from and high-definition export (2,400 px).",
      "Reading of text on the image by OCR.",
      "Access from a phone through a QR code."
    ],
    results: [["8", "backgrounds available"], ["2,400 px", "output"]]
  },
  "golden-spark": {
    tagline: "An online jewellery shop: e-commerce site and day-to-day steering.",
    date: "2025 – today",
    problem: "Launch an online shop and keep it running.",
    actions: ["E-commerce site: catalogue, cart, orders.", "Instagram and TikTok content strategy, and tracking of orders and performance."],
    stack: ["React 19", "Flask", "Digital marketing"]
  },
  "win2lang": {
    tagline: "Conversion of WinDev code to C# .NET.",
    org: "Personal project",
    problem: "Make it easier to migrate WinDev applications to a modern environment.",
    actions: ["Analysis of the WinDev source code.", "Generation of equivalent C# .NET 8 code."],
    stack: ["C#", ".NET 8", "Parsing"]
  },
  "lumen": {
    tagline: "Produce a video from a text script.",
    org: "Personal project",
    problem: "Go from a written script to an edited video.",
    actions: ["Split the script into scenes.", "Generate the shots and assemble them with ffmpeg."]
  },
  "pdf-translate": {
    title: "PDF document translator",
    tagline: "Translation that keeps the layout, including for scanned PDFs.",
    org: "Personal project",
    problem: "Translate a PDF without losing its layout.",
    actions: ["Extraction of positioned text.", "OCR for scanned pages.", "The translation is put back in its original place."]
  }
};

I18N.ar.projects = {
  "marsa-insight": {
    tagline: "مساعد قرار يحوّل سؤالاً مهنياً إلى تحليل بالأرقام.",
    org: "مرسى المغرب · مديرية نظم المعلومات",
    team: "مشروع أُنجز ثنائياً مع ياسر نادي.",
    problem: "كانت الفرق المهنية تعتمد على مديرية نظم المعلومات في كل استخراج لبيانات الميناء (الحركة، المحطات، التكاليف). الهدف: تمكينها من استجواب القاعدة مباشرة باللغة الطبيعية، دون المساس بأمن البيانات.",
    actions: [
      "مسار وكيل بـ LangGraph: فهم السؤال، طلب توضيح إذا كان غامضاً، توليد SQL، التحقق، التنفيذ ثم التفسير.",
      "سياق مهني عبر RAG (ChromaDB): المخطط والتعريفات وأمثلة الاستعلامات تُحقن لحظة التوليد.",
      "أمن متعدد الطبقات: التحقق من شجرة SQL بـ sqlglot، دور PostgreSQL للقراءة فقط، معاملة للقراءة فقط، مهلة 10 ثوانٍ، وسقف 5000 سطر.",
      "تحكم في الوصول حسب الدور (مدير، موارد بشرية، عمليات مينائية، مالية، لوجستيك) ومصادقة JWT.",
      "واجهة React: حوار، رسوم Plotly، لوحة قيادة، مقارنة الفترات والمواقع، تقرير قابل للتصدير، إملاء صوتي، ونسخ بالفرنسية والإنجليزية والعربية."
    ],
    results: [["84", "اختباراً آلياً"], ["5", "أدوار مهنية"], ["3", "لغات منها العربية"], ["10 ث", "أقصى مهلة لكل استعلام"]]
  },
  "erp-launchpad": {
    title: "بوابة ERP Launchpad",
    tagline: "نقطة دخول واحدة لكل التطبيقات الداخلية.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "خلال التدريب تكاثرت التطبيقات الداخلية: الاستخراج وRIB وSIMT/MAD والعمولات والفواتير. لكل منها عنوانه، فصعُب الوصول على الفرق. كان يلزم مكان واحد يجمعها.",
    actions: [
      "بوابة على شكل لوحة إطلاق: بطاقة لكل تطبيق، مع الصنف والوصف والحالة.",
      "فضاءان منفصلان، داخلي وخارجي، مع إظهار يُضبط لكل تطبيق.",
      "وضع مدير محمي برمز موقّع (HMAC-SHA256): إضافة وتعديل وتعطيل وإعادة ترتيب البطاقات بالسحب.",
      "شريط ترحيب يمكن تعديله دون إعادة نشر."
    ],
    results: [["1", "نقطة وصول واحدة"], ["2", "فضاءان داخلي / خارجي"]]
  },
  "gestion-rib": {
    title: "تطبيق تدبير RIB",
    tagline: "مسار مصادقة من المكتب الخلفي إلى المطابقة، متتبَّع بالكامل.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "كانت معطيات RIB الخاصة بالشركاء تُدخل وتُراجع يدوياً، دون سجل للتعديلات ولا رقابة منتظمة.",
    actions: [
      "الإدخال والتعديل من المكتب الخلفي، والمصادقة أو الرفض من المطابقة.",
      "فحص آلي لـ RIB المغربية: 24 رقماً ومفتاح مراقبة modulo 97.",
      "كشف التكرار قبل الحفظ.",
      "سجل تدقيق كامل (من، ماذا، متى) وتصدير.",
      "أربعة ملفات وصول واختبارات وحدوية على قواعد التحقق."
    ],
    results: [["4", "ملفات وصول"], ["24", "رقماً مراقَباً + مفتاح modulo 97"]]
  },
  "simt-mad": {
    title: "مولّد ملفات SIMT / MAD",
    tagline: "من ملف Excel إلى ملف بنكي معياري، دون إعادة إدخال.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "كانت ملفات التحويل بالصيغة البنكية تُعد يدوياً، مع خطر الخطأ في كل خطوة.",
    actions: [
      "استيراد Excel أو CSV مع التعرف على تنويعات أسماء الأعمدة.",
      "مطابقة آلية مع مرجع RIB وعزل الأسطر المرفوضة.",
      "توليد الملف ثابت العرض الذي ينتظره البنك، مع معاينة قبل التنزيل.",
      "سجل الملفات المولَّدة مع تتبع صاحبها؛ التطبيق منشور على خادم داخلي."
    ],
    results: [["2", "صيغة بنكية: SIMT وMAD"]]
  },
  "cms-crc": {
    title: "CMS CRC · كشوف العمولات",
    tagline: "إعادة بناء تطبيق أحادي الكتلة بهندسة وحدات.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "تطبيق استشارة من 5500 سطر، منها نحو 4400 لم تعد مستعملة، صار صعب الصيانة.",
    actions: [
      "حذف الشيفرة الميتة وتقسيمها إلى وحدات مهنية: الشبكة، المطابقات، قاعدة التجار، كشف العمولات.",
      "استعلامات SQL بمعاملات، ومرشحات متعددة المعايير ومؤشرات في صفحة العمولات.",
      "تصدير النتائج إلى Excel وCSV."
    ],
    results: [["-80%", "من الشيفرة"], ["5", "وحدات مهنية"]]
  },
  "factures-pdf": {
    title: "بوابة فواتير PDF",
    tagline: "بحث ومعاينة وتنزيل الفواتير، مع سجل تدقيق.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "كانت الفواتير مبعثرة في عدة مجلدات شبكية، دون أثر لمن اطلع عليها.",
    actions: [
      "ثماني فئات من الفواتير، مع بحث ومعاينة PDF في المتصفح.",
      "سجل SQL لكل تنزيل.",
      "حماية من الوصول إلى ملفات خارج النطاق المسموح."
    ],
    results: [["8", "فئات فواتير"]]
  },
  "extraction": {
    title: "منصة استخراج البيانات",
    tagline: "استخراج حسب النشاط: Fundex وDamane Pay وAdria وChange وMTO.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "كل طلب استخراج كان يمر عبر استعلام يُكتب يدوياً.",
    actions: [
      "واجهة لكل نشاط مع مرشحات الفترة والمعايير.",
      "تصدير مباشر للنتائج إلى الفرق المهنية."
    ],
    results: [["5", "أنشطة مغطاة"]]
  },
  "etl-pentaho": {
    title: "تدفقات ETL Pentaho",
    tagline: "دمج ملفات غير متجانسة في جداول قابلة للاستعمال.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "ملفات الرجوع البنكية والمعاملات كانت تصل بصيغ مختلفة (Excel وCSV وقواعد).",
    actions: [
      "تصميم تحويلات ومهام Pentaho Data Integration.",
      "تنظيف وفحص وتحميل ملفات الرجوع البنكية والمعاملات.",
      "تغذية جداول جاهزة للتقارير."
    ]
  },
  "rpa": {
    title: "أتمتة التقارير (RPA)",
    tagline: "روبوتات تجلب كل يوم تقارير منصات الشركاء.",
    org: "Damane Cash · بنك أفريقيا",
    problem: "التقارير اليومية لمنصات الشركاء كانت تُنزَّل يدوياً، كل يوم.",
    actions: [
      "سكربتات Selenium لثلاث منصات شريكة: اتصال وتصفح وتنزيل.",
      "تشغيل مجدول وترتيب آلي للملفات المسترجعة."
    ],
    results: [["3", "منصات مؤتمتة"]],
    stack: ["Python", "Selenium", "مجدول Windows"]
  },
  "devis-ai": {
    tagline: "إنشاء عروض أسعار بمساعدة نموذج لغوي، في ثلاث شرائح سعر.",
    problem: "صياغة عروض الأسعار كانت تستغرق وقتاً وتفتقر إلى التجانس.",
    actions: [
      "واجهة REST بـ Django مع مصادقة JWT وتدبير الأدوار.",
      "توليد ثلاث نسخ بالنموذج اللغوي (اقتصادية، قياسية، مميزة) انطلاقاً من حاجة الزبون.",
      "تصدير PDF للعرض وواجهة Next.js."
    ],
    results: [["3", "نسخ لكل عرض"]]
  },
  "gsmag": {
    title: "GSMAG · برنامج التدبير التجاري",
    tagline: "تطبيق مكتبي متعدد المناصب وموقع عرض متعدد اللغات.",
    problem: "تحديث برنامج تدبير تجاري وحضوره على الإنترنت.",
    actions: [
      "الإصدار 1 من البرنامج بـ C# .NET 8 (WinForms) مع قاعدة PostgreSQL وتدبير عدة زبائن.",
      "موقع عرض GSMAG وموقع ESSANET Academy بالفرنسية والإنجليزية والعربية، مع مساعد حواري مدمج."
    ],
    results: [["3", "لغات"]]
  },
  "gsmag-web": {
    title: "موقع عرض GSMAG",
    tagline: "تقديم البرنامج والإصدارات والتنزيلات، بثلاث لغات.",
    problem: "كان GSMAG يحتاج إلى واجهة تشرح الإصدارات والوظائف والتنزيلات.",
    actions: [
      "موقع بالفرنسية والإنجليزية والعربية: الاستقبال، وإصدارات Mono والشبكات والخادم وAndroid، والوظائف والتنزيلات.",
      "وصول إلى فضاء الزبون ورابط مباشر إلى تكوين ESSANET Academy."
    ],
    results: [["3", "لغات"]]
  },
  "essanet-academy": {
    title: "ESSANET Academy",
    tagline: "منصة دروس GSMAG: وحدات وفصول واختبارات وتتبع للتقدم.",
    problem: "كان الزبائن والمكوّنون يحتاجون إلى مسار عبر الإنترنت لتعلّم GSMAG، وحدة بوحدة.",
    actions: [
      "المسار: درس تمهيدي، ثم الملفات الأساسية والمخزون والمبيعات والمشتريات والصندوق.",
      "فصول وخطوات عملية واختبارات، مع تتبع التقدم.",
      "فضاء للمكوّن ومساعد حواري، بالفرنسية والإنجليزية والعربية."
    ],
    results: [["5", "وحدات GSMAG"]]
  },
  "foodpassport": {
    tagline: "محرك توصية طهي قابل للتفسير، مع طاهٍ حواري.",
    org: "جامعة مونديابوليس",
    team: "مشروع فريق (3 أشخاص). دوري: التطوير الكامل وتجربة المستخدم.",
    problem: "اقتراح أطباق من العالم انطلاقاً مما يملكه المستخدم في بيته، دون أن يخترع النموذج اللغوي وصفات أو يتجاهل الحساسية.",
    actions: [
      "محرك تنقيط حتمي: المكونات المتوفرة والوقت والنظام الغذائي، مع مرشح صارم لمسببات الحساسية.",
      "النموذج اللغوي يشرح الترتيب ويقترح تعديلات، لكنه لا يقرر النقطة أبداً.",
      "حواجز: رفض ما يخرج عن الموضوع، وعدم اختراع وصفات، وإجابات مبنية على المتن.",
      "تقييم نسختين من الموجه على 12 سيناريو اختبار."
    ],
    results: [["12/12", "سيناريوهات ناجحة (مقابل 5/12 في النسخة 1)"], ["16", "اختباراً آلياً"], ["11", "بلداً"]]
  },
  "rag-scolarite": {
    title: "مساعد الشؤون الدراسية (RAG)",
    tagline: "أجوبة موثّقة عن أنظمة الجامعة، مع استشهادات متحقق منها.",
    org: "جامعة مونديابوليس",
    team: "مشروع أُنجز ثنائياً.",
    problem: "العثور بسرعة على قاعدة دقيقة داخل وثائق PDF طويلة تضم جداول كثيرة.",
    actions: [
      "استخراج PDF وإعادة كتابة الجداول جملاً كاملة لتبقى قابلة للبحث.",
      "مقارنة تقطيعين: حجم ثابت (102 مقطع) وبنية الوثيقة (166 مقطعاً).",
      "تضمينات متعددة اللغات وقاعدة Chroma وعتبة ملاءمة لرفض الأسئلة خارج المتن.",
      "التحقق من أن كل استشهاد مُعاد موجود فعلاً في المصدر."
    ],
    results: [["1.00", "Hit@k (التقطيع البنيوي)"], ["0.85", "MRR مقابل 0.78 بالحجم الثابت"]]
  },
  "tp-embeddings": {
    title: "التضمينات وRAG مع LangChain",
    tagline: "تصنيف دون تدريب، وتشابه متعدد اللغات، وأسئلة شائعة دلالية.",
    org: "جامعة مونديابوليس",
    problem: "قياس ما تقدمه التضمينات دون تدريب خاص بالمهمة.",
    actions: [
      "تصنيف دون تدريب بالتشابه الجيبي.",
      "بحث متعدد اللغات وأسئلة شائعة بعتبة ثقة.",
      "سلسلة RAG بـ LangChain وChroma مع اختبار للحاجز."
    ],
    results: [["90%", "دقة دون تدريب"], ["5/5", "أسئلة استُرجعت بشكل صحيح"]]
  },
  "keras": {
    title: "شبكات عصبية مع Keras",
    tagline: "انحدار وتصنيف على بيانات النتائج الدراسية.",
    org: "جامعة مونديابوليس",
    problem: "مقارنة شبكة عصبية كثيفة في مهمة انحدار ومهمة تصنيف.",
    actions: ["تحضير البيانات وتطبيعها.", "هندسة كثيفة، واختيار دالة الخسارة والمقاييس المناسبة لكل مهمة."]
  },
  "film-reco": {
    title: "توصية الأفلام وتحليل المكونات الرئيسي",
    tagline: "TF-IDF والتجميع وخفض الأبعاد في تطبيق Streamlit.",
    org: "جامعة مونديابوليس",
    problem: "اقتراح أفلام قريبة من عنوان معيّن وإظهار بنية الفهرس.",
    actions: ["تمثيل TF-IDF والتشابه الجيبي.", "تجميع K-Means وإسقاط ACP.", "تطبيق ثانٍ مخصص لاستكشاف التحليل."]
  },
  "dw-hotel": {
    title: "مستودع بيانات لسلسلة فنادق",
    tagline: "نموذج نجمي وتحميل ETL ولوحات Power BI.",
    org: "جامعة مونديابوليس",
    team: "مشروع فريق.",
    problem: "قيادة نشاط سلسلة فنادق انطلاقاً من مصادر متفرقة.",
    actions: ["نمذجة بُعدية (وقائع وأبعاد).", "تدفقات Pentaho نحو PostgreSQL داخل حاوية.", "لوحات Power BI: الإشغال ورقم المعاملات والموسمية."]
  },
  "odoo": {
    title: "وحدة Odoo لكراء معدات التظاهرات",
    tagline: "وحدة ERP كاملة: حجوزات ورموز QR وتقارير ومؤشرات.",
    org: "جامعة مونديابوليس",
    problem: "تدبير كراء المعدات للتظاهرات: التوفر والحجوزات والإرجاع والفوترة.",
    actions: [
      "نحو اثني عشر نموذجاً مهنياً (معدات، حجز، تظاهرة، زبون، إرجاع).",
      "رمز QR لكل معدة لتتبع الخروج والرجوع.",
      "خمسة تقارير PDF بـ QWeb ولوحة مؤشرات.",
      "ثلاثة ملفات وصول مع قواعد أمن."
    ],
    results: [["12", "نماذج مهنية"], ["5", "تقارير PDF"], ["3", "ملفات"]]
  },
  "algofusion": {
    tagline: "محرك بحث وضغط Huffman وأقصر مسار Dijkstra.",
    org: "جامعة مونديابوليس",
    problem: "جعل الخوارزميات الكلاسيكية مرئية وقابلة للاستعمال.",
    actions: ["محرك بحث في متن.", "ضغط وفك ضغط Huffman.", "حساب مسارات بـ Dijkstra."]
  },
  "mlops-docker": {
    title: "تصنيع نموذج تعلم آلي مع Docker",
    tagline: "من الدفتر إلى واجهة برمجية داخل حاوية، محسَّنة ومفحوصة.",
    org: "جامعة مونديابوليس",
    problem: "الانتقال من نموذج تصنيف (الدخل، مجموعة Adult Income) إلى خدمة جاهزة للإنتاج.",
    actions: [
      "التدريب وواجهة التنبؤ منفصلان في صورتين.",
      "تحسين خطوة بخطوة: صورة slim وتخزين الطبقات وتثبيت التبعيات.",
      "تنسيق Docker Compose وفحص الثغرات بـ Trivy."
    ],
    results: [["624 → 173", "ميغابايت للصورة"], ["85 → 14 ث", "لإعادة البناء"], ["0.93", "AUC"], ["0.88", "accuracy"]]
  },
  "iris-redis": {
    title: "واجهة تنبؤ مع ذاكرة Redis",
    tagline: "خدمة داخل حاوية بإحصاءات دائمة.",
    org: "جامعة مونديابوليس",
    problem: "الاحتفاظ بإحصاءات استعمال واجهة تنبؤ بين إعادة تشغيل وأخرى.",
    actions: ["واجهة تصنيف داخل حاوية.", "Redis مع استمرارية AOF عبر Docker Compose.", "اختبارات الإيقاف وإعادة التشغيل وحذف المجلدات."]
  },
  "zabbix-aws": {
    title: "مراقبة Zabbix على AWS",
    tagline: "بنية شبكة مخصصة ومراقبة مركزية.",
    org: "جامعة مونديابوليس",
    problem: "مراقبة عدة خوادم في السحابة من نقطة واحدة.",
    actions: ["VPC وشبكات فرعية ومجموعات أمن.", "ثلاث نسخ EC2.", "خادم Zabbix عبر Docker Compose ووكلاء على الأجهزة المراقَبة."],
    results: [["3", "نسخ EC2"]]
  },
  "glpi-aws": {
    title: "GLPI وWordPress على AWS",
    tagline: "نشر تطبيقات ويب على نسخ EC2.",
    org: "جامعة مونديابوليس",
    problem: "نشر أداة تدبير العتاد وموقع ويب في السحابة.",
    actions: ["تثبيت LAMP على EC2.", "نشر GLPI وWordPress وضبط قواعد البيانات."]
  },
  "packetfence": {
    title: "التحكم في الوصول إلى الشبكة 802.1X",
    tagline: "مصادقة الأجهزة مع PacketFence وActive Directory.",
    org: "جامعة مونديابوليس",
    problem: "السماح بالشبكة فقط للأجهزة والمستخدمين المعروفين.",
    actions: ["إعداد PacketFence.", "مصادقة 802.1X مستندة إلى Active Directory.", "تدبير ملفات الوصول."]
  },
  "mqtt": {
    title: "مصنع ذكي مع MQTT",
    tagline: "رفع قياسات حساسات صناعية في الزمن الحقيقي.",
    org: "جامعة مونديابوليس",
    problem: "جمع ونشر قياسات حساسات مصنع محاكى.",
    actions: ["وسيط MQTT ونشر واشتراك حسب المواضيع.", "معالجة وعرض القياسات."]
  },
  "blockchain": {
    title: "سلسلة كتل: إثبات العمل وإثبات الحصة",
    tagline: "تنفيذ سلسلة كتل وآليات الإجماع الخاصة بها.",
    org: "جامعة مونديابوليس",
    problem: "فهم طريقة عمل سلسلة الكتل من الداخل.",
    actions: ["كتل وتجزئة وتعدين بإثبات العمل.", "آلية إثبات الحصة."],
    stack: ["Python", "تعمية"]
  },
  "git": {
    title: "سير عمل Git ضمن فريق",
    tagline: "فروع ومراجعات وحل التعارضات.",
    org: "جامعة مونديابوليس",
    problem: "تطبيق سير عمل تعاوني.",
    actions: ["فروع للميزات وطلبات سحب.", "حل التعارضات وتاريخ نظيف."]
  },
  "event-manager": {
    tagline: "لوحة Kanban لتدبير التظاهرات مع اقتراحات مولَّدة.",
    org: "جامعة مونديابوليس",
    team: "مشروع فريق. مساهمتي: إعادة الهيكلة وجودة الشيفرة والتوثيق.",
    problem: "تنظيم مهام تظاهرة واقتراح إجراءات مناسبة.",
    actions: ["إعادة هيكلة شيفرة Flask.", "تصحيح عيوب الجودة التي رصدها التحليل الثابت.", "توثيق تقني."]
  },
  "tests-dab": {
    title: "حملة اختبارات لموزع آلي",
    tagline: "حالات اختبار وتنفيذ وتتبع العيوب.",
    org: "جامعة مونديابوليس",
    problem: "التحقق من سلوك موزع أوراق نقدية.",
    actions: ["كتابة حالات الاختبار الوظيفية.", "تتبع العيوب في MantisBT."],
    stack: ["MantisBT", "اختبارات وظيفية"]
  },
  "anti-gaspi": {
    title: "مشروع مقاولاتي ضد التبذير",
    tagline: "دراسة ميدانية ومنصة لإعادة بيع فائض المطاعم.",
    org: "جامعة مونديابوليس",
    problem: "قياس التبذير الغذائي في المطاعم واقتراح حل.",
    actions: ["ملاحظة ستة مطاعم وتقدير الخسائر.", "اقتراح منصة لبيع الفائض بسعر مخفّض."],
    results: [["15-20%", "من الطعام المهدور"], ["~6 165 MAD", "خسائر في اليوم"]],
    stack: ["دراسة السوق", "نموذج أعمال"]
  },
  "coran": {
    title: "وانس · تطبيق القرآن",
    tagline: "التعرّف على تلاوة انطلاقاً من الصوت، عبر الإنترنت.",
    org: "مشروع شخصي",
    problem: "التعرّف على الآية المتلوّة من تسجيل بسيط، وجمع القراءة ومواقيت الصلاة والأذكار في تطبيق واحد.",
    actions: [
      "تفريغ الصوت إلى العربية وتطبيع النص (الحركات وتنويعات الكتابة).",
      "البحث عن أقرب آية بمسافة Levenshtein.",
      "تطبيق ويب وهاتف: القراءة ومواقيت الصلاة والقبلة والأذكار."
    ],
    results: [["متاح", "للعموم على الإنترنت"]]
  },
  "studio-photo": {
    title: "استوديو صور المنتجات",
    tagline: "فصل تلقائي وخلفيات مهنية لصور المنتجات.",
    org: "مشروع شخصي",
    problem: "الحصول على صور منتجات نظيفة للبيع عبر الإنترنت، دون استوديو.",
    actions: [
      "فصل بالتجزئة (U²-Net وISNet).",
      "ثماني خلفيات للاختيار وتصدير عالي الدقة (2400 بكسل).",
      "قراءة النص الموجود على الصورة بـ OCR.",
      "الوصول من الهاتف عبر رمز QR."
    ],
    results: [["8", "خلفيات متاحة"], ["2400 بكسل", "في المخرج"]]
  },
  "golden-spark": {
    tagline: "متجر مجوهرات على الإنترنت: موقع تجارة إلكترونية وقيادة النشاط.",
    date: "2025 – اليوم",
    problem: "إطلاق متجر على الإنترنت والمحافظة على نشاطه.",
    actions: ["موقع تجارة إلكترونية: فهرس وسلة وطلبات.", "استراتيجية محتوى على Instagram وTikTok، وتتبع الطلبات والأداء."],
    stack: ["React 19", "Flask", "تسويق رقمي"]
  },
  "win2lang": {
    tagline: "تحويل شيفرة WinDev إلى C# .NET.",
    org: "مشروع شخصي",
    problem: "تيسير ترحيل تطبيقات WinDev إلى بيئة حديثة.",
    actions: ["تحليل الشيفرة المصدرية لـ WinDev.", "توليد شيفرة C# .NET 8 مكافئة."],
    stack: ["C#", ".NET 8", "تحليل نحوي"]
  },
  "lumen": {
    tagline: "إنتاج فيديو انطلاقاً من نص.",
    org: "مشروع شخصي",
    problem: "الانتقال من نص مكتوب إلى فيديو مركَّب.",
    actions: ["تقطيع النص إلى مشاهد.", "توليد اللقطات وتجميعها بـ ffmpeg."]
  },
  "pdf-translate": {
    title: "مترجم وثائق PDF",
    tagline: "ترجمة تحافظ على التنسيق، بما في ذلك ملفات PDF الممسوحة.",
    org: "مشروع شخصي",
    problem: "ترجمة ملف PDF دون فقدان تنسيقه.",
    actions: ["استخراج النص مع مواضعه.", "تعرّف ضوئي للصفحات الممسوحة.", "إعادة إدراج الترجمة في موضعها الأصلي."]
  }
};
