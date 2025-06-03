
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { ContactForm } from '@/components/contact/contact-form';
import { Github, Instagram, Mail, TerminalSquare, CodeXml, CheckCircle2, BookOpen, Brain, Lightbulb, ArrowRight, MonitorSmartphone, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DecorativeBlob, blobPath1, blobPath2, blobPath3 } from '@/components/shared/decorative-blob';


export default function HomePage() {
  return (
    <PageWrapper className="overflow-hidden">
      <DecorativeBlob pathD={blobPath1} className="top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-30" style={{ transform: 'translate(-30%, -30%) rotate(45deg)' }} />
      <DecorativeBlob pathD={blobPath2} className="bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 opacity-20" style={{ transform: 'translate(30%, 30%) rotate(-30deg)' }} />
      
      <section className="relative py-16 md:py-28">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fadeIn">
            <p className="text-primary font-semibold mb-2 text-xl">HI!</p>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              I'M <span className="text-primary">BIPRODEEP</span>
            </h1>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground/80 mt-1">
            AN ASPIRING SOFTWARE DEVELOPER
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              A passionate student developer exploring the world of technology, one line of code at a time. My goal is to build intuitive and impactful digital experiences.
            </p>
            <Button asChild size="lg" className="mt-10 shadow-lg hover:shadow-xl transition-shadow rounded-full px-8 py-3 text-base">
              <Link href="/contact">
                LET'S TALK
              </Link>
            </Button>
          </div>
          <div className="relative animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <Image
              src="/assets/illustrations/Coding-bro.svg"
              alt="Biprodeep Nath - Aspiring Software Developer Illustration"
              width={600}
              height={500}
              className="rounded-lg mx-auto"
              data-ai-hint="man laptop code professional illustration"
              priority
            />
             <DecorativeBlob pathD={blobPath3} className="top-1/2 left-1/2 w-72 h-72 opacity-40" style={{ transform: 'translate(-50%, -50%) scale(0.8) rotate(15deg)' }}/>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="p-6 shadow-lg rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">My Tech Stack</h3>
                <div className="flex justify-center md:justify-start gap-3 text-foreground">
                  <CodeXml className="h-6 w-6 hover:text-primary transition-colors" title="Web Development" />
                  <TerminalSquare className="h-6 w-6 hover:text-primary transition-colors" title="Command Line & Scripting" />
                  <Brain className="h-6 w-6 hover:text-primary transition-colors" title="Exploring AI/ML" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">Connect With Me</h3>
                <div className="flex justify-center md:justify-start gap-3 text-foreground">
                  <Link href="https://github.com/bipash25" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                  <Link href="https://instagram.com/the.bipro" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                  <Link href="/blog" aria-label="My Blog"><BookOpen className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">Contact me</h3>
                <Link href="mailto:secondbipro@gmail.com" className="flex items-center justify-center md:justify-start gap-1 text-foreground hover:text-primary transition-colors text-sm">
                  <Mail className="h-5 w-5" /> secondbipro@gmail.com
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <DecorativeBlob pathD={blobPath2} className="top-10 -left-20 w-96 h-96 opacity-20" style={{transform: 'rotate(-60deg) scaleX(-1)'}}/>
        <DecorativeBlob pathD={blobPath1} className="bottom-5 -right-20 w-80 h-80 opacity-10" style={{transform: 'rotate(30deg)'}}/>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 animate-fadeIn">
             <DecorativeBlob pathD={blobPath3} className="top-0 left-0 w-full h-full opacity-20" style={{transform: 'scale(1.2) translate(-10%, -10%)'}}/>
            <Image
              src="/assets/illustrations/Questions-bro.svg"
              alt="About Biprodeep - Illustration of a man thinking"
              width={500}
              height={600}
              className="rounded-lg mx-auto object-cover"
              data-ai-hint="man thinking code illustration"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <p className="text-primary font-semibold text-sm mb-1">ABOUT ME</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              WHO I AM
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm Biprodeep, an enthusiastic student developer with a strong curiosity for technology and a drive to create meaningful software. I enjoy learning new skills, tackling challenges, and collaborating on exciting projects.
            </p>
            <ul className="space-y-2 mb-8 text-left max-w-md mx-auto md:mx-0">
              <li className="flex items-center text-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Passionate about Web Development</li>
              <li className="flex items-center text-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Exploring Full-Stack Technologies</li>
              <li className="flex items-center text-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Eager to learn and contribute</li>
            </ul>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow rounded-full px-8 py-3 text-base">
              <Link href="/about">
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
        <DecorativeBlob pathD={blobPath1} className="-top-20 -right-32 w-96 h-96 opacity-20 transform rotate-90" />
        <DecorativeBlob pathD={blobPath2} className="bottom-5 -left-20 w-80 h-80 opacity-10 transform -rotate-45 scale-x-[-1]" />
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm mb-1">MY FOCUS AREAS</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12">
            WHAT I'M EXPLORING
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            As a student, I'm continuously learning and expanding my skillset. Here are some of the areas I'm currently focusing on and passionate about.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MonitorSmartphone, title: 'Frontend Development', description: 'Crafting responsive and interactive user interfaces using modern web technologies like React and Next.js.', dataAiHint: "ui design concept code" },
              { icon: Database, title: 'Backend Exploration', description: 'Learning to build robust server-side applications, APIs, and manage databases to power web services.', dataAiHint: "database server code" },
              { icon: Lightbulb, title: 'Problem Solving & Algorithms', description: 'Developing strong analytical skills and understanding data structures to create efficient and effective solutions.', dataAiHint: "logic puzzle solution" },
            ].map((service, index) => (
              <Card key={service.title} className="text-center p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl animate-fadeIn" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="mb-4 inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-foreground mb-3">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">{service.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <DecorativeBlob pathD={blobPath3} className="top-1/4 -left-24 w-96 h-96 opacity-10 transform rotate-120" />
        <DecorativeBlob pathD={blobPath1} className="bottom-1/4 -right-24 w-80 h-80 opacity-15 transform -rotate-120" />
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm mb-1">PORTFOLIO</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12">
            RECENT PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              { title: 'Learning Management System Concept', imageUrl: 'https://placehold.co/400x600.png', dataAiHint: 'education platform app', className: 'md:mt-8' },
              { title: 'Personal Blog Platform', imageUrl: 'https://placehold.co/500x700.png', dataAiHint: 'blog website design', className: 'md:scale-110 shadow-2xl z-10' },
              { title: 'Task Organizer App', imageUrl: 'https://placehold.co/400x600.png', dataAiHint: 'task app mobile', className: 'md:mt-8' },
            ].map((project, index) => (
              <Card key={project.title} className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl animate-fadeIn ${project.className}`} style={{animationDelay: `${index * 0.15}s`}}>
                <Image src={project.imageUrl} alt={project.title} width={project.title.includes('Blog') ? 500 : 400} height={project.title.includes('Blog') ? 700 : 600} className="w-full object-cover" data-ai-hint={project.dataAiHint} />
                <CardContent className="p-4 bg-background">
                  <p className="font-semibold text-foreground text-center text-sm">{project.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <Button asChild size="lg" className="mt-12 shadow-lg hover:shadow-xl transition-shadow rounded-full px-8 py-3 text-base">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </section>
      
      <section className="py-16 md:py-24 relative overflow-hidden bg-secondary/30">
        <DecorativeBlob pathD={blobPath2} className="top-10 -left-24 w-96 h-96 opacity-10 transform -rotate-30 scale-x-[-1]" />
        <DecorativeBlob pathD={blobPath3} className="bottom-0 -right-20 w-80 h-80 opacity-10 transform rotate-60" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fadeIn">
            <p className="text-primary font-semibold text-sm mb-1">CONTACT ME</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              LET'S TALK
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Interested in collaborating, have a question, or just want to connect? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>
             <div className="space-y-4 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:secondbipro@gmail.com" className="text-primary hover:underline">secondbipro@gmail.com</a></p>
             </div>
          </div>
          <Card className="p-6 md:p-8 shadow-xl rounded-xl animate-fadeIn bg-card" style={{animationDelay: '0.2s'}}>
            <ContactForm />
          </Card>
        </div>
      </section>
    </PageWrapper>
  );
}
