'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Home,
  MessageSquare,
  Settings,
  HelpCircle,
  Building2,
  FolderKanban,
  Users,
  Mail,
  Star,
  BarChart2,
  CreditCard,
  ChevronDown,
  ChevronRight,
  Bell,
  Puzzle,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";

export default function CompanySidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
        <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="/company" tooltip="Dashboard" isActive={pathname === '/company'}>
                  <Home />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Criar novo projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos ativos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos em análise</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos finalizados</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos cancelados</SidebarMenuSubButton></SidebarMenuSubItem>
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
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Vídeo</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Imagem</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Motion / audiovisual</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Outros</SidebarMenuSubButton></SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Por status</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Aberto</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Em contratação</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Fechado</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Pausado</SidebarMenuSubButton></SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Profissionais">
                      <Users />
                      <span>Profissionais</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Buscar profissionais</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Profissionais salvos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Profissionais convidados</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Profissionais contratados</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Filtrar por</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Categoria</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Ferramentas / stack</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Avaliação</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Disponibilidade</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Localização</SidebarMenuSubButton></SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Candidaturas">
                      <Mail />
                      <span>Candidaturas</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Recebidas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Em análise</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Aprovadas</SidebarMenuSubButton></SidebarMenuSubItem>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="#">Recusadas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Arquivadas</SidebarMenuSubButton></SidebarMenuSubItem>
                       <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Organizar por</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Profissional</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Data</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Status</SidebarMenuSubButton></SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Mensagens">
                      <MessageSquare />
                      <span>Mensagens</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Conversas ativas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Arquivadas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Não lidas</SidebarMenuSubButton></SidebarMenuSubItem>
                       <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Mensagens por</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Profissional</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Data</SidebarMenuSubButton></SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Avaliações">
                      <Star />
                      <span>Avaliações</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="#">Avaliar profissional</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Avaliações realizadas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Feedbacks pendentes</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

               <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Relatórios">
                      <BarChart2 />
                      <span>Relatórios</span>
                       <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="#">Contratações</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Tempo médio de contratação</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Engajamento</SidebarMenuSubButton></SidebarMenuSubItem>
                       <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Relatórios por</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Período</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Categoria</SidebarMenuSubButton></SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Página da Empresa">
                      <Building2 />
                      <span>Página da Empresa</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="#">Visualizar página pública</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Editar informações</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Logo e branding</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Stack / tecnologias</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Plano & Faturamento">
                      <CreditCard />
                      <span>Plano & Faturamento</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/upgrade">Plano atual</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Limites do plano</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Comparar planos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Histórico de pagamentos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/upgrade">Atualizar plano</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
               <SidebarMenuItem>
                <SidebarMenuButton href="/integrations" tooltip="Integrações">
                  <Puzzle />
                  <span>Integrações</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

               <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Configurações">
                      <Settings />
                      <span>Configurações</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Dados da empresa</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Usuários da empresa</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Permissões</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Segurança</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Preferências</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Encerrar conta</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Ajuda & Suporte">
                      <HelpCircle />
                      <span>Ajuda & Suporte</span>
                       <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Central de ajuda</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Abrir chamado</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">WhatsApp de suporte</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Termos e políticas</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContent>
    </Sidebar>
  );
}
