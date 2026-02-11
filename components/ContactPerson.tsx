"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

const socialLinks = [
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
  {
    icon: FaGithub,
    username: "JReynoso12",
    url: "https://github.com/JReynoso12",
  },
];

export default function ContactPerson() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neon-blue mb-8">CONTACT ME</h2>
            
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border border-slate-700/70 shadow-neon-blue">
                <Image
                  src="/images/avatar.png"
                  alt="Jimuel Reynoso"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">JIMUEL REYNOSO</h3>

            {/* Social Media Links */}
            <div className="space-y-4 mb-8">
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
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-white hover:text-neon-blue transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-lg">{social.username}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Portfolio Links */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 hover:border-neon-blue hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <p className="text-white">PORTOFOLIO. 2023</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 hover:border-neon-blue hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <p className="text-white">DESIGN PORTFOLIO 2024</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Thank You */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              THANK YOU 2025
            </h2>
            
            {/* Decorative Graphic - Hand with Paintbrush and Film Strip */}
            <div className="relative w-full h-64 flex items-center justify-center md:justify-end">
              <div className="relative">
                {/* Simplified representation - you can replace with actual SVG or image */}
                <div className="w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-white text-4xl">🎨</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
