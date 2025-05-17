
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ContactSection } from "@/components/sections/contact-section";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading for a small amount of time for a smoother experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-4 border-muted border-t-primary animate-spin"></div>
            <div className="mt-4 text-center font-medium text-muted-foreground">Loading...</div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <TeamSection />
            <TestimonialsSection />
            <NewsletterSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
