import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact/contact-form';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'biprodeep.nath@example.com',
    href: 'mailto:biprodeep.nath@example.com',
  },
  {
    icon: Phone,
    label: 'Phone (Optional)',
    value: '+1 (555) 123-4567', // Keep as placeholder or update if Biprodeep wants to share
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, India (Open to remote opportunities)', // Updated to reflect openness
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/biprodeep',
    username: '@biprodeep',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/biprodeep', // Assuming a LinkedIn profile exists or will be created
    username: 'in/biprodeep',
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <SectionTitle title="Get In Touch" subtitle="I'd love to hear from you! Whether you have a question, an idea for collaboration, or just want to connect." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
            <CardDescription>Reach out to me through any of the channels below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <detail.icon className="h-6 w-6 text-[#D0BFFF] mt-1 shrink-0" />
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
                <social.icon className="h-5 w-5 text-[#D0BFFF] shrink-0" />
                <Link href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {social.label}: <span className="font-normal">{social.username}</span>
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl">
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
