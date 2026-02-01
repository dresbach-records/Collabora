import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Briefcase, CheckCircle, Clock, Mail, MoreHorizontal, Send, Square, User, UserCheck, UserX } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recommendedProfessionals = [
  {
    name: 'João Silva',
    title: 'UI/UX Designer',
    avatarId: 'testimonial-1',
    skills: ['Figma', 'Adobe XD', 'Sketch']
  },
  {
    name: 'Amanda Costa',
    title: 'Desenvolvedora Front-end',
    avatarId: 'profile-avatar-1',
    skills: ['React', 'TypeScript', 'Tailwind']
  },
  {
    name: 'Lucas Oliveira',
    title: 'Motion Designer',
    avatarId: 'testimonial-3',
    skills: ['After Effects', 'Cinema 4D']
  }
]

export default function CompanyDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
        <div>
            <h1 className="text-2xl font-bold">Dashboard da Empresa</h1>
            <p className="text-muted-foreground">Gerencie seus projetos e encontre talentos na Collabora.</p>
        </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Meus Projetos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Projetos Ativos:</span>
                <span className="font-bold text-lg">1</span>
            </div>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Conclusões Recentes</span>
                </div>
                <span className="font-bold text-lg">2</span>
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button>Publicar Projeto</Button>
            <Button variant="outline">Gerenciar Projetos</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Candidaturas</CardTitle>
            <CheckCircle className="w-5 h-5 text-primary"/>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Candidatos:</span>
                <span className="font-bold text-3xl">5</span>
            </div>
             <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Em Análise:</span>
                <span className="font-bold text-3xl">2</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Ver Candidatos</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Convites Enviados</CardTitle>
            <Send className="w-5 h-5 text-primary"/>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Enviados:</span>
                <span className="font-bold text-3xl">3</span>
            </div>
             <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Aceito:</span>
                <span className="font-bold text-3xl">1</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Ver Convites</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Meus Projetos</CardTitle>
                    <Tabs defaultValue="ativos" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mt-2 md:w-auto md:inline-flex">
                            <TabsTrigger value="ativos">Ativos</TabsTrigger>
                            <TabsTrigger value="em-analise">Em Análise</TabsTrigger>
                            <TabsTrigger value="finalizados">Finalizados</TabsTrigger>
                        </TabsList>
                        <TabsContent value="ativos" className="pt-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 gap-4">
                                <div>
                                    <h3 className="font-semibold text-lg">Landing Page para Startup</h3>
                                    <p className="text-sm text-primary font-medium">Projeto Teste</p>
                                    <div className="text-xs text-muted-foreground mt-2 flex items-center gap-4">
                                        <span>Candidatos: 8</span>
                                        <span>Em Análise</span>
                                        <span>Atualizado há 1 dia</span>
                                    </div>
                                </div>
                                <Button>Gerenciar &gt;</Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="em-analise">
                            <div className="text-center py-8">
                                <p className="text-muted-foreground">Nenhum projeto em análise.</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="finalizados">
                            <div className="text-center py-8">
                                <p className="text-muted-foreground">Nenhum projeto finalizado.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardHeader>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Profissionais Recomendados</CardTitle>
                    <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recommendedProfessionals.map(prof => {
                        const avatarImage = PlaceHolderImages.find(p => p.id === prof.avatarId);
                        return (
                            <Card key={prof.name} className="p-4">
                                <div className="flex flex-col items-center text-center">
                                    <Avatar className="w-16 h-16 mb-2">
                                        {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={prof.name} data-ai-hint={avatarImage.imageHint} />}
                                        <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <p className="font-bold">{prof.name}</p>
                                    <p className="text-xs text-muted-foreground">{prof.title}</p>
                                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                                        {prof.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                                    </div>
                                </div>
                                <Button className="w-full mt-4">Convidar para Projeto</Button>
                            </Card>
                        )
                    })}
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Resumo de Atividades</CardTitle>
                    <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <Square className="w-5 h-5 mt-1 text-muted-foreground"/>
                        <div>
                            <p className="text-sm">Pedro Martins declinou seu convite</p>
                            <p className="text-xs text-muted-foreground">há 3 horas</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <User className="w-5 h-5 mt-1 text-muted-foreground"/>
                        <div>
                            <p className="text-sm">Recebida candidatura de Gabriela Lima</p>
                            <p className="text-xs text-muted-foreground">há 5 horas</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 mt-1 text-muted-foreground"/>
                        <div>
                            <p className="text-sm">Convite enviado para Lucas Oliveira</p>
                            <p className="text-xs text-muted-foreground">Ontem</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 mt-1 text-muted-foreground"/>
                        <div>
                            <p className="text-sm">Projeto Landing Page para Startup</p>
                            <p className="text-xs text-muted-foreground">2 dias atrás</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                    <CardTitle>Plano Free</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">Limite: 1 projeto ativo / vez</p>
                </CardContent>
                <CardFooter>
                    <Button variant="secondary" className="w-full">Desbloquear mais Projetos &gt;</Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
