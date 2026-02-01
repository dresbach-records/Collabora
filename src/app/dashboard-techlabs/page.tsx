'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, FolderKanban, TrendingUp, MoreHorizontal } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';

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
    { name: 'Techmadas', status: 'Ativa', type: 'TechMedis', logo: '8', logoBg: 'bg-orange-500' },
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

export default function TechLabsDashboardPage() {
  return (
    <div className="flex flex-col gap-6 text-[#2D323C]">
      <div>
        <h1 className="text-2xl font-bold">Dashboard da Tech Labs</h1>
        <p className="text-muted-foreground">Voce controla a plataformare de taletos da Tech Labs.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5 text-orange-500" />
              <span>Emprsies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div><span className="text-2xl font-bold">986</span><span className="text-sm ml-2">Ativas</span></div>
                <div><span className="text-2xl font-bold">813</span><span className="text-sm ml-2">Recents</span></div>
                <div><span className="text-2xl font-bold">453</span><span className="text-sm ml-2">Ativas</span></div>
                <div><span className="text-2xl font-bold">112</span><span className="text-sm ml-2">pendentes</span></div>
            </div>
          </CardContent>
          <CardFooter>
             <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white text-xs h-8">Gerenaiar &gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-orange-500" />
              <span>Profissionais</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div><span className="text-2xl font-bold">1,245</span><span className="text-sm ml-2">Registorados</span></div>
                <div><span className="text-2xl font-bold">326</span><span className="text-sm ml-2">Conectdos</span></div>
                <div><span className="text-2xl font-bold">326</span></div>
                <div><span className="text-2xl font-bold">812</span><span className="text-sm ml-2">pendicatos</span></div>
            </div>
          </CardContent>
          <CardFooter>
             <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white text-xs h-8">Gerenalar &gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <FolderKanban className="w-5 h-5 text-orange-500" />
              <span>Projects</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div><span className="text-2xl font-bold">1,012</span><span className="text-sm ml-2">Ativos</span></div>
                <div><span className="text-2xl font-bold">2,396</span><span className="text-sm ml-2">Concluidos</span></div>
                <div><span className="text-2xl font-bold">2,339</span></div>
                <div><span className="text-2xl font-bold">126</span><span className="text-sm ml-2">pendentes</span></div>
            </div>
          </CardContent>
          <CardFooter>
             <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white text-xs h-8">Gerenaiar &gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-600">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span>Enggamento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[100px] -ml-6">
            <div className="grid grid-cols-2">
                <div className="pl-6">
                    <p><span className="font-bold">Candidaturas</span></p>
                    <p><span className="font-bold">283</span> Convites</p>
                    <p>Eccetos</p>
                </div>
                 <div>
                    <p><span className="font-bold">883</span> Convites Aceitos</p>
                    <p><span className="font-bold">9,455</span> Mecents</p>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="60%">
              <AreaChart data={engagementData} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F97316" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Tooltip 
                    contentStyle={{ fontSize: '12px', padding: '4px 8px' }}
                    labelStyle={{ display: 'none' }}
                    itemStyle={{ color: '#F97316' }}
                />
                <Area type="monotone" dataKey="value" stroke="#F97316" strokeWidth={2} fill="url(#colorUv)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <Tabs defaultValue="empresas" className="w-full">
                        <TabsList className="bg-transparent p-0">
                            <TabsTrigger value="empresas" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Empresies</TabsTrigger>
                            <TabsTrigger value="recentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Recentes</TabsTrigger>
                            <TabsTrigger value="candidates" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Candiates</TabsTrigger>
                            <TabsTrigger value="pendentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Pendentes</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </CardHeader>
                <CardContent className="space-y-4">
                   {companies.map(company => (
                        <div key={company.name} className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center text-white font-bold ${company.logoBg}`}>{company.logo}</div>
                                <div>
                                    <p className="font-bold">{company.name}</p>
                                    {company.desc && <p className="text-xs text-muted-foreground">{company.desc}</p>}
                                </div>
                            </div>
                             <div className="text-right">
                                {company.status === 'Ativa' && <Badge className="bg-green-100 text-green-700">{company.status}</Badge>}
                                {company.type && <p className="text-xs">{company.type}</p>}
                                {company.status === 'Pendente' && <Button variant="outline" size="sm" className="h-7">Convidar</Button>}
                                {company.status === 'Convidar' && <Button variant="outline" size="sm" className="h-7">Convidar</Button>}
                                {company.name === 'Techmadas' && <Button size="sm" className="bg-orange-500 text-white h-7">Genndar</Button>}

                            </div>
                        </div>
                   ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-lg">Gráficos de Attivitado</CardTitle>
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
        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-lg">Professionals</CardTitle>
                    <Tabs defaultValue="recentes" className="w-auto">
                        <TabsList className="bg-transparent p-0">
                            <TabsTrigger value="perfis" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Perfis</TabsTrigger>
                            <TabsTrigger value="recentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Recentes</TabsTrigger>
                            <TabsTrigger value="engaamentes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Engaarntes</TabsTrigger>
                             <TabsTrigger value="fenguprugs" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800">Fenguprugs</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-3">
                         <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12">
                                <AvatarImage src={PlaceHolderImages.find(p=>p.id===professionals[0].avatarId)?.imageUrl} />
                                <AvatarFallback>{professionals[0].name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold">{professionals[0].name}</p>
                                <p className="text-sm text-muted-foreground">{professionals[0].tag}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <Button variant="outline" size="sm" className="bg-green-100 text-green-700 border-green-200">Prgiaos</Button>
                            <Button variant="outline" size="sm" className="h-8">+</Button>
                            <Button variant="outline" size="sm" className="h-8">Sicoicta</Button>
                             <Button variant="outline" size="sm" className="h-8">Fledermomices</Button>
                        </div>
                    </div>
                    <div className="flex-1 flex gap-4 items-end">
                        <div className="w-1/2">
                             <Button size="sm" className="w-full bg-orange-500 text-white h-8">Genndar</Button>
                        </div>
                        <div className="w-1/2 h-[80px]">
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
                        <CardTitle className="text-lg">A Pect o Martine</CardTitle>
                        <Tabs defaultValue="acesoe" className="w-auto">
                        <TabsList className="bg-transparent p-0">
                            <TabsTrigger value="acesoe" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm">Acesoe</TabsTrigger>
                            <TabsTrigger value="vativas" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm">Vativas</TabsTrigger>
                            <TabsTrigger value="candidatos" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm">Candidatos</TabsTrigger>
                            <TabsTrigger value="messagnes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-muted-foreground data-[state=active]:text-gray-800 text-sm">Messangnes</TabsTrigger>
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
                                {prof.status === 'online' && <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
                            </Avatar>
                            <p className="font-bold">{prof.name}</p>
                            <p className="text-xs text-muted-foreground">{prof.tag}</p>
                            <div className="flex flex-wrap gap-1 text-sm my-2 justify-center">
                                <Button variant="outline" size="sm" className="h-7 text-xs bg-green-100 text-green-700 border-green-200">Renvidar</Button>
                                <Button variant="outline" size="sm" className="h-7 w-7 p-0">+</Button>
                                <Button variant="outline" size="sm" className="h-7 w-7 p-0">+</Button>
                                <Button variant="outline" size="sm" className="h-7 w-7 p-0">+</Button>
                            </div>
                            <Button size="sm" className="w-full bg-orange-500 text-white h-8 text-xs">Convidar para Projeto</Button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
