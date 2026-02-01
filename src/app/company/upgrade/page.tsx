import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const companyPlans = [
    {
        name: "Starter",
        price: "R$ 99",
        description: "Para empresas que precisam contratar com frequência e ter mais alcance.",
        features: [
            "Até 5 projetos ativos",
            "Convites para profissionais",
            "Filtros avançados de busca",
            "Suporte via e-mail",
        ],
        cta: "Assinar Plano Starter",
    },
    {
        name: "Business",
        price: "Sob consulta",
        description: "Para agências, estúdios e empresas com alta demanda de contratação.",
        features: [
            "Projetos ilimitados",
            "Destaque de vagas",
            "Relatórios e métricas",
            "Suporte prioritário",
        ],
        cta: "Falar com Vendas",
    }
];

export default function CompanyUpgradePage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight">Plano para Empresas</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Planos para empresas que publicam projetos e contratam profissionais.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                   Profissionais possuem planos separados para oferecer serviços.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {companyPlans.map((plan) => (
                    <Card key={plan.name} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                            <div>
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.price.startsWith("R$") && <span className="text-muted-foreground">/mês</span>}
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
                            <Button className="w-full">{plan.cta}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

             <div className="text-center text-muted-foreground text-sm">
                <p>O pagamento é processado de forma segura pela Asaas.</p>
                <p>Cancele ou altere seu plano quando quiser.</p>
                <Link href="/company" className="text-primary hover:underline mt-4 inline-block">Voltar para o dashboard</Link>
            </div>
        </div>
    );
}
