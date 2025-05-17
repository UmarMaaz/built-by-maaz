
import { FadeInWhenVisible } from "@/components/motion-components";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, User } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team</h2>
            <p className="text-lg text-muted-foreground">
              Currently a solo founder with plans to expand. Meet the person behind Maaz.AI.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden bg-gradient-to-b from-background to-muted/30 shadow-md border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="relative h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                {/* Replace User icon with Avatar component */}
                <Avatar className="h-40 w-40 border-4 border-white">
                  <AvatarImage 
                    src="/src/assets/images/team/maaz.jpg" 
                    alt="Maaz" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl bg-primary/20">
                    <User className="h-20 w-20 text-white" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Maaz</h3>
                <p className="text-primary mb-4">Founder & Developer</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Software engineering student passionate about AI, web development, and creating elegant solutions 
                  to complex problems. Currently working as a solo founder to deliver high-quality tech solutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="mailto:umarmaaz2637@gmail.com" 
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible delay={0.3}>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold">More Coming Soon</h3>
            <p className="text-muted-foreground mt-2">
              Looking to expand the team with talented individuals who share the passion for AI and technology.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
