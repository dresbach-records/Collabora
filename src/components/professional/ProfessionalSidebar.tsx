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
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Home, 
  User, 
  Briefcase, 
  Lightbulb, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  Users as UsersIcon,
  ChevronDown,
  ChevronRight,
  Mail,
  Star,
  Users2,
  BarChart2,
  CreditCard,
  Image as ImageIcon,
  Bell,
  Puzzle,
  LogOut,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { users } from "@/lib/data";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";


const professionalUser = users.find(u => u.role === 'PROFESSIONAL');

export default function ProfessionalSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
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
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Motion / audiovisual</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Outros serviços digitais</SidebarMenuSubButton></SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>
                       <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Por tipo</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Freelance</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Contrato</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Recorrente</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projeto fechado</SidebarMenuSubButton></SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>
                       <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Por orçamento</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Até R$ X</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">R$ X – R$ Y</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Acima de R$ Y</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Serviços finalizados</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Estatísticas do serviço</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Visualizações</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Contatos recebidos</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Conversões</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Desempenho mensal</SidebarMenuSubButton></SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Minhas Candidaturas">
                      <UsersIcon />
                      <span>Minhas Candidaturas</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Enviadas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Em análise</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Aceitas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Recusadas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Canceladas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Histórico</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por empresa</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por data</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por status</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Convites expirados</SidebarMenuSubButton></SidebarMenuSubItem>
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
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Empresa</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Arquivados</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Mídia</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Imagens</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Vídeos</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Links externos</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Ferramentas / stack</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Disponibilidade</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Idiomas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Localização</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Avaliações & Reputação">
                      <Star />
                      <span>Avaliações & Reputação</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Avaliações recebidas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Pontuação geral</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Comentários</SidebarMenuSubButton></SidebarMenuSubItem>
                       <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Histórico</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por empresa</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Por período</SidebarMenuSubButton></SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Comunidades">
                      <Users2 />
                      <span>Comunidades</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="#">Todas as comunidades</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Minhas comunidades</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Comunidades recomendadas</SidebarMenuSubButton></SidebarMenuSubItem>
                       <SidebarMenuSubItem asChild>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton className="justify-between">
                              <span>Categorias</span>
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-90" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4">
                               <SidebarMenuSubItem><SidebarMenuSubButton href="#">Devs</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Designers</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Vídeo</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Imagem</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Motion</SidebarMenuSubButton></SidebarMenuSubItem>
                              <SidebarMenuSubItem><SidebarMenuSubButton href="#">Geral</SidebarMenuSubButton></SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>
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
                    <SidebarMenuButton tooltip="Estatísticas">
                      <BarChart2 />
                      <span>Estatísticas</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="#">Visitas ao perfil</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Visualizações de serviços</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Taxa de resposta</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Conversões</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Notificações">
                      <Bell />
                      <span>Notificações</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="#">Projetos novos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Convites</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Mensagens</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Avisos da plataforma</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Plano & Benefícios">
                      <CreditCard />
                      <span>Plano & Benefícios</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/upgrade">Plano atual</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Limites do plano</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Comparar planos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Histórico de upgrades</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Conta</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Segurança</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Privacidade</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Preferências</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="#">Excluir conta</SidebarMenuSubButton></SidebarMenuSubItem>
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
        <SidebarContent className="mt-auto p-2">
            <div className="md:hidden">
                <SidebarSeparator />
                <div className="p-2 space-y-2">
                    <Badge variant="outline" className="border-destructive text-destructive">
                        <Lock className="mr-1.5 h-3 w-3" />
                        Plano Free
                    </Badge>
                    <Button asChild variant="ghost" size="sm" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <Link href="/dashboard/upgrade">
                            <Zap className="mr-2 h-4 w-4" />
                            Atualizar plano
                        </Link>
                    </Button>
                </div>
            </div>
            <SidebarSeparator />
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
  );
}
