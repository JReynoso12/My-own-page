"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import AIChat from "./AIChat";

const socialLinks = [
  {
    icon: FaLinkedin,
    username: "LinkedIn",
    url: "https://www.linkedin.com/in/jimuel-reynoso",
  },
  {
    icon: FaGithub,
    username: "JReynoso12",
    url: "https://github.com/JReynoso12",
  },
  {
    icon: FaFacebook,
    username: "Facebook",
    url: "https://www.facebook.com/jimuel.torrecampo.1",
  },
  {
    icon: FaInstagram,
    username: "@rjmuuuel",
    url: "https://www.instagram.com/rjmuuuel/",
  },
];

export default function ContactPerson() {
  return (
    <section className="w-full py-2 px-1">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left Side - Contact card (glass widget) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-5 sm:p-6 md:p-7 rounded-2xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Contact me</h2>

              <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
                <div className="relative">
                  {/* Translucent blue shapes behind profile */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 rounded-full bg-blue-500/20 blur-2xl -ml-4" />
                    <div className="absolute w-24 h-24 rounded-full bg-blue-400/15 blur-xl ml-6 mt-2" />
                  </div>
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/10 ring-2 ring-blue-500/20">
                    <Image
                      src="/images/avatar.png"
                      alt="Jimuel Reynoso"
                      width={176}
                      height={176}
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
                      className="object-cover w-full h-full grayscale"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Jimuel Reynoso</h3>

              {/* Email & Phone */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
                <a
                  href="mailto:rjimueltorrecampo@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-2 text-glass-secondary hover:text-neon-blue transition-colors"
                >
                  <HiMail className="w-5 h-5 text-neon-blue shrink-0" />
                  <span className="text-sm break-all">rjimueltorrecampo@gmail.com</span>
                </a>
                <a
                  href="tel:+639126114933"
                  className="flex items-center justify-center md:justify-start gap-2 text-glass-secondary hover:text-neon-blue transition-colors"
                >
                  <HiPhone className="w-5 h-5 text-neon-blue shrink-0" />
                  <span className="text-sm">+63 912 611 4933</span>
                </a>
              </div>

              <div className="space-y-4 mb-6">
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
                      whileHover={{ x: 6 }}
                      className="flex items-center justify-center md:justify-start gap-3 text-glass-secondary hover:text-neon-blue transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-neon-blue" />
                      <span className="text-base">{social.username}</span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="glass-card p-5 rounded-xl cursor-pointer transition-all"
                >
                  <p className="text-white text-base font-medium">Portfolio 2023</p>
                  <p className="text-glass-muted text-sm mt-0.5">Web projects</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="glass-card p-5 rounded-xl cursor-pointer transition-all"
                >
                  <p className="text-white text-base font-medium">Design portfolio 2024</p>
                  <p className="text-glass-muted text-sm mt-0.5">UI/UX & design</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - AI Chat (glass widget) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AIChat />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
