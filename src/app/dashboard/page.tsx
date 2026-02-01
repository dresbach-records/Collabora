import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, MessageSquare, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default function ProfessionalDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Meu Perfil</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
                <p className="text-muted-foreground">Visitas:</p>
                <p className="text-3xl font-bold">328</p>
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline">Editar Perfil</Button>
            <Button>Ver Portfólio</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Minhas Candidaturas</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around text-center">
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
            <CardTitle className="text-lg">Mensagens</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around text-center">
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
            <Button variant="outline" className="w-full">Abrir Chat</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <CardTitle>Minhas Oportunidades</CardTitle>
              <Button variant="ghost" size="icon" className="-mt-1 -mr-2"><MoreHorizontal className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="em-andamento" className="w-full">
                <TabsList>
                  <TabsTrigger value="em-andamento">Em Andamento</TabsTrigger>
                  <TabsTrigger value="em-analise">Em Análise</TabsTrigger>
                  <TabsTrigger value="finalizadas">Finalizadas</TabsTrigger>
                </TabsList>
                <TabsContent value="em-andamento" className="pt-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary p-3 rounded-md flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary"/>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base">Design de App Mobile</h3>
                        <p className="text-sm text-muted-foreground">InovaTech Studio</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 sm:items-end sm:justify-between h-full shrink-0">
                        <Button size="sm">Ver Detalhes &gt;</Button>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-primary whitespace-nowrap pt-2">
                            Atualizado há 1 dia &gt;
                        </Link>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="em-analise">
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

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Convites de Empresas</CardTitle>
              <Button variant="ghost" size="icon" className="-mt-1 -mr-2"><MoreHorizontal className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-3 rounded-md flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">NeoMedia Agency</p>
                    <p className="text-sm text-muted-foreground">Projeto: Edição de Vídeo</p>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button>Aceitar</Button>
                  <Button variant="ghost">Recusar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Dica de Sucesso</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-secondary-foreground">Complete seu perfil para receber <span className="font-bold text-primary">3x mais</span> convites</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Completar Perfil &gt;</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
