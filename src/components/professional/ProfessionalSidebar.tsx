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
import {
  Home,
  User,
  Briefcase,
  Lightbulb,
  MessageSquare,
  Settings,
  Mail,
  Star,
  CreditCard,
  ImageIcon,
  Puzzle,
  LogOut,
  Lock,
  Zap,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

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
                    <SidebarMenuButton tooltip="Meu Perfil">
                      <User />
                      <span>Meu Perfil</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/profile/edit">Editar Perfil</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/profile/public-preview">Visualização Pública</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/portfolio/create">Criar Item</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/portfolio/edit">Editar Item</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/portfolio/view">Visualizar</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Meus Serviços">
                      <Briefcase />
                      <span>Serviços</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/services/create">Criar Serviço</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/services/edit">Editar Serviço</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/services/pause">Pausar Serviço</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Explorar Projetos">
                      <Lightbulb />
                      <span>Explorar Projetos</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/explore-projects/list">Listar Projetos</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/explore-projects/details">Detalhes do Projeto</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Minhas Candidaturas">
                      <Mail />
                      <span>Candidaturas</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/applications/sent">Enviadas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/applications/accepted">Aceitas</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/applications/rejected">Recusadas</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/messages/chat">Chat</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/reviews/received">Recebidas</SidebarMenuSubButton></SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem asChild>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton tooltip="Integrações">
                      <Puzzle />
                      <span>Integrações</span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/integrations/connect">Conectar</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/integrations/manage">Gerenciar</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/plan/current">Plano Atual</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/plan/upgrade">Upgrade</SidebarMenuSubButton></SidebarMenuSubItem>
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
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/settings/account">Conta</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/settings/security">Segurança</SidebarMenuSubButton></SidebarMenuSubItem>
                      <SidebarMenuSubItem><SidebarMenuSubButton href="/dashboard/settings/close-account">Encerrar Conta</SidebarMenuSubButton></SidebarMenuSubItem>
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
                        <Link href="/dashboard/plan/upgrade">
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
