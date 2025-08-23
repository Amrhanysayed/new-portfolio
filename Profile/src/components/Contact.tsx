"use client";

import { portfolioData } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const { contact } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      ref={ref}
    >
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
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-dark-magenta mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-lg text-violet max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-violet mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-dark-magenta mb-8">
                Feel free to reach out if you&apos;re looking for a developer,
                have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-mint-green bg-opacity-20 p-3 rounded-lg border border-mint-green">
                  <svg
                    className="w-6 h-6 text-dark-magenta"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-violet text-sm">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-900 font-medium hover:text-dark-magenta transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-rose-quartz/20 p-3 rounded-lg border border-rose-quartz/40">
                  <svg
                    className="w-6 h-6 text-violet"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-violet text-sm">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-900 font-medium hover:text-dark-magenta transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-rose-quartz bg-opacity-20 p-3 rounded-lg border border-rose-quartz">
                  <svg
                    className="w-6 h-6 text-dark-magenta"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-violet text-sm">LinkedIn</p>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium hover:text-dark-magenta transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-violet/10 p-3 rounded-lg border border-violet/30">
                  <svg
                    className="w-6 h-6 text-violet"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-violet text-sm">GitHub</p>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium hover:text-dark-magenta transition-colors"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-rose-quartz/20 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-violet mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-rose-quartz/30 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-dark-magenta/50 focus:border-dark-magenta transition-all duration-200 hover:border-rose-quartz/50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-violet mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-rose-quartz/30 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-dark-magenta/50 focus:border-dark-magenta transition-all duration-200 hover:border-rose-quartz/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-violet mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-rose-quartz/30 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-dark-magenta/50 focus:border-dark-magenta transition-all duration-200 hover:border-rose-quartz/50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-violet mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-rose-quartz/30 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-dark-magenta/50 focus:border-dark-magenta transition-all duration-200 hover:border-rose-quartz/50 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-dark-magenta hover:bg-violet text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-dark-magenta/50 focus:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-rose-quartz/20 text-center">
          <p className="text-gray-600">
            © 2025 Amr Hany. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
