import {
  django,
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
  redis
} from "../assets";

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
            "Desplegue la aplicación web con vercel",
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
    des: "Desarrollé una aplicación que utiliza flujos automatizados en n8n integrados con el modelo de inteligencia artificial Gemini para generar nombres únicos y creativos para mascotas. El sistema permite al usuario ingresar características de la mascota (como tipo, personalidad o tamaño), y en respuesta obtiene sugerencias personalizadas generadas por IA.",
    img: petsName.src,
    iconLists: [vue.src, n8n.src, django.src, mysql.src, git.src, github.src, postman.src],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Detector de caminos",
    des: "Este proyecto tiene como objetivo identificar caminos de tierra en imágenes utilizando técnicas de visión computarizada apoyadas por modelos de inteligencia artificial entrenados con Roboflow.",
    img: detector.src,
    iconLists: [python.src, matbloptlip.src, roboflow.src, ultratycs.src, colab.src, git.src, github.src],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Acortador de URL's",
    des: "Este proyecto de acortamiento de URLs utiliza la API de Bitly junto con Spring Boot y Redis para generar enlaces cortos y almacenarlos en caché para una recuperación rápida. Al guardar las URLs acortadas en Redis, se reduce el número de llamadas a la API de Bitly, mejorando así el rendimiento y la escalabilidad de la aplicación",
    img: urlShorten.src,
    iconLists: [vue.src, tailwind.src, springboot.src, mysql.src, redis.src, git.src, github.src],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Mensajes en tiempo real",
    des: "Este proyecto de mensajería utiliza WebSockets, Spring Boot y Redis para habilitar la comunicación en tiempo real entre usuarios. Los WebSockets gestionan el intercambio de mensajes en vivo, mientras que Redis asegura la escalabilidad del sistema mediante un mecanismo de publicación y suscripción (pub/sub), permitiendo el envío y recepción de mensajes en arquitecturas distribuidas.",
    img: webSocket.src,
    iconLists: [vue.src, springboot.src, mysql.src, git.src, github.src],
    link: "/ui.apple.com",
  },
];

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
