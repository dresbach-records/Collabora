import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo ao seu Painel!</CardTitle>
          <CardDescription>
            Este é o seu centro para gerenciar projetos, candidaturas e seu perfil.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mais recursos e widgets em breve!</p>
        </CardContent>
      </Card>
    </div>
  );
}
