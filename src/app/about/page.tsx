import Image from 'next/image';
import { PageWrapper } from '@/components/shared/page-wrapper';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BriefcaseBusiness, GraduationCap, Heart, Lightbulb, MapPinned, Sparkles } from 'lucide-react';

const skills = [
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React & Next.js', level: 90 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'Python & Django', level: 75 },
  { name: 'Databases (SQL, NoSQL)', level: 80 },
  { name: 'Cloud (AWS, Firebase)', level: 70 },
  { name: 'UI/UX Design Principles', level: 70 },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionTitle title="About Me" subtitle="My Story, Skills, and Aspirations" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="https://placehold.co/300x400.png"
            alt="Biprodeep Nath"
            width={300}
            height={400}
            className="rounded-lg shadow-xl object-cover border-4 border-accent"
            data-ai-hint="portrait professional"
          />
        </div>

        <div className="md:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-[#D0BFFF]" /> My Background
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Hello! I'm Biprodeep Nath, a software developer driven by a passion for creating innovative and user-centric digital solutions. My journey into the world of technology began with a fascination for how software can solve real-world problems and enhance human experiences.
              </p>
              <p>
                Over the years, I've honed my skills in full-stack development, working on diverse projects that have challenged me to learn and grow continuously. I thrive in collaborative environments and enjoy tackling complex technical challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <MapPinned className="mr-2 h-6 w-6 text-[#D0BFFF]" /> My Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                My path has been one of constant learning and adaptation. From my early explorations in programming to tackling complex full-stack projects, each step has been a building block. I believe in the power of continuous improvement and am always seeking opportunities to expand my knowledge and skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="py-12 mt-12">
        <h3 className="font-headline text-2xl text-primary mb-6 text-center flex items-center justify-center">
          <Sparkles className="mr-2 h-7 w-7 text-[#D0BFFF]" /> My Skills
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
            <h4 className="font-semibold text-lg text-foreground">Bachelor of Technology in Computer Science</h4>
            <p>XYZ University, City, Country (2018 - 2022)</p>
            <p className="mt-2">
              Graduated with honors, focusing on software engineering, data structures, and algorithms. Actively participated in coding clubs and hackathons.
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
              <li>Contributing to open-source projects.</li>
              <li>Reading tech blogs and articles.</li>
              <li>Photography and hiking.</li>
              <li>Playing chess and strategy games.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </PageWrapper>
  );
}
