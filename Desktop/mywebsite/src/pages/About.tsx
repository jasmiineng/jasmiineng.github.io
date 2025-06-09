import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import jasminePeanutImg from '../assets/jasminepeanut.png';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaInstagram, FaLinkedin, FaSnapchatGhost } from 'react-icons/fa';

const About: React.FC = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 order-2 md:order-1 text-right space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-yellow-600"
          >
            A bit more about me...
          </motion.h1>

          {[
            `I’m currently studying Computer Engineering at Cal Poly, San Luis Obispo. My focus lies in building robust systems that fuse low-level efficiency with high-level design. From implementing pipelined RISC-V CPUs and writing embedded C, to crafting responsive full-stack web apps, I enjoy solving problems across the hardware-software spectrum.`,
            `Outside of academics, I enjoy going to the gym, exploring new hiking trails, climbing, and jumping into random sports with friends. When I’m not being active, I love binge-watching TV shows and spending quality time with friends.`,
            `I believe staying curious—both physically and creatively—is key to building tech that truly connects with people.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              className="text-base text-gray-800 leading-relaxed hover:scale-[1.01] transition-transform duration-200"
            >
              {text}
            </motion.p>
          ))}

          {/* Social icons and Contact Me button */}
          <div className="flex flex-col items-end md:items-end gap-4 mt-8">
            <div className="flex gap-4 justify-end text-yellow-600 text-2xl">
              {[
                {
                  href: 'https://www.instagram.com/jasmiineng',
                  icon: <FaInstagram />,
                },
                {
                  href: 'https://www.snapchat.com/add/jasmiineng',
                  icon: <FaSnapchatGhost />,
                },
                {
                  href: 'https://linkedin.com/in/jasmineng3',
                  icon: <FaLinkedin />,
                },
                {
                  href: 'https://github.com/jasmiineng',
                  icon: <FaGithub />,
                },
              ].map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 hover:border-yellow-500 hover:text-yellow-500 transition"
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm px-4 py-2 border-2 rounded-full font-semibold transition ${
                    isActive
                      ? 'bg-yellow-500 text-white border-yellow-500'
                      : 'border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white'
                  }`
                }
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>

        {/* Right: Image with Tilt Effect */}
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.03}>
            <div className="w-[420px] h-[520px] overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-100 hover:shadow-yellow-200 transition-shadow duration-300">
              <img
                src={jasminePeanutImg}
                alt="Jasmine Ng"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
