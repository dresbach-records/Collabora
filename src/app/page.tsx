import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Cog, Headphones, FileText, Palette, Star, Instagram, Facebook, Linkedin, Twitter, Youtube, Github, Gitlab, Figma, Slack, CreditCard, Briefcase, Dribbble, Video, QrCode, Barcode 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';


// Helper for custom SVG icons
const SvgIcon = ({ path, className }: { path: string, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("h-12 w-12", className)}>
        <path d={path}></path>
    </svg>
);


// Integrations Strip Component
const IntegrationsStrip = () => {
  const iconClass = "h-12 w-12";
  const allIntegrations = [
    { name: "Instagram", icon: <Instagram className={iconClass} /> },
    { name: "Facebook", icon: <Facebook className={iconClass} /> },
    { name: "LinkedIn", icon: <Linkedin className={iconClass} /> },
    { name: "TikTok", icon: <SvgIcon path="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07C16.51 7.8 15.3 6.9 14.3 5.7c-.1-.16-.26-.3-.4-.43-.04-1.26-.04-2.52-.04-3.78zM8.3 1.31C9.07 1.11 9.84 1 10.6 1c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07-1.31-.72-2.52-1.63-3.52-2.73-.04-1.26-.04-2.52-.04-3.78z" /> },
    { name: "X (Twitter)", icon: <Twitter className={iconClass} /> },
    { name: "Pinterest", icon: <SvgIcon path="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.084-.6-.223-2.07.034-2.902.24-.766.993-4.2 1.258-5.238.25-.99.012-1.84-.68-1.84-1.282 0-2.228 1.35-2.228 2.972 0 1.24.743 2.186 1.666 2.186.796 0 1.487-.933 1.29-2.312-.213-1.52-1.26-3.83-1.26-5.122 0-2.33 1.67-4.18 4.7-4.18 2.586 0 4.236 1.93 4.236 4.446 0 2.72-1.39 4.88-3.414 4.88-1.125 0-1.956-.91-1.72-2.016.273-1.282.83-2.67.83-3.534 0-.732-.42-1.344-1.328-1.344-.99 0-1.812.99-1.812 2.304 0 .822.312 1.67.695 2.18.04.05.05.1.02.19-.07.25-.235.91-.297 1.14-.1.4-.4.5-.8.3-1.44-.6-2.33-2.64-2.33-4.52 0-3.41 2.45-6.3 7-6.3 3.84 0 6.38 2.78 6.38 5.78 0 3.9-2.2 6.8-5.3 6.8-1.74 0-3.14-1.4-2.7-3.1.5-2.1 1.5-4.2 1.5-5.5 0-1-2-1-2-1z" /> },
    { name: "YouTube", icon: <Youtube className={iconClass} /> },
    { name: "GitHub", icon: <Github className={iconClass} /> },
    { name: "GitLab", icon: <Gitlab className={iconClass} /> },
    { name: "Bitbucket", icon: <SvgIcon path="M22.05 15.37c.33-1.43-.22-2.58-1.26-3.46-.7-.6-1.52-1.1-2.2-1.75l-.33-.31c-.34-.31-.4-.82-.12-1.21.03-.04.05-.08.08-.12.33-.41.48-.9.4-1.4-.1-1.34-1.18-2.3-2.52-2.18-1.23.1-2.1 1.1-2.1 2.33 0 .58.21 1.11.58 1.52l.06.07c.2.25.26.58.15.89-.13.37-.47.6-.85.62l-1.35.09h-1.37c-.38.01-.72-.23-.85-.62-.11-.31-.05-.64.15-.89l.06-.07c.37-.41.58-.94.58-1.52 0-1.23-.88-2.23-2.1-2.33-1.34-.12-2.42.94-2.52 2.18-.08.5.07 1 .4 1.4.03.04.05.08.08.12.28.39.22.9-.12 1.21l-.33.31c-.68.65-1.5 1.15-2.2 1.75-1.04.88-1.6 2.03-1.26 3.46.39 1.67 2.11 2.82 4 2.82h10.3c1.89 0 3.61-1.15 4-2.82zM8.86 16.37H6.28c-.89 0-1.6.86-1.42 1.72.19.9 1.05 1.53 1.95 1.53h2.05c1.1 0 2-.9 2-2s-.9-2-2-2z" /> },
    { name: "Behance", icon: <Briefcase className={iconClass} /> },
    { name: "Dribbble", icon: <Dribbble className={iconClass} /> },
    { name: "Figma", icon: <Figma className={iconClass} /> },
    { name: "Canva", icon: <Palette className={iconClass} /> },
    { name: "Vimeo", icon: <SvgIcon path="M22.9 5.8c-.2-1.7-1.1-3.4-3.1-3.4-2.1 0-3.6 1.4-4.5 3.5-.8 2-1.7 4.1-2.5 6.1-.9 2.2-1.8 4.4-2.8 4.4-1 0-1.5-1.1-2.1-3.3S7 7.5 6.4 5.9C5.9 4.3 4.9 3.2 3.6 3.2c-1.3 0-2.3 1-2.4 2.8-.2 2.7 1.7 6.6 4.6 11.5 2.8 4.9 5.2 7.5 8 7.5 2.1 0 4-1.7 4.5-5.5.5-3.5-1.2-6.5-1.2-6.5s2.5 2.3 4.3 2.9c1.8.6 3.2.3 3.6-1.1.5-1.5-1-3.4-2.5-4.4z" /> },
    { name: "Slack", icon: <Slack className={iconClass} /> },
    { name: "Shopify", icon: <SvgIcon path="M19.33 3.86C19.06 3.32 18.5 3 17.89 3H6.11C5.5 3 4.94 3.32 4.67 3.86L2.3 8.32c-.14.28-.21.59-.21.91V19c0 1.1.9 2 2 2h15.83c1.1 0 2-.9 2-2V9.23c0-.32-.07-.63-.21-.91l-2.3-4.46zM12 13.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" /> },
    { name: "Asaas", icon: <CreditCard className={iconClass} /> },
    { name: "Pix", icon: <QrCode className={iconClass} /> },
  ];
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">🔗 Integrações que potencializam seu trabalho</h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">Conecte suas ferramentas favoritas em um só lugar.</p>
      </div>
      <div
        className="relative mt-12 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      >
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...allIntegrations, ...allIntegrations].map((integration, index) => (
            <div key={index} className="mx-2 flex h-20 w-20 items-center justify-center text-muted-foreground transition-colors hover:text-primary md:mx-4 md:h-24 md:w-24" title={integration.name}>
              {integration.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const ctaBgImage = PlaceHolderImages.find(p => p.id === 'cta-background');

  const categories = [
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: 'Desenvolvimento',
      description: 'Especialistas em websites, aplicativos e muito mais.',
      link: '/projects?category=development',
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'Design & Criatividade',
      description: 'Projetos de designers especializados, ilustradores e criativos.',
      link: '/projects?category=design',
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: 'Áudio & Vídeo',
      description: 'Produção de áudio, edição de vídeo, e muito mais para seu projeto.',
      link: '/projects?category=audio-video',
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'Redação & Conteúdo',
      description: 'Redatores para blogs, sites, roteiros e qualquer conteúdo que precisar.',
      link: '/projects?category=writing',
    },
  ];

  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'John Mitchell',
      title: 'Gerente de Projetos',
      quote: 'A Collabora nos ajudou a encontrar os melhores freelancers para o nosso projeto. O processo foi rápido e eficiente, e estamos muito satisfeitos com o resultado.',
      avatarId: 'testimonial-1',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      name: 'Sarah Davis',
      title: 'Designer Freelancer',
      quote: 'Como designer freelancer, a plataforma me conectou com clientes incríveis e projetos desafiadores. Recomendo a todos os profissionais da área.',
      avatarId: 'testimonial-2',
      rating: 5,
    },
    {
      id: 'testimonial-3',
      name: 'Mark Thompson',
      title: 'Cofundador na TechStartup',
      quote: '“Uma experiência excepcional. O gerenciamento de projetos é simples e a qualidade dos profissionais é altíssima. A Collabora otimizou nosso processo de contratação.”',
      avatarId: 'testimonial-3',
      rating: 5,
    },
  ];

  const companyLogos = ['Stripe', 'Slack', 'Airbnb', 'Spotify', 'Ford'];

  return (
    <>
      <div className="space-y-20 md:space-y-28">
        <section className="relative bg-accent text-accent-foreground pt-16 pb-12 md:pt-32 md:pb-28 text-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Abstract background"
              fill
              className="object-cover opacity-20"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Conecte-se com profissionais digitais
              </h1>
              <p className="mx-auto mt-6 max-w-[700px] text-lg text-accent-foreground/80 md:text-xl">
                Contrate os melhores talentos em tecnologia, design, vídeo, redação e muito mais.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/talent">Encontrar Talentos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="trusted-by" className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Aprovado por empresas líderes em todo o mundo
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
              {companyLogos.map((logo) => (
                <span key={logo} className="text-2xl font-bold text-muted-foreground/60">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-accent/10 py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary sm:text-4xl">150,000+</h2>
                        <p className="text-muted-foreground mt-2 sm:text-base">Profissionais digitais disponíveis</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-primary sm:text-4xl">97%</h2>
                        <p className="text-muted-foreground mt-2 sm:text-base">Avaliação média dos clientes</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-primary sm:text-4xl">20,000+</h2>
                        <p className="text-muted-foreground mt-2 sm:text-base">Projetos concluídos</p>
                    </div>
                </div>
            </div>
        </section>

        <IntegrationsStrip />

        <section id="categories" className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Encontre especialistas em todas as categorias digitais</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.title} className="group text-center flex flex-col items-center p-6">
                <CardHeader className="p-0 items-center">
                  <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <CardTitle className="pt-4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-2 flex-grow">
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
                <div className="mt-4">
                  <Button variant="default" asChild>
                    <Link href={category.link}>
                      Encontrar Talentos
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="relative bg-secondary py-20 md:py-32 overflow-hidden">
          {ctaBgImage && (
            <Image
              src={ctaBgImage.imageUrl}
              alt="wavy background"
              fill
              className="object-cover opacity-30"
              data-ai-hint={ctaBgImage.imageHint}
            />
          )}
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold tracking-wide uppercase text-primary">Comece hoje gratuitamente.</h3>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                Publique seu projeto e encontre o talento certo.
              </h2>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/dashboard/projects/new">Publicar um Projeto</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">O que nossos usuários estão dizendo</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <Card key={testimonial.id} className="p-6 bg-secondary/50 border-0 shadow-lg">
                  <CardContent className="p-0 text-center flex flex-col items-center">
                    {avatarImage && (
                       <Avatar className="h-20 w-20 mb-4 border-2 border-primary">
                        <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint}/>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <div className="flex gap-0.5 mt-2 text-primary">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={cn("w-5 h-5", i < testimonial.rating ? "fill-current" : "fill-transparent stroke-current")}/>
                        ))}
                    </div>
                    <p className="mt-4 text-muted-foreground italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
      <Link href="/dashboard/projects/new" style={{ writingMode: 'vertical-rl' }} className="hidden md:inline-block fixed top-1/2 -translate-y-1/2 right-0 bg-primary text-primary-foreground font-bold p-4 py-6 rounded-l-md z-40 transform transition-transform hover:bg-primary/90 text-center tracking-widest uppercase">
          Publicar um Projeto
      </Link>
    </>
  );
}
