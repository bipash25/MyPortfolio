import Link from 'next/link';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Tag } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 'post-1',
    title: 'The Future of Web Development in 2024 and Beyond',
    date: 'October 26, 2023',
    tags: ['Web Development', 'Future Tech', 'Trends'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'futuristic technology',
    excerpt: 'Exploring upcoming trends and technologies shaping the web, from AI integration to decentralized applications. What skills should developers focus on?',
    readTime: '7 min read',
  },
  {
    id: 'post-2',
    title: 'Mastering React Hooks: A Deep Dive into useState and useEffect',
    date: 'September 15, 2023',
    tags: ['React', 'JavaScript', 'Tutorial'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'code screen',
    excerpt: 'A comprehensive guide to understanding and using React Hooks effectively. This post covers the fundamentals of useState and useEffect with practical examples.',
    readTime: '10 min read',
  },
  {
    id: 'post-3',
    title: 'Building Accessible Web Applications: A Practical Guide',
    date: 'August 02, 2023',
    tags: ['Accessibility', 'Web Standards', 'UX'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'inclusive design',
    excerpt: 'Learn the core principles of web accessibility (WCAG) and how to implement them in your projects to create inclusive experiences for all users.',
    readTime: '8 min read',
  },
  {
    id: 'post-4',
    title: 'Optimizing Next.js Applications for Performance',
    date: 'July 21, 2023',
    tags: ['Next.js', 'Performance', 'Optimization'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'speed fast',
    excerpt: 'Discover various techniques to boost the performance of your Next.js applications, including image optimization, code splitting, and server-side rendering strategies.',
    readTime: '12 min read',
  },
];

export default function BlogPage() {
  return (
    <PageWrapper>
      <SectionTitle title="My Blog" subtitle="Technical Insights, Tutorials, and Musings" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} id={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="p-0">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={300} // Adjusted height for blog post images
                className="w-full h-48 object-cover" // Fixed height for consistency
                data-ai-hint={post.dataAiHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline text-xl text-primary mb-2 hover:underline">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
              <div className="flex items-center text-xs text-muted-foreground mb-2">
                <CalendarDays className="mr-1.5 h-4 w-4 text-[#D0BFFF]" /> {post.date}
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
          For a real blog, these would lead to actual post pages.
          For now, they could link to /blog#post-id to scroll on the same page if desired.
      */}
    </PageWrapper>
  );
}
