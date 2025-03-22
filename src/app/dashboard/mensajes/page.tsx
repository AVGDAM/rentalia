import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MensajesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Mensajes</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Conversaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-4 hover:bg-muted/50 rounded-lg cursor-pointer"
                >
                  <Avatar>
                    <AvatarImage src={`https://avatar.vercel.sh/${i}`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Carlos Navarro
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ¿Está disponible el vestido para este fin de semana?
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Hace 2h
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src="https://avatar.vercel.sh/1" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Carlos Navarro
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ¿Está disponible el vestido para este fin de semana?
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src="https://avatar.vercel.sh/2" />
                  <AvatarFallback>TU</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Tú
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sí, está disponible. ¿Qué día lo necesitas?
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Enviar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 