import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-accent dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6">
          <Link
            to="https://www.linkedin.com/in/manzi-dave-rugari-5369b5269/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            to="https://github.com/drugarim?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            to="mailto:dave_rugari@taylor.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;