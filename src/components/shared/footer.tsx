
import { Github, Instagram, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Biprodeep Nath. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="mailto:secondbipro@gmail.com" aria-label="Email Biprodeep" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/bipash25" target="_blank" rel="noopener noreferrer" aria-label="Biprodeep's GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://instagram.com/the.bipro" target="_blank" rel="noopener noreferrer" aria-label="Biprodeep's Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://x.com/the_bipro" target="_blank" rel="noopener noreferrer" aria-label="Biprodeep's Twitter / X" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
