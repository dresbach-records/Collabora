import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Meu Perfil</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Visitas: <span className="font-bold text-foreground text-lg">328</span></p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" asChild><Link href="#">Editar Perfil</Link></Button>
            <Button asChild><Link href="#">Ver Portfólio</Link></Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Minhas Candidaturas</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">4</p>
              <p className="text-sm text-muted-foreground">Enviadas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Em Análise</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1</p>
              <p className="text-sm text-muted-foreground">Convite</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Ver Candidaturas</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mensagens</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Novas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Conversas</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Abrir Chat</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Minhas Oportunidades</CardTitle>
        </CardHeader>
        <CardContent>
            <Tabs defaultValue="andamento">
                <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
                    <TabsTrigger value="andamento">Em Andamento</TabsTrigger>
                    <TabsTrigger value="analise">Em Análise</TabsTrigger>
                    <TabsTrigger value="finalizadas">Finalizadas</TabsTrigger>
                </TabsList>
                <TabsContent value="andamento" className="pt-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 gap-4">
                        <div>
                            <h3 className="font-semibold text-lg">Design de App Mobile</h3>
                            <p className="text-sm text-muted-foreground">InovaTech Studio</p>
                            <Link href="#" className="text-xs text-muted-foreground hover:text-primary mt-1 inline-block">Atualizado há 1 dia &gt;</Link>
                        </div>
                        <Button variant="outline">Ver Detalhes &gt;</Button>
                    </div>
                </TabsContent>
                 <TabsContent value="analise">
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">Nenhuma oportunidade em análise.</p>
                    </div>
                </TabsContent>
                 <TabsContent value="finalizadas">
                     <div className="text-center py-8">
                        <p className="text-muted-foreground">Nenhuma oportunidade finalizada.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Convites de Empresas</CardTitle>
                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 gap-4">
                    <div>
                        <h3 className="font-semibold">NeoMedia Agency</h3>
                        <p className="text-sm text-muted-foreground">Projeto: Edição de Vídeo</p>
                    </div>
                    <div className="flex gap-2 self-end sm:self-center">
                        <Button>Aceitar</Button>
                        <Button variant="outline">Recusar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Dica de Sucesso</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Complete seu perfil para receber 3x mais convites</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Completar Perfil &gt;</Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}