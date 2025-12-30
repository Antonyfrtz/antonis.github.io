import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Folder } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: 'Cross-platform University Mobile App',
    description: 'A comprehensive Flutter-based mobile application for university students, featuring course management, scheduling, and campus resources.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    period: '2023-2025',
  },
  {
    title: 'Financial Information System',
    description: 'Enterprise-grade financial management system built with .NET Core backend and TypeScript frontend, featuring real-time data processing.',
    technologies: ['.NET Core', 'TypeScript', 'SQL Server', 'React'],
    period: '2024',
    github: 'https://github.com/Antonyfrtz/InformationSystems-NetCoreAPI',
    live: '#',
  },
  {
    title: '3D Space Navigation with ROS2',
    description: 'Intelligent navigation system for 3D environments using Robot Operating System 2, implementing advanced pathfinding algorithms.',
    technologies: ['ROS2', 'Python', 'C++', 'Computer Vision'],
    period: '2024',
    github: 'https://github.com/Antonyfrtz/IntelligentSystems',
  },
];

const otherProjects = [
  {
    title: 'Ruby on Rails SaaS App',
    description: 'Full-stack SaaS application with REST API integration.',
    technologies: ['Ruby on Rails', 'REST API', 'PostgreSQL'],
    period: '2024',
  },
  {
    title: 'Spring Supermarket App',
    description: 'E-commerce platform built with Java Spring and JPA.',
    technologies: ['Java', 'Spring Boot', 'JPA'],
    period: '2023',
  },
  {
    title: 'SOLID Design Patterns',
    description: '.NET Core Web 6 project demonstrating SOLID principles.',
    technologies: ['.NET Core 6', 'C#', 'Design Patterns'],
    period: '2023',
  },
  {
    title: 'University RDBMS',
    description: 'Open-source relational database management system in Python.',
    technologies: ['Python', 'SQL', 'Data Structures'],
    period: '2023',
  },
  {
    title: 'Covid-19 Vaccination Platform',
    description: 'Citizen vaccination management platform built with ASP.NET.',
    technologies: ['ASP.NET', 'C#', 'SQL Server'],
    period: '2022',
  },
  {
    title: 'Java Servlet E-Class',
    description: 'Educational platform using Java Servlets.',
    technologies: ['Java', 'Servlets', 'MySQL'],
    period: '2022',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-header',
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
        '.featured-project',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.featured-grid',
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.other-project',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.other-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 relative bg-card/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="projects-header flex items-center gap-4 mb-16">
            <span className="font-mono text-primary">04.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Projects</h2>
            <div className="section-line flex-1 max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="featured-grid space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`featured-project relative grid lg:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? 'lg:text-right' : ''
                }`}
              >
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? 'lg:col-start-6 lg:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden card-gradient glow-border">
                    <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                      <Folder className="text-primary/30" size={80} />
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 lg:absolute ${
                    index % 2 === 1 ? 'lg:left-0' : 'lg:right-0'
                  } z-10`}
                >
                  <p className="font-mono text-primary text-sm mb-2">{project.period}</p>
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="card-gradient p-6 rounded-xl mb-4 shadow-lg">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-sm text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Other Noteworthy Projects</h3>
          </div>

          <div className="other-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="other-project card-gradient glow-border p-6 rounded-xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <Folder className="text-primary" size={40} />
                  <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
