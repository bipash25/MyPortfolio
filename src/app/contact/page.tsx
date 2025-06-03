
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact/contact-form';
import { Github, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DecorativeBlob, blobPath1, blobPath2, blobPath3 } from '@/components/shared/decorative-blob';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'secondbipro@gmail.com',
    href: 'mailto:secondbipro@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone (Optional)',
    value: '+1 (555) 123-4567', 
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, India (Open to remote opportunities)', 
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/bipash25',
    username: '@bipash25',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/the.bipro',
    username: '@the.bipro',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    href: 'https://x.com/the_bipro',
    username: '@the_bipro',
  }
];

export default function ContactPage() {
  return (
    <PageWrapper className="relative overflow-hidden">
      <DecorativeBlob pathD={blobPath1} className="top-0 -left-1/4 w-96 h-96 opacity-15 dark:opacity-10 transform -rotate-45" />
      <DecorativeBlob pathD={blobPath2} className="bottom-0 -right-1/4 w-80 h-80 opacity-10 dark:opacity-5 transform rotate-30" />

      <SectionTitle title="Get In Touch" subtitle="I'd love to hear from you! Whether you have a question, an idea for collaboration, or just want to connect." />
      
      <div className="mb-12 text-center">
        <Image 
          src="/assets/illustrations/Questions-bro.svg" 
          alt="Contact Illustration"
          width={450}
          height={300}
          className="rounded-lg mx-auto shadow-xl object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <Card className="shadow-xl bg-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
            <CardDescription>Reach out to me through any of the channels below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <detail.icon className="h-6 w-6 text-accent-foreground mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{detail.label}</h4>
                  {detail.href ? (
                    <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors break-all">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground break-all">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
            <hr className="my-6 border-border" />
            <h4 className="font-headline text-xl text-primary mb-3">Find me on Social Media</h4>
            {socialLinks.map((social) => (
              <div key={social.label} className="flex items-center gap-3">
                <social.icon className="h-5 w-5 text-accent-foreground shrink-0" />
                <Link href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {social.label}: <span className="font-normal">{social.username}</span>
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Send Me a Message</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}
