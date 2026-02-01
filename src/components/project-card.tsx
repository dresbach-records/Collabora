import { Project, Company } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { companies } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { ArrowRight, Briefcase, CalendarDays, DollarSign } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const company = companies.find((c) => c.id === project.companyId);
  const companyLogo = PlaceHolderImages.find(p => p.id === company?.logoUrlId);
  const projectThumb = PlaceHolderImages.find(p => p.id === project.thumbnailUrlId);

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        {projectThumb && (
          <Link href={`/projects/${project.id}`}>
            <Image
              src={projectThumb.imageUrl}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              data-ai-hint={projectThumb.imageHint}
            />
          </Link>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center gap-4 mb-4">
          {company && companyLogo && (
            <Link href={`/company/${company.slug}`} className="shrink-0">
              <Image 
                src={companyLogo.imageUrl} 
                alt={company.name} 
                width={40} 
                height={40} 
                className="rounded-full"
                data-ai-hint={companyLogo.imageHint}
              />
            </Link>
          )}
          <div>
            <CardTitle className="text-xl">
              <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                {project.title}
              </Link>
            </CardTitle>
            {company && (
              <CardDescription>por <Link href={`/company/${company.slug}`} className="font-medium text-foreground hover:text-primary">{company.name}</Link></CardDescription>
            )}
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>${project.budget.min} - ${project.budget.max}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="capitalize">{project.type}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="outline">+{project.skills.length - 3} more</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>
            Ver Projeto <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
