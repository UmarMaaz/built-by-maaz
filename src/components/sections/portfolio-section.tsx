
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "@/components/motion-components";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      title: "AI Writing Assistant",
      description: "An intelligent writing assistant powered by GPT-4, helping users create, edit, and enhance their content.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070",
      tags: ["React", "OpenAI API", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with customizable charts and real-time filtering.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Smart Inventory System",
      description: "AI-powered inventory management system with predictive analytics and automated reordering capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070",
      tags: ["Next.js", "TensorFlow", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "Personal Finance Tracker",
      description: "Mobile application for tracking expenses, setting budgets, and getting AI-powered insights on spending habits.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070",
      tags: ["React Native", "Firebase", "Chart.js", "OpenAI"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
            <p className="text-lg text-muted-foreground">
              Explore some of my recent projects showcasing AI solutions, web applications, and data engineering work.
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <StaggerItem key={idx}>
                <div className="group relative overflow-hidden rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-muted text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <Button variant="ghost" className="group" asChild>
                      <a href={project.link}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
