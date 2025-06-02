"use client";

import { useState } from 'react';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { GuestbookForm } from '@/components/guestbook/guestbook-form';
import { GuestbookList } from '@/components/guestbook/guestbook-list';
import type { GuestbookEntry } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const initialEntries: GuestbookEntry[] = [
  {
    id: '1',
    name: 'Alice Wonderland',
    message: 'Loved browsing your portfolio, Bipro! Very impressive work.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: '2',
    name: 'Bob The Builder',
    message: 'Great projects and insightful blog posts. Keep up the fantastic work!',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
];

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);

  const handleAddEntry = (newEntry: GuestbookEntry) => {
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  };

  return (
    <PageWrapper>
      <SectionTitle title="Guestbook" subtitle="Leave a message, share your thoughts, or just say hello!" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="shadow-xl sticky top-24"> {/* Sticky for form on larger screens */}
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
          <GuestbookList entries={entries} />
        </div>
      </div>
    </PageWrapper>
  );
}
