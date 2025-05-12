// main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Translation ---
    const translations = {
        es: {
            pageTitle: "Chill Chess Club | Clases de Ajedrez Online",
            metaDescription: "Aprende ajedrez con un método relajado y personalizado. Clases online para principiantes e intermedios adaptadas con IA para maximizar tu progreso.",
            logoAlt: "Logo de Chill Chess Club",
            siteName: "Chill Chess Club",
            logoLinkAriaLabel: "Ir al inicio de la página",
            navHome: "Inicio",
            navAbout: "Sobre Mí",
            navCourses: "Cursos",
            navMethod: "Método",
            navBenefits: "Beneficios",
            navResources: "Recursos",
            navBlog: "Blog",
            navContact: "Contacto",

            heroTitle: "Descubre el ajedrez a tu manera: una experiencia inmersiva y personalizada",
            heroSubtitle: "Siente cómo el ajedrez fluye contigo. Mi método se afina con IA, permitiéndome adaptar las lecciones y el material a tus gustos e intereses, para que tu comprensión del juego se expanda naturalmente.",
            heroCtaTrial: "Prueba tu primera clase gratis",
            heroCtaMethod: "¿Cómo lo hago?",

            aboutTitle: "Sobre Mí",
            aboutQuoteText: "\"El ajedrez es un mar en el cual un mosquito puede beber y un elefante puede bañarse.\"",
            aboutQuoteCite: "- Proverbio Indio",
            aboutImageAlt: "Foto de perfil artística del instructor Santiago Narváez",
            aboutSubtitle: "Descifrando el Ajedrez Contigo: De la Orilla a las Profundidades",
            aboutPara1: "Soy Santiago Narváez. Al igual que el proverbio indio nos recuerda la vastedad del mar, concibo el ajedrez como un océano sereno, listo para ser explorado a cualquier nivel, un océano donde todos tienen cabida. Es esta visión la que define mi enseñanza para principiantes e intermedios. Mi objetivo es crear un espacio donde cada jugador pueda crecer y encontrar su propio placer en el juego, independientemente de su punto de partida. Adapto mi método para que el aprendizaje sea una experiencia fluida y personal, permitiendo al estudiante explorar las corrientes del ajedrez con confianza y satisfacción.",
            aboutPara2: "Si bien mi camino no ha sido el del ajedrez profesional de torneos, mi energía se centra completamente en hacer que el ajedrez sea accesible y apasionante para ti. Mi fortaleza es una capacidad especial para simplificar los conceptos y estrategias, guiando a jugadores principiantes e intermedios hacia un entendimiento sólido y un disfrute genuino del juego. Mi compromiso es ser el puente que necesitas para conectar con la belleza del ajedrez, combinando la enseñanza clásica con las ventajas de la tecnología actual, sin importar tu nivel inicial. Actualmente, imparto estas clases online desde la hermosa Isla de Margarita, en Venezuela.",
            aboutPhilosophyTitle: "Mi Método y Filosofía: Ajedrez Personalizado con Inteligencia",
            aboutPhilosophyPara: "Mi convicción es un aprendizaje tan único como tú. Por ello, mi método inmersivo fusiona teoría y práctica con una personalización profunda. Me apoyo en la IA para diseñar y adaptar tu contenido didáctico (lecciones, ejercicios) a tus fortalezas, debilidades, gustos y metas, logrando un estudio más ameno y un progreso eficiente.",
            aboutPlatformsTitle: "Plataformas Utilizadas",
            aboutPlatformsDesc: "Utilizamos las siguientes plataformas para nuestras clases y análisis. Es necesario que tengas una cuenta (gratuita) y la aplicación instalada:",
            aboutPlatformChesscom: "Mi Perfil en Chess.com",
            aboutPlatformLichess: "Mi Perfil en Lichess.org",
            aboutCtaConnect: "¿Listo para empezar?",

            coursesTitle: "Explora los Cursos: Tu Ajedrez, Tu Ritmo",
            coursesIntro: "Descubre el programa ideal para ti, diseñado para impulsar tu juego sin importar tu experiencia. Cada opción te ofrece: material de estudio bilingüe, lecciones y ejercicios que adapto a tus intereses con asistencia de IA, y mi soporte continuo para que alcances tus metas.",

            courseBeginnerTitle: "Curso Principiante:<br>El Despegue",
            courseBeginnerLevelAriaLabel: "Nivel Principiante",
            courseBeginnerImgAlt: "Piezas de ajedrez blancas listas para empezar",
            courseBeginnerFeat1: "Conoce con claridad las reglas y el movimiento de cada pieza.",
            courseBeginnerFeat2: "Aprende los principios esenciales para iniciar bien tus partidas (aperturas).",
            courseBeginnerFeat3: "Domina las tácticas básicas para ganar material y controlar el juego.",
            courseBeginnerFeat4: "Aprende los finales fundamentales para cerrar bien tus partidas.",
            courseBeginnerFeat5: "8 clases en vivo (uno a uno) para construir tus cimientos en el ajedrez, con ritmo y ejemplos adaptados a ti.",
            courseBeginnerFeat6: "Acceso a material de estudio digital bilingüe (español/inglés) creado por mí para guiar tu práctica.",
            courseBeginnerFeat7: "Ejercicios y ejemplos que selecciono y adapto con IA según tus intereses para hacer el estudio del temario más ameno y efectivo.",
            courseBeginnerPrice: "$120 USD",
            coursePriceNoteHour: "Paquete de 8 clases (solo $15 USD/hora). Planes de pago disponibles",
            courseEnrollBtn: "Empezar Ahora",

            courseIntermediateTitle: "Curso Intermedio:<br>Estratega",
            courseIntermediateLevelAriaLabel: "Nivel Intermedio",
            courseIntermediateImgAlt: "Tablero de ajedrez mostrando una estrategia compleja",
            courseIntermediateFeat1: "Explora la estrategia posicional para entender y controlar el juego a un nivel más profundo.",
            courseIntermediateFeat2: "Desarrolla un repertorio de aperturas que se adapte a tu estilo de juego.",
            courseIntermediateFeat3: "Domina combinaciones tácticas más complejas para crear ventajas decisivas.",
            courseIntermediateFeat4: "Aplica con precisión los finales prácticos esenciales para convertir tus ventajas en victorias.",
            courseIntermediateFeat5: "16 clases en vivo (uno a uno) para refinar tu juego estratégico y táctico, con un enfoque adaptado a tus áreas de mejora.",
            courseIntermediateFeat6: "Análisis detallado de tus partidas: identifico patrones y áreas clave con el apoyo de herramientas de IA para guiar nuestra revisión.",
            courseIntermediateFeat7: "Un plan de estudio estructurado que complemento con material y ejercicios adaptados por mí (asistido por IA) a tus objetivos y estilo dentro del programa.",
            courseIntermediatePrice: "$320 USD",
            courseIntermediatePriceNoteHour: "Paquete de 16 clases (solo $20 USD/hora). Planes de pago disponibles",

            courseCustomTitle: "Clases Personalizadas:<br>Tu Juego",
            courseCustomLevelAriaLabel: "Nivel Personalizado",
            courseCustomImgAlt: "Instructor de ajedrez dando una clase personalizada online",
            courseCustomFeat1: "Un plan de estudio totalmente co-creado contigo, diseñado desde cero para tus metas únicas en el ajedrez.",
            courseCustomFeat2: "Nos centramos 100% en tus objetivos específicos, áreas de interés o cualquier aspecto del juego que quieras explorar o mejorar.",
            courseCustomFeat3: "Máxima flexibilidad en horarios, frecuencia de clases y duración del programa, adaptándonos a tu vida.",
            courseCustomFeat4: "Sesiones uno a uno, donde cada minuto está dedicado exclusivamente a tu progreso y a resolver tus dudas.",
            courseCustomFeat5: "Análisis profundo y práctico de tus propias partidas para un feedback totalmente personalizado.",
            courseCustomFeat6: "Creación de material didáctico y selección de recursos exclusivos para ti, donde utilizo la IA para ayudarte a construir el camino más efectivo hacia tus objetivos.",
            courseCustomFeat7: "Acompañamiento y soporte continuo entre sesiones para mantener tu motivación y resolver dudas sobre la marcha.",
            courseCustomPrice: "$25 USD",
            courseCustomPriceNoteHour: "/ hora (clases en vivo)",
            courseConsultBtn: "Consultar Disponibilidad",

            coursesCtaText: "¿No estás seguro qué opción es mejor para ti? Agenda una sesión introductoria gratuita y recibe una evaluación personalizada.",
            coursesCtaBtn: "Solicitar Clase de Prueba Gratis",

            methodTitle: "Mi Método: Aprendizaje Inmersivo y Personalizado con un Toque Tecnológico Único",
            methodIntro: "Descubre cómo mi enfoque, que combina una profunda comprensión del ajedrez con una habilidad avanzada para crear contenido digital asistido por IA, transforma tu aprendizaje en una experiencia totalmente adaptada a ti: a tu estilo, tu ritmo y tus intereses.",
            methodStep1Title: "Conexión y Evaluación Inicial",
            methodStep1Desc: "Comenzamos con una charla para conocernos y entender tus metas. Luego, analizo tu nivel, estilo de juego e intereses, revisando tus partidas (en Chess.com, ya sean jugadas conmigo o que me envíes) y usando mi experiencia pedagógica para trazar un primer mapa.",
            methodStep2aTitle: "Diseño de Tu Hoja de Ruta Personal",
            methodStep2aDesc: "Con base en nuestra conversación y tu evaluación inicial, diseño una hoja de ruta clara para tu aprendizaje. Selecciono los temas centrales y la estructura de estudio que mejor se adaptan a tu nivel actual, tus objetivos específicos y la forma en que prefieres asimilar la información.",
            methodStep2bTitle: "Material Didáctico Único, Creado para Ti con IA",
            methodStep2bDesc: "Aquí mi enfoque se potencia. Me apoyo en avanzadas herramientas de IA para desarrollar recursos didácticos totalmente a medida: desde artículos y análisis personalizados hasta resúmenes y guías en audio en tu idioma, todo moldeado según tus hobbies y aspiraciones para un aprendizaje estimulante.",
            methodStep3Title: "Sesiones de Aprendizaje Inmersivo y Práctico",
            methodStep3Desc: "Nuestras clases en vivo son dinámicas e interactivas. Usamos Chess.com o Lichess para jugar, analizar posiciones, resolver problemas tácticos y estratégicos, y practicar lo aprendido con tu material personalizado, siempre en un ambiente relajado y adaptándonos a tu energía del día.",
            methodStep4Title: "Evolución Continua y Adaptación Inteligente",
            methodStep4Desc: "Tu progreso es mi prioridad. Monitoreo de cerca tu evolución, analizo tus nuevas partidas y ajustamos el plan y los materiales de forma continua. La IA me asiste en identificar patrones y refinar los recursos para que tu aprendizaje nunca se estanque, manteniéndote siempre motivado.",
            methodKeyBenefitsTitle: "¿Cómo Te Ayuda Realmente Mi Método?",
            methodKeyBenefitsDesc: "Mi método está diseñado para ofrecerte una experiencia de aprendizaje de ajedrez que va más allá de lo convencional. Combino mi atención personalizada y mi pasión por la enseñanza con un dominio único de herramientas digitales y de IA para crear un camino hecho a tu exacta medida. Te enfocarás en lo que realmente impulsa tu progreso, de una manera efectiva, profundamente disfrutable y adaptada a tu vida.",
            methodExploreBenefitsBtn: "Descubre Todos los Beneficios del Ajedrez",

            benefitsTitle: "Enriquece tu Vida con el Ajedrez. A Cualquier Edad.",
            benefitsIntro: "Jugar ajedrez es mucho más que una simple partida; es una poderosa herramienta para activar tu mente, fortalecer tu carácter y conectar con otros, sin importar en qué etapa de la vida te encuentres. En Chill Chess Club, te mostramos cómo este juego milenario impulsa tu crecimiento personal de formas sorprendentes, seas joven, adulto o mayor.",
            benefitsPascalQuoteText: "\"El ajedrez es el gimnasio de la mente.\"",
            benefitsPascalCiteName: "- Blaise Pascal",
            benefitsMindTitle: "Despierta y Fortalece tu Mente",
            benefitsMindFeat1Concept: "Memoria Aguda y Reconocimiento",
            benefitsMindFeat1Desc: "Ejercita tu memoria recordando aperturas, tácticas y reconociendo patrones complejos sobre el tablero.",
            benefitsMindFeat2Concept: "Concentración Profunda",
            benefitsMindFeat2Desc: "Desarrolla una capacidad de enfoque intensa, aprendiendo a mantener la atención y a gestionar las distracciones del entorno.",
            benefitsMindFeat3Concept: "Pensamiento Estratégico y Resolución de Problemas",
            benefitsMindFeat3Desc: "Cada partida es un desafío. Aprende a analizar situaciones desde múltiples ángulos, planificar con antelación y encontrar soluciones creativas y lógicas.",
            benefitsMindFeat4Concept: "Visión y Anticipación",
            benefitsMindFeat4Desc: "Desarrolla la habilidad de mirar hacia adelante, prever posibles escenarios y planificar tus movimientos con mayor perspectiva.",
            benefitsLifeSkillsTitle: "Habilidades Esenciales para la Vida",
            benefitsLifeSkill1Concept: "Toma de Decisiones Inteligente",
            benefitsLifeSkill1Desc: "Evalúa opciones, sopesa riesgos y beneficios, y toma decisiones más seguras y calculadas, incluso bajo presión.",
            benefitsLifeSkill2Concept: "Resiliencia y Fortaleza Mental",
            benefitsLifeSkill2Desc: "Aprende a gestionar tanto la victoria como la derrota con equilibrio. El ajedrez te enseña a aprender de los errores y a fortalecer tu carácter ante los desafíos.",
            benefitsLifeSkill3Concept: "Empatía y Comprensión",
            benefitsLifeSkill3Desc: "Ponerte en la perspectiva de tu oponente para entender sus intenciones mejora tu habilidad para comprender diferentes puntos de vista.",
            benefitsLifeSkill4Concept: "Paciencia y Autocontrol",
            benefitsLifeSkill4Desc: "Domina la impulsividad. El ajedrez fomenta la reflexión y la calma, enseñándote a pensar cuidadosamente antes de actuar.",
            benefitsWellbeingTitle: "Bienestar y Conexión para Siempre",
            benefitsWellbeing1Concept: "Agilidad Mental Sostenida",
            benefitsWellbeing1Desc: "Mantén tu mente activa, desafiada y en forma a lo largo de toda tu vida. Estudios sugieren beneficios cognitivos incluso en edades avanzadas.",
            benefitsWellbeing2Concept: "Conexión Universal",
            benefitsWellbeing2Desc: "Únete a una vasta comunidad global. El ajedrez es un lenguaje compartido que supera barreras de edad, culturales y geográficas.",
            benefitsCtaText: "¿Listo para iniciar (o continuar) tu transformación?",
            benefitsCtaMethod: "Nuestro método personalizado está diseñado para guiarte en este fascinante viaje, ayudándote a desarrollar no solo tu juego, sino también valiosas habilidades para la vida, sin importar cuándo decidas empezar.",
            benefitsCtaBtn: "¡Únete al Club!",

            resourcesTitle: "Recursos Gratuitos Esenciales",
            resourcesIntro: "Inicia tu exploración del ajedrez o redescubre sus fundamentos. Estos materiales esenciales son el punto de partida hacia una comprensión más profunda del juego.",
            resource1Title: "Ajedrez Esencial: Comprendiendo Movimientos y Reglas",
            resource1Desc: "Domina el tablero moviendo tus piezas con seguridad. Presentamos las reglas básicas de una forma directa y comprensible.",
            resource2Title: "Preceptos del Ajedrez: Guía Fundamental para Principiantes",
            resource2Desc: "Descubre los conceptos fundamentales que orientarán tus primeras partidas y te ayudarán a construir una base estratégica sólida y reflexiva.",
            resource3Title: "Anatomía del Juego: Piezas, Fases y Su Valor Estratégico",
            resource3Desc: "Una mirada al flujo de la partida, desde la apertura hasta el final, y cómo el valor y las características de cada pieza definen tu estrategia.",
            resourceLinkText: "Explorar Contenido",
            resourcesCta: "Si esta información resuena contigo, <a href=\"#cursos\" class=\"scroll-to\">descubre nuestros cursos</a> y profundiza tu conocimiento con un enfoque personalizado.",

            // --- Textos para el Blog ---
            blogTitle: "Desde Nuestro Blog",
            blogIntro: "Un espacio dedicado a la exploración del ajedrez. Artículos, perspectivas y curiosidades para profundizar tu entendimiento y aprecio por el juego.", // <-- INTRO ACTUALIZADA
            blogPost1Title: "El Legado del Ajedrez: Un Viaje a Través del Tiempo y las Culturas",
            blogPost1Excerpt: "Explora la rica evolución del ajedrez, desde sus orígenes ancestrales y su travesía por diversas culturas, hasta consolidarse como el desafío intelectual que conocemos hoy.",
            blogPost1ImgAlt: "El legado del ajedrez a través del tiempo",
            blogPost2Title: "Ajedrez: ¿Juego Lento o Desafío Apasionante? La Respuesta Podría Sorprenderte",
            blogPost2Excerpt: "Si crees que el ajedrez es solo para genios pacientes, permítenos mostrarte su intensidad, su belleza creativa y por qué se ha mantenido relevante por siglos.",
            blogPost2ImgAlt: "Ajedrez como desafío apasionante",
            blogPost3Title: "Tu Camino al Ajedrez Online: 5 Pasos Fáciles para un Comienzo Gratuito",
            blogPost3Excerpt: "Comenzar en el ajedrez online es simple. Sigue esta guía de cinco pasos para acceder a plataformas gratuitas y disfrutar de la experiencia internacional del ajedrez rápidamente.",
            blogPost3ImgAlt: "Guía para iniciar en el ajedrez online",
            blogReadMore: "Leer Más",

            contactTitle: "Contacta Conmigo",
            contactIntro: "¿Listo para empezar o tienes alguna pregunta? Envíame un mensaje a través del formulario o utiliza mis datos de contacto.",
            contactFormTitle: "Formulario de Contacto",
            contactNameLabel: "Nombre:",
            contactEmailLabel: "Email:",
            contactSubjectLabel: "Asunto:",
            contactSubjectOpt1: "Consulta General",
            contactSubjectOpt2: "Solicitar Clase de Prueba Gratuita",
            contactSubjectOpt3: "Info Curso Principiante",
            contactSubjectOpt4: "Info Curso Intermedio",
            contactSubjectOpt5: "Info Clases Personalizadas",
            contactMessageLabel: "Mensaje:",
            contactSubmitBtn: "Enviar Mensaje",
            contactInfoTitle: "Información de Contacto",
            contactInfoLocation: "Clases 100% Online",
            contactTrialTitle: "Solicita tu Clase Introductoria Gratuita",
            contactTrialDesc: "Una sesión de 30 minutos para conocernos, evaluar tu nivel y discutir cómo puedo ayudarte a alcanzar tus metas ajedrecísticas.",
            contactTrialBtn: "Solicitar Ahora",

            footerAboutTitle: "Chill Chess Club",
            footerAboutDesc: "Transformando tu juego con un método personalizado y efectivo. Clases para principiantes e intermedios.",
            footerLinksTitle: "Enlaces Rápidos",
            footerPrivacyLink: "Política de Privacidad",
            footerTermsLink: "Términos de Servicio",
            footerContactTitle: "Contacto Rápido",
            footerContactFormLink: "Formulario de Contacto",
            footerPaymentText: "Pagos Seguros con:",
            footerCopyright: "© [YEAR] Chill Chess Club. Todos los derechos reservados.",

            formSuccess: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
            formError: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o usa el email de contacto.",
            submitting: "Enviando...",
            backToTop: "Volver arriba"
        },
        en: {
            pageTitle: "Chill Chess Club | Online Chess Classes",
            metaDescription: "Learn chess with a relaxed, personalized method. Online classes for beginners & intermediates adapted with AI to maximize your progress.",
            logoAlt: "Chill Chess Club Logo",
            siteName: "Chill Chess Club",
            logoLinkAriaLabel: "Go to the top of the page",
            navHome: "Home",
            navAbout: "About Me",
            navCourses: "Courses",
            navMethod: "Method",
            navBenefits: "Benefits",
            navResources: "Resources",
            navBlog: "Blog",
            navContact: "Contact",

            heroTitle: "Discover chess your way: an immersive and personalized experience",
            heroSubtitle: "Feel how chess flows with you. My method is fine-tuned with AI, allowing me to adapt lessons and materials to your tastes and interests, so your understanding of the game expands naturally.",
            heroCtaTrial: "Try your first class for free",
            heroCtaMethod: "How do I do it?",

            aboutTitle: "About Me",
            aboutQuoteText: "\"Chess is a sea in which a gnat may drink and an elephant may bathe.\"",
            aboutQuoteCite: "- Indian Proverb",
            aboutImageAlt: "Artistic profile picture of instructor Santiago Narvaez",
            aboutSubtitle: "Deciphering Chess With You: From the Shore to the Depths",
            aboutPara1: "I'm Santiago Narváez. Just as the Indian proverb reminds us of the vastness of the sea, I see chess as a serene ocean, ready to be explored at any level—an ocean where everyone belongs. This vision defines my teaching for beginners and intermediates. My goal is to create a space where every player can grow and find their own joy in the game, regardless of their starting point. I adapt my method so that learning is a fluid and personal experience, allowing students to explore the currents of chess with confidence and satisfaction.",
            aboutPara2: "While my path hasn't been that of professional tournament chess, my energy is entirely focused on making chess accessible and exciting for you. My strength lies in a special ability to simplify concepts and strategies, guiding beginner and intermediate players towards a solid understanding and genuine enjoyment of the game. My commitment is to be the bridge you need to connect with the beauty of chess, combining classic teaching with the advantages of current technology, regardless of your initial level. Currently, I teach these classes online from the beautiful Margarita Island, in Venezuela.",
            aboutPhilosophyTitle: "My Method and Philosophy: Personalized Chess with Intelligence",
            aboutPhilosophyPara: "My conviction is a learning experience as unique as you are. Therefore, my immersive method fuses theory and practice with deep personalization. I rely on AI to design and adapt your educational content (lessons, exercises) to your strengths, weaknesses, tastes, and goals, achieving a more enjoyable study and efficient progress.",
            aboutPlatformsTitle: "Platforms Used",
            aboutPlatformsDesc: "We use the following platforms for our classes and analysis. It is necessary that you have a (free) account and the application installed:",
            aboutPlatformChesscom: "My Chess.com Profile",
            aboutPlatformLichess: "My Lichess.org Profile",
            aboutCtaConnect: "Ready to start?",

            coursesTitle: "Explore Courses: Your Chess, Your Pace",
            coursesIntro: "Discover the ideal program for you, designed to boost your game regardless of your experience. Each option offers you: bilingual study material, lessons and exercises that I adapt to your interests with AI assistance, and my continuous support for you to achieve your goals.",

            courseBeginnerTitle: "Beginner Course:<br>Liftoff",
            courseBeginnerLevelAriaLabel: "Beginner Level",
            courseBeginnerImgAlt: "White chess pieces ready to start",
            courseBeginnerFeat1: "Clearly understand the rules and movement of each piece.",
            courseBeginnerFeat2: "Learn the essential principles to start your games well (openings).",
            courseBeginnerFeat3: "Master basic tactics to win material and control the game.",
            courseBeginnerFeat4: "Learn fundamental endgames to close your games well.",
            courseBeginnerFeat5: "8 live one-on-one classes to build your chess foundations, with pace and examples adapted to you.",
            courseBeginnerFeat6: "Access to bilingual digital study material (Spanish/English) created by me to guide your practice.",
            courseBeginnerFeat7: "Exercises and examples that I select and adapt with AI according to your interests to make studying the syllabus more enjoyable and effective.",
            courseBeginnerPrice: "$120 USD",
            coursePriceNoteHour: "8-class package (only $15 USD/hour). Payment plans available",
            courseEnrollBtn: "Start Now",

            courseIntermediateTitle: "Intermediate Course:<br>Strategist",
            courseIntermediateLevelAriaLabel: "Intermediate Level",
            courseIntermediateImgAlt: "Chessboard showing a complex strategy",
            courseIntermediateFeat1: "Explore positional strategy to understand and control the game at a deeper level.",
            courseIntermediateFeat2: "Develop an opening repertoire that suits your playing style.",
            courseIntermediateFeat3: "Master more complex tactical combinations to create decisive advantages.",
            courseIntermediateFeat4: "Accurately apply essential practical endgames to convert your advantages into wins.",
            courseIntermediateFeat5: "16 live one-on-one classes to refine your strategic and tactical play, with a focus adapted to your areas of improvement.",
            courseIntermediateFeat6: "Detailed analysis of your games: I identify patterns and key areas with the support of AI tools to guide our review.",
            courseIntermediateFeat7: "A structured study plan that I complement with material and exercises adapted by me (AI-assisted) to your goals and style within the program.",
            courseIntermediatePrice: "$320 USD",
            courseIntermediatePriceNoteHour: "16-class package (only $20 USD/hour). Payment plans available",

            courseCustomTitle: "Personalized Classes:<br>Your Game",
            courseCustomLevelAriaLabel: "Custom Level",
            courseCustomImgAlt: "Chess instructor giving a personalized online class",
            courseCustomFeat1: "A study plan totally co-created with you, designed from scratch for your unique chess goals.",
            courseCustomFeat2: "We focus 100% on your specific objectives, areas of interest, or any aspect of the game you want to explore or improve.",
            courseCustomFeat3: "Maximum flexibility in schedules, class frequency, and program duration, adapting to your life.",
            courseCustomFeat4: "One-on-one sessions, where every minute is exclusively dedicated to your progress and resolving your doubts.",
            courseCustomFeat5: "In-depth and practical analysis of your own games for fully personalized feedback.",
            courseCustomFeat6: "Creation of teaching material and selection of exclusive resources for you, where I use AI to help you build the most effective path towards your goals.",
            courseCustomFeat7: "Continuous support and follow-up between sessions to maintain your motivation and resolve doubts along the way.",
            courseCustomPrice: "$25 USD",
            courseCustomPriceNoteHour: "/ hour (live classes)",
            courseConsultBtn: "Check Availability",

            methodTitle: "My Method: Immersive and Personalized Learning with a Unique Technological Touch",
            methodIntro: "Discover how my approach, combining a deep understanding of chess with advanced skills in AI-assisted digital content creation, transforms your learning into an experience fully tailored to you: your style, your pace, and your interests.",
            methodStep1Title: "Connection and Initial Assessment",
            methodStep1Desc: "We start with a chat to get to know each other and understand your goals. Then, I analyze your level, playing style, and interests, reviewing your games (on Chess.com, whether played with me or sent by you) and using my teaching experience to draw an initial map.",
            methodStep2aTitle: "Design of Your Personal Roadmap",
            methodStep2aDesc: "Based on our conversation and your initial assessment, I design a clear roadmap for your learning. I select the central themes and study structure that best suit your current level, specific goals, and how you prefer to assimilate information.",
            methodStep2bTitle: "Unique Educational Material, Created for You with AI",
            methodStep2bDesc: "This is where my approach is enhanced. I rely on advanced AI tools to develop fully customized educational resources: from articles and personalized analyses to summaries and audio guides in your language, all shaped by your hobbies and aspirations for stimulating learning.",
            methodStep3Title: "Immersive and Practical Learning Sessions",
            methodStep3Desc: "Our live classes are dynamic and interactive. We use Chess.com or Lichess to play, analyze positions, solve tactical and strategic problems, and practice what you've learned with your personalized material, always in a relaxed atmosphere and adapting to your energy of the day.",
            methodStep4Title: "Continuous Evolution and Smart Adaptation",
            methodStep4Desc: "Your progress is my priority. I closely monitor your evolution, analyze your new games, and we continuously adjust the plan and materials. AI assists me in identifying patterns and refining resources so your learning never stagnates, keeping you always motivated.",
            methodKeyBenefitsTitle: "How Does My Method Truly Help You?",
            methodKeyBenefitsDesc: "My method is designed to offer you a chess learning experience that goes beyond the conventional. I combine my personalized attention and passion for teaching with a unique mastery of digital and AI tools to create a path tailored exactly to you. You'll focus on what truly drives your progress, in an effective, deeply enjoyable, and life-adapted way.",
            methodExploreBenefitsBtn: "Discover All the Benefits of Chess",

            benefitsTitle: "Enrich Your Life with Chess. At Any Age.",
            benefitsIntro: "Playing chess is much more than a simple game; it's a powerful tool to activate your mind, strengthen your character, and connect with others, no matter what stage of life you're in. At Chill Chess Club, we show you how this ancient game boosts your personal growth in surprising ways, whether you're young, an adult, or a senior.",
            benefitsPascalQuoteText: "\"Chess is the gymnasium of the mind.\"",
            benefitsPascalCiteName: "- Blaise Pascal",
            benefitsMindTitle: "Awaken and Strengthen Your Mind",
            benefitsMindFeat1Concept: "Sharp Memory and Recognition",
            benefitsMindFeat1Desc: "Exercise your memory by recalling openings, tactics, and recognizing complex patterns on the board.",
            benefitsMindFeat2Concept: "Deep Concentration",
            benefitsMindFeat2Desc: "Develop intense focus, learning to maintain attention and manage environmental distractions.",
            benefitsMindFeat3Concept: "Strategic Thinking and Problem Solving",
            benefitsMindFeat3Desc: "Every game is a challenge. Learn to analyze situations from multiple angles, plan ahead, and find creative and logical solutions.",
            benefitsMindFeat4Concept: "Vision and Anticipation",
            benefitsMindFeat4Desc: "Develop the ability to look ahead, foresee possible scenarios, and plan your moves with greater perspective.",
            benefitsLifeSkillsTitle: "Essential Life Skills",
            benefitsLifeSkill1Concept: "Smart Decision-Making",
            benefitsLifeSkill1Desc: "Evaluate options, weigh risks and benefits, and make safer, more calculated decisions, even under pressure.",
            benefitsLifeSkill2Concept: "Resilience and Mental Strength",
            benefitsLifeSkill2Desc: "Learn to manage both victory and defeat with balance. Chess teaches you to learn from mistakes and strengthen your character in the face of challenges.",
            benefitsLifeSkill3Concept: "Empathy and Understanding",
            benefitsLifeSkill3Desc: "Putting yourself in your opponent's perspective to understand their intentions improves your ability to understand different viewpoints.",
            benefitsLifeSkill4Concept: "Patience and Self-Control",
            benefitsLifeSkill4Desc: "Master impulsivity. Chess encourages reflection and calmness, teaching you to think carefully before acting.",
            benefitsWellbeingTitle: "Well-being and Connection Forever",
            benefitsWellbeing1Concept: "Sustained Mental Agility",
            benefitsWellbeing1Desc: "Keep your mind active, challenged, and fit throughout your life. Studies suggest cognitive benefits even in advanced ages.",
            benefitsWellbeing2Concept: "Universal Connection",
            benefitsWellbeing2Desc: "Join a vast global community. Chess is a shared language that transcends age, cultural, and geographical barriers.",
            benefitsCtaText: "Ready to start (or continue) your transformation?",
            benefitsCtaMethod: "Our personalized method is designed to guide you on this fascinating journey, helping you develop not only your game but also valuable life skills, no matter when you decide to start.",
            benefitsCtaBtn: "Join the Club!",

            resourcesTitle: "Essential Free Resources",
            resourcesIntro: "Begin your chess exploration or rediscover its fundamentals. These essential materials are the starting point towards a deeper understanding of the game.",
            resource1Title: "Essential Chess: Understanding Moves and Rules",
            resource1Desc: "Master the board by moving your pieces with confidence. We present the basic rules in a direct and understandable way.",
            resource2Title: "Chess Precepts: A Fundamental Guide for Beginners",
            resource2Desc: "Discover the fundamental concepts that will guide your first games and help you build a solid and thoughtful strategic foundation.",
            resource3Title: "Anatomy of the Game: Pieces, Phases, and Their Strategic Value",
            resource3Desc: "A look at the game's flow, from opening to endgame, and how each piece's value and characteristics define your strategy.",
            resourceLinkText: "Explore Content",
            resourcesCta: "If this information resonates with you, <a href=\"#cursos\" class=\"scroll-to\">discover our courses</a> and deepen your knowledge with a personalized approach.",

            // --- Texts for Blog ---
            blogTitle: "From Our Blog",
            blogIntro: "A space dedicated to the exploration of chess. Articles, perspectives, and curiosities to deepen your understanding and appreciation for the game.", // <-- UPDATED INTRO
            blogPost1Title: "The Legacy of Chess: A Journey Through Time and Cultures",
            blogPost1Excerpt: "Explore the rich evolution of chess, from its ancient origins and its journey through diverse cultures, to its consolidation as the intellectual challenge we know today.",
            blogPost1ImgAlt: "The legacy of chess through time", // Placeholder Alt Text
            blogPost2Title: "Chess: Slow Game or Exciting Challenge? The Answer Might Surprise You",
            blogPost2Excerpt: "If you think chess is only for patient geniuses, allow us to show you its intensity, its creative beauty, and why it has remained relevant for centuries.",
            blogPost2ImgAlt: "Chess as an exciting challenge", // Placeholder Alt Text
            blogPost3Title: "Your Path to Online Chess: 5 Easy Steps for a Free Start",
            blogPost3Excerpt: "Starting online chess is simple. Follow this five-step guide to access free platforms and enjoy the international chess experience quickly.",
            blogPost3ImgAlt: "Guide to start playing chess online", // Placeholder Alt Text
            blogReadMore: "Read More", // Text for the "Read More" button of each post

            contactTitle: "Contact Me",
            contactIntro: "Ready to start or have questions? Send me a message using the form or use my contact details.",
            contactFormTitle: "Contact Form",
            contactNameLabel: "Name:",
            contactEmailLabel: "Email:",
            contactSubjectLabel: "Subject:",
            contactSubjectOpt1: "General Inquiry",
            contactSubjectOpt2: "Request Free Trial Class",
            contactSubjectOpt3: "Info Beginner Course",
            contactSubjectOpt4: "Info Intermediate Course",
            contactSubjectOpt5: "Info Personalized Classes",
            contactMessageLabel: "Message:",
            contactSubmitBtn: "Send Message",
            contactInfoTitle: "Contact Information",
            contactInfoLocation: "100% Online Classes",
            contactTrialTitle: "Request Your Free Introductory Class",
            contactTrialDesc: "A 30-minute session to get to know each other, assess your level, and discuss how I can help you achieve your chess goals.",
            contactTrialBtn: "Request Now",

            footerAboutTitle: "Chill Chess Club",
            footerAboutDesc: "Transforming your game with a personalized and effective method. Classes for beginners and intermediates.",
            footerLinksTitle: "Quick Links",
            footerPrivacyLink: "Privacy Policy",
            footerTermsLink: "Terms of Service",
            footerContactTitle: "Quick Contact",
            footerContactFormLink: "Contact Form",
            footerPaymentText: "Secure Payments with:",
            footerCopyright: "© [YEAR] Chill Chess Club. All rights reserved.",

            formSuccess: "Message sent successfully! We will contact you soon.",
            formError: "There was an error sending the message. Please try again or use the contact email.",
            submitting: "Sending...",
            backToTop: "Back to top"
        }
    };

    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const backToTopButton = document.getElementById('back-to-top-btn');
    const bodyElement = document.body;

    // Function to set the language
    const setLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }
        // Duration of the fade transition for language change
        const transitionDuration = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--lang-transition-speed') || '0.25') * 1000);

        bodyElement.classList.add('fade-out'); // Apply fade-out effect
        langButtons.forEach(btn => btn.disabled = true); // Disable buttons during transition

        setTimeout(() => {
            translatableElements.forEach(el => {
                const keyAttr = el.dataset.langKey;
                const [key, attribute] = keyAttr.split('|');

                if (translations[lang][key]) {
                    let translation = translations[lang][key];

                    if (key === 'footerCopyright') {
                        translation = translation.replace('[YEAR]', new Date().getFullYear());
                    }

                    if (attribute) {
                        el.setAttribute(attribute, translation);
                        if (key === 'metaDescription' && attribute === 'content') {
                            document.querySelector('meta[name="description"]').setAttribute('content', translation);
                        }
                         if (key === 'courseBeginnerImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'courseIntermediateImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'courseCustomImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'aboutImageAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'blogPost1ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'blogPost2ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'blogPost3ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'logoAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                    } else if (
                        key === 'courseBeginnerTitle' ||
                        key === 'courseIntermediateTitle' ||
                        key === 'courseCustomTitle' ||
                        key === 'resourcesCta' || 
                        key === 'coursesCtaText' ||
                        key === 'benefitsIntro' ||
                        key === 'benefitsCtaText' ||
                        key === 'benefitsCtaMethod' ||
                        key === 'methodKeyBenefitsDesc' ||
                        key === 'aboutQuoteText'
                    ) {
                        el.innerHTML = translation; 
                    } else if (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button') || el.tagName === 'BUTTON') {
                        if (el.id === 'back-to-top-btn') {
                             el.setAttribute('aria-label', translations[lang]['backToTop'] || 'Back to top');
                             el.setAttribute('title', translations[lang]['backToTop'] || 'Back to top');
                        } else {
                            el.value = translation;
                            el.innerHTML = translation;
                        }
                    } else if (el.tagName === 'TITLE') {
                        document.title = translation;
                    }
                    else {
                        el.textContent = translation;
                    }
                }
            });

            document.documentElement.lang = lang;

            langButtons.forEach(btn => {
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                    btn.setAttribute('aria-current', 'page');
                } else {
                    btn.classList.remove('active');
                    btn.removeAttribute('aria-current');
                }
            });

            try {
                localStorage.setItem('preferredLanguage', lang);
            } catch (e) {
                console.warn("Could not save language preference to localStorage.");
            }

            bodyElement.classList.remove('fade-out');
            setTimeout(() => {
                langButtons.forEach(btn => btn.disabled = false);
            }, 50);

        }, transitionDuration);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (bodyElement.classList.contains('fade-out') || e.target.classList.contains('active')) {
                return;
            }
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    const initialUpdateLanguage = (lang) => {
        if (!translations[lang]) return;

        translatableElements.forEach(el => {
             const keyAttr = el.dataset.langKey;
             const [key, attribute] = keyAttr.split('|');
             if (translations[lang][key]) {
                 let translation = translations[lang][key];
                 if (key === 'footerCopyright') {
                     translation = translation.replace('[YEAR]', new Date().getFullYear());
                 }
                 if (attribute) {
                     el.setAttribute(attribute, translation);
                     if (key === 'metaDescription' && attribute === 'content') {
                         document.querySelector('meta[name="description"]').setAttribute('content', translation);
                     }
                      if (key === 'courseBeginnerImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'courseIntermediateImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'courseCustomImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'aboutImageAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'blogPost1ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'blogPost2ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'blogPost3ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'logoAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }

                 } else if (
                    key === 'courseBeginnerTitle' ||
                    key === 'courseIntermediateTitle' ||
                    key === 'courseCustomTitle' ||
                    key === 'resourcesCta' || 
                    key === 'coursesCtaText' ||
                    key === 'benefitsIntro' ||
                    key === 'benefitsCtaText' ||
                    key === 'benefitsCtaMethod' ||
                    key === 'methodKeyBenefitsDesc' ||
                    key === 'aboutQuoteText'
                ) {
                     el.innerHTML = translation; 
                } else if (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button') || el.tagName === 'BUTTON') {
                     if (el.id === 'back-to-top-btn') {
                          el.setAttribute('aria-label', translations[lang]['backToTop'] || 'Back to top');
                          el.setAttribute('title', translations[lang]['backToTop'] || 'Back to top');
                     } else {
                         el.value = translation;
                         el.innerHTML = translation;
                     }
                 } else if (el.tagName === 'TITLE') {
                     document.title = translation;
                 }
                 else {
                     el.textContent = translation;
                 }
             }
        });
        document.documentElement.lang = lang;
        langButtons.forEach(btn => {
             if (btn.dataset.lang === lang) {
                 btn.classList.add('active');
                 btn.setAttribute('aria-current', 'page');
             } else {
                 btn.classList.remove('active');
                 btn.removeAttribute('aria-current');
             }
        });
    };

    let preferredLanguage = 'es';
     try {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            preferredLanguage = savedLang;
        } else {
            const browserLang = navigator.language.split('-')[0];
            if (translations[browserLang]) {
                preferredLanguage = browserLang;
            }
        }
    } catch (e) {
        console.warn("Could not read language preference from localStorage. Defaulting to 'es'.");
    }
    initialUpdateLanguage(preferredLanguage);


    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
                "color": {"value": ["#EC4899", "#F97316", "#8B5CF6", "#d4af37"]},
                "shape": {"type": "circle", "stroke": {"width": 0, "color": "#000000"}, "polygon": {"nb_sides": 5}},
                "opacity": {"value": 0.6, "random": true, "anim": {"enable": true, "speed": 1, "opacity_min": 0.1, "sync": false}},
                "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
                "line_linked": {"enable": true, "distance": 150, "color": "#a1a1aa", "opacity": 0.4, "width": 1},
                "move": {"enable": true, "speed": 3, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}}
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}, "resize": true},
                "modes": {
                    "grab": {"distance": 140, "line_linked": {"opacity": 1}},
                    "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                    "repulse": {"distance": 200, "duration": 0.4},
                    "push": {"particles_nb": 4},
                    "remove": {"particles_nb": 2}
                }
            },
            "retina_detect": true
        });
    }


    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
            const icon = menuToggle.querySelector('i');
            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

         document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active') &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    document.querySelectorAll('a.scroll-to, .nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height-desktop') || '65') + 10;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    if (targetId === '#contacto') {
                        const subjectValue = this.getAttribute('data-subject');
                        const subjectSelect = document.getElementById('subject');
                        const firstInput = document.querySelector('#contactForm #name');

                        if (subjectValue && subjectSelect) {
                            subjectSelect.value = subjectValue;
                        }
                        if(firstInput) {
                            setTimeout(() => firstInput.focus(), 300);
                        }
                    }
                }
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

     if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const currentLang = document.documentElement.lang || 'es';

            formStatus.textContent = translations[currentLang]?.submitting || 'Enviando...';
            formStatus.className = 'status';
            formStatus.style.display = 'block';

            setTimeout(() => {
                const isSuccess = Math.random() > 0.2;

                if (isSuccess) {
                    formStatus.textContent = translations[currentLang]?.formSuccess || '¡Mensaje enviado con éxito! Te contactaremos pronto.';
                    formStatus.classList.add('success');
                    contactForm.reset();
                } else {
                    formStatus.textContent = translations[currentLang]?.formError || 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o usa el email de contacto.';
                    formStatus.classList.add('error');
                }
                 setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.className = 'status';
                 }, 5000);
            }, 1500);
        });
    }

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

     const yearSpan = document.getElementById('current-year');
     if (yearSpan) {
         yearSpan.textContent = new Date().getFullYear();
     }


}); // End DOMContentLoaded
