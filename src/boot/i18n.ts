import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";

const messages = {
  pt: {
    about: "Sobre mim",
    aboutMeDescription:
      `Olá! Meu nome é Leonardo Moreira Cigalotti e resido no Brasil. Desde 2021, venho adquirindo experiência em desenvolvimento de software, trabalhando com linguagens como PHP, Java, JavaScript e C#, além de tecnologias web como HTML e CSS.

      Tenho experiência prática com sistemas legados, atuando em manutenção, correção de problemas e refatoração de código para melhorar organização e legibilidade. Também já desenvolvi interfaces web dinâmicas e integrei aplicações com APIs.

      Possuo grande interesse em Inteligência Artificial, explorando conceitos e ferramentas que possam ser aplicadas na resolução de problemas reais. Tenho facilidade de aprendizado e me adapto rapidamente a novas tecnologias e desafios.

      Busco oportunidades para evoluir como desenvolvedor, contribuindo com soluções eficientes, bem estruturadas e que gerem impacto positivo.`,
    all: "Tudo",
    backend: "Backend",
    callMe: "Bora conversar? Me chama em qualquer um desses canais",
    code: "Código",
    codes: "Linguagens",
    concluido: "Concluído",
    contact: "Contato",
    darkMode: "Modo Escuro",
    education: "Educação",
    educations: [
      {
        id: 1,
        degree: "Gestão de Tecnologia da Informação",
        institution: "FATEC Jornalista Omair Fagundes de Oliveira",
        year: "2019-2021",
        site: "https://fatecbraganca.cps.sp.gov.br",
        img: "logo-fatec.png",
        ok: true,
      },
      {
        id: 2,
        degree: "MBA em Inteligência Artificial e Analytics",
        institution: "Cruzeiro do Sul Virtual",
        year: "2024-2024",
        site: "https://www.cruzeirodosulvirtual.com.br",
        img: "logo-cruzeiro-do-sul-virtual.jpg",
        ok: true,
      },
    ],
    em_andamento: "Em andamento",
    experience: "Experiência",
    experiences: [
      {
        id: 3,
        company: "TMAX Tecnologia",
        role: "Desenvolvedor Júnior",
        period: "2025 - Atual",
        description: [
          "Desenvolvimento de sistemas web utilizando PHP, Vue.js, Java e Laravel",
          "Desenvolvimento de aplicações mobile com React e .NET MAUI",
          "Manutenção de sistemas web e mobile",
          "Gerenciamento e manutenção de banco de dados",
          "Trabalho colaborativo em equipe",
        ],
        logo: "logo-tmax.png",
        link: "https://tmax.com.br",
        current: true,
      },
      {
        id: 2,
        company: "TMAX Tecnologia",
        role: "Aprendiz de Programação",
        period: "2021 - 2025",
        description: [
          "Desenvolvimento de sistemas web utilizando PHP, Vue.js, Java e Laravel",
          "Desenvolvimento de aplicações mobile com React e .NET MAUI",
          "Manutenção de sistemas web e mobile",
          "Gerenciamento e manutenção de banco de dados",
          "Trabalho colaborativo em equipe",
        ],
        logo: "logo-tmax.png",
        link: "https://tmax.com.br",
        current: false,
      },
      {
        id: 1,
        company: "Secretaria de Educação de Bragança Paulista",
        role: "Estagiário de Suporte em TI",
        period: "2020",
        description: [
          "Suporte técnico em computadores",
          "Instalação e configuração de sistemas operacionais",
          "Manutenção de infraestrutura de rede",
          "Suporte a dispositivos educacionais (tablets)",
          "Formatação e configuração de equipamentos",
        ],
        logo: "logo-prefeitura-braganca.png",
        link: "https://braganca.sp.gov.br/secretarias/educacao",
        current: false,
      },
    ],
    frontend: "Frontend",
    hero: {
      dev: "Desenvolvedor Full Stack",
      junior: "Desenvolvedor em evolução",
      modern: "Criando soluções modernas",
      refactor: "Refatorando sistemas complexos",
    },
    language: "Idioma",
    lightMode: "Modo Claro",
    mobile: "Mobile",
    others: "Outros",
    project: "Projetos",
    projects: [
      {
        id: 1,
        title: "Pokedex",
        type: "frontend",
        description:
          "Uma Pokédex simples desenvolvida com JavaScript consumindo a PokeAPI",
        tech: ["HTML", "CSS", "JavaScript"],
        img: "pokedex-preview.png",
        github: "leonardocigalotti/pokedex",
        site: "https://leonardocigalotti.github.io/pokedex/",
      },
      {
        id: 2,
        title: "Jogo da Forca",
        type: "frontend",
        description:
          "Jogo da forca desenvolvido em React com TypeScript, focado em performance e interface limpa",
        tech: ["React", "TypeScript", "CSS"],
        img: "hangman-preview.png",
        github: "leonardocigalotti/hangman",
        site: "https://leonardocigalotti.github.io/hangman/",
      },
    ],
    skill: "Habilidades",
    view_site: "Ver site",
  },

  en: {
    about: "About me",
    aboutMeDescription:
      `Hello! My name is Leonardo Moreira Cigalotti and I live in Brazil. Since 2021, I have been gaining experience in software development, working with languages such as PHP, Java, JavaScript, and C#, as well as web technologies like HTML and CSS.

      I have practical experience with legacy systems, working on maintenance, bug fixing, and code refactoring to improve organization and readability. I have also developed dynamic web interfaces and integrated applications with APIs.

      I have a strong interest in Artificial Intelligence, exploring concepts and tools that can be applied to solve real-world problems. I learn quickly and adapt easily to new technologies and challenges.

      I am seeking opportunities to grow as a developer, contributing with efficient, well-structured solutions that generate positive impact.`,
    all: "All",
    backend: "Backend",
    callMe: "Let’s connect! Feel free to reach out through any of these channels.",
    code: "Code",
    codes: "Languages",
    concluido: "Completed",
    contact: "Contact",
    darkMode: "Dark Mode",
    education: "Education",
    educations: [
      {
        id: 1,
        degree: "Information Technology Management",
        institution: "FATEC Jornalista Omair Fagundes de Oliveira",
        year: "2019-2021",
        site: "https://fatecbraganca.cps.sp.gov.br",
        img: "logo-fatec.png",
        ok: true,
      },
      {
        id: 2,
        degree: "MBA in Artificial Intelligence and Analytics",
        institution: "Cruzeiro do Sul Virtual",
        year: "2024-2024",
        site: "https://www.cruzeirodosulvirtual.com.br",
        img: "logo-cruzeiro-do-sul-virtual.jpg",
        ok: true,
      },
    ],
    em_andamento: "In progress",
    experience: "Experience",
    experiences: [
      {
        id: 3,
        company: "TMAX Tecnologia",
        role: "Junior Developer",
        period: "2025 - Present",
        description: [
          "Web development using PHP, Vue.js, Java, and Laravel",
          "Mobile development with React and .NET MAUI",
          "Maintenance of web and mobile systems",
          "Database management and maintenance",
          "Team collaboration",
        ],
        logo: "logo-tmax.png",
        link: "https://tmax.com.br",
        current: true,
      },
      {
        id: 2,
        company: "TMAX Tecnologia",
        role: "Programming Apprentice",
        period: "2021 - 2025",
        description: [
          "Web development using PHP, Vue.js, Java, and Laravel",
          "Mobile development with React and .NET MAUI",
          "Maintenance of web and mobile systems",
          "Database management and maintenance",
          "Team collaboration",
        ],
        logo: "logo-tmax.png",
        link: "https://tmax.com.br",
        current: false,
      },
      {
        id: 1,
        company: "Bragança Paulista Department of Education",
        role: "IT Support Intern",
        period: "2020",
        description: [
          "Technical support for computers",
          "Operating system installation and configuration",
          "Network infrastructure maintenance",
          "Support for educational devices (tablets)",
          "Equipment formatting and setup",
        ],
        logo: "logo-prefeitura-braganca.png",
        link: "https://braganca.sp.gov.br/secretarias/educacao",
        current: false,
      },
    ],
    frontend: "Frontend",
    hero: {
      dev: "Full Stack Developer",
      junior: "Aspiring Developer",
      modern: "Building modern solutions",
      refactor: "Refactoring complex systems",
    },
    language: "Language",
    lightMode: "Light Mode",
    mobile: "Mobile",
    others: "Others",
    project: "Projects",
    projects: [
      {
        id: 1,
        title: "Pokedex",
        type: "frontend",
        description:
          "A simple Pokédex built with JavaScript consuming the PokeAPI",
        tech: ["HTML", "CSS", "JavaScript"],
        img: "pokedex-preview.png",
        github: "leonardocigalotti/pokedex",
        site: "https://leonardocigalotti.github.io/pokedex/",
      },
      {
        id: 2,
        title: "Hangman Game",
        type: "frontend",
        description:
          "Hangman game developed with React and TypeScript, focused on performance and clean UI",
        tech: ["React", "TypeScript", "CSS"],
        img: "hangman-preview.png",
        github: "leonardocigalotti/hangman",
        site: "https://leonardocigalotti.github.io/hangman/",
      },
    ],
    skill: "Skills",
    view_site: "View site",
  },

  es: {
    about: "Sobre mí",
    aboutMeDescription:
      `¡Hola! Mi nombre es Leonardo Moreira Cigalotti y resido en Brasil. Desde 2021, he estado adquiriendo experiencia en desarrollo de software, trabajando con lenguajes como PHP, Java, JavaScript y C#, además de tecnologías web como HTML y CSS.

      Tengo experiencia práctica con sistemas heredados, trabajando en mantenimiento, corrección de errores y refactorización de código para mejorar la organización y legibilidad. También he desarrollado interfaces web dinámicas e integrado aplicaciones con APIs.

      Tengo un gran interés en Inteligencia Artificial, explorando conceptos y herramientas que puedan aplicarse en la resolución de problemas reales. Aprendo con facilidad y me adapto rápidamente a nuevas tecnologías y desafíos.

      Busco oportunidades para crecer como desarrollador, contribuyendo con soluciones eficientes, bien estructuradas y que generen un impacto positivo.`,
    all: "Todo",
    backend: "Backend",
    callMe: "¡Hablemos! Puedes contactarme por cualquiera de estos canales.",
    code: "Código",
    codes: "Lenguajes",
    concluido: "Completado",
    contact: "Contacto",
    darkMode: "Modo oscuro",
    education: "Educación",
    educations: [
      {
        id: 1,
        degree: "Gestión de Tecnología de la Información",
        institution: "FATEC Jornalista Omair Fagundes de Oliveira",
        year: "2019-2021",
        site: "https://fatecbraganca.cps.sp.gov.br",
        img: "logo-fatec.png",
        ok: true,
      },
      {
        id: 2,
        degree: "MBA en Inteligencia Artificial y Analytics",
        institution: "Cruzeiro do Sul Virtual",
        year: "2024-2024",
        site: "https://www.cruzeirodosulvirtual.com.br",
        img: "logo-cruzeiro-do-sul-virtual.jpg",
        ok: true,
      },
    ],
    em_andamento: "En curso",
    experience: "Experiencia",
   experiences: [
      {
        id: 3,
        company: "TMAX Tecnologia",
        role: "Desarrollador Junior",
        period: "2025 - Actual",
        description: [
          "Desarrollo web con PHP, Vue.js, Java y Laravel",
          "Desarrollo mobile con React y .NET MAUI",
          "Mantenimiento de sistemas web y mobile",
          "Gestión y mantenimiento de bases de datos",
          "Trabajo en equipo",
        ],
        logo: "logo-tmax.png",
        link: "https://tmax.com.br",
        current: true,
      },
      {
        id: 2,
        company: "TMAX Tecnologia",
        role: "Aprendiz de Programación",
        period: "2021 - 2025",
        description: [
          "Desarrollo web con PHP, Vue.js, Java y Laravel",
          "Desarrollo mobile con React y .NET MAUI",
          "Mantenimiento de sistemas web y mobile",
          "Gestión y mantenimiento de bases de datos",
          "Trabajo en equipo",
        ],
        logo: "logo-tmax.png",
        link: "https://tmax.com.br",
        current: false,
      },
      {
        id: 1,
        company: "Secretaría de Educación de Bragança Paulista",
        role: "Practicante de Soporte TI",
        period: "2020",
        description: [
          "Soporte técnico en computadoras",
          "Instalación y configuración de sistemas operativos",
          "Mantenimiento de redes",
          "Soporte a dispositivos educativos (tablets)",
          "Formateo y configuración de equipos",
        ],
        logo: "logo-prefeitura-braganca.png",
        link: "https://braganca.sp.gov.br/secretarias/educacao",
        current: false,
      },
    ],
    frontend: "Frontend",
    hero: {
      dev: "Desarrollador Full Stack",
      junior: "Desarrollador en crecimiento",
      modern: "Creando soluciones modernas",
      refactor: "Refactorizando sistemas complejos",
    },
    language: "Idioma",
    lightMode: "Modo claro",
    mobile: "Mobile",
    others: "Otros",
    project: "Proyectos",
    projects: [
      {
        id: 1,
        title: "Pokedex",
        type: "frontend",
        description:
          "Una Pokédex simple desarrollada con JavaScript consumiendo la PokeAPI",
        tech: ["HTML", "CSS", "JavaScript"],
        img: "pokedex-preview.png",
        github: "leonardocigalotti/pokedex",
        site: "https://leonardocigalotti.github.io/pokedex/",
      },
      {
        id: 2,
        title: "Juego del Ahorcado",
        type: "frontend",
        description:
          "Juego del ahorcado desarrollado con React y TypeScript, enfocado en rendimiento y UI limpia",
        tech: ["React", "TypeScript", "CSS"],
        img: "hangman-preview.png",
        github: "leonardocigalotti/hangman",
        site: "https://leonardocigalotti.github.io/hangman/",
      },
    ],
    skill: "Habilidades",
    view_site: "Ver sitio",
  },
};

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: "pt",
    messages,
  });

  app.use(i18n);
});