import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Biprodeep Nath. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="mailto:biprodeep.nath@example.com" aria-label="Email Biprodeep" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/biprodeep" target="_blank" rel="noopener noreferrer" aria-label="Biprodeep's GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/biprodeep" target="_blank" rel="noopener noreferrer" aria-label="Biprodeep's LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
