
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion-components";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <FadeIn>
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold gradient-text">Maaz.AI</span>
          </a>
        </FadeIn>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <FadeIn>
            <ul className="flex space-x-1">
              {navItems.map((item, i) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
              <li>
                <Button
                  asChild
                  className="ml-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </li>
            </ul>
          </FadeIn>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block px-3 py-2 rounded-md hover:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500"
                  >
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get In Touch
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
