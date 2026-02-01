import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { CheckCircle, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
    const ctaBgImage = PlaceHolderImages.find(p => p.id === 'cta-background');

    const teamMembers = [
        {
            name: 'Carlos Lima',
            title: 'Fundador & CEO',
            avatarId: 'testimonial-1',
        },
        {
            name: 'Ana Pereira',
            title: 'Head de Produto',
            avatarId: 'testimonial-2',
        },
        {
            name: 'Pedro Martins',
            title: 'Lead Engineer',
            avatarId: 'testimonial-3',
        }
    ];

    const values = [
        {
            icon: <CheckCircle className="h-8 w-8 text-primary" />,
            title: 'Transparência Radical',
            description: 'Acreditamos em um ecossistema sem taxas escondidas, com comunicação direta e perfis verificáveis.'
        },
        {
            icon: <Zap className="h-8 w-8 text-primary" />,
            title: 'Eficiência e Agilidade',
            description: 'Nossa plataforma é construída para que você encontre o talento ou o projeto certo no menor tempo possível.'
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: 'Foco na Comunidade',
            description: 'Mais que uma plataforma, somos uma comunidade de profissionais e empresas que se ajudam a crescer.'
        }
    ];

    return (
        <div className="space-y-16 md:space-y-24">
            <section className="relative bg-secondary pt-24 pb-20 md:pt-32 md:pb-28 text-center overflow-hidden">
                {heroImage && (
                    <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover opacity-20"
                    priority
                    data-ai-hint={heroImage.imageHint}
                    />
                )}
                <div className="container relative">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Redesenhando o futuro do trabalho digital.
                        </h1>
                        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
                            A Collabora nasceu da necessidade de criar conexões diretas, transparentes e eficientes entre empresas e os melhores talentos do mercado.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">O trabalho digital merece mais que grupos e mensagens.</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        O mercado de talentos digitais está quebrado. Profissionais incríveis se perdem em meio a comissões abusivas e falta de transparência, enquanto empresas lutam para encontrar parceiros qualificados em um mar de perfis duvidosos.
                        <br/><br/>
                        Nós acreditamos que a tecnologia pode resolver isso, substituindo a desordem por uma plataforma inteligente e centralizada.
                    </p>
                </div>
            </section>
            
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossos Valores</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Os pilares que guiam cada decisão que tomamos.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {values.map(value => (
                            <div key={value.title} className="flex flex-col items-center">
                                {value.icon}
                                <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Conheça Quem Faz Acontecer</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Somos um time apaixonado por tecnologia, design e, acima de tudo, por conectar pessoas.</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map(member => {
                        const avatar = PlaceHolderImages.find(p => p.id === member.avatarId);
                        return (
                            <div key={member.name} className="flex flex-col items-center">
                                {avatar && (
                                     <Avatar className="h-32 w-32 mb-4 border-4 border-primary">
                                        <AvatarImage src={avatar.imageUrl} alt={member.name} data-ai-hint={avatar.imageHint}/>
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-primary font-medium">{member.title}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            
            <section id="cta" className="relative bg-accent py-20 md:py-28 overflow-hidden">
                {ctaBgImage && (
                    <Image
                    src={ctaBgImage.imageUrl}
                    alt={ctaBgImage.description}
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint={ctaBgImage.imageHint}
                    />
                )}
                <div className="container relative">
                    <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-accent-foreground">
                        Faça Parte da Mudança
                    </h2>
                    <p className="mx-auto mt-6 max-w-[600px] text-lg text-accent-foreground/80 md:text-xl">
                        Junte-se à nossa comunidade e ajude a construir um mercado de trabalho digital mais justo e eficiente.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/for-companies">Contratar Talentos</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-accent hover:bg-accent/90 border-accent-foreground text-accent-foreground" asChild>
                            <Link href="/projects">Encontrar Projetos</Link>
                        </Button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
