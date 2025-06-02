import Image from 'next/image';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Heart, Lightbulb, MapPinned, Sparkles, LaptopCode, Brain } from 'lucide-react';

const skills = [
  { name: 'JavaScript (ES6+)', level: 75 },
  { name: 'TypeScript', level: 60 },
  { name: 'React & Next.js', level: 70 },
  { name: 'Node.js & Express (Learning)', level: 50 },
  { name: 'Python (Foundational)', level: 65 },
  { name: 'Databases (SQL Basics)', level: 55 },
  { name: 'Git & GitHub', level: 70 },
  { name: 'Problem Solving', level: 80 },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionTitle title="About Me" subtitle="My Story, Skills, and Aspirations" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="https://placehold.co/300x400.png"
            alt="Biprodeep Nath - Aspiring Developer"
            width={300}
            height={400}
            className="rounded-lg shadow-xl object-cover border-4 border-accent"
            data-ai-hint="man developer portrait professional"
          />
        </div>

        <div className="md:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-[#D0BFFF]" /> My Spark
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Hello! I'm Biprodeep Nath, often known as Bipro. I'm a student developer deeply fascinated by the power of technology to solve real-world problems and create innovative solutions. My journey into software development started with a curiosity about how code transforms ideas into tangible digital experiences.
              </p>
              <p>
                I'm currently honing my skills in full-stack development, embracing new challenges, and continuously learning. I believe in the power of collaboration and am always excited to contribute to impactful projects.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <MapPinned className="mr-2 h-6 w-6 text-[#D0BFFF]" /> My Learning Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                My path is one of continuous exploration and growth. From my initial steps in programming to tackling more complex projects, each experience is a stepping stone. I'm driven by a desire to learn and improve, always seeking opportunities to expand my knowledge and apply my skills in new contexts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="py-12 mt-12">
        <h3 className="font-headline text-2xl text-primary mb-6 text-center flex items-center justify-center">
          <Sparkles className="mr-2 h-7 w-7 text-[#D0BFFF]" /> My Current Skillset
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg text-foreground mb-2">{skill.name}</h4>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-[#D0BFFF]" /> Education
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <h4 className="font-semibold text-lg text-foreground">Bachelor of Technology in Computer Science (Ongoing)</h4>
            <p>My University, City, Country (Expected Graduation: 20XX)</p>
            <p className="mt-2">
              Currently pursuing my degree with a focus on software engineering, data structures, algorithms, and web development. Actively participating in coding communities and personal projects.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Heart className="mr-2 h-6 w-6 text-[#D0BFFF]" /> Interests & Hobbies
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li>Exploring new programming languages and frameworks.</li>
              <li>Contributing to or starting open-source projects.</li>
              <li>Reading tech blogs and research papers.</li>
              <li>Competitive programming and algorithm challenges.</li>
              <li>Playing chess and listening to music.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </PageWrapper>
  );
}
