import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { ArrowRight, BriefcaseBusiness, Newspaper, UserCircle2 } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with modern UI and secure payments.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'online store',
    link: '/projects#project-1',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative tool to organize tasks and boost productivity.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'productivity app',
    link: '/projects#project-2',
  },
];

const latestBlogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2024',
    snippet: 'Exploring upcoming trends and technologies shaping the web...',
    link: '/blog#post-1',
  },
  {
    id: 2,
    title: 'Mastering React Hooks: A Deep Dive',
    snippet: 'A comprehensive guide to understanding and using React Hooks effectively...',
    link: '/blog#post-2',
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-gradient-to-br from-background to-secondary/30 rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <Image 
            src="https://placehold.co/150x150.png" 
            alt="Biprodeep Nath" 
            width={150} 
            height={150} 
            className="rounded-full mx-auto mb-6 border-4 border-primary shadow-md"
            data-ai-hint="profile portrait" 
          />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Biprodeep Nath
          </h1>
          <p className="mt-4 text-lg leading-8 text-foreground sm:text-xl max-w-2xl mx-auto">
            Full-Stack Developer | Creative Problem-Solver | Lifelong Learner
          </p>
          <p className="mt-6 text-md leading-7 text-muted-foreground max-w-xl mx-auto">
            Passionate about crafting elegant and efficient solutions to complex challenges. Striving to build impactful digital experiences through technology and design.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="py-16 md:py-20">
        <SectionTitle title="About Me" subtitle="A Glimpse Into My Journey" />
        <div className="max-w-3xl mx-auto text-center">
          <UserCircle2 className="mx-auto h-16 w-16 mb-4 text-[#D0BFFF]" />
          <p className="text-lg text-muted-foreground mb-6">
            I'm a dedicated software developer with a keen interest in exploring new technologies and building meaningful applications. My journey in tech is driven by curiosity and a desire to make a positive impact.
          </p>
          <Button asChild variant="secondary" className="shadow hover:shadow-md transition-shadow">
            <Link href="/about">
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 md:py-20 bg-secondary/30 rounded-lg">
        <SectionTitle title="Featured Projects" subtitle="Some of My Recent Work" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-48 object-cover rounded-t-md"
                  data-ai-hint={project.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl text-primary mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                  <Link href={project.link}>
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/projects">
              Explore All Projects <BriefcaseBusiness className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 md:py-20">
        <SectionTitle title="Latest Thoughts" subtitle="Insights, Tutorials, and Musings" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {latestBlogPosts.map((post) => (
            <Card key={post.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <CardTitle className="font-headline text-lg text-primary mb-2">{post.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-2">{post.snippet}</CardDescription>
                <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                  <Link href={post.link}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/blog">
              Visit My Blog <Newspaper className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
