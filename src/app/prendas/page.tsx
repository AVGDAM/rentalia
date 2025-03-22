"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Datos de ejemplo - En una aplicación real, estos vendrían de una API
const prendas = [
  {
    id: "1",
    titulo: "Vestido de Fiesta Elegante",
    descripcion: "Hermoso vestido de fiesta en color negro con detalles en dorado.",
    precio: 50,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
    categoria: "vestidos",
    propietario: {
      nombre: "María García",
      calificacion: 4.8,
      reseñas: 127,
      ubicacion: "Madrid"
    }
  },
  {
    id: "2",
    titulo: "Traje de Gala Azul Marino",
    descripcion: "Elegante traje de gala perfecto para eventos formales.",
    precio: 75,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660",
    categoria: "trajes",
    propietario: {
      nombre: "Carlos Ruiz",
      calificacion: 4.9,
      reseñas: 89,
      ubicacion: "Barcelona"
    }
  },
  {
    id: "3",
    titulo: "Vestido de Novia Vintage",
    descripcion: "Precioso vestido de novia estilo vintage con encaje.",
    precio: 200,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1594938374182-f8830d81c801",
    categoria: "vestidos",
    propietario: {
      nombre: "Ana Martínez",
      calificacion: 5.0,
      reseñas: 45,
      ubicacion: "Valencia"
    }
  },
  {
    id: "4",
    titulo: "Esmoquin Negro Clásico",
    descripcion: "Esmoquin negro clásico para ocasiones especiales, incluye pajarita.",
    precio: 80,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e",
    categoria: "trajes",
    propietario: {
      nombre: "David López",
      calificacion: 4.7,
      reseñas: 92,
      ubicacion: "Sevilla"
    }
  },
  {
    id: "5",
    titulo: "Vestido Cóctel Rojo",
    descripcion: "Elegante vestido rojo para cócteles y eventos semi-formales.",
    precio: 45,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    categoria: "vestidos",
    propietario: {
      nombre: "Laura Sánchez",
      calificacion: 4.6,
      reseñas: 73,
      ubicacion: "Málaga"
    }
  },
  {
    id: "6",
    titulo: "Traje Chaqueta Mujer",
    descripcion: "Conjunto profesional para mujer, ideal para entrevistas y trabajo.",
    precio: 60,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1548454782-15b189d129ab",
    categoria: "trajes",
    propietario: {
      nombre: "Isabel Torres",
      calificacion: 4.9,
      reseñas: 108,
      ubicacion: "Bilbao"
    }
  },
  {
    id: "7",
    titulo: "Vestido de Graduación",
    descripcion: "Vestido largo para graduación con detalles brillantes.",
    precio: 90,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1583241475880-083f84372725",
    categoria: "vestidos",
    propietario: {
      nombre: "Carmen Ruiz",
      calificacion: 4.8,
      reseñas: 65,
      ubicacion: "Valencia"
    }
  },
  {
    id: "8",
    titulo: "Traje Ejecutivo Gris",
    descripcion: "Traje ejecutivo gris de corte moderno para reuniones importantes.",
    precio: 70,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660",
    categoria: "trajes",
    propietario: {
      nombre: "Roberto García",
      calificacion: 4.7,
      reseñas: 82,
      ubicacion: "Madrid"
    }
  },
  {
    id: "9",
    titulo: "Vestido de Dama de Honor",
    descripcion: "Vestido elegante para dama de honor en color pastel.",
    precio: 85,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    categoria: "vestidos",
    propietario: {
      nombre: "Patricia Vega",
      calificacion: 4.9,
      reseñas: 56,
      ubicacion: "Barcelona"
    }
  },
  {
    id: "10",
    titulo: "Traje de Ceremonia Blanco",
    descripcion: "Traje blanco perfecto para ceremonias y eventos especiales.",
    precio: 95,
    precioPor: "día",
    imagen: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e",
    categoria: "trajes",
    propietario: {
      nombre: "Miguel Ángel Pérez",
      calificacion: 5.0,
      reseñas: 94,
      ubicacion: "Sevilla"
    }
  }
];

export default function PrendasPage() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [categoria, setCategoria] = useState("todas");
  const [ordenar, setOrdenar] = useState("");
  const prendasPorPagina = 9;

  // Filtrar prendas basado en la búsqueda y categoría
  const prendasFiltradas = prendas.filter((prenda) => {
    const matchSearch = searchTerm === "" || 
      prenda.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prenda.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchCategoria = categoria === "todas" || prenda.categoria === categoria;
    
    return matchSearch && matchCategoria;
  });

  // Ordenar prendas
  const prendasOrdenadas = [...prendasFiltradas].sort((a, b) => {
    switch (ordenar) {
      case "precio-asc":
        return a.precio - b.precio;
      case "precio-desc":
        return b.precio - a.precio;
      case "calificacion":
        return b.propietario.calificacion - a.propietario.calificacion;
      default:
        return 0;
    }
  });

  const totalPaginas = Math.ceil(prendasOrdenadas.length / prendasPorPagina);
  
  // Obtener las prendas de la página actual
  const getPrendasPaginaActual = () => {
    const inicio = (currentPage - 1) * prendasPorPagina;
    const fin = inicio + prendasPorPagina;
    return prendasOrdenadas.slice(inicio, fin);
  };

  // Actualizar la búsqueda cuando cambie el parámetro de URL
  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtros y búsqueda */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Buscar prendas..."
                className="w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  <SelectItem value="vestidos">Vestidos</SelectItem>
                  <SelectItem value="trajes">Trajes</SelectItem>
                  <SelectItem value="accesorios">Accesorios</SelectItem>
                </SelectContent>
              </Select>
              <Select value={ordenar} onValueChange={setOrdenar}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="calificacion">Mejor Calificación</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Grid de prendas */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getPrendasPaginaActual().map((prenda) => (
              <Link href={`/articulos/${prenda.id}`} key={prenda.id}>
                <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={prenda.imagen}
                      alt={prenda.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{prenda.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {prenda.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{prenda.propietario.calificacion}</span>
                        <span className="text-muted-foreground">
                          ({prenda.propietario.reseñas})
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {prenda.propietario.ubicacion}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="text-lg font-semibold">
                      €{prenda.precio}
                      <span className="text-sm text-muted-foreground">/{prenda.precioPor}</span>
                    </div>
                    <Button size="sm">Ver detalles</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {/* Paginación */}
          {totalPaginas > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
                <Button
                  key={pagina}
                  variant={currentPage === pagina ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pagina)}
                >
                  {pagina}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPaginas))}
                disabled={currentPage === totalPaginas}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 