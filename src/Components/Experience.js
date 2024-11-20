import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Led the development of enterprise-scale React applications, mentored junior developers, and implemented modern CI/CD practices.",
    technologies: ["React", "TypeScript", "GraphQL", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd",
    period: "2019 - 2021",
    description: "Developed responsive web applications and contributed to the company's design system.",
    technologies: ["Vue.js", "JavaScript", "Sass", "Jest"],
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "2017 - 2019",
    description: "Created interactive websites for clients across various industries.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-[#15202B] border-t border-[#2F3336] backdrop-blur-sm" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-4xl font-bold text-center text-[#64ffda] mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-[#64ffda]/20 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#64ffda]" />
              
              <div className="bg-[#112240] p-6 rounded-lg shadow-xl hover:shadow-[#64ffda]/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#ccd6f6]">{exp.title}</h3>
                  <div className="flex items-center text-[#8892b0]">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-[#64ffda] mb-4">
                  <Briefcase size={16} className="mr-2" />
                  <span>{exp.company}</span>
                </div>

                <p className="text-[#8892b0] mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#233554] text-[#64ffda] text-sm rounded-full"
                    >
                      {tech}
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