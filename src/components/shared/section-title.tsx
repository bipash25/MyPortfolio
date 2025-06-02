import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionTitle({ title, subtitle, className, titleClassName, subtitleClassName }: SectionTitleProps) {
  return (
    <div className={cn("mb-10 text-center md:mb-12", className)}>
      <h2 className={cn(
        "text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 max-w-2xl mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
