
"use client";

import { useState, useEffect } from 'react';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { GuestbookForm } from '@/components/guestbook/guestbook-form';
import { GuestbookList } from '@/components/guestbook/guestbook-list';
import type { GuestbookEntry } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { DecorativeBlob, blobPath1, blobPath2, blobPath3 } from '@/components/shared/decorative-blob';

const generateInitialEntries = (): GuestbookEntry[] => [
  {
    id: '1',
    name: 'Fellow Coder',
    message: 'Hey Bipro! Cool portfolio, keep up the great learning journey!',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
  },
  {
    id: '2',
    name: 'Tech Enthusiast',
    message: 'Love your passion for development. Excited to see what you build next!',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28), // 28 hours ago
  },
  {
    id: '3',
    name: 'University Pal',
    message: 'Awesome site, Bipro! Your projects look interesting.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 days ago
  }
];

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    // Simulate fetching entries
    let storedEntriesData = null;
    if (typeof window !== 'undefined') {
        storedEntriesData = localStorage.getItem('guestbookEntries');
    }
    
    if (storedEntriesData) {
      try {
        const parsedEntries = JSON.parse(storedEntriesData);
        if (Array.isArray(parsedEntries)) {
            setEntries(parsedEntries.map((e: any) => ({...e, timestamp: new Date(e.timestamp)})));
        } else {
            setEntries(generateInitialEntries());
        }
      } catch (error) {
        console.error("Failed to parse guestbook entries from localStorage", error);
        setEntries(generateInitialEntries());
      }
    } else {
      setEntries(generateInitialEntries());
    }
  }, []);

  const handleAddEntry = (newEntry: GuestbookEntry) => {
    setEntries((prevEntries) => {
      const updatedEntries = [newEntry, ...prevEntries];
      if (typeof window !== 'undefined') {
        localStorage.setItem('guestbookEntries', JSON.stringify(updatedEntries));
      }
      return updatedEntries;
    });
  };

  return (
    <PageWrapper className="relative overflow-hidden">
      <DecorativeBlob pathD={blobPath2} className="top-10 -left-1/3 w-[600px] h-[600px] opacity-10 dark:opacity-5 transform -rotate-30" />
      <DecorativeBlob pathD={blobPath3} className="bottom-20 -right-1/4 w-[500px] h-[500px] opacity-05 dark:opacity-0 transform rotate-45" />

      <SectionTitle title="Guestbook" subtitle="Leave a message, share your thoughts, or just say hello!" />
      
      <div className="mb-12 text-center">
        <Image 
          src="/assets/illustrations/Questions-bro.svg" 
          alt="Guestbook Illustration"
          width={400}
          height={280}
          className="rounded-lg mx-auto shadow-xl object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="md:col-span-1">
          <Card className="shadow-xl sticky top-24 bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Sign My Guestbook</CardTitle>
              <CardDescription>Your comments are appreciated!</CardDescription>
            </CardHeader>
            <CardContent>
              <GuestbookForm onAddEntry={handleAddEntry} />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-headline text-2xl text-primary mb-4">Recent Entries</h3>
          {entries.length > 0 ? <GuestbookList entries={entries} /> : (
            <Card className="bg-card shadow-md">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Loading entries or be the first to sign!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
