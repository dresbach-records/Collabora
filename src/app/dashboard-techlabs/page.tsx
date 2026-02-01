import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechLabsDashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Tech Labs Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo ao seu painel</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Este é o painel de controle da Tech Labs. Assim que você me enviar a imagem do design, eu o construirei para ser idêntico.</p>
        </CardContent>
      </Card>
    </div>
  );
}
