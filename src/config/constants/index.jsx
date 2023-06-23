import {
  mobile,
  backend,
  creator,
  web,
  foto,
  // Balls
  html,
  css,
  javascript,
  typescript,
  reactjs,
  angular,
  chakra,
  nodejs,
  mongodb,
  postgresql,
  sqlserver,
  docker,
  git,
  // ****
  // Experiencias
  comeia,
  cldf,
  devDuo,
  // ****
  // Projects
  pokedex,
  tripguide,
  embreve,
  ebomounao,
  projectlist,
  // ****
  // Feedbacks
  chico,
  // ****
} from "../../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developer Full-Stack",
    icon: foto,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Chakra UI",
    icon: chakra,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "FRONT-END DEVELOPER",
    company_name: "Comeia",
    icon: comeia,
    iconBg: "#383E56",
    date: "Jan 2022 - Apr 2023",
    points: [
      "Application development with React and Next.",
      "Front-end improvements and maintenance of legacy applications.",
      "Creation of responsive layouts.",
      "Consuming Rest APIs.",
      "Agile methodologies in web development.",
      "Use of various everyday tools such as Git, GitHub, ChakraUI, Figma, among others.",
      "Using best coding practices.",
    ],
  },
  {
    title: "FULL-STACK DEVELOPER",
    company_name: "Câmara Legislativa do DF",
    icon: cldf,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Development of a financial system.",
      "Using Agile Methodologies and technologies like ReactJs TypeScript.",
      "Creation of responsive layouts.",
      "API consumption and Spring boot with Rest API development.",
      "Microservices, JUnit unit tests and SQL Server integration.",
    ],
  },
  {
    title: "FRONT-END DEVELOPER",
    company_name: "É bom ou não",
    icon: "https://github.com/ebomounao.png",
    iconBg: "#383E56",
    date: "Aug 2022 - Out 2022",
    points: [
      "Application development with React and Next.",
      "Front-end improvements and maintenance of legacy applications.",
      "Creation of responsive layouts.",
      "Consuming Rest APIs.",
      "Agile methodologies in web development.",
      "Use of various everyday tools such as Next.JS, ReactJS, ChakraUI, Figma, among others.",
      "Using best coding practices.",
    ],
  },
  {
    title: "FULL-STACK DEVELOPER",
    company_name: "My Beauty Pass",
    icon: "https://github.com/My-Beauty-Pass.png",
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Aug 2022",
    points: [
      "Application development, improvement and maintenance of front-end and back-end.",
      "Creation of responsive layouts.",
      "Using Javascript (Angular, Typescript, CSS MaterialUI) and with Java (Spring, POO, Maven, Gradle, Microservicos, Rest API, JUnit).",
      "Code, perform tests and develop new features, which meet the needs of users.",
    ],
  },
  {
    title: "INTERNSHIP DEVELOPER",
    company_name: "Comeia",
    icon: comeia,
    iconBg: "#383E56",
    date: "Jul 2021 - Dez 2021",
    points: [
      "I participated in the creation processes of some of the company's applications.",
      "In addition, I worked on the Front-end and Back-end.",
      "Always using Java, Javascript and Typescript as the base language.",
      "In addition to other tools such as SQL Server and PostegreSQL.",
      "Where I had the opportunity to learn a lot about Front-end and Back-end.",
    ],
  },
  {
    title: "FULL-STACK DEVELOPER",
    company_name: "DevDuo",
    icon: devDuo,
    iconBg: "#E6DEDD",
    date: "Out 2021 - Dez 2021",
    points: [
      "Application development, improvement and maintenance of front-end and back-end.",
      "Creation of responsive layouts.",
      "Using Javascript (Angular, Typescript, CSS MaterialUI) and with Java (Spring, POO, Maven, Gradle, Microservicos, Rest API, JUnit).",
      "Code, perform tests and develop new features, which meet the needs of users.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Profissional organizado, transparente nas estimativas e andamento do trabalho. Disposto sempre a aprender e buscando conhecimentos necessários para realizar entregas com valor.",
    name: "Francisco Rodrigues",
    src: "https://www.linkedin.com/in/francisco-rodrigues87/",
    designation:
      "Project Manager | TI | Squad as a service | Professor | Consultoria Pedagógica",
    company: "Comeia",
    image: chico,
  },
  {
    testimonial:
      "Fiz parte de alguns projetos com o Marcelo, vejo um grande potencial nele e posso afirmar que é um ótimo profissional com muitas qualidades, como: ótima comunicação, bom pensamento logico, tomada de decisão e traz segurança para a equipe na qual ele faz parte. Adoraria trabalhar novamente com o Marcelo, pois é um grande possifional e um grande amigo.",
    name: "Douglas de Oliveira",
    designation:
      "Desenvolvedor FullStack | React | Node | TypeScript | MySQL | MongoDB | Express",
    company: "METAVERSE TECHNOLOGIES",
    // image: "",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Pokedex",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/marcelo-mmdev/Pokedex",
  },
  {
    name: "Medusa",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/marcelo-mmdev/Medusa",
  },
  {
    name: "Pomodoro",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: embreve,
    source_code_link: "https://github.com/marcelo-mmdev/pomodoro",
  },
  {
    name: "É bom ou não",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: ebomounao,
    source_code_link: "https://ebomounao.com.br/",
  },
  {
    name: "Project List",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: projectlist,
    source_code_link: "https://project-react-js-omega.vercel.app/",
  },
  {
    name: "Project Stock",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Java",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: embreve,
    source_code_link: "https://github.com/marcelo-mmdev/project_stock",
  },
];

export { services, technologies, experiences, testimonials, projects };
