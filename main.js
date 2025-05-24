// main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado y parseado para la página:", window.location.pathname);

    // --- Language Translation ---
    const translations = {
        es: {
            pageTitle: "Clases de Ajedrez Online Personalizadas | Chill Chess Club", 
            metaDescription: "Aprende ajedrez online con el método personalizado de Chill Chess Club. Clases para principiantes e intermedios con asistencia IA. ¡Eleva tu juego!",
            logoAlt: "Logo de Chill Chess Club: Siluetas de piezas de ajedrez (torres, alfil, rey, caballo) con un sol poniente estilizado",
            siteName: "Chill Chess Club",
            logoLinkAriaLabel: "Ir al inicio de la página",
            navAbout: "Sobre Mí",
            navCourses: "Cursos",
            navMethod: "Método",
            navBenefits: "Beneficios",
            navResources: "Recursos",
            navBlog: "Blog",
            navFaq: "FAQ",
            navContact: "Contacto",

            heroTitle: "Descubre el ajedrez a tu manera: una experiencia inmersiva y personalizada",
            heroSubtitle: "Siente cómo el ajedrez fluye contigo. Mi método se afina con IA, permitiéndome adaptar las lecciones y el material a tus gustos e intereses, para que tu comprensión del juego se expanda naturalmente.",
            heroCtaTrial: "Prueba tu primera clase gratis",
            heroCtaMethod: "¿Cómo lo hago?",

            aboutTitle: "Sobre Mí",
            aboutQuoteText: "\"El ajedrez es un mar en el cual un mosquito puede beber y un elefante puede bañarse.\"",
            aboutQuoteCite: "- Proverbio Indio",
            aboutImageAlt: "Santiago Narváez, instructor de Chill Chess Club, jugando una partida de ajedrez en la playa durante el atardecer",
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
            courseBeginnerImgAlt: "Peón negro derribando al rey blanco en un tablero sobre el agua al atardecer, representando el inicio del aprendizaje en el curso de principiantes de Chill Chess Club",
            courseBeginnerFeat1: "Conoce con claridad las reglas y el movimiento de cada pieza.",
            courseBeginnerFeat2: "Aprende los principios esenciales para iniciar bien tus partidas (aperturas).",
            courseBeginnerFeat3: "Domina las tácticas básicas para ganar material y controlar el juego.",
            courseBeginnerFeat4: "Aprende los finales fundamentales para cerrar bien tus partidas.",
            courseBeginnerFeat5: "Clases en vivo (uno a uno) para construir tus cimientos en el ajedrez, con ritmo y ejemplos adaptados a ti.",
            courseBeginnerFeat6: "Material y ejercicios adaptados por mí (asistido por IA) a tus objetivos y estilo dentro del programa.",
            courseBeginnerFeat7: "Análisis detallado de tus partidas para guiar nuestra revisión y tu progreso.", 
            courseBeginnerPrice: "$15 USD /Hora", 
            courseBeginnerPriceNoteHour: "Flexibilidad total. Avanza a tu propio ritmo. Planes de pago disponibles.", 
            courseEnrollBtn: "Empezar Ahora",

            courseIntermediateTitle: "Curso Intermedio:<br>Estratega",
            courseIntermediateLevelAriaLabel: "Nivel Intermedio",
            courseIntermediateImgAlt: "Caballo de ajedrez sobre un tablero con una explosión de polvo de colores vibrantes detrás, simbolizando la estrategia dinámica del curso intermedio de Chill Chess Club",
            courseIntermediateFeat1: "Explora la estrategia posicional para entender y controlar el juego a un nivel más profundo.",
            courseIntermediateFeat2: "Desarrolla un repertorio de aperturas que se adapte a tu estilo de juego.",
            courseIntermediateFeat3: "Domina combinaciones tácticas más complejas para crear ventajas decisivas.",
            courseIntermediateFeat4: "Aplica con precisión los finales prácticos esenciales para convertir tus ventajas en victorias.",
            courseIntermediateFeat5: "Clases en vivo (uno a uno) para refinar tu juego estratégico y táctico, con un enfoque adaptado a tus áreas de mejora.",
            courseIntermediateFeat6: "Análisis detallado de tus partidas para guiar nuestra revisión y tu progreso.", 
            courseIntermediateFeat7: "Material y ejercicios adaptados por mí (asistido por IA) a tus objetivos y estilo dentro del programa.",
            courseIntermediatePrice: "$20 USD /Hora", 
            courseIntermediatePriceNoteHour: "Flexibilidad total. Avanza a tu propio ritmo. Planes de pago disponibles.", 
            
            coursesCtaText: "¿No estás seguro qué opción es mejor para ti? Agenda una sesión introductoria gratuita y recibe una evaluación personalizada.",
            coursesCtaBtn: "Solicitar Clase de Prueba Gratis",

            methodTitle: "Mi Método: Aprendizaje Inmersivo y Personalizado con un Toque Tecnológico Único",
            methodIntro: "Descubre cómo mi enfoque, que combina una comprensión del ajedrez con una habilidad avanzada para crear contenido digital asistido por IA, transforma tu aprendizaje en una experiencia totalmente adaptada a ti: a tu estilo, tu ritmo y tus intereses.",
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
            resource1Title: "Iniciación al Ajedrez: Movimientos y Esencia del Juego", // ACTUALIZADO
            resource1Desc: "Una guía clara de los elementos fundamentales: el tablero, las piezas y las reglas que dan inicio a la partida.", 
            resource2Title: "Fundamentos Estratégicos del Ajedrez: Guía para el Jugador Reflexivo", // ACTUALIZADO
            resource2Desc: "Descubre los conceptos fundamentales que orientarán tus primeras partidas y te ayudarán a construir una base estratégica sólida y reflexiva.", 
            resource3Title: "Anatomía del Ajedrez: Piezas, Fases y su Valor Estratégico", // MANTENIDO
            resource3Desc: "Una mirada al flujo de la partida, desde la apertura hasta el final, y cómo el valor y las características de cada pieza definen tu estrategia.", 
            resourceLinkText: "Explorar Contenido",

            blogTitle: "Desde Nuestro Blog",
            blogIntro: "Un espacio dedicado a la exploración del ajedrez. Artículos, perspectivas y curiosidades para profundizar tu entendimiento y aprecio por el juego.",
            blogPost1Title: "Ecos del Tablero: Una Crónica del Ajedrez y su Alma Humana",
            blogPost1Excerpt: "Sesenta y cuatro escaques: un antiguo espejo donde estrategia y pasión se cruzan, reflejando la aventura del intelecto humano. Una historia que, como el juego mismo, siempre continúa.",
            blogPost1ImgAlt: "Ilustración de estilo tapiz medieval de dos personas jugando ajedrez, para el artículo sobre la historia del ajedrez en el blog de Chill Chess Club",
            blogPost2Title: "Ajedrez: Redescubre su Vibrante Esencia, Olvida lo que Creías Saber",
            blogPost2Excerpt: "Más allá de la imagen de genios serenos, el ajedrez revela una intensidad oculta, una belleza singular y una relevancia perdurable. Le invitamos a cuestionar viejas ideas y observar de nuevo.",
            blogPost2ImgAlt: "Piezas de ajedrez surfeando sobre una ola de luz vibrante, ilustrando el concepto de 'ajedrez chill' en el blog de Chill Chess Club",
            blogPost3Title: "5 Pasos Hacia el Ajedrez Online: Tu Refugio Digital y Gratuito",
            blogPost3Excerpt: "El ajedrez digital es un océano de posibilidades al alcance de tu mano; para navegarlo, bastan cinco movimientos iniciales, sencillos y gratuitos, que esta guía te desvela.",
            blogPost3ImgAlt: "Laptop mostrando una partida de ajedrez online en un ambiente relajado con vista al mar, para el artículo sobre cómo empezar a jugar online en Chill Chess Club",
            blogReadMore: "Leer Más",

            faqTitle: "Preguntas Frecuentes",
            faqIntro: "Aquí encontrarás respuestas a las consultas más comunes. Si tu duda no está resuelta, no dudes en <a href='#contacto' class='scroll-to'>contactarme directamente</a>.",
            faqQ1: "¿Qué necesito para empezar las clases de ajedrez?",
            faqA1: "Principalmente, una conexión a internet estable y una cuenta gratuita en <a href=\"https://www.chess.com\" target=\"_blank\" rel=\"noopener noreferrer\">Chess.com</a> y/o <a href=\"https://lichess.org\" target=\"_blank\" rel=\"noopener noreferrer\">Lichess.org</a>, según lo que acordemos para nuestras sesiones. Un micrófono es recomendable para una comunicación fluida, y por supuesto, entusiasmo por explorar el mundo del ajedrez.",
            faqQ2: "¿Cómo funcionan los pagos de los cursos?",
            faqA2: "Los pagos se gestionan de forma segura a través de plataformas como PayPal, Payoneer o Binance. Una vez que definamos el curso o paquete de clases que mejor se adapta a ti, te facilitaré los detalles para realizar la transacción. Si necesitas un plan de pagos, podemos conversarlo.",
            faqQ3: "¿Son estos cursos adecuados si nunca antes he jugado ajedrez?",
            faqA3: "Definitivamente. El 'Curso Principiante: El Despegue' está especialmente diseñado para quienes se acercan al ajedrez por primera vez. Te acompañaré desde los movimientos básicos de las piezas hasta tus primeras estrategias, todo en un ambiente de aprendizaje paciente y motivador.",
            faqQ4: "¿En qué se diferencia tu método de enseñanza de otros cursos online?",
            faqA4: "Mi enfoque distintivo radica en la personalización profunda, potenciada con herramientas de IA. Esto me permite adaptar cada lección, material de estudio y ejercicio a tu ritmo individual, estilo de aprendizaje y áreas de interés específicas. Busco crear una experiencia inmersiva que te enseñe ajedrez y, al mismo tiempo, te permita apreciar su riqueza estratégica y conceptual.",
            faqQ5: "¿Cuánto tiempo duran las clases y cuál es la frecuencia recomendada?",
            faqA5: "Las clases individuales estándar tienen una duración de 60 minutos. En cuanto a la frecuencia, sugiero una o dos clases por semana para un progreso constante y una buena asimilación de los conceptos, aunque siempre podemos ajustarlo a tu disponibilidad y objetivos.",
            faqQ6: "¿Se proporciona material de estudio o ejercicios para practicar entre clases?",
            faqA6: "Sí, por supuesto. Como parte del método, recibirás acceso a material de estudio digital bilingüe, ejercicios seleccionados y análisis de partidas (con apoyo de IA) para que puedas consolidar tu aprendizaje y practicar a tu propio ritmo.",
            faqQ7: "¿Qué herramientas o plataformas de IA se utilizan y cómo me benefician?",
            faqA7: "Empleo una combinación de software de análisis de ajedrez reconocido y herramientas de IA para la creación de contenido. Estas tecnologías me ayudan a identificar patrones en tu juego, generar ejercicios adaptados a tus necesidades, y crear materiales de estudio (como resúmenes o guías) más eficientes y personalizados. El objetivo es enriquecer tu aprendizaje, no reemplazar la interacción humana.",

            contactTitle: "Contáctame", 
            contactIntro: "Si deseas comenzar tu exploración del ajedrez o tienes alguna consulta, puedes comunicarte a través del formulario o utilizando mis datos de contacto directo.",
            contactFormTitle: "Formulario de Contacto",
            contactNameLabel: "Nombre:",
            contactEmailLabel: "Email:",
            contactSubjectLabel: "Asunto:",
            contactSubjectOpt1: "Consulta General",
            contactSubjectOpt2: "Solicitar Clase de Prueba Gratuita",
            contactSubjectOpt3: "Info Curso Principiante",
            contactSubjectOpt4: "Info Curso Intermedio",
            contactMessageLabel: "Mensaje:",
            contactSubmitBtn: "Enviar Mensaje",
            contactInfoTitle: "Información de Contacto",
            contactTrialTitle: "Solicita tu Clase Introductoria Gratuita",
            contactTrialDesc: "Una sesión de 30 minutos dedicada a una primera conversación, evaluar tu nivel actual y trazar un plan para alcanzar tus objetivos en el ajedrez.",
            contactTrialBtn: "Solicitar Ahora",

            footerAboutTitle: "Chill Chess Club",
            footerAboutDesc: "Clases de ajedrez para principiantes e intermedios. Un método personalizado y tecnológicamente asistido para transformar tu juego.", 
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
            backToTop: "Volver arriba",
            
            pageTitlePrivacy: "Política de Privacidad - Chill Chess Club",
            metaDescriptionPrivacy: "Conoce cómo Chill Chess Club protege y utiliza tu información personal. Lee nuestra política de privacidad.",
            privacyPolicyTitle: "Política de Privacidad",
            privacyLastUpdated: "Última actualización: 13 de mayo de 2025",
            privacyContactUsDesc: "Si tienes preguntas o comentarios sobre esta Política de Privacidad, por favor contáctanos en: [TU-EMAIL-DE-CONTACTO@ejemplo.com]",

            pageTitleTerms: "Términos de Servicio - Chill Chess Club",
            metaDescriptionTerms: "Lee los Términos y Condiciones de Uso para el sitio web y los servicios de Chill Chess Club.",
            termsServiceTitle: "Términos de Servicio",
            termsLastUpdated: "Última actualización: 13 de mayo de 2025",
            termsContactUsDesc: "Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en: [TU-EMAIL-DE-CONTACTO@ejemplo.com]"
        },
        en: {
            pageTitle: "Personalized Online Chess Classes | Chill Chess Club",
            metaDescription: "Learn chess online with Chill Chess Club's personalized method. AI-assisted classes for beginners and intermediates. Elevate your game!",
            logoAlt: "Chill Chess Club Logo: Silhouettes of chess pieces (rooks, bishop, king, knight) with a stylized setting sun",
            siteName: "Chill Chess Club",
            logoLinkAriaLabel: "Go to the top of the page",
            navAbout: "About Me",
            navCourses: "Courses",
            navMethod: "Method",
            navBenefits: "Benefits",
            navResources: "Resources",
            navBlog: "Blog",
            navFaq: "FAQ",
            navContact: "Contact",

            heroTitle: "Discover chess your way: an immersive and personalized experience",
            heroSubtitle: "Feel how chess flows with you. My method is fine-tuned with AI, allowing me to adapt lessons and materials to your tastes and interests, so your understanding of the game expands naturally.",
            heroCtaTrial: "Try your first class for free",
            heroCtaMethod: "How do I do it?",

            aboutTitle: "About Me",
            aboutQuoteText: "\"Chess is a sea in which a gnat may drink and an elephant may bathe.\"",
            aboutQuoteCite: "- Indian Proverb",
            aboutImageAlt: "Santiago Narvaez, Chill Chess Club's instructor, playing a game of chess on the beach at sunset",
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
            courseBeginnerImgAlt: "Black pawn toppling a white king on a chessboard over water at sunset, representing the learning start in Chill Chess Club's beginner course",
            courseBeginnerFeat1: "Clearly understand the rules and movement of each piece.",
            courseBeginnerFeat2: "Learn the essential principles to start your games well (openings).",
            courseBeginnerFeat3: "Master basic tactics to win material and control the game.",
            courseBeginnerFeat4: "Learn fundamental endgames to close your games well.",
            courseBeginnerFeat5: "Live one-on-one classes to build your chess foundations, with pace and examples adapted to you.",
            courseBeginnerFeat6: "Materials and exercises adapted by me (AI-assisted) to your goals and style within the program.", 
            courseBeginnerFeat7: "Detailed analysis of your games to guide our review and your progress.",
            courseBeginnerPrice: "$15 USD /Hour", 
            courseBeginnerPriceNoteHour: "Total flexibility. Progress at your own pace. Payment plans available.", 
            courseEnrollBtn: "Start Now",

            courseIntermediateTitle: "Intermediate Course:<br>Strategist",
            courseIntermediateLevelAriaLabel: "Intermediate Level",
            courseIntermediateImgAlt: "Chess knight on a board with an explosion of vibrant colored powder behind, symbolizing dynamic strategy in Chill Chess Club's intermediate course",
            courseIntermediateFeat1: "Explore positional strategy to understand and control the game at a deeper level.",
            courseIntermediateFeat2: "Develop an opening repertoire that suits your playing style.",
            courseIntermediateFeat3: "Master more complex tactical combinations to create decisive advantages.",
            courseIntermediateFeat4: "Accurately apply essential practical endgames to convert your advantages into wins.",
            courseIntermediateFeat5: "Live one-on-one classes to refine your strategic and tactical play, with a focus adapted to your areas of improvement.",
            courseIntermediateFeat6: "Detailed analysis of your games to guide our review and your progress.",
            courseIntermediateFeat7: "Materials and exercises adapted by me (AI-assisted) to your goals and style within the program.", 
            courseIntermediatePrice: "$20 USD /Hour", 
            courseIntermediatePriceNoteHour: "Total flexibility. Progress at your own pace. Payment plans available.", 

            coursesCtaText: "Not sure which option is best for you? Schedule a free introductory session and receive a personalized assessment.",
            coursesCtaBtn: "Request Free Trial Class",

            methodTitle: "My Method: Immersive and Personalized Learning with a Unique Technological Touch",
            methodIntro: "Discover how my approach, combining an understanding of chess with advanced skills in AI-assisted digital content creation, transforms your learning into an experience fully tailored to you: your style, your pace, and your interests.",
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
            resource1Title: "Chess Initiation: Movements and Essence of the Game", // UPDATED
            resource1Desc: "A clear guide to the fundamental elements: the board, the pieces, and the rules that start the game.", 
            resource2Title: "Strategic Chess Fundamentals: A Guide for the Thoughtful Player", // UPDATED
            resource2Desc: "Discover the fundamental concepts that will guide your first games and help you build a solid and thoughtful strategic foundation.", 
            resource3Title: "Anatomy of Chess: Pieces, Phases, and Their Strategic Value", // MAINTAINED
            resource3Desc: "A look at the game's flow, from opening to endgame, and how each piece's value and characteristics define your strategy.", 
            resourceLinkText: "Explore Content",

            blogTitle: "From Our Blog",
            blogIntro: "A space dedicated to the exploration of chess. Articles, perspectives, and curiosidades to deepen your understanding and appreciation for the game.",
            blogPost1Title: "Echoes of the Board: A Chronicle of Chess and its Human Soul",
            blogPost1Excerpt: "Sixty-four squares: an ancient mirror where strategy and passion intersect, reflecting the adventure of the human intellect. A story that, like the game itself, always continues.",
            blogPost1ImgAlt: "Medieval tapestry-style illustration of two people playing chess, for the article on chess history on Chill Chess Club's blog",
            blogPost2Title: "Chess: Rediscover its Vibrant Essence, Forget What You Thought You Knew",
            blogPost2Excerpt: "Beyond the image of serene geniuses, chess reveals a hidden intensity, a singular beauty, and an enduring relevance. We invite you to question old ideas and look anew.",
            blogPost2ImgAlt: "Chess pieces surfing on a vibrant wave of light, illustrating the 'chill chess' concept on Chill Chess Club's blog",
            blogPost3Title: "5 Steps Towards Online Chess: Your Digital and Free Refuge",
            blogPost3Excerpt: "Digital chess is an ocean of possibilities at your fingertips; to navigate it, five initial, simple, and free moves are all it takes, which this guide unveils.",
            blogPost3ImgAlt: "Laptop displaying an online chess game in a relaxed setting overlooking the sea, for the article on starting to play online at Chill Chess Club",
            blogReadMore: "Read More",

            faqTitle: "Frequently Asked Questions",
            faqIntro: "Here you'll find answers to the most common inquiries. If your doubt isn't resolved, feel free to <a href='#contacto' class='scroll-to'>contact me directly</a>.",
            faqQ1: "What do I need to start the chess classes?",
            faqA1: "Mainly, a stable internet connection and a free account on <a href=\"https://www.chess.com\" target=\"_blank\" rel=\"noopener noreferrer\">Chess.com</a> and/or <a href=\"https://lichess.org\" target=\"_blank\" rel=\"noopener noreferrer\">Lichess.org</a>, as we agree for our sessions. A microphone is recommended for smooth communication, and of course, enthusiasm to explore the world of chess!",
            faqQ2: "How do course payments work?",
            faqA2: "Payments are securely managed through platforms like PayPal, Payoneer, or Binance. Once we define the course or class package that best suits you, I will provide the details to make the transaction. If you need a payment plan, we can discuss it.",
            faqQ3: "Are these courses suitable if I've never played chess before?",
            faqA3: "Definitely! The 'Beginner Course: Liftoff' is specially designed for those approaching chess for the first time. I will accompany you from the basic movements of the pieces to your first strategies, all in a patient and motivating learning environment.",
            faqQ4: "How does your teaching method differ from other online courses?",
            faqA4: "My distinctive approach lies in deep personalization, enhanced with AI tools. This allows me to adapt each lesson, study material, and exercise to your individual pace, learning style, and specific areas of interest. I aim to create an immersive experience that not only teaches you chess but also allows you to appreciate its strategic and conceptual richness.",
            faqQ5: "How long are the classes and what is the recommended frequency?",
            faqA5: "Standard individual classes are 60 minutes long. Regarding frequency, I suggest one or two classes per week for consistent progress and good assimilation of concepts, although we can always adjust it to your availability and goals.",
            faqQ6: "Is study material or exercises provided to practice between classes?",
            faqA6: "Yes, of course. As part of the method, you will receive access to bilingual digital study material, selected exercises, and game analysis (with AI support) so you can consolidate your learning and practice at your own pace.",
            faqQ7: "What AI tools or platforms are used and how do they benefit me?",
            faqA7: "I use a combination of recognized chess analysis software and AI tools for content creation. These technologies help me identify patterns in your game, generate exercises tailored to your needs, and create more efficient and personalized study materials (such as summaries or guides). The goal is to enrich your learning, not replace human interaction.",

            contactTitle: "Contact Me", 
            contactIntro: "If you wish to begin your chess exploration or have any questions, you can get in touch using the form or by using my direct contact details.",
            contactFormTitle: "Contact Form",
            contactNameLabel: "Name:",
            contactEmailLabel: "Email:",
            contactSubjectLabel: "Subject:",
            contactSubjectOpt1: "General Inquiry",
            contactSubjectOpt2: "Request Free Trial Class",
            contactSubjectOpt3: "Info Beginner Course",
            contactSubjectOpt4: "Info Intermediate Course",
            contactMessageLabel: "Message:",
            contactSubmitBtn: "Send Message",
            contactInfoTitle: "Contact Information",
            contactTrialTitle: "Request Your Free Introductory Class",
            contactTrialDesc: "A 30-minute session dedicated to an initial conversation, assessing your current level, and outlining a plan to achieve your chess goals.",
            contactTrialBtn: "Request Now",

            footerAboutTitle: "Chill Chess Club",
            footerAboutDesc: "Chess classes for beginners and intermediate players. A personalized and technologically assisted method to transform your game.",
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
            backToTop: "Back to top",

            pageTitlePrivacy: "Privacy Policy - Chill Chess Club",
            metaDescriptionPrivacy: "Learn how Chill Chess Club protects and uses your personal information. Read our privacy policy.",
            privacyPolicyTitle: "Privacy Policy",
            privacyLastUpdated: "Last Updated: May 13, 2025",
            privacyContactUsDesc: "If you have questions or comments about this Privacy Policy, please contact us at: [YOUR-CONTACT-EMAIL@example.com]",

            pageTitleTerms: "Terms of Service - Chill Chess Club",
            metaDescriptionTerms: "Read the Terms and Conditions of Use for the Chill Chess Club website and services.",
            termsServiceTitle: "Terms of Service",
            termsLastUpdated: "Last Updated: May 13, 2025",
            termsContactUsDesc: "If you have questions or comments about these Terms, please contact us at: [YOUR-CONTACT-EMAIL@example.com]"
        }
    };


    // --- Selectors ---
    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const backToTopButton = document.getElementById('back-to-top-btn');
    const bodyElement = document.body;
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const yearSpan = document.getElementById('current-year');
    const particlesElement = document.getElementById('particles-js'); 

    // --- Language Functions ---
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
                    
                    const keysForInnerHTML = [
                        'courseBeginnerTitle', 'courseIntermediateTitle',
                        'coursesCtaText', 'benefitsIntro',
                        'benefitsCtaText', 'benefitsCtaMethod', 'methodKeyBenefitsDesc',
                        'aboutQuoteText', 'faqIntro', 'faqA1', 'faqA2', 
                        'resource1Desc', 'resource2Desc', 'resource3Desc',
                        'privacyDataPersonal', 'privacyDataDerivative', 'privacyDisclosureLaw',
                        'privacyDisclosureProviders', 'termsAcceptanceDesc', 'termsIntellectualPropertyDesc'
                    ];

                    if (attribute) {
                        el.setAttribute(attribute, translation);
                    } else if (keysForInnerHTML.includes(key)) {
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
                } else if (key === 'resourcesCta' || key === 'contactSubjectOpt5') {
                    // Claves eliminadas del HTML, no hacer nada
                }
            });

            document.documentElement.lang = lang;
            langButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
                btn.setAttribute('aria-current', btn.dataset.lang === lang ? 'page' : 'false');
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
    
    const initialUpdateLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Initial language ${lang} not found.`);
            return;
        }
        translatableElements.forEach(el => {
             const keyAttr = el.dataset.langKey; 
             const [key, attribute] = keyAttr.split('|');
             if (translations[lang][key]) {
                 let translation = translations[lang][key];
                 if (key === 'footerCopyright') { 
                     translation = translation.replace('[YEAR]', new Date().getFullYear());
                 }

                 const keysForInnerHTML = [
                    'courseBeginnerTitle', 'courseIntermediateTitle',
                    'coursesCtaText', 'benefitsIntro',
                    'benefitsCtaText', 'benefitsCtaMethod', 'methodKeyBenefitsDesc',
                    'aboutQuoteText', 'faqIntro', 'faqA1', 'faqA2',
                    'resource1Desc', 'resource2Desc', 'resource3Desc',
                    'privacyDataPersonal', 'privacyDataDerivative', 'privacyDisclosureLaw',
                    'privacyDisclosureProviders', 'termsAcceptanceDesc', 'termsIntellectualPropertyDesc'
                ];

                 if (attribute) {
                     el.setAttribute(attribute, translation);
                 } else if (keysForInnerHTML.includes(key)) {
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
             } else if (key === 'resourcesCta' || key === 'contactSubjectOpt5') {
                // Claves eliminadas
             }
        });
        document.documentElement.lang = lang;
        langButtons.forEach(btn => {
             btn.classList.toggle('active', btn.dataset.lang === lang);
             btn.setAttribute('aria-current', btn.dataset.lang === lang ? 'page' : 'false');
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

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (bodyElement.classList.contains('fade-out') || e.target.classList.contains('active')) {
                return;
            }
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // --- AOS Initialization ---
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }

    // --- Particles.js Initialization ---
    if (particlesElement) {
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

    // --- Mobile Menu Toggle ---
    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinksContainer.classList.toggle('active');
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

        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                const linkHref = link.getAttribute('href');
                if (linkHref.startsWith('#') || linkHref.includes('.html')) {
                    if (navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        const icon = menuToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });

        document.addEventListener('click', (event) => {
            if (navLinksContainer.classList.contains('active') &&
                !navLinksContainer.contains(event.target) &&
                !menuToggle.contains(event.target)) {
                navLinksContainer.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ========================================================================
    // START: OPCIÓN 5 - SOLO CLIC + HASH EN URL 
    // (Scrollspy dinámico ELIMINADO)
    // ========================================================================
    const navItemsForClick = Array.from(document.querySelectorAll('.main-nav .nav-links a[href^="#"]'));

    function setActiveOnClick(clickedLink) {
        navItemsForClick.forEach(link => {
            link.classList.remove('nav-active'); 
        });
        if (clickedLink) {
            clickedLink.classList.add('nav-active');
        }
    }

    navItemsForClick.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetIdHref = this.getAttribute('href');
            if (!targetIdHref || !targetIdHref.startsWith('#')) {
                return; 
            }

            e.preventDefault(); 
            const targetId = targetIdHref.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                setActiveOnClick(this); 

                requestAnimationFrame(() => {
                    targetElement.offsetHeight; 
                    setTimeout(() => {
                        const targetElementRect = targetElement.getBoundingClientRect();
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const targetPosition = targetElementRect.top + scrollTop; 
                        
                        window.scrollTo({
                            top: Math.max(0, targetPosition), 
                            behavior: 'smooth'
                        });

                        if (history.pushState && window.location.hash !== targetIdHref) {
                             history.pushState(null, null, targetIdHref);
                        } else if (window.location.hash !== targetIdHref) {
                             window.location.hash = targetIdHref;
                        }

                    }, 100); 
                });
                
                if (targetId === 'contacto') {
                    const contactFormOnPage = document.getElementById('contactForm');
                    if (contactFormOnPage) {
                        const subjectValue = this.getAttribute('data-subject');
                        const subjectSelect = document.getElementById('subject');
                        if (subjectValue && subjectSelect) {
                            subjectSelect.value = subjectValue;
                        }
                    }
                }
            }
        });
    });
    
    function activateLinkFromHash() {
        const initialHash = window.location.hash;
        if (initialHash) {
            const linkToActivate = navItemsForClick.find(link => link.getAttribute('href') === initialHash);
            if (linkToActivate) {
                setActiveOnClick(linkToActivate);
            } else {
                 setActiveOnClick(null); 
            }
        } else {
             setActiveOnClick(null);
        }
    }
    
    setTimeout(activateLinkFromHash, 200);
    window.addEventListener('hashchange', activateLinkFromHash);
    // ========================================================================
    // END: OPCIÓN 5
    // ========================================================================

    // --- Contact Form Submission ---
    if (contactForm && formStatus) { 
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const currentLang = document.documentElement.lang || 'es'; 
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            submitButton.textContent = translations[currentLang]?.submitting || 'Enviando...';
            submitButton.disabled = true;

            formStatus.textContent = ''; 
            formStatus.className = 'status'; 
            formStatus.style.display = 'none'; 

            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData, 
                headers: {
                    'Accept': 'application/json' 
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); 
                }
                return response.json().then(errorData => {
                    throw new Error(errorData.error || translations[currentLang]?.formError || 'Hubo un error.');
                });
            })
            .then(data => { 
                formStatus.textContent = translations[currentLang]?.formSuccess || '¡Mensaje enviado con éxito! Te contactaremos pronto.';
                formStatus.className = 'status success';
                formStatus.style.display = 'block';
                contactForm.reset(); 
            })
            .catch(error => {
                formStatus.textContent = error.message || translations[currentLang]?.formError || 'Hubo un error al enviar. Intenta de nuevo.';
                formStatus.className = 'status error';
                formStatus.style.display = 'block';
            })
            .finally(() => {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                setTimeout(() => {
                   // formStatus.style.display = 'none'; 
                   // formStatus.className = 'status'; 
                }, 7000); 
            });
        });
    }

    // --- Back to Top Button ---
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
    
    // --- Update current year ---
    if (yearSpan) {
         yearSpan.textContent = new Date().getFullYear();
     }

}); // End DOMContentLoaded
