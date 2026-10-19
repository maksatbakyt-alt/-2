const hybrids = [
    {
        id: 'afina',
        name: 'Афина',
        fao: '270-350',
        yield: 12,
        purpose: 'Зерно',
        height: '270',
        earLength: '18',
        rows: '14-18',
        grainsPerRow: '36',
        thousandSeedsMass: '335',
        img: 'afina.jpeg',
        desc: 'Ранний зерновой гибрид, компактный и надежный на засушливых полях.',
        sections: [
            {
                title: 'Характеристики FENIKKS Афина',
                paragraphs: [
                    'Ранний зерновой гибрид для стабильного урожая на засушливых полях. Компактный габитус облегчает уход и уборку.',
                    'Высота растения около 270 см, длина початка 18 см, 14–18 рядов, 36 зерен в ряду, масса 1000 зерен 335 г. Потенциальная урожайность 8–12 т/га.'
                ]
            }
        ]
    },
    {
        id: 'afina_plus',
        name: 'Афина Плюс',
        fao: '380-400',
        yield: 13,
        purpose: 'Зерно',
        height: '180-220',
        cobHeight: '135-155',
        earLength: '18-20',
        rows: '16-18',
        grainsPerRow: '36-38',
        thousandSeedsMass: '365',
        img: 'https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+Afina+Plus',
        desc: 'Высокопродуктивный зерновой гибрид с отличными показателями массы 1000 зерен.',
        sections: [
            {
                title: 'Характеристики FENIKKS Афина Плюс',
                paragraphs: [
                    'ФАО: 380 - 400.',
                    'Высота растения: 180–220 см. Прикрепление початка: 135–155 см.',
                    'Длина початка: 18–20 см. Початков на растении: 1–2 (в зависимости от густоты стояния растений).',
                    'Рядов зерен/зерен в ряду: 16–18 / 36–38.',
                    'Масса 1000 зерен: 365 г. Уборочная влажность: 14–16%. Урожайность: 12–14 т/га.',
                    'Регионы для возделывания: Алматинская область, область Жетысу, Кордай, Жамбылская область.'
                ]
            }
        ]
    },
    {
        id: 'aurora',
        name: 'Аврора',
        fao: 360,
        yield: 12,
        purpose: 'Зерно',
        height: '280',
        cobHeight: '120-130',
        earLength: '18-20',
        rows: '14-16',
        grainsPerRow: '34-36',
        thousandSeedsMass: '335',
        img: 'https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+Aurora',
        desc: 'Чрезвычайно раннеспелый зерновой гибрид с высокой и стабильной урожайностью.',
        sections: [
            {
                title: 'Характеристики FENIKKS Аврора',
                paragraphs: [
                    'ФАО: 360. Высота растения: 280 см. Длина початка: 18–20 см.',
                    'Прикрепление початка: 120–130 см. Початков на растении: 1.',
                    'Рядов зерен/зерен в ряду: 14–16 / 34–36. Масса 1000 зерен: 335 г.',
                    'Уборочная влажность: 14–16%. Урожайность: 10–14 т/га.',
                    'Регионы для возделывания: Алматинская область, область Жетысу, Кордай, Жамбылская область. Может высеваться как вторая культура в сезоне в Жамбылской и Туркестанской областях.'
                ]
            }
        ]
    },
    {
        id: 'atlant',
        name: 'Атлант',
        fao: 480,
        yield: 15,
        purpose: 'Зерно',
        height: '200',
        cobHeight: '165-175',
        earLength: '18-22',
        rows: '18-20',
        grainsPerRow: '36-38',
        thousandSeedsMass: '370',
        img: 'atlant.jpg.jpg',
        desc: 'Компактный зерновой гибрид с высокой урожайностью и сильной устойчивостью к болезням.',
        sections: [
            {
                title: 'Характеристики FENIKKS Атлант',
                paragraphs: [
                    'ФАО: 480. Высота растения: 200 см. Длина початка: 18–22 см.',
                    'Прикрепление початка: 165–175 см. Початков на растении: 1.',
                    'Рядов зерен/зерен в ряду: 18–20 / 36–38. Масса 1000 зерен: 370 г.',
                    'Уборочная влажность: 16–18%. Урожайность: 14–16 т/га.',
                    'Регионы для возделывания: Алматинская область, область Жетысу, Кордай, Жамбылская область.'
                ]
            }
        ]
    },
    {
        id: 'gobi',
        name: 'Гоби',
        fao: 520,
        yield: 14,
        purpose: 'Зерно',
        height: '310',
        cobHeight: '165-175',
        earLength: '20-24',
        rows: '18-20',
        grainsPerRow: '40',
        thousandSeedsMass: '358',
        img: 'gobi.jpg',
        desc: 'Позднеспелый гибрид с лучшей устойчивостью к болезням и жаре.',
        sections: [
            {
                title: 'Характеристики FENIKKS Гоби',
                paragraphs: [
                    'ФАО: 520. Высота растения: 310 см. Длина початка: 20–24 см.',
                    'Прикрепление початка: 165–175 см. Початков на растении: 1.',
                    'Рядов зерен/зерен в ряду: 18–20 / 40. Масса 1000 семян: 358 г.',
                    'Уборочная влажность: 14–16%. Урожайность: 12–16 т/га.',
                    'Регионы для возделывания: Алматинская область, область Жетысу, Кордай, Жамбылская область.'
                ]
            }
        ]
    },
    {
        id: 'gobi_plus',
        name: 'Гоби плюс',
        fao: 580,
        yield: 13,
        purpose: 'Зерно',
        height: '250',
        cobHeight: '120',
        earLength: '22-26',
        rows: '16-18',
        grainsPerRow: '45-48',
        thousandSeedsMass: '360',
        img: 'https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+Gobi+Plus',
        desc: 'Высокопродуктивный гибрид с длинным початком и крупным зерном.',
        sections: [
            {
                title: 'Характеристики FENIKKS Гоби плюс',
                paragraphs: [
                    'ФАО: 580. Высота растения: 2,5 метра (250 см). Длина початка: 22–26 см.',
                    'Прикрепление початка: 1,2 м (120 см). Початков на растении: 1.',
                    'Рядов зерен/зерен в ряду: 16–18 / 45–48. Масса 1000 семян: 360 г.',
                    'Уборочная влажность: 16%. Урожайность: 12–14 т/га.',
                    'Регионы для возделывания: Алматинская, Жамбылская, Туркестанская области.'
                ]
            }
        ]
    },
    {
        id: 'spartak',
        name: 'Спартак',
        fao: 550,
        yield: 19,
        purpose: 'Зерно',
        height: '340',
        cobHeight: '120',
        days: '127',
        earLength: '22-26',
        rows: '16-20',
        grainsPerRow: '42',
        thousandSeedsMass: '361',
        img: 'spartak.jpg',
        desc: 'Мощный зерновой гибрид с быстрой влагоотдачей и устойчивостью к полеганию.',
        sections: [
            {
                title: 'Характеристики FENIKKS Спартак',
                paragraphs: [
                    'При весеннем посеве вегетационный период составляет 127 дней. Тип растения полукомпактный, высота 285 см, высота початка 120 см.',
                    'Початок красный, длина 20–22 см, 16–20 рядов, 39 зерен в ряду. Зерно желтое, полузубчатое, выход семян 85,6%, масса 100 зерен 34,8 г.',
                    'Пробная масса зерна 781 г/л, сырой протеин 8,95%, сырой жир 3,6%, сырой крахмал 74,42%, лизин 0,31%.',
                    'Урожайность 23 262 кг/га (влажность 25%).'
                ]
            }
        ]
    },
    {
        id: '958plus',
        name: '958Plus',
        fao: 580,
        yield: 17,
        purpose: 'Зерно',
        height: '280',
        cobHeight: '165-170',
        earLength: '25',
        rows: '14-18',
        grainsPerRow: '46',
        thousandSeedsMass: '365',
        img: '958.jpg',
        desc: 'Широкозерный высокопродуктивный гибрид для интенсивной агротехники.',
        sections: [
            {
                title: 'Характеристики FENIKKS 958Plus',
                paragraphs: [
                    'ФАО: 580. Высота растения: 280 см. Длина початка: 25 см.',
                    'Прикрепление початка: 165–170 см. Початков на растении: 1.',
                    'Рядов зерен/зерен в ряду: 14–18 / 46. Масса 1000 семян: 365 г.',
                    'Уборочная влажность: 14–16%. Урожайность: 16–18 т/га.',
                    'Регионы для возделывания: Алматинская, Жетысу, Жамбылская и Туркестанская области.'
                ]
            }
        ]
    },
    {
        id: 'francesca',
        name: 'Франческа',
        fao: 650,
        yield: 22,
        purpose: 'Зерно',
        height: '400',
        cobHeight: '113',
        days: '130',
        earLength: '26-30',
        rows: '18-20',
        grainsPerRow: '42',
        thousandSeedsMass: '380',
        img: 'francheska.jpeg',
        desc: 'Позднеспелый гибрид с высокой урожайностью, большим объемным весом и высокой влагоотдачей.',
        sections: [
            {
                title: 'Характеристики FENIKKS Франческа',
                paragraphs: [
                    'Срок вегетации при весеннем посеве — 130 дней. Тип растения полукомпактный, высота 287 см, высота початка 113 см, 21 лист.',
                    'Урожайность 22 950 кг/га (влажность 20%).'
                ]
            }
        ]
    },
    {
        id: 'f98',
        name: 'Ф98',
        fao: '800 (силос)',
        yield: 60,
        purpose: 'Силос',
        height: '400-500',
        cobHeight: '180-190',
        earLength: '28-32',
        rows: '18-22',
        grainsPerRow: '—',
        thousandSeedsMass: '400+',
        img: 'https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+F98',
        desc: 'Высокопродуктивный силосний гибрид с мощным накоплением зеленой массы.',
        sections: [
            {
                title: 'Характеристики FENIKKS Ф98',
                paragraphs: [
                    'ФАО: 800, силосное направление. Высота растения: 4–5 м.',
                    'Длина початка: 28–32 см. Прикрепление початка: 180–190 см.',
                    'Рядов зерен/зерен в ряду: 18–22. Початков на растении: 1 и 2 при невысокой норме высева.',
                    'Масса 1000 семян: 400 г и выше. Уборочная влажность: 30–35% на силос.',
                    'Урожайность: свыше 60 т силосной массы с 1 га.',
                    'Регионы для возделывания: Алматинская, Жетысу, Жамбылская и Туркестанская области.'
                ]
            }
        ]
    },
    {
        id: 'celentano',
        name: 'Челентано',
        fao: 620,
        yield: 19,
        purpose: 'Силос',
        height: '420',
        cobHeight: '170-180',
        earLength: '24-28',
        rows: '18-20',
        grainsPerRow: '46',
        thousandSeedsMass: '375',
        img: 'chelentano.jpg',
        desc: 'Силосный гибрид мощного роста для юго-востока Казахстана.',
        sections: [
            {
                title: 'Характеристики FENIKKS Челентано',
                paragraphs: [
                    'ФАО: 620. Высота растения: 420 см. Длина початка: 24–28 см.',
                    'Прикрепление початка: 170–180 см. Початков на растении: 1.',
                    'Рядов зерен/зерен в ряду: 18–20 / 46. Масса 1000 семян: 375 г.',
                    'Уборочная влажность: 16–18%. Урожайность: 18–20 т/га.',
                    'Регионы для возделывания: Алматинская область, область Жетысу, Кордай, Жамбылская область.'
                ]
            }
        ]
    },
    {
        id: 'eros',
        name: 'Эрос',
        fao: 650,
        yield: 19,
        purpose: 'Силос',
        height: '310',
        cobHeight: '170-180',
        earLength: '20-24',
        rows: '16-18',
        grainsPerRow: '38-45',
        thousandSeedsMass: '359',
        img: 'Eros.jpg',
        desc: 'Высокоурожайный силосный гибрид с отличным накоплением массы.',
        sections: [
            {
                title: 'Характеристики FENIKKS Эрос',
                paragraphs: [
                    'ФАО: 650. Высота растения: 310 см. Длина початка: 20–24 см.',
                    'Прикрепление початка: 170–180 см. Початков на растении: 1.',
                    'Рядов зерен/зерен в ряду: 16–18 / 38–45. Масса 1000 семян: 359 г.',
                    'Уборочная влажность: 16–18%. Урожайность: 16–22 т/га.',
                    'Регионы для возделывания: Алматинская, Жетысу, Жамбылская и Туркестанская области.'
                ]
            }
        ]
    }
];

let compareList = [];
let currentLang = 'ru';

const translations = {
    ru: {
        navLogo: '🌽 БахАгро',
        searchPlaceholder: 'Поиск гибрида...',
        langTitle: 'Сменить язык',
        headerTitle: 'БахАгро',
        headerSubtitle: 'Семена кукурузы для профессиональных фермеров Казахстана',
        badgeText: 'Лабораторная всхожесть 96% – 98%',
        introTitle: 'Поставки напрямую с заводов. Полное соответствие Госреестру РК',
        introBoxTitle: '🌽 Семена Кукурузы',
        introBoxText: 'Высокая энергия прорастания, идеальная калибровка под сеялки точного высева. Протравлено фунгицидами и инсектицидами.',
        catalogTitle: 'Каталог гибридов кукурузы FENIKKS',
        compareTitle: '📊 Выбранные гибриды для сравнения',
        tableIntro: 'Гибриды кукурузы «FENIKKS» характеризуются высоким потенциалом урожайности и отличной устойчивостью к болезням и засухе.',
        table1Title: 'Кукуруза (зерно)',
        table2Title: 'Кукуруза (силос)',
        tableHeaders: ['Вид', 'ФАО', 'Высота растения, см', 'Длина початка, см', 'Рядов в початке, шт.', 'Зерен в ряду, шт.', 'Масса 1000 зерен, г', 'Потенц. урож., т/га'],
        toolsTitle: 'Инструменты Агронома',
        wizardHeader: '🎯 Мастер подбора гибрида',
        wizardRegionLabel: 'Регион посадки:',
        regionSouth: 'Юг (Алматы, Туркестан, Жамбыл)',
        regionNorth: 'Север (Костанай, СКО, Акмола)',
        wizardPurposeLabel: 'Назначение:',
        purposeGrain: 'Зерно (Макс. урожайность)',
        purposeDrought: 'Засухоустойчивость',
        purposeSilage: 'Силос (корм)',
        recommendButton: 'Подобрать семена',
        calcHeader: '🧮 Калькулятор потребности',
        calcAreaLabel: 'Площадь посева (Гектар):',
        calcAreaPlaceholder: 'Например: 50',
        calcDensityLabel: 'Густота стояния (тыс. шт/га):',
        calculateButton: 'Рассчитать',
        whatsappCta: '💬 Связаться с нами в WhatsApp',
        docsTitle: 'Документация и Качество',
        cert1Title: '🔬 96-98%',
        cert1Desc: 'Лабораторная всхожесть',
        cert2Title: '📜 Госреестр РК',
        cert2Desc: 'Все гибриды сертифицированы',
        cert3Title: '🛡️ Протравлено',
        cert3Desc: 'Фунгициды + Инсектициды',
        faqTitle: 'Частые вопросы',
        faqQuestion1: 'Как быстро осуществляется доставка?',
        faqAnswer1: 'Доставка семян в областные центры после оплаты, до 30 апреля.',
        faqQuestion2: 'В чем поставляются семена?',
        faqAnswer2: 'Семена упакованы в фирменные бумажные мешки. В 1 посевной единице — 80 000 семян.',
        footerText: '© 2026 ТОО/ИП БахАгро. Доставка семян в областные центры после оплаты, до 30 апреля.',
        compareTitleCard: 'Сравнить',
        detailsButton: 'Подробно',
        faoLabel: 'ФАО',
        yieldLabel: 'Урожайность',
        yieldUnit: 'т/га',
        purposeLabel: 'Назначение',
        heightLabel: 'Высота растения',
        earLengthLabel: 'Длина початка',
        rowsLabel: 'Рядов в початке',
        grainsLabel: 'Зерен в ряду',
        massLabel: 'Масса 1000 зерен',
        yieldAmountLabel: 'Потенциальная урожайность',
        unitCm: 'см',
        unitGram: 'г',
        daysLabel: 'Период вегетации',
        cobHeightLabel: 'Высота початка',
        unitDays: 'дней',
        recommendPrefix: '✅ Рекомендуем:',
        recommendReason: 'Почему',
        recommendDesc: 'Идеально подходит под ваши параметры.',
        alertInvalidArea: 'Введите корректную площадь',
        calcResultIntro: 'На площадь',
        calcResultOutro: 'Вам потребуется',
        bagsLabel: 'посевных единиц (мешков)',
        chatHeader: '🤖 AI Агроном БахАгро',
        chatIntro: 'Здравствуйте! Я цифровой агроном. Напишите ваш регион и тип почвы, и я помогу подобрать идеальный гибрид кукурузы.',
        chatPlaceholder: 'Введите ваш вопрос...',
        chatDefaultReply: 'Для точного ответа мне нужно больше данных. Подскажите, планируете ли вы полив (орошение)?',
        chatSouthReply: 'Для южных регионов с хорошим орошением отлично подойдет FENIKKS Челентано (ФАО 620). Максимальная отдача!',
        championBadge: '⭐ Чемпион 2018',
        videoCarouselTitle: '🎥 Видеообзоры гибридов кукурузы'
    }
};

function $id(id) { return document.getElementById(id); }

function translatePage(lang) {
    const t = (translations[lang] && translations[lang]) ? translations[lang] : translations.ru;
    currentLang = lang;
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'kk';

    if ($id('lang-switch')) $id('lang-switch').innerText = lang === 'ru' ? 'RU' : 'KZ';
    if ($id('lang-switch') && t.langTitle) $id('lang-switch').title = t.langTitle;
    if ($id('nav-logo')) $id('nav-logo').innerText = t.navLogo;
    if ($id('searchInput')) $id('searchInput').placeholder = t.searchPlaceholder;
    if ($id('header-title')) $id('header-title').innerText = t.headerTitle;
    if ($id('header-subtitle')) $id('header-subtitle').innerText = t.headerSubtitle;
    if ($id('badge-text')) $id('badge-text').innerText = t.badgeText;
    if ($id('intro-title')) $id('intro-title').innerText = t.introTitle;
    if ($id('intro-box-title')) $id('intro-box-title').innerText = t.introBoxTitle;
    if ($id('intro-box-text')) $id('intro-box-text').innerText = t.introBoxText;
    if ($id('catalog-title')) $id('catalog-title').innerText = t.catalogTitle;
    if ($id('video-carousel-title')) $id('video-carousel-title').innerText = t.videoCarouselTitle;
    if ($id('compare-title')) $id('compare-title').innerText = t.compareTitle;
    if ($id('table-intro')) $id('table-intro').innerText = t.tableIntro;
    if ($id('table1-title')) $id('table1-title').innerText = t.table1Title;
    if ($id('table2-title')) $id('table2-title').innerText = t.table2Title;
    if ($id('tools-title')) $id('tools-title').innerText = t.toolsTitle;
    if ($id('wizard-header')) $id('wizard-header').innerText = t.wizardHeader;
    if ($id('wizard-region-label')) $id('wizard-region-label').innerText = t.wizardRegionLabel;
    if ($id('wiz-region-south')) $id('wiz-region-south').innerText = t.regionSouth;
    if ($id('wiz-region-north')) $id('wiz-region-north').innerText = t.regionNorth;
    if ($id('wizard-purpose-label')) $id('wizard-purpose-label').innerText = t.wizardPurposeLabel;
    if ($id('wiz-purpose-grain')) $id('wiz-purpose-grain').innerText = t.purposeGrain;
    if ($id('wiz-purpose-drought')) $id('wiz-purpose-drought').innerText = t.purposeDrought;
    if ($id('wiz-purpose-silage')) $id('wiz-purpose-silage').innerText = t.purposeSilage;
    if ($id('recommend-btn')) $id('recommend-btn').innerText = t.recommendButton;
    if ($id('calc-header')) $id('calc-header').innerText = t.calcHeader;
    if ($id('calc-area-label')) $id('calc-area-label').innerText = t.calcAreaLabel;
    if ($id('calc-area')) $id('calc-area').placeholder = t.calcAreaPlaceholder;
    if ($id('calc-density-label')) $id('calc-density-label').innerText = t.calcDensityLabel;
    if ($id('calculate-btn')) $id('calculate-btn').innerText = t.calculateButton;
    if ($id('whatsapp-cta')) $id('whatsapp-cta').innerText = t.whatsappCta;
    if ($id('docs-title')) $id('docs-title').innerText = t.docsTitle;
    if ($id('cert1-title')) $id('cert1-title').innerText = t.cert1Title;
    if ($id('cert1-desc')) $id('cert1-desc').innerText = t.cert1Desc;
    if ($id('cert2-title')) $id('cert2-title').innerText = t.cert2Title;
    if ($id('cert2-desc')) $id('cert2-desc').innerText = t.cert2Desc;
    if ($id('cert3-title')) $id('cert3-title').innerText = t.cert3Title;
    if ($id('cert3-desc')) $id('cert3-desc').innerText = t.cert3Desc;
    if ($id('faq-title')) $id('faq-title').innerText = t.faqTitle;
    if ($id('faq-question-1') && $id('faq-question-1').childNodes[0]) $id('faq-question-1').childNodes[0].textContent = (t.faqQuestion1 || '') + ' ';
    if ($id('faq-answer-1')) $id('faq-answer-1').innerText = t.faqAnswer1;
    if ($id('faq-question-2') && $id('faq-question-2').childNodes[0]) $id('faq-question-2').childNodes[0].textContent = (t.faqQuestion2 || '') + ' ';
    if ($id('faq-answer-2')) $id('faq-answer-2').innerText = t.faqAnswer2;
    if ($id('footer-text')) $id('footer-text').innerText = t.footerText;
    if ($id('gobi-badge')) $id('gobi-badge').innerText = t.championBadge;
    if ($id('chat-header-text')) $id('chat-header-text').innerText = t.chatHeader;
    if ($id('chat-intro-text')) $id('chat-intro-text').innerText = t.chatIntro;
    if ($id('chat-input-field')) $id('chat-input-field').placeholder = t.chatPlaceholder;

    document.querySelectorAll('.fenikks-table thead tr th').forEach((th, index) => {
        if (t.tableHeaders && t.tableHeaders[index]) th.innerText = t.tableHeaders[index];
    });

    renderCatalog();
    renderComparison();
}

function toggleLanguage() {
    translatePage(currentLang === 'ru' ? 'kz' : 'ru');
}

function renderCatalog() {
    const container = $id('catalog-container');
    if (!container) return;
    container.innerHTML = '';
    const t = translations[currentLang] || translations.ru;

    hybrids.forEach(h => {
        const card = document.createElement('div');
        card.className = 'catalog-card';
        card.dataset.name = (h.name || '').toLowerCase();

        const compareCheckbox = document.createElement('input');
        compareCheckbox.type = 'checkbox';
        compareCheckbox.className = 'compare-checkbox';
        compareCheckbox.title = t.compareTitleCard || '';
        compareCheckbox.checked = compareList.some(item => item.id === h.id);
        compareCheckbox.addEventListener('change', () => toggleCompare(h.id, compareCheckbox.checked));

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'card-image-wrapper';

        const img = document.createElement('img');
        img.src = h.img || `https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+${encodeURIComponent(h.name)}`;
        img.alt = h.name || 'FENIKKS';
        img.className = 'corn-img';
        img.addEventListener('error', () => {
            img.src = `https://placehold.co/400x300/1b4d3e/white?text=FENIKKS+${encodeURIComponent(h.name)}`;
        });

        imageWrapper.appendChild(img);

        const info = document.createElement('div');
        info.className = 'catalog-info';

        const title = document.createElement('h4');
        title.textContent = `FENIKKS ${h.name}`;

        const description = document.createElement('p');
        description.className = 'catalog-info-description';
        description.textContent = `${t.faoLabel || 'ФАО'}: ${h.fao} | ${t.yieldLabel || 'Урожайность'}: ${formatYield(h, t)}`;

        const detailsButton = document.createElement('button');
        detailsButton.type = 'button';
        detailsButton.className = 'btn-primary details-btn';
        detailsButton.setAttribute('data-id', h.id);
        detailsButton.textContent = t.detailsButton || 'Подробно';
        detailsButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            openModal(h.id);
        });

        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(detailsButton);

        card.appendChild(compareCheckbox);
        card.appendChild(imageWrapper);
        card.appendChild(info);
        container.appendChild(card);
    });
}

function filterCatalog() {
    const qEl = $id('searchInput');
    if (!qEl) return;
    const query = qEl.value.toLowerCase();
    document.querySelectorAll('.catalog-card').forEach(card => {
        card.style.display = (card.getAttribute('data-name') || '').includes(query) ? 'flex' : 'none';
    });
}

function renderModalSections(h) {
    const el = $id('modal-desc');
    if (!el) return;

    const intro = h.desc ? `<p>${h.desc}</p>` : '';

    if (!h.sections || !h.sections.length) {
        el.innerHTML = intro;
        return;
    }

    el.innerHTML = intro + h.sections.map(section => {
        const title = section.title ? `<h3>${section.title}</h3>` : '';
        const paragraphs = (section.paragraphs || []).map(p => `<p>${p}</p>`).join('');
        const items = section.items ? `<ul>${section.items.map(i => `<li>${i}</li>`).join('')}</ul>` : '';
        return `<div class="modal-section">${title}${paragraphs}${items}</div>`;
    }).join('');
}

function formatYield(h, t) {
    if (!h || h.yield === '—' || h.yield === '' || h.yield == null) return '—';
    return `${h.yield} ${t && t.yieldUnit ? t.yieldUnit : 'т/га'}`;
}

function closeModal() {
    const modal = $id('hybrid-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openModal(id) {
    const h = hybrids.find(item => item.id === id);
    if (!h) return;

    const t = translations[currentLang] || translations.ru;
    const titleEl = $id('modal-title');
    if (titleEl) titleEl.innerHTML = `FENIKKS ${h.name} ${id === 'gobi' ? `<span class="champion-badge">(${t.championBadge})</span>` : ''}`;

    renderModalSections(h);

    const specRows = [
        [t.purposeLabel, h.purpose || '—'],
        [t.faoLabel, h.fao || '—'],
        h.days ? [t.daysLabel, `${h.days} ${t.unitDays || ''}`] : null,
        [t.heightLabel, h.height ? `${h.height} ${t.unitCm || 'см'}` : '—'],
        h.cobHeight ? [t.cobHeightLabel, `${h.cobHeight} ${t.unitCm || 'см'}`] : null,
        [t.earLengthLabel, h.earLength ? `${h.earLength} ${t.unitCm || 'см'}` : '—'],
        [t.rowsLabel, h.rows || '—'],
        [t.grainsLabel, h.grainsPerRow || '—'],
        [t.massLabel, h.thousandSeedsMass ? `${h.thousandSeedsMass} ${t.unitGram || 'г'}` : '—'],
        [t.yieldAmountLabel, formatYield(h, t)]
    ].filter(Boolean);

    const tableEl = $id('modal-table');
    if (tableEl) {
        tableEl.innerHTML = specRows.map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`).join('');
    }

    const modal = $id('hybrid-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    const content = modal.querySelector('.modal-content');
    if (content) content.scrollTop = 0;

    const mtitle = $id('modal-title');
    if (mtitle) { mtitle.tabIndex = -1; mtitle.focus(); }
}

function toggleCompare(id, isChecked) {
    if (isChecked) {
        const found = hybrids.find(h => h.id === id);
        if (found && !compareList.some(c => c.id === id)) compareList.push(found);
    } else {
        compareList = compareList.filter(h => h.id !== id);
    }
    renderComparison();
}

function renderComparison() {
    const section = $id('compare-section');
    const table = $id('compare-table');
    if (!section || !table) return;

    if (compareList.length === 0) {
        section.style.display = 'none';
        table.innerHTML = '';
        return;
    }

    section.style.display = 'block';
    const t = translations[currentLang] || translations.ru;
    let headers = `<th>${t.compareTitleCard || 'Сравнить'}</th>`;
    let rPurpose = `<tr><td><strong>${t.purposeLabel || 'Назначение'}</strong></td>`;
    let rFao = `<tr><td><strong>${t.faoLabel || 'ФАО'}</strong></td>`;
    let rYield = `<tr><td><strong>${t.yieldAmountLabel || 'Потенц. урож.'}</strong></td>`;
    let rHeight = `<tr><td><strong>${t.heightLabel || 'Высота растения'}, ${t.unitCm || 'см'}</strong></td>`;
    let rEar = `<tr><td><strong>${t.earLengthLabel || 'Длина початка'}, ${t.unitCm || 'см'}</strong></td>`;
    let rRows = `<tr><td><strong>${t.rowsLabel || 'Рядов'}</strong></td>`;
    let rGrains = `<tr><td><strong>${t.grainsLabel || 'Зерен'}</strong></td>`;
    let rMass = `<tr><td><strong>${t.massLabel || 'Масса 1000 зерен'}, ${t.unitGram || 'г'}</strong></td>`;

    compareList.forEach(h => {
        headers += `<th>${h.name}</th>`;
        rPurpose += `<td>${h.purpose || '—'}</td>`;
        rFao += `<td>${h.fao || '—'}</td>`;
        rYield += `<td>${formatYield(h, t)}</td>`;
        rHeight += `<td>${h.height || '—'}</td>`;
        rEar += `<td>${h.earLength || '—'}</td>`;
        rRows += `<td>${h.rows || '—'}</td>`;
        rGrains += `<td>${h.grainsPerRow || '—'}</td>`;
        rMass += `<td>${h.thousandSeedsMass || '—'}</td>`;
    });

    table.innerHTML = `<thead><tr>${headers}</tr></thead><tbody>${rPurpose}${rFao}${rYield}${rHeight}${rEar}${rRows}${rGrains}${rMass}</tbody>`;
}

function recommendSeed() {
    const region = $id('wiz-region') ?$id('wiz-region').value : null;
    const purpose = $id('wiz-purpose') ?$id('wiz-purpose').value : null;
    let rec = hybrids[0] || null;

    if (region === 'south') {
        if (purpose === 'grain') rec = hybrids.find(h => h.id === '958plus');
        if (purpose === 'drought') rec = hybrids.find(h => h.id === 'gobi');
        if (purpose === 'silage') rec = hybrids.find(h => h.id === 'celentano');
    }
    if (region === 'north') {
        if (purpose === 'grain') rec = hybrids.find(h => h.id === 'aurora');
        if (purpose === 'drought') rec = hybrids.find(h => h.id === 'aurora');
        if (purpose === 'silage') rec = hybrids.find(h => h.id === 'f98');
    }

    const t = translations[currentLang] || translations.ru;
    const resBox = $id('wiz-result');
    if (!resBox || !rec) return;
    resBox.style.display = 'block';
    resBox.innerHTML = `<strong>${t.recommendPrefix || '✅ Рекомендуем:'} FENIKKS ${rec.name}</strong><br>${t.recommendReason || 'Почему'}: ${t.recommendDesc || ''} ${t.faoLabel || 'ФАО'} ${rec.fao}, ${(t.yieldAmountLabel || 'Потенц. урож.').toLowerCase()} ${rec.yield} ${t.yieldUnit || 'т/га'}.`;
}

function calculateSeeds() {
    const area = parseFloat($id('calc-area') ?$id('calc-area').value : 0);
    const density = parseFloat($id('calc-density') ?$id('calc-density').value : 0);
    const seedsPerBag = 80;

    if (!area || area <= 0) {
        const t = translations[currentLang] || translations.ru;
        return alert(t.alertInvalidArea || 'Введите корректную площадь');
    }

    const totalSeedsThousands = area * density;
    const bagsNeeded = Math.ceil(totalSeedsThousands / seedsPerBag);

    const t = translations[currentLang] || translations.ru;
    const resBox = $id('calc-result');
    if (!resBox) return;
    resBox.style.display = 'block';
    resBox.innerHTML = `${t.calcResultIntro || 'На площадь'} <strong>${area} га</strong> ${t.calcResultOutro || 'Вам потребуется'}:<br>
                        <strong>${bagsNeeded} ${t.bagsLabel || 'посевных единиц (мешков)'}</strong>.`;
}

function toggleFaq(el) {
    const answer = el.nextElementSibling;
    if (!answer) return;
    answer.classList.toggle('open');
    const span = el.querySelector('span');
    if (span) span.innerText = answer.classList.contains('open') ? '−' : '+';
}

window.onscroll = function() {
    const fab = $id('fab-top');
    if (!fab) return;
    fab.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? 'flex' : 'none';
};

function toggleChat() {
    const chat = $id('ai-chat');
    if (!chat) return;
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}

function handleChatEnter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = $id('chat-input-field');
    if (!input) return;
    const msg = input.value.trim();
    if (!msg) return;

    const body = $id('chat-body');
    if (!body) return;

    body.innerHTML += `<div class="chat-msg msg-user">${msg}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        const t = translations[currentLang] || translations.ru;
        let reply = t.chatDefaultReply || '';
        const lowerMsg = msg.toLowerCase();
        if (lowerMsg.includes('алматы') || lowerMsg.includes('юг') || lowerMsg.includes('оңтүстік') || lowerMsg.includes('almaty')) {
            reply = t.chatSouthReply || reply;
        }

        body.innerHTML += `<div class="chat-msg msg-ai">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 700);
}

const seedVideos = [
    { name: 'Афина — обзор', videoUrl: 'AFINA VIDEO.mp4' },
    { name: 'Афина — доп', videoUrl: 'afina+.mp4' },
    { name: '958 — обзор', videoUrl: '958.mp4' },
    { name: '958 — дубль', videoUrl: '958V (1).mp4' },
    { name: 'Спартак — обзор', videoUrl: 'SPARTAK FAO480.mp4' },
    { name: 'Эрос — обзор', videoUrl: 'EROS V.mp4' },
    { name: 'Эрос — FAO650', videoUrl: 'Eros+FAO650.mp4' },
    { name: 'Гоби — обзор', videoUrl: 'GOBI FAO 520.mp4' },
    { name: 'FAO общий', videoUrl: 'fao.mp4' }
];

let currentCarouselIndex = 0;

function renderVideoCarousel() {
    const track = $id('video-carousel-track');
    if (!track) return;

    track.innerHTML = '';
    seedVideos.forEach(item => {
        const card = document.createElement('div');
        card.className = 'video-card';

        const isEmbed = typeof item.videoUrl === 'string' && item.videoUrl.includes('youtube');
        const safeUrl = !isEmbed && typeof item.videoUrl === 'string' ? encodeURI(item.videoUrl) : item.videoUrl;
        const mediaHtml = isEmbed
            ? `<iframe src="${item.videoUrl}" frameborder="0" allowfullscreen></iframe>`
            : `<video src="${safeUrl}" controls controlsList="nodownload noplaybackrate" disablePictureInPicture preload="metadata"></video>`;

        card.innerHTML = `${mediaHtml}\n            <div class="video-card-info">\n                <h4>🌽 ${item.name}</h4>\n            </div>`;
        track.appendChild(card);
    });
}

function getVisibleCardsCount() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
}

function moveCarousel(direction) {
    const track = $id('video-carousel-track');
    if (!track) return;
    const cards = Array.from(document.querySelectorAll('.video-card'));
    if (!cards.length) return;

    const visible = getVisibleCardsCount();
    const gap = 20;
    const cardWidth = Math.round(cards[0].getBoundingClientRect().width) + gap;

    const maxIndex = Math.max(0, cards.length - visible);

    if (direction === 'next') {
        currentCarouselIndex = currentCarouselIndex >= maxIndex ? 0 : currentCarouselIndex + 1;
    } else {
        currentCarouselIndex = currentCarouselIndex <= 0 ? maxIndex : currentCarouselIndex - 1;
    }

    const translateX = currentCarouselIndex * cardWidth;
    track.style.transform = `translateX(-${translateX}px)`;
}

window.addEventListener('resize', () => {
    const track = $id('video-carousel-track');
    if (!track) return;
    const cards = document.querySelectorAll('.video-card');
    if (!cards.length) return;
    const visible = getVisibleCardsCount();
    const maxIndex = Math.max(0, cards.length - visible);
    if (currentCarouselIndex > maxIndex) currentCarouselIndex = maxIndex;
    const gap = 20;
    const cardWidth = Math.round(cards[0].getBoundingClientRect().width) + gap;
    track.style.transform = `translateX(-${currentCarouselIndex * cardWidth}px)`;
});

window.addEventListener('load', () => {
    renderCatalog();
    const search = $id('searchInput');
    if (search) search.addEventListener('input', filterCatalog);
    if ($id('recommend-btn'))$id('recommend-btn').addEventListener('click', recommendSeed);
    if ($id('calculate-btn'))$id('calculate-btn').addEventListener('click', calculateSeeds);
    document.querySelectorAll('.faq-question').forEach(item => item.addEventListener('click', () => toggleFaq(item)));
    if ($id('fab-top'))$id('fab-top').addEventListener('click', () => window.scrollTo(0, 0));
    if ($id('fab-ai'))$id('fab-ai').addEventListener('click', toggleChat);
    if ($id('chat-close'))$id('chat-close').addEventListener('click', toggleChat);
    if ($id('chat-send'))$id('chat-send').addEventListener('click', sendChatMessage);
    if ($id('chat-input-field'))$id('chat-input-field').addEventListener('keydown', handleChatEnter);
    if ($id('lang-switch'))$id('lang-switch').addEventListener('click', toggleLanguage);
    if ($id('modal-close'))$id('modal-close').addEventListener('click', closeModal);
    if ($id('hybrid-modal'))$id('hybrid-modal').addEventListener('click', (event) => {
        if (event.target.id === 'hybrid-modal') closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
    });

    translatePage(currentLang);

    const catalogContainer = $id('catalog-container');
    if (catalogContainer && !catalogContainer._hasDetailsDelegate) {
        catalogContainer.addEventListener('click', (e) => {
            const btn = e.target.closest && e.target.closest('.details-btn');
            if (btn) {
                const id = btn.getAttribute('data-id');
                if (id) openModal(id);
            }
        });
        catalogContainer._hasDetailsDelegate = true;
    }

    renderVideoCarousel();
    if ($id('carousel-prev'))$id('carousel-prev').addEventListener('click', () => moveCarousel('prev'));
    if ($id('carousel-next'))$id('carousel-next').addEventListener('click', () => moveCarousel('next'));
});
