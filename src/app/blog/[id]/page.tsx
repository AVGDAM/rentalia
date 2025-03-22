"use client";

import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { CalendarDays, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface BlogArticle {
  titulo: string;
  resumen: string;
  imagen: string;
  fecha: string;
  tiempoLectura: string;
  autor: string;
  categoria: string;
  contenido: string;
}

interface BlogArticles {
  [key: string]: BlogArticle;
}

// Datos de ejemplo expandidos para los artículos completos
const blogArticles: BlogArticles = {
  "1": {
    titulo: "Cómo elegir el vestido perfecto para una boda",
    resumen: "Guía completa con consejos expertos para encontrar el vestido ideal según tu estilo y el tipo de ceremonia.",
    imagen: "https://images.unsplash.com/photo-1594625329127-a226a32ab9ba",
    fecha: "22 Marzo 2024",
    tiempoLectura: "5 min",
    autor: "María García",
    categoria: "Guías y Consejos",
    contenido: `
      <h2>La importancia de elegir el vestido adecuado</h2>
      <p>Elegir el vestido perfecto para una boda es una decisión importante que requiere consideración y planificación. Ya sea que asistas como invitada o seas parte del cortejo nupcial, tu elección debe reflejar tanto el código de vestimenta del evento como tu estilo personal.</p>

      <h2>Factores a considerar</h2>
      <ul>
        <li><strong>Tipo de ceremonia:</strong> La formalidad del evento dictará el estilo apropiado del vestido.</li>
        <li><strong>Hora del día:</strong> Las bodas diurnas suelen requerir colores más claros y telas más ligeras.</li>
        <li><strong>Ubicación:</strong> El lugar de la ceremonia influye en la elección del largo y el estilo.</li>
        <li><strong>Temporada:</strong> Adapta el material y el color a la época del año.</li>
      </ul>

      <h2>Consejos de estilo</h2>
      <p>Para bodas formales de noche, opta por vestidos largos en colores elegantes como azul marino, burdeos o negro. Para ceremonias diurnas o al aire libre, los vestidos midi en tonos pasteles o florales son una excelente opción.</p>

      <h2>Qué evitar</h2>
      <p>Recuerda evitar el color blanco (reservado para la novia), así como colores demasiado llamativos que puedan destacar más de lo apropiado. También es importante considerar la comodidad, ya que probablemente pasarás varias horas con el vestido.</p>

      <h2>Dónde encontrar el vestido perfecto</h2>
      <p>En Rentalia, ofrecemos una amplia selección de vestidos para bodas que puedes alquilar a precios accesibles. Esto te permite lucir un vestido de diseñador sin comprometer tu presupuesto.</p>
    `
  },
  "2": {
    titulo: "Tendencias de moda para eventos formales 2024",
    resumen: "Descubre las últimas tendencias en moda formal y cómo incorporarlas a tu estilo para destacar en cualquier evento.",
    imagen: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    fecha: "20 Marzo 2024",
    tiempoLectura: "7 min",
    autor: "Carlos Ruiz",
    categoria: "Tendencias",
    contenido: `
      <h2>Las tendencias que dominarán 2024</h2>
      <p>Este año, la moda formal experimenta una emocionante evolución, combinando elegancia clásica con toques contemporáneos. Las nuevas tendencias favorecen la sostenibilidad y la versatilidad.</p>

      <h2>Colores y Patrones</h2>
      <ul>
        <li><strong>Tonos tierra:</strong> Marrones, beiges y ocres dominan la paleta.</li>
        <li><strong>Verde esmeralda:</strong> El color del año en todas sus variaciones.</li>
        <li><strong>Patrones geométricos:</strong> Diseños modernos en telas clásicas.</li>
      </ul>

      <h2>Estilos Destacados</h2>
      <p>Los trajes oversized continúan en tendencia, pero con un toque más refinado. Los vestidos midi con cortes asimétricos y los conjuntos monocromáticos son protagonistas esta temporada.</p>

      <h2>Accesorios Clave</h2>
      <p>Los accesorios metálicos, bolsos estructurados y zapatos con diseños arquitectónicos complementan perfectamente los looks formales de 2024.</p>

      <h2>Sostenibilidad en la Moda Formal</h2>
      <p>La tendencia hacia la moda sostenible se refleja en el uso de materiales reciclados y la preferencia por el alquiler de prendas de alta calidad para ocasiones especiales.</p>
    `
  },
  "3": {
    titulo: "Los mejores lugares para sesiones fotográficas en Madrid",
    resumen: "Una guía de las locaciones más fotogénicas de Madrid para tus fotos con ropa alquilada.",
    imagen: "https://images.unsplash.com/photo-1543783207-ec64e4d95325",
    fecha: "18 Marzo 2024",
    tiempoLectura: "6 min",
    autor: "Laura Sánchez",
    categoria: "Fotografía",
    contenido: `
      <h2>Madrid: Un escenario perfecto para tus fotos</h2>
      <p>La capital española ofrece una mezcla única de arquitectura histórica, jardines elegantes y espacios urbanos modernos, perfectos para cualquier tipo de sesión fotográfica.</p>

      <h2>Locaciones Imprescindibles</h2>
      <ul>
        <li><strong>Palacio Real:</strong> Ideal para fotos con vestidos de gala y trajes formales.</li>
        <li><strong>Parque del Retiro:</strong> Perfecto para sesiones al aire libre con luz natural.</li>
        <li><strong>Gran Vía:</strong> Para fotos con un toque urbano y moderno.</li>
        <li><strong>Plaza Mayor:</strong> Arquitectura histórica como telón de fondo.</li>
      </ul>

      <h2>Mejores Momentos del Día</h2>
      <p>La "hora dorada" (justo después del amanecer o antes del atardecer) ofrece la mejor luz natural para fotografías al aire libre. Para locaciones interiores, el mediodía puede ser ideal.</p>

      <h2>Consejos para tu Sesión</h2>
      <p>Coordina tu vestuario con la locación y considera el clima y la hora del día. Rentalia te ofrece una amplia selección de prendas perfectas para cada tipo de sesión fotográfica.</p>
    `
  },
  "4": {
    titulo: "Alquiler de ropa: La revolución de la moda sostenible",
    resumen: "Cómo el alquiler de ropa está cambiando la industria de la moda y ayudando al medio ambiente.",
    imagen: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    fecha: "15 Marzo 2024",
    tiempoLectura: "8 min",
    autor: "Ana Martínez",
    categoria: "Sostenibilidad",
    contenido: `
      <h2>El Impacto de la Moda Rápida</h2>
      <p>La industria de la moda es una de las más contaminantes del mundo. El alquiler de ropa emerge como una solución sostenible que reduce el consumo y maximiza el uso de las prendas.</p>

      <h2>Beneficios del Alquiler</h2>
      <ul>
        <li><strong>Sostenibilidad:</strong> Reduce la huella de carbono y el desperdicio textil.</li>
        <li><strong>Economía:</strong> Acceso a prendas de diseñador a una fracción del costo.</li>
        <li><strong>Variedad:</strong> Posibilidad de renovar el armario constantemente.</li>
      </ul>

      <h2>El Futuro de la Moda</h2>
      <p>El alquiler de ropa está transformando la forma en que consumimos moda, creando un modelo más sostenible y accesible para todos.</p>

      <h2>Cómo Empezar</h2>
      <p>En Rentalia, hacemos que el proceso de alquiler sea simple y seguro. Explora nuestra colección y únete a la revolución de la moda sostenible.</p>
    `
  },
  "5": {
    titulo: "Guía para cuidar las prendas alquiladas",
    resumen: "Consejos prácticos para mantener en perfecto estado la ropa que alquilas y asegurar una buena experiencia.",
    imagen: "https://images.unsplash.com/photo-1489396160836-2c99c977e970",
    fecha: "12 Marzo 2024",
    tiempoLectura: "4 min",
    autor: "David López",
    categoria: "Guías y Consejos",
    contenido: `
      <h2>La Importancia del Cuidado Adecuado</h2>
      <p>Mantener las prendas alquiladas en buen estado no solo es una responsabilidad, sino que también asegura una mejor experiencia para todos los usuarios.</p>

      <h2>Consejos Esenciales</h2>
      <ul>
        <li><strong>Antes de usar:</strong> Revisa la prenda cuidadosamente y reporta cualquier daño previo.</li>
        <li><strong>Durante el uso:</strong> Evita comidas y bebidas que puedan manchar.</li>
        <li><strong>Después del uso:</strong> Sigue las instrucciones de cuidado específicas.</li>
      </ul>

      <h2>Qué Hacer y Qué Evitar</h2>
      <p>No intentes limpiar manchas difíciles por tu cuenta, evita el uso de perfumes directamente sobre la ropa y guarda las prendas adecuadamente.</p>

      <h2>En Caso de Accidentes</h2>
      <p>Si ocurre algún incidente, contacta inmediatamente con el servicio de atención al cliente de Rentalia para recibir orientación profesional.</p>
    `
  },
  "6": {
    titulo: "Los accesorios perfectos para cada ocasión",
    resumen: "Aprende a combinar accesorios con diferentes estilos de ropa para crear looks inolvidables.",
    imagen: "https://images.unsplash.com/photo-1576053139951-78574e306a96",
    fecha: "10 Marzo 2024",
    tiempoLectura: "5 min",
    autor: "Isabel Torres",
    categoria: "Estilo",
    contenido: `
      <h2>El Poder de los Accesorios</h2>
      <p>Los accesorios adecuados pueden transformar completamente un outfit, añadiendo personalidad y estilo a cualquier conjunto.</p>

      <h2>Guía por Ocasión</h2>
      <ul>
        <li><strong>Eventos formales:</strong> Joyas elegantes y clutches sofisticados.</li>
        <li><strong>Ocasiones casuales:</strong> Accesorios versátiles y bolsos prácticos.</li>
        <li><strong>Bodas y celebraciones:</strong> Complementos que añadan brillo sin exceso.</li>
      </ul>

      <h2>Tendencias Actuales</h2>
      <p>Este año, los accesorios maximalistas y las piezas statement son protagonistas, pero siempre manteniendo el equilibrio con el resto del look.</p>

      <h2>Consejos de Combinación</h2>
      <p>Aprende a mezclar y combinar accesorios para crear looks únicos sin sobrecargar el conjunto. En Rentalia, encontrarás una amplia selección de accesorios para complementar cualquier outfit.</p>
    `
  }
};

export default function BlogArticlePage() {
  const params = useParams();
  const articleId = params.id as string;
  const article = blogArticles[articleId];

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">Artículo no encontrado</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                El artículo que buscas no existe o ha sido eliminado.
              </p>
              <Link href="/blog" className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al blog
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Botón Volver */}
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>

          {/* Cabecera del artículo */}
          <div className="mb-8">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm mb-4">
              {article.categoria}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {article.titulo}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Por {article.autor}</span>
              </div>
              <div className="flex items-center space-x-1">
                <CalendarDays className="h-4 w-4" />
                <span>{article.fecha}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.tiempoLectura} de lectura</span>
              </div>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.imagen}
              alt={article.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          {/* Contenido del artículo */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.contenido }}
          />
        </article>
      </main>
    </div>
  );
} 