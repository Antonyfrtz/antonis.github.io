import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, MapPin, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="about-content flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">01.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
            <div className="section-line flex-1 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <p className="about-content text-muted-foreground text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in software engineering 
                and intelligent systems. My journey in tech started at the University of Piraeus, where 
                I graduated with an impressive <span className="text-foreground font-medium">8.86/10.0 GPA</span>.
              </p>

              <p className="about-content text-muted-foreground text-lg leading-relaxed">
                Currently working at <span className="text-primary font-medium">SoftOne Global Sustain</span>, 
                I specialize in building robust applications using C# and React. I've had the privilege 
                of participating in the Erasmus+ program at the University of Ljubljana, Slovenia, 
                where I also conducted research.
              </p>

              <p className="about-content text-muted-foreground text-lg leading-relaxed">
                I thrive in hackathons and competitive environments — winning 2nd place at the SoftOne 
                Digital Commerce Hackathon and 3rd place at the Greece-Türkiye Hackathon 2025 with ResQLink.
              </p>

              <div className="about-content flex flex-wrap gap-3 pt-4">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">C#</span>
                <span className="tech-tag">.NET Core</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Spring Boot</span>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="about-content card-gradient glow-border p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">University of Piraeus</h3>
                    <p className="text-sm text-muted-foreground">B.Sc. Informatics</p>
                    <p className="text-xs text-primary font-mono mt-1">2020 - 2024</p>
                  </div>
                </div>
              </div>

              <div className="about-content card-gradient glow-border p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Erasmus+ Exchange</h3>
                    <p className="text-sm text-muted-foreground">University of Ljubljana, Slovenia</p>
                    <p className="text-xs text-primary font-mono mt-1">Feb - Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className="about-content card-gradient glow-border p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Vodafone Campus Lab</h3>
                    <p className="text-sm text-muted-foreground">Winner with myIasis project</p>
                    <p className="text-xs text-primary font-mono mt-1">Jan - Jul 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
