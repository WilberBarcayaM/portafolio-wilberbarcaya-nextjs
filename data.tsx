import { BookText, Briefcase, Code2, CodeSquare, Home, Inbox, Laptop, Linkedin, Mail, Phone, Server, Sparkles, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "+2 years of experience",
    },
    {
        id: 2,
        name: "Companies",
        icon: <UsersRound />,
        description: "+2 companies",
    },
    {
        id: 3,
        name: "Projects",
        icon: <Wrench />,
        description: "+5 completed",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "About Me",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Services",
        icon: <BookText size={20} />,
        link: "#services",
    },
    // {
    //     id: 4,
    //     title: "Portfolio",
    //     icon: <CodeSquare size={20} />,
    //     link: "#portfolio",
    // },
    {
        id: 5,
        title: "Contact",
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


// Skill level ranges for the "value" field:
// Basic:        0  – 25
// Intermediate: 26 – 50
// Advanced:     51 – 75
// Experienced:  76 – 90
export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  🖥️",
        experience: [
            {
                name: "TypeScript",
                subtitle: "Experienced",
                value: 88,
            },
            {
                name: "Angular",
                subtitle: "Experienced",
                value: 85,
            },
            {
                name: "HTML & CSS",
                subtitle: "Experienced",
                value: 82,
            },
            {
                name: "JavaScript",
                subtitle: "Experienced",
                value: 78,
            },
            {
                name: "SCSS",
                subtitle: "Experienced",
                value: 79,
            },
            {
                name: "React",
                subtitle: "Intermediate",
                value: 42,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermediate",
                value: 48,
            },
            {
                name: "Bootstrap",
                subtitle: "Intermediate",
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
                subtitle: "Advanced",
                value: 74,
            },
            {
                name: "GraphQL",
                subtitle: "Advanced",
                value: 65,
            },
            {
                name: "Node.js",
                subtitle: "Advanced",
                value: 60,
            },
            {
                name: "MySQL / PostgreSQL",
                subtitle: "Advanced",
                value: 62,
            },
            {
                name: "Python",
                subtitle: "Intermediate",
                value: 40,
            },
            {
                name: "Docker",
                subtitle: "Intermediate",
                value: 30,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "FullStack Development",
        icon: <Laptop />,
        features: [
            {
                name: "Web applications with Angular and React",
            },
            {
                name: "Responsive design and development",
            },
            {
                name: "Modular and scalable architectures",
            },
            {
                name: "REST and GraphQL API integration",
            },
            {
                name: "State management with RxJS and NgRx",
            },
            {
                name: "Reusable components with TypeScript and SCSS",
            },
            {
                name: "Ongoing maintenance and support",
            },
        ],
    },
    {
        id: 2,
        title: "Backend & APIs",
        icon: <Server />,
        features: [
            {
                name: "REST API development with NestJS and Node.js",
            },
            {
                name: "Strictly typed GraphQL APIs",
            },
            {
                name: "CRUD operations and database management",
            },
            {
                name: "SQL query optimization (MySQL / PostgreSQL)",
            },
            {
                name: "Local development environments with Docker",
            },
            {
                name: "Authentication, interceptors and error handling",
            },
        ],
    },
    {
        id: 3,
        title: "AI & Mobile Development",
        icon: <Sparkles />,
        features: [
            {
                name: "Computer vision with YOLOv8",
            },
            {
                name: "Machine Learning with TensorFlow, PyTorch and scikit-learn",
            },
            {
                name: "Natural language processing (NLP)",
            },
            {
                name: "Mobile app development with Flutter",
            },
            {
                name: "Hardware integration (Arduino, Bluetooth)",
            },
            {
                name: "Custom dataset creation for AI models",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Phone",
        subtitle: "+591 67641208",
        link: "tel:+59167641208",
        icon: <Phone />,
        linkLabel: "Call",
    },
    {
        id: 2,
        title: "LinkedIn",
        subtitle: "Wilber Barcaya Muruchi",
        link: "https://linkedin.com/in/wilber-barcaya-muruchi-7891a7265",
        icon: <Linkedin />,
        linkLabel: "Send message",
    },
    {
        id: 3,
        title: "Github",
        subtitle: "WilberBarcayaM",
        link: "https://github.com/WilberBarcayaM",
        icon: <Code2 />,
        linkLabel: "View profile",
    },
    {
        id: 4,
        title: "Email",
        subtitle: "barcayamuruchiwilber@gmail.com",
        link: "mailto:barcayamuruchiwilber@gmail.com",
        icon: <Inbox />,
        linkLabel: "Send email",
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