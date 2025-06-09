import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const SERVICE_ID = 'service_8qy3nhw';
const TEMPLATE_ID = 'template_vlapbp1';
const PUBLIC_KEY = 'YdFIiKm4rPx6kYNPX';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const { width, height } = useWindowSize();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('✅ Your message has been sent!');
        setShowThankYou(true);
        formRef.current?.reset();
        setTimeout(() => setShowThankYou(false), 5000);
      })
      .catch(() => {
        setStatus('⚠️ Something went wrong. Please try again.');
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-white px-6 md:px-12 py-16 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have a question, idea, or opportunity to share? I'd love to hear from you.
            Feel free to drop a note!
          </p>
          <p className="text-sm text-gray-500 italic">
            I usually respond within a day or two.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gradient-to-tr from-yellow-100 via-white to-yellow-50 border border-yellow-200 rounded-3xl shadow-xl p-10 space-y-6 backdrop-blur-sm"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Message topic"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg transition hover:bg-yellow-600 shadow-md"
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm text-center mt-2 ${
                status.startsWith('✅') ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>

      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center"
          >
            <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">Thank You!</h2>
            <p className="text-gray-700 text-lg text-center max-w-md">
              Your message has been sent successfully. I'll be in touch soon!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;