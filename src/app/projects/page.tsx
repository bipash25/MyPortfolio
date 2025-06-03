
import Image from 'next/image';
import Link from 'next/link';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { DecorativeBlob, blobPath1, blobPath2, blobPath3 } from '@/components/shared/decorative-blob';

const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Concept "ShopSphere"',
    description: 'An exploration into e-commerce functionalities, building a prototype online store with Next.js. Focused on product display, cart management, and user flows.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping interface',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Learning Project'],
    liveLink: '#', 
    repoLink: 'https://github.com/bipash25/shopsphere-concept', 
  },
  {
    id: 'project-2',
    title: 'Task Management App Idea "TaskFlow"',
    description: 'A personal project to design and develop a PWA for task organization. Currently focusing on core features like task creation, categorization, and status tracking using React and Firebase.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'task manager app',
    tags: ['React', 'Firebase (Learning)', 'PWA Concept', 'Personal Project'],
    liveLink: '#',
    repoLink: 'https://github.com/bipash25/taskflow-idea',
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio Website (This one!)',
    description: 'Developing my personal space on the web to showcase my skills, projects, and thoughts as I grow as a developer. Built with Next.js and ShadCN UI.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'developer portfolio website',
    tags: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'TypeScript'],
    liveLink: '/', 
    repoLink: 'https://github.com/bipash25/my-portfolio', 
  },
  {
    id: 'project-4',
    title: 'AI Powered Recipe Suggester "CulinaryCompanion"',
    description: 'An experimental app to suggest recipes based on ingredients. Exploring basic AI/ML concepts and API integrations. Built with Python (Flask) and a simple React frontend.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'food recipe ai',
    tags: ['Python', 'Flask', 'React', 'AI/ML (Exploring)'],
    liveLink: '#',
    repoLink: 'https://github.com/bipash25/culinary-companion',
  },
  {
    id: 'project-5',
    title: 'Weather Dashboard "AtmoCheck"',
    description: 'A web application to display real-time weather information using a third-party API. Practicing API integration and data presentation with JavaScript.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'weather app interface',
    tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    liveLink: '#',
    repoLink: 'https://github.com/bipash25/atmocheck-js',
  },
   {
    id: 'project-6',
    title: 'Interactive Data Visualization Study',
    description: 'A learning project focused on understanding and implementing data visualizations using D3.js. Exploring different chart types and interactive elements.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'data charts graph',
    tags: ['D3.js', 'JavaScript', 'Data Visualization', 'Study Project'],
    liveLink: '#',
    repoLink: 'https://github.com/bipash25/dataviz-study',
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper className="relative overflow-hidden">
      <DecorativeBlob pathD={blobPath1} className="top-0 -right-1/4 w-96 h-96 opacity-15 dark:opacity-10 transform rotate-120" />
      <DecorativeBlob pathD={blobPath2} className="bottom-10 -left-1/3 w-[500px] h-[500px] opacity-10 dark:opacity-5 transform -rotate-45" />
      
      <SectionTitle title="My Projects" subtitle="A Showcase of My Learning and Passion" />
      
      <div className="mb-12 text-center">
        <Image 
          src="/assets/illustrations/Coding-bro.svg" 
          alt="Projects Showcase Illustration"
          width={500}
          height={300}
          className="rounded-lg mx-auto shadow-xl object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project) => (
          <Card key={project.id} id={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardHeader className="p-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={300} 
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
              <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-4">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 bg-secondary/20 dark:bg-secondary/10 flex flex-wrap justify-between items-center gap-2">
              {project.liveLink && project.liveLink !== '#' ? (
                <Button asChild size="sm" className="shadow hover:shadow-md transition-shadow">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Live <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : ( <div className="w-0 h-0" /> /* Empty div to maintain spacing if no live link */)}
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
