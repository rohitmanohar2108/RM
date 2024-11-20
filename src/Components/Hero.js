import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr bg-[#f3f2ef] px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white border border-[#D1D1D1] shadow-lg rounded-lg p-8 sm:p-12 relative"
      >
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-blue-500"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-black mb-2"
          >
            John Developer
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-[#0A66C2] mb-4"
          >
            Senior Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base text-[#333333] max-w-md mx-auto mb-6"
          >
            Crafting exceptional digital experiences with modern web
            technologies. Specialized in React, TypeScript, and cutting-edge
            frontend architecture.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-4"
          >
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Mail, href: "mailto:contact@example.com" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#333333] hover:text-[#0A66C2] transition-colors"
              >
                <Icon size={24} className="sm:w-7 sm:h-7" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="absolute lg:mb-14 -bottom-44 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#D1D1D1] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-black rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
