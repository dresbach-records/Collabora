import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const Logo = () => (
    <Link href="/" className="flex items-center gap-2 group">
        <Image src="/iconecolabora.ico" alt="Collabora icon" width={28} height={28} />
        <span className="text-2xl font-bold text-accent-foreground">Collabora</span>
    </Link>
);

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: 'Encontrar Talentos', href: '/talent' },
      { name: 'Encontrar Projetos', href: '/projects' },
      { name: 'Para Empresas', href: '/for-companies' },
      { name: 'Como Funciona', href: '/#how-it-works' },
    ],
    company: [
      { name: 'Sobre Nós', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carreiras', href: '/careers' },
      { name: 'Contato', href: '/contact' },
    ],
    legal: [
      { name: 'Termos e Legal', href: '/legal' },
      { name: 'Política de Privacidade', href: '/privacy' },
      { name: 'Perguntas Frequentes', href: '/faqs' },
    ],
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Logo />
            <p className="text-accent-foreground/80">Sua jornada de trabalho começa hoje.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3 lg:col-span-3">
              <div>
                <h3 className="font-semibold text-accent-foreground">Plataforma</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.platform.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-accent-foreground/80 hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-accent-foreground">Empresa</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-accent-foreground/80 hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-accent-foreground">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-accent-foreground/80 hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t border-accent-foreground/20 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-accent-foreground/80">&copy; {new Date().getFullYear()} Collabora Inc. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
             <Button asChild>
                <Link href="/signup">Comece Agora</Link>
             </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
