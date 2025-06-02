"use client";

import { useState, useEffect } from 'react';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { GuestbookForm } from '@/components/guestbook/guestbook-form';
import { GuestbookList } from '@/components/guestbook/guestbook-list';
import type { GuestbookEntry } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
];

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    setEntries(generateInitialEntries());
  }, []);

  const handleAddEntry = (newEntry: GuestbookEntry) => {
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  };

  return (
    <PageWrapper>
      <SectionTitle title="Guestbook" subtitle="Leave a message, share your thoughts, or just say hello!" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="shadow-xl sticky top-24">
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
          {entries.length > 0 ? <GuestbookList entries={entries} /> : <p className="text-muted-foreground">Loading entries...</p>}
        </div>
      </div>
    </PageWrapper>
  );
}
