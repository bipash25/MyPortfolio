"use client";

import type { GuestbookEntry } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface GuestbookListProps {
  entries: GuestbookEntry[];
}

export function GuestbookList({ entries }: GuestbookListProps) {
  if (entries.length === 0) {
    return <p className="text-center text-muted-foreground mt-8">No entries yet. Be the first to sign!</p>;
  }

  return (
    <div className="space-y-6 mt-8">
      {entries.map((entry) => (
        <Card key={entry.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4 p-4">
            <Avatar>
              <AvatarImage src={`https://placehold.co/40x40.png?text=${entry.name.charAt(0)}`} alt={entry.name} data-ai-hint="letter avatar" />
              <AvatarFallback>{entry.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle className="font-headline text-lg text-primary">{entry.name}</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <p className="text-foreground whitespace-pre-wrap">{entry.message}</p>
          </CardContent>
          <CardFooter className="px-4 py-2 border-t">
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(entry.timestamp), { addSuffix: true })}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
