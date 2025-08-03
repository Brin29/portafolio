import {
  githubClearMode,
  githubDarkMode,
  linkedinClearMode,
  linkedinDarkMode,
  gmailClearMode,
  gmailDarkMode,
  django,
  gmail,
  linkedin,
  aws,
  docker,
  html,
  css,
  nextJs,
  typescript,
  javascript,
  fastapi,
  git,
  github,
  mysql,
  postgresql,
  postman,
  react,
  solana,
  n8n,
  springboot,
  tailwind,
  vue,
  webSocket,
  petsName,
  urlShorten,
  detector,
  matbloptlip,
  ultratycs,
  python,
  colab,
  roboflow,
  firebase,
  graphql,
  redis
} from "../assets";

export const navItems = [
  {
    name: "Sobre Mi",
    link: "#sobre_mi",
    icon: "inicio"
  },
  {
    name: "Experiencia",
    link: "#experiencia",
    icon: "experiencia"
  },
  {
    name: "Proyectos",
    link: "#proyectos",
    icon: "proyectos"
  },
  {
    name: "Habilidades",
    link: "#habilidades",
    icon: "habilidades"
  },
  {
    name: "Contacto",
    link: "#contacto",
    icon: "contacto"
  },
];

export const contactDarkMode = [
  { icon: gmailDarkMode.src, alt: "Gmail", link: "mailto:breinerstevendev@gmail.com"},
  { icon: githubDarkMode.src, alt: "Github", link: "https://github.com/Brin29"},
  { icon: linkedinDarkMode.src, alt: "Linkedin", link: "www.linkedin.com/in/breiner-parra"}
]

export const contactClearMode = [
  { icon: gmailClearMode.src, alt: "Gmail", link: "mailto:breinerstevendev@gmail.com"},
  { icon: githubClearMode.src, alt: "Github", link: "https://github.com/Brin29"},
  { icon: linkedinClearMode.src, alt: "Linkedin", link: "www.linkedin.com/in/breiner-parra"}
]


export const experience = [
  {
    id: 1,
    date: "2025",
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

            "Cree e integre con el back end, flujos por medio de el automatizador de n8n integrandolo a su vez con gemini",
          ],
          hadWebSite: true,
          webSite: "https://contaflow.nativoweb.com/login",
          technologies: [
            { name: "Django", icon: django.src },
            { name: "Vue JS", icon: vue.src },
            { name: "N8n", icon: n8n.src },
            { name: "MySQL", icon: mysql.src },
            { name: "Tailwind CSS", icon: tailwind.src },
            { name: "Git", icon: git.src },
            { name: "Github", icon: github.src },
            { name: "Postman", icon: postman.src }
          ],
        },
        {
          name: "Siprot IA (Desarrollo)",
          description: [
            "Desarrolle el modelo LSTM para realizar predicciones multivariadas con sklearn de python",
            "Lidere el desarrollo del frontend y backend utilizando Vue y FastAPI, asegurando una interfaz intuitiva, eficiente y una buena estructuracion de las API's y de la seguridad con JWT",
            "Documente cada fase del desarrollo del modelo LSTM, facilitando la comprensión y mantenimiento futuro",
          ],
          hadWebSite: false,
          technologies: [
            { name: "FastApi", icon: fastapi.src },
            { name: "Vue JS", icon: vue.src },
            { name: "PostgreSQL", icon: postgresql.src },
            { name: "Tailwind CSS", icon: tailwind.src },
            { name: "Git", icon: git.src },
            { name: "Github", icon: github.src },
            { name: "Postman", icon: postman.src },
          ],
        },
        {
          name: "Pets FLyer (Desarrollo)",
          description: [
            "Gestione el desarrollo completo del blockchain con solana para crear contratos inteligentes para la autenticidad de documentos",
            "Integre la conexión del blockchain con la interfaz de frontend utilizando buenas practicas",
            "Documente cada fase de desarrollo del blockchain, para mantenimientos futuros del proyecto",
          ],
          hadWebSite: true,
          webSite: "https://petsflyer.com/",
          technologies: [
            { name: "Solana", icon: solana.src },
            { name: "React", icon: react.src },
            { name: "Tailwind CSS", icon: tailwind.src },
            { name: "Git", icon: git.src },
            { name: "Github", icon: github.src },
            { name: "Postman", icon: postman.src },
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
    position: "Desarrollador Freelancer",
    description: {
      details:
        "En mi paso como freelancer desarrolle y implemente dos proyectos para distintos clientes nacionales y internacionales",

      projects: [
        {
          name: "Rame",
          description: [
            "Lidere y colabore con el desarrollo completo desde cero de la aplicación web con React, Spring Boot y MySQL",
            "Diseñe la interfaz de principio a fin de la UI/UX",
            "Integre diferentes herramientas y API's externas como mercado pago para el manejo de pasarelas de pago",
          ],
          technologies: [
            { name: "Spring Boot", icon: springboot.src },
            { name: "React JS", icon: react.src },
            { name: "Tailwind CSS", icon: tailwind.src },
            { name: "MySQL", icon: mysql.src },
            { name: "Git", icon: git.src },
            { name: "Github", icon: github.src },
            { name: "Postman", icon: postman.src },
          ],
        },
        {
          name: "Inventario (Desarrollo)",
          description: [
            "Desarrolle de principio a fin toda la interfaz con Vue y Django",
            "Me encargue de la creación de las API's y el manejo de de la seguridad con JWT",
            "Colabore con diseñadores para la interfaz del frontend",
            "Maquete la arquitectura de la aplicación",
          ],
          technologies: [
            { name: "Django", icon: django.src },
            { name: "React", icon: react.src },
            { name: "Tailwind CSS", icon: tailwind.src },
            { name: "MySQL", icon: mysql.src },
            { name: "Git", icon: git.src },
            { name: "Github", icon: github.src },
            { name: "Postman", icon: postman.src },
          ],
        },
      ],
    },
  },
];

export const experiences = [
  {
    date: "2025 - Actualidad",
    title: "Tecnoparque - FullStack",
    content:
      "dadsa dasd sadsad dsadsa dsadadsadad sadsadasdsa dsadsadada sdsadasdsa dasdadsad dsadsadsa dadada sdadsadsadadasdas dasdsa asdsadsadasd asdsadsa dadsadsa dsadsadd sasda dadada",
    src: "",
  },
  {
    date: "2025 - 2024",
    title: "Freelancer - FullSatck",
    content:
      "dadsa dasd sadsad dsadsa dsadadsadad sadsadasdsa dsadsadada sdsadasdsa dasdadsad dsadsadsa dadada sdadsadsadadasdas dasdsa asdsadsadasd asdsadsa dadsadsa dsadsadd",
    src: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Generador de Nombres para mascotas",
    des: "Aplicación creada con flujos automatizados en n8n e inteligencia artificial de Gemini para generar nombres únicos para mascotas. El usuario ingresa características como tipo o personalidad, y recibe sugerencias personalizadas con ayuda de IA generativa.",
    img: petsName.src,
    iconLists: [vue.src, n8n.src, django.src, mysql.src, git.src, github.src, postman.src],
    link: "https://github.com/Brin29/pets-name",
  },
  {
    id: 2,
    title: "Detector de caminos",
    des: "Proyecto de visión computarizada que detecta caminos de tierra en imágenes mediante modelos de inteligencia artificial entrenados con Roboflow. Se utiliza procesamiento de imágenes y aprendizaje automático para mejorar la detección visual en diferentes entornos.",
    img: detector.src,
    iconLists: [python.src, matbloptlip.src, roboflow.src, ultratycs.src, colab.src, git.src, github.src],
    link: "https://github.com/Brin29/Detector",
  },
  {
    id: 3,
    title: "Acortador de URL's",
    des: "Sistema para acortar enlaces utilizando la API de Bitly, Spring Boot y Redis. Las URLs acortadas se almacenan en caché con Redis, lo cual reduce las peticiones externas y mejora el rendimiento. Permite crear y recuperar enlaces de forma rápida y eficiente.",
    img: urlShorten.src,
    iconLists: [vue.src, tailwind.src, springboot.src, mysql.src, redis.src, git.src, github.src],
    link: "https://github.com/Brin29/Acortador-de-Url-s",
  },
  {
    id: 4,
    title: "Mensajes en tiempo real",
    des: "Aplicación de mensajería construida con WebSockets, Spring Boot y Redis. Permite a los usuarios comunicarse en tiempo real mediante un sistema escalable que utiliza pub/sub para manejar eventos distribuidos y mantener las conversaciones activas.",
    img: webSocket.src,
    iconLists: [vue.src, springboot.src, mysql.src, git.src, github.src],
    link: "https://github.com/Brin29/web-socket",
  },
];

  export const frontendSkills = [
    { name: "React", image: react.src, },
    { name: "Next.js", image: nextJs.src, },
    { name: "TypeScript", image: typescript.src, },
    { name: "JavaScript", image: javascript.src, },
    { name: "HTML", image: html.src, },
    { name: "CSS", image: css.src, },
    { name: "Tailwind", image: tailwind.src, },
    { name: "Vue", image: vue.src, },
    { name: "Graphql", image: graphql.src, }
  ]

  export const backendSkills = [
    { name: "FastApi", image: fastapi.src, },
    { name: "Django", image: django.src, },
    { name: "Python", image: python.src, },
    { name: "PostgreSQL", image: postgresql.src, },
    { name: "MySQL", image: mysql.src, },
    { name: "Firebase", image: firebase.src, },
    { name: "Docker", image: docker.src, },
    { name: "AWS", image: aws.src, },
  ]