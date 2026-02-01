import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ForCompaniesPage() {
    const ctaBgImage = PlaceHolderImages.find(p => p.id === 'cta-background');

    const features = [
        { feature: 'Cadastro', free: true, starter: true, business: true },
        { feature: 'Página da empresa', free: true, starter: true, business: true },
        { feature: 'Projetos ativos', free: '1', starter: 'até 5', business: 'ilimitado' },
        { feature: 'Receber candidaturas', free: true, starter: true, business: true },
        { feature: 'Convites para profissionais', free: false, starter: true, business: true },
        { feature: 'Filtros avançados', free: false, starter: true, business: true },
        { feature: 'Destaque de vagas', free: false, starter: false, business: true },
        { feature: 'Relatórios', free: false, starter: false, business: true },
        { feature: 'Suporte prioritário', free: false, starter: false, business: true },
    ];

    const audiences = [
        'Startups',
        'Agências digitais',
        'Estúdios criativos',
        'Produtoras de conteúdo',
        'Empresas tech',
        'Times remotos'
    ];


  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-20">
      <section className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Encontre talentos digitais e tire seus projetos do papel
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A Collabora conecta sua empresa a profissionais qualificados em tecnologia, design, imagem e vídeo — de forma simples, transparente e sem burocracia.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/signup">Cadastre-se gratuitamente</Link>
            </Button>
            <p className="mt-2 text-sm text-muted-foreground">Sem cartão de crédito. Sem compromisso.</p>
          </div>
        </div>
      </section>
      
      <section className="container">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Por que usar a Collabora?</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold">Portfólios Públicos</h3>
                <p className="text-muted-foreground mt-2">Acesso a profissionais digitais reais, com portfólios públicos.</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold">Projetos Segmentados</h3>
                <p className="text-muted-foreground mt-2">Projetos bem segmentados por área e especialidade.</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold">Comunicação Direta</h3>
                <p className="text-muted-foreground mt-2">Comunicação direta com freelancers, sem intermediários.</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold">Plataforma Moderna</h3>
                <p className="text-muted-foreground mt-2">Plataforma moderna, focada em colaboração e resultados.</p>
            </div>
        </div>
      </section>

      <section id="pricing" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Planos para Empresas</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comece grátis. Evolua conforme sua demanda.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col border-green-500 border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-500">Free</CardTitle>
                <p className="text-4xl font-bold">R$ 0<span className="text-lg font-normal text-muted-foreground"> / mês</span></p>
                <CardDescription>Para testar a plataforma sem compromisso.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p>✔ Cadastro gratuito</p>
                <p>✔ Página pública da empresa</p>
                <p>✔ 1 projeto ativo</p>
                <p>✔ Receber candidaturas ilimitadas</p>
                <p>✔ Chat interno com profissionais</p>
                <p>✔ Acesso total aos portfólios</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" variant="outline" asChild>
                    <Link href="/signup">Criar conta grátis</Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col border-primary border-2 shadow-xl scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Starter</CardTitle>
                 <p className="text-4xl font-bold">Preço acessível</p>
                <CardDescription>Para empresas que contratam com frequência.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p>✔ Até 5 projetos ativos</p>
                <p>✔ Filtros avançados de profissionais</p>
                <p>✔ Convites diretos para talentos</p>
                <p>✔ Histórico completo de projetos</p>
                <p>✔ Mais visibilidade para suas vagas</p>
              </CardContent>
               <div className="p-6 pt-0">
                <Button className="w-full" asChild>
                    <Link href="/signup?plan=starter">Começar com Starter</Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col border-purple-500 border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-500">Business</CardTitle>
                <p className="text-4xl font-bold">Sob consulta</p>
                <CardDescription>Para empresas, agências e estúdios em escala.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p>✔ Projetos ilimitados</p>
                <p>✔ Destaque de vagas na plataforma</p>
                <p>✔ Matching inteligente de talentos</p>
                <p>✔ Convites ilimitados</p>
                <p>✔ Relatórios e métricas</p>
                <p>✔ Suporte prioritário</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact?plan=business">Falar com vendas</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="container">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comparativo Rápido</h2>
        </div>
        <Card className="mt-8">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[200px]">Recursos</TableHead>
                    <TableHead className="text-center">Free</TableHead>
                    <TableHead className="text-center">Starter</TableHead>
                    <TableHead className="text-center">Business</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {features.map((item) => (
                    <TableRow key={item.feature}>
                        <TableCell className="font-medium">{item.feature}</TableCell>
                        <TableCell className="text-center">{typeof item.free === 'boolean' ? (item.free ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <X className="mx-auto h-5 w-5 text-muted-foreground" />) : item.free}</TableCell>
                        <TableCell className="text-center">{typeof item.starter === 'boolean' ? (item.starter ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <X className="mx-auto h-5 w-5 text-muted-foreground" />) : item.starter}</TableCell>
                        <TableCell className="text-center">{typeof item.business === 'boolean' ? (item.business ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <X className="mx-auto h-5 w-5 text-muted-foreground" />) : item.business}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
      </section>

      <section className="container">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Para quem é a Collabora?</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                {audiences.map(audience => (
                    <div key={audience} className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium">
                        {audience}
                    </div>
                ))}
            </div>
            <p className="mt-6 text-lg text-muted-foreground">Se você precisa de talento digital sob demanda, a Collabora é para você.</p>
        </div>
      </section>

      <section id="cta" className="relative bg-accent py-20 md:py-32 overflow-hidden">
          {ctaBgImage && (
            <Image
              src={ctaBgImage.imageUrl}
              alt="wavy background"
              fill
              className="object-cover opacity-30"
              data-ai-hint={ctaBgImage.imageHint}
            />
          )}
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-accent-foreground">
                Crie sua conta gratuita e publique seu primeiro projeto hoje.
              </h2>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/signup">Começar grátis</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
