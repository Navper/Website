// translations.js — all UI strings for English and Spanish
// Loaded before i18n.js so window.translations is available immediately.

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About me',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Home page
        'home.greeting': "Hello, I'm Cristian Navarro Pertegal",
        'home.role': 'Software Developer',
        'home.bio': "Recent graduate with a degree in Multiplatform Application Development and experience in software engineering and application development. I'm eager to apply my skills and knowledge in real-world projects and contribute to an impactful company.",
        'home.hire': 'Hire me',
        'home.chatPlaceholder': 'Ask me anything about myself',
        'home.welcome': "Thanks for visiting my site, feel free to ask me anything 😊",
        'home.cvTitle': 'Download CV',
        'chat.you': 'You:',

        // About page
        'about.title': 'About Me',
        'about.bio': "\n Hi, I'm Cristian Navarro Pertegal, a software developer from Orihuela, Spain. I hold a degree in Multiplatform Software Development and have experience in developing management apps and business solutions.\n\nI've always been passionate about technology and graphic design. Over time, I dove deeper into IT, starting with basic scripts and watching tutorials on YouTube, until I realized that what I truly wanted was to study programming. I shifted my focus from graphic design to application development, recently graduating in this field. Today, my love for programming and my eagerness to learn new technologies are stronger than ever. I'm driven to keep growing professionally and to contribute to building applications that not only solve problems but also provide unique user experiences.\n\nMy goal is to continue honing my skills and collaborating on innovative projects where I can apply everything I've learned and keep improving every day.",
        'about.workExp': 'Work Experience',
        'about.odooDev': 'Odoo Developer',
        'about.odooDesc': 'As part of a team, I was responsible for designing and developing a management app, including database creation, Odoo module development, and client meetings.',
        'about.techRole': 'Computer and Mobile Device Repair Technician',
        'about.mediaDesc': 'Diagnosed and repaired a variety of electronic devices, performing routine maintenance tasks to ensure the optimal functionality of devices.',
        'about.education': 'Education',
        'about.edu1Title': 'Higher Degree in Multiplatform Software Development',
        'about.edu2Title': 'Higher Technician Design in Advertising Graphics',
        'label.company': 'Company:',
        'label.duration': 'Duration:',
        'label.dates': 'Dates:',
        'label.location': 'Location:',
        'label.institution': 'Institution:',
        'label.year': 'Year:',

        // New work experience — Indalweb
        'about.dotnetDev': '.NET ASP Developer',
        'about.dotnetDesc1': 'Developed a basketball club management application using .NET, Razor Pages, and Entity Framework.',
        'about.dotnetDesc2': 'Implemented an intelligent AI support system using the OpenAI API and RAG architecture.',
        'about.dotnetDesc3': 'Designed and built responsive interfaces using HTML5, CSS3, and Bootstrap.',

        // New work experience — Transnaba
        'about.pythonDev': 'Python Developer',
        'about.pythonDesc1': "Developed a Python application to assist with the workshop's daily operations.",
        'about.pythonDesc2': 'Implemented a vehicle entry/exit control system with status and repair-needs monitoring.',
        'about.pythonDesc3': 'Centralized information management to optimize organization and improve team efficiency.',

        // Skills page
        'skills.title': 'Skills',
        'skills.subtitle': 'A curated set of tools and languages I use to build things — from backend systems to AI-powered apps.',
        'skills.cat.languages':  'Languages',
        'skills.cat.frameworks': 'Frameworks & Tools',
        'skills.cat.databases':  'Databases',
        'skills.cat.ai':         'AI & Machine Learning',
        'skills.cat.tools':      'Tools & Other',

        // Projects page
        'projects.label': '// my work',
        'projects.titlePlain': 'Featured',
        'projects.titleGradient': 'Projects',
        'projects.subtitle': "A collection of things I've built — ranging from AI-powered bots to business tools and games. Each project is a story of a problem solved and something new learned.",
        'filter.all': 'All',
        'filter.ai': 'AI / ML',

        // Projects page content
        'p0.title': 'Indalweb Manager & AI Support',
        'p0.desc':  'A comprehensive management application for basketball clubs leveraging .NET, Razor Pages, Entity Framework, and OpenAI GPT API for a RAG-based intelligent support system.',
        'p0.f1':    '.NET & Razor Pages for UI/UX',
        'p0.f2':    'Entity Framework database management',
        'p0.f3':    'Generative AI support with OpenAI API',
        'p0.f4':    'RAG architecture integration',
        'p0.status':'Professional',

        // Project 1 — Discord TTS Bot
        'p1.title': 'AI Discord TTS Bot',
        'p1.desc': 'A modular Discord bot that integrates Coqui TTS for high-quality AI-generated voice synthesis and cloning. Users can join voice channels, select custom voices, and stream AI-generated speech in real time.',
        'p1.f1': 'Asynchronous audio streaming via Discord',
        'p1.f2': 'Voice cloning with Coqui TTS engine',
        'p1.f3': 'Modular command architecture',
        'p1.f4': 'Production-ready error handling & logging',
        'p1.status': 'In Progress',

        // Project 2 — Portfolio Website
        'p2.title': 'Personal Portfolio Website',
        'p2.desc': 'This very website! A full-stack portfolio featuring a dark glassmorphism design, animated UI components, and an integrated AI chatbot powered by Gemini that answers questions about me in real time.',
        'p2.f1': 'AI chatbot with typing animation',
        'p2.f2': 'Multi-page animated layout',
        'p2.f3': 'Node.js + Express backend',
        'p2.f4': 'Deployed on Netlify & Render',
        'p2.status': 'Live',

        // Project 3 — Pokédex
        'p3.title': 'Pokédex with Battle System',
        'p3.desc': 'A Java desktop application featuring a full Pokédex browser and a turn-based combat system. Built with object-oriented principles, it simulates Pokémon moves, types, and stat-based damage calculation.',
        'p3.f1': 'Full Pokédex with species info',
        'p3.f2': 'Turn-based battle engine',
        'p3.f3': 'Type effectiveness system',
        'p3.f4': 'Object-oriented architecture',
        'p3.status': 'Completed',

        // Project 4 — Truck Manager
        'p4.title': 'Workshop Truck Dispatch Manager',
        'p4.desc': 'A business management application for tracking truck departures and returns in a workshop environment. Replaces manual paperwork with a clean digital interface for real-time fleet status tracking.',
        'p4.f1': 'Real-time truck departure tracking',
        'p4.f2': 'Driver & route management',
        'p4.f3': 'Database-backed records',
        'p4.f4': 'Built for actual workshop use',
        'p4.status': 'Completed',

        // Project 5 — Odoo ERP
        'p5.title': 'Odoo ERP Module — Law Firm',
        'p5.desc': 'Custom Odoo module developed for Abogados Asociados Damián Montoya as part of a professional internship. Involved client meetings, database design, and building bespoke business logic for case management.',
        'p5.f1': 'Custom Odoo module development',
        'p5.f2': 'PostgreSQL database design',
        'p5.f3': 'Client-facing requirements analysis',
        'p5.f4': 'Team collaboration in agile environment',
        'p5.status': 'Professional',

        'projects.private': 'Private',
        'projects.moreText': 'More projects are always in the works.',
        'projects.githubBtn': 'See all on GitHub',

        // Contact page
        'contact.title': 'Contact Me',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send Message',

        // Thanks page
        'thanks.title': 'Thank You!',
        'thanks.message': 'Your message has been sent successfully. I will get back to you as soon as possible.',
        'thanks.back': 'Back to Home',
    },

    es: {
        // Navegación
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        // Página de inicio
        'home.greeting': 'Hola, soy Cristian Navarro Pertegal',
        'home.role': 'Desarrollador de Software',
        'home.bio': "Recién titulado en Desarrollo de Aplicaciones Multiplataforma, con experiencia en ingeniería de software y desarrollo de aplicaciones. Busco aplicar mis conocimientos en proyectos reales y contribuir al crecimiento de una empresa de impacto.",
        'home.hire': 'Contrátame',
        'home.chatPlaceholder': 'Pregunta lo que quieras saber sobre mí',
        'home.welcome': 'Gracias por entrar a mi web, aquí puedes preguntarme lo que quieras 😊',
        'home.cvTitle': 'Descargar CV',
        'chat.you': 'Tú:',

        // Sobre mí
        'about.title': 'Sobre Mí',
        'about.bio': "\n Hola, soy Cristian Navarro Pertegal, desarrollador de software de Orihuela, España. Tengo un título en Desarrollo de Aplicaciones Multiplataforma y experiencia desarrollando apps de gestión y soluciones empresariales.\n\nSiempre me ha apasionado la tecnología y el diseño gráfico. Con el tiempo me adentré más en la informática, empezando con scripts básicos y tutoriales de YouTube, hasta que me di cuenta de que lo que realmente quería era estudiar programación. Cambié mi enfoque del diseño gráfico al desarrollo de aplicaciones, del que me acabo de titular. Hoy, mi amor por la programación y las ganas de aprender nuevas tecnologías son más fuertes que nunca. Estoy motivado para seguir creciendo profesionalmente y contribuir al desarrollo de aplicaciones que no solo resuelvan problemas, sino que también ofrezcan experiencias de usuario únicas.\n\nMi objetivo es seguir perfeccionando mis habilidades y colaborar en proyectos innovadores donde pueda aplicar todo lo aprendido y mejorar cada día.",
        'about.workExp': 'Experiencia Laboral',
        'about.odooDev': 'Desarrollador Odoo',
        'about.odooDesc': 'Como parte de un equipo, fui responsable de diseñar y desarrollar una aplicación de gestión, incluyendo la creación de la base de datos, el desarrollo de módulos Odoo y reuniones con clientes.',
        'about.techRole': 'Técnico de Reparación de Equipos y Dispositivos Móviles',
        'about.mediaDesc': 'Diagnostiqué y reparé dispositivos electrónicos de todo tipo, realizando tareas de mantenimiento rutinario para garantizar el funcionamiento óptimo de los equipos.',
        'about.education': 'Formación',
        'about.edu1Title': 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
        'about.edu2Title': 'Técnico Superior en Diseño Gráfico Publicitario',
        'label.company': 'Empresa:',
        'label.duration': 'Duración:',
        'label.dates': 'Fechas:',
        'label.location': 'Ubicación:',
        'label.institution': 'Centro:',
        'label.year': 'Año:',

        // Nueva experiencia — Indalweb
        'about.dotnetDev': 'Desarrollador .NET ASP',
        'about.dotnetDesc1': 'Desarrollo de una aplicación de gestión para clubes de baloncesto utilizando .NET, Razor Pages y Entity Framework.',
        'about.dotnetDesc2': 'Implementación de un sistema de soporte inteligente basado en IA Generativa, utilizando la API de OpenAI y arquitectura RAG.',
        'about.dotnetDesc3': 'Diseño y maquetación de interfaces responsivas empleando HTML5, CSS3 y Bootstrap.',

        // Nueva experiencia — Transnaba
        'about.pythonDev': 'Desarrollador Python',
        'about.pythonDesc1': 'Desarrollo de una aplicación en Python para ayudar con el día a día del taller.',
        'about.pythonDesc2': 'Implementación de un registro para el control de entrada y salida de vehículos, monitorización de su estado y necesidades de reparación.',
        'about.pythonDesc3': 'Centralización de la información para optimizar la organización y mejorar la eficiencia del equipo de trabajo.',

        // Habilidades
        'skills.title': 'Habilidades',
        'skills.subtitle': 'Un conjunto de herramientas y lenguajes que uso para construir cosas — desde sistemas backend hasta apps con IA.',
        'skills.cat.languages':  'Lenguajes',
        'skills.cat.frameworks': 'Frameworks y Herramientas',
        'skills.cat.databases':  'Bases de Datos',
        'skills.cat.ai':         'IA y Machine Learning',
        'skills.cat.tools':      'Herramientas y Otros',

        // Proyectos
        'projects.label': '// mi trabajo',
        'projects.titlePlain': 'Proyectos',
        'projects.titleGradient': 'Destacados',
        'projects.subtitle': "Una colección de lo que he construido — desde bots con IA hasta herramientas de negocio y videojuegos. Cada proyecto es la historia de un problema resuelto y algo nuevo aprendido.",
        'filter.all': 'Todos',
        'filter.ai': 'IA / ML',

        // Proyectos contenido
        'p0.title': 'Indalweb Manager & AI',
        'p0.desc':  'Aplicación de gestión para clubes de baloncesto utilizando .NET, interactuando con Entity Framework, Razor Pages y un sistema de soporte inteligente automatizado basado en RAG y la API de OpenAI.',
        'p0.f1':    'UI/UX responsivo con Razor Pages',
        'p0.f2':    'Gestión de base de datos con Entity Framework',
        'p0.f3':    'Soporte con IA Generativa (OpenAI API)',
        'p0.f4':    'Arquitectura RAG integrada',
        'p0.status':'Profesional',

        // Proyecto 1 — Bot Discord TTS
        'p1.title': 'Bot de Discord IA (TTS)',
        'p1.desc': 'Un bot de Discord modular que integra Coqui TTS para síntesis y clonación de voz con IA de alta calidad. Los usuarios pueden unirse a canales de voz, elegir voces personalizadas y escuchar voz generada por IA en tiempo real.',
        'p1.f1': 'Streaming de audio asíncrono vía Discord',
        'p1.f2': 'Clonación de voz con el motor Coqui TTS',
        'p1.f3': 'Arquitectura modular de comandos',
        'p1.f4': 'Manejo de errores y logging de producción',
        'p1.status': 'En Progreso',

        // Proyecto 2 — Portafolio
        'p2.title': 'Portafolio Personal Web',
        'p2.desc': '¡Esta misma web! Un portafolio full-stack con diseño glassmorphism oscuro, componentes animados y un chatbot con IA integrado (Gemini) que responde preguntas sobre mí en tiempo real.',
        'p2.f1': 'Chatbot con IA y animación de escritura',
        'p2.f2': 'Layout multipágina animado',
        'p2.f3': 'Backend con Node.js + Express',
        'p2.f4': 'Desplegado en Netlify y Render',
        'p2.status': 'En Producción',

        // Proyecto 3 — Pokédex
        'p3.title': 'Pokédex con Sistema de Combate',
        'p3.desc': 'Aplicación de escritorio en Java con un Pokédex completo y sistema de combate por turnos. Construida con principios de POO, simula movimientos Pokémon, tipos y cálculo de daño basado en estadísticas.',
        'p3.f1': 'Pokédex completa con info de especies',
        'p3.f2': 'Motor de combate por turnos',
        'p3.f3': 'Sistema de efectividad de tipos',
        'p3.f4': 'Arquitectura orientada a objetos',
        'p3.status': 'Completado',

        // Proyecto 4 — Camiones
        'p4.title': 'Gestión de Salidas de Camiones',
        'p4.desc': 'Aplicación de gestión empresarial para rastrear salidas y regresos de camiones en un taller. Reemplaza el papeleo manual con una interfaz digital para seguimiento del estado de la flota en tiempo real.',
        'p4.f1': 'Seguimiento de salidas en tiempo real',
        'p4.f2': 'Gestión de conductores y rutas',
        'p4.f3': 'Registros respaldados en base de datos',
        'p4.f4': 'Construido para uso real en taller',
        'p4.status': 'Completado',

        // Proyecto 5 — Odoo
        'p5.title': 'Módulo Odoo ERP — Bufete de Abogados',
        'p5.desc': 'Módulo Odoo personalizado desarrollado para Abogados Asociados Damián Montoya durante una estancia profesional. Incluyó reuniones con clientes, diseño de base de datos y lógica de negocio a medida para gestión de casos.',
        'p5.f1': 'Desarrollo de módulo Odoo personalizado',
        'p5.f2': 'Diseño de base de datos PostgreSQL',
        'p5.f3': 'Análisis de requisitos con clientes',
        'p5.f4': 'Colaboración en equipo ágil',
        'p5.status': 'Profesional',

        'projects.private': 'Privado',
        'projects.moreText': 'Siempre hay más proyectos en desarrollo.',
        'projects.githubBtn': 'GitHub',

        // Contacto
        'contact.title': 'Contáctame',
        'contact.name': 'Nombre',
        'contact.email': 'Correo',
        'contact.message': 'Mensaje',
        'contact.send': 'Enviar Mensaje',

        // Thanks page
        'thanks.title': '¡Gracias!',
        'thanks.message': 'Tu mensaje ha sido enviado correctamente. Te responderé lo antes posible.',
        'thanks.back': 'Volver al Inicio',
    }
};
