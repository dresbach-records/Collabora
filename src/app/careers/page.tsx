import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    const openPositions = [
        {
            title: "Engenheiro(a) de Software Pleno (Backend)",
            location: "Remoto (Brasil)",
            department: "Engenharia",
        },
        {
            title: "UX/UI Designer Sênior",
            location: "Remoto (América Latina)",
            department: "Produto",
        },
        {
            title: "Analista de Marketing de Conteúdo",
            location: "Remoto",
            department: "Marketing",
        }
    ];

    return (
        <div className="bg-background">
            <section className="bg-secondary py-20 md:py-28 text-center">
                <div className="container">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Junte-se à Nossa Missão
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        Estamos construindo o futuro do trabalho digital. Se você é apaixonado por tecnologia, design e por conectar pessoas, seu lugar é aqui.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vagas Abertas</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Estamos sempre em busca de pessoas talentosas para se juntarem ao time da Tech Labs e impulsionar a plataforma Collabora.
                        </p>
                    </div>

                    <div className="mt-12 max-w-4xl mx-auto space-y-6">
                        {openPositions.map((position) => (
                             <Card key={position.title} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                   <div>
                                     <h3 className="text-xl font-semibold text-primary">{position.title}</h3>
                                     <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground mt-2">
                                         <div className="flex items-center gap-2">
                                             <Briefcase className="h-4 w-4" />
                                             <span>{position.department}</span>
                                         </div>
                                         <div className="flex items-center gap-2">
                                             <MapPin className="h-4 w-4" />
                                             <span>{position.location}</span>
                                         </div>
                                     </div>
                                   </div>
                                    <Button asChild className="shrink-0 mt-4 sm:mt-0">
                                        <Link href="#">Ver Detalhes</Link>
                                    </Button>
                                </CardContent>
                             </Card>
                        ))}
                    </div>

                     <div className="text-center mt-12">
                        <p className="text-muted-foreground">Não encontrou uma vaga para você?</p>
                        <Button variant="link" asChild>
                            <Link href="#">Envie seu currículo para nosso banco de talentos</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
