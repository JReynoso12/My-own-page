"use client";

import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiPython, SiVuedotjs } from "react-icons/si";
import ProgressBar from "./ui/ProgressBar";
import { Skill } from "@/types";

const skills: Skill[] = [
  {
    name: "React",
    percentage: 90,
    icon: SiReact,
    color: "neon-blue",
  },
  {
    name: "Tailwind",
    percentage: 85,
    icon: SiTailwindcss,
    color: "neon-blue",
  },
  {
    name: "Python",
    percentage: 80,
    icon: SiPython,
    color: "neon-green",
  },
  {
    name: "Vue",
    percentage: 95,
    icon: SiVuedotjs,
    color: "neon-purple",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:ml-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">
            My Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I'm a passionate web developer with over 3 years of experience
            creating modern, responsive web applications. I specialize in
            frontend development using cutting-edge technologies to deliver
            exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Visual Element - Tech Logos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-64 h-64">
              {/* Robotic hand illustration using tech logos */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-20 h-20 bg-background-darker rounded-xl flex items-center justify-center border-2 border-gray-800 hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue"
                      >
                        <Icon className="w-10 h-10 text-neon-blue" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background-darker rounded-xl p-6 border border-gray-800 hover:border-neon-blue transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <span className="text-xl font-semibold text-white">
                      {skill.name}
                    </span>
                  </div>
                  <ProgressBar
                    percentage={skill.percentage}
                    color={skill.color}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
