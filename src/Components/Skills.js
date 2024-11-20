import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Settings, Smartphone, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend Development",
    icon: Terminal,
    items: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["React Native", "Expo", "iOS", "Android", "PWA"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Prisma"]
  },
  {
    category: "DevOps",
    icon: Settings,
    items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"]
  },
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-[#15202B]" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}