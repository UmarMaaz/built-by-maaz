import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">Maaz.AI</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Transforming ideas into AI solutions. I specialize in AI-powered tools, 
              web & mobile apps development, and beginner-level data engineering.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:umarmaaz2637@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to get the latest updates.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button size="sm" className="whitespace-nowrap">
                Subscribe <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maaz.AI. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
