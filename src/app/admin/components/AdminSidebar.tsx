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
    Users, 
    Briefcase, 
    Settings, 
    BarChart, 
    Shield, 
    LogOut,
    FolderKanban,
    Package,
    CreditCard,
    UserCog,
    HelpCircle,
    Gavel,
    ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function AdminSidebar() {
    const pathname = usePathname();
    const menuButtonClass = "hover:bg-white/10 text-white/80 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white data-[active=true]:text-white data-[active=true]:bg-white/10";
    const subMenuButtonClass = "text-white/80 hover:text-white hover:bg-white/10 data-[active=true]:text-white data-[active=true]:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white";

    return (
        <Sidebar className="bg-[#2D323C] text-white border-r-0">
            <SidebarContent className="p-2">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                        href="/admin" 
                        tooltip="Dashboard" 
                        isActive={pathname === '/admin'}
                        className="bg-[#F97316] text-white hover:bg-[#F97316]/90 data-[active=true]:bg-[#F97316] data-[active=true]:text-white"
                    >
                      <Home />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

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
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/companies/list" className={subMenuButtonClass}>Listar Empresas</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/companies/pending" className={subMenuButtonClass}>Empresas Pendentes</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/companies/blocked" className={subMenuButtonClass}>Empresas Bloqueadas</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
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
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/professionals/list" className={subMenuButtonClass}>Listar Profissionais</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/professionals/flagged" className={subMenuButtonClass}>Perfis Sinalizados</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
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
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/projects/all" className={subMenuButtonClass}>Todos os Projetos</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/projects/reported" className={subMenuButtonClass}>Projetos Denunciados</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

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
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/services/moderation" className={subMenuButtonClass}>Moderação de Serviços</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
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
                           <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/moderation/reports" className={subMenuButtonClass}>Denúncias</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/moderation/actions" className={subMenuButtonClass}>Ações</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Pagamentos" className={menuButtonClass}>
                          <CreditCard />
                          <span>Pagamentos</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/payments/overview" className={subMenuButtonClass}>Visão Geral</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/payments/subscriptions" className={subMenuButtonClass}>Assinaturas</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Analytics" className={menuButtonClass}>
                          <BarChart />
                          <span>Analytics</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/analytics/growth" className={subMenuButtonClass}>Crescimento</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/analytics/conversion" className={subMenuButtonClass}>Conversão</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/analytics/retention" className={subMenuButtonClass}>Retenção</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

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
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/system/categories" className={subMenuButtonClass}>Categorias</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/system/limits" className={subMenuButtonClass}>Limites</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/system/feature-flags" className={subMenuButtonClass}>Feature Flags</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/system/logs" className={subMenuButtonClass}>Logs</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  
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
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/admins/list" className={subMenuButtonClass}>Listar Admins</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/admins/roles" className={subMenuButtonClass}>Papéis</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Suporte" className={menuButtonClass}>
                          <HelpCircle />
                          <span>Suporte</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                           <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/support/tickets" className={subMenuButtonClass}>Tickets</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>

                  <SidebarMenuItem asChild>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton tooltip="Legal" className={menuButtonClass}>
                          <Gavel />
                          <span>Legal</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-white/20">
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/legal/terms" className={subMenuButtonClass}>Termos de Uso</SidebarMenuSubButton></SidebarMenuSubItem>
                          <SidebarMenuSubItem><SidebarMenuSubButton href="/admin/legal/privacy" className={subMenuButtonClass}>Política de Privacidade</SidebarMenuSubButton></SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <div className="mt-auto p-2">
                <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton href="/" tooltip="Sair" className="hover:bg-white/10 text-white/80 hover:text-white">
                        <LogOut />
                        <span>Sair</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                </SidebarMenu>
            </div>
        </Sidebar>
    );
}
