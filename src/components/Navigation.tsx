import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary dark:text-white">
            Dave's Portfolio
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a href="#about" className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300">
                About
              </a>
              <a href="#projects" className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300">
                Projects
              </a>
              <a href="#resume" className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300">
                Resume
              </a>
              <a href="#contact" className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-primary dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#resume"
                className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;