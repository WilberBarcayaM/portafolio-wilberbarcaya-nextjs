import { BookText, Briefcase, Code2, CodeSquare, Home, Inbox, Laptop, Linkedin, Mail, Phone, Server, Sparkles, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+2 años de experiencia",
    },
    {
        id: 2,
        name: "Empresas",
        icon: <UsersRound />,
        description: "+2 empresas",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+5 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "Sobre mí",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={20} />,
        link: "#services",
    },
    // {
    //     id: 4,
    //     title: "Portafolio",
    //     icon: <CodeSquare size={20} />,
    //     link: "#portfolio",
    // },
    {
        id: 5,
        title: "Contacto",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Navegando Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Sitios Web Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Proyectos Web Dinámicos",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];


// Rangos de nivel para el campo "value":
// Básico:       0  – 25
// Intermedio:   26 – 50
// Avanzado:     51 – 75
// Experimentado: 76 – 90
export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  🖥️",
        experience: [
            {
                name: "TypeScript",
                subtitle: "Experimentado",
                value: 88,
            },
            {
                name: "Angular",
                subtitle: "Experimentado",
                value: 85,
            },
            {
                name: "HTML & CSS",
                subtitle: "Experimentado",
                value: 82,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 78,
            },
            {
                name: "SCSS",
                subtitle: "Experimentado",
                value: 79,
            },
            {
                name: "React",
                subtitle: "Intermedio",
                value: 42,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 48,
            },
            {
                name: "Bootstrap",
                subtitle: "Intermedio",
                value: 35,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "NestJS",
                subtitle: "Avanzado",
                value: 74,
            },
            {
                name: "GraphQL",
                subtitle: "Avanzado",
                value: 65,
            },
            {
                name: "Node.js",
                subtitle: "Avanzado",
                value: 60,
            },
            {
                name: "MySQL / PostgreSQL",
                subtitle: "Avanzado",
                value: 62,
            },
            {
                name: "Python",
                subtitle: "Intermedio",
                value: 40,
            },
            {
                name: "Docker",
                subtitle: "Intermedio",
                value: 30,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo FullStack",
        icon: <Laptop />,
        features: [
            {
                name: "Aplicaciones web con Angular y React",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Arquitecturas modulares y escalables",
            },
            {
                name: "Integración con APIs REST y GraphQL",
            },
            {
                name: "Gestión de estado con RxJS y NgRx",
            },
            {
                name: "Componentes reutilizables con TypeScript y SCSS",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Backend & APIs",
        icon: <Server />,
        features: [
            {
                name: "Desarrollo de APIs REST con NestJS y Node.js",
            },
            {
                name: "APIs GraphQL con tipado estricto",
            },
            {
                name: "Operaciones CRUD y gestión de base de datos",
            },
            {
                name: "Optimización de consultas SQL (MySQL / PostgreSQL)",
            },
            {
                name: "Entornos locales con Docker",
            },
            {
                name: "Autenticación, interceptores y manejo de errores",
            },
        ],
    },
    {
        id: 3,
        title: "IA & Desarrollo Móvil",
        icon: <Sparkles />,
        features: [
            {
                name: "Visión por computadora con YOLOv8",
            },
            {
                name: "Machine Learning con TensorFlow, PyTorch y scikit-learn",
            },
            {
                name: "Procesamiento de lenguaje natural (NLP)",
            },
            {
                name: "Desarrollo de apps móviles con Flutter",
            },
            {
                name: "Integración de hardware (Arduino, Bluetooth)",
            },
            {
                name: "Creación de datasets personalizados para modelos de IA",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+591 67641208",
        link: "tel:+59167641208",
        icon: <Phone />,
        linkLabel: "Llamar",
    },
    {
        id: 2,
        title: "LinkedIn",
        subtitle: "Wilber Barcaya Muruchi",
        link: "https://linkedin.com/in/wilber-barcaya-muruchi-7891a7265",
        icon: <Linkedin />,
        linkLabel: "Enviar mensaje",
    },
    {
        id: 3,
        title: "Github",
        subtitle: "WilberBarcayaM",
        link: "https://github.com/WilberBarcayaM",
        icon: <Code2 />,
        linkLabel: "Ver perfil",
    },
    {
        id: 4,
        title: "Email",
        subtitle: "barcayamuruchiwilber@gmail.com",
        link: "mailto:barcayamuruchiwilber@gmail.com",
        icon: <Inbox />,
        linkLabel: "Enviar correo",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];