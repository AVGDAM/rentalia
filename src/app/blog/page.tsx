"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, User } from "lucide-react";

// Datos de ejemplo para el blog
const blogPosts = [
  {
    id: "1",
    titulo: "Cómo elegir el vestido perfecto para una boda",
    resumen: "Guía completa con consejos expertos para encontrar el vestido ideal según tu estilo y el tipo de ceremonia.",
    imagen: "https://images.unsplash.com/photo-1594625329127-a226a32ab9ba",
    fecha: "22 Marzo 2024",
    tiempoLectura: "5 min",
    autor: "María García",
    categoria: "Guías y Consejos"
  },
  {
    id: "2",
    titulo: "Tendencias de moda para eventos formales 2024",
    resumen: "Descubre las últimas tendencias en moda formal y cómo incorporarlas a tu estilo para destacar en cualquier evento.",
    imagen: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    fecha: "20 Marzo 2024",
    tiempoLectura: "7 min",
    autor: "Carlos Ruiz",
    categoria: "Tendencias"
  },
  {
    id: "3",
    titulo: "Los mejores lugares para sesiones fotográficas en Madrid",
    resumen: "Una guía de las locaciones más fotogénicas de Madrid para tus fotos con ropa alquilada.",
    imagen: "https://images.unsplash.com/photo-1543783207-ec64e4d95325",
    fecha: "18 Marzo 2024",
    tiempoLectura: "6 min",
    autor: "Laura Sánchez",
    categoria: "Fotografía"
  },
  {
    id: "4",
    titulo: "Alquiler de ropa: La revolución de la moda sostenible",
    resumen: "Cómo el alquiler de ropa está cambiando la industria de la moda y ayudando al medio ambiente.",
    imagen: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    fecha: "15 Marzo 2024",
    tiempoLectura: "8 min",
    autor: "Ana Martínez",
    categoria: "Sostenibilidad"
  },
  {
    id: "5",
    titulo: "Guía para cuidar las prendas alquiladas",
    resumen: "Consejos prácticos para mantener en perfecto estado la ropa que alquilas y asegurar una buena experiencia.",
    imagen: "https://images.unsplash.com/photo-1489396160836-2c99c977e970",
    fecha: "12 Marzo 2024",
    tiempoLectura: "4 min",
    autor: "David López",
    categoria: "Guías y Consejos"
  },
  {
    id: "6",
    titulo: "Los accesorios perfectos para cada ocasión",
    resumen: "Aprende a combinar accesorios con diferentes estilos de ropa para crear looks inolvidables.",
    imagen: "https://images.unsplash.com/photo-1576053139951-78574e306a96",
    fecha: "10 Marzo 2024",
    tiempoLectura: "5 min",
    autor: "Isabel Torres",
    categoria: "Estilo"
  }
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Encabezado del Blog */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Blog de Rentalia
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Descubre las últimas tendencias, consejos y noticias sobre moda y alquiler de ropa
            </p>
          </div>

          {/* Grid de Posts */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm">
                      {post.categoria}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl">{post.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {post.resumen}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.fecha}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.tiempoLectura}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="h-4 w-4" />
                      <span>Por {post.autor}</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 