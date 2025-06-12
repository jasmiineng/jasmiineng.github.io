import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clapImg from '../../assets/clapcounter/clapcounter.png';
import gallery1 from '../../assets/clapcounter/gallery1.png';
import gallery2 from '../../assets/clapcounter/gallery2.png';
import gallery3 from '../../assets/clapcounter/gallery3.png';

const skills = [
  'Bipolar Junction Transistors',
  'Electret Microphone',
  'Seven-Segment Display',
  'Sound Processing',
  'Digital Logic',
];

const ClapCounter: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-800 font-sans relative overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Header */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-black text-center text-yellow-500 mb-12 tracking-tight"
        >
          Clap Counter
        </motion.h1>

        {/* Cover Image */}
        <div className="flex justify-center mb-16 w-full">
          <motion.img
            src={clapImg}
            alt="Clap Counter"
            className="w-full max-w-sm rounded-3xl border-4 border-yellow-300 shadow-xl"
            whileHover={{ scale: 1.03 }}
          />
        </div>

        {/* Description */}
        <motion.div
          className="max-w-4xl w-full mx-auto space-y-6 text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>
            The Clap Counter is a sound-activated system that detects and counts claps in real-time. It filters audio from a microphone and intelligently identifies claps using threshold logic.
          </p>
          <p>
            Built for interactivity and embedded systems learning, this project explores the intersection of analog signal filtering and digital logic design. The display outputs each count visually using a seven-segment display.
          </p>
        </motion.div>

        {/* Applied Concepts Section */}
        <div className="max-w-6xl w-full mx-auto mt-20 mb-16 text-center">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6">Applied Concepts</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -3,
                  boxShadow: '0px 8px 20px rgba(251, 191, 36, 0.25)',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                className="bg-white border border-yellow-300 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-12 w-full">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
            {[gallery1, gallery2, gallery3].map((img, idx) => (
              <motion.div
                key={idx}
                className="relative cursor-pointer rounded-xl overflow-hidden border border-yellow-300 shadow-md group"
                onClick={() => setSelectedImage(img)}
                whileHover={{ rotate: 1.5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-60 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-yellow-100 bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300 rounded-xl" />
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded shadow">
                    Click to Enlarge
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-4xl max-h-[90vh] rounded-xl border-4 border-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </motion.div>
  );
};

export default ClapCounter;
