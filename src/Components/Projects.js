import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with machine learning insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    tags: ["TypeScript", "React", "Python", "TensorFlow"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with modern features",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974",
    tags: ["React", "Firebase", "WebSocket", "Redux"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-12 sm:py-20 bg-black border-t border-[#2F3336]" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#112240] border border-[#2F3336] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-40 sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 sm:px-3 text-xs sm:text-sm bg-blue-500 text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}