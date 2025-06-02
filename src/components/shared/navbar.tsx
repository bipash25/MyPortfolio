
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Palette } from 'lucide-react'; // Changed CodeXml to Palette
import { cn } from '@/lib/utils';

// Updated navItems based on the image
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' }, // Added Services
  { href: '/projects', label: 'Projects' },
  // Removed Blog, Contact, Guestbook for closer match to image's simplicity in nav
];

export function Navbar() {
  const pathname = usePathname();

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={cn(
      "flex items-center gap-x-6 lg:gap-x-8", // Increased gap slightly
      mobile ? "flex-col gap-y-4 pt-8" : "hidden md:flex"
    )}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-foreground/80",
            mobile && "text-lg w-full text-center py-2 hover:bg-accent rounded-md"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <Palette className="h-7 w-7 text-primary transition-transform group-hover:rotate-[15deg]" /> {/* Changed Icon */}
          <span className="font-headline text-xl font-bold text-primary">Portfolio</span> {/* Changed Text */}
        </Link>
        
        <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          <NavLinks />
          <Button asChild size="sm" className="shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            <Link href="/contact">
              HIRE ME
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button asChild size="sm" variant="default" className="mr-2 rounded-full px-4 text-xs">
             <Link href="/contact">HIRE ME</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[320px]">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center gap-2 group">
                  <Palette className="h-7 w-7 text-primary" />
                  <span className="font-headline text-xl font-bold text-primary">Portfolio</span>
                </Link>
                <NavLinks mobile />
                 <Button asChild size="lg" className="w-full mt-8 shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90 rounded-md">
                    <Link href="/contact">
                      HIRE ME
                    </Link>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
