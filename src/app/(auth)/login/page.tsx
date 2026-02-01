'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="items-center text-center space-y-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/iconecolabora.ico" alt="Collabora icon" width={32} height={32} />
          <span className="text-3xl font-bold text-foreground">Collabora</span>
        </Link>
        <div className="space-y-1">
          <CardTitle className="text-2xl">Bem-vindo de volta</CardTitle>
          <CardDescription>Faça login na sua conta Collabora para continuar.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                        href="#"
                        className="text-sm font-medium text-primary hover:underline"
                    >
                        Esqueceu a senha?
                    </Link>
                </div>
                <Input id="password" type="password" required />
            </div>
        </div>

        <Button className="w-full" size="lg">Entrar</Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Ou entre com
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button variant="outline" className="h-12">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button variant="outline" className="h-12">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </CardContent>
      <CardFooter>
         <p className="w-full text-sm text-center text-muted-foreground">
          Não tem uma conta?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Cadastre-se
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
