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
    <section className="py-20 bg-[#f3f2ef]  backdrop-blur-sm" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-4xl font-bold text-center text-black mb-16"
        >
          Professional <span className='text-[#0A66C2]'>Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-[#D1D1D1] last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#8D8D8D]" />
              
              <div className="bg-white border border-[#D1D1D1] p-6 rounded-lg shadow-xl hover: transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-[#0A66C2] mb-4">
                  <Briefcase size={16} className="mr-2" />
                  <span>{exp.company}</span>
                </div>

                <p className="text-[#333333] mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#f3f2ef] text-[#333333] border border-[#D1D1D1] text-sm rounded-full"
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