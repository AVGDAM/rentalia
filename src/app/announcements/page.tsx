"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Info } from "lucide-react";
import { Navbar } from "@/components/navbar";

interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'update' | 'new' | 'important';
  isRead: boolean;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "Nueva funcionalidad: Tema Oscuro",
    description: "Ahora puedes cambiar entre tema claro y oscuro según tus preferencias. Encuentra el botón en la barra de navegación.",
    date: "Hace 2 días",
    type: 'new',
    isRead: false
  },
  {
    id: 2,
    title: "Mejoras en el Dashboard",
    description: "Hemos actualizado el diseño del dashboard para una mejor experiencia de usuario. Incluye nuevo menú lateral y mejor organización.",
    date: "Hace 3 días",
    type: 'update',
    isRead: false
  },
  {
    id: 3,
    title: "Próximamente: Sistema de Mensajería",
    description: "Estamos trabajando en un nuevo sistema de mensajería que permitirá una mejor comunicación entre usuarios.",
    date: "Hace 1 semana",
    type: 'important',
    isRead: true
  }
];

export default function AnnouncementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabecera */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Anuncios
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Mantente al día con las últimas actualizaciones y novedades
              </p>
            </div>
            <Bell className="h-6 w-6 text-gray-400 dark:text-gray-500" />
          </div>

          {/* Lista de anuncios */}
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card 
                key={announcement.id}
                className={`p-6 transition-all duration-200 hover:shadow-md ${
                  announcement.isRead 
                    ? 'bg-white dark:bg-gray-800' 
                    : 'bg-white dark:bg-gray-800 border-l-4 border-blue-500 dark:border-blue-400'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {announcement.title}
                      </h2>
                      <Badge 
                        variant={
                          announcement.type === 'new' 
                            ? 'default' 
                            : announcement.type === 'update' 
                              ? 'secondary' 
                              : 'destructive'
                        }
                        className="text-xs"
                      >
                        {announcement.type === 'new' && 'Nuevo'}
                        {announcement.type === 'update' && 'Actualización'}
                        {announcement.type === 'important' && 'Importante'}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {announcement.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Info className="h-4 w-4" />
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 