import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, BarChart2, Users, Briefcase, Settings, HelpCircle, Search, Bell, Rocket, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function TechLabsDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminUserAvatar = PlaceHolderImages.find(p => p.id === 'testimonial-1');

  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-white px-4 sm:px-6">
          <div className="flex items-center gap-3">
              <Link href="/dashboard-techlabs" className="flex items-center gap-3">
                <Rocket className="w-8 h-8 text-[#F97316]" />
                <span className="text-2xl font-bold">Tech Labs</span>
              </Link>
          </div>
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar emproses, profissionals..."
              className="w-full rounded-lg bg-[#F3F4F6] pl-8 md:w-[280px] border-none"
            />
          </div>
          <div className="ml-auto flex items-center gap-3 sm:gap-4">
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
                <Button variant="ghost" size="icon" className="rounded-full flex items-center gap-2 px-2 w-auto">
                  <Avatar className="h-8 w-8">
                    {adminUserAvatar && <AvatarImage src={adminUserAvatar.imageUrl} alt="Admin" />}
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                   <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Preferências</DropdownMenuItem>
                <DropdownMenuSeparator />
                 <DropdownMenuItem asChild>
                  <Link href="/">Sair</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            className="bg-[#2D323C] text-white border-r-0"
            collapsible="none"
          >
            <SidebarContent className="p-2">
                <SidebarMenu>
                  <SidebarMenuItem className="px-2">
                    <SidebarMenuButton 
                      href="/dashboard-techlabs" 
                      className="bg-[#F97316] text-white hover:bg-[#F97316]/90 data-[active=true]:bg-[#F97316] data-[active=true]:text-white"
                      isActive
                    >
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="px-2">
                    <SidebarMenuButton href="#" className="hover:bg-white/10 text-white/80 hover:text-white data-[active=true]:text-white data-[active=true]:bg-white/10">
                      <BarChart2 />
                      <span>Estatísticas</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="px-2">
                    <SidebarMenuButton href="#" className="hover:bg-white/10 text-white/80 hover:text-white data-[active=true]:text-white data-[active=true]:bg-white/10">
                      <Users />
                      <span>Profissionais</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="px-2">
                    <SidebarMenuButton href="#" className="hover:bg-white/10 text-white/80 hover:text-white data-[active=true]:text-white data-[active=true]:bg-white/10">
                      <Briefcase />
                      <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem className="px-2">
                    <SidebarMenuButton href="#" className="hover:bg-white/10 text-white/80 hover:text-white data-[active=true]:text-white data-[active=true]:bg-white/10">
                      <Settings />
                      <span>Configurações</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem className="px-2">
                    <SidebarMenuButton href="#" className="hover:bg-white/10 text-white/80 hover:text-white data-[active=true]:text-white data-[active=true]:bg-white/10">
                      <HelpCircle />
                      <span>Suporte</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="bg-[#F3F4F6] p-0">
            <div className="flex-1 overflow-auto p-6">
              {children}
            </div>
          </SidebarInset>
        </div>

        <footer className="shrink-0 border-t bg-white px-6 py-3 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>© Tech Labs — Todos es direitos reservados</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-foreground">Termos os Privaitate</Link>
              <Link href="#" className="hover:text-foreground">Suppirte</Link>
            </div>
          </div>
        </footer>
      </div>
    </SidebarProvider>
  );
}
