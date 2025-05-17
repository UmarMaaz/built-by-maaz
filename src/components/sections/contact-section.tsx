
import { FadeInWhenVisible } from "@/components/motion-components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitHub, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to learn more? Let's connect and discuss how we can work together.
            </p>
          </div>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInWhenVisible direction="left">
            <Card className="border-border h-full bg-background/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:umarmaaz2637@gmail.com" className="font-medium hover:text-primary transition-colors">
                        umarmaaz2637@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Let's chat</p>
                      <p className="font-medium">I typically reply within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium mb-4">Connect on social media</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHub size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible direction="right">
            <Card className="border-border bg-background/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    disabled={isSubmitting || submitted}
                  >
                    {isSubmitting 
                      ? "Sending..." 
                      : submitted 
                        ? "Message Sent!" 
                        : "Send Message"
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
