import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'C# / .NET Core', level: 90 },
      { name: 'Java / Spring Boot', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'ASP.NET', level: 85 },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Kotlin', level: 70 },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Web Scraping', level: 80 },
      { name: 'Design Patterns', level: 85 },
      { name: 'Java JPA', level: 80 },
    ],
  },
];

const languages = [
  { name: 'Greek', level: 'Native', flag: '🇬🇷' },
  { name: 'English', level: 'C2', flag: '🇬🇧' },
  { name: 'French', level: 'C1', flag: '🇫🇷' },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-header',
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
        '.skill-category',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 70%',
          },
        }
      );

      // Animate skill bars
      gsap.fromTo(
        '.skill-bar-fill',
        { width: 0 },
        {
          width: (index, target) => target.dataset.level + '%',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="skills-header flex items-center gap-4 mb-16">
            <span className="font-mono text-primary">03.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Skills</h2>
            <div className="section-line flex-1 max-w-xs" />
          </div>

          <div className="skills-grid grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="skill-category card-gradient glow-border p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6 text-gradient inline-block">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="font-mono text-xs text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="skill-bar-fill h-full rounded-full"
                          data-level={skill.level}
                          style={{
                            background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="skill-category card-gradient glow-border p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-gradient inline-block">
              Languages
            </h3>
            <div className="flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-3 px-5 py-3 bg-muted/30 rounded-lg"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <p className="font-semibold">{lang.name}</p>
                    <p className="text-xs text-primary font-mono">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
