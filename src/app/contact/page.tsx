import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, HelpCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Fale Conosco</h1>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            Tem alguma dúvida, sugestão ou precisa de suporte? Nossa equipe está pronta para ajudar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <a href="tel:+555137863020" className="text-muted-foreground hover:text-primary">+55 51 3786-3020</a><br/>
                    <a href="tel:+5551981446019" className="text-muted-foreground hover:text-primary">+55 51 98144-6019</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <a href="mailto:contato@collabora.com" className="text-muted-foreground hover:text-primary">contato@collabora.com</a>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Suporte</h3>
                    <p className="text-muted-foreground">Para dúvidas, visite nossa <a href="/faqs" className="text-primary hover:underline">Central de Ajuda</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Como podemos ajudar?" rows={5} />
              </div>
              <Button type="submit" className="w-full">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
