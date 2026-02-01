import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Política de Privacidade</CardTitle>
            <CardDescription>
              Última atualização: 18 de Julho de 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              A sua privacidade é de extrema importância para a Collabora (operada pela Tech Labs). Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossos serviços.
            </p>

            <h2 className="text-xl font-semibold text-foreground pt-4">1. Informações que Coletamos</h2>
            <p>
              <strong>Informações de Cadastro:</strong> Nome, e-mail, senha, e tipo de conta (Profissional ou Empresa).
              <br />
              <strong>Informações de Perfil:</strong> Para profissionais, coletamos informações como headline, bio, habilidades, ferramentas, categorias, portfólio e valor/hora. Para empresas, coletamos nome da empresa, descrição, indústria, etc.
              <br/>
              <strong>Dados de Uso:</strong> Coletamos informações sobre como você interage com nossa plataforma, como projetos visualizados, candidaturas enviadas e mensagens trocadas.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">2. Como Usamos Suas Informações</h2>
            <p>
              Para operar e manter nossa plataforma.
              <br />
              Para conectar profissionais e empresas.
              <br />
              Para processar pagamentos de planos e assinaturas.
              <br/>
              Para nos comunicarmos com você sobre sua conta e atualizações do serviço.
              <br/>
              Para melhorar e personalizar sua experiência na Collabora.
            </p>

            <h2 className="text-xl font-semibold text-foreground pt-4">3. Compartilhamento de Informações</h2>
            <p>
              Seu perfil público (profissional ou de empresa) é visível para outros usuários da plataforma.
              <br/>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito.
              <br/>
              Podemos compartilhar informações com provedores de serviços que nos auxiliam na operação da plataforma (como o gateway de pagamento Asaas), sempre sob estritos acordos de confidencialidade.
            </p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">4. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2 className="text-xl font-semibold text-foreground pt-4">5. Seus Direitos</h2>
             <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais. Você pode gerenciar a maioria de suas informações diretamente nas configurações de sua conta.
            </p>

            <p className="pt-4">
              Em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco através da nossa página de contato.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
