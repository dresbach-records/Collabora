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
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, MessageSquare, Settings, Zap, Search, Bell, HelpCircle, Building2, FolderKanban, Users, UserSearch } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { users } from "@/lib/data";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const companyUser = users.find(u => u.role === 'COMPANY');
const userAvatar = companyUser ? PlaceHolderImages.find(p => p.id === companyUser.avatarUrlId) : null;

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
          <SidebarTrigger className="md:hidden" />
          
          <div className="relative flex-1 hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={"Buscar profissionais..."}
              className="w-full rounded-lg bg-secondary pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <Select defaultValue="free">
              <SelectTrigger className="w-[120px] hidden sm:flex">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Plano Free</SelectItem>
                <SelectItem value="starter">Plano Starter</SelectItem>
                <SelectItem value="business">Plano Business</SelectItem>
              </SelectContent>
            </Select>
            <Button>Atualizar plano</Button>
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
                    {userAvatar && companyUser && <AvatarImage src={userAvatar.imageUrl} alt={companyUser.username} />}
                    <AvatarFallback>{companyUser?.username.charAt(0).toUpperCase()}</AvatarFallback>
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

        <div className="flex flex-1 overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                <Link href="/company" className="flex items-center gap-2">
                  <Image src="/iconecolabora.ico" alt="Collabora icon" width={28} height={28} />
                  <span className="text-2xl font-bold text-sidebar-foreground">Collabora</span>
                </Link>
              </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="/company" tooltip="Dashboard" isActive>
                      <Home />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Minha Empresa">
                      <Building2 />
                      <span>Minha Empresa</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Meus Projetos">
                      <FolderKanban />
                      <span>Meus Projetos</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Candidaturas">
                      <Users />
                      <span>Candidaturas</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Mensagens">
                      <MessageSquare />
                      <span>Mensagens</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Profissionais">
                      <UserSearch />
                      <span>Profissionais</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton href="#" tooltip="Atualizar Plano">
                      <Zap />
                      <span>Atualizar Plano</span>
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
