'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 group mr-6">
    <Image src="/iconecolabora.ico" alt="Collabora icon" width={28} height={28} />
    <span className="text-2xl font-bold text-foreground">Collabora</span>
  </Link>
);

const NavLink = ({ href, children, onLinkClick }: { href: string; children: React.ReactNode; onLinkClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className={cn(
        'text-base font-medium text-muted-foreground transition-colors hover:text-foreground',
        isActive && 'text-primary font-semibold'
      )}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navItems = [
    { href: '/talent', label: 'Encontrar Talentos' },
    { href: '/for-companies', label: 'Para Empresas' },
    { href: '/#how-it-works', label: 'Como Funciona' },
    { href: '/pricing', label: 'Planos' },
    { href: '/integrations', label: 'Integrações' },
    { href: '/about', label: 'Sobre Nós' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
            <Logo />
            <nav className="hidden items-center gap-8 md:flex">
                {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                    {item.label}
                </NavLink>
                ))}
            </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" asChild>
                <Link href="/login">Entrar</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Alternar Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                <div className="flex h-full flex-col gap-6 pt-8">
                    <Logo />
                    <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <NavLink key={item.href} href={item.href} onLinkClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                        </NavLink>
                    ))}
                    </nav>
                    <div className="mt-auto flex flex-col gap-4 border-t pt-6">
                        <Button variant="ghost" asChild>
                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Entrar</Link>
                        </Button>
                    </div>
                </div>
                </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
