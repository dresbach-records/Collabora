'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="items-center text-center space-y-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/iconecolabora.ico" alt="Collabora icon" width={32} height={32} />
          <span className="text-3xl font-bold text-foreground">Collabora</span>
        </Link>
        <div className="space-y-1">
          <CardTitle className="text-2xl">Esqueceu sua senha?</CardTitle>
          <CardDescription>Sem problemas. Insira seu e-mail e enviaremos um link para redefinir sua senha.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <Button className="w-full" size="lg">Enviar link de redefinição</Button>
      </CardContent>
      <CardFooter>
         <Button variant="link" className="w-full text-sm text-muted-foreground" asChild>
            <Link href="/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o login
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
