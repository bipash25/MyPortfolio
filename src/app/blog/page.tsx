
import Link from 'next/link';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Tag } from 'lucide-react';
import Image from 'next/image';
import { DecorativeBlob, blobPath1, blobPath2, blobPath3 } from '@/components/shared/decorative-blob';

const blogPosts = [
  {
    id: 'post-1',
    title: 'My Journey into Web Development: First Steps',
    date: 'October 26, 2023',
    tags: ['Web Development', 'Learning', 'Beginner'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'coding screen learning desk',
    excerpt: 'Sharing my initial experiences and challenges as I started learning web development. Key takeaways and resources that helped me.',
    readTime: '5 min read',
  },
  {
    id: 'post-2',
    title: 'Understanding React Hooks: A Student Perspective',
    date: 'September 15, 2023',
    tags: ['React', 'JavaScript', 'Student Diary'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'react code abstract logic',
    excerpt: 'A simplified explanation of React Hooks like useState and useEffect from the perspective of someone currently learning them. Practical examples from my projects.',
    readTime: '7 min read',
  },
  {
    id: 'post-3',
    title: 'Why I Chose to Learn Next.js for My Portfolio',
    date: 'August 02, 2023',
    tags: ['Next.js', 'Portfolio', 'Tech Choices'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'decision path choice diagram',
    excerpt: 'Discussing the reasons behind selecting Next.js for building my personal portfolio and the benefits I anticipate as a developing programmer.',
    readTime: '6 min read',
  },
  {
    id: 'post-4',
    title: 'Exploring the World of Open Source as a Student',
    date: 'July 21, 2023',
    tags: ['Open Source', 'Community', 'Learning'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'community collaboration people network',
    excerpt: 'My thoughts on the importance of open source for students, how to get involved, and what I hope to contribute in the future.',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <PageWrapper className="relative overflow-hidden">
      <DecorativeBlob pathD={blobPath3} className="top-20 -left-1/4 w-[600px] h-[600px] opacity-10 transform rotate-30" />
      <DecorativeBlob pathD={blobPath1} className="bottom-10 -right-1/3 w-[500px] h-[500px] opacity-05 transform -rotate-60" />

      <SectionTitle title="My Blog" subtitle="Sharing My Learning Journey and Tech Discoveries" />

      <div className="mb-12 text-center">
        <Image 
          src="https://placehold.co/700x350.png"
          alt="Blog Writing Illustration"
          width={700}
          height={350}
          className="rounded-lg mx-auto shadow-xl object-cover"
          data-ai-hint="blog writing content creation"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {blogPosts.map((post) => (
          <Card key={post.id} id={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardHeader className="p-0">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={300} 
                className="w-full h-48 object-cover" 
                data-ai-hint={post.dataAiHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline text-xl text-primary mb-2 hover:underline">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
              <div className="flex items-center text-xs text-muted-foreground mb-2">
                <CalendarDays className="mr-1.5 h-4 w-4 text-accent-foreground" /> {post.date}
                <span className="mx-1.5">·</span>
                <span>{post.readTime}</span>
              </div>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">{post.excerpt}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full flex items-center">
                    <Tag className="mr-1 h-3 w-3"/> {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-secondary/20">
              <Button asChild variant="default" size="sm" className="shadow hover:shadow-md transition-shadow w-full">
                <Link href={`/blog/${post.id}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Note: Individual blog post pages ([slug]/page.tsx) are not implemented in this scope. 
          Links currently point to /blog/[id] which would 404. 
          For now, they could link to /blog#post-id to scroll on the same page if desired.
      */}
    </PageWrapper>
  );
}
