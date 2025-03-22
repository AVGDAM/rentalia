import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Rentalia</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/prendas" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Prendas
            </Link>
            <Link href="/soluciones" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Soluciones
            </Link>
            <Link href="/precios" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Precios
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Blog
            </Link>
            {/* Botón temporal para desarrollo */}
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Dashboard (Dev)
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="outline" size="sm">
            Iniciar sesión
          </Button>
          <Button size="sm">Registrarse</Button>
        </div>
      </div>
    </header>
  );
} 