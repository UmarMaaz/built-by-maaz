
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const phrases = [
    "Transforming Ideas into AI Solutions",
    "Building Smart Web & Mobile Apps",
    "Creating Data-Driven Experiences"
  ];

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    
    if (currentIndex < phrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + phrase[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Wait a bit before erasing
      const timeout = setTimeout(() => {
        eraseText();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentPhrase]);

  // Add scroll event listener to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const eraseText = () => {
    if (displayedText.length === 0) {
      setCurrentPhrase((currentPhrase + 1) % phrases.length);
      setCurrentIndex(0);
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayedText(displayedText.slice(0, -1));
      setTimeout(eraseText, 50);
    }, 30);
    
    return () => clearTimeout(timeout);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    hidden: { y: 0 },
    visible: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: i * 0.2,
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    }),
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pb-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 gradient-bg"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Small decorative elements */}
      <motion.div
        className="absolute top-1/3 right-1/2 w-4 h-4 bg-primary/50 rounded-full"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={floatingAnimation}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-500/50 rounded-full"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={floatingAnimation}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-5 h-5 bg-indigo-500/50 rounded-full"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={floatingAnimation}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Maaz.AI</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-16 flex items-center justify-center mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl">
              {displayedText}
              <span className="animate-cursor-blink">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              AI-powered solutions, web development, and data engineering
              <br />by a solo founder passionate about simplifying technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
              asChild
            >
              <a href="#contact">Let's Work Together</a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Down Indicator - Adjusted position */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-8 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a 
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center"
          >
            <span className="mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary/90 hover:bg-primary rounded-full shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -3 }}
        >
          <ArrowUp size={20} className="text-white" />
        </motion.button>
      )}
    </section>
  );
}
