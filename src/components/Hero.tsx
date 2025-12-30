import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        '.hero-greeting',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-role',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(
          decorRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
          '-=0.8'
        );

      // Floating animation for decorative elements
      gsap.to('.floating-icon', {
        y: -15,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Animated dots */}
      <div className="absolute top-1/4 left-1/4 floating-dot animate-float opacity-50" />
      <div className="absolute top-1/3 right-1/3 floating-dot animate-float opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 floating-dot animate-float opacity-40" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="hero-greeting font-mono text-primary mb-6 opacity-0">
            Hello, my name is
          </p>

          <h1
            ref={titleRef}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 opacity-0"
          >
            Antonios{' '}
            <span className="text-gradient">Fritzelas</span>
          </h1>

          <h2 className="hero-role text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-muted-foreground mb-8 opacity-0">
            Full Stack Developer
          </h2>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0"
          >
            Crafting digital experiences with{' '}
            <span className="text-foreground font-medium">React</span>,{' '}
            <span className="text-foreground font-medium">TypeScript</span>, and{' '}
            <span className="text-foreground font-medium">C#</span>. Based in Athens, Greece.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              View My Work
              <ArrowDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Decorative floating icons */}
        <div ref={decorRef} className="absolute inset-0 pointer-events-none opacity-0">
          <div className="floating-icon absolute top-1/4 left-[10%] text-primary/20">
            <Code2 size={48} />
          </div>
          <div className="floating-icon absolute top-1/3 right-[15%] text-accent/20">
            <Terminal size={40} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
