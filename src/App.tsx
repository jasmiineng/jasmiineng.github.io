import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import { motion } from 'framer-motion';
import jasmineImg from './assets/jasmine.png';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ClapCounter from './pages/projects/ClapCounter';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8 py-24">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.img
            src={jasmineImg}
            alt="Jasmine Ng"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-96 h-96 object-cover rounded-full shadow-xl border-4 border-yellow-400"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-extrabold text-gray-900 leading-tight">
            Hey!<br />I'm <span className="text-yellow-500">Jasmine Ng</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
            I enjoy crafting seamless digital experiences and bringing innovative ideas to life through embedded systems and interactive web apps. Driven by curiosity, powered by creativity.
          </p>
          <Link
            to="/projects"
            className="inline-block px-10 py-4 border-2 border-yellow-500 text-yellow-600 text-lg font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition duration-300"
          >
            See My Work
          </Link>
        </motion.div>
      </section>
    </main>
  );
};


const App: React.FC = () => {
  return (
      <div className="bg-white text-gray-800 font-sans min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ClapCounter" element={<ClapCounter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
};

export default App;