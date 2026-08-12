export const languages = {
  ru: 'Рус',
  en: 'Eng',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ru';

export const ui = {
  ru: {
    'site.title': 'Дарья Афанасьева — продуктовый дизайнер',
    'site.description':
      'Продуктовый дизайнер. Проектирую внутренние продукты для 7000 сотрудников и довожу их до прода — вместе с логикой, текстами и кодом.',

    'nav.work': 'Кейсы',
    'nav.about': 'О себе',
    'nav.cv': 'Резюме (PDF)',
    'nav.skipToContent': 'Перейти к содержанию',
    'nav.langLabel': 'Язык интерфейса',

    'home.heroTagline':
      'Продуктовый дизайнер. Проектирую внутренние продукты для 7000 сотрудников и довожу их до прода — вместе с логикой, текстами и кодом.',
    'home.workHeading': 'Кейсы',
    'home.aboutHeading': 'Коротко о себе',
    'home.aboutMore': 'Подробнее — о процессе и о том, что я себе написала',

    'case.role': 'Роль',
    'case.timeline': 'Срок',
    'case.team': 'Команда',
    'case.outcome': 'Результат',
    'case.back': 'Все кейсы',
    'case.next': 'Следующий кейс',
    'case.confidential':
      'Внутренний продукт банка. Все интерфейсы перерисованы на выдуманных данных: имена, суммы и подразделения здесь ненастоящие.',

    'section.context': 'Контекст и проблема',
    'section.inputs': 'Вводные',
    'section.fork': 'Развилка',
    'section.solution': 'Решение',
    'section.result': 'Результат и рефлексия',

    'about.heading': 'О себе',
    'about.processHeading': 'Как я работаю',
    'about.toolsHeading': 'Инструменты, которые я сделала себе сама',
    'about.skillsHeading': 'Навыки',
    'about.contactHeading': 'Контакты',

    'footer.contact': 'Написать',
    'footer.builtWith': 'Собрано на Astro. Исходный код открыт.',
  },
  en: {
    'site.title': 'Daria Afanasieva — Product Designer',
    'site.description':
      'Product designer. I build internal products for 7,000 employees and take them to production — logic, copy and code included.',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.cv': 'CV (PDF)',
    'nav.skipToContent': 'Skip to content',
    'nav.langLabel': 'Interface language',

    'home.heroTagline':
      'Product designer. I build internal products for 7,000 employees and take them to production — logic, copy and code included.',
    'home.workHeading': 'Selected work',
    'home.aboutHeading': 'Short version',
    'home.aboutMore': 'More on how I work and what I’ve built myself',

    'case.role': 'Role',
    'case.timeline': 'Timeline',
    'case.team': 'Team',
    'case.outcome': 'Outcome',
    'case.back': 'All cases',
    'case.next': 'Next case',
    'case.confidential':
      'Internal banking product. Every interface here is redrawn on invented data — the names, figures and departments are not real.',

    'section.context': 'Context and problem',
    'section.inputs': 'Inputs',
    'section.fork': 'The decision',
    'section.solution': 'Solution',
    'section.result': 'Outcome and reflection',

    'about.heading': 'About',
    'about.processHeading': 'How I work',
    'about.toolsHeading': 'Tools I built for myself',
    'about.skillsHeading': 'Skills',
    'about.contactHeading': 'Contact',

    'footer.contact': 'Get in touch',
    'footer.builtWith': 'Built with Astro. Source is public.',
  },
} as const;

export type UIKey = keyof (typeof ui)['ru'];
