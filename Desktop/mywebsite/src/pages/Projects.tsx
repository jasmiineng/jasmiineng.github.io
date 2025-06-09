import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clapImage from '../assets/clapcounter/clapcounter.png'; 

const Projects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-yellow-600 mb-8 text-center"
      >
        Projects Overview
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-700 leading-relaxed text-center mb-12"
      >
        Here's a glimpse at the types of things I love building. From full-stack apps to embedded systems, each project is a step in exploring how hardware and software can work together meaningfully.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="group bg-white border border-yellow-200 rounded-2xl shadow-lg hover:shadow-xl transition-all block max-w-xl mx-auto overflow-hidden"
      >
        <Link to="/projects/clapCounter">
          <img
            src={clapImage}
            alt="Clap Counter"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-yellow-600 mb-2">
              Clap Counter
            </h2>
            <p className="text-gray-600 text-sm">
              A fun sound-activated project that counts how many claps you make. Built using a microphone sensor, bipolar junction transistors, and simple logic to detect and display clap events.
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
