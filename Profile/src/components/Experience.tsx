"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-dark-magenta mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-dark-magenta hidden lg:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.6 }}
            style={{ transformOrigin: "top" }}
          ></motion.div>

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.8 + index * 0.2,
                }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark-magenta rounded-full border-4 border-white hidden lg:block z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.0 + index * 0.2,
                  }}
                ></motion.div>

                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <motion.div
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                      <div className="flex-1 min-w-0">
                        <motion.h3
                          className="text-lg sm:text-xl font-bold text-dark-magenta mb-1 break-words"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 1.2 + index * 0.2,
                          }}
                        >
                          {exp.role}
                        </motion.h3>
                        <div className="flex items-center gap-2 mb-2">
                          {exp.link ? (
                            <motion.a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-violet hover:text-dark-magenta font-semibold text-sm sm:text-base break-words"
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : {}}
                              transition={{
                                duration: 0.6,
                                delay: 1.3 + index * 0.2,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {exp.company}
                            </motion.a>
                          ) : (
                            <motion.span
                              className="text-violet font-semibold text-sm sm:text-base break-words"
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : {}}
                              transition={{
                                duration: 0.6,
                                delay: 1.3 + index * 0.2,
                              }}
                            >
                              {exp.company}
                            </motion.span>
                          )}
                        </div>
                      </div>
                      <motion.span
                        className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap self-start shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>

                    <motion.div
                      className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{exp.location}</span>
                    </motion.div>

                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
                    >
                      {exp.description.map((desc, descIndex) => (
                        <motion.li
                          key={descIndex}
                          className="text-gray-700 flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 1.7 + index * 0.2 + descIndex * 0.1,
                          }}
                        >
                          <span className="text-dark-magenta mr-2 text-lg shrink-0">
                            •
                          </span>
                          <span className="text-xs sm:text-sm leading-relaxed break-words">
                            {desc}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>

                {/* Empty space for timeline balance */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
