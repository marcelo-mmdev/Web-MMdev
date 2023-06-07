import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cldf,
  comeia,
  devDuo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Software Engineer",
    icon: web,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    designation:
      "Project Manager | TI | Squad as a service | Professor | Consultoria Pedagógica",
    company: "Comeia",
    image: "https://linkedin.com/in/francisco-rodrigues87/overlay/photo/",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Anderson",
  //   designation:
  //     "Project Manager | TI | Squad as a service | Professor | Consultoria Pedagógica",
  //   company: "DEF Corp",
  //   image: "https://github.com/ebomounao.png",
  // },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
