import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Breast Cancer Detection Using Hybrid Deep Learning Models",
    description: "A deep learning project focused on breast cancer detection using hybrid models and transfer learning techniques.",
    github: "https://github.com/drugarim/Breast-Cancer-Detection-using-Hybrid-Models-and-Transfer-Learning",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Molf",
    description: "Project details coming soon",
    github: "#",
    image: "./molf.png",
  },
  {
    title: "Battleship AI Player",
    description: "An AI-powered player for the classic Battleship game",
    github: "https://github.com/drugarim/BattleShipAI",
    image: "https://images.unsplash.com/photo-1615714764927-1293deb4ad49?q=80&w=800&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;