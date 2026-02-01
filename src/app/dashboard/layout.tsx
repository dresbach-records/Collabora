
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Home, 
  User, 
  Briefcase, 
  Lightbulb, 
  MessageSquare, 
  Settings, 
  Zap, 
  Search, 
  Bell, 
  HelpCircle, 
  Users, 
  Lock,
  ChevronDown,
  ChevronRight,
  Mail,
  Star,
  Users2,
  BarChart2,
  CreditCard,
  Image as ImageIcon
} from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { users } from "@/lib/data";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";


const professionalUser = users.find(u => u.role === 'PROFESSIONAL');
const userAvatar = professionalUser ? PlaceHolderImages.find(p => p.id === professionalUser.avatarUrlId) : null;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-background">
        <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden" />
            <Link href="/dashboard" className="flex items-center gap-2">
              <Image src="/iconecolabora.ico" alt="Collabora icon" width={28} height={28} />
              <span className="hidden text-2xl font-bold text-foreground md:inline">Collabora</span>
            </Link>
          </div>
          
          <div className="relative hidden flex-1 justify-center md:flex">
            <div className="w-full max-w-lg">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Buscar projetos ou empresas"
                className="w-full rounded-lg bg-secondary pl-8"
                />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-4 sm:flex">
                <Badge variant="outline" className="border-destructive text-destructive">
                    <Lock className="mr-1.5 h-3 w-3" />
                    Plano Free
                </Badge>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="#">
                        <Zap className="mr-1.5 h-4 w-4" />
                        Atualizar plano
                    </Link>
                </Button>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificações</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Ajuda</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    {userAvatar && professionalUser && <AvatarImage src={userAvatar.imageUrl} alt={professionalUser.username} />}
                    <AvatarFallback>{professionalUser?.username.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                 <DropdownMenuItem asChild>
                  <Link href="/">Sair</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="relative flex flex-1 overflow-hidden">
          <Sidebar>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="/dashboard" tooltip="Dashboard" isActive={pathname === '/dashboard'}>
                      <Home />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Explorar Oportunidades">
                          <Lightbulb />
                          <span>Explorar Oportunidades</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos abertos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos urgentes</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos em destaque</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Por categoria</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Desenvolvimento</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Design</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Edição de vídeo</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Edição de imagem</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Meus Serviços">
                          <Briefcase />
                          <span>Meus Serviços</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Publicar serviço</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Serviços ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Serviços pausados</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Minhas Candidaturas">
                          <Users />
                          <span>Minhas Candidaturas</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Enviadas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Em análise</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Aceitas</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                   <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Convites de Empresas">
                          <Mail />
                          <span>Convites de Empresas</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Novos convites</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Convites aceitos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Convites recusados</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton href="/dashboard/messages" tooltip="Mensagens">
                      <MessageSquare />
                      <span>Mensagens</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                   <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Portfólio">
                          <ImageIcon />
                          <span>Portfólio</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos publicados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Rascunhos</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton href={`/profile/${professionalUser?.username}`} tooltip="Meu Perfil">
                          <User />
                          <span>Meu Perfil</span>
                           <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Dados profissionais</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Especialidades</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Disponibilidade</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Avaliações">
                      <Star />
                      <span>Avaliações</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Comunidades">
                      <Users2 />
                      <span>Comunidades</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                   <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Estatísticas">
                      <BarChart2 />
                      <span>Estatísticas</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Notificações">
                      <Bell />
                      <span>Notificações</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Plano & Benefícios">
                      <CreditCard />
                      <span>Plano & Benefícios</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton href="/dashboard/settings" tooltip="Configurações">
                      <Settings />
                      <span>Configurações</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                   <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Ajuda & Suporte">
                      <HelpCircle />
                      <span>Ajuda & Suporte</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="bg-secondary p-0">
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              {children}
            </div>
          </SidebarInset>
        </div>

        <footer className="shrink-0 border-t bg-background px-6 py-3 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>© Collabora — Todos os direitos reservados</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-foreground">Termos de Uso</Link>
              <Link href="#" className="hover:text-foreground">Política de Privacidade</Link>
              <Link href="#" className="hover:text-foreground">Suporte</Link>
            </div>
          </div>
        </footer>
      </div>
    </SidebarProvider>
  );
}
