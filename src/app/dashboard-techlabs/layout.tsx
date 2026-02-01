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
    Users, 
    Briefcase, 
    Settings, 
    BarChart, 
    Shield, 
    LogOut,
    FolderKanban,
    Package,
    MessageSquare,
    CreditCard,
    UserCog,
    HelpCircle,
    Gavel,
    Bell,
    ChevronDown,
    ChevronRight,
    Rocket,
    Search
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function TechLabsDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const adminUserAvatar = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  
  const menuButtonClass = "hover:bg-white/10 text-white/80 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white data-[active=true]:text-white data-[active=true]:bg-white/10";
  const subMenuButtonClass = "text-white/80 hover:text-white hover:bg-white/10 data-[active=true]:text-white data-[active=true]:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white";
  
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-white px-4 sm:px-6">
          <div className="flex items-center gap-3">
              <SidebarTrigger className="md:hidden" />
              <Link href="/dashboard-techlabs" className="flex items-center gap-3">
                <Rocket className="w-7 h-7 text-[#F97316]" />
                <span className="hidden text-2xl font-bold md:inline">Tech Labs</span>
              </Link>
          </div>
          
          <div className="relative hidden flex-1 justify-center md:flex">
             <div className="w-full max-w-lg">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Buscar usuários, empresas, projetos..."
                className="w-full rounded-lg bg-[#F3F4F6] pl-8 border-none"
                />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
             <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificações</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Ajuda</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                     {adminUserAvatar && <AvatarImage src={adminUserAvatar.imageUrl} alt="Admin" />}
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
          <Sidebar className="bg-[#2D323C] text-white border-r-0">
            <SidebarContent className="p-2">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/dashboard-techlabs" 
                        tooltip="Dashboard" 
                        isActive={pathname === '/dashboard-techlabs'}
                        className="bg-[#F97316] text-white hover:bg-[#F97316]/90 data-[active=true]:bg-[#F97316] data-[active=true]:text-white"
                    >
                      <Home />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Empresas */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Empresas" className={menuButtonClass}>
                          <Briefcase />
                          <span>Empresas</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Todas as empresas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Empresas ativas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Empresas pendentes</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Empresas bloqueadas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Gestão</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Aprovar empresa</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Editar dados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Alterar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Bloquear / desbloquear</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Encerrar conta</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Análises</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Empresas por plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Empresas mais ativas</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Taxa de conversão</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
                  {/* Profissionais */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Profissionais" className={menuButtonClass}>
                          <Users />
                          <span>Profissionais</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Todos os profissionais</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Perfis ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Perfis incompletos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Perfis bloqueados</SidebarMenuSubButton></SidebarMenuSubItem>
                           <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Gestão</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Ver perfil</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Ver portfólio</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Editar dados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Bloquear / desbloquear</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Qualidade</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Perfis denunciados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Avaliações negativas</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Perfis verificados</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
                  {/* Projetos */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Projetos" className={menuButtonClass}>
                          <FolderKanban />
                          <span>Projetos</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Todos os projetos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Projetos ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Projetos encerrados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Projetos denunciados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Moderação</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Revisar projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Aprovar / reprovar</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Encerrar projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Excluir projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                   {/* Serviços (Profissionais) */}
                   <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Serviços" className={menuButtonClass}>
                          <Package />
                          <span>Serviços</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Todos os serviços</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Serviços ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Serviços pausados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Serviços denunciados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Controle</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Aprovar serviço</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Editar conteúdo</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Remover serviço</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
                  {/* Mensagens */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Mensagens" className={menuButtonClass}>
                          <MessageSquare />
                          <span>Mensagens</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                           <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Conversas monitoradas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Mensagens denunciadas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Logs de comunicação</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  {/* Moderação */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Moderação" className={menuButtonClass}>
                          <Shield />
                          <span>Moderação</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                           <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Denúncias recebidas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Conteúdo sinalizado</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Usuários reincidentes</SidebarMenuSubButton></SidebarMenuSubItem>
                           <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Ações</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Advertir usuário</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Bloquear temporariamente</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Banimento permanente</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
                  {/* Planos & Pagamentos */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Planos & Pagamentos" className={menuButtonClass}>
                          <CreditCard />
                          <span>Planos & Pagamentos</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Visão geral financeira</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Assinaturas ativas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Receita mensal (MRR)</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Histórico de pagamentos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Planos</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Criar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Editar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Ativar / desativar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Financeiro</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Relatórios</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Exportar dados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Integração de pagamentos</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                   {/* Estatísticas & BI */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Estatísticas & BI" className={menuButtonClass}>
                          <BarChart />
                          <span>Estatísticas & BI</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Crescimento da plataforma</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Novos usuários</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Projetos criados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Conversões Free → Pago</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Churn</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Filtros</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Por período</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Por tipo de usuário</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Por plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  {/* Sistema */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Sistema" className={menuButtonClass}>
                          <Settings />
                          <span>Sistema</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Configurações gerais</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Categorias e tags</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Regras de negócio</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Limites de plano</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Feature flags</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className={`${subMenuButtonClass} justify-between`}>
                                  <span>Infraestrutura</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4 border-l-white/20">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Status de serviços</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Logs do sistema</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Auditoria</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Backups</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
                  {/* Administradores */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Administradores" className={menuButtonClass}>
                          <UserCog />
                          <span>Administradores</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Usuários admin</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Criar administrador</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Permissões</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Logs de acesso</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                   {/* Suporte & Operações */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Suporte & Operações" className={menuButtonClass}>
                          <HelpCircle />
                          <span>Suporte & Operações</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                           <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Chamados abertos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Histórico de suporte</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>SLA</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Contato interno</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  {/* Legal & Compliance */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Legal & Compliance" className={menuButtonClass}>
                          <Gavel />
                          <span>Legal & Compliance</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Termos de uso</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Política de privacidade</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>LGPD / GDPR</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Logs legais</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                   {/* Notificações do Sistema */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Notificações do Sistema" className={menuButtonClass}>
                          <Bell />
                          <span>Notificações do Sistema</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Alertas críticos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Incidentes</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#" className={subMenuButtonClass}>Atualizações de sistema</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
             <SidebarContent className="mt-auto p-2">
                 <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/" tooltip="Sair" className="hover:bg-white/10 text-white/80 hover:text-white">
                            <LogOut />
                            <span>Sair</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                 </SidebarMenu>
             </SidebarContent>
          </Sidebar>
          <SidebarInset className="bg-[#F3F4F6] p-0 flex flex-col">
            <div className="flex-1 overflow-auto p-6">
              {children}
            </div>
            <footer className="shrink-0 border-t bg-white px-6 py-3 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                    <span>© Tech Labs | v1.0.0 (Prod)</span>
                    <Link href="#" className="hover:text-foreground">Documentação interna</Link>
                </div>
            </footer>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
