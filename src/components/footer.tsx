import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Rentalia</h3>
            <p className="text-sm text-muted-foreground">
              La plataforma líder para alquilar ropa entre usuarios. Conectamos a personas que quieren alquilar con propietarios que quieren ganar dinero extra.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/soluciones" className="text-sm text-muted-foreground hover:text-foreground">
                  Soluciones
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-sm text-muted-foreground hover:text-foreground">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos" className="text-sm text-muted-foreground hover:text-foreground">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto y Redes */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contacto</h4>
              <p className="text-sm text-muted-foreground">
                Email: info@rentalia.com<br />
                Tel: +34 900 123 456
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Rentalia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 