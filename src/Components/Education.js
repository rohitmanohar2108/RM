import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2015 - 2017",
    description: "Specialized in Human-Computer Interaction and Machine Learning. Graduated with honors.",
    achievements: [
      "Published research paper on AI-driven UI optimization",
      "Led student research group on VR applications",
      "Teaching Assistant for Advanced Web Development"
    ]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "MIT",
    location: "Cambridge, MA",
    period: "2011 - 2015",
    description: "Focus on Software Architecture and Web Technologies. Dean's List all semesters.",
    achievements: [
      "Developed award-winning campus navigation app",
      "President of Computer Science Society",
      "Internship at Google during summer breaks"
    ]
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black " id="education">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-4xl font-bold text-center text-[#64ffda] mb-16"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-[#112240] border border-[#2F3336] p-8 rounded-lg shadow-xl hover:shadow-[#64ffda]/10 transition-all duration-300">
                <div className="absolute top-6 right-6 text-[#64ffda] opacity-10">
                  <GraduationCap size={60} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-[#8892b0]">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex items-center text-[#64ffda] mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{edu.school}, {edu.location}</span>
                </div>

                <p className="text-[#8892b0] mb-6">{edu.description}</p>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                  {edu.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (achIndex * 0.1) }}
                      className="flex items-center text-[#8892b0]"
                    >
                      <div className="w-2 h-2 bg-[#64ffda] rounded-full mr-3" />
                      <span>{achievement}</span>
                    </motion.div>
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