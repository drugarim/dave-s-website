import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const AboutSection = () => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Test image loading
    const img = new Image();
    img.src = "/dave.png";
    img.onload = () => {
      console.log("Image loaded successfully");
      setImageError(false);
    };
    img.onerror = () => {
      console.error("Failed to load image at /dave.png");
      setImageError(true);
    };
  }, []);

  const handleImageError = () => {
    console.error("Failed to load image in img tag");
    setImageError(true);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6 max-w-xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left dark:text-white">
              Hi, I'm <span className="text-primary dark:text-[#D3E4FD]">Manzi Dave Rugari</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center lg:text-left leading-relaxed">
              I'm an International Student from Rwanda studying Computer Science and a Minor in Cybersecurity & Data Science at Taylor University '26.
              Although I love technology, I've always been interested in sports, photography, and movies. I therefore want to find ways to express my creativity through tech.
              I am looking for an Internship in the Summer of 2025 at a company where I can continue developing my creativity in tech, as well as contribute with the skills I've developed so far.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Button className="bg-[#D3E4FD] hover:bg-[#B3D4FF] text-primary font-medium">Projects</Button>
              </Link>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Button className="bg-[#D3E4FD] hover:bg-[#B3D4FF] text-primary font-medium">Resume</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:flex-1 flex justify-center items-center"
          >
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl animate-float">
              {!imageError ? (
                <img
                  src="/dave.png"
                  alt="Profile picture of Manzi Dave Rugari"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  Image not found
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center space-x-8 mt-12">
          <a
            href="https://www.linkedin.com/in/manzi-dave-rugari-5369b5269/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/drugarim?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:dave_rugari@taylor.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;