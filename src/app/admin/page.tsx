'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, FolderKanban, TrendingUp, MoreHorizontal } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { PlaceHolderImages } from "@/lib/placeholder-images";

const engagementData = [
  { date: '21.11', value: 283 },
  { date: '22.11', value: 350 },
  { date: '23.11', value: 320 },
  { date: '24.11', value: 410 },
  { date: '25.11', value: 390 },
  { date: '26.11', value: 450 },
  { date: '27.11', value: 420 },
];

const activityData = [
  { date: '21.11', value: 32 },
  { date: '22.11', value: 33 },
  { date: '23.11', value: 31 },
  { date: '24.11', value: 34 },
  { date: '25.11', value: 35 },
  { date: '26.11', value: 36 },
  { date: '27.11', value: 35 },
];

const professionalsBarData = [
    { name: '21', value: 12 },
    { name: '22', value: 19 },
    { name: '23', value: 15 },
    { name: '24', value: 22 },
    { name: '25', value: 18 },
    { name: '26', value: 25 },
    { name: '27', value: 21 },
];

const companies = [
    { name: 'Techmadas', type: 'TechMedis', status: 'Ativa', logo: '8', logoBg: 'bg-orange-500' },
    { name: 'H96', desc: 'Tencisa & Sanat', status: 'Pendente', logo: 'H', logoBg: 'bg-gray-700' },
    { name: 'Luna Studio', status: 'Pendente', logo: 'N', logoBg: 'bg-blue-500' },
    { name: 'C6namento', desc: 'Luna Stedes', status: 'Convidar', logo: '💡', logoBg: 'bg-yellow-400' },
]

const professionals = [
    { name: 'Amanda Costa', tag: 'tag React & TypeScript', avatarId: 'profile-avatar-1' },
    { name: 'Joán Silva', tag: 'Figma & Sketch', avatarId: 'testimonial-3', status: 'online' },
    { name: 'Pectro Ar Martins', tag: 'Nouto Tegtak', avatarId: 'testimonial-1', status: 'online' },
    { name: 'Pedro Marttins', tag: 'Rraits Flagis', avatarId: 'profile-avatar-2', status: 'offline' }
]

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 text-[#2D323C]">
      <div>
        <h1 className="text-2xl font-bold">Dashboard da Tech Labs</h1>
        <p className="text-muted-foreground">Voce controla a plataformare de taletos da Tech Labs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5 text-orange-500" />
              <span>Empresas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-2xl font-bold">986</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Ativas</p>
                <p className="text-2xl font-bold">813</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Recentes</p>
                <p className="text-2xl font-bold">453</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold">112</p>
              </div>
          </CardContent>
          <CardFooter className="pt-4">
             <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white text-sm h-9">Gerenciar &gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-orange-500" />
              <span>Profissionais</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Registrados</p>
                <p className="text-2xl font-bold">1,245</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Conectados</p>
                <p className="text-2xl font-bold">326</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Incompletos</p>
                <p className="text-2xl font-bold">326</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Candidatos</p>
                <p className="text-2xl font-bold">812</p>
              </div>
          </CardContent>
          <CardFooter className="pt-4">
             <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white text-sm h-9">Gerenciar &gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <FolderKanban className="w-5 h-5 text-orange-500" />
              <span>Projetos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Ativos</p>
                <p className="text-2xl font-bold">1,012</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Concluídos</p>
                <p className="text-2xl font-bold">2,396</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Em análise</p>
                <p className="text-2xl font-bold">2,339</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold">126</p>
              </div>
          </CardContent>
          <CardFooter className="pt-4">
             <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white text-sm h-9">Gerenciar &gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span>Engajamento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[124px] pt-2 flex flex-col justify-between">
            <div className="space-y-1 text-sm">
                <p><span className="font-bold">283</span> Candidaturas</p>
                <p><span className="font-bold">1,205</span> Convites</p>
                <p><span className="font-bold">89%</span> Convites Aceitos</p>
                <p><span className="font-bold">9,455</span> Mensagens</p>
            </div>
            <div className="h-[30px] -mx-6 -mb-5">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F97316" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Tooltip 
                        contentStyle={{ fontSize: '12px', padding: '2px 8px', border: 'none', background: 'transparent' }}
                        labelStyle={{ display: 'none' }}
                        itemStyle={{ color: '#F97316', fontWeight: 'bold' }}
                        cursor={false}
                    />
                    <Area type="monotone" dataKey="value" stroke="#F97316" strokeWidth={2} fill="url(#colorUv)" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <Tabs defaultValue="empresas" className="w-full">
                        <TabsList className="bg-transparent p-0 h-auto">
                            <TabsTrigger value="empresas" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Empresas</TabsTrigger>
                            <TabsTrigger value="recentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Recentes</TabsTrigger>
                            <TabsTrigger value="candidates" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Candidatos</TabsTrigger>
                            <TabsTrigger value="pendentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Pendentes</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </CardHeader>
                <CardContent className="space-y-4">
                   {companies.map(company => (
                        <div key={company.name} className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-xl ${company.logoBg}`}>{company.logo}</div>
                                <div>
                                    <p className="font-bold">{company.name}</p>
                                    {company.desc && <p className="text-xs text-muted-foreground">{company.desc}</p>}
                                </div>
                            </div>
                             <div className="text-right flex items-center gap-2">
                                {company.name === 'Techmadas' && (
                                    <>
                                        <div className="text-right">
                                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 font-medium">Ativa</Badge>
                                            <p className="text-xs text-muted-foreground">{company.type}</p>
                                        </div>
                                        <Button size="sm" className="bg-orange-500 text-white h-8 hover:bg-orange-600">Gerenciar</Button>
                                    </>
                                )}
                                {company.status === 'Pendente' && <Button variant="outline" size="sm" className="h-8">Convidar</Button>}
                                {company.status === 'Convidar' && <Button variant="outline" size="sm" className="h-8">Convidar</Button>}
                            </div>
                        </div>
                   ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-lg">Gráfico de Atividade</CardTitle>
                    <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4"/></Button>
                </CardHeader>
                <CardContent className="h-[200px] -ml-6">
                    <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activityData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="activityColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" tick={{fontSize: 12}} stroke="#aaa" axisLine={false} tickLine={false} />
                        <YAxis tick={{fontSize: 12}} stroke="#aaa" axisLine={false} tickLine={false} domain={['dataMin - 2', 'dataMax + 2']}/>
                        <Tooltip contentStyle={{ fontSize: '12px', padding: '4px 8px', borderRadius: '6px' }} />
                        <Area type="monotone" dataKey="value" stroke="#F97316" strokeWidth={2} fill="url(#activityColor)" />
                    </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

        </div>
        <div className="lg:col-span-3 space-y-6">
            <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-xl font-bold">Profissionais</CardTitle>
                    <Tabs defaultValue="recentes" className="w-auto">
                        <TabsList className="bg-transparent p-0 h-auto">
                            <TabsTrigger value="perfis" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Perfis</TabsTrigger>
                            <TabsTrigger value="recentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Recentes</TabsTrigger>
                            <TabsTrigger value="engaamentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Engajamentos</TabsTrigger>
                             <TabsTrigger value="fenguprugs" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 px-3 py-2 text-base">Destaques</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="w-full md:w-2/5 space-y-3">
                         <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12">
                                <AvatarImage src={PlaceHolderImages.find(p=>p.id===professionals[0].avatarId)?.imageUrl} />
                                <AvatarFallback>{professionals[0].name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold text-base">{professionals[0].name}</p>
                                <p className="text-sm text-muted-foreground">{professionals[0].tag}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <Button variant="outline" size="sm" className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200/80 h-8">Projetos</Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">+</Button>
                            <Button variant="outline" size="sm" className="h-8">Solicitar</Button>
                             <Button variant="outline" size="sm" className="h-8">Ver Histórico</Button>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 flex gap-4 items-center">
                        <div className="w-1/3">
                             <Button size="sm" className="w-full bg-orange-500 text-white h-9 hover:bg-orange-600">Gerenciar</Button>
                        </div>
                        <div className="w-2/3 h-[80px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={professionalsBarData}>
                                <XAxis dataKey="name" tick={{fontSize: 10}} stroke="#aaa" axisLine={false} tickLine={false}/>
                                <Tooltip contentStyle={{ fontSize: '12px', padding: '2px 6px', borderRadius: '4px' }}/>
                                <Bar dataKey="value" fill="#F97316" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle className="text-xl font-bold">Acompanhamento de Profissionais</CardTitle>
                        <Tabs defaultValue="acesoe" className="w-auto">
                        <TabsList className="bg-transparent p-0 h-auto">
                            <TabsTrigger value="acesoe" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm px-2 py-1">Acessos</TabsTrigger>
                            <TabsTrigger value="vativas" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm px-2 py-1">Ativos</TabsTrigger>
                            <TabsTrigger value="candidatos" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm px-2 py-1">Candidatos</TabsTrigger>
                            <TabsTrigger value="messagnes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm px-2 py-1">Mensagens</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    </div>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {professionals.slice(1).map(prof => (
                        <div key={prof.name} className="border rounded-lg p-4 flex flex-col items-center text-center">
                             <Avatar className="w-16 h-16 mb-2">
                                <AvatarImage src={PlaceHolderImages.find(p=>p.id===prof.avatarId)?.imageUrl} />
                                <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                                {prof.status === 'online' && <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
                            </Avatar>
                            <p className="font-bold">{prof.name}</p>
                            <p className="text-xs text-muted-foreground mb-2">{prof.tag}</p>
                            <div className="flex flex-wrap gap-1 text-sm my-2 justify-center">
                                <Button variant="outline" size="sm" className="h-7 text-xs bg-green-100 text-green-700 border-green-200 hover:bg-green-200/80">Recomendar</Button>
                                <Button variant="outline" size="sm" className="h-7 w-7 p-0">+</Button>
                                <Button variant="outline" size="sm" className="h-7 w-7 p-0">+</Button>
                                <Button variant="outline" size="sm" className="h-7 w-7 p-0">+</Button>
                            </div>
                            <Button size="sm" className="w-full bg-orange-500 text-white h-8 text-xs hover:bg-orange-600">Convidar para Projeto</Button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
