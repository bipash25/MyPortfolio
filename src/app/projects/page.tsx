import Image from 'next/image';
import Link from 'next/link';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Platform "ShopSphere"',
    description: 'A full-featured online store built with Next.js, Stripe integration, and a custom CMS. Features product listings, user accounts, order management, and a responsive design.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping',
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'CMS'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/shopsphere',
  },
  {
    id: 'project-2',
    title: 'Task Management App "TaskFlow"',
    description: 'A collaborative PWA for individuals and teams to organize tasks, set deadlines, and track progress. Built with React and Firebase.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'task manager',
    tags: ['React', 'Firebase', 'PWA', 'Material UI'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/taskflow',
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio Website (This one!)',
    description: 'My personal space on the web, showcasing my skills, projects, and blog. Built with Next.js and ShadCN UI, focusing on clean design and performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio website',
    tags: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'TypeScript'],
    liveLink: '/',
    repoLink: 'https://github.com/biprodeep/portfolio-v2',
  },
  {
    id: 'project-4',
    title: 'AI Powered Recipe Generator "CulinaryAI"',
    description: 'An application that suggests recipes based on available ingredients using a machine learning model. Features a simple interface and customizable dietary preferences.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'food recipe',
    tags: ['Python', 'Flask', 'Machine Learning', 'React'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/culinaryai',
  },
  {
    id: 'project-5',
    title: 'Weather Dashboard "AtmoCheck"',
    description: 'A sleek weather dashboard providing real-time weather information and forecasts for multiple locations using a third-party weather API.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'weather forecast',
    tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/atmocheck',
  },
   {
    id: 'project-6',
    title: 'Interactive Data Visualization Tool',
    description: 'A web-based tool for visualizing complex datasets using D3.js, allowing users to explore data through interactive charts and graphs.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'data charts',
    tags: ['D3.js', 'JavaScript', 'Data Visualization'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/dataviz-tool',
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SectionTitle title="My Projects" subtitle="A Showcase of My Work and Passion" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} id={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="p-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
                data-ai-hint={project.dataAiHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline text-xl text-primary mb-2">{project.title}</CardTitle>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 bg-secondary/20 flex justify-between items-center">
              {project.liveLink && project.liveLink !== '#' && (
                <Button asChild size="sm" className="shadow hover:shadow-md transition-shadow">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.repoLink && (
                 <Button asChild variant="outline" size="sm" className="shadow hover:shadow-md transition-shadow">
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Repository
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
