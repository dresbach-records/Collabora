import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Code2, ImageIcon, Palette, Search, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  const categories = [
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: 'Design',
      description: 'Logos, websites, mobile apps, and more.',
      link: '/projects?category=design',
    },
    {
      icon: <Code2 className="h-8 w-8 text-accent" />,
      title: 'Development',
      description: 'Websites, mobile apps, and custom software.',
      link: '/projects?category=development',
    },
    {
      icon: <Video className="h-8 w-8 text-accent" />,
      title: 'Video Editing',
      description: 'Promotional videos, tutorials, and social media content.',
      link: '/projects?category=video',
    },
    {
      icon: <ImageIcon className="h-8 w-8 text-accent" />,
      title: 'Image Editing',
      description: 'Photo retouching, manipulation, and optimization.',
      link: '/projects?category=image',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Post a Project',
      description: 'Describe your project, set your budget, and specify the skills you need.',
    },
    {
      step: 2,
      title: 'Find the Perfect Talent',
      description: 'Browse profiles, review portfolios, and invite top professionals to apply.',
    },
    {
      step: 3,
      title: 'Collaborate Seamlessly',
      description: 'Use our platform to communicate, share files, and manage your project from start to finish.',
    },
  ];

  return (
    <div className="space-y-20 md:space-y-32">
      <section className="container mx-auto px-4 pt-16 text-center md:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:text-left">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <Badge variant="secondary" className="mb-4">
              Now Hiring!
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Next <span className="text-primary">Great Hire</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Collabora is the premier platform for discovering and collaborating with top-tier digital professionals from around the globe.
            </p>
            <div className="mt-8 flex w-full max-w-lg flex-col gap-2 sm:flex-row">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search for jobs or talent..." className="w-full pl-10" />
              </div>
              <Button size="lg" className="shrink-0">
                <Search className="mr-2 h-5 w-5" />
                Find Now
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section id="categories" className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore by Category</h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            Find projects and talent in the fields that matter to you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.title} className="group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                {category.icon}
                <CardTitle className="pt-4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
                <Button variant="link" asChild className="mt-4 px-0">
                  <Link href={category.link}>
                    Explore {category.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
            <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
              Get started in just a few simple steps.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="featured-projects" className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Check out the latest opportunities on Collabora.
            </p>
          </div>
          <Button asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="cta" className="container mx-auto px-4 pb-16 md:pb-24 lg:pb-32">
        <Card className="bg-primary text-primary-foreground">
          <div className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Join thousands of companies and professionals building the future of work. Sign up today and find your next opportunity.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/projects">Find a Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/signup">Hire Talent</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
