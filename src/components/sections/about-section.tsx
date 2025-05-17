
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "@/components/motion-components";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <FadeInWhenVisible>
              <div className="flex items-center mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
                  <div className="h-1 w-20 bg-primary mb-4"></div>
                </div>
                <div className="ml-auto">
                  <Avatar className="h-24 w-24 border-2 border-primary">
                    <AvatarImage 
                      src="/src/assets/images/team/maaz.jpeg" 
                      alt="Maaz" 
                      className="object-cover"
                    />
                    <AvatarFallback className="text-xl bg-primary/20">
                      <User className="h-10 w-10" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <div className="space-y-6 text-lg">
                <p>
                  I'm <span className="font-semibold text-primary">Maaz</span>, 
                  a solo founder and software engineering student passionate about 
                  creating practical, AI-powered solutions that solve real problems.
                </p>
                <p>
                  With expertise in building AI tools using Large Language Models,
                  developing responsive websites, and implementing data engineering solutions,
                  I bring a unique blend of technical skills and creative problem-solving to every project.
                </p>
                <p>
                  My mission is to deliver clean, efficient, and innovative technology solutions
                  that help individuals and businesses leverage the power of AI and modern web technologies.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
          
          <div>
            <StaggerChildren>
              <h3 className="text-2xl font-bold mb-6">My Expertise</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "AI Development",
                    description: "Building custom solutions powered by Large Language Models and machine learning."
                  },
                  {
                    title: "Web Development",
                    description: "Creating responsive, modern websites and web applications with clean code."
                  },
                  {
                    title: "Mobile Applications",
                    description: "Developing cross-platform mobile apps that deliver excellent user experiences."
                  },
                  {
                    title: "Data Engineering",
                    description: "Implementing ETL pipelines, data cleaning, and visualization solutions."
                  }
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <Card className="border border-border hover:border-primary/50 transition-colors duration-300">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
