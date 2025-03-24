"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, PanelLeftOpen } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardMenuOpen, setIsDashboardMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  const dashboardLinks = [
    { href: '/dashboard', label: 'Resumen' },
    { href: '/dashboard/articulos', label: 'Mis Artículos' },
    { href: '/dashboard/mensajes', label: 'Mensajes' },
    { href: '/dashboard/ganancias', label: 'Ganancias' }
  ];

  const mainLinks = [
    { href: '/prendas', label: 'Prendas' },
    { href: '/soluciones', label: 'Soluciones' },
    { href: '/precios', label: 'Precios' },
    { href: '/blog', label: 'Blog' },
    { href: '/dashboard', label: 'Dashboard (Dev)' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              {isDashboard && (
                <button
                  onClick={() => setIsDashboardMenuOpen(!isDashboardMenuOpen)}
                  className="md:hidden mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dashboard menu"
                >
                  <PanelLeftOpen className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </button>
              )}
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-bold dark:text-gray-100">Rentalia</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {mainLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="transition-colors hover:text-gray-900/80 dark:hover:text-gray-100/80 text-gray-900/60 dark:text-gray-100/60"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
              <ThemeToggle />
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="outline" size="sm" className="dark:border-gray-800 dark:text-gray-100 dark:hover:bg-gray-800">
                  Iniciar sesión
                </Button>
                <Button size="sm" className="dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
          
          {/* Menú móvil principal */}
          {isMenuOpen && (
            <div className="md:hidden py-2">
              <nav className="flex flex-col space-y-2">
                {mainLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 py-2 space-y-2">
                  <Button variant="outline" size="sm" className="w-full dark:border-gray-800 dark:text-gray-100 dark:hover:bg-gray-800">
                    Iniciar sesión
                  </Button>
                  <Button size="sm" className="w-full dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                    Registrarse
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Menú lateral del Dashboard */}
      {isDashboard && isDashboardMenuOpen && (
        <>
          {/* Overlay para cerrar el menú al hacer clic fuera */}
          <div 
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
            onClick={() => setIsDashboardMenuOpen(false)}
          />
          <div 
            className="fixed left-0 top-14 bottom-0 w-64 border-r border-gray-800 shadow-lg p-4 z-50 transform transition-transform duration-200 ease-in-out overflow-y-auto"
            style={{ backgroundColor: 'oklch(.21 .034 264.665)' }}
          >
            <nav className="flex flex-col space-y-1">
              {dashboardLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-2 rounded-lg transition-colors text-gray-100 ${
                    pathname === link.href 
                      ? 'bg-gray-800 font-medium' 
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
} 