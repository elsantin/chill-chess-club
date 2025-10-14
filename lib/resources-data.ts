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
      "Fundamentos Estratégicos de Ajedrez: Una Guía para el Jugador Reflexivo",
    excerpt:
      "Conceptos clave para tus primeras partidas y para construir una base estratégica sólida.",
    content: `
<p>Contenido en desarrollo. Este recurso estará disponible próximamente.</p>
    `,
    date: "2025-01-08",
    author: "Santiago Narváez",
    image: "/images/resource-checkmate-tactics.webp",
    category: "Estrategia",
    difficulty: "Principiante",
    readTime: "10 min",
  },
  {
    id: "3",
    slug: "anatomia-ajedrez",
    title: "Anatomía del Ajedrez: Piezas, Fases y su Valor Estratégico",
    excerpt:
      "Recorrido desde la apertura hasta el final, mostrando cómo el valor y características de cada pieza definen tu estrategia.",
    content: `
<p>Contenido en desarrollo. Este recurso estará disponible próximamente.</p>
    `,
    date: "2025-01-03",
    author: "Santiago Narváez",
    image: "/images/resource-king-pawn-endgame.webp",
    category: "Fundamentos",
    difficulty: "Principiante",
    readTime: "12 min",
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
