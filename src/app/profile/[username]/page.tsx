import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profiles, users } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Briefcase, CheckCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function UserProfilePage({ params }: { params: { username: string } }) {
    const user = users.find(u => u.username === params.username);
    const profile = profiles.find(p => p.username === params.username);
    const avatar = user ? PlaceHolderImages.find(p => p.id === user.avatarUrlId) : null;

    if (!user || !profile) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold">Perfil não encontrado</h1>
                <p className="text-muted-foreground">O usuário que você está procurando não existe.</p>
                <Button asChild className="mt-4">
                    <Link href="/talent">Encontrar outros profissionais</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <Card>
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                {avatar && (
                                    <Avatar className="w-32 h-32 border-4 border-primary">
                                        <AvatarImage src={avatar.imageUrl} alt={profile.name} />
                                        <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
                                <p className="text-muted-foreground">{profile.headline}</p>
                                <div className="flex items-center gap-2 mt-2 text-green-500">
                                    <CheckCircle className="h-5 w-5"/>
                                    <span className="font-semibold">{profile.isAvailable ? 'Disponível para projetos' : 'Indisponível no momento'}</span>
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <Button><Mail className="mr-2"/> Contatar</Button>
                                    <Button variant="outline">Seguir</Button>
                                </div>

                                <div className="text-left w-full mt-6 space-y-2">
                                     <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="h-4 w-4"/>
                                        <span>Localização não informada</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Briefcase className="h-4 w-4"/>
                                        <span className="capitalize">{profile.categories.join(', ')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <span className="font-semibold text-foreground">R${profile.rate?.min} - R${profile.rate?.max}</span> / por {profile.rate?.unit === 'hour' ? 'hora' : 'projeto'}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sobre mim</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{profile.bio}</p>

                                <h3 className="font-bold text-lg mt-6 mb-2">Habilidades</h3>
                                <div className="flex flex-wrap gap-2">
                                    {profile.skills.map(skill => (
                                        <Badge key={skill}>{skill}</Badge>
                                    ))}
                                </div>

                                <h3 className="font-bold text-lg mt-6 mb-2">Ferramentas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {profile.tools.map(tool => (
                                        <Badge variant="secondary" key={tool}>{tool}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
