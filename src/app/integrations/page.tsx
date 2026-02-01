import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  Gitlab,
  Figma,
  Slack,
  CreditCard,
  Mail,
  Share2,
  Star,
  BarChart,
  Code,
  HeartHandshake,
  Dribbble,
  Briefcase,
  Link as LinkIcon,
  Video,
  LineChart,
  ShoppingBag,
  MessageSquare,
  KeyRound,
  ShieldCheck,
  Webhook,
  Palette,
  QrCode,
  Barcode
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Simple SVG for icons not in Lucide
const SvgIcon = ({ path }: { path: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d={path}></path>
    </svg>
);

const integrationCategories = [
  {
    title: "Redes Sociais & Presença Digital",
    description: "Login, portfólio, divulgação e credibilidade.",
    icon: <Share2 />,
    integrations: [
      { name: "Instagram", icon: <Instagram /> },
      { name: "Facebook", icon: <Facebook /> },
      { name: "LinkedIn", icon: <Linkedin /> },
      { name: "TikTok", icon: <SvgIcon path="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07C16.51 7.8 15.3 6.9 14.3 5.7c-.1-.16-.26-.3-.4-.43-.04-1.26-.04-2.52-.04-3.78zM8.3 1.31C9.07 1.11 9.84 1 10.6 1c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07-1.31-.72-2.52-1.63-3.52-2.73-.04-1.26-.04-2.52-.04-3.78z" /> },
      { name: "X (Twitter)", icon: <Twitter /> },
      { name: "Pinterest", icon: <SvgIcon path="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.084-.6-.223-2.07.034-2.902.24-.766.993-4.2 1.258-5.238.25-.99.012-1.84-.68-1.84-1.282 0-2.228 1.35-2.228 2.972 0 1.24.743 2.186 1.666 2.186.796 0 1.487-.933 1.29-2.312-.213-1.52-1.26-3.83-1.26-5.122 0-2.33 1.67-4.18 4.7-4.18 2.586 0 4.236 1.93 4.236 4.446 0 2.72-1.39 4.88-3.414 4.88-1.125 0-1.956-.91-1.72-2.016.273-1.282.83-2.67.83-3.534 0-.732-.42-1.344-1.328-1.344-.99 0-1.812.99-1.812 2.304 0 .822.312 1.67.695 2.18.04.05.05.1.02.19-.07.25-.235.91-.297 1.14-.1.4-.4.5-.8.3-1.44-.6-2.33-2.64-2.33-4.52 0-3.41 2.45-6.3 7-6.3 3.84 0 6.38 2.78 6.38 5.78 0 3.9-2.2 6.8-5.3 6.8-1.74 0-3.14-1.4-2.7-3.1.5-2.1 1.5-4.2 1.5-5.5 0-1-2-1-2-1z" /> },
      { name: "YouTube", icon: <Youtube /> },
    ],
  },
  {
    title: "Plataformas Profissionais & Código",
    description: "Para desenvolvedores e equipes técnicas.",
    icon: <Code />,
    integrations: [
      { name: "GitHub", icon: <Github /> },
      { name: "GitLab", icon: <Gitlab /> },
      { name: "Bitbucket", icon: <SvgIcon path="M22.05 15.37c.33-1.43-.22-2.58-1.26-3.46-.7-.6-1.52-1.1-2.2-1.75l-.33-.31c-.34-.31-.4-.82-.12-1.21.03-.04.05-.08.08-.12.33-.41.48-.9.4-1.4-.1-1.34-1.18-2.3-2.52-2.18-1.23.1-2.1 1.1-2.1 2.33 0 .58.21 1.11.58 1.52l.06.07c.2.25.26.58.15.89-.13.37-.47.6-.85.62l-1.35.09h-1.37c-.38.01-.72-.23-.85-.62-.11-.31-.05-.64.15-.89l.06-.07c.37-.41.58-.94.58-1.52 0-1.23-.88-2.23-2.1-2.33-1.34-.12-2.42.94-2.52 2.18-.08.5.07 1 .4 1.4.03.04.05.08.08.12.28.39.22.9-.12 1.21l-.33.31c-.68.65-1.5 1.15-2.2 1.75-1.04.88-1.6 2.03-1.26 3.46.39 1.67 2.11 2.82 4 2.82h10.3c1.89 0 3.61-1.15 4-2.82zM8.86 16.37H6.28c-.89 0-1.6.86-1.42 1.72.19.9 1.05 1.53 1.95 1.53h2.05c1.1 0 2-.9 2-2s-.9-2-2-2z" /> },
    ],
  },
  {
    title: "Design, Criação & Conteúdo",
    description: "Para criadores visuais, editores e designers.",
    icon: <Figma />,
    integrations: [
      { name: "Behance", icon: <Briefcase /> },
      { name: "Dribbble", icon: <Dribbble /> },
      { name: "Adobe Portfolio", icon: <SvgIcon path="M13.97 2.2a.66.66 0 0 0-.25-.2l-.09-.04a.63.63 0 0 0-.3-.06H3.3l9.46 22.18a.67.67 0 0 0 .63.42.66.66 0 0 0 .64-.5L20.87 2.2zM12.55 12h-5L11.7 3.5l4.13 8.5z" /> },
      { name: "Figma", icon: <Figma /> },
      { name: "Canva", icon: <Palette /> },
    ],
  },
  {
    title: "Vídeo & Streaming",
    description: "Para editores, motion e audiovisual.",
    icon: <Video />,
    integrations: [
      { name: "Vimeo", icon: <SvgIcon path="M22.9 5.8c-.2-1.7-1.1-3.4-3.1-3.4-2.1 0-3.6 1.4-4.5 3.5-.8 2-1.7 4.1-2.5 6.1-.9 2.2-1.8 4.4-2.8 4.4-1 0-1.5-1.1-2.1-3.3S7 7.5 6.4 5.9C5.9 4.3 4.9 3.2 3.6 3.2c-1.3 0-2.3 1-2.4 2.8-.2 2.7 1.7 6.6 4.6 11.5 2.8 4.9 5.2 7.5 8 7.5 2.1 0 4-1.7 4.5-5.5.5-3.5-1.2-6.5-1.2-6.5s2.5 2.3 4.3 2.9c1.8.6 3.2.3 3.6-1.1.5-1.5-1-3.4-2.5-4.4z" /> },
      { name: "YouTube Studio", icon: <Youtube /> },
      { name: "TikTok Studio", icon: <SvgIcon path="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07C16.51 7.8 15.3 6.9 14.3 5.7c-.1-.16-.26-.3-.4-.43-.04-1.26-.04-2.52-.04-3.78zM8.3 1.31C9.07 1.11 9.84 1 10.6 1c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07-1.31-.72-2.52-1.63-3.52-2.73-.04-1.26-.04-2.52-.04-3.78z" /> },
    ],
  },
  {
    title: "Analytics & Performance",
    description: "Para métricas, crescimento e tomada de decisão.",
    icon: <LineChart />,
    integrations: [
      { name: "Google Analytics", icon: <BarChart /> },
      { name: "Meta Analytics", icon: <Facebook /> },
      { name: "LinkedIn Analytics", icon: <Linkedin /> },
    ],
  },
  {
    title: "E-commerce & Negócios Digitais",
    description: "Para profissionais e empresas que vendem.",
    icon: <ShoppingBag />,
    integrations: [
      { name: "Shopify", icon: <SvgIcon path="M19.33 3.86C19.06 3.32 18.5 3 17.89 3H6.11C5.5 3 4.94 3.32 4.67 3.86L2.3 8.32c-.14.28-.21.59-.21.91V19c0 1.1.9 2 2 2h15.83c1.1 0 2-.9 2-2V9.23c0-.32-.07-.63-.21-.91l-2.3-4.46zM12 13.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" /> },
      { name: "WooCommerce", icon: <SvgIcon path="M5.9 7.78L4.35 6.22C4.16 6.03 3.84 6.03 3.65 6.22C3.46 6.41 3.46 6.72 3.65 6.91L5.55 8.81C5.74 9 6.05 9 6.24 8.81L10.34 4.71C10.53 4.52 10.53 4.2 10.34 4.01C10.15 3.82 9.84 3.82 9.65 4.01L5.9 7.78ZM19.78 12.35L17.28 9.85C17.09 9.66 16.78 9.66 16.59 9.85C16.4 10.04 16.4 10.35 16.59 10.54L19.43 13.38C19.62 13.57 19.93 13.57 20.12 13.38L23.47 10.03C23.66 9.84 23.66 9.53 23.47 9.34C23.28 9.15 22.97 9.15 22.78 9.34L19.78 12.35ZM14.84 4.01C14.65 3.82 14.34 3.82 14.15 4.01L10.4 7.78L14.15 11.53C14.34 11.72 14.65 11.72 14.84 11.53C15.03 11.34 15.03 11.03 14.84 10.84L11.59 7.59L14.84 4.34C15.03 4.15 15.03 3.84 14.84 4.01ZM20.73 17.65L19.43 16.35C19.24 16.16 18.93 16.16 18.74 16.35C18.55 16.54 18.55 16.85 18.74 17.04L20.45 18.75C20.64 18.94 20.95 18.94 21.14 18.75L23.8 16.09C23.99 15.9 23.99 15.59 23.8 15.4C23.61 15.21 23.3 15.21 23.11 15.4L20.73 17.65Z" /> },
    ],
  },
  {
    title: "Comunicação & Produtividade",
    description: "Fluxo de trabalho, reuniões e alinhamento.",
    icon: <MessageSquare />,
    integrations: [
      { name: "WhatsApp", icon: <SvgIcon path="M19.05 4.94A10 10 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.93L2 22l5.07-1.28c1.49.81 3.16 1.28 4.93 1.28 5.52 0 10-4.48 10-10a10 10 0 0 0-2.95-7.06zM12 20.25c-1.57 0-3.04-.4-4.3-1.09L5.3 20l1.1-2.4c-.8-1.3-1.2-2.8-1.2-4.4 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2zM16.5 13.5c-.2 0-.4-.1-.6-.2l-2.4-1.2c-.2-.1-.3-.1-.5.1s-.6.7-.7.9c-.1.1-.3.2-.5.1s-1-.3-1.8-1c-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.5.1-.6s.3-.3.4-.4c.1-.1.2-.3.3-.4.1-.1.1-.3 0-.4L9.1 8c-.1-.4-.2-.3-.4-.3h-.3c-.2 0-.4.1-.6.3s-.7.7-.7 1.7c0 1 .7 2 1.4 2.8.7.8 1.6 1.5 2.8 2 1.2.5 2.2.8 3 .8h.3c.2 0 .4-.1.6-.3s.7-.7.8-1.4c.1-1-.1-1.3-.2-1.4s-.3-.2-.5-.2z" /> },
      { name: "Slack", icon: <Slack /> },
      { name: "Discord", icon: <SvgIcon path="M20.3 3.7C18.9 2.7 17.3 2 15.5 1.7c-.5-.1-1 .3-1.1.8s.3 1 .8 1.1c1.5.3 2.9.9 4.1 1.7.2.1.4.1.6 0 .2-.1.3-.3.3-.5s-.1-.4-.3-.5zM3.7 3.7c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5s.1.4.3.5c1.2-.8 2.6-1.4 4.1-1.7.5-.1 1.1-.6 1.1-1.1s-.6-1-.1-.8C5.7 2 4.1 2.7 2.7 3.7c-1.4 1-2.5 2.3-3.1 3.9C-.9 8.7-.7 10 .2 11c.8 1 2 1.5 3.3 1.3.3 0 .6-.1.8-.2.5.8 1.2 1.5 2 2 .3.2.7.3 1 .3s.7-.1 1-.3c2-1.2 3.5-3.1 4-5.3.3-1.2 0-2.5-.8-3.5zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.3-2.7c-.5-1.6-1.7-2.9-3.1-3.9-1.4-1-3-1.7-4.7-2-.5-.1-1 .3-1.1.8s.3 1 .8 1.1c1.8.3 3.4 1 4.7 2 .2.1.4.1.6 0 .2-.1.3-.3.3-.5s-.1-.4-.3-.5zm-4.1-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/> },
      { name: "Zoom", icon: <Video /> },
      { name: "Google Meet", icon: <Video /> },
    ],
  },
  {
    title: "Pagamentos & Financeiro",
    description: "Para upgrade de planos e gestão de assinaturas.",
    icon: <CreditCard />,
    integrations: [
      { name: "Asaas", icon: <CreditCard /> },
      { name: "Pix", icon: <QrCode /> },
      { name: "Cartão de Crédito", icon: <CreditCard /> },
      { name: "Boleto", icon: <Barcode /> },
    ],
  },
  {
    title: "Autenticação & Segurança",
    description: "Login rápido e seguro.",
    icon: <KeyRound />,
    integrations: [
      { name: "E-mail & Senha", icon: <Mail /> },
      { name: "Google", icon: <SvgIcon path="M21.35 12.35c0-1.48-.13-2.92-.38-4.31H12v2.73h5.24c-.22 1.3-1.02 2.77-2.53 3.73v2.24h2.88c1.68-1.55 2.66-3.88 2.66-6.39z" /> },
      { name: "GitHub", icon: <Github /> },
      { name: "LinkedIn", icon: <Linkedin /> },
    ],
  },
   {
    title: "Nativas da Collabora",
    description: "Ferramentas construídas na plataforma.",
    icon: <ShieldCheck />,
    integrations: [
      { name: "Chat Interno", icon: <MessageSquare /> },
      { name: "Convites Diretos", icon: <Share2 /> },
      { name: "Candidaturas", icon: <HeartHandshake /> },
      { name: "Avaliações", icon: <Star /> },
      { name: "Webhooks Internos", icon: <Webhook /> },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Integrações Poderosas
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              A Collabora integra redes sociais, plataformas profissionais, ferramentas criativas, pagamentos e comunicação em um único painel.
            </p>
             <p className="mx-auto mt-2 max-w-2xl text-md text-muted-foreground">
              Elimine a dependência de grupos, mensagens soltas e links espalhados.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category) => (
              <Card key={category.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {category.integrations.map((integration) => (
                      <li key={integration.name} className="flex items-center gap-3">
                        <div className="text-muted-foreground">{integration.icon}</div>
                        <span className="text-foreground">{integration.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pronto para Conectar?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-accent-foreground/80">
              Junte-se à Collabora hoje e centralize seu fluxo de trabalho, da prospecção ao pagamento.
            </p>
            <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="/signup">Começar Gratuitamente</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
