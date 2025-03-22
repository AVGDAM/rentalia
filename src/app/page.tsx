"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/prendas?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="space-y-4 pb-6 pt-4 md:pb-8 md:pt-6 lg:py-16">
          <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Alquila la ropa que necesitas
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Conectamos a personas que quieren alquilar ropa con propietarios que quieren ganar dinero extra.
            </p>
            <div className="space-x-4 w-full px-4">
              <form onSubmit={handleSearch} className="flex w-full max-w-3xl mx-auto items-center space-x-2 bg-white rounded-lg shadow-lg p-2">
                <Input 
                  type="search" 
                  placeholder="¿Qué tipo de ropa estás buscando?" 
                  className="h-14 text-lg border-0 focus-visible:ring-0 px-6"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button type="submit" size="lg" className="h-14 px-8">
                  Buscar
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mx-auto">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold tracking-tight">
              Prendas Destacadas
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explora nuestra selección de prendas disponibles para alquilar
            </p>
          </div>
          <div className="mx-auto max-w-[64rem] mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Vestido de Fiesta</CardTitle>
                    <CardDescription>Hermoso vestido para ocasiones especiales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-square rounded-md mb-4 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f"
                        alt="Vestido de fiesta"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">€50/día</span>
                      <span className="text-sm text-muted-foreground">4.8 ★</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/articulos/${i}`} className="w-full">
                      <Button className="w-full">Alquilar Ahora</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Regístrate</h3>
                <p className="text-muted-foreground">Crea tu cuenta y comienza a alquilar o a ofrecer tus prendas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Explora</h3>
                <p className="text-muted-foreground">Encuentra las prendas perfectas para tus ocasiones especiales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Alquila</h3>
                <p className="text-muted-foreground">Reserva y disfruta de tus prendas alquiladas</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={`https://avatar.vercel.sh/${i}`} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Carlos Navarro</p>
                        <p className="text-sm text-muted-foreground">Cliente frecuente</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Excelente servicio. He alquilado varias prendas y siempre ha sido una experiencia increíble."
                    </p>
                    <div className="flex mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Planes y Precios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <CardDescription>Perfecto para empezar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">Gratis</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Hasta 5 artículos
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Mensajería básica
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Soporte por email
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comenzar</Button>
                </CardFooter>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Para usuarios frecuentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">€9.99/mes</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Artículos ilimitados
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Mensajería prioritaria
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Soporte prioritario
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Estadísticas avanzadas
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Actualizar a Pro</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Empresa</CardTitle>
                  <CardDescription>Para negocios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">€29.99/mes</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Todo lo de Pro
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      API personalizada
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Soporte dedicado
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Panel de administración
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contactar</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
