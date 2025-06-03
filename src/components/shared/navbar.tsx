
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, CodeXml } from 'lucide-react'; 
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' }, 
  { href: '/guestbook', label: 'Guestbook' },
];

export function Navbar() {
  const pathname = usePathname();

  const NavLinks = ({ mobile = false, onLinkClick }: { mobile?: boolean, onLinkClick?: () => void }) => (
    <nav className={cn(
      "flex items-center gap-x-4 lg:gap-x-6", 
      mobile ? "flex-col gap-y-3 pt-6" : "hidden md:flex"
    )}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onLinkClick}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-foreground/80",
            mobile && "text-base w-full text-center py-2.5 hover:bg-accent rounded-md"
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
        <Link href="/" className="flex items-center group">
          <CodeXml className="h-6 w-6 sm:h-7 sm:w-7 text-primary transition-transform group-hover:rotate-[10deg]" /> 
          <span className="font-headline text-xl sm:text-2xl font-bold ml-1.5">BIPRO</span> 
          <span className="font-headline text-lg sm:text-xl font-bold text-primary">.</span> 
        </Link>
        
        <div className="hidden md:flex items-center gap-x-3 lg:gap-x-4">
          <NavLinks />
          <ThemeToggleButton />
          <Button asChild size="sm" className="shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 text-xs">
            <Link href="/contact">
              CONTACT ME
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] p-0">
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6 px-2 pt-1">
                    <Link href="/" className="flex items-center group">
                      <CodeXml className="h-6 w-6 text-primary" />
                      <span className="font-headline text-xl font-bold ml-1.5">BIPRO</span>
                       <span className="font-headline text-lg font-bold text-primary">.</span> 
                    </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                         <Menu className="h-5 w-5" />
                       </Button>
                    </SheetClose>
                </div>
                <NavLinks mobile onLinkClick={() => document.dispatchEvent(new MouseEvent('click'))} /> 
                <div className="mt-auto pt-6">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm">
                        <Link href="/contact">
                          CONTACT ME
                        </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
