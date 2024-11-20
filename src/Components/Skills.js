import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Settings, Smartphone, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    color: "#E34F26", // Example: Orange for frontend
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend Development",
    icon: Terminal,
    color: "#4CAF50", // Example: Green for backend
    items: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "#42A5F5", // Example: Blue for mobile
    items: ["React Native", "Expo", "iOS", "Android", "PWA"]
  },
  {
    category: "Database",
    icon: Database,
    color: "#FFD700", // Example: Gold for database
    items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Prisma"]
  },
  {
    category: "DevOps",
    icon: Settings,
    color: "#FF5722", // Example: Deep orange for DevOps
    items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"]
  },
  {
    category: "Programming Languages",
    icon: Code2,
    color: "#9C27B0", // Example: Purple for programming languages
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-[#f3f2ef]" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-4xl font-bold text-center text-black mb-16"
        >
          Technical <span className='text-[#0A66C2]'>Skills</span>
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
                className="bg-white border border-[#D1D1D1] p-6 rounded-lg shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <Icon className={`w-8 h-8`} style={{ color: skill.color }} />
                  <h3 className="text-xl font-semibold text-black ml-3">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-[#f3f2ef] text-[#333333] border border-[#D1D1D1] rounded-full text-sm"
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
