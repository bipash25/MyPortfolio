import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { ContactForm } from '@/components/contact/contact-form';
import { ArrowRight, CheckCircle2, Dribbble, Globe, LayoutDashboard, Linkedin, Mail, MonitorSmartphone, Palette, Quote, SquarePen, MousePointerSquareDashed } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simple inline SVG for decorative blobs
const DecorativeBlob = ({ className, pathD, style }: { className?: string, pathD: string, style?: React.CSSProperties }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn("absolute -z-10 opacity-50", className)} style={style}>
    <path fill="hsl(var(--accent))" d={pathD} transform="translate(100 100) scale(1.5)"></path>
  </svg>
);

const blobPath1 = "M48.4,-59.8C62.9,-48.9,75.1,-33.9,79.7,-16.7C84.4,0.5,81.5,20,70.9,34.8C60.3,49.5,42.1,59.5,24.9,66.1C7.8,72.7,-8.2,75.9,-22.9,70.7C-37.5,65.5,-50.8,51.9,-59.3,36.7C-67.8,21.5,-71.6,4.8,-68.7,-10.7C-65.9,-26.1,-56.4,-40.3,-43.8,-51.3C-31.2,-62.3,-15.6,-70.1,0.9,-71.1C17.4,-72.1,34,-66.6,48.4,-59.8Z";
const blobPath2 = "M51.4,-47.9C64.8,-37.3,72.7,-18.7,70.9,-1.7C69.1,15.3,57.6,30.6,43.8,43.3C30,56,15,66.2,-2.2,68.1C-19.4,70,-38.9,63.7,-51.2,50.5C-63.5,37.3,-68.7,17.1,-65.8,-2.2C-62.9,-21.5,-51.9,-39.9,-37.6,-50.2C-23.3,-60.5,-11.6,-62.7,3.1,-60.1C17.8,-57.5,37.9,-58.5,51.4,-47.9Z";
const blobPath3 = "M39.5,-48.2C53.7,-42.4,69.3,-33,75.3,-19.6C81.3,-6.2,77.7,11.2,68.7,23.7C59.7,36.2,45.3,43.8,31.2,52.4C17.1,61,-6.7,70.6,-27.1,66.2C-47.5,61.8,-64.4,43.5,-71.2,23.4C-78,-6.7,-74.6,-28.5,-62.3,-40.3C-50,-52.1,-29.7,-53.9,-13.1,-53.2C3.5,-52.5,20,-48.2,39.5,-48.2Z";


export default function HomePage() {
  return (
    <PageWrapper className="overflow-hidden"> {/* Added overflow-hidden to contain blobs */}
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <DecorativeBlob pathD={blobPath1} className="top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-30" style={{ transform: 'translate(-30%, -30%) rotate(45deg)' }} />
        <DecorativeBlob pathD={blobPath2} className="bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 opacity-20" style={{ transform: 'translate(30%, 30%) rotate(-30deg)' }} />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fadeIn">
            <p className="text-primary font-semibold mb-2 text-sm">HI!</p>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              I'M <span className="text-primary">ISMA</span><br />
              UI/UX DESIGNER & GRAPHIC DESIGNER
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              My aim is to create better interfaces and experiences, making the web and mobile applications easier and more pleasant to use.
            </p>
            <Button asChild size="lg" className="mt-10 shadow-lg hover:shadow-xl transition-shadow rounded-full px-8 py-3 text-base">
              <Link href="/contact">
                LET'S TALK
              </Link>
            </Button>
          </div>
          <div className="relative animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <Image
              src="https://placehold.co/600x500.png"
              alt="Isma - UI/UX Designer"
              width={600}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
              data-ai-hint="woman laptop responsive design professional illustration"
              priority
            />
             <DecorativeBlob pathD={blobPath3} className="top-1/2 left-1/2 w-72 h-72 opacity-40" style={{ transform: 'translate(-50%, -50%) scale(0.8) rotate(15deg)' }}/>
          </div>
        </div>
      </section>

      {/* Info Bar Section - Simplified for now, can be expanded */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="p-6 shadow-lg rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">Tools & Skills</h3>
                <div className="flex justify-center md:justify-start gap-3 text-foreground">
                  <SquarePen className="h-6 w-6 hover:text-primary transition-colors" title="Figma-like" />
                  <MousePointerSquareDashed className="h-6 w-6 hover:text-primary transition-colors" title="Adobe XD-like" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">Check out me</h3>
                <div className="flex justify-center md:justify-start gap-3 text-foreground">
                  <Link href="#" aria-label="Dribbble"><Dribbble className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                  <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                  <Link href="#" aria-label="Portfolio/Behance"><Globe className="h-6 w-6 hover:text-primary transition-colors" /></Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">Contact me</h3>
                <Link href="mailto:ismadesigner@example.com" className="flex items-center justify-center md:justify-start gap-1 text-foreground hover:text-primary transition-colors text-sm">
                  <Mail className="h-5 w-5" /> ismadesigner@example.com
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <DecorativeBlob pathD={blobPath2} className="top-10 -left-20 w-96 h-96 opacity-20" style={{transform: 'rotate(-60deg) scaleX(-1)'}}/>
        <DecorativeBlob pathD={blobPath1} className="bottom-5 -right-20 w-80 h-80 opacity-10" style={{transform: 'rotate(30deg)'}}/>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 animate-fadeIn">
             <DecorativeBlob pathD={blobPath3} className="top-0 left-0 w-full h-full opacity-20" style={{transform: 'scale(1.2) translate(-10%, -10%)'}}/>
            <Image
              src="https://placehold.co/500x600.png"
              alt="About Isma"
              width={500}
              height={600}
              className="rounded-lg shadow-xl mx-auto object-cover"
              data-ai-hint="woman pointing presentation illustration"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <p className="text-primary font-semibold text-sm mb-1">ABOUT ME</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              WHO I AM
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I am a UI/UX designer who loves creating pixel-perfect designs and unique user experiences. I take pride in providing exceptional customer service while delivering a product that exceeds my client's expectations every single time.
            </p>
            <ul className="space-y-2 mb-8 text-left max-w-md mx-auto md:mx-0">
              <li className="flex items-center text-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Figma Web Designs</li>
              <li className="flex items-center text-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Mobile Application Designs</li>
              <li className="flex items-center text-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Graphics Design</li>
            </ul>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow rounded-full px-8 py-3 text-base">
              <Link href="/cv.pdf" target="_blank"> {/* Assuming CV is in public folder */}
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
        <DecorativeBlob pathD={blobPath1} className="-top-20 -right-32 w-96 h-96 opacity-20 transform rotate-90" />
        <DecorativeBlob pathD={blobPath2} className="bottom-5 -left-20 w-80 h-80 opacity-10 transform -rotate-45 scale-x-[-1]" />
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm mb-1">SERVICES</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12">
            WHAT I CAN DO
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            I have 2 years of experience in UI/UX design services such as Desktop Interface Designs, Mobile / Tablet UI Design, Interface Wireframes, and Prototyping.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MonitorSmartphone, title: 'Web/Mobile Designer', description: 'Crafting intuitive and engaging user interfaces for websites and mobile applications that users love.' , dataAiHint: "ui design concept"},
              { icon: LayoutDashboard, title: 'Dashboard Designer', description: 'Designing clear, functional, and data-driven dashboards that provide actionable insights at a glance.' , dataAiHint: "dashboard interface"},
              { icon: Palette, title: 'Graphic Designer', description: 'Creating visually stunning graphics, branding materials, and illustrations that communicate effectively.' , dataAiHint: "graphic design tools"},
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

      {/* Recent Projects Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <DecorativeBlob pathD={blobPath3} className="top-1/4 -left-24 w-96 h-96 opacity-10 transform rotate-120" />
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm mb-1">PORTFOLIO</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12">
            RECENT PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              { title: 'Mobile App Concept', imageUrl: 'https://placehold.co/400x600.png', dataAiHint: 'app design mobile', className: 'md:mt-8' },
              { title: 'Fashion E-commerce', imageUrl: 'https://placehold.co/500x700.png', dataAiHint: 'fashion website ecommerce', className: 'md:scale-110 shadow-2xl z-10' },
              { title: 'Music Streaming App', imageUrl: 'https://placehold.co/400x600.png', dataAiHint: 'music app mobile', className: 'md:mt-8' },
            ].map((project, index) => (
              <Card key={project.title} className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl animate-fadeIn ${project.className}`} style={{animationDelay: `${index * 0.15}s`}}>
                <Image src={project.imageUrl} alt={project.title} width={project.title.includes('Fashion') ? 500 : 400} height={project.title.includes('Fashion') ? 700 : 600} className="w-full object-cover" data-ai-hint={project.dataAiHint} />
                <CardContent className="p-4 bg-background">
                  <p className="font-semibold text-foreground text-center text-sm">{project.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           {/* Add project navigation if needed: Buttons with ArrowLeft, ArrowRight */}
        </div>
      </section>

      {/* What Client Say Section */}
      <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
        <DecorativeBlob pathD={blobPath1} className="bottom-0 -right-1/4 w-2/3 h-2/3 opacity-10 transform rotate-45" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-8 shadow-xl rounded-xl animate-fadeIn">
            <Quote className="h-10 w-10 text-primary mb-4" />
            <p className="text-muted-foreground italic text-lg mb-6">
              "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            </p>
            <div className="flex items-center">
              <Image src="https://placehold.co/50x50.png" alt="Helen Ngoc N." width={50} height={50} className="rounded-full mr-4" data-ai-hint="person avatar" />
              <div>
                <p className="font-semibold text-foreground">Helen Ngoc N.</p>
                <p className="text-xs text-primary">Client</p>
              </div>
            </div>
          </Card>
          <div className="text-center md:text-left animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <p className="text-primary font-semibold text-sm mb-1">REVIEWS</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              WHAT CLIENT SAY
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {/* Add review navigation if needed */}
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <DecorativeBlob pathD={blobPath2} className="top-10 -left-24 w-96 h-96 opacity-10 transform -rotate-30 scale-x-[-1]" />
        <DecorativeBlob pathD={blobPath3} className="bottom-0 -right-20 w-80 h-80 opacity-10 transform rotate-60" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fadeIn">
            <p className="text-primary font-semibold text-sm mb-1">CONTACT ME</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              LET'S TALK
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or just want to say hi? Fill out the form or send me an email. I'm always excited to discuss new ideas and opportunities.
            </p>
             <div className="space-y-4 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:ismadesigner@example.com" className="text-primary hover:underline">ismadesigner@example.com</a></p>
                <p><strong>Phone:</strong> +1 234 567 8900</p>
             </div>
          </div>
          <Card className="p-6 md:p-8 shadow-xl rounded-xl animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <ContactForm />
          </Card>
        </div>
      </section>
    </PageWrapper>
  );
}
