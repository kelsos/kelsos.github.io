// Single source for the homepage Experience/Expertise sections and the /cv
// page (which is also rendered to public/cv.pdf by `pnpm cv:pdf`).

export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  /** One-liner shown on the homepage timeline. */
  summary: string;
  /** Detail shown on the CV. */
  highlights: string[];
  stack?: string[];
}

export interface EducationEntry {
  period: string;
  institution: string;
  degree: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface CvProject {
  title: string;
  url: string;
  period: string;
  description: string;
}

export const cvSummary
  = 'Software engineer with over a decade of experience across web, Android and infrastructure, '
    + 'focused on open-source, privacy-preserving software. I lead the frontend of rotki, a local-first '
    + 'portfolio tracking and accounting application, maintain its design system and shared tooling, '
    + 'and run the infrastructure behind its hosted services.';

export const experience: ExperienceEntry[] = [
  {
    company: 'Rotki Solutions GmbH',
    highlights: [
      'Lead frontend development of rotki, an open-source, local-first portfolio tracker and accounting app (Electron, Vue 3, TypeScript, Python backend): architecture, code review and features across balances, history, accounting and settings.',
      'Drove the incremental migration from Vue 2, Vuex, Vuetify and webpack to Vue 3, Composition API, Pinia, Vite and Vitest while feature work continued.',
      'Created and maintain @rotki/ui-library, an open-source Vue component library and design system on Tailwind CSS, published on npm with Storybook docs, and moved the app off Vuetify onto it.',
      'Designed core parts of the app experience: the background task center, notifications and actions center, history event and data-issue workflows, advanced filtering and the settings pages.',
      'Own the frontend testing strategy: Vitest unit and component tests and Playwright end-to-end suites that run against the packaged app, sharded in CI.',
      'Maintain the CI and release pipeline on GitHub Actions for Linux, macOS and Windows desktop builds, including code signing, notarization, auto-updates and build provenance attestations.',
      'Build and maintain rotki.com (Nuxt): product, integration and SEO landing pages, the account area, sign-up and the subscription checkout and payment flows.',
      'Develop the premium feature UI, such as portfolio graphs and staking dashboards.',
      'Operate the infrastructure for rotki\'s hosted services with Ansible and Docker Swarm: deployments, backups and Grafana monitoring.',
      'Maintain shared open-source tooling (@rotki/eslint-config, @rotki/eslint-plugin, reusable GitHub Actions) and contribute to the user documentation.',
    ],
    period: '2021 - Now',
    role: 'Frontend Lead / Infrastructure',
    stack: ['Vue 3', 'TypeScript', 'Nuxt', 'Pinia', 'Electron', 'Tailwind CSS', 'Vitest', 'Playwright', 'Storybook', 'GitHub Actions', 'Python', 'Ansible', 'Docker Swarm', 'Grafana'],
    summary: 'Working with Vue.js/TypeScript, Ansible & Docker Swarm.',
  },
  {
    company: 'rotki',
    highlights: [
      'Rebuilt the frontend on Vue.js with Vuetify and a modular Vuex store, including background task monitoring.',
      'Introduced Cypress end-to-end tests to replace the Spectron suite.',
      'Set up macOS code signing and notarization for the Electron releases.',
    ],
    period: '2018 - 2021',
    role: 'Open-source Contributor',
    stack: ['Vue.js', 'TypeScript', 'Vuex', 'Vuetify', 'Cypress', 'Electron'],
    summary: 'Working with Vue.js/TypeScript on the frontend.',
  },
  {
    company: 'brainbot technologies AG',
    highlights: [
      'Developed the Raiden WebUI, the Angular frontend for the Python implementation of the Raiden Network.',
      'Part of the Raiden Light Client team, working on the TypeScript SDK, CLI and the Vue.js dApp for off-chain token transfers.',
    ],
    period: '2018 - 2020',
    role: 'Software Engineer',
    stack: ['Angular', 'Vue.js', 'TypeScript', 'RxJS', 'Ethereum'],
    summary: 'Raiden Network WebUI and part of the Raiden Light Client/Dapp team.',
  },
  {
    company: 'arx.net S.A.',
    highlights: [
      'Core team member of White Mobile Cloud, a white-label cloud backup and restore platform, responsible for developing and maintaining its Android client.',
      'Maintained web-based content management systems and internal tools, and provided technical support for client services.',
    ],
    period: '2015 - 2018',
    role: 'Senior Android Developer',
    stack: ['Android', 'Kotlin', 'Java', 'RxJava', 'Retrofit', 'Perl', 'JavaScript'],
    summary: 'Lead of the Android client of White Mobile Cloud.',
  },
  {
    company: 'arx.net S.A.',
    highlights: [
      'Built the frontend of a custom content management system for a credit information provider, as a single-page application with Foundation, Handlebars and Sammy.js over a Perl (Apache::ASP) backend.',
    ],
    period: '2013 - 2014',
    role: 'Frontend Developer',
    summary: 'Web development with Apache::ASP, Perl, and JQuery.',
  },
  {
    company: 'arx.net S.A.',
    highlights: [
      'Worked on the frontend and parts of the Redis/Perl backend of a dashboard that became part of the Minimob mobile advertising platform.',
    ],
    period: '2012 - 2013',
    role: 'Intern',
    summary: 'Web development with Apache::ASP, Perl, and JQuery.',
  },
  {
    company: 'Perfect Edge Ltd',
    highlights: [
      'Developed a multiplayer card game in ActionScript 3 and Apache Flex, worked on its PHP/MySQL backend and administered its Linux servers.',
    ],
    period: '2011 - 2013',
    role: 'Software Developer / Infrastructure',
    summary: 'Part of a small team working with Adobe Flex/ActionScript 3/PHP/MySQL.',
  },
];

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor\'s Degree',
    institution: 'IT department, ATEI Thessalonikis',
    period: '2004 - 2014',
  },
];

export const languages: string[] = [
  'Greek (native)',
  'English (Certificate of Proficiency, University of Michigan)',
];

export const cvProjects: CvProject[] = [
  {
    description: 'Open-source (GPLv3) Android app and C# MusicBee plugin for controlling the MusicBee player remotely, available on Google Play.',
    period: '2011 - Now',
    title: 'MusicBee Remote',
    url: 'https://mbrc.kelsos.net',
  },
  {
    description: 'Android app for a proof-of-location platform that lets users interact with Ethereum smart contracts based on their location.',
    period: '2017',
    title: 'Sikorka',
    url: 'https://github.com/Sikorkaio/android-app',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'Python', 'Kotlin', 'Go', 'C#', 'JavaScript', 'Lua', 'Rust'],
  },
  {
    name: 'Frontend',
    skills: ['Vue.js 3', 'Nuxt.js', 'Angular', 'Tailwind CSS', 'PostCSS', 'Storybook', 'Vue I18n', 'Vite', 'Vitest'],
  },
  {
    name: 'Backend/Systems',
    skills: ['Python CLI', 'Go CLI', '.NET Framework', 'REST APIs'],
  },
  {
    name: 'Mobile',
    skills: ['Android', 'Kotlin', 'Architecture Components', 'Koin DI', 'Material Design'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Docker', 'Ansible', 'Git', 'pytest', 'Vitest', 'Robolectric', 'MockK', 'npm', 'pnpm', 'uv', 'Gradle', 'ESLint'],
  },
  {
    name: 'Specialized',
    skills: ['CLI Development', 'Cross-platform Apps', 'Open Source', 'UI/UX Design Systems', 'Privacy-focused Apps', 'Developer Tooling'],
  },
];
