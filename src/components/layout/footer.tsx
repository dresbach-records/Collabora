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
      { name: 'Find Talent', href: '/talent' },
      { name: 'Find Projects', href: '/projects' },
      { name: 'How it Works', href: '/#how-it-works' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'FAQs', href: '/faqs' },
    ],
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Logo />
            <p className="text-accent-foreground/80">Your journey in work today.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3 lg:col-span-3">
              <div>
                <h3 className="font-semibold text-accent-foreground">Platform</h3>
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
                <h3 className="font-semibold text-accent-foreground">Company</h3>
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
          <p className="text-accent-foreground/80">&copy; {new Date().getFullYear()} Collabora Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
             <Button asChild>
                <Link href="/signup">Get Started Now</Link>
             </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
