// main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Translation ---
    const translations = {
        es: {
            pageTitle: "Chill Chess Club | Clases de Ajedrez Online",
            metaDescription: "Aprende ajedrez con un método relajado y personalizado. Clases online para principiantes e intermedios adaptadas con IA para maximizar tu progreso.", // Ligeramente más corto
            logoAlt: "Logo de Chill Chess Club", // Más descriptivo
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

            heroTitle: "Domina el ajedrez con un enfoque inmersivo y personalizado",
            heroSubtitle: "Método exclusivo diseñado para ayudarte a progresar desde principiante hasta nivel intermedio, con instrucción personalizada y asistida por IA.", // Flujo ligeramente mejorado
            heroCtaTrial: "Solicita tu clase introductoria gratuita",
            heroCtaMethod: "Descubre mi método",

            aboutTitle: "Sobre Mí",
            aboutImageAlt: "Foto de perfil artística del instructor jugando ajedrez en la playa",
            aboutSubtitle: "Un enfoque único para el aprendizaje del ajedrez",
            aboutPara1: "Apasionado del ajedrez desde temprana edad, he dedicado mi vida a entender y enseñar este magnífico juego a jugadores principiantes e intermedios. Mi enfoque se centra en el desarrollo personalizado de cada estudiante, adaptando las técnicas de enseñanza a sus necesidades específicas.",
            aboutPara2: "Aunque no soy un jugador federado de alto nivel, mi verdadera fortaleza radica en mi capacidad didáctica excepcional y en mi habilidad para descomponer conceptos complejos en elementos comprensibles para niveles iniciales e intermedios.",
            aboutPhilosophyTitle: "Mi filosofía de enseñanza",
            aboutPhilosophyPara: "Creo firmemente en un método inmersivo que combina la teoría con la práctica constante. Mi sistema personalizado utiliza tecnologías de IA para adaptar el contenido a tus fortalezas y debilidades, permitiéndote progresar de manera eficiente y motivadora.",
            aboutPlatformsTitle: "Plataformas Utilizadas",
            aboutPlatformsDesc: "Utilizamos principalmente las siguientes plataformas para nuestras clases y análisis. Es recomendable que tengas una cuenta (gratuita) y la aplicación instalada:",
            aboutPlatformChesscom: "Mi Perfil en Chess.com",
            aboutPlatformLichess: "Mi Perfil en Lichess.org",
            aboutCtaConnect: "Conéctate conmigo",

            coursesTitle: "Cursos y Servicios",
            coursesIntro: "Programas diseñados para satisfacer tus necesidades específicas, sin importar tu nivel. Todos los cursos incluyen material didáctico bilingüe, acceso a herramientas de IA personalizadas y soporte continuo.", // 'multilingüe' a 'bilingüe' si es solo ES/EN
            courseBeginnerTitle: "Curso Principiante: El Despegue", // Título más atractivo
            courseBeginnerLevelAriaLabel: "Nivel Principiante",
            courseBeginnerImgAlt: "Piezas de ajedrez blancas listas para empezar", // Más específico
            courseBeginnerFeat1: "Domina los movimientos y reglas esenciales.", // Más orientado a la acción
            courseBeginnerFeat2: "Descubre los secretos de una buena apertura.",
            courseBeginnerFeat3: "Aprende tácticas básicas para ganar ventaja.",
            courseBeginnerFeat4: "Entiende los finales clave para cerrar partidas.",
            courseBeginnerFeat5: "8 clases en vivo 1-a-1 adaptadas a ti.", // Más claro
            courseBeginnerFeat6: "Material didáctico bilingüe (ES/EN).", // Especifica idiomas
            courseBeginnerFeat7: "Acceso a nuestra IA de entrenamiento personalizada.",
            courseBeginnerPrice: "$15 USD",
            coursePriceNoteHour: "/ hora (clases en vivo)",
            courseEnrollBtn: "Empezar Ahora", // Llamada a la acción diferente

            courseIntermediateTitle: "Curso Intermedio: Estratega", // Título más atractivo
            courseIntermediateLevelAriaLabel: "Nivel Intermedio",
            courseIntermediateImgAlt: "Tablero de ajedrez mostrando una estrategia compleja", // Más específico
            courseIntermediateFeat1: "Profundiza en estrategia posicional avanzada.",
            courseIntermediateFeat2: "Construye tu repertorio de aperturas ideal.",
            courseIntermediateFeat3: "Domina combinaciones tácticas intermedias.",
            courseIntermediateFeat4: "Aplica finales prácticos esenciales con confianza.",
            courseIntermediateFeat5: "16 clases en vivo 1-a-1 para pulir tu juego.",
            courseIntermediateFeat6: "Análisis detallado de tus partidas con IA.",
            courseIntermediateFeat7: "Recibe un plan de estudio individualizado.",
            courseIntermediatePrice: "$20 USD",
            // coursePriceNoteHour: "/ hora (clases en vivo)", // Reutiliza la clave anterior
            // courseEnrollBtn: "Inscríbete", // Reutiliza la clave anterior o crea una nueva si el texto debe ser diferente

            courseCustomTitle: "Clases Personalizadas: Tu Juego", // Título más atractivo
            courseCustomLevelAriaLabel: "Nivel Personalizado",
            courseCustomImgAlt: "Instructor de ajedrez dando una clase personalizada online", // Más específico
            courseCustomFeat1: "Diseñamos un programa 100% a tu medida.",
            courseCustomFeat2: "Nos enfocamos en tus objetivos y áreas de mejora.",
            courseCustomFeat3: "Máxima flexibilidad de horarios.",
            courseCustomFeat4: "Sesiones individuales totalmente dedicadas a ti.",
            courseCustomFeat5: "Análisis profundo y práctico de tu juego.",
            courseCustomFeat6: "Recursos y material exclusivo adaptado.",
            courseCustomFeat7: "Soporte y seguimiento constante entre sesiones.",
            courseCustomPrice: "$30 USD",
            // coursePriceNoteHour: "/ hora (clases en vivo)", // Reutiliza la clave anterior
            courseConsultBtn: "Consultar Disponibilidad", // Llamada a la acción diferente

            coursesCtaText: "¿No estás seguro qué opción es mejor para ti? Agenda una sesión introductoria gratuita y recibe una evaluación personalizada.",
            coursesCtaBtn: "Solicitar Clase de Prueba Gratis", // Coherencia con botón superior

            methodTitle: "Nuestro Método Inmersivo y Personalizado",
            methodIntro: "Descubre cómo nuestro enfoque único, potenciado por IA, acelera tu aprendizaje y se adapta perfectamente a tu estilo y ritmo.",
            methodStep1Title: "Evaluación Personalizada",
            methodStep1Desc: "Comenzamos con un análisis detallado de tu nivel actual, estilo de juego, fortalezas y debilidades, utilizando herramientas avanzadas y mi experiencia pedagógica.",
            methodStep2Title: "Plan de Estudio Adaptativo con IA",
            methodStep2Desc: "Nuestra plataforma utiliza inteligencia artificial para crear un plan de estudio dinámico que evoluciona contigo, enfocándose en las áreas de mayor impacto para tu progreso.",
            methodStep3Title: "Sesiones Inmersivas",
            methodStep3Desc: "Clases (en vivo o grabadas) que van más allá de la teoría. Nos sumergimos en análisis de partidas, resolución de problemas tácticos y estratégicos, y práctica deliberada.",
            methodStep4Title: "Seguimiento Continuo",
            methodStep4Desc: "Monitorizamos tu progreso constantemente, ajustando el plan y proporcionando retroalimentación específica para asegurar que siempre estés desafiado pero no abrumado.",
            methodBenefitsTitle: "Beneficios Clave",
            methodBenefit1: "Aprendizaje más rápido y eficiente.",
            methodBenefit2: "Mayor comprensión conceptual y práctica.",
            methodBenefit3: "Motivación constante a través de metas personalizadas.",
            methodBenefit4: "Flexibilidad para aprender a tu propio ritmo.",
            methodBenefit5: "Desarrollo de un pensamiento ajedrecístico más profundo.",
            methodBenefitsBtn: "Ver Cursos Disponibles",

            benefitsTitle: "Enriquece tu Vida con el Ajedrez. A Cualquier Edad.",
            benefitsIntro: "Jugar ajedrez es mucho más que una simple partida; es una poderosa herramienta para activar tu mente, fortalecer tu carácter y conectar con otros, sin importar en qué etapa de la vida te encuentres. En Chill Chess Club, te mostramos cómo este juego milenario impulsa tu crecimiento personal de formas sorprendentes, seas joven, adulto o mayor.",
            benefitsMindTitle: "Despierta y Fortalece tu Mente",
            benefitsMindFeat1: "Memoria Aguda y Reconocimiento: Ejercita tu memoria recordando aperturas, tácticas y reconociendo patrones complejos sobre el tablero.",
            benefitsMindFeat2: "Concentración Profunda: Desarrolla una capacidad de enfoque intensa, aprendiendo a mantener la atención y a gestionar las distracciones del entorno.",
            benefitsMindFeat3: "Pensamiento Estratégico y Resolución de Problemas: Cada partida es un desafío. Aprende a analizar situaciones desde múltiples ángulos, planificar con antelación y encontrar soluciones creativas y lógicas.",
            benefitsMindFeat4: "Visión y Anticipación: Desarrolla la habilidad de mirar hacia adelante, prever posibles escenarios y planificar tus movimientos con mayor perspectiva.",
            benefitsLifeSkillsTitle: "Habilidades Esenciales para la Vida",
            benefitsLifeSkillsIntro: "Las lecciones del tablero se traducen directamente en ventajas fuera de él, útiles en cada fase de tu vida:",
            benefitsLifeSkill1: "Toma de Decisiones Inteligente: Evalúa opciones, sopesa riesgos y beneficios, y toma decisiones más seguras y calculadas, incluso bajo presión.",
            benefitsLifeSkill2: "Resiliencia y Fortaleza Mental: Aprende a gestionar tanto la victoria como la derrota con equilibrio. El ajedrez te enseña a aprender de los errores y a fortalecer tu carácter ante los desafíos.",
            benefitsLifeSkill3: "Empatía y Comprensión: Ponerte en la perspectiva de tu oponente para entender sus intenciones mejora tu habilidad para comprender diferentes puntos de vista.",
            benefitsLifeSkill4: "Paciencia y Autocontrol: Domina la impulsividad. El ajedrez fomenta la reflexión y la calma, enseñándote a pensar cuidadosamente antes de actuar.",
            benefitsWellbeingTitle: "Bienestar y Conexión para Siempre",
            benefitsWellbeing1: "Agilidad Mental Sostenida: Mantén tu mente activa, desafiada y en forma a lo largo de toda tu vida. Estudios sugieren beneficios cognitivos incluso en edades avanzadas.",
            benefitsWellbeing2: "Conexión Universal: Únete a una vasta comunidad global. El ajedrez es un lenguaje compartido que supera barreras de edad, culturales y geográficas.",
            benefitsCtaText: "¿Listo para iniciar (o continuar) tu transformación?",
            benefitsCtaMethod: "Nuestro método personalizado está diseñado para guiarte en este fascinante viaje, ayudándote a desarrollar no solo tu juego, sino también valiosas habilidades para la vida, sin importar cuándo decidas empezar.",
            benefitsCtaBtn: "¡Únete al Club!",

            resourcesTitle: "Recursos Gratuitos Esenciales", // Título más específico
            resourcesIntro: "Explora estos materiales introductorios o refresca tus conocimientos. ¡El primer paso hacia tu maestría empieza aquí!", // Más motivador
            resource1Title: "Guía Rápida: Movimientos y Reglas", // Más directo
            resource1Desc: "Todo lo que necesitas saber para empezar a mover las piezas con confianza. ¡Las reglas básicas explicadas de forma sencilla!", // Más atractivo
            resourceLinkText: "Explorar Guía", // Llamada a la acción diferente
            resource2Title: "5 Tácticas Clave para Principiantes",
            resource2Desc: "Descubre patrones tácticos iniciales que te darán ventaja y te ayudarán a sorprender a tus oponentes.",
            // resourceLinkText: "Leer más", // Reutilizar clave si el texto es el mismo
            resource3Title: "Errores Típicos (¡Y Cómo Evitarlos!)",
            resource3Desc: "Identifica las trampas comunes en las que caen los principiantes y aprende a esquivarlas para mejorar rápidamente.",
            // resourceLinkText: "Leer más", // Reutilizar clave
            resourcesCta: "¿Listo para el siguiente nivel? <a href=\"#cursos\" class=\"scroll-to\">Descubre nuestros cursos</a> y recibe análisis personalizados.", // CTA ligeramente modificado

            blogTitle: "Desde Nuestro Blog",
            blogIntro: "Explora artículos, consejos y curiosidades del mundo del ajedrez con nuestro toque \"chill\".",
            blogPost1ImgAlt: "Imagen representativa de la historia del ajedrez",
            blogPost1Title: "Un Viaje Rápido por la Historia del Ajedrez",
            blogPost1Excerpt: "Desde sus orígenes en la India hasta el juego moderno, descubre la fascinante evolución del ajedrez a través de los siglos.",
            blogPost2ImgAlt: "Imagen mostrando el ajedrez de forma relajada",
            blogPost2Title: "¿Ajedrez Aburrido? ¡Rompiendo el Mito!",
            blogPost2Excerpt: "Descubre por qué el ajedrez es mucho más que un juego lento y complicado. ¡Es dinámico, creativo y sorprendentemente \"chill\"!",
            blogPost3ImgAlt: "Imagen de alguien jugando ajedrez online",
            blogPost3Title: "5 Pasos Sencillos para Empezar a Jugar Online",
            blogPost3Excerpt: "¿Listo para tu primera partida en línea? Te guiamos paso a paso para que empieces a jugar en minutos, ¡sin complicaciones!",
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
            // --- ENGLISH TRANSLATIONS ---
            // (Note: You'll need to translate the refined Spanish texts above into natural-sounding English)
            pageTitle: "Chill Chess Club | Online Chess Classes",
            metaDescription: "Learn chess with a relaxed, personalized method. Online classes for beginners & intermediates adapted with AI to maximize your progress.", // Slightly shorter
            logoAlt: "Chill Chess Club Logo", // More descriptive
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

            heroTitle: "Master chess with an immersive and personalized approach",
            heroSubtitle: "Exclusive method designed to help you progress from beginner to intermediate level, with personalized, AI-assisted instruction.", // Slightly improved flow
            heroCtaTrial: "Request your free introductory class",
            heroCtaMethod: "Discover my method",

            aboutTitle: "About Me",
            aboutImageAlt: "Artistic profile picture of the instructor playing chess on the beach",
            aboutSubtitle: "A unique approach to chess learning",
            aboutPara1: "Passionate about chess from an early age, I have dedicated my life to understanding and teaching this magnificent game to beginner and intermediate players. My approach focuses on the personalized development of each student, adapting teaching techniques to their specific needs.",
            aboutPara2: "Although I am not a high-level federated player, my true strength lies in my exceptional teaching ability and my skill in breaking down complex concepts into understandable elements for initial and intermediate levels.",
            aboutPhilosophyTitle: "My teaching philosophy",
            aboutPhilosophyPara: "I firmly believe in an immersive method that combines theory with constant practice. My personalized system uses AI technologies to adapt the content to your strengths and weaknesses, allowing you to progress efficiently and motivatingly.",
            aboutPlatformsTitle: "Platforms Used",
            aboutPlatformsDesc: "We primarily use the following platforms for our classes and analysis. It is recommended that you have a (free) account and the application installed:",
            aboutPlatformChesscom: "My Chess.com Profile",
            aboutPlatformLichess: "My Lichess.org Profile",
            aboutCtaConnect: "Connect with me",

            coursesTitle: "Courses and Services",
            coursesIntro: "Programs designed to meet your specific needs, regardless of your level. All courses include bilingual learning materials, access to personalized AI tools, and ongoing support.", // 'multilingual' to 'bilingual' if only ES/EN
            courseBeginnerTitle: "Beginner Course: Liftoff", // More engaging title
            courseBeginnerLevelAriaLabel: "Beginner Level",
            courseBeginnerImgAlt: "White chess pieces ready to start", // More specific
            courseBeginnerFeat1: "Master the essential moves and rules.", // More action-oriented
            courseBeginnerFeat2: "Discover the secrets of a good opening.",
            courseBeginnerFeat3: "Learn basic tactics to gain an advantage.",
            courseBeginnerFeat4: "Understand key endgames to close out games.",
            courseBeginnerFeat5: "8 personalized 1-on-1 live classes.", // Clearer
            courseBeginnerFeat6: "Bilingual learning material (ES/EN).", // Specify languages
            courseBeginnerFeat7: "Access our personalized training AI.",
            courseBeginnerPrice: "$15 USD",
            coursePriceNoteHour: "/ hour (live classes)",
            courseEnrollBtn: "Start Now", // Different CTA

            courseIntermediateTitle: "Intermediate Course: Strategist", // More engaging title
            courseIntermediateLevelAriaLabel: "Intermediate Level",
            courseIntermediateImgAlt: "Chessboard showing a complex strategy", // More specific
            courseIntermediateFeat1: "Deepen your advanced positional strategy.",
            courseIntermediateFeat2: "Build your ideal opening repertoire.",
            courseIntermediateFeat3: "Master intermediate tactical combinations.",
            courseIntermediateFeat4: "Apply essential practical endgames with confidence.",
            courseIntermediateFeat5: "16 personalized 1-on-1 live classes to polish your game.",
            courseIntermediateFeat6: "Detailed analysis of your games with AI.",
            courseIntermediateFeat7: "Receive an individualized study plan.",
            courseIntermediatePrice: "$20 USD",
            // coursePriceNoteHour: "/ hour (live classes)", // Reuse previous key
            // courseEnrollBtn: "Enroll Now", // Reuse previous key or create new if text differs

            courseCustomTitle: "Personalized Classes: Your Game", // More engaging title
            courseCustomLevelAriaLabel: "Custom Level",
            courseCustomImgAlt: "Chess instructor giving a personalized online class", // More specific
            courseCustomFeat1: "We design a program 100% tailored to you.",
            courseCustomFeat2: "We focus on your goals and areas for improvement.",
            courseCustomFeat3: "Maximum schedule flexibility.",
            courseCustomFeat4: "Individual sessions fully dedicated to you.",
            courseCustomFeat5: "In-depth and practical analysis of your game.",
            courseCustomFeat6: "Receive exclusive adapted resources.",
            courseCustomFeat7: "Constant support and follow-up between sessions.",
            courseCustomPrice: "$30 USD",
            // coursePriceNoteHour: "/ hour (live classes)", // Reuse previous key
            courseConsultBtn: "Check Availability", // Different CTA

            coursesCtaText: "Not sure which option is best for you? Schedule a free introductory session and receive a personalized assessment.",
            coursesCtaBtn: "Request Free Trial Class", // Consistency with upper button

            methodTitle: "Our Immersive and Personalized Method",
            methodIntro: "Discover how our unique AI-powered approach accelerates your learning and adapts perfectly to your style and pace.",
            methodStep1Title: "Personalized Assessment",
            methodStep1Desc: "We start with a detailed analysis of your current level, playing style, strengths, and weaknesses, using advanced tools and my teaching experience.",
            methodStep2Title: "Adaptive Study Plan with AI",
            methodStep2Desc: "Our platform uses artificial intelligence to create a dynamic study plan that evolves with you, focusing on the areas of greatest impact for your progress.",
            methodStep3Title: "Immersive Sessions",
            methodStep3Desc: "Classes (live or recorded) that go beyond theory. We dive into game analysis, solving tactical and strategic problems, and deliberate practice.",
            methodStep4Title: "Continuous Monitoring",
            methodStep4Desc: "We constantly monitor your progress, adjusting the plan and providing specific feedback to ensure you are always challenged but not overwhelmed.",
            methodBenefitsTitle: "Key Benefits",
            methodBenefit1: "Faster and more efficient learning.",
            methodBenefit2: "Greater conceptual and practical understanding.",
            methodBenefit3: "Constant motivation through personalized goals.",
            methodBenefit4: "Flexibility to learn at your own pace.",
            methodBenefit5: "Development of deeper chess thinking.",
            methodBenefitsBtn: "View Available Courses",

            benefitsTitle: "Enrich Your Life with Chess. At Any Age.",
            benefitsIntro: "Playing chess is much more than a simple game; it's a powerful tool to activate your mind, strengthen your character, and connect with others, no matter what stage of life you're in. At Chill Chess Club, we show you how this ancient game boosts your personal growth in surprising ways, whether you're young, an adult, or a senior.",
            benefitsMindTitle: "Awaken and Strengthen Your Mind",
            benefitsMindFeat1: "Sharp Memory and Recognition: Exercise your memory by recalling openings, tactics, and recognizing complex patterns on the board.",
            benefitsMindFeat2: "Deep Concentration: Develop intense focus, learning to maintain attention and manage environmental distractions.",
            benefitsMindFeat3: "Strategic Thinking and Problem Solving: Every game is a challenge. Learn to analyze situations from multiple angles, plan ahead, and find creative and logical solutions.",
            benefitsMindFeat4: "Vision and Anticipation: Develop the ability to look ahead, foresee possible scenarios, and plan your moves with greater perspective.",
            benefitsLifeSkillsTitle: "Essential Life Skills",
            benefitsLifeSkillsIntro: "The lessons from the board translate directly into advantages off it, useful in every phase of your life:",
            benefitsLifeSkill1: "Smart Decision-Making: Evaluate options, weigh risks and benefits, and make safer, more calculated decisions, even under pressure.",
            benefitsLifeSkill2: "Resilience and Mental Strength: Learn to manage both victory and defeat with balance. Chess teaches you to learn from mistakes and strengthen your character in the face of challenges.",
            benefitsLifeSkill3: "Empathy and Understanding: Putting yourself in your opponent's perspective to understand their intentions improves your ability to understand different viewpoints.",
            benefitsLifeSkill4: "Patience and Self-Control: Master impulsivity. Chess encourages reflection and calmness, teaching you to think carefully before acting.",
            benefitsWellbeingTitle: "Well-being and Connection Forever",
            benefitsWellbeing1: "Sustained Mental Agility: Keep your mind active, challenged, and fit throughout your life. Studies suggest cognitive benefits even in advanced ages.",
            benefitsWellbeing2: "Universal Connection: Join a vast global community. Chess is a shared language that transcends age, cultural, and geographical barriers.",
            benefitsCtaText: "Ready to start (or continue) your transformation?",
            benefitsCtaMethod: "Our personalized method is designed to guide you on this fascinating journey, helping you develop not only your game but also valuable life skills, no matter when you decide to start.",
            benefitsCtaBtn: "Join the Club!",

            resourcesTitle: "Essential Free Resources", // More specific title
            resourcesIntro: "Explore these introductory materials or refresh your knowledge. The first step towards mastery starts here!", // More motivating
            resource1Title: "Quick Guide: Moves and Rules", // More direct
            resource1Desc: "Everything you need to know to start moving the pieces with confidence. The basic rules explained simply!", // More engaging
            resourceLinkText: "Explore Guide", // Different CTA
            resource2Title: "5 Key Tactics for Beginners",
            resource2Desc: "Discover initial tactical patterns that will give you an edge and help you surprise your opponents.",
            // resourceLinkText: "Read more", // Reuse key if text is the same
            resource3Title: "Common Mistakes (And How to Avoid Them!)",
            resource3Desc: "Identify the common traps beginners fall into and learn how to dodge them to improve quickly.",
            // resourceLinkText: "Read more", // Reuse key
            resourcesCta: "Ready for the next level? <a href=\"#cursos\" class=\"scroll-to\">Discover our courses</a> and receive personalized analysis.", // Slightly modified CTA

            blogTitle: "From Our Blog",
            blogIntro: "Explore articles, tips, and curiosities from the world of chess with our \"chill\" touch.",
            blogPost1ImgAlt: "Representative image of chess history",
            blogPost1Title: "A Quick Journey Through the History of Chess",
            blogPost1Excerpt: "From its origins in India to the modern game, discover the fascinating evolution of chess through the centuries.",
            blogPost2ImgAlt: "Image showing chess in a relaxed way",
            blogPost2Title: "Chess Boring? Busting the Myth!",
            blogPost2Excerpt: "Discover why chess is much more than a slow and complicated game. It's dynamic, creative, and surprisingly \"chill\"!",
            blogPost3ImgAlt: "Image of someone playing chess online",
            blogPost3Title: "5 Simple Steps to Start Playing Online",
            blogPost3Excerpt: "Ready for your first online game? We guide you step-by-step so you can start playing in minutes, hassle-free!",
            blogReadMore: "Read More",

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

    // --- El resto del código JS (funciones setLanguage, initialUpdateLanguage, listeners, etc.) permanece igual ---
    // ... (asegúrate de que todo tu código JS funcional esté aquí) ...

    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const backToTopButton = document.getElementById('back-to-top-btn');
    const bodyElement = document.body;

    // --- Language Transition Function ---
    const setLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }
        const transitionDuration = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--lang-transition-speed') || '0.25') * 1000);

        bodyElement.classList.add('fade-out');
        langButtons.forEach(btn => btn.disabled = true);

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
                         // Actualizar alt de imágenes de cursos si la clave existe
                         if (key === 'courseBeginnerImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'courseIntermediateImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'courseCustomImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'aboutImageAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'blogPost1ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'blogPost2ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'blogPost3ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                         if (key === 'logoAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }


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
                    } else if (key === 'resourcesCta' || key === 'coursesCtaText' || key === 'benefitsIntro' || key === 'benefitsLifeSkillsIntro' || key === 'benefitsCtaText' || key === 'benefitsCtaMethod' ) {
                        el.innerHTML = translation; // Use innerHTML for elements that might contain HTML
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

    // Language Button Event Listeners
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (bodyElement.classList.contains('fade-out') || e.target.classList.contains('active')) {
                return;
            }
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // Initial Language Setting (No Transition)
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
                      // Actualizar alt de imágenes de cursos si la clave existe
                      if (key === 'courseBeginnerImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'courseIntermediateImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'courseCustomImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'aboutImageAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'blogPost1ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'blogPost2ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'blogPost3ImgAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }
                      if (key === 'logoAlt' && attribute === 'alt') { el.setAttribute(attribute, translation); }

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
                 } else if (key === 'resourcesCta' || key === 'coursesCtaText' || key === 'benefitsIntro' || key === 'benefitsLifeSkillsIntro' || key === 'benefitsCtaText' || key === 'benefitsCtaMethod' ) {
                      el.innerHTML = translation;
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

    // Determine and set initial language
    let preferredLanguage = 'es'; // Default language
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


    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // Initialize Particles.js
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
                "modes": {"grab": {"distance": 140, "line_linked": {"opacity": 1}}, "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3}, "repulse": {"distance": 200, "duration": 0.4}, "push": {"particles_nb": 4}, "remove": {"particles_nb": 2}}
            },
            "retina_detect": true
        });
    }


    // Mobile Menu Toggle Functionality
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
                navLinks.querySelector('a').focus();
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

    // Smooth Scrolling for internal links
    document.querySelectorAll('a.scroll-to, .nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = 80;
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

    // Contact Form Submission Simulation
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

    // Back to Top Button Functionality
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

}); // End DOMContentLoaded
