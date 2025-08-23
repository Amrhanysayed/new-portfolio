"use client";

import { portfolioData } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Languages",
      skills: skills.languages,
      color: "mint",
      bgGradient: "from-mint-green-light to-mint-green/20",
    },
    {
      title: "Frontend",
      skills: skills.frontend,
      color: "rose",
      bgGradient: "from-rose-quartz/30 to-rose-quartz/10",
    },
    {
      title: "Backend",
      skills: skills.backend,
      color: "magenta",
      bgGradient: "from-dark-magenta/20 to-dark-magenta/5",
    },
    {
      title: "Databases",
      skills: skills.databases,
      color: "violet",
      bgGradient: "from-violet/20 to-violet/5",
    },
    {
      title: "Concepts",
      skills: skills.concepts,
      color: "mint-alt",
      bgGradient: "from-mint-green/25 to-mint-green-light/50",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      // Languages - Blue theme (representing logic and syntax)
      mint: "bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500",
      // Frontend - Green theme (representing user interface and growth)
      rose: "bg-green-50 text-green-700 border-green-300 hover:bg-green-500 hover:text-white hover:border-green-500",
      // Backend - Red theme (representing servers and power)
      magenta:
        "bg-red-50 text-red-700 border-red-300 hover:bg-red-500 hover:text-white hover:border-red-500",
      // Databases - Purple theme (representing data and storage)
      violet:
        "bg-purple-50 text-purple-700 border-purple-300 hover:bg-purple-500 hover:text-white hover:border-purple-500",
      // Concepts - Orange theme (representing ideas and theory)
      "mint-alt":
        "bg-orange-50 text-orange-700 border-orange-300 hover:bg-orange-500 hover:text-white hover:border-orange-500",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.mint;
  };

  const getContainerClasses = (color: string) => {
    const containerMap = {
      // Languages - Blue theme
      mint: "border-blue-200 hover:border-blue-400 hover:shadow-blue-200",
      // Frontend - Green theme
      rose: "border-green-200 hover:border-green-400 hover:shadow-green-200",
      // Backend - Red theme
      magenta: "border-red-200 hover:border-red-400 hover:shadow-red-200",
      // Databases - Purple theme
      violet:
        "border-purple-200 hover:border-purple-400 hover:shadow-purple-200",
      // Concepts - Orange theme
      "mint-alt":
        "border-orange-200 hover:border-orange-400 hover:shadow-orange-200",
    };
    return (
      containerMap[color as keyof typeof containerMap] || containerMap.mint
    );
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-dark-magenta mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${
                category.bgGradient
              } rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${getContainerClasses(
                category.color
              )} backdrop-blur-sm`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{ y: -8, scale: 1.03, rotateY: 2 }}
            >
              <motion.h3
                className="text-xl font-bold text-gray-900 mb-4 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {category.title}
              </motion.h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={`px-3 py-2 rounded-lg text-sm font-medium border-2 transition-all duration-300 cursor-pointer ${getColorClasses(
                      category.color
                    )}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotateZ: 2,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
