export interface Resource {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  readTime?: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    slug: "iniciacion-ajedrez",
    title: "Iniciación al Ajedrez: Movimientos y Esencia del Juego",
    excerpt:
      "Guía clara sobre los elementos fundamentales: tablero, piezas y reglas básicas.",
    content: `
<p>Bienvenido al ajedrez, un juego que despliega un universo de estrategia y reflexión. Esta guía ha sido concebida para ofrecerte una comprensión clara de sus elementos fundamentales: el tablero, las piezas y las reglas que dan inicio a la partida. El ajedrez es un diálogo entre estrategia, táctica y la serena virtud de la paciencia. Comencemos este recorrido.</p>

<h2>El Escenario: El Tablero de Ajedrez</h2>

<p>El ajedrez se desarrolla sobre un tablero cuadrado, un campo de 64 casillas (dispuestas en una cuadrícula de 8x8) que alternan tonos claros y oscuros, comúnmente referidas como "blancas" y "negras".</p>

<p>Una regla esencial de preparación: al inicio, cada jugador debe tener una casilla de color claro (blanca) en la esquina inferior derecha de su lado del tablero.</p>

<p>Las hileras horizontales se denominan "filas" y se identifican con números del 1 al 8. Las hileras verticales son las "columnas", designadas por letras, de la 'a' a la 'h'.</p>

<h2>Los Actores: Las Piezas de Ajedrez</h2>

<p>Cada contendiente inicia la partida con un conjunto de 16 piezas, cada una con su carácter y movimiento particular:</p>

<p><strong>1 Rey:</strong> La pieza cardinal. Su seguridad es el eje de la partida. Si el Rey es amenazado de captura sin escape posible (lo que se conoce como jaque mate), la partida concluye. Su movimiento es de una sola casilla, pero en cualquier dirección: horizontal, vertical o diagonal.</p>

<p><strong>1 Dama (o Reina):</strong> La pieza de mayor poder y movilidad. Se desplaza cualquier número de casillas disponibles en línea recta, ya sea horizontal, vertical o diagonalmente.</p>

<p><strong>2 Torres:</strong> Guardianes de las líneas rectas. Se mueven cualquier número de casillas en sentido horizontal o vertical, a lo largo de filas y columnas.</p>

<p><strong>2 Alfiles:</strong> Maestros de las diagonales. Se deslizan cualquier número de casillas a través de las diagonales del tablero. Cada jugador dispone de un alfil que transita por casillas blancas y otro que lo hace por las negras, sin cambiar nunca el color de su camino.</p>

<p><strong>2 Caballos:</strong> El movimiento más singular y enigmático. Avanzan trazando una "L": dos casillas en una dirección (horizontal o vertical) y luego una casilla en ángulo recto respecto a ese primer tramo. El Caballo es la única pieza con la prerrogativa de saltar sobre otras piezas, propias o adversarias, que se interpongan en su camino.</p>

<p><strong>8 Peones:</strong> La infantería del ajedrez. Son los más numerosos, aunque sus movimientos iniciales son algo restringidos. Representan la estructura y, a menudo, el alma silenciosa de la estrategia. Los peones avanzan una casilla hacia adelante por su columna. En su primer movimiento, cada peón tiene la opción de avanzar una o dos casillas. A diferencia de cómo se mueven, los peones capturan en diagonal, una casilla hacia adelante, a la izquierda o a la derecha. Una de sus habilidades más notables es la promoción o coronación: si un peón consigue atravesar todo el tablero y alcanzar la última fila (la octava para las blancas, o la primera para las negras), debe ser sustituido inmediatamente por una Dama, Torre, Alfil o Caballo del mismo color, a elección del jugador.</p>

<h2>El Propósito: Objetivo del Juego</h2>

<p>El fin último en el ajedrez es alcanzar el "jaque mate" sobre el Rey del oponente. Esta situación se produce cuando el Rey se encuentra bajo amenaza directa de captura (en "jaque") y no dispone de ninguna jugada legal que le permita eludir dicha amenaza.</p>

<h2>Maniobras Singulares: Movimientos Especiales</h2>

<h3>Enroque</h3>

<p>Una maniobra especial de gran valor defensivo y de desarrollo, que involucra al Rey y a una de sus Torres. Es la única jugada en la que se mueven dos piezas a la vez y la única donde el Rey puede desplazarse dos casillas. Existen dos tipos de enroque: el enroque corto (con la torre más cercana al rey, en el flanco de rey) y el enroque largo (con la torre más lejana, en el flanco de dama). Para poder realizar el enroque, se deben cumplir todas las siguientes condiciones:</p>

<ul>
<li>Ni el Rey ni la Torre que participa en el enroque deben haberse movido previamente durante la partida.</li>
<li>Todas las casillas entre el Rey y la Torre participante deben estar desocupadas (sin piezas de ningún color).</li>
<li>El Rey no debe estar en jaque en el momento de enrocar.</li>
<li>Ninguna de las casillas por las que el Rey pasa durante el enroque, ni la casilla en la que finalmente se sitúa, pueden estar amenazadas (atacadas) por piezas del oponente.</li>
</ul>

<h3>Captura al Paso (En Passant)</h3>

<p>Esta es una opción de captura especial exclusiva para los peones. Ocurre cuando un peón se mueve dos casillas hacia adelante desde su posición inicial y aterriza justo al lado de un peón enemigo en la misma fila. Si esto sucede, el peón enemigo tiene la oportunidad, solo en su siguiente jugada inmediata, de capturar al peón que avanzó dos casillas como si este último solo hubiera avanzado una. El peón que captura se mueve a la casilla por la que el peón capturado 'pasó'.</p>

<h2>Desenlaces: Fin de la Partida</h2>

<p>Una partida de ajedrez puede concluir de diversas formas:</p>

<p><strong>Jaque Mate:</strong> Un jugador alcanza la victoria al dar jaque mate al Rey contrario.</p>

<p><strong>Tablas (Empate):</strong> La partida finaliza sin un vencedor. Esto puede ocurrir por diversas razones:</p>

<ul>
<li>Acuerdo mutuo entre los jugadores.</li>
<li>Ahogado (el Rey no está en jaque, pero no tiene movimientos legales y ninguna otra pieza del jugador puede moverse).</li>
<li>Repetición triple de una misma posición.</li>
<li>Regla de los cincuenta movimientos (si durante cincuenta movimientos consecutivos de cada jugador no ha habido captura de pieza ni movimiento de peón).</li>
<li>Insuficiencia de material (cuando ninguno de los jugadores tiene piezas suficientes para forzar un jaque mate).</li>
</ul>

<p><strong>Abandono:</strong> Un jugador, reconociendo la superioridad del rival o la inevitabilidad de la derrota, puede optar por rendirse en cualquier momento de la partida.</p>

<p>Esta guía te ofrece los cimientos. El ajedrez, en su esencia, es un juego de una profundidad que invita a una exploración constante. Disfruta del proceso de aprendizaje y de cada partida.</p>
    `,
    date: "2025-01-12",
    author: "Santiago Narváez",
    image: "/images/resource-openings-guide.webp",
    category: "Fundamentos",
    difficulty: "Principiante",
    readTime: "12 min",
  },
  {
    id: "2",
    slug: "fundamentos-estrategicos",
    title:
      "Fundamentos Estratégicos de Ajedrez: Guía para el Jugador Reflexivo",
    excerpt:
      "Conceptos clave para tus primeras partidas y para construir una base estratégica sólida.",
    content: `
<p>Más allá del conocimiento individual del movimiento de las piezas, el ajedrez se despliega a través de principios estratégicos fundamentales –auténticos preceptos– que orientan las decisiones desde los albores de la apertura hasta la consumación del final. La comprensión de estos conceptos es el cimiento sobre el cual se edifican planes sólidos y se juega con un propósito más hondo.</p>

<h2>1. El Dominio del Centro</h2>

<p>Las casillas centrales del tablero (principalmente d4, e4, d5, y e5) poseen un valor estratégico primordial. Las piezas que desde allí operan ejercen control sobre un mayor número de escaques, gozando de una movilidad y un abanico de opciones superiores.</p>

<p><strong>Propósito:</strong> Procurar la ocupación o, cuando menos, la influencia sobre el centro con tus peones y piezas desde las primeras jugadas. Un centro robusto confiere ventaja espacial y limita las alternativas del adversario.</p>

<ul>
<li>Considera iniciar la partida avanzando uno o dos de tus peones centrales (usualmente el peón de Rey a e4 o el peón de Dama a d4).</li>
<li>Dirige el desarrollo de tus caballos y alfiles hacia casillas que ejerzan control o brinden apoyo a este sector vital del tablero.</li>
</ul>

<h2>2. Desarrollo Ágil y Consciente de las Piezas</h2>

<p>Durante la fase de apertura, el objetivo reside en movilizar tus piezas menores (caballos y alfiles) desde sus posiciones iniciales hacia escaques activos, con la mayor celeridad y eficiencia posibles. Es crucial evitar que las piezas permanezcan "adormecidas" en la primera fila.</p>

<p><strong>Propósito:</strong> Poner en juego la totalidad de tus piezas menores antes de embarcarse en ofensivas prematuras. Cada pieza debe tener un papel, una contribución al plan general.</p>

<ul>
<li>En numerosas aperturas, suele ser prudente priorizar el desarrollo de los caballos antes que el de los alfiles.</li>
<li>Procura no mover la misma pieza repetidamente durante la apertura, salvo que una necesidad táctica o estratégica imperiosa así lo justifique.</li>
<li>Busca la conexión de tus torres, un objetivo que habitualmente se alcanza tras el desarrollo de las piezas menores y la ejecución del enroque.</li>
</ul>

<h2>3. La Salvaguarda del Rey</h2>

<p>La protección de tu Rey es un deber insoslayable. Un Rey expuesto se convierte en un blanco vulnerable, susceptible a ataques que pueden resultar definitivos.</p>

<p><strong>Propósito:</strong> Conducir a tu Rey hacia una posición de seguridad, lo cual se logra comúnmente mediante el enroque, durante la etapa inicial de la partida.</p>

<ul>
<li>Procura enrocar en una fase temprana del juego (generalmente dentro de los primeros diez movimientos).</li>
<li>Evita el avance innecesario de los peones que custodian a tu Rey enrocado, pues tales movimientos pueden generar debilidades estructurales.</li>
<li>Si tu Rey se encuentra bajo amenaza, asegúrate de mantener piezas defensoras en su proximidad.</li>
</ul>

<h2>4. El Valor Relativo de las Piezas</h2>

<p>Si bien cada pieza posee un valor numérico orientativo (Peón=1, Caballo=3, Alfil=3, Torre=5, Dama=9), su verdadera valía es siempre relativa y se encuentra supeditada a la configuración específica de la posición en el tablero.</p>

<p><strong>Propósito:</strong> Eludir la pérdida innecesaria de material y discernir los intercambios que resulten favorables. Una pieza estratégicamente bien ubicada puede superar con creces su valor nominal.</p>

<ul>
<li>No entregues una pieza de mayor valor intrínseco por una de menor valor sin obtener una compensación clara y tangible (sea esta un ataque prometedor, una ventaja posicional duradera, o la simplificación hacia un final ganado).</li>
<li>Un alfil tiende a ser ligeramente más valioso que un caballo en posiciones de carácter abierto; inversamente, un caballo puede demostrar superioridad en posiciones cerradas y con puntos de apoyo firmes.</li>
</ul>

<h2>5. La Estructura de Peones</h2>

<p>La configuración que adoptan tus peones –la estructura de peones– ejerce una influencia significativa sobre el carácter de la partida. Esta define líneas abiertas, establece puestos avanzados para tus piezas y condiciona la seguridad de tu monarca.</p>

<p><strong>Propósito:</strong> Forjar una estructura de peones sólida y coherente, evitando la creación de debilidades como peones aislados, doblados o retrasados. Utiliza tus peones para ganar espacio, restringir la movilidad del oponente y consolidar tu posición.</p>

<ul>
<li>Reflexiona cuidadosamente antes de avanzar un peón, pues su movimiento es irreversible.</li>
<li>Los peones que avanzan unidos, apoyándose mutuamente, conforman una fuerza considerable.</li>
</ul>

<h2>6. La Coordinación Armónica de las Piezas</h2>

<p>Tus piezas deben operar en concierto, como los miembros de una orquesta bien afinada. Una coordinación eficaz implica que tus piezas se protegen y apoyan mutuamente, colaborando de forma sinérgica tanto en la defensa como en el ataque.</p>

<p><strong>Propósito:</strong> Buscar disposiciones donde tus piezas armonicen sus fuerzas y controlen casillas clave de manera conjunta.</p>

<ul>
<li>Evita mantener piezas inactivas o aquellas que obstruyan la acción de otras piezas propias.</li>
<li>Las torres revelan su máxima potencia en columnas abiertas o semiabiertas, y a menudo cooperan de forma decisiva cuando se doblan en la séptima u octava fila.</li>
</ul>

<h2>7. La Consideración de los Planes del Adversario</h2>

<p>El ajedrez es un diálogo, no un monólogo. Es fundamental interrogarse constantemente: "¿Cuál es la intención de mi oponente? ¿Qué amenaza subyace en su última jugada?".</p>

<p><strong>Propósito:</strong> Anticipar las intenciones del rival, organizar una defensa adecuada contra sus amenazas y, de ser posible, desbaratar sus planes.</p>

<ul>
<li>Tras cada movimiento de tu oponente, dedica un momento a evaluar los cambios en la posición y las nuevas posibilidades que se abren para él.</li>
</ul>

<p>Estos preceptos han de entenderse como guías generales, faros que iluminan el camino, no como reglas inquebrantables. Con la acumulación de experiencia, aprenderás a discernir cuándo y cómo aplicarlos, e incluso cuándo transgredirlos conscientemente para obtener una ventaja. La clave reside en la práctica constante y en el análisis reflexivo de tus propias partidas.</p>
    `,
    date: "2025-01-08",
    author: "Santiago Narváez",
    image: "/images/resource-checkmate-tactics.webp",
    category: "Estrategia",
    difficulty: "Principiante",
    readTime: "15 min",
  },
  {
    id: "3",
    slug: "anatomia-ajedrez",
    title: "Anatomía del Ajedrez: Piezas, Fases y su Valor Estratégico",
    excerpt:
      "Recorrido desde la apertura hasta el final, mostrando cómo el valor y características de cada pieza definen tu estrategia.",
    content: `
<p>Profundizar en la "anatomía" de una partida de ajedrez trasciende el mero conocimiento del movimiento de las piezas. Implica discernir su valor intrínseco y, de forma crucial, cómo este se transforma y redefine según la fase en que se encuentre el juego. Esta guía se adentra en el flujo de la partida y en el papel estratégico que cada combatiente desempeña sobre el tablero.</p>

<h2>El Valor de las Piezas: Una Perspectiva Más Allá de los Números</h2>

<p>De forma tradicional, se atribuye un valor numérico a las piezas, una suerte de brújula inicial para que el principiante pueda orientarse en la evaluación de los intercambios:</p>

<ul>
<li><strong>Peón:</strong> 1 punto</li>
<li><strong>Caballo:</strong> 3 puntos</li>
<li><strong>Alfil:</strong> 3 puntos (en ocasiones, se le concede una ligera prima, hasta 3.25, por su notable alcance en posiciones abiertas)</li>
<li><strong>Torre:</strong> 5 puntos</li>
<li><strong>Dama:</strong> 9 puntos</li>
<li><strong>Rey:</strong> Un valor conceptualmente infinito, pues su pérdida dictamina el fin de la partida.</li>
</ul>

<p>No obstante, es imperativo comprender que este valor es eminentemente relativo y dinámico. Una pieza estratégicamente situada, que ejerce control sobre casillas cruciales o que participa activamente en un ataque con visos de ser decisivo, puede ostentar una valía muy superior a su puntuación base. Por ejemplo, un caballo anclado en un puesto avanzado central, inmune al desalojo por peones contrarios, podría superar en importancia a una torre relegada a la pasividad.</p>

<h3>Factores que Modulan el Valor Real:</h3>

<ul>
<li><strong>Actividad:</strong> ¿Sobre cuántas casillas de relevancia ejerce influencia la pieza? ¿Se halla implicada de forma activa en el desarrollo del juego?</li>
<li><strong>Coordinación:</strong> ¿De qué manera interactúa la pieza con el resto de tus fuerzas, en una sinergia armónica?</li>
<li><strong>Seguridad:</strong> ¿Se encuentra la pieza adecuadamente defendida o, por el contrario, es vulnerable a las incursiones del adversario?</li>
<li><strong>Estructura de Peones:</strong> La disposición de los peones puede tanto limitar como potenciar la efectividad de ciertas piezas (así, los alfiles anhelan diagonales despejadas, mientras que los caballos a menudo prosperan en posiciones de carácter cerrado).</li>
<li><strong>Piezas del Oponente:</strong> El valor de tus propias piezas también está intrínsecamente ligado a las fuerzas remanentes del adversario y a la disposición de estas sobre el tablero.</li>
</ul>

<h2>Las Fases de la Partida: Un Flujo Continuo</h2>

<p>Una partida de ajedrez, en su desarrollo, suele transitar por tres fases principales, aunque es importante notar que las transiciones entre ellas son a menudo graduales y fluidas, más que divisiones estancas:</p>

<h3>1. Apertura</h3>

<p>Esta fase comprende, aproximadamente, los primeros 10 a 15 movimientos. Los objetivos primordiales en esta etapa inicial son:</p>

<ul>
<li><strong>Controlar el centro:</strong> Procurar la ocupación o, al menos, la influencia sobre las casillas centrales mediante el uso de peones y piezas.</li>
<li><strong>Desarrollar las piezas menores:</strong> Movilizar caballos y alfiles desde sus casillas de origen hacia posiciones activas y prometedoras.</li>
<li><strong>Resguardar al Rey:</strong> Generalmente, esto se consigue a través del enroque, buscando un refugio seguro para el monarca.</li>
<li><strong>Conectar las torres:</strong> Prepararlas para que puedan entrar en juego de manera coordinada y efectiva.</li>
</ul>

<p>En esta fase, se observan los principios fundamentales de la apertura y, a menudo, se recurre a aperturas teóricas –secuencias de movimientos estudiadas y contrastadas por la experiencia, como la Apertura Española o la Defensa Siciliana–. El valor de las piezas tiende a asemejarse a su valor nominal, pero la celeridad en el desarrollo y la pugna por el dominio central son de una importancia crucial.</p>

<h3>2. Medio Juego</h3>

<p>El medio juego da inicio una vez que la mayoría de las piezas han sido desarrolladas y, usualmente, el enroque ya se ha efectuado. Constituye la fase más intrincada y rica de la partida, el escenario donde se despliegan los planes estratégicos y donde la táctica florece en forma de combinaciones.</p>

<p><strong>Características y Objetivos:</strong></p>

<ul>
<li><strong>Formulación de un plan:</strong> Basado en una atenta evaluación de las debilidades en la posición del oponente y el reconocimiento de las propias fortalezas.</li>
<li><strong>Táctica:</strong> La búsqueda incesante de combinaciones, la consideración de sacrificios y la creación de amenazas directas. El Caballo y el Alfil, con su capacidad para tejer redes de amenazas complejas, suelen brillar con luz propia en esta etapa.</li>
<li><strong>Mejora posicional de las piezas:</strong> Conducir las piezas hacia sus escaques óptimos, estableciendo puestos avanzados y mejorando su influencia.</li>
<li><strong>Juego de peones:</strong> La creación de rupturas, el avance de peones pasados con potencial de promoción, y la restricción de las opciones del adversario mediante la estructura de peones.</li>
<li><strong>Ataque al Rey:</strong> Si las circunstancias son propicias, la organización de un asalto directo contra el monarca enemigo.</li>
</ul>

<p>El valor de las piezas se torna aquí sumamente dinámico. Una Torre que domina una columna abierta o que se infiltra en la séptima fila puede adquirir una fuerza devastadora. La Dama, por su parte, se erige como una pieza de formidable potencia tanto en el ataque como en la defensa.</p>

<h3>3. Final</h3>

<p>Se alcanza la fase de final cuando el número de piezas sobre el tablero se ha reducido considerablemente. La naturaleza del juego experimenta entonces una transformación drástica.</p>

<p><strong>Características y Objetivos:</strong></p>

<ul>
<li><strong>Activación del Rey:</strong> El Rey abandona su rol pasivo y se convierte en una pieza de combate activa, debiendo, por lo general, participar en el centro del tablero.</li>
<li><strong>Promoción de peones:</strong> El avance de los peones con el objetivo de coronarlos (transformarlos en una pieza de mayor valor, usualmente una Dama) se convierte, con frecuencia, en el objetivo primordial. Un solo peón puede inclinar la balanza y decidir el resultado de la partida.</li>
<li><strong>Cálculo preciso:</strong> Los finales exigen una gran exactitud en el cálculo, pues un único error puede tener consecuencias fatales e irreversibles.</li>
<li><strong>Conocimiento de finales teóricos:</strong> Existe un vasto repertorio de posiciones de final que han sido profundamente estudiadas, cuyo conocimiento resulta esencial (por ejemplo, los mates básicos, los finales de peones, o los complejos finales de torres).</li>
</ul>

<p>En esta etapa, el valor de los Peones se incrementa de manera exponencial. Las Torres conservan una notable fortaleza. El Rey se transforma en una pieza clave, tanto en la ofensiva como en la defensiva.</p>

<p>Comprender cómo la partida fluye a través de estas fases, y cómo el valor y el rol de tus piezas se adaptan y evolucionan, te permitirá tomar decisiones estratégicas y tácticas más aquilatadas y profundas. Cada pieza, en el gran teatro del ajedrez, aguarda su momento para brillar.</p>
    `,
    date: "2025-01-03",
    author: "Santiago Narváez",
    image: "/images/resource-king-pawn-endgame.webp",
    category: "Fundamentos",
    difficulty: "Principiante",
    readTime: "18 min",
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export function getRecentResources(count: number = 3): Resource[] {
  return resources.slice(0, count);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter((resource) => resource.category === category);
}
