
"use client"; 

import { useEffect } from 'react';
import Link from 'next/link';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';
import { DecorativeBlob, blobPath1, blobPath2 } from '@/components/shared/decorative-blob';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className="dark"> {/* Ensure html tag has dark class if needed based on theme */}
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <PageWrapper className="relative overflow-hidden min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center">
          <DecorativeBlob pathD={blobPath1} className="top-0 left-0 w-96 h-96 opacity-20 dark:opacity-10 transform -translate-x-1/4 -translate-y-1/4" />
          <DecorativeBlob pathD={blobPath2} className="bottom-0 right-0 w-80 h-80 opacity-10 dark:opacity-5 transform translate-x-1/4 translate-y-1/4" />

          <div className="text-center z-10 p-4">
            <AlertTriangle className="mx-auto h-20 w-20 sm:h-24 sm:w-24 text-destructive mb-6" />
            <SectionTitle
              title="Something Went Wrong"
              subtitle="We're sorry, but an unexpected error occurred."
              titleClassName="text-3xl sm:text-4xl md:text-5xl text-destructive"
              subtitleClassName="text-sm sm:text-base md:text-lg"
            />
            <Image
              src="https://placehold.co/500x300.png"
              alt="Error Occurred"
              width={500}
              height={300}
              className="rounded-lg mx-auto my-6 sm:my-8 shadow-xl object-contain max-w-full h-auto"
              data-ai-hint="broken robot error illustration"
            />
            {error?.message && (
                <p className="mb-4 text-xs sm:text-sm text-muted-foreground bg-muted p-3 rounded-md inline-block max-w-md">
                  Error details: {error.message}
                </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button onClick={() => reset()} size="lg" className="shadow-lg hover:shadow-xl transition-shadow rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                Try Again
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                <Link href="/">
                  Go to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </PageWrapper>
      </body>
    </html>
  );
}
