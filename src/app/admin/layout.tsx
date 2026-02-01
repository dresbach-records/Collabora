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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function AdminLayout({
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
             <Link href="/admin" className="flex items-center gap-2">
              <Shield className="w-7 h-7 text-primary" />
              <span className="hidden text-2xl font-bold text-foreground md:inline">Tech Labs</span>
            </Link>
          </div>
          
          <div className="relative hidden flex-1 justify-center md:flex">
            <div className="w-full max-w-lg">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Buscar usuários, empresas, projetos..."
                className="w-full rounded-lg bg-secondary pl-8"
                />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
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
          <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="/admin" tooltip="Dashboard" isActive={pathname === '/admin'}>
                      <Home />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Empresas */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Empresas">
                          <Briefcase />
                          <span>Empresas</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Todas as empresas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Empresas ativas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Empresas pendentes</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Empresas bloqueadas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Gestão</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Aprovar empresa</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Editar dados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Alterar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Bloquear / desbloquear</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Encerrar conta</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Análises</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Empresas por plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Empresas mais ativas</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Taxa de conversão</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Profissionais">
                          <Users />
                          <span>Profissionais</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Todos os profissionais</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Perfis ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Perfis incompletos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Perfis bloqueados</SidebarMenuSubButton></SidebarMenuSubItem>
                           <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Gestão</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Ver perfil</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Ver portfólio</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Editar dados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Bloquear / desbloquear</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Qualidade</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Perfis denunciados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Avaliações negativas</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Perfis verificados</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Projetos">
                          <FolderKanban />
                          <span>Projetos</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Todos os projetos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos encerrados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos denunciados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Moderação</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Revisar projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Aprovar / reprovar</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Encerrar projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Excluir projeto</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Serviços">
                          <Package />
                          <span>Serviços</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Todos os serviços</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Serviços ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Serviços pausados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Serviços denunciados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Controle</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Aprovar serviço</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Editar conteúdo</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Remover serviço</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Mensagens">
                          <MessageSquare />
                          <span>Mensagens</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem><SidebarMenuSubButton href="#">Conversas monitoradas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Mensagens denunciadas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Logs de comunicação</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  {/* Moderação */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Moderação">
                          <Shield />
                          <span>Moderação</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem><SidebarMenuSubButton href="#">Denúncias recebidas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Conteúdo sinalizado</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Usuários reincidentes</SidebarMenuSubButton></SidebarMenuSubItem>
                           <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Ações</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Advertir usuário</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Bloquear temporariamente</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Banimento permanente</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Planos & Pagamentos">
                          <CreditCard />
                          <span>Planos & Pagamentos</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Visão geral financeira</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Assinaturas ativas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Receita mensal (MRR)</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Histórico de pagamentos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Planos</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Criar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Editar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Ativar / desativar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Financeiro</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Relatórios</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Exportar dados</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Integração de pagamentos</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Estatísticas & BI">
                          <BarChart />
                          <span>Estatísticas & BI</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Crescimento da plataforma</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Novos usuários</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos criados</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Conversões Free → Pago</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Churn</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Filtros</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por período</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por tipo de usuário</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por plano</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Sistema">
                          <Settings />
                          <span>Sistema</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Configurações gerais</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Categorias e tags</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Regras de negócio</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Limites de plano</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Feature flags</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem asChild>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="justify-between">
                                  <span>Infraestrutura</span>
                                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="ml-4">
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Status de serviços</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Logs do sistema</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Auditoria</SidebarMenuSubButton></SidebarMenuSubItem>
                                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Backups</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <SidebarMenuButton tooltip="Administradores">
                          <UserCog />
                          <span>Administradores</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Usuários admin</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Criar administrador</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Permissões</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Logs de acesso</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                   {/* Suporte & Operações */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Suporte & Operações">
                          <HelpCircle />
                          <span>Suporte & Operações</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem><SidebarMenuSubButton href="#">Chamados abertos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Histórico de suporte</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">SLA</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Contato interno</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  {/* Legal & Compliance */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Legal & Compliance">
                          <Gavel />
                          <span>Legal & Compliance</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Termos de uso</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Política de privacidade</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">LGPD / GDPR</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Logs legais</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                   {/* Notificações do Sistema */}
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Notificações do Sistema">
                          <Bell />
                          <span>Notificações do Sistema</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Alertas críticos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Incidentes</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="#">Atualizações de sistema</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
             <SidebarContent className="mt-auto">
                 <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/" tooltip="Sair">
                            <LogOut />
                            <span>Sair</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                 </SidebarMenu>
             </SidebarContent>
          </Sidebar>
          <SidebarInset className="bg-secondary p-0 flex flex-col">
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              {children}
            </div>
            <footer className="shrink-0 border-t bg-background px-6 py-3 text-xs text-muted-foreground">
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
