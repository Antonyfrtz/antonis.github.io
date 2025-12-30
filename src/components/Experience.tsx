import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Trophy, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'SoftOne Global Sustain',
    location: 'Athens, Greece',
    period: 'February 2025 – Present',
    description: 'Developing enterprise applications using C# and React, focusing on sustainable technology solutions.',
    technologies: ['C#', 'React', 'TypeScript', '.NET Core'],
    icon: Building2,
    type: 'work',
  },
  {
    id: 2,
    role: 'Hackathon Winner',
    company: 'Greece - Türkiye Hackathon 2025',
    location: 'Athens & Istanbul',
    period: 'January 2025',
    description: '3rd place award with ResQLink - an innovative emergency response solution.',
    technologies: ['Innovation', 'Team Leadership', 'Problem Solving'],
    icon: Trophy,
    type: 'achievement',
  },
  {
    id: 3,
    role: '2nd Place Winner',
    company: 'SoftOne Digital Commerce Hackathon',
    location: 'Athens, Greece',
    period: 'December 2024',
    description: 'Developed a cutting-edge digital commerce solution that impressed the judges.',
    technologies: ['Digital Commerce', 'Full Stack', 'Rapid Development'],
    icon: Trophy,
    type: 'achievement',
  },
  {
    id: 4,
    role: 'Trainee & Programme Winner',
    company: 'Vodafone Campus Lab',
    location: 'Athens, Greece',
    period: 'January – July 2024',
    description: 'Winner of the programme with the myIasis project and business model.',
    technologies: ['Entrepreneurship', 'Mobile Development', 'Business Model'],
    icon: Trophy,
    type: 'achievement',
  },
  {
    id: 5,
    role: 'IT & Finance Support',
    company: 'Bouygues-Intrakat RT JV',
    location: 'Athens, Elliniko',
    period: 'May 2023 – March 2024',
    description: 'Supported IT, Accounting and Financial operations for the Riviera Tower Hellinikon Project.',
    technologies: ['IT Support', 'Financial Systems', 'Project Management'],
    icon: Briefcase,
    type: 'work',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.exp-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.exp-timeline',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeExp = experiences.find((e) => e.id === activeId);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 relative bg-card/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="exp-header flex items-center gap-4 mb-16">
            <span className="font-mono text-primary">02.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Experience</h2>
            <div className="section-line flex-1 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Timeline sidebar */}
            <div className="exp-timeline lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`exp-item flex-shrink-0 text-left px-5 py-4 rounded-lg border transition-all duration-300 ${
                    activeId === exp.id
                      ? 'bg-primary/10 border-primary text-foreground'
                      : 'border-transparent hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <p className="font-mono text-xs text-primary mb-1">{exp.period}</p>
                  <p className="font-semibold text-sm whitespace-nowrap">{exp.company}</p>
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="lg:col-span-8">
              {activeExp && (
                <div className="card-gradient glow-border p-8 rounded-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${activeExp.type === 'achievement' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                      <activeExp.icon className={activeExp.type === 'achievement' ? 'text-accent' : 'text-primary'} size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{activeExp.role}</h3>
                      <p className="text-primary font-medium">{activeExp.company}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <span>{activeExp.location}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{activeExp.period}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {activeExp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {activeExp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
