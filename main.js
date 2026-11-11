/* =========================================================
   Ahmed Serag Eldin — Portfolio
   Edit the DATA section below to change any content.
   Everything is bilingual: { en: '...', ar: '...' }
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. DATA  (edit me)
     --------------------------------------------------------- */
  var CDN = 'https://ms.hsoubcdn.com/uploads/';
  var M = function (p) { return CDN + p; };

  var PROJECTS = [
    {
      id: 'luster',
      cats: ['powerbi', 'client'],
      badge: { en: 'Client project', ar: 'مشروع لعميل' },
      title: { en: 'LUSTER — Inventory & Consumption Dashboard', ar: 'LUSTER — داشبورد المخزون والاستهلاك' },
      desc: {
        en: 'Five-page Power BI dashboard built from an Excel stock sheet. Tracks film rolls (PPF, tints, protection): available meters, low-stock and finished rolls, stagnant inventory ageing and consumption per job order — 367 rolls and 4,949 m consumed across 402 job orders.',
        ar: 'داشبورد Power BI من 5 صفحات مبني على شيت مخزون Excel. يتابع رولات الأفلام (PPF والتِنتات والحماية): الأمتار المتاحة، الرولات منخفضة المخزون والمنتهية، تقادم المخزون الراكد واستهلاك كل أمر تشغيل — 367 رول و4,949 متر مستهلك عبر 402 أمر تشغيل.'
      },
      tools: ['Power BI', 'DAX', 'Power Query', 'Excel'],
      shots: [
        { src: 'luster-home.png', t: { en: 'Landing page with custom navigation', ar: 'صفحة البداية مع تنقل مخصص' } },
        { src: 'luster-overview.png', t: { en: 'Overview — stock, new rolls and input errors', ar: 'نظرة عامة — المخزون والرولات الجديدة وأخطاء الإدخال' } },
        { src: 'luster-rolls.png', t: { en: 'Rolls status — filters, active / low stock / finished', ar: 'حالة الرولات — فلاتر، نشط / مخزون منخفض / منتهي' } },
        { src: 'luster-stagnant.png', t: { en: 'Stagnant inventory ageing by item', ar: 'تقادم المخزون الراكد حسب الصنف' } },
        { src: 'luster-usage.png', t: { en: 'Usage — consumption over time, by item and service', ar: 'الاستهلاك عبر الزمن وحسب الصنف والخدمة' } },
        { src: 'luster-joborders.png', t: { en: 'Job orders drill-down table', ar: 'جدول تفصيلي لأوامر التشغيل' } }
      ]
    },
    {
      id: 'dream',
      cats: ['powerbi', 'client'],
      badge: { en: 'Internship project', ar: 'مشروع التدريب' },
      title: { en: 'Alf Maskan Branch — Retail Performance', ar: 'فرع ألف مسكن — أداء المبيعات' },
      desc: {
        en: 'Built during my summer training inside the Dream 2000 retail sales team. Shows branch target vs achieved (48.5% of a $33.4M target), team ranking, weakest categories and a colour-coded drill-down table so the team can see where to focus first.',
        ar: 'اتبنى خلال التدريب الصيفي جوه فريق مبيعات Dream 2000. بيعرض تارجت الفرع مقابل المحقق (48.5% من تارجت 33.4 مليون$)، ترتيب الفريق، أضعف الفئات، وجدول تفصيلي بألوان الأداء عشان الفريق يعرف يركّز على إيه الأول.'
      },
      tools: ['Power BI', 'DAX', 'HTML visuals', 'UX design'],
      shots: [
        { src: 'dream-overview.png', t: { en: 'Overview — KPIs and team performance', ar: 'نظرة عامة — المؤشرات وأداء الفريق' } },
        { src: 'dream-sales.png', t: { en: 'Sales performance — filters and category table', ar: 'أداء المبيعات — فلاتر وجدول الفئات' } }
      ]
    },
    {
      id: 'amazon',
      cats: ['powerbi', 'python'],
      badge: { en: 'Power BI + Python', ar: 'Power BI + Python' },
      title: { en: 'Amazon Products BI Dashboard', ar: 'داشبورد منتجات أمازون' },
      desc: {
        en: '1,000 real Amazon products cleaned with Python & Pandas, then visualised in a 4-page dark-themed Power BI report: Overview, Pricing, Products & Brands, Ratings & Reviews — 20+ KPIs and advanced DAX for discounts, ranking and competition.',
        ar: '1000 منتج حقيقي من أمازون اتنضفوا بـ Python وPandas، وبعدها اتعرضوا في تقرير Power BI داكن من 4 صفحات: نظرة عامة، التسعير، المنتجات والعلامات، التقييمات والمراجعات — أكتر من 20 مؤشر وقياسات DAX متقدمة للخصومات والتصنيف والمنافسة.'
      },
      tools: ['Power BI', 'Python', 'Pandas', 'DAX', 'Power Query'],
      link: 'https://mostaql.com/portfolio/3512141-amazon-products-bi-dashboard',
      shots: [
        { src: 'amazon-1.png', remote: M('thumbnails/4268553/69ff62dc075ab/1.png'), t: { en: 'Overview', ar: 'نظرة عامة' } },
        { src: 'amazon-2.png', remote: M('portfolios/4268553/69ff62dc7d146/2.png'), t: { en: 'Pricing & discounts', ar: 'التسعير والخصومات' } },
        { src: 'amazon-3.png', remote: M('portfolios/4268553/69ff62dcb68ce/3.png'), t: { en: 'Products & brands', ar: 'المنتجات والعلامات التجارية' } },
        { src: 'amazon-4.png', remote: M('portfolios/4268553/69ff62dcf0fdb/4.png'), t: { en: 'Ratings & reviews', ar: 'التقييمات والمراجعات' } }
      ]
    },
    {
      id: 'churn',
      cats: ['powerbi', 'python'],
      badge: { en: 'Telecom', ar: 'اتصالات' },
      title: { en: 'Telecom Customer Churn Dashboard', ar: 'داشبورد تسرب عملاء الاتصالات' },
      desc: {
        en: 'Relational model and DAX over 7,043 customer records to find churn drivers. Month-to-month contracts were the biggest source of lost customers; an area chart maps monthly charges, tenure and churn, with demographic splits by gender and seniors.',
        ar: 'نموذج بيانات علائقي ومعادلات DAX على 7,043 سجل عميل لاكتشاف أسباب التسرب. العقود الشهرية كانت أكبر مصدر لفقدان العملاء، ورسم Area بيوضح العلاقة بين المدفوعات الشهرية ومدة البقاء والتسرب، مع تقسيم ديموغرافي حسب الجنس وكبار السن.'
      },
      tools: ['Power BI', 'DAX', 'SQL', 'Data modeling'],
      link: 'https://mostaql.com/portfolio/3464637-customer-churn-dashboard',
      shots: [
        { src: 'churn-1.png', remote: M('thumbnails/4268553/6ab75fa250836/Churnnnnn.png'), t: { en: 'Churn dashboard', ar: 'داشبورد التسرب' } }
      ]
    },
    {
      id: 'sales',
      cats: ['powerbi', 'python'],
      badge: { en: 'Retail', ar: 'تجزئة' },
      title: { en: 'Supermarket Sales Dashboard', ar: 'داشبورد مبيعات سوبر ماركت' },
      desc: {
        en: '5,010 orders cleaned with Python, then a modern dark Power BI app with a custom sidebar for navigation: overview, sales, profit and loss pages that highlight best sellers, weak branches and customer / payment behaviour.',
        ar: '5,010 طلب اتنضفوا بـ Python، وبعدها تطبيق Power BI داكن بقائمة جانبية مخصصة للتنقل: صفحات نظرة عامة، مبيعات، أرباح، وخسائر بتوضح الأكتر مبيعاً والفروع الضعيفة وسلوك العملاء وطرق الدفع.'
      },
      tools: ['Power BI', 'Python', 'Pandas', 'NumPy'],
      link: 'https://mostaql.com/portfolio/3035724-' + '%D8%AF%D8%A7%D8%B4%D8%A8%D9%88%D8%B1%D8%AF-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA-%D8%B3%D9%88%D8%A8%D8%B1-%D9%85%D8%A7%D8%B1%D9%83%D8%AA-sales-dashboard',
      shots: [
        { src: 'sales-1.png', remote: M('thumbnails/4268553/6aee415ee8bf9/1f.png'), t: { en: 'Overview', ar: 'نظرة عامة' } },
        { src: 'sales-2.png', remote: M('portfolios/4268553/6aee415f29f7c/2f.png'), t: { en: 'Sales', ar: 'المبيعات' } },
        { src: 'sales-3.png', remote: M('portfolios/4268553/6aee415f4eba9/3f.png'), t: { en: 'Profit', ar: 'الأرباح' } },
        { src: 'sales-4.png', remote: M('portfolios/4268553/6aee415f71cd8/4f.png'), t: { en: 'Loss', ar: 'الخسائر' } }
      ]
    },
    {
      id: 'covid',
      cats: ['python', 'ml', 'powerbi'],
      badge: { en: 'Python + ML', ar: 'Python + ML' },
      title: { en: 'COVID-19 Data Analysis & Forecast', ar: 'تحليل بيانات كورونا والتنبؤ' },
      desc: {
        en: 'Full data-science cycle on Our World in Data: cleaning large data, EDA on vaccination and recovery, country comparisons (Egypt, Saudi Arabia, USA, Italy…), correlation between vaccination and new cases, a machine-learning forecast and a Power BI summary dashboard.',
        ar: 'دورة علم بيانات كاملة على بيانات Our World in Data: تنظيف بيانات ضخمة، تحليل استكشافي للتطعيمات والتعافي، مقارنة بين دول (مصر والسعودية وأمريكا وإيطاليا…)، دراسة ارتباط التطعيم بانخفاض الحالات، نموذج تعلم آلي للتنبؤ، وداشبورد Power BI ملخص.'
      },
      tools: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Power BI'],
      link: 'https://mostaql.com/portfolio/3038294-' + '%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D9%81%D9%8A%D8%B1%D9%88%D8%B3-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7-covid-19',
      shots: [
        { src: 'covid-1.png', remote: M('thumbnails/4268553/6a1d287f0dec5/S.png'), t: { en: 'COVID-19 analysis', ar: 'تحليل كورونا' } }
      ]
    },
    {
      id: 'titanic',
      cats: ['python', 'ml'],
      badge: { en: 'Machine Learning', ar: 'تعلم آلي' },
      title: { en: 'Titanic Survival Prediction', ar: 'التنبؤ بنجاة ركاب تايتانيك' },
      desc: {
        en: 'Exploratory analysis of Titanic passenger data and a machine-learning model that predicts survival, built end-to-end in Python.',
        ar: 'تحليل استكشافي لبيانات ركاب تايتانيك ونموذج تعلم آلي بيتنبأ بالنجاة، متنفذ بالكامل بـ Python.'
      },
      tools: ['Python', 'Pandas', 'Machine Learning'],
      link: encodeURI('https://mostaql.com/portfolio/3035753-تحليل-بيانات-ركاب-سفينة-تايتانيك-وبناء-نموذج-ذكاء-اصطناعي-للتنبؤ-بالنجاة-python-ml'),
      shots: [
        { src: 'titanic-1.png', remote: M('thumbnails/4268553/691506686ee47/Ti.png'), t: { en: 'Titanic analysis', ar: 'تحليل تايتانيك' } }
      ]
    }
  ];

  var FILTERS = [
    { k: 'all', en: 'All', ar: 'الكل' },
    { k: 'powerbi', en: 'Power BI', ar: 'Power BI' },
    { k: 'python', en: 'Python', ar: 'Python' },
    { k: 'ml', en: 'Machine Learning', ar: 'تعلم آلي' },
    { k: 'client', en: 'Client & internship', ar: 'عملاء وتدريب' }
  ];

  var SKILLS = [
    { ic: '🐍', t: { en: 'Data Analysis', ar: 'تحليل البيانات' }, items: [
      ['Python (Pandas, NumPy)', 88], ['SQL Server', 82], ['ETL & Data Cleaning', 88], ['EDA & Statistics', 80]] },
    { ic: '📊', t: { en: 'BI & Visualisation', ar: 'ذكاء الأعمال والعرض' }, items: [
      ['Power BI', 92], ['DAX', 85], ['Power Query', 85], ['Dashboard UX Design', 88]] },
    { ic: '🧰', t: { en: 'Tools & Extras', ar: 'أدوات وإضافات' }, items: [
      ['Advanced Excel', 88], ['Git & GitHub', 75], ['Machine Learning', 65], ['HTML / CSS for custom visuals', 70]] }
  ];

  var TAGS = ['Data Modeling', 'Data Warehousing', 'Feature Engineering', 'KPI Design', 'Data Storytelling', 'Automation', 'Data Visualization', 'Technical Proposal Writing', 'Arabic / English Reporting'];

  var EXPERIENCE = [
    {
      role: { en: 'Freelance Data Analyst & BI Developer', ar: 'محلل بيانات ومطوّر BI مستقل' },
      org: { en: 'Mostaql — Remote', ar: 'مستقل — عن بُعد' },
      time: { en: 'Aug 2025 – Present', ar: 'أغسطس 2025 – الآن' },
      pts: [
        { en: 'Cut client reporting time by 30% by designing and deploying interactive Power BI dashboards.', ar: 'قلّلت وقت إعداد التقارير للعملاء بنسبة 30% عبر تصميم ونشر داشبوردات Power BI تفاعلية.' },
        { en: 'Run end-to-end ETL with Python and SQL: extract, clean and structure complex datasets for analysis.', ar: 'بنفّذ عمليات ETL كاملة بـ Python وSQL: استخراج وتنظيف وهيكلة بيانات معقدة للتحليل.' },
        { en: 'Write technical proposals covering SQL database structure, data-cleaning workflows and analytical solutions.', ar: 'بكتب عروض فنية تشمل هيكلة قواعد بيانات SQL وخطوات تنظيف البيانات والحلول التحليلية.' }
      ]
    },
    {
      role: { en: 'Data Analyst — Sales Team (Summer Training)', ar: 'محلل بيانات — فريق المبيعات (تدريب صيفي)' },
      org: { en: 'Dream 2000, Retail Sales Department — Assiut', ar: 'دريم 2000، قسم مبيعات التجزئة — أسيوط' },
      time: { en: '2026 · 3 months', ar: '2026 · 3 شهور' },
      pts: [
        { en: 'Worked inside the retail sales team to understand sales drivers, customer behaviour and branch operations first-hand.', ar: 'اشتغلت جوه فريق مبيعات التجزئة وفهمت من الميدان محركات البيع وسلوك العملاء وتشغيل الفرع.' },
        { en: 'Built an interactive Power BI dashboard that turns raw sales data into clear KPIs and visuals.', ar: 'بنيت داشبورد Power BI تفاعلي بيحوّل بيانات المبيعات الخام لمؤشرات ورسوم واضحة.' },
        { en: 'Structured it so the team can track performance, spot weak points and prioritise what needs focus.', ar: 'هيكلته عشان الفريق يتابع الأداء ويكتشف نقاط الضعف ويحدد أولوياته.' }
      ]
    }
  ];

  var EDUCATION = [
    { t: { en: 'B.Sc. Information Technology', ar: 'بكالوريوس تكنولوجيا المعلومات' }, s: { en: 'New Assiut Technological University — expected 2029', ar: 'جامعة أسيوط الجديدة التكنولوجية — التخرج المتوقع 2029' } },
    { t: { en: 'High School Diploma — AI & IoT', ar: 'دبلوم الثانوية — الذكاء الاصطناعي وإنترنت الأشياء' }, s: { en: 'Ahmed Deif Allah International Applied Tech School — 2025 · 95% · 3rd place at GDG Assiut competition', ar: 'مدرسة أحمد ضيف الله الدولية التطبيقية — 2025 · 95% · المركز الثالث في مسابقة GDG أسيوط' } }
  ];

  var CERTS = [
    { t: { en: 'Data Analysis Track', ar: 'مسار تحليل البيانات' }, s: { en: 'Digital Egypt Cubs Initiative — Udacity & MCIT · 2024', ar: 'مبادرة كبار مصر الرقمية — Udacity ووزارة الاتصالات · 2024' } },
    { t: { en: 'Advanced Excel Skills Training', ar: 'تدريب مهارات Excel المتقدمة' }, s: { en: 'IT SPARK & School to Work Transition Unit · 2023', ar: 'IT SPARK ووحدة الانتقال من المدرسة للعمل · 2023' } },
    { t: { en: 'Summer Training Certificate', ar: 'شهادة التدريب الصيفي' }, s: { en: 'Dream 2000, Retail Sales Department · 2026', ar: 'دريم 2000، قسم مبيعات التجزئة · 2026' } }
  ];

  var ROLES = {
    en: ['Data Analyst', 'BI Developer', 'Power BI Dashboard Designer', 'Python & SQL ETL Builder'],
    ar: ['محلل بيانات', 'مطوّر ذكاء أعمال (BI)', 'مصمم داشبوردات Power BI', 'هندسة بيانات بـ Python وSQL']
  };

  var I18N = {
    en: {
      skip: 'Skip to content', nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects', nav_exp: 'Experience', nav_contact: 'Contact',
      hero_eyebrow: 'Available for freelance work', hero_hi: "Hi, I'm", name: 'Ahmed Serag Eldin',
      hero_lead: 'I turn raw, messy data into clean pipelines and dashboards that teams actually use — built with Power BI, Python and SQL, designed to look like real products.',
      cta_work: 'View my work', cta_cv: 'Download CV',
      stat_1: 'Reporting time cut for clients', stat_2: 'Records analysed in a single project', stat_3: 'Portfolio projects', stat_4: 'Hands-on inside a retail sales team',
      about_k: 'About me', about_h: 'Data work with a product mindset',
      about_p1: "I'm a Data Analyst and BI Developer based in Assiut, Egypt. I handle the whole chain: extracting and cleaning raw data with Python and SQL, modelling it, and turning it into interactive Power BI dashboards that decision-makers can read at a glance.",
      about_p2: 'I spent a summer inside a retail sales team, so I know what the numbers mean on the shop floor — and I build dashboards around the questions the team really asks: where are we behind, who needs support, what should we focus on next.',
      about_p3: 'I care about the details most dashboards skip: consistent design, custom navigation, clear colour logic and fast, honest KPIs.',
      f_loc: 'Location', f_loc_v: 'Assiut, Egypt', f_edu: 'Studying', f_edu_v: 'B.Sc. Information Technology — New Assiut Technological University',
      f_focus: 'Focus', f_focus_v: 'Power BI · Python ETL · SQL · DAX', f_lang: 'Languages', f_lang_v: 'Arabic (native) · English',
      skills_k: 'Skills', skills_h: 'What I work with',
      proj_k: 'Selected work', proj_h: 'Projects & dashboards', proj_sub: 'Click any project to browse its screenshots.',
      exp_k: 'Experience', exp_h: "Where I've worked", edu_h: 'Education', cert_h: 'Certifications',
      c_k: 'Contact', c_h: "Let's build something useful", c_sub: 'Have a dataset, a report that takes too long, or a dashboard idea? Tell me about it.',
      c_email: 'Email', c_phone: 'Phone / WhatsApp', c_mostaql: 'Freelance profile', c_name: 'Your name', c_mail: 'Your email', c_msg: 'Message', c_send: 'Send message',
      foot: 'Built with HTML, CSS & JavaScript', top: 'Back to top ↑',
      view: 'View project', shots: 'screenshots', shot: 'screenshot', open: 'Open on Mostaql ↗',
      err: 'Please fill in all fields with a valid email.', ok: 'Opening your email app…', title: 'Ahmed Serag Eldin — Data Analyst & BI Developer'
    },
    ar: {
      skip: 'تخطَّ إلى المحتوى', nav_about: 'نبذة', nav_skills: 'المهارات', nav_projects: 'المشاريع', nav_exp: 'الخبرة', nav_contact: 'تواصل',
      hero_eyebrow: 'متاح لمشاريع الفريلانس', hero_hi: 'أهلاً، أنا', name: 'أحمد سراج الدين',
      hero_lead: 'بحوّل البيانات الخام المبعثرة لمسارات بيانات نظيفة وداشبوردات الفرق بتستخدمها فعلاً — بـ Power BI وPython وSQL، وبتصميم شكله منتج حقيقي.',
      cta_work: 'شوف أعمالي', cta_cv: 'تحميل السيرة الذاتية',
      stat_1: 'تقليل وقت التقارير للعملاء', stat_2: 'سجل اتحللوا في مشروع واحد', stat_3: 'مشاريع في المعرض', stat_4: 'تدريب عملي جوه فريق مبيعات',
      about_k: 'نبذة عني', about_h: 'شغل بيانات بعقلية منتج',
      about_p1: 'أنا محلل بيانات ومطوّر ذكاء أعمال (BI) من أسيوط، مصر. بتولّى السلسلة كاملة: استخراج وتنظيف البيانات الخام بـ Python وSQL، وبناء النموذج، وتحويلها لداشبوردات Power BI تفاعلية يقرأها صاحب القرار من أول نظرة.',
      about_p2: 'قضيت صيف كامل جوه فريق مبيعات تجزئة، فعارف الأرقام معناها إيه على أرض الواقع — وبصمم الداشبوردات حوالين الأسئلة اللي الفريق بيسألها فعلاً: إحنا متأخرين فين، مين محتاج دعم، نركّز على إيه بعد كده.',
      about_p3: 'بهتم بالتفاصيل اللي أغلب الداشبوردات بتتخطاها: تصميم متسق، تنقل مخصص، منطق ألوان واضح، ومؤشرات سريعة وصادقة.',
      f_loc: 'المكان', f_loc_v: 'أسيوط، مصر', f_edu: 'الدراسة', f_edu_v: 'بكالوريوس تكنولوجيا المعلومات — جامعة أسيوط الجديدة التكنولوجية',
      f_focus: 'التخصص', f_focus_v: 'Power BI · Python ETL · SQL · DAX', f_lang: 'اللغات', f_lang_v: 'العربية (الأم) · الإنجليزية',
      skills_k: 'المهارات', skills_h: 'أشتغل بإيه',
      proj_k: 'أعمال مختارة', proj_h: 'المشاريع والداشبوردات', proj_sub: 'اضغط على أي مشروع لتصفح صوره.',
      exp_k: 'الخبرة', exp_h: 'اشتغلت فين', edu_h: 'التعليم', cert_h: 'الشهادات',
      c_k: 'تواصل', c_h: 'تعالى نبني حاجة مفيدة', c_sub: 'عندك بيانات، أو تقرير بياخد وقت طويل، أو فكرة داشبورد؟ احكيلي عنها.',
      c_email: 'البريد الإلكتروني', c_phone: 'هاتف / واتساب', c_mostaql: 'الحساب على مستقل', c_name: 'اسمك', c_mail: 'بريدك الإلكتروني', c_msg: 'الرسالة', c_send: 'إرسال الرسالة',
      foot: 'مبني بـ HTML وCSS وJavaScript', top: 'للأعلى ↑',
      view: 'عرض المشروع', shots: 'صور', shot: 'صورة', open: 'افتح على مستقل ↗',
      err: 'من فضلك املأ كل الحقول وادخل بريد صحيح.', ok: 'جاري فتح تطبيق البريد…', title: 'أحمد سراج الدين — محلل بيانات ومطوّر ذكاء أعمال'
    }
  };

  /* ---------------------------------------------------------
     2. HELPERS
     --------------------------------------------------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var lang = root.lang === 'ar' ? 'ar' : 'en';
  var tr = function (o) { return o && typeof o === 'object' ? (o[lang] || o.en) : o; };
  var T = function (k) { return I18N[lang][k] || k; };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var safe = function (fn) { try { return fn(); } catch (e) { return null; } };
  var activeFilter = 'all';

  /* Image with graceful fallback: local file -> remote URL -> placeholder */
  function loadImg(img, shot, onFail) {
    var tried = 0;
    var chain = [shot.src].concat(shot.remote ? [shot.remote] : []);
    img.referrerPolicy = 'no-referrer';
    img.onerror = function () {
      tried++;
      if (tried < chain.length) { img.src = chain[tried]; } else { img.onerror = null; if (onFail) onFail(); }
    };
    img.src = chain[0];
  }

  /* ---------------------------------------------------------
     3. RENDERERS
     --------------------------------------------------------- */
  function renderFilters() {
    var box = $('#filters');
    box.innerHTML = FILTERS.map(function (f) {
      return '<button type="button" role="tab" data-k="' + f.k + '" aria-selected="' + (f.k === activeFilter) + '">' + esc(f[lang]) + '</button>';
    }).join('');
  }

  function renderProjects() {
    var grid = $('#projects-grid');
    grid.innerHTML = PROJECTS.map(function (p, i) {
      var n = p.shots.length;
      return '<article class="card reveal in' + (activeFilter !== 'all' && p.cats.indexOf(activeFilter) < 0 ? ' is-hidden' : '') + '" data-i="' + i + '" tabindex="0" role="button" aria-label="' + esc(tr(p.title)) + '">' +
        '<div class="card__img"><img alt="" loading="lazy" decoding="async"><div class="card__ph" aria-hidden="true">📊</div>' +
        '<span class="card__badge">' + esc(tr(p.badge)) + '</span>' +
        (n > 1 ? '<span class="card__count">' + n + ' ' + T('shots') + '</span>' : '') + '</div>' +
        '<div class="card__body"><h3>' + esc(tr(p.title)) + '</h3><p>' + esc(tr(p.desc)) + '</p>' +
        '<ul class="pills">' + p.tools.slice(0, 4).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
        '<span class="card__more">' + T('view') + ' <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="flip"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div></article>';
    }).join('');

    $$('.card', grid).forEach(function (card) {
      var p = PROJECTS[+card.dataset.i];
      var box = $('.card__img', card);
      loadImg($('img', card), p.shots[0], function () { box.classList.add('no-img'); $('img', card).remove(); });
      card.addEventListener('click', function () { openModal(+card.dataset.i, 0); });
      card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(+card.dataset.i, 0); } });
      if (fine && !reduce) {
        card.addEventListener('pointermove', function (e) {
          var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          card.style.setProperty('--mx', x * 100 + '%'); card.style.setProperty('--my', y * 100 + '%');
          card.style.transform = 'perspective(900px) rotateX(' + ((.5 - y) * 7).toFixed(2) + 'deg) rotateY(' + ((x - .5) * 9).toFixed(2) + 'deg) translateY(-4px)';
        });
        card.addEventListener('pointerleave', function () { card.style.transform = ''; });
      }
    });
  }

  function renderSkills() {
    $('#skills-grid').innerHTML = SKILLS.map(function (g, gi) {
      return '<div class="skill-card reveal" style="--d:' + gi * .08 + 's"><h3><i aria-hidden="true">' + g.ic + '</i>' + esc(tr(g.t)) + '</h3>' +
        g.items.map(function (it) {
          return '<div class="bar"><div class="bar__row"><span>' + esc(it[0]) + '</span><em>' + it[1] + '%</em></div><div class="bar__track"><span class="bar__fill" data-w="' + it[1] + '"></span></div></div>';
        }).join('') + '</div>';
    }).join('');
    $('#tags').innerHTML = TAGS.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
  }

  function renderTimeline() {
    $('#timeline').innerHTML = EXPERIENCE.map(function (e, i) {
      return '<li class="tl reveal" style="--d:' + i * .1 + 's"><div class="tl__top"><h3>' + esc(tr(e.role)) + '</h3><time>' + esc(tr(e.time)) + '</time></div><p class="tl__org">' + esc(tr(e.org)) + '</p><ul>' +
        e.pts.map(function (p) { return '<li>' + esc(tr(p)) + '</li>'; }).join('') + '</ul></li>';
    }).join('');
    var li = function (x) { return '<li><b>' + esc(tr(x.t)) + '</b><span>' + esc(tr(x.s)) + '</span></li>'; };
    $('#edu').innerHTML = EDUCATION.map(li).join('');
    $('#certs').innerHTML = CERTS.map(li).join('');
  }

  /* ---------------------------------------------------------
     4. LANGUAGE + THEME
     --------------------------------------------------------- */
  function applyI18n() {
    $$('[data-i18n]').forEach(function (el) { var v = I18N[lang][el.dataset.i18n]; if (v != null) el.textContent = v; });
    document.title = T('title');
    $('#langLabel').textContent = lang === 'ar' ? 'EN' : 'عربي';
    $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل للعربية');
    $('#form [name=name]').placeholder = lang === 'ar' ? 'أحمد' : 'Jane Doe';
    $('#form [name=msg]').placeholder = lang === 'ar' ? 'احكيلي عن مشروعك…' : 'Tell me about your project…';
  }

  function setLang(l, silent) {
    lang = l;
    root.lang = l; root.dir = l === 'ar' ? 'rtl' : 'ltr';
    if (!silent) safe(function () { localStorage.setItem('lang', l); });
    applyI18n(); renderFilters(); renderProjects(); renderSkills(); renderTimeline();
    observeReveals(); startTyping();
    if (!$('#modal').hidden) refreshModal();
  }

  function setTheme(t) {
    root.dataset.theme = t;
    safe(function () { localStorage.setItem('theme', t); });
    var m = $('meta[name=theme-color]'); if (m) m.content = t === 'light' ? '#f5f8fd' : '#070b14';
    paletteColor();
  }

  /* ---------------------------------------------------------
     5. TYPING EFFECT
     --------------------------------------------------------- */
  var typeTimer = null;
  function startTyping() {
    clearTimeout(typeTimer);
    var el = $('#typed'), words = ROLES[lang], wi = 0, ci = 0, del = false;
    if (reduce) { el.textContent = words[0]; return; }
    (function tick() {
      var w = words[wi];
      ci += del ? -1 : 1;
      el.textContent = w.slice(0, ci);
      var d = del ? 38 : 85;
      if (!del && ci === w.length) { d = 1500; del = true; }
      else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; d = 350; }
      typeTimer = setTimeout(tick, d);
    })();
  }

  /* ---------------------------------------------------------
     6. PARTICLE BACKGROUND
     --------------------------------------------------------- */
  var rgb = '34,211,238';
  function paletteColor() { rgb = (getComputedStyle(root).getPropertyValue('--particle') || '34,211,238').trim(); }
  function initParticles() {
    var cv = $('#bg'), ctx = cv.getContext('2d'), hero = $('#home');
    var pts = [], w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), run = true, raf = 0, mouse = { x: -999, y: -999 };
    function size() {
      w = hero.clientWidth; h = hero.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(24, Math.min(90, Math.round(w * h / 15000)));
      pts = []; for (var i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .6 });
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < pts.length; i++) {
        var a = pts[i];
        if (!reduce) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1; }
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fillStyle = 'rgba(' + rgb + ',.75)'; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < 14400) { ctx.strokeStyle = 'rgba(' + rgb + ',' + (.22 * (1 - d / 14400)).toFixed(3) + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        var mx = a.x - mouse.x, my = a.y - mouse.y, md = mx * mx + my * my;
        if (md < 19600) { ctx.strokeStyle = 'rgba(' + rgb + ',' + (.45 * (1 - md / 19600)).toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      }
      if (run && !reduce) raf = requestAnimationFrame(draw);
    }
    size(); paletteColor(); draw();
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { size(); if (reduce) draw(); }, 150); });
    hero.addEventListener('pointermove', function (e) { var r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    hero.addEventListener('pointerleave', function () { mouse.x = mouse.y = -999; });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { var v = en[0].isIntersecting; if (v && !run) { run = true; draw(); } run = v; }, { threshold: 0 }).observe(hero);
  }

  /* ---------------------------------------------------------
     7. SCROLL EFFECTS (reveal, counters, bars, nav)
     --------------------------------------------------------- */
  var revealIO, countIO, barIO;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(function (e) { e.classList.add('in'); }); $$('.bar__fill').forEach(function (b) { b.style.width = b.dataset.w + '%'; }); return; }
    revealIO = revealIO || new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); } }); }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    barIO = barIO || new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + '%'; barIO.unobserve(e.target); } }); }, { threshold: .4 });
    $$('.reveal:not(.in)').forEach(function (e) { revealIO.observe(e); });
    $$('.bar__fill').forEach(function (b) { barIO.observe(b); });
  }

  function initCounters() {
    $('#projCount').dataset.count = PROJECTS.length;
    var run = function (el) {
      var to = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '', t0 = null, dur = 1400;
      var fmt = function (v) { return v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf; };
      if (reduce) { el.textContent = fmt(to); return; }
      requestAnimationFrame(function step(t) {
        if (!t0) t0 = t; var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e); if (p < 1) requestAnimationFrame(step);
      });
    };
    if (!('IntersectionObserver' in window)) { $$('[data-count]').forEach(run); return; }
    countIO = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { run(e.target); countIO.unobserve(e.target); } }); }, { threshold: .6 });
    $$('[data-count]').forEach(function (e) { countIO.observe(e); });
  }

  function initScroll() {
    var nav = $('#nav'), bar = $('#progress'), ticking = false;
    var upd = function () {
      var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
      nav.classList.toggle('is-stuck', y > 20);
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
    if ('IntersectionObserver' in window) {
      var links = $$('.menu a'), map = {};
      links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (a) { a.classList.remove('is-active'); }); var a = map[e.target.id]; if (a) a.classList.add('is-active'); } });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ---------------------------------------------------------
     8. MOBILE MENU
     --------------------------------------------------------- */
  function initMenu() {
    var b = $('#burger'), m = $('#menu');
    var set = function (o) { m.classList.toggle('open', o); b.setAttribute('aria-expanded', o); };
    b.addEventListener('click', function () { set(!m.classList.contains('open')); });
    $$('a', m).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    document.addEventListener('click', function (e) { if (!m.contains(e.target) && !b.contains(e.target)) set(false); });
  }

  /* ---------------------------------------------------------
     9. LIGHTBOX
     --------------------------------------------------------- */
  var cur = { p: 0, i: 0 }, lastFocus = null, modal;
  function openModal(p, i) {
    cur.p = p; cur.i = i; lastFocus = document.activeElement;
    modal.hidden = false; document.body.classList.add('lock');
    refreshModal(); $('.modal__x', modal).focus();
  }
  function closeModal() { modal.hidden = true; document.body.classList.remove('lock'); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  function refreshModal() {
    var p = PROJECTS[cur.p], s = p.shots[cur.i], img = $('#mImg');
    $('#mTitle').textContent = tr(p.title);
    $('#mDesc').textContent = tr(p.desc);
    $('#mTools').innerHTML = p.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    $('#mCount').textContent = tr(s.t) + (p.shots.length > 1 ? '  ·  ' + (cur.i + 1) + ' / ' + p.shots.length : '');
    img.alt = tr(p.title) + ' — ' + tr(s.t);
    img.style.opacity = '.35'; img.onload = function () { img.style.opacity = '1'; };
    loadImg(img, s, function () { img.style.opacity = '1'; img.alt = ''; });
    var multi = p.shots.length > 1;
    $('#mPrev').hidden = !multi; $('#mNext').hidden = !multi;
    var th = $('#mThumbs'); th.hidden = !multi;
    th.innerHTML = multi ? p.shots.map(function (x, k) { return '<button type="button" data-k="' + k + '" aria-label="' + (k + 1) + '" aria-current="' + (k === cur.i) + '"><img alt=""></button>'; }).join('') : '';
    $$('button', th).forEach(function (b, k) { loadImg($('img', b), p.shots[k], function () { b.style.visibility = 'hidden'; }); });
    var a = $('#mLink');
    if (p.link) { a.hidden = false; a.href = p.link; a.textContent = T('open'); } else { a.hidden = true; }
  }
  function step(d) { var n = PROJECTS[cur.p].shots.length; if (n < 2) return; cur.i = (cur.i + d + n) % n; refreshModal(); }
  function initModal() {
    modal = $('#modal');
    $$('[data-close]', modal).forEach(function (e) { e.addEventListener('click', closeModal); });
    $('#mPrev').addEventListener('click', function () { step(-1); });
    $('#mNext').addEventListener('click', function () { step(1); });
    $('#mThumbs').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { cur.i = +b.dataset.k; refreshModal(); } });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      var rtl = root.dir === 'rtl';
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') step(rtl ? -1 : 1);
      else if (e.key === 'ArrowLeft') step(rtl ? 1 : -1);
      else if (e.key === 'Tab') { /* keep focus inside dialog */
        var f = $$('button:not([hidden]), a[href]:not([hidden])', modal).filter(function (x) { return x.offsetParent !== null; });
        if (!f.length) return; var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var sx = 0; var st = $('.modal__stage', modal);
    st.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    st.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) { var rtl = root.dir === 'rtl'; step((dx < 0) !== rtl ? 1 : -1); } }, { passive: true });
  }

  /* ---------------------------------------------------------
     10. FORM (opens the visitor's email app — no backend needed)
     --------------------------------------------------------- */
  function initForm() {
    var f = $('#form'), note = $('#formNote');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = f.name.value.trim(), m = f.email.value.trim(), t = f.msg.value.trim();
      var ok = true;
      [[f.name, n], [f.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) && m], [f.msg, t]].forEach(function (x) { var bad = !x[1]; x[0].setAttribute('aria-invalid', bad); if (bad) ok = false; });
      if (!ok) { note.textContent = T('err'); return; }
      note.textContent = T('ok');
      var body = t + '\n\n— ' + n + ' (' + m + ')';
      window.location.href = 'mailto:ahmedsalalh61@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + n) + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------------------------------------------------------
     11. BOOT
     --------------------------------------------------------- */
  function init() {
    $('#yr').textContent = new Date().getFullYear();
    (function () {
      var mark = $('#logoMark'), im = $('#logoImg');
      if (!mark || !im) return;
      var ok = function () { mark.classList.add('has-photo'); };
      if (im.complete && im.naturalWidth) ok(); else { im.addEventListener('load', ok); im.addEventListener('error', function () { im.remove(); }); }
    })();
    $('#themeBtn').addEventListener('click', function () { setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'); });
    $('#langBtn').addEventListener('click', function () { setLang(lang === 'ar' ? 'en' : 'ar'); });
    $('#filters').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      activeFilter = b.dataset.k;
      $$('#filters button').forEach(function (x) { x.setAttribute('aria-selected', x === b); });
      $$('.card').forEach(function (c) { var p = PROJECTS[+c.dataset.i]; c.classList.toggle('is-hidden', activeFilter !== 'all' && p.cats.indexOf(activeFilter) < 0); });
    });
    initModal(); initMenu(); initForm();
    setLang(lang, true);
    initParticles(); initCounters(); initScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
