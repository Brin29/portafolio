export const navItems = [
  {
    name: "Sobre Mi",
    link: "#sobre_mi",
  },
  {
    name: "Experiencia",
    link: "experiencia",
  },
  {
    name: "Proyectos",
    link: "proyectos",
  },
  {
    name: "Habilidades",
    link: "habilidades",
  },
];

export const experience = [
  {
    id: 1,
    date: "2025 - actualidad",
    position: "Desarrollador Full stack",
    description: {
      details:
        "En tecnoparque me encargue de liderar y desarrollar una gran variedad de proyectos para distintos clientes, me encarga de la comunicación y el desarrollo del proyecto",
      projects: [
        {
          name: "Contaflow",
          description: [
            "Gestione el desarrollo completo desde cero de la aplicación web con Vue, Django y MySQL encargandome del diseño de la arquitectura, el desarrollo de las API's haciendolas seguras con JWT",

            "Colabore con el equipo de diseño de la UI/UX para garantizar una experiencia optima",

            "Cree e integre con el back end, flujos por medio de el automatizador de n8n integrandolo a su vez con gemini"
          ],
          technologies: [
            { name: "Djago", icon: "django" },
            { name: "Vue JS", icon: "vue" },
            { name: "N8n", icon: "n8n" },
            { name: "MySQL", icon: "mySQL" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Git", icon: "git" },
            { name: "Github", icon: "github" }
          ],
        },
        {
          name: "Siprot IA (Desarrollo)",
          description: [
            "Desarrolle el modelo LSTM para realizar predicciones multivariadas con sklearn de python",
            "Lidere el desarrollo del frontend y backend utilizando Vue y FastAPI, asegurando una interfaz intuitiva, eficiente y una buena estructuracion de las API's y de la seguridad con JWT",
            "Documente cada fase del desarrollo del modelo LSTM, facilitando la comprensión y mantenimiento futuro"
          ],
          technologies: [
            { name: "FatApi", icon: "fastApi" },
            { name: "Vue", icon: "vue" },
            { name: "PostgreSQL", icon: "postgres" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Git", icon: "git" },
            { name: "Github", icon: "github" },
            { name: "Postman", icon: "postman" },
          ],
        },
        {
          name: "Pets FLyer",
          description:[
            "Gestione el desarrollo completo del blockchain con solana para crear contratos inteligentes para la autenticidad de documentos",
            "Integre la conexión del blockchain con la interfaz de frontend utilizando buenas practicas",
            "Documente cada fase de desarrollo del blockchain, para mantenimientos futuros del proyecto"
          ],
          technologies: [
            { name: "Solana", icon: "solana" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Git", icon: "git" },
            { name: "Github", icon: "github" },
            { name: "Postman", icon: "postman" },
          ],
        },
      ],
    },
  },
];

export const experienceFreelancer = [
    {
    id: 2,
    date: "2024 - 2025",
    position: "Desarrollador Freelancer Full stack",
    description: {
      details:
        "En mi paso como freelancer desarrolle y implemente dos proyectos para distintos clientes nacionales y internacionales",

      projects: [
        {
          name: "Rame",
          description:
            "Desarrolle e implemente una tienda virtual de venta de ropa, para un emprendimiento internacional",
          technologies: [
            { name: "Spring Boot", icon: "spring boot" },
            { name: "React JS", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind css" },
            { name: "MySQL", icon: "mysql" },
            { name: "Git", icon: "git" },
            { name: "Github", icon: "github" },
            { name: "Postman", icon: "postman" },
          ],
        },
        {
          name: "Inventario (Desarrollo)",
          description:
            "Desarrolle un inventario para un local de venta de productos de maquillaje",
          technologies: [
            { name: "Spring Boot", icon: "spring boot" },
            { name: "React JS", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind css" },
            { name: "MySQL", icon: "mysql" },
            { name: "Git", icon: "git" },
            { name: "Github", icon: "github" },
            { name: "Postman", icon: "postman" },
          ],
        },
      ],
    },
  },
]

export const experiences = [
  { 
    date: "2025 - Actualidad",
    title: 'Tecnoparque - FullStack',
    content: 'dadsa dasd sadsad dsadsa dsadadsadad sadsadasdsa dsadsadada sdsadasdsa dasdadsad dsadsadsa dadada sdadsadsadadasdas dasdsa asdsadsadasd asdsadsa dadsadsa dsadsadd sasda dadada',
    src: ""
  },
  {
    date: "2025 - 2024",
    title: "Freelancer - FullSatck",
    content: 'dadsa dasd sadsad dsadsa dsadadsadad sadsadasdsa dsadsadada sdsadasdsa dasdadsad dsadsadsa dadada sdadsadsadadasdas dasdsa asdsadsadasd asdsadsa dadsadsa dsadsadd',
    src: ""
  }
]

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

/* export const projects = [
  {
    id: 1,
    title: "Generador de nombres con IA",
    description:
      "Desarrolle una aplicación web, integrandola con n8n, donde por medio de inteligencia artificial se generan nombres para mascotas, dependiendo unos datos que se ingresen",
    image: "#",
    technologies: [
      { name: "Python", icons: "python" },
      { name: "Django", icon: "django" },
      { name: "Vue.js", icon: "vue" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "N8n", icon: "n8n" },
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Acortador de Contraseñas",
    description:
      "Hice un acortador de contraseña usando Spring Boot, Docker y Redis, integrandola con la API de Bitly's, use redis para reducir y mejorar la velocidad del llamado a la API",
    image: "#",
    technologies: [
      { name: "Spring Boot", icons: "spring boot" },
      { name: "JAVA", icon: "java" },
      { name: "Angular", icon: "angular" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Docker", icon: "docker" },
      { name: "Redis", icon: "redis" },
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Chat con WebSocket",
    description:
      "Desarrolle una aplicacion implementando web socket, para un manejo de mensajes en tiempo real",
    image: "#",
    technologies: [
      { name: "Spring Boot", icons: "spring boot" },
      { name: "JAVA", icon: "java" },
      { name: "Angular", icon: "angular" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    link: "#"
  },
]; */

export const technologies = [
  { name: "Spring Boot", icons: "spring boot" },
  { name: "JAVA", icon: "java" },
  { name: "React JS", icon: "react" },
  { name: "Next JS", icon: "next" },
  { name: "Tailwind CSS", icon: "tailwind css" },
  { name: "MySQL", icon: "mysql" },
  { name: "Docker", icon: "docker" },
  { name: "Redis", icon: "redis" },
  { name: "Djago", icon: "django" },
  { name: "FatApi", icon: "fastApi" },
  { name: "Vue JS", icon: "vue" },
];
