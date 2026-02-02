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
  Building2,
  FolderKanban,
  Users,
  Mail,
  Star,
  BarChart2,
  CreditCard,
  ChevronDown,
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/projects/create">Criar Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/projects/edit">Editar Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/projects/pause">Pausar Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/projects/close">Encerrar Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/professionals/search">Buscar</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/professionals/saved">Salvos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/professionals/invited">Convidados</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/applications/received">Recebidas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/applications/approved">Aprovadas</SidebarMenuSubButton></SidebarMenuSubItem>
                       <SidebarMenuSubItem><SidebarMenuSubButton href="/company/applications/rejected">Recusadas</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/messages/chat">Chat</SidebarMenuSubButton></SidebarMenuSubItem>
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
                       <SidebarMenuSubItem><SidebarMenuSubButton href="/company/reviews/give">Avaliar Profissional</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/reviews/history">Histórico</SidebarMenuSubButton></SidebarMenuSubItem>
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
                       <SidebarMenuSubItem><SidebarMenuSubButton href="/company/company-page/edit">Editar Página</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/company-page/preview">Visualizar</SidebarMenuSubButton></SidebarMenuSubItem>
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
                       <SidebarMenuSubItem><SidebarMenuSubButton href="/company/reports/projects">Projetos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/reports/hiring">Contratações</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Plano & Faturamento">
                      <CreditCard />
                      <span>Faturamento</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/billing/current-plan">Plano Atual</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/billing/payments">Pagamentos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/billing/upgrade">Upgrade</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/settings/users">Usuários</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/settings/permissions">Permissões</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/settings/security">Segurança</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/company/settings/close-account">Encerrar Conta</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

            </SidebarMenu>
        </SidebarContent>
    </Sidebar>
  );
}
