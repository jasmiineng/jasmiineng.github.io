import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const SERVICE_ID = 'service_8qy3nhw';
const TEMPLATE_ID = 'template_vlapbp1';
const PUBLIC_KEY = 'YdFIiKm4rPx6kYNPX';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('✅ Message sent successfully!');
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus('⚠️ Something went wrong. Try again.');
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br px-8 py-24 font-sans relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-black text-yellow-500 mb-6">
          Let's Connect!
        </h1>
        <p className="text-lg text-gray-700 mb-14 max-w-2xl mx-auto">
        Got a project, collaboration, or just want to say hi? Drop me a message!
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/90 border border-yellow-200 shadow-[0_0_30px_rgba(234,179,8,0.15)] rounded-3xl p-12 text-left backdrop-blur-xl"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Subject</label>
              <input
                type="text"
                name="title"
                required
                placeholder="What’s this about?"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows={7}
                required
                placeholder="Say something cool..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-6 bg-yellow-500 text-white font-semibold py-3 rounded-xl transition hover:bg-yellow-600 shadow-lg"
            >
              Send Message
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-sm text-center mt-4 ${
                  status.startsWith('✅') ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {status}
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;