import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, BarChart, Briefcase, DollarSign, PlusCircle, Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const recentApplicants = [
    { id: 1, name: 'Ana Pereira', role: 'UX/UI Designer', avatarId: 'testimonial-2' },
    { id: 2, name: 'Carlos Lima', role: 'Frontend Developer', avatarId: 'testimonial-1' },
    { id: 3, name: 'Mariana Costa', role: 'Motion Designer', avatarId: 'profile-avatar-1' },
];

const activeProjects = [
    { id: 'proj-1', title: 'Design de App Mobile', status: 'Em andamento', applicants: 12, budget: 'R$ 8.000' },
    { id: 'proj-2', title: 'Revisão de Conteúdo', status: 'Em pausa', applicants: 5, budget: 'R$ 3.500' },
];

export default function CompanyDashboardPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard da Empresa</h1>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Ver página pública</Button>
                    <Button asChild>
                        <Link href="/projects/new">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Novo Projeto
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">R$ 45.231,89</div>
                        <p className="text-xs text-muted-foreground">+20.1% do último mês</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">1 finalizado este mês</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Candidaturas</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+23</div>
                        <p className="text-xs text-muted-foreground">+12 na última semana</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Visitas na Página</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">+80 desde ontem</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Projetos Ativos</CardTitle>
                        <CardDescription>Gerencie seus projetos e veja as candidaturas.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* Mobile view: List */}
                        <div className="space-y-4 md:hidden">
                            {activeProjects.map((project) => (
                                <div key={project.id} className="rounded-lg border p-4">
                                    <div className="flex justify-between items-start">
                                        <div className="font-medium">{project.title}</div>
                                        <Badge variant={project.status === 'Em andamento' ? 'default' : 'secondary'} className="shrink-0">{project.status}</Badge>
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">Orçamento: {project.budget}</div>
                                    <div className="mt-1 text-sm text-muted-foreground">{project.applicants} candidaturas</div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop view: Table */}
                        <div className="hidden md:block">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Projeto</TableHead>
                                        <TableHead className="text-center">Status</TableHead>
                                        <TableHead className="text-center">Candidaturas</TableHead>
                                        <TableHead className="text-right">Orçamento</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {activeProjects.map((project) => (
                                        <TableRow key={project.id}>
                                            <TableCell>
                                                <div className="font-medium">{project.title}</div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Badge variant={project.status === 'Em andamento' ? 'default' : 'secondary'}>{project.status}</Badge>
                                            </TableCell>
                                            <TableCell className="text-center">{project.applicants}</TableCell>
                                            <TableCell className="text-right">{project.budget}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Candidatos Recentes</CardTitle>
                        <CardDescription>Novos talentos se candidataram aos seus projetos.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentApplicants.map(applicant => {
                            const avatar = PlaceHolderImages.find(p => p.id === applicant.avatarId);
                            return (
                                <div className="flex items-center gap-4" key={applicant.id}>
                                    <Avatar className="h-9 w-9">
                                        {avatar && <AvatarImage src={avatar.imageUrl} alt={applicant.name} />}
                                        <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium leading-none">{applicant.name}</p>
                                        <p className="text-sm text-muted-foreground">{applicant.role}</p>
                                    </div>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href="#">Ver Perfil</Link>
                                    </Button>
                                </div>
                            );
                        })}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <ArrowUpRight className="mr-2 h-4 w-4" /> Ver todos os candidatos
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
