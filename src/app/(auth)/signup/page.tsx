'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Github, Linkedin } from "lucide-react";

// Professional Form Steps
const ProfessionalStep1 = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Nome</Label>
      <Input id="name" placeholder="Seu nome completo" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="email" placeholder="m@example.com" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Senha</Label>
      <Input id="password" type="password" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="confirm-password">Confirmar senha</Label>
      <Input id="confirm-password" type="password" required />
    </div>
  </div>
);

const ProfessionalStep2 = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="prof-name">Nome profissional</Label>
      <Input id="prof-name" placeholder="Como você quer ser chamado" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="headline">Headline</Label>
      <Input id="headline" placeholder="Ex: Editor de Vídeo | Motion" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="categories">Categoria(s) de atuação</Label>
      <Input id="categories" placeholder="Design, Desenvolvimento, etc." required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="bio">Bio curta</Label>
      <Textarea id="bio" placeholder="Fale um pouco sobre você" />
    </div>
  </div>
);

const ProfessionalStep3 = () => (
    <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="tools">Ferramentas / stack</Label>
            <Input id="tools" placeholder="Figma, React, Adobe Premiere..." />
        </div>
        <div className="space-y-2">
            <Label htmlFor="portfolio-link">Link externo (Portfólio)</Label>
            <Input id="portfolio-link" placeholder="GitHub, Behance, etc." />
        </div>
        <div className="space-y-2">
            <Label htmlFor="availability">Disponibilidade</Label>
            <Select>
                <SelectTrigger id="availability">
                    <SelectValue placeholder="Selecione sua disponibilidade" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="available">Disponível</SelectItem>
                    <SelectItem value="unavailable">Indisponível</SelectItem>
                    <SelectItem value="part-time">Parcial</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
);


// Company Form Steps
const CompanyStep1 = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="company-name">Nome da empresa</Label>
      <Input id="company-name" placeholder="Nome da sua empresa" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="email" placeholder="contato@empresa.com" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Senha</Label>
      <Input id="password" type="password" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="confirm-password">Confirmar senha</Label>
      <Input id="confirm-password" type="password" required />
    </div>
  </div>
);

const CompanyStep2 = () => (
    <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="public-name">Nome público da empresa</Label>
            <Input id="public-name" placeholder="Nome que aparecerá no site" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="company-type">Tipo</Label>
            <Select>
                <SelectTrigger id="company-type">
                    <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="agency">Agência</SelectItem>
                    <SelectItem value="studio">Estúdio</SelectItem>
                    <SelectItem value="digital-company">Empresa Digital</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="space-y-2">
            <Label htmlFor="company-description">Descrição curta</Label>
            <Textarea id="company-description" placeholder="Uma breve descrição da sua empresa" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="segment">Segmento</Label>
            <Input id="segment" placeholder="Tecnologia, Marketing, etc." />
        </div>
    </div>
);

const CompanyStep3 = () => (
    <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="stack">Stack / ferramentas utilizadas</Label>
            <Input id="stack" placeholder="React, Figma, Google Cloud..." />
        </div>
        <div className="space-y-2">
            <Label htmlFor="location">Localização (opcional)</Label>
            <Input id="location" placeholder="Cidade, Estado" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="team-size">Tamanho da equipe (opcional)</Label>
            <Input id="team-size" placeholder="Ex: 1-10" />
        </div>
    </div>
);


export default function SignupPage() {
    const [role, setRole] = useState("professional");
    const [step, setStep] = useState(0); // 0: role selection, 1-3: form steps

    const totalSteps = 3;
    const progress = step > 0 ? (step / totalSteps) * 100 : 0;

    const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
    const handleBack = () => setStep(s => Math.max(s - 1, 0));

    const renderStepContent = () => {
        if (step === 0) {
            return (
                <div className="space-y-4">
                    <div className="space-y-2 text-center">
                        <CardTitle className="text-2xl">Crie sua conta gratuita</CardTitle>
                        <CardDescription>Junte-se à Collabora para contratar ou ser contratado.</CardDescription>
                    </div>
                    <Label>Primeiro, diga-nos quem você é:</Label>
                    <RadioGroup value={role} onValueChange={setRole} className="grid grid-cols-2 gap-4">
                        <div>
                            <RadioGroupItem value="professional" id="professional" className="peer sr-only" />
                            <Label
                                htmlFor="professional"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                Sou um Profissional
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="company" id="company" className="peer sr-only" />
                            <Label
                                htmlFor="company"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                Sou uma Empresa
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            )
        }
        if (role === 'professional') {
            if (step === 1) return <ProfessionalStep1 />;
            if (step === 2) return <ProfessionalStep2 />;
            if (step === 3) return <ProfessionalStep3 />;
        }
        if (role === 'company') {
            if (step === 1) return <CompanyStep1 />;
            if (step === 2) return <CompanyStep2 />;
            if (step === 3) return <CompanyStep3 />;
        }
        return null;
    }

    const getStepTitle = () => {
        if (step === 0) return "";
        const titles = role === 'professional' ?
            ["Crie sua Conta", "Complete seu Perfil", "Detalhes Finais"] :
            ["Crie a Conta da Empresa", "Perfil da Empresa", "Detalhes Adicionais"];
        return titles[step-1] || "";
    }


    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardHeader>
                {step > 0 && (
                    <>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-xl">{getStepTitle()}</CardTitle>
                            <span className="text-sm text-muted-foreground">Passo {step} de {totalSteps}</span>
                        </div>
                        <Progress value={progress} className="w-full mt-2 h-2" />
                    </>
                )}
            </CardHeader>
            <CardContent className="space-y-4">
                {renderStepContent()}
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                {step === 0 ? (
                     <Button className="w-full" onClick={handleNext}>Continuar</Button>
                ) : (
                    <div className="w-full flex gap-4">
                        {step > 1 && <Button variant="outline" className="w-full" onClick={handleBack}>Voltar</Button>}
                        {step < totalSteps ? (
                            <Button className="w-full" onClick={handleNext}>Continuar</Button>
                        ) : (
                            <Button className="w-full" asChild>
                                <Link href="/dashboard">Finalizar cadastro</Link>
                            </Button>
                        )}
                    </div>
                )}
                <div className="relative w-full pt-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                            {step === 0 ? 'Ou cadastre-se com' : 'Ou'}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </Button>
                    <Button variant="outline">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                    </Button>
                </div>
                
                <p className="text-sm text-center text-muted-foreground pt-2">
                    Já tem uma conta?{" "}
                    <Link href="/login" className="font-medium text-primary hover:underline">
                        Entrar
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
