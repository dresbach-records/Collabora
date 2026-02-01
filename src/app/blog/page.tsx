import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "5 Dicas para Construir um Portfólio Vencedor",
            description: "Aprenda como destacar seus melhores trabalhos e atrair os clientes certos para seus projetos de freelancer.",
            imageId: "project-thumb-2",
            date: "15 de Julho, 2024",
            category: "Carreira",
        },
        {
            id: 2,
            title: "O Futuro do Trabalho Remoto: Tendências para 2025",
            description: "Explore as tendências que estão moldando o futuro do trabalho e como profissionais e empresas podem se adaptar.",
            imageId: "about-hero",
            date: "10 de Julho, 2024",
            category: "Mercado",
        },
        {
            id: 3,
            title: "Como Contratar o Freelancer Certo para seu Projeto",
            description: "Um guia passo a passo para empresas que buscam encontrar, avaliar e contratar o talento ideal na Collabora.",
            imageId: "project-thumb-1",
            date: "5 de Julho, 2024",
            category: "Contratação",
        }
    ];

    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog da Collabora</h1>
                    <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                        Insights, dicas e tendências sobre o futuro do trabalho digital.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => {
                        const image = PlaceHolderImages.find(p => p.id === post.imageId);
                        return (
                            <Card key={post.id} className="flex flex-col overflow-hidden">
                                {image && (
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={image.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardDescription>{post.date} &bull; {post.category}</CardDescription>
                                    <CardTitle className="text-xl">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{post.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="#" className="font-semibold text-primary hover:underline">
                                        Ler mais &rarr;
                                    </Link>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
