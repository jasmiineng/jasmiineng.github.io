import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clapImage from '../assets/clapcounter/clapcounter.png'; 

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
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

      {/* Flex container for side-by-side cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Clap Counter Project */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 group bg-white border border-yellow-200 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
        >
          <Link to="/projects/ClapCounter">
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

        {/* Projects In Progress */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl shadow-inner p-6 flex items-center justify-center text-center"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              More Projects Coming Soon...
            </h2>
            <p className="text-gray-500 text-sm">
              I’m currently working on some exciting things — stay tuned!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
