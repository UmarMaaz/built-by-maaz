
import { FadeInWhenVisible } from "@/components/motion-components";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-indigo-500/5"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to my newsletter to receive updates on new projects, AI insights, and technology tips.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 whitespace-nowrap"
                disabled={isSubmitting || submitted}
              >
                {isSubmitting 
                  ? "Subscribing..." 
                  : submitted 
                    ? "Subscribed!" 
                    : "Subscribe"
                }
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
