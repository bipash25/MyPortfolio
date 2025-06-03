
import Link from 'next/link';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { DecorativeBlob, blobPath1, blobPath2 } from '@/components/shared/decorative-blob';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <PageWrapper className="relative overflow-hidden min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center">
      <DecorativeBlob pathD={blobPath1} className="top-0 left-0 w-96 h-96 opacity-20 transform -translate-x-1/4 -translate-y-1/4" />
      <DecorativeBlob pathD={blobPath2} className="bottom-0 right-0 w-80 h-80 opacity-10 transform translate-x-1/4 translate-y-1/4" />
      
      <div className="text-center z-10">
        <Frown className="mx-auto h-24 w-24 text-primary mb-6" />
        <SectionTitle
          title="404 - Page Not Found"
          subtitle="Oops! The page you're looking for doesn't seem to exist."
          titleClassName="text-4xl md:text-5xl"
          subtitleClassName="text-base md:text-lg"
        />
        <Image
          src="https://placehold.co/500x300.png" 
          alt="Lost and Confused"
          width={500}
          height={300}
          className="rounded-lg mx-auto my-8 shadow-xl"
          data-ai-hint="confused robot lost"
        />
        <p className="mb-8 text-muted-foreground">
          It might have been moved, or maybe you typed the address incorrectly.
        </p>
        <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow rounded-full px-8 py-3 text-base">
          <Link href="/">
            Go Back to Homepage
          </Link>
        </Button>
      </div>
    </PageWrapper>
  );
}
