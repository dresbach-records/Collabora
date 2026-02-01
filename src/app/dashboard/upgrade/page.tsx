import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const professionalPlans = [
    {
        name: "Pro",
        price: "R$ 49",
        description: "Para profissionais que buscam mais visibilidade e oportunidades.",
        features: [
            "Destaque em buscas",
            "Até 30 candidaturas/mês",
            "Portfólio com mais projetos",
            "Selos de verificação",
        ],
        cta: "Assinar Plano Pro",
    },
    {
        name: "Elite",
        price: "R$ 99",
        description: "Acesso total à plataforma, com máximo alcance e suporte prioritário.",
        features: [
            "Tudo do plano Pro",
            "Candidaturas ilimitadas",
            "Destaque máximo nos serviços",
            "Suporte prioritário via WhatsApp",
        ],
        cta: "Assinar Plano Elite",
    }
];


export default function ProfessionalUpgradePage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight">Upgrade do Plano Profissional</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Planos exclusivos para profissionais que oferecem serviços e querem se destacar.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                    Empresas possuem planos separados para contratação.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {professionalPlans.map((plan) => (
                    <Card key={plan.name} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                            <div>
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-muted-foreground">/mês</span>
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
                <p>Você pode cancelar a qualquer momento.</p>
                <Link href="/dashboard" className="text-primary hover:underline mt-4 inline-block">Voltar para o dashboard</Link>
            </div>
        </div>
    );
}
