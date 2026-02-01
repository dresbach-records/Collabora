import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Cog, Headphones, FileText, Palette, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

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
        <section className="relative bg-accent text-accent-foreground pt-24 pb-20 md:pt-32 md:pb-28 text-center overflow-hidden">
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
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
        
        <section className="bg-accent text-accent-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary">150,000+</h2>
                        <p className="text-accent-foreground/80 mt-2">Profissionais digitais disponíveis</p>
                    </div>
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary">97%</h2>
                        <p className="text-accent-foreground/80 mt-2">Avaliação média dos clientes</p>
                    </div>
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary">20,000+</h2>
                        <p className="text-accent-foreground/80 mt-2">Projetos concluídos</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="categories" className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Encontre especialistas em todas as categorias digitais</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.title} className="group text-center flex flex-col items-center p-6">
                <CardHeader className="p-0">
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
