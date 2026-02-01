import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqsPage() {
  const faqs = [
    {
      question: 'O que é a Collabora?',
      answer:
        'A Collabora é uma plataforma que conecta empresas a profissionais digitais qualificados (freelancers, desenvolvedores, designers, etc.) de forma direta, transparente e eficiente.',
    },
    {
      question: 'Como funciona para empresas?',
      answer:
        'Empresas podem se cadastrar gratuitamente, criar um perfil, publicar projetos detalhando suas necessidades e receber candidaturas de profissionais qualificados. A comunicação é direta e o processo de contratação é simplificado.',
    },
    {
      question: 'Como funciona para profissionais?',
      answer:
        'Profissionais criam um perfil público com seu portfólio, habilidades e experiência. Eles podem buscar projetos, se candidatar a oportunidades e receber convites diretos de empresas interessadas em seus serviços.',
    },
    {
      question: 'Existe alguma taxa de comissão sobre os projetos?',
      answer:
        'Não. A Collabora opera com um modelo de assinatura (SaaS). Não cobramos nenhuma comissão sobre os valores dos projetos negociados entre empresas e profissionais. A negociação é 100% livre entre as partes.',
    },
    {
        question: 'O cadastro na plataforma é gratuito?',
        answer: 'Sim! Tanto empresas quanto profissionais podem se cadastrar gratuitamente para começar a usar a plataforma. Oferecemos planos pagos com funcionalidades adicionais para usuários com maior demanda.'
    },
    {
      question: 'Como os pagamentos são processados?',
      answer:
        'Os pagamentos referentes às assinaturas dos planos (Pro, Elite, Starter, etc.) são processados de forma segura através do nosso gateway de pagamento, Asaas. Os pagamentos de projetos são combinados diretamente entre a empresa e o profissional.',
    },
  ];

  return (
    <div className="bg-secondary">
      <div className="container py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Perguntas Frequentes
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            Encontre aqui as respostas para as dúvidas mais comuns sobre a
            plataforma Collabora.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
