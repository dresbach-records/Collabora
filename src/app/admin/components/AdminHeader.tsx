'use client';

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bell, HelpCircle, Rocket, Search } from "lucide-react";

export default function AdminHeader() {
    const adminUserAvatar = PlaceHolderImages.find(p => p.id === 'testimonial-1');

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-white px-4 sm:px-6">
            <div className="flex items-center gap-3">
                <SidebarTrigger className="md:hidden" />
                <Link href="/admin" className="flex items-center gap-3">
                    <Rocket className="w-7 h-7 text-[#F97316]" />
                    <span className="hidden text-2xl font-bold md:inline">Tech Labs</span>
                </Link>
            </div>
          
            <div className="relative hidden flex-1 justify-center md:flex">
                <div className="w-full max-w-lg">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Buscar usuários, empresas, projetos..."
                        className="w-full rounded-lg bg-[#F3F4F6] pl-8 border-none"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
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
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar className="h-8 w-8">
                                {adminUserAvatar && <AvatarImage src={adminUserAvatar.imageUrl} alt="Admin" />}
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
    );
}
