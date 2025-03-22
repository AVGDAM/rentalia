"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Calendar, MapPin, Clock, Shield, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, use } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

interface Resena {
  usuario: string;
  avatar: string;
  calificacion: number;
  comentario: string;
  fecha: string;
}

interface Propietario {
  nombre: string;
  avatar: string;
  calificacion: number;
  reseñas: number;
  miembroDesde: string;
  ubicacion: string;
  articulos: number;
  tiempoRespuesta: string;
}

interface Articulo {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  precioPor: string;
  fotos: string[];
  caracteristicas: string[];
  disponibilidad: {
    proximaDisponible: string;
    tiempoEntrega: string;
  };
  propietario: Propietario;
  reseñas: Resena[];
}

export default function ArticuloPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Datos de ejemplo - En una aplicación real, estos vendrían de una API o base de datos
  const articulo: Articulo = {
    id: id,
    titulo: "Vestido de Fiesta Elegante",
    descripcion: "Hermoso vestido de fiesta en color negro con detalles en dorado. Perfecto para ocasiones especiales como bodas, galas o eventos formales. El vestido está en excelente estado y ha sido usado solo dos veces.",
    precio: 50,
    precioPor: "día",
    fotos: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
    ],
    caracteristicas: [
      "Color: Negro con detalles dorados",
      "Talla: M",
      "Material: Seda y encaje",
      "Estado: Como nuevo",
      "Limpieza: Profesional",
    ],
    disponibilidad: {
      proximaDisponible: "2024-03-25",
      tiempoEntrega: "24-48h",
    },
    propietario: {
      nombre: "María García",
      avatar: "https://avatar.vercel.sh/1",
      calificacion: 4.8,
      reseñas: 127,
      miembroDesde: "2023",
      ubicacion: "Madrid, España",
      articulos: 12,
      tiempoRespuesta: "1h",
    },
    reseñas: [
      {
        usuario: "Ana Martínez",
        avatar: "https://avatar.vercel.sh/2",
        calificacion: 5,
        comentario: "Excelente servicio. El vestido era exactamente como se veía en las fotos y María fue muy amable durante todo el proceso.",
        fecha: "Hace 2 semanas",
      },
      {
        usuario: "Carlos Ruiz",
        avatar: "https://avatar.vercel.sh/3",
        calificacion: 4,
        comentario: "Muy buena experiencia. La entrega fue puntual y el artículo estaba en perfectas condiciones.",
        fecha: "Hace 1 mes",
      },
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % articulo.fotos.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + articulo.fotos.length) % articulo.fotos.length);
  };

  const calcularTotal = () => {
    if (!selectedRange?.from || !selectedRange?.to) return articulo.precio + 100;
    const dias = Math.ceil((selectedRange.to.getTime() - selectedRange.from.getTime()) / (1000 * 60 * 60 * 24));
    return (articulo.precio * dias) + 100;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna izquierda: Imágenes e información principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Galería de fotos */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={articulo.fotos[currentImageIndex]}
                    alt={`${articulo.titulo} ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {articulo.fotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        currentImageIndex === index ? "bg-primary" : "bg-gray-300"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Información principal */}
              <div>
                <h1 className="text-3xl font-bold mb-4">{articulo.titulo}</h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    <span>{articulo.propietario.calificacion}</span>
                    <span className="ml-1">({articulo.propietario.reseñas} reseñas)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{articulo.propietario.ubicacion}</span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">Descripción</h2>
                <p className="text-muted-foreground">{articulo.descripcion}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Características</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {articulo.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="mr-2">•</span>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Reseñas</h2>
                <div className="space-y-6">
                  {articulo.reseñas.map((resena, index) => (
                    <div key={index} className="border-b pb-6 last:border-0">
                      <div className="flex items-center space-x-4 mb-2">
                        <Avatar>
                          <AvatarImage src={resena.avatar} />
                          <AvatarFallback>{resena.usuario[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{resena.usuario}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-4 w-4 mr-1 text-yellow-400" />
                            <span>{resena.calificacion}</span>
                            <span className="mx-2">•</span>
                            <span>{resena.fecha}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{resena.comentario}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha: Panel lateral */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">€{articulo.precio}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Precio por {articulo.precioPor}</span>
                    <span className="font-medium">€{articulo.precio}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Depósito de seguridad</span>
                    <span className="font-medium">€100</span>
                  </div>

                  {selectedRange?.from && selectedRange?.to && (
                    <div className="space-y-2 border rounded-lg p-4 bg-muted/50">
                      <div className="flex items-center justify-between text-sm">
                        <span>Desde:</span>
                        <span className="font-medium">{format(selectedRange.from, "d 'de' MMMM", { locale: es })}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Hasta:</span>
                        <span className="font-medium">{format(selectedRange.to, "d 'de' MMMM", { locale: es })}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm pt-2 border-t">
                        <span className="font-medium">Total:</span>
                        <span className="font-medium">€{calcularTotal()}</span>
                      </div>
                    </div>
                  )}

                  <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="lg">
                        {selectedRange?.from ? "Cambiar fechas" : "Seleccionar fechas"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Selecciona las fechas de alquiler</DialogTitle>
                      </DialogHeader>
                      <div className="py-6">
                        <CalendarComponent
                          mode="range"
                          selected={selectedRange}
                          onSelect={setSelectedRange}
                          locale={es}
                          numberOfMonths={1}
                          disabled={(date) => date < new Date()}
                          fromDate={new Date()}
                          showOutsideDays={false}
                          fixedWeeks
                          ISOWeek
                        />
                      </div>
                      <DialogFooter>
                        <Button
                          onClick={() => setIsCalendarOpen(false)}
                          className="w-full"
                          disabled={!selectedRange?.from || !selectedRange?.to}
                        >
                          Confirmar fechas
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {selectedRange?.from && selectedRange?.to && (
                    <Button className="w-full" size="lg" variant="default">
                      Alquilar Ahora
                    </Button>
                  )}

                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>Pago seguro con</span>
                    <CreditCard className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Información de disponibilidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Próxima disponibilidad: {articulo.disponibilidad.proximaDisponible}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Tiempo de entrega: {articulo.disponibilidad.tiempoEntrega}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Información del propietario</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src={articulo.propietario.avatar} />
                      <AvatarFallback>{articulo.propietario.nombre[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{articulo.propietario.nombre}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        <span>{articulo.propietario.calificacion}</span>
                        <span className="mx-2">•</span>
                        <span>{articulo.propietario.reseñas} reseñas</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Miembro desde {articulo.propietario.miembroDesde}</p>
                    <p>{articulo.propietario.articulos} artículos publicados</p>
                    <p>Tiempo de respuesta: {articulo.propietario.tiempoRespuesta}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 