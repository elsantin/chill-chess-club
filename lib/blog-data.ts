export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category?: string;
  readTime?: string;
}

// Placeholder data - Replace with your real content
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "echoes-from-the-board",
    title: "Ecos del Tablero: Una Crónica del Ajedrez y su Alma Humana",
    excerpt:
      "Sesenta y cuatro escaques: un antiguo espejo donde estrategia y pasión se cruzan, reflejando la aventura del intelecto humano. Una historia que, como el juego mismo, siempre continúa.",
    content: `
<p>Existen juegos diseñados para el olvido momentáneo, distracciones efímeras. El ajedrez se sitúa en otra categoría.</p>

<p>Una creación de asombrosa tenacidad: un tablero, unas piezas talladas y un conjunto de reglas que ha alimentado una obsesión intelectual –y muy humana– durante más de mil años.</p>

<p>Preguntarse cómo esta creación, de aparente simpleza, ha logrado cautivar la imaginación de civilizaciones enteras, susurrando secretos a reyes y plebeyos, a sabios y a quienes coquetean con la locura, es abrir una puerta a un misterio con muchas respuestas. Se parece más bien a una posición compleja y llena de matices, cuyas verdades se muestran capa por capa, a menudo con lógica austera, y a veces, con una paradoja que provoca una sonrisa cómplice.</p>

<h2>Orígenes Ancestrales: Del Chaturanga al Refinamiento Persa</h2>

<p>El rastro más firme de sus orígenes nos lleva a la India, alrededor del siglo VI. En aquel crisol de culturas, nació el chaturanga, concebido como un reflejo simbólico de la guerra: infantería, caballería, elefantes (precursores de los actuales alfiles, con un movimiento más bien torpón para lo que se espera de un paquidermo en batalla) y carros de combate, todos bajo el mando de un Rajá.</p>

<p>Era, en esencia, un espejo de la sociedad y sus conflictos, un pequeño mundo donde la estrategia comenzaba a separarse del puro azar –aunque algunos estudiosos, con esa picardía propia del historiador que disfruta desenterrando detalles inconvenientes, sugieren la influencia de los dados en sus inicios, quizás para que los dioses también tuvieran algo que decir en el resultado.</p>

<p>Es inevitable imaginar a aquellos primeros estrategas, con el ceño fruncido, viendo en cada movimiento no solo una táctica, sino el eco de sus profundas tensiones vitales, una temprana manifestación de la voluntad humana en su eterna lucha por encontrar un orden, aunque frágil, ante la inmensa incertidumbre.</p>

<p>Desde la India, el juego, como una idea con vida propia, emprendió una silenciosa pero imparable conquista. Se deslizó por las rutas de caravanas, se murmuró en los bazares, y finalmente echó raíces en Persia, donde fue abrazado con el fervor que el alma persa guarda para la poesía y la belleza. Allí fue rebautizado como Shatranj.</p>

<p>Fue en este nuevo hogar donde el elemento del azar fue desapareciendo, como sombra ante la luz, permitiendo que habilidad, previsión y cálculo se volvieran los verdaderos jueces de la partida. El "Shah" (Rey) y su inevitable final, el "Shah Mat" (el rey ha caído, o más llanamente, está frito), se convirtieron en los ejes de este drama intelectual.</p>

<p>En el rico crisol de la Persia sasánida y, luego, bajo el manto de la civilización islámica, el Shatranj se elevó al estatus de disciplina mental, casi un arte austero. Figuras como As-Suli, cuyo nombre se volvió sinónimo de maestría notable, surgieron como ejemplos de una dedicación que bordeaba la santa (o no tan santa) obsesión. ¿Qué llama interior consumía a estos hombres? ¿Una gran sed de orden lógico, un impulso por dominar el caos de tantas variantes, o quizás una abstracción tan profunda que creaba una realidad paralela, más viva e intensa que la vida diaria? Uno casi puede imaginarlos, en patios iluminados por la luna, enfrascados durante horas en el análisis de una sola posición, sus vidas simbólicamente suspendidas en el frágil equilibrio de unas pocas piezas, una intensidad que roza lo sublime y, no nos engañemos, también lo sutilmente perturbador.</p>

<h2>Expansión a Occidente y la Revolución de la Reina</h2>

<p>La ola de la expansión árabe fue el vehículo que transportó el Shatranj a Europa. A través de la Península Ibérica y Sicilia, el juego se diseminó hacia el norte con la fuerza del polen en primavera. Incluso los rudos vikingos, esos navegantes de mirada firme y espíritu audaz, parecen haber sucumbido a su atractivo durante sus largas travesías, quizás como un ejercicio para mantener la mente afilada entre un saqueo y el siguiente, o simplemente para no aburrirse hasta las lágrimas.</p>

<p>En la Europa medieval, el ajedrez experimentó un cambio importante, adaptándose como un ser vivo a un nuevo contexto cultural. El cambio más radical, que sin duda le imprimió una velocidad sorprendente, fue la espectacular potenciación de la Reina.</p>

<p>El antiguo Firzan, un consejero de movimientos modestos y diagonales de un solo paso –más bien un burócrata cauto que un verdadero poder en la sombra–, evolucionó (algunos cronistas insinúan que con una prisa casi indecorosa) hasta convertirse en la pieza más dinámica y letal del tablero. Esta "dama enfurecida", como se la conoció con asombro y quizás un sutil temor, con algo de misoginia, revolucionó el juego, añadiendo una complejidad táctica que lo catapultó a una nueva era. Resulta una ironía digna de una comedia que, en sociedades tan rígidamente patriarcales, la figura femenina en el tablero adquiriese tal poder, un hecho que invita a la reflexión sobre las tensiones simbólicas de una cultura, o quizás, más simplemente, sobre la impaciencia de alguna reina medieval que, harta de partidas interminables, exigió una pieza que acabara con el asunto de una vez.</p>

<h2>El Intelecto en Juego: Renacimiento, Ilustración y Romanticismo</h2>

<p>Con la llegada del Renacimiento y el posterior Siglo de las Luces, el ajedrez se consolidó como un ejercicio para el intelecto. Vieron la luz los primeros tratados, serios y profundos intentos de sistematizar su estudio, de revelar sus misterios y codificar sus principios (tarea difícil, pues el ajedrez, con su falsa modestia, guarda bien sus secretos). Figuras como el clérigo español Ruy López de Segura no solo jugaban; investigaban, buscaban patrones con el cuidado de un naturalista. La búsqueda de la belleza en la combinación se unía a la de una verdad lógica, un anhelo humano por encontrar un orden claro tras el velo de su aparente complejidad infinita.</p>

<p>El siglo XIX trajo la era Romántica, un tiempo de juego audaz, de gambitos ofrecidos con desdén teatral y combinaciones que caían sobre el tablero como sentencias del destino (o, para el perdedor, como una broma cósmica de muy mal gusto). Nombres como Anderssen y, sobre todo, Paul Morphy, son símbolos de este espíritu audaz. Morphy, joven prodigio de Nueva Orleans, deslumbró a Europa con una facilidad que resultaba casi insultante. Sus partidas, aún hoy, irradian claridad y fuerza. No obstante, como en las historias con un tinte de romanticismo trágico, su estrella brilló con intensidad deslumbrante pero breve. Su temprana retirada y posterior declive personal son un recordatorio sombrío de las presiones del talento excepcional y la soledad que a menudo lo envolvía; una tensión interna con un eco algo descorazonador.</p>

<h2>Hacia la Comprensión Moderna: Ciencia Posicional y Duelos de Titanes</h2>

<p>Tras el arrebato romántico, el estilo de juego comenzó a cambiar hacia una concepción más científica, o al menos, un intento más metódico de entender sus infinitas posibilidades. Wilhelm Steinitz, a quien la historia (siempre necesitada de poner etiquetas) reconoce como el primer campeón mundial oficial, fue el gran impulsor de esta nueva era, articulando los principios de la estrategia posicional.</p>

<p>La acumulación paciente de pequenas ventajas, la solidez defensiva (a veces hasta el aburrimiento del espectador), y la lógica estratégica a largo plazo se convirtieron en los nuevos principios del ajedrez. Una serie de campeones, desde Emanuel Lasker, con su enfoque psicológico y práctico, hasta José Raúl Capablanca, talento natural casi insultante, pasando por Alexander Alekhine, de forte voluntad y genialidad a veces turbulenta, y la formidable escuela soviética liderada por Mikhail Botvinnik (el "Patriarca", que parecía tener un plan para todo, incluso para el desayuno), profundizaron este legado. Las luchas por el campeonato mundial se volvieron grandes sagas, duelos de enorme carga psicológica e intelectual, donde personalidades y filosofías chocaban con intensidad, alimentadas por cantidades industriales de café, tabaco y la nerviosa expectación de sus analistas, que probablemente dormían menos que los propios contendientes.</p>

<h2>El Ajedrez en Tiempos Modernos: Geopolítica y Revolución Digital</h2>

<p>La Guerra Fría, con su particular y a veces tenso "encanto" bipolar, dejó su larga sombra sobre el ajedrez. El gran dominio soviético en el juego se usó como símbolo de superioridad intelectual. Por ello, los desafíos de Occidente, especialmente el de la figura única, carismática y muy excéntrica de Bobby Fischer, se cargaron de un simbolismo político que iba mucho más allá del deporte. La victoria de Fischer en Reikiavik en 1972 fue un fenómeno cultural, la narrativa del genio solitario contra un sistema, tan valorada en Occidente. Una historia con un claro toque de inconformismo y una honestidad cruda, con consecuencias a menudo trágicas para su protagonista.</p>

<p>En nuestros días, la llegada de la tecnología digital ha cambiado profunda e irreversiblemente el ajedrez. Los módulos de análisis, esos oráculos de silicio, calculan millones de variantes por segundo, superando la capacidad humana, para regocijo de unos y ligera melancolía de otros. El acceso a la información es casi ilimitado y la posibilidad de competir globalmente sin moverse del sillón (y a veces en pijama, para qué negarlo), se ha democratizado de una forma que Morphy o Capablanca ni habrían soñado (aunque es probable que ambos se hubieran quejado de la falta de etiqueta de algunos rivales anónimos en el chat).</p>

<p>Sin embargo, lejos de agotar su misterio, esta nueva realidad podría estar resaltando el valor único de la decisión humana. La máquina calcula con precisión asombrosa; el ser humano interpreta, intuye, crea y, crucialmente, comete errores, algunos gloriosos, otros simplemente desastrosos. Es en esa imperfección, en esa chispa de intuición que desafía la lógica, y en la audacia de asumir riesgos (a veces con una temeridad que bordea lo cómico, pero que hace el juego infinitamente más entretenido) donde reside la constante y vibrante tensión del ajedrez.</p>

<h2>Epílogo: El Tablero como Espejo Eterno</h2>

<p>El ajedrez, en definitiva, sigue siendo un reflejo sorprendentemente fiel, y a menudo muy lúcido, de la condición humana: nuestra capacidad para la lógica más pura y, al mismo tiempo, para la pasión más intensa; para la estrategia meticulosa y para el error impulsivo y a veces garrafal. Cada partida es una confrontación con la incertidumbre, una afirmación de la voluntad y, al final, un pequeño drama en 64 cuadros. Y mientras dos almas, con sus luces y sombras, se sienten ante el tablero dispuestas a emprender este diálogo silencioso de intelectos (y, seamos honestos, también, de vez en cuando, de egos heridos), la interminable historia del ajedrez seguirá escribiéndose, añadiendo nuevas y fascinantes capas a su narrativa profunda, compleja y siempre resonante.</p>
    `,
    date: "2025-05-14",
    author: "Santiagovskiy",
    image: "/images/blog-1-echoes-from-the-board.webp",
    category: "Historia",
    readTime: "15 min",
  },
  {
    id: "2",
    slug: "rediscover-vibrant-essence",
    title:
      "Ajedrez: Redescubre su Vibrante Esencia, Olvida lo que Creías Saber",
    excerpt:
      "Más allá de la imagen de genios serenos, el ajedrez revela una intensidad oculta, una belleza singular y una relevancia perdurable. Le invitamos a cuestionar viejas ideas y observar de nuevo.",
    content: `
<p>Si la palabra "ajedrez" le sugiere imágenes de genios enfrascados en una concentración tal que las manecillas del reloj piden clemencia, o de duelos que se extienden hasta que el polvo se asienta con familiaridad sobre el tablero, le invitamos a mirar un poco más allá.</p>

<p>Permítanos mostrarle la intensidad que se esconde bajo su calma aparente, la belleza singular de su creatividad, y las profundas raíces de su perdurable relevancia. Es tiempo, ciertamente, de cuestionar viejas ideas y observar de nuevo.</p>

<p>El imaginario popular suele envolver al ajedrez en un aura de quietud casi reverencial. Se piensa en largas horas de silencio profundo, miradas fijas en un tablero inmóvil, una justa intelectual que parece avanzar con un ritmo pausado y ancestral. Y hay verdad en ello: el ajedrez conoce la pausa, ese murmullo interno donde madura la estrategia. Pero reducir su esencia a esta calma superficial, a una lentitud sin verdadera pasión, es ignorar las profundas corrientes internas que lo animan. La propuesta es clara: redescubra su esencia vibrante. La revelación aguarda a quien se atreve a una mirada más atenta.</p>

<p>Porque en esos momentos de silencio, en esa aparente inmovilidad, se libran duelos de gran intensidad. No es solo la estructura clara de la lógica la que opera; es también un espejo de la experiencia humana: la tensión del cálculo preciso, la sombra de la angustia ante el error, la silenciosa euforia de una idea clara. Cada pieza movida es una palabra en un diálogo sin voz, un pulso en la lucha de voluntades donde la mente del oponente se siente casi tangible. ¿Lento? Quizás para el ojo que solo ve el movimiento. Apasionante, sin duda, para quien experimenta el vértigo de las posibilidades, la presión del tiempo, la súbita fuerza de una combinación que quiebra los planes más elaborados.</p>

<p>La belleza creativa del ajedrez es otra de sus cualidades, a menudo ocultas para el no iniciado. Lejos de ser un mero ejercicio de cálculo predecible, el tablero se convierte en un lienzo donde la imaginación traza geometrías sorprendentes, donde la intuición, esa chispa de comprensión, a veces supera la lógica pura. Una partida puede ser la narración de una gesta, una secuencia de movimientos precisos, una forma modelada en el tiempo. Hay sacrificios impactantes, defensas que conmueven por su tenacidad, ataques que avanzan con fuerza natural. Esta capacidad para generar asombro, para revelar lo nuevo dentro de un marco de reglas antiguas, es uno de los pilares de su notable persistencia.</p>

<p>Su largo viaje a través de los siglos testifica esta riqueza. Desde las orillas del Indo, donde el chaturanga comenzó a esbozar las primeras estrategias de combate simbólico, el juego emprendió su largo viaje: Persia lo acogió y lo transformó, y desde allí, como una idea persistente, cruzó continentes, se integró en culturas diversas, siempre adaptándose, siempre desafiando, siempre encontrando nuevos adeptos. No habría sobrevivido quince siglos, viendo pasar imperios, modas y peinados francamente cuestionables, si fuese un simple pasatiempo para temperamentos sosegados o mentes poco curiosas. Su longevidad surge de su asombrosa capacidad para ser, al mismo tiempo, ciencia exacta y arte libre, lucha intensa y calma reflexión.</p>

<p>Así, la aparente "lentitud" del ajedrez bien podría ser el silencio productivo, el espacio necesario donde su complejidad se despliega. Es el tiempo que permite la inmersión profunda, la antesala de esa comprensión que, al llegar, ilumina el tablero y la mente con una claridad súbita y estimulante. No es la pasividad del genio paciente lo que define al jugador, sino la búsqueda activa, a veces intensa, de la verdad y la belleza en ese universo de 64 escaques. La respuesta, entonces, va más allá de una simple elección; reside en la comprensión de que en el corazón de la calma ajedrecística arde un fuego duradero, una llama que ha cautivado a la humanidad. Es el momento de dejar atrás viejas etiquetas y redescubrir esa llama. Sin duda, seguirá brillando.</p>
    `,
    date: "2025-05-14",
    author: "Santiagovskiy",
    image: "/images/blog-2-rediscover-vibrant-essence.webp",
    category: "Inspiración",
    readTime: "7 min",
  },
  {
    id: "3",
    slug: "5-steps-to-online-chess",
    title: "5 Pasos Hacia el Ajedrez Online: Tu Refugio Digital y Gratuito",
    excerpt:
      "El ajedrez digital es un océano de posibilidades al alcance de tu mano; para navegarlo, bastan cinco movimientos iniciales, sencillos y gratuitos, que esta guía te desvela.",
    content: `
<p>Imagina una pausa al caer la tarde. El horizonte se tiñe de colores cálidos, y en la quietud de tu espacio personal –quizás con el suave murmullo de las olas de fondo o el confort de una manta–, la pantalla de tu portátil se ilumina. No con el estrépito del mundo exterior, sino con la promesa silenciosa de un desafío ancestral, ahora accesible y acogedor. Así, con esta serenidad, puedes iniciar tu viaje en el ajedrez online. Lejos de la solemnidad de antiguos salones o la urgencia de torneos presenciales, el ajedrez digital te ofrece un refugio, un tablero infinito al alcance de tu mano. Esta guía, en cinco pasos claros y sin coste alguno, te acompañará a descubrirlo.</p>

<h2>Paso 1: Eligiendo tu Rincón en el Ágora Digital</h2>

<p>El primer movimiento es encontrar tu lugar en el vasto universo online. Como elegir ese sitio perfecto frente a la ventana donde la luz es ideal, seleccionar tu plataforma inicial es clave. Para un comienzo gratuito y pleno, Lichess.org se presenta como un espacio diáfano, impulsado por la comunidad y libre de artificios. Por otro lado, Chess.com ofrece un ecosistema robusto con una generosa oferta gratuita, y la opción de explorar más a fondo si así lo deseas. Ambas son puertas a un mundo de posibilidades. Considera cuál de estos "rincones digitales" se siente más como tu hogar ajedrecístico.</p>

<h2>Paso 2: El Nacimiento de tu Presencia Online</h2>

<p>Una vez elegido tu espacio, el siguiente paso es un sencillo ritual: crear tu cuenta. Un nombre de usuario –tu firma en este lienzo digital– y una contraseña serán tus credenciales. Es un proceso tan natural como abrir un nuevo cuaderno. Este acto, aunque breve, es el nacimiento de tu presencia en este sereno universo de 64 escaques virtuales. Dedica un instante a ese nombre; será el eco de tu juego en la red.</p>

<h2>Paso 3: Contemplando el Nuevo Paisaje Digital</h2>

<p>Con tu cuenta activa, la interfaz se despliega como un paisaje por descubrir. Al principio, podrías percibir una abundancia de senderos y opciones. No hay prisa. Como quien contempla un nuevo horizonte, dedica unos momentos a observar. Verás botones intuitivos para "Jugar", "Nueva Partida", y también invitaciones a "Aprender" o resolver "Puzzles" que son como pequeñas meditaciones estratégicas. Permite que tu curiosidad te guíe; la familiaridad llegará con la misma suavidad con la que las olas acarician la orilla.</p>

<h2>Paso 4: Tus Primeros Diálogos Sobre el Tablero</h2>

<p>Ahora, es momento de sumergirte, con calma, en tu primera partida. Elige un ritmo que acompañe tu respiración –quizás 10 o 15 minutos por jugador– y deja que el sistema te encuentre un compañero de juego. Estas primeras partidas son como conversaciones iniciales: habrá descubrimientos, errores que son solo aprendizaje, y la belleza de ver cómo se entrelazan las intenciones. Cada encuentro es una lección en sí misma. Recuerda la gentileza: un saludo digital, un reconocimiento al final. Son los pequeños gestos que tejen la comunidad.</p>

<h2>Paso 5: Cuando el Horizonte se Expande Desde tu Pantalla</h2>

<p>Una vez que hayas encontrado tu ritmo en este fluir digital, un horizonte de posibilidades se desplegará ante ti, sin necesidad de moverte de tu refugio. Las plataformas online son mucho más que simples tableros; son bibliotecas, gimnasios mentales, y plazas de encuentro. Los "puzzles" tácticos afinarán tu mirada como el sol del atardecer perfila las siluetas. Las lecciones interactivas y el análisis de tus propias partidas (a menudo con herramientas gratuitas) te permitirán crecer a tu propio paso. Este es tu viaje personal, nutrido por la curiosidad.</p>

<h2>Conclusión: El Infinito Tablero en la Calma de tu Espacio</h2>

<p>Piénselo un momento: hubo un tiempo en que para medirse con un oponente de otras latitudes, o simplemente para encontrar un libro de aperturas, uno debía emprender búsquedas que hoy nos parecerían épicas. O, en el mejor de los casos, esperar semanas a que una paloma mensajera (probablemente exhausta y con pocas ganas de volver por más trabajo) trajera la siguiente jugada. Hoy, desde la comodidad de tu rincón favorito, quizás con esa misma manta y la vista al mar que inspira estas líneas, puedes acceder a un universo de conocimiento mientras espera que hierva el agua para el café. Qué privilegio poder desplegar las velas de nuestra curiosidad ajedrecística con tal libertad y serenidad.</p>

<p>Estos cinco pasos son solo el comienzo. Las herramientas están dispuestas, el acceso es libre, y la comunidad global te espera. El tablero infinito del ajedrez online aguarda en la calma de tu espacio personal, listo para ofrecerte desafíos, aprendizaje y la conexión con una tradición milenaria que se siente más viva y accesible que nunca. Permite que tu intuición te guíe; el juego mismo te mostrará el camino.</p>
    `,
    date: "2025-05-14",
    author: "Santiagovskiy",
    image: "/images/blog-3-5-steps-to-online-chess.webp",
    category: "Guías",
    readTime: "8 min",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentBlogPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}
