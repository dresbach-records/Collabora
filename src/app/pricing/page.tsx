import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Link from "next/link";

const professionalPlans = [
    {
        name: "Pro",
        price: "R$ 49",
        priceDescription: "/mês",
        description: "Para profissionais que buscam mais visibilidade e oportunidades.",
        features: [
            "Destaque em buscas",
            "Até 30 candidaturas/mês",
            "Portfólio com mais projetos",
            "Selos de verificação",
        ],
        cta: "Assinar Plano Pro",
        ctaLink: "/signup?role=professional&plan=pro"
    },
    {
        name: "Elite",
        price: "R$ 99",
        priceDescription: "/mês",
        description: "Acesso total à plataforma, com máximo alcance e suporte prioritário.",
        features: [
            "Tudo do plano Pro",
            "Candidaturas ilimitadas",
            "Destaque máximo nos serviços",
            "Suporte prioritário via WhatsApp",
        ],
        cta: "Assinar Plano Elite",
        ctaLink: "/signup?role=professional&plan=elite"
    }
];

const companyPlans = [
    {
        name: "Starter",
        price: "R$ 99",
        priceDescription: "/mês",
        description: "Para empresas que precisam contratar com frequência e ter mais alcance.",
        features: [
            "Até 5 projetos ativos",
            "Convites para profissionais",
            "Filtros avançados de busca",
            "Suporte via e-mail",
        ],
        cta: "Assinar Plano Starter",
        ctaLink: "/signup?role=company&plan=starter"
    },
    {
        name: "Business",
        price: "Sob consulta",
        priceDescription: "",
        description: "Para agências, estúdios e empresas com alta demanda de contratação.",
        features: [
            "Projetos ilimitados",
            "Destaque de vagas",
            "Relatórios e métricas",
            "Suporte prioritário",
        ],
        cta: "Falar com Vendas",
        ctaLink: "/contact?subject=plan-business"
    }
];

export default function PricingPage() {
    return (
        <div className="bg-secondary">
            <div className="container py-12 md:py-20">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Planos e Preços</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Soluções transparentes para impulsionar sua carreira ou seu negócio. Sem comissões, sem surpresas.
                    </p>
                </div>

                <Tabs defaultValue="professionals" className="mt-12 max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="professionals">Para Profissionais</TabsTrigger>
                        <TabsTrigger value="companies">Para Empresas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="professionals" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Free Plan for Professionals */}
                             <Card className="flex flex-col border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Free</CardTitle>
                                    <CardDescription>Comece a explorar a plataforma e encontrar seus primeiros projetos.</CardDescription>
                                    <div>
                                        <span className="text-4xl font-bold">R$ 0</span>
                                        <span className="text-muted-foreground">/para sempre</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-3">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Perfil público e portfólio</span></li>
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Buscar e se candidatar a projetos</span></li>
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Até 5 candidaturas/mês</span></li>
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Receber convites de empresas</span></li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" variant="outline" asChild><Link href="/signup?role=professional">Comece Gratuitamente</Link></Button>
                                </CardFooter>
                            </Card>
                            {/* Paid Plans for Professionals */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
                                {professionalPlans.map((plan) => (
                                    <Card key={plan.name} className="flex flex-col border-primary">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                            <CardDescription>{plan.description}</CardDescription>
                                            <div>
                                                <span className="text-4xl font-bold">{plan.price}</span>
                                                <span className="text-muted-foreground">{plan.priceDescription}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow space-y-3">
                                            <ul className="space-y-2">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <Check className="h-5 w-5 text-green-500" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild><Link href={plan.ctaLink}>{plan.cta}</Link></Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="companies" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                             {/* Free Plan for Companies */}
                             <Card className="flex flex-col border-primary/20 md:col-span-1">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Free</CardTitle>
                                    <CardDescription>Publique seu primeiro projeto e encontre o talento ideal sem compromisso.</CardDescription>
                                    <div>
                                        <span className="text-4xl font-bold">R$ 0</span>
                                         <span className="text-muted-foreground">/para sempre</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-3">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>1 projeto ativo por vez</span></li>
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Receber candidaturas ilimitadas</span></li>
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Acesso ao perfil dos profissionais</span></li>
                                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Chat direto com candidatos</span></li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" variant="outline" asChild><Link href="/signup?role=company">Comece Gratuitamente</Link></Button>
                                </CardFooter>
                            </Card>
                             {/* Paid Plans for Companies */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
                                {companyPlans.map((plan) => (
                                    <Card key={plan.name} className="flex flex-col border-primary">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                            <CardDescription>{plan.description}</CardDescription>
                                            <div>
                                                <span className="text-4xl font-bold">{plan.price}</span>
                                                <span className="text-muted-foreground">{plan.priceDescription}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow space-y-3">
                                            <ul className="space-y-2">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <Check className="h-5 w-5 text-green-500" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" asChild><Link href={plan.ctaLink}>{plan.cta}</Link></Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
                <div className="text-center text-muted-foreground text-sm mt-12">
                    <p>O pagamento é processado de forma segura pela Asaas.</p>
                    <p>Cancele ou altere seu plano quando quiser.</p>
                </div>
            </div>
        </div>
    );
}
