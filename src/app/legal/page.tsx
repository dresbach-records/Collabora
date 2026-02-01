import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LegalPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Documentos Legais</CardTitle>
            <CardDescription>
              Termos de Uso, Políticas de Privacidade e outras informações
              importantes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">
              Termos de Uso
            </h2>
            <p>
              Ao utilizar a plataforma Collabora, você concorda com nossos
              Termos de Uso. Este documento rege seu acesso e uso de nossos
              serviços, estabelecendo os direitos e responsabilidades de todas
              as partes (Profissionais, Empresas e Tech Labs). É fundamental que
              você leia este documento com atenção.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              Política de Privacidade
            </h2>
            <p>
              Nossa Política de Privacidade descreve como coletamos, usamos e
              protegemos suas informações pessoais. A transparência é um de
              nossos valores, e estamos comprometidos em proteger sua
              privacidade e seus dados, em conformidade com a LGPD e outras
              regulamentações aplicáveis.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              Política de Cookies
            </h2>
            <p>
              Utilizamos cookies para melhorar sua experiência em nossa
              plataforma. Nossa Política de Cookies explica quais cookies
              utilizamos, por que os utilizamos e como você pode gerenciá-los.
            </p>

             <h2 className="text-xl font-semibold text-foreground">
              Responsabilidades da Comunidade
            </h2>
            <p>
              A Collabora é uma comunidade. Todos os usuários devem seguir
              nossas diretrizes para garantir um ambiente seguro, profissional e
              respeitoso. Condutas que violem nossas políticas resultarão em
              ações de moderação, que podem incluir advertências, suspensões ou
              banimento da plataforma.
            </p>
            <p className="pt-4">
              Para mais detalhes, por favor, consulte a página específica de
              cada documento. Em caso de dúvidas, entre em contato com nosso
              suporte.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
