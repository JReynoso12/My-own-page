"use client";

import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:ml-20 pb-24 md:pb-20"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Feel free to reach out if youre looking for a developer, have a
            question, or just want to connect.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background-darker rounded-xl p-6 border border-gray-800 hover:border-neon-blue transition-all duration-300 cursor-pointer"
            >
              <HiMail className="w-8 h-8 text-neon-blue mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">rjimueltorrecampo@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background-darker rounded-xl p-6 border border-gray-800 hover:border-neon-blue transition-all duration-300 cursor-pointer"
            >
              <HiPhone className="w-8 h-8 text-neon-blue mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+639126114933</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background-darker rounded-xl p-6 border border-gray-800 hover:border-neon-blue transition-all duration-300 cursor-pointer"
            >
              <HiLocationMarker className="w-8 h-8 text-neon-blue mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Buayan, General Santos City, Philippines</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
