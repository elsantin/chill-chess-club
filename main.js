// main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Translation ---
    const translations = {
        es: {
            pageTitle: "Chill Chess Club | Clases de Ajedrez Online",
            metaDescription: "Aprende ajedrez con un método relajado y personalizado. Clases para principiantes e intermedios adaptadas con IA para maximizar tu progreso.",
            logoAlt: "Chill Chess Club", // Asumiendo que tienes un data-lang-key para el alt del logo si es una img
            siteName: "Chill Chess Club", // Para el texto junto al logo
            logoLinkAriaLabel: "Ir al inicio de la página",
            navHome: "Inicio",
            navAbout: "Sobre Mí",
            navCourses: "Cursos",
            navMethod: "Método",
            navResources: "Recursos",
            navContact: "Contacto",
            heroTitle: "Domina el ajedrez con un enfoque inmersivo y personalizado",
            heroSubtitle: "Método exclusivo diseñado para ayudarte a progresar desde principiante hasta nivel intermedio con instrucción personalizada y asistida por IA.",
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
            coursesIntro: "Programas diseñados para satisfacer tus necesidades específicas, sin importar tu nivel de experiencia. Todos los cursos incluyen material didáctico multilingüe, acceso a herramientas de IA personalizadas y soporte continuo.",
            courseBeginnerTitle: "Curso Principiante",
            courseBeginnerLevelAriaLabel: "Nivel Principiante",
            courseBeginnerImgAlt: "Piezas de ajedrez blancas para principiantes",
            courseBeginnerFeat1: "Fundamentos del juego y movimientos",
            courseBeginnerFeat2: "Principios básicos de apertura",
            courseBeginnerFeat3: "Tácticas elementales",
            courseBeginnerFeat4: "Finales básicos",
            courseBeginnerFeat5: "8 clases en vivo personalizadas",
            courseBeginnerFeat6: "Material didáctico multilingüe",
            courseBeginnerFeat7: "Acceso a IA de entrenamiento",
            courseBeginnerPrice: "$15 USD",
            coursePriceNoteHour: "/ hora (clases en vivo)",
            courseEnrollBtn: "Inscríbete",
            courseIntermediateTitle: "Curso Intermedio",
            courseIntermediateLevelAriaLabel: "Nivel Intermedio",
            courseIntermediateImgAlt: "Estrategia de ajedrez en tablero",
            courseIntermediateFeat1: "Estrategia posicional avanzada",
            courseIntermediateFeat2: "Repertorio de aperturas personalizado",
            courseIntermediateFeat3: "Combinaciones tácticas intermedias",
            courseIntermediateFeat4: "Finales prácticos esenciales",
            courseIntermediateFeat5: "16 clases en vivo personalizadas",
            courseIntermediateFeat6: "Análisis de partidas con IA",
            courseIntermediateFeat7: "Plan de estudio individualizado",
            courseIntermediatePrice: "$20 USD",
            courseCustomTitle: "Clases Personalizadas",
            courseCustomLevelAriaLabel: "Nivel Personalizado",
            courseCustomImgAlt: "Instructor explicando jugada de ajedrez",
            courseCustomFeat1: "Programa totalmente personalizado",
            courseCustomFeat2: "Enfoque en áreas específicas",
            courseCustomFeat3: "Horarios flexibles",
            courseCustomFeat4: "Sesiones individuales dedicadas",
            courseCustomFeat5: "Análisis detallado de tu juego",
            courseCustomFeat6: "Material exclusivo adaptado",
            courseCustomFeat7: "Soporte constante entre sesiones",
            courseCustomPrice: "$30 USD",
            courseConsultBtn: "Consultar",
            coursesCtaText: "¿No estás seguro qué opción es mejor para ti? Agenda una sesión introductoria gratuita y recibe una evaluación personalizada.",
            coursesCtaBtn: "Solicitar clase de prueba gratis",
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
            resourcesTitle: "Recursos Gratuitos",
            resourcesIntro: "Empieza tu viaje en el ajedrez o refresca tus conocimientos con estos recursos esenciales que he preparado para ti.",
            resource1Title: "Reglas Básicas",
            resource1Desc: "Una guía clara y concisa sobre cómo se mueven las piezas y las reglas fundamentales del juego.",
            resourceLinkText: "Leer más",
            resource2Title: "5 Consejos Tácticos Iniciales",
            resource2Desc: "Aprende patrones tácticos clave que te darán ventaja en tus primeras partidas.",
            resource3Title: "Errores Comunes a Evitar",
            resource3Desc: "Identifica y corrige los errores típicos que cometen los principiantes para mejorar rápidamente.",
            resourcesCta: "¿Quieres profundizar más? <a href=\"#cursos\" class=\"scroll-to\">Inscríbete en un curso</a> para análisis y consejos avanzados.",
            
            // --- NUEVAS TRADUCCIONES PARA EL BLOG ---
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
            // --- FIN NUEVAS TRADUCCIONES PARA EL BLOG ---
            
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
            metaDescription: "Learn chess with a relaxed and personalized method. Classes for beginners and intermediate players adapted with AI to maximize your progress.",
            logoAlt: "Chill Chess Club", // Assuming you have a data-lang-key for the logo's alt if it's an img
            siteName: "Chill Chess Club", // For the text next to the logo
            logoLinkAriaLabel: "Go to the top of the page",
            navHome: "Home",
            navAbout: "About Me",
            navCourses: "Courses",
            navMethod: "Method",
            navResources: "Resources",
            navContact: "Contact",
            heroTitle: "Master chess with an immersive and personalized approach",
            heroSubtitle: "Exclusive method designed to help you progress from beginner to intermediate level with personalized, AI-assisted instruction.",
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
            coursesIntro: "Programs designed to meet your specific needs, regardless of your experience level. All courses include multilingual learning materials, access to personalized AI tools, and ongoing support.",
            courseBeginnerTitle: "Beginner Course",
            courseBeginnerLevelAriaLabel: "Beginner Level",
            courseBeginnerImgAlt: "White chess pieces for beginners",
            courseBeginnerFeat1: "Game fundamentals and moves",
            courseBeginnerFeat2: "Basic opening principles",
            courseBeginnerFeat3: "Elementary tactics",
            courseBeginnerFeat4: "Basic endgames",
            courseBeginnerFeat5: "8 personalized live classes",
            courseBeginnerFeat6: "Multilingual learning material",
            courseBeginnerFeat7: "Access to training AI",
            courseBeginnerPrice: "$15 USD",
            coursePriceNoteHour: "/ hour (live classes)",
            courseEnrollBtn: "Enroll Now",
            courseIntermediateTitle: "Intermediate Course",
            courseIntermediateLevelAriaLabel: "Intermediate Level",
            courseIntermediateImgAlt: "Chess strategy on a board",
            courseIntermediateFeat1: "Advanced positional strategy",
            courseIntermediateFeat2: "Personalized opening repertoire",
            courseIntermediateFeat3: "Intermediate tactical combinations",
            courseIntermediateFeat4: "Essential practical endgames",
            courseIntermediateFeat5: "16 personalized live classes",
            courseIntermediateFeat6: "Game analysis with AI",
            courseIntermediateFeat7: "Individualized study plan",
            courseIntermediatePrice: "$20 USD",
            courseCustomTitle: "Personalized Classes",
            courseCustomLevelAriaLabel: "Custom Level",
            courseCustomImgAlt: "Instructor explaining a chess move",
            courseCustomFeat1: "Fully customized program",
            courseCustomFeat2: "Focus on specific areas",
            courseCustomFeat3: "Flexible scheduling",
            courseCustomFeat4: "Dedicated individual sessions",
            courseCustomFeat5: "Detailed analysis of your game",
            courseCustomFeat6: "Exclusive adapted material",
            courseCustomFeat7: "Constant support between sessions",
            courseCustomPrice: "$30 USD",
            courseConsultBtn: "Inquire",
            coursesCtaText: "Not sure which option is best for you? Schedule a free introductory session and receive a personalized assessment.",
            coursesCtaBtn: "Request Free Trial Class",
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
            resourcesTitle: "Free Resources",
            resourcesIntro: "Start your chess journey or refresh your knowledge with these essential resources I have prepared for you.",
            resource1Title: "Basic Rules",
            resource1Desc: "A clear and concise guide on how the pieces move and the fundamental rules of the game.",
            resourceLinkText: "Read more",
            resource2Title: "5 Initial Tactical Tips",
            resource2Desc: "Learn key tactical patterns that will give you an edge in your first games.",
            resource3Title: "Common Mistakes to Avoid",
            resource3Desc: "Identify and correct typical mistakes beginners make to improve quickly.",
            resourcesCta: "Want to dive deeper? <a href=\"#cursos\" class=\"scroll-to\">Enroll in a course</a> for advanced analysis and tips.",

            // --- NEW TRANSLATIONS FOR THE BLOG ---
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
            // --- END NEW TRANSLATIONS FOR THE BLOG ---

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

    // --- Language Transition Function ---
    const setLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }
        // Get transition duration from CSS custom property or default to 0.25s
        const transitionDuration = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--lang-transition-speed') || '0.25') * 1000);

        bodyElement.classList.add('fade-out'); // Start fade-out
        langButtons.forEach(btn => btn.disabled = true); // Disable buttons during transition

        setTimeout(() => {
            translatableElements.forEach(el => {
                const keyAttr = el.dataset.langKey;
                const [key, attribute] = keyAttr.split('|'); // Allows specifying attribute, e.g., "metaDescription|content"

                if (translations[lang][key]) {
                    let translation = translations[lang][key];

                    // Special handling for copyright year
                    if (key === 'footerCopyright') {
                        translation = translation.replace('[YEAR]', new Date().getFullYear());
                    }

                    if (attribute) {
                        el.setAttribute(attribute, translation);
                        // Ensure meta description is updated if that's the target
                        if (key === 'metaDescription' && attribute === 'content') {
                            document.querySelector('meta[name="description"]').setAttribute('content', translation);
                        }
                    } else if (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button') || el.tagName === 'BUTTON') {
                        if (el.id === 'back-to-top-btn') { // Special handling for back-to-top button title/aria-label
                             el.setAttribute('aria-label', translations[lang]['backToTop'] || 'Back to top');
                             el.setAttribute('title', translations[lang]['backToTop'] || 'Back to top');
                        } else {
                            el.value = translation; // For input type="submit"
                            el.innerHTML = translation; // For button elements
                        }
                    } else if (el.tagName === 'TITLE') {
                        document.title = translation;
                    } else if (key === 'resourcesCta') { // Use innerHTML for elements that might contain HTML (like the link in resourcesCta)
                        el.innerHTML = translation;
                    }
                    else {
                        el.textContent = translation; // Default to textContent for most elements
                    }
                }
            });

            document.documentElement.lang = lang; // Update HTML lang attribute

            // Update active state for language buttons
            langButtons.forEach(btn => {
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                    btn.setAttribute('aria-current', 'page');
                } else {
                    btn.classList.remove('active');
                    btn.removeAttribute('aria-current');
                }
            });

            // Save preference to localStorage
            try {
                localStorage.setItem('preferredLanguage', lang);
            } catch (e) {
                console.warn("Could not save language preference to localStorage.");
            }

            bodyElement.classList.remove('fade-out'); // End fade-out
            // Re-enable buttons shortly after fade-in starts to prevent premature clicks
            setTimeout(() => {
                langButtons.forEach(btn => btn.disabled = false);
            }, 50); // Small delay

        }, transitionDuration); // Wait for fade-out to complete
    };

    // Language Button Event Listeners
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Prevent changing language if already fading or if the button is already active
            if (bodyElement.classList.contains('fade-out') || e.target.classList.contains('active')) {
                return;
            }
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // Initial Language Setting (No Transition on first load)
    const initialUpdateLanguage = (lang) => {
        if (!translations[lang]) return; // Safety check

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
                 } else if (key === 'resourcesCta') {
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
            // Fallback to browser language if no preference is saved or saved is invalid
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
        duration: 800, // Animation duration
        once: true,     // Whether animation should happen only once - while scrolling down
        offset: 50,     // Offset (in px) from the original trigger point
    });

    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80, // Number of particles
                    "density": {
                        "enable": true,
                        "value_area": 800 // Area where particles will be distributed
                    }
                },
                "color": {
                    "value": ["#EC4899", "#F97316", "#8B5CF6", "#d4af37"] // Array of theme colors
                },
                "shape": {
                    "type": "circle", // Shape of particles (can be "edge", "triangle", "polygon", "star", "image")
                    "stroke": {
                        "width": 0, // No border for particles
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5 // Number of sides if shape is polygon
                    },
                },
                "opacity": {
                    "value": 0.6, // Base opacity of particles
                    "random": true, // Random opacity for particles
                    "anim": {
                        "enable": true, // Enable opacity animation
                        "speed": 1, // Speed of opacity animation
                        "opacity_min": 0.1, // Minimum opacity value
                        "sync": false // Synchronize opacity animation for all particles
                    }
                },
                "size": {
                    "value": 3, // Base size of particles
                    "random": true, // Random size for particles
                    "anim": {
                        "enable": false, // Disable size animation
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true, // Enable lines between particles
                    "distance": 150, // Maximum distance to draw a line
                    "color": "#a1a1aa", // Color of the lines (theme's text-medium)
                    "opacity": 0.4, // Opacity of the lines
                    "width": 1 // Width of the lines
                },
                "move": {
                    "enable": true, // Enable particle movement
                    "speed": 3, // Speed of particle movement
                    "direction": "none", // Direction of movement ("none", "top", "top-right", "right", etc.)
                    "random": true, // Random movement direction
                    "straight": false, // Particles move in straight lines or not
                    "out_mode": "out", // Behavior when particles move out of the canvas ("out", "bounce")
                    "bounce": false, // Bounce off canvas edges
                    "attract": {
                        "enable": false, // Attract particles to each other
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas", // Detect interactivity on "canvas" or "window"
                "events": {
                    "onhover": {
                        "enable": true, // Enable interactivity on hover
                        "mode": "grab" // Mode on hover ("grab", "bubble", "repulse")
                    },
                    "onclick": {
                        "enable": true, // Enable interactivity on click
                        "mode": "push" // Mode on click ("push", "remove", "bubble", "repulse")
                    },
                    "resize": true // Resize particles animation on window resize
                },
                "modes": {
                    "grab": {
                        "distance": 140, // Distance for grab mode
                        "line_linked": {
                            "opacity": 1 // Opacity of lines in grab mode
                        }
                    },
                    "bubble": { // Makes particles larger on hover/click
                        "distance": 400, // Distance for bubble mode
                        "size": 40, // Size of bubbles
                        "duration": 2, // Duration of bubble animation
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": { // Pushes particles away on hover/click
                        "distance": 200, // Distance for repulse mode
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4 // Number of particles to push on click
                    },
                    "remove": {
                        "particles_nb": 2 // Number of particles to remove on click
                    }
                }
            },
            "retina_detect": true // Enable retina display support
        });
    }


    // Mobile Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive); // Update ARIA attribute for accessibility
            const icon = menuToggle.querySelector('i');
            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                navLinks.querySelector('a').focus(); // Focus first link in mobile menu when opened
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked
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

         // Close mobile menu when clicking outside of it
         document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active') &&
                !navLinks.contains(event.target) && // Click was outside navLinks
                !menuToggle.contains(event.target)) { // Click was not on the toggle button itself
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
            if (href && href.startsWith('#')) { // Check if it's an internal link
                e.preventDefault(); // Prevent default anchor click behavior
                const targetId = href;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = 80; // Adjust this value based on your fixed header's height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth' // Smooth scroll animation
                    });

                    // If link is to contact, pre-fill subject and focus first input
                    if (targetId === '#contacto') {
                        const subjectValue = this.getAttribute('data-subject'); // e.g., from "Solicitar clase de prueba" button
                        const subjectSelect = document.getElementById('subject');
                        const firstInput = document.querySelector('#contactForm #name'); // First focusable input

                        if (subjectValue && subjectSelect) {
                            subjectSelect.value = subjectValue;
                        }
                        if(firstInput) {
                            // Delay focus slightly to ensure section is visible after scroll
                            setTimeout(() => firstInput.focus(), 300);
                        }
                    }
                }
            }
        });
    });

    // Contact Form Submission Simulation
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status'); // Element to display success/error messages

     if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission for now

            const currentLang = document.documentElement.lang || 'es'; // Get current language for messages

            // Display "Submitting..." message
            formStatus.textContent = translations[currentLang]?.submitting || 'Enviando...';
            formStatus.className = 'status'; // Reset classes
            formStatus.style.display = 'block'; // Make status visible

            // Simulate network delay
            setTimeout(() => {
                // Simulate success or failure (e.g., 80% success rate)
                const isSuccess = Math.random() > 0.2;

                if (isSuccess) {
                    formStatus.textContent = translations[currentLang]?.formSuccess || '¡Mensaje enviado con éxito! Te contactaremos pronto.';
                    formStatus.classList.add('success');
                    contactForm.reset(); // Clear the form on success
                } else {
                    formStatus.textContent = translations[currentLang]?.formError || 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o usa el email de contacto.';
                    formStatus.classList.add('error');
                }
                 // Hide the status message after a few seconds
                 setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.className = 'status'; // Reset classes
                 }, 5000); // Hide after 5 seconds
            }, 1500); // Simulate 1.5 seconds delay
        });
    }

    // Back to Top Button Functionality
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show button after scrolling down 300px
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
        });
    }

}); // End DOMContentLoaded
