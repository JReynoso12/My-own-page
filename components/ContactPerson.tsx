"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiSparkles } from "react-icons/hi";
import AIChat from "./AIChat";

const socialLinks = [
  {
    icon: FaLinkedin,
    username: "LinkedIn",
    url: "https://www.linkedin.com/in/jimuel-reynoso",
    color: "#0077B5",
  },
  {
    icon: FaGithub,
    username: "JReynoso12",
    url: "https://github.com/JReynoso12",
    color: "#C084FC",
  },
  {
    icon: FaFacebook,
    username: "Facebook",
    url: "https://www.facebook.com/jimuel.torrecampo.1",
    color: "#1877F2",
  },
  {
    icon: FaInstagram,
    username: "@rjmuuuel",
    url: "https://www.instagram.com/rjmuuuel/",
    color: "#E4405F",
  },
];

const portfolioItems = [
  { title: "Portfolio 2023", subtitle: "Web projects", color: "#FF6B9D" },
  { title: "Design Portfolio 2024", subtitle: "UI/UX & design", color: "#C084FC" },
];

export default function ContactPerson() {
  return (
    <section className="w-full py-2 px-1">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left Side - Contact card with anime styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="space-y-6"
          >
            <div className="anime-glass-card p-5 sm:p-6 md:p-7">
              {/* Header */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-anime-pink to-anime-purple rounded-full mb-4"
              />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-4 sm:mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h2>

              {/* Profile image with anime glow */}
              <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
                <div className="relative">
                  {/* Animated glow effects */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-32 h-32 rounded-full bg-anime-pink/30 blur-2xl" />
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-28 h-28 rounded-full bg-anime-purple/30 blur-xl" />
                  </motion.div>

                  {/* Avatar */}
                  <motion.div 
                    className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-r from-anime-pink via-anime-purple to-anime-cyan animate-spin-slow opacity-60 blur-sm" />
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/images/avatar.png"
                        alt="Jimuel Reynoso"
                        fill
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl font-bold font-display text-white mb-3 sm:mb-4 text-center md:text-left"
              >
                Jimuel Reynoso
              </motion.h3>

              {/* Contact info with anime styling */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
                <motion.a
                  href="mailto:rjimueltorrecampo@gmail.com"
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-center md:justify-start gap-2 text-glass-secondary hover:text-anime-pink transition-colors"
                >
                  <HiMail className="w-5 h-5 text-anime-pink shrink-0" />
                  <span className="text-sm break-all">rjimueltorrecampo@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:+639126114933"
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-center md:justify-start gap-2 text-glass-secondary hover:text-anime-cyan transition-colors"
                >
                  <HiPhone className="w-5 h-5 text-anime-cyan shrink-0" />
                  <span className="text-sm">+63 912 611 4933</span>
                </motion.a>
              </div>

              {/* Social links with anime hover */}
              <div className="space-y-3 mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ 
                        x: 8,
                        boxShadow: `0 0 20px ${social.color}40`,
                      }}
                      className="flex items-center justify-center md:justify-start gap-3 p-2 rounded-xl transition-all duration-300"
                      style={{
                        background: `${social.color}10`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: social.color }} />
                      <span className="text-base text-glass-secondary group-hover:text-white">{social.username}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Portfolio cards with anime styling */}
              <div className="space-y-3">
                {portfolioItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="anime-glass-card p-4 rounded-xl cursor-pointer"
                    style={{
                      borderLeft: `3px solid ${item.color}`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <HiSparkles className="w-4 h-4" style={{ color: item.color }} />
                      <p className="text-white text-base font-medium font-display">{item.title}</p>
                    </div>
                    <p className="text-glass-muted text-sm mt-0.5 pl-6">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            <AIChat />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
