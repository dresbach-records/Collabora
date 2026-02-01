
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, ShieldOff, Users, Zap } from "lucide-react";

export default function TalentPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
    const testimonials = [
        {
          id: 'testimonial-1',
          name: 'Juliana Silva',
          title: 'Diretora de Marketing na InovaTech',
          quote: 'Encontrar desenvolvedores qualificados era um desafio constante. Com a Collabora, montamos um time de freelancers de alto nível em menos de uma semana. A plataforma é transparente e eficiente.',
          avatarId: 'testimonial-2', // Using existing female portrait
        },
        {
          id: 'testimonial-2',
          name: 'Ricardo Mendes',
          title: 'Fundador da CreativeHub',
          quote: 'A facilidade de publicar um projeto e receber propostas de qualidade é impressionante. Deixamos de usar outras plataformas por causa da comunicação direta e da ausência de taxas escondidas.',
          avatarId: 'testimonial-1', // Using existing male portrait
        },
    ];

    return (
        <div className="space-y-16 md:space-y-24 py-12 md:py-20 bg-background text-foreground">
            {/* Hero Section */}
            <section className="container text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Onde o talento certo encontra o projeto ideal.
                    </h1>
                    <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Chega de processos seletivos longos, taxas escondidas e falta de transparência. Encontre os melhores profissionais digitais de forma direta e eficiente.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/signup">Encontrar Talentos Agora</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/projects">Ver Projetos Ativos</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">O Desafio de Contratar no Mundo Digital</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Plataformas tradicionais criam barreiras que dificultam a conexão entre empresas e talentos.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card className="bg-secondary/50 border-destructive/50 text-center p-6">
                        <ShieldOff className="mx-auto h-12 w-12 text-destructive" />
                        <h3 className="mt-4 text-xl font-bold">Perfis Duvidosos</h3>
                        <p className="mt-2 text-muted-foreground">Incerteza sobre a qualidade e veracidade dos portfólios apresentados.</p>
                    </Card>
                    <Card className="bg-secondary/50 border-destructive/50 text-center p-6 flex flex-col justify-center items-center">
                        <span className="text-5xl font-bold text-destructive">%</span>
                        <h3 className="mt-2 text-xl font-bold">Comissões Abusivas</h3>
                        <p className="mt-2 text-muted-foreground">Taxas elevadas que encarecem o projeto e desvalorizam o profissional.</p>
                    </Card>
                    <Card className="bg-secondary/50 border-destructive/50 text-center p-6 flex flex-col justify-center items-center">
                         <span className="text-5xl font-bold text-destructive">...</span>
                        <h3 className="mt-4 text-xl font-bold">Processos Lentos</h3>
                        <p className="mt-2 text-muted-foreground">Burocracia e longas etapas de seleção que afastam os melhores talentos.</p>
                    </Card>
                    <Card className="bg-secondary/50 border-destructive/50 text-center p-6">
                        <Users className="mx-auto h-12 w-12 text-destructive" />
                        <h3 className="mt-4 text-xl font-bold">Falta de Conexão</h3>
                        <p className="mt-2 text-muted-foreground">Intermediários que dificultam a comunicação direta e o alinhamento.</p>
                    </Card>
                </div>
            </section>

             {/* The Solution Section */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Conexão que seu Projeto Precisa, sem Pegadinhas</h2>
                         <p className="mt-4 text-lg text-muted-foreground">Criamos um ambiente onde a confiança e a colaboração vêm em primeiro lugar.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="flex gap-4 items-start">
                            <CheckCircle className="h-8 w-8 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">Transparência Total</h3>
                                <p className="text-muted-foreground mt-1">Navegue por perfis detalhados com portfólios públicos. O que você vê é o que você contrata. Sem surpresas.</p>
                            </div>
                        </div>
                         <div className="flex gap-4 items-start">
                            <Zap className="h-8 w-8 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">Comunicação Direta</h3>
                                <p className="text-muted-foreground mt-1">Converse diretamente com os profissionais, alinhe expectativas e feche parcerias sem intermediários ou ruídos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                           <span className="text-4xl font-bold text-primary shrink-0">R$0</span>
                            <div>
                                <h3 className="text-xl font-bold">Comece Grátis, de Verdade</h3>
                                <p className="text-muted-foreground mt-1">Nosso modelo é simples: o cadastro é gratuito e você só avança para um plano pago se e quando sua demanda crescer.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                             <Users className="h-8 w-8 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">Comunidade de Qualidade</h3>
                                <p className="text-muted-foreground mt-1">Uma comunidade de profissionais de diversas áreas, prontos para colaborar em projetos de design, desenvolvimento e mais.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* How it Works Section */}
            <section className="container text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Como Funciona?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Em 4 passos simples, você encontra o profissional ideal para o seu projeto.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                        <h3 className="mt-4 text-xl font-semibold">Cadastre-se Grátis</h3>
                        <p className="mt-1 text-muted-foreground">Crie o perfil da sua empresa em minutos.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                        <h3 className="mt-4 text-xl font-semibold">Publique um Projeto</h3>
                        <p className="mt-1 text-muted-foreground">Descreva sua necessidade e as habilidades que você busca.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                        <h3 className="mt-4 text-xl font-semibold">Receba Propostas</h3>
                        <p className="mt-1 text-muted-foreground">Analise os perfis e portfólios dos interessados.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">4</div>
                        <h3 className="mt-4 text-xl font-semibold">Contrate o Talento</h3>
                        <p className="mt-1 text-muted-foreground">Converse e inicie a colaboração de forma direta.</p>
                    </div>
                </div>
            </section>

             {/* Testimonials Section */}
            <section id="testimonials" className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Empresas que Confiam na Collabora</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
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
                            <p className="mt-4 text-lg text-muted-foreground italic">"{testimonial.quote}"</p>
                            <h3 className="font-bold text-lg mt-4">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </CardContent>
                        </Card>
                    );
                    })}
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section id="cta" className="relative bg-accent py-20 md:py-28 overflow-hidden">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt="Abstract background"
                  fill
                  className="object-cover opacity-20"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <div className="container relative">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-accent-foreground">
                    Pronto para Montar seu Time dos Sonhos?
                  </h2>
                   <p className="mx-auto mt-6 max-w-[600px] text-lg text-accent-foreground/80 md:text-xl">
                    Junte-se a centenas de empresas que já estão construindo o futuro com os talentos da Collabora.
                  </p>
                  <div className="mt-8">
                    <Button size="lg" asChild>
                      <Link href="/signup">Publique um Projeto Gratuitamente</Link>
                    </Button>
                     <p className="mt-2 text-sm text-accent-foreground/60">Cadastro rápido e sem compromisso.</p>
                  </div>
                </div>
              </div>
            </section>
        </div>
    );
}
