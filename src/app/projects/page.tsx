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
    title: 'E-commerce Concept "ShopSphere"',
    description: 'An exploration into e-commerce functionalities, building a prototype online store with Next.js. Focused on product display, cart management, and user flows.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping interface',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Learning Project'],
    liveLink: '#', // Placeholder, update if you deploy
    repoLink: 'https://github.com/biprodeep/shopsphere-concept', // Example, update to actual repo
  },
  {
    id: 'project-2',
    title: 'Task Management App Idea "TaskFlow"',
    description: 'A personal project to design and develop a PWA for task organization. Currently focusing on core features like task creation, categorization, and status tracking using React and Firebase.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'task manager app',
    tags: ['React', 'Firebase (Learning)', 'PWA Concept', 'Personal Project'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/taskflow-idea',
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio Website (This one!)',
    description: 'Developing my personal space on the web to showcase my skills, projects, and thoughts as I grow as a developer. Built with Next.js and ShadCN UI.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'developer portfolio website',
    tags: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'TypeScript'],
    liveLink: '/', // Current site
    repoLink: 'https://github.com/biprodeep/my-portfolio', // Example, update to actual repo
  },
  {
    id: 'project-4',
    title: 'AI Powered Recipe Suggester "CulinaryCompanion"',
    description: 'An experimental app to suggest recipes based on ingredients. Exploring basic AI/ML concepts and API integrations. Built with Python (Flask) and a simple React frontend.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'food recipe ai',
    tags: ['Python', 'Flask', 'React', 'AI/ML (Exploring)'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/culinary-companion',
  },
  {
    id: 'project-5',
    title: 'Weather Dashboard "AtmoCheck"',
    description: 'A web application to display real-time weather information using a third-party API. Practicing API integration and data presentation with JavaScript.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'weather app interface',
    tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/atmocheck-js',
  },
   {
    id: 'project-6',
    title: 'Interactive Data Visualization Study',
    description: 'A learning project focused on understanding and implementing data visualizations using D3.js. Exploring different chart types and interactive elements.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'data charts graph',
    tags: ['D3.js', 'JavaScript', 'Data Visualization', 'Study Project'],
    liveLink: '#',
    repoLink: 'https://github.com/biprodeep/dataviz-study',
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SectionTitle title="My Projects" subtitle="A Showcase of My Learning and Passion" />
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
              {project.liveLink && project.liveLink !== '#' ? (
                <Button asChild size="sm" className="shadow hover:shadow-md transition-shadow">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Live <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : ( <div /> /* Empty div to maintain spacing if no live link */)}
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
