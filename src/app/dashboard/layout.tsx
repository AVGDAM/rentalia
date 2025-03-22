import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-100/40 lg:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="flex h-[60px] items-center border-b px-6">
              <span className="font-semibold">Mi Cuenta</span>
            </div>
            <nav className="flex-1 space-y-1">
              <Link href="/dashboard">
                <Button variant="ghost" className="w-full justify-start">
                  Resumen
                </Button>
              </Link>
              <Link href="/dashboard/articulos">
                <Button variant="ghost" className="w-full justify-start">
                  Mis Artículos
                </Button>
              </Link>
              <Link href="/dashboard/mensajes">
                <Button variant="ghost" className="w-full justify-start">
                  Mensajes
                </Button>
              </Link>
              <Link href="/dashboard/ganancias">
                <Button variant="ghost" className="w-full justify-start">
                  Ganancias
                </Button>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-5xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 