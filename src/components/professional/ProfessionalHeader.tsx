'use client';

import Link from "next/link";
import Image from "next/image";
import { Search, Bell, HelpCircle, Lock, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { users } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const professionalUser = users.find(u => u.role === 'PROFESSIONAL');
const userAvatar = professionalUser ? PlaceHolderImages.find(p => p.id === professionalUser.avatarUrlId) : null;

export default function ProfessionalHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <Link href="/dashboard" className="flex items-center gap-2">
                <Image src="/iconecolabora.ico" alt="Collabora icon" width={28} height={28} />
                <span className="hidden text-2xl font-bold text-foreground md:inline">Collabora</span>
                </Link>
            </div>
            
            <div className="relative hidden flex-1 justify-center md:flex">
                <div className="w-full max-w-lg">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="search"
                    placeholder="Buscar projetos ou empresas"
                    className="w-full rounded-lg bg-secondary pl-8"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <div className="hidden items-center gap-2 md:flex">
                    <Badge variant="outline" className="border-destructive text-destructive">
                        <Lock className="mr-1.5 h-3 w-3" />
                        Plano Free
                    </Badge>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/dashboard/upgrade">
                            <Zap className="mr-1.5 h-4 w-4" />
                            Atualizar plano
                        </Link>
                    </Button>
                </div>
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
                        {userAvatar && professionalUser && <AvatarImage src={userAvatar.imageUrl} alt={professionalUser.username} />}
                        <AvatarFallback>{professionalUser?.username.charAt(0).toUpperCase()}</AvatarFallback>
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
    );
}
