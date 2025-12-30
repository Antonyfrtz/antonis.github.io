import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="contact-content flex items-center justify-center gap-4 mb-8">
            <span className="font-mono text-primary">05.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Get In Touch</h2>
          </div>

          <p className="contact-content text-lg text-muted-foreground mb-12 leading-relaxed">
            I'm currently open to new opportunities and exciting projects. Whether you have a question, 
            a proposal, or just want to say hello, feel free to reach out — I'll do my best to get back to you!
          </p>

          <div className="contact-content flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={20} />
              <span>Athens, Greece</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="text-primary" size={20} />
              <span>Currently not looking for work</span>
            </div>
          </div>

          <a
            href="mailto:antonyfrtz@gmail.com"
            className="contact-content inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <span>Say Hello</span>
            <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
