import { Shapes, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-xl font-semibold group">
    <Shapes className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
    <span className="font-headline text-foreground">Collabora</span>
  </Link>
);

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: 'Find Projects', href: '/projects' },
      { name: 'Find Talent', href: '/talent' },
      { name: 'How it Works', href: '/#how-it-works' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">The future of work is collaborative.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
            <div>
              <h3 className="font-semibold text-foreground">Platform</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Collabora Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
