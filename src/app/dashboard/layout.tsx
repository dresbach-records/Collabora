import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Briefcase, MessageSquare, User, Settings, LogOut, PlusCircle } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { users } from "@/lib/data";
import Image from "next/image";

const user = users[0];
const userAvatar = PlaceHolderImages.find(p => p.id === user.avatarUrlId);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Image src="/iconecolabora.ico" alt="Collabora icon" width={28} height={28} />
              <span className="text-2xl font-bold text-sidebar-foreground">Collabora</span>
            </Link>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard" tooltip="Painel">
                <Home />
                <span>Painel</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/projects" tooltip="Projetos">
                <Briefcase />
                <span>Projetos</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/messages" tooltip="Mensagens">
                <MessageSquare />
                <span>Mensagens</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href={`/profile/${user.username}`} tooltip="Meu Perfil">
                <User />
                <span>Meu Perfil</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          <SidebarGroup className="mt-4">
            <SidebarGroupLabel>Ações</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/projects/new">
                <PlusCircle />
                Publicar Novo Projeto
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
             <SidebarMenuItem>
              <div className="flex items-center gap-3 p-2">
                <Avatar className="size-10">
                  {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt={user.username} />}
                  <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="overflow-hidden">
                  <p className="truncate font-semibold">{user.username}</p>
                  <p className="text-xs text-sidebar-foreground/70 truncate">{user.email}</p>
                </div>
              </div>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/settings" tooltip="Configurações">
                <Settings />
                <span>Configurações</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/" tooltip="Sair">
                <LogOut />
                <span>Sair</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-secondary">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger className="md:hidden" />
          <h2 className="flex-1 text-lg font-semibold">Painel</h2>
        </header>
        <div className="p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
