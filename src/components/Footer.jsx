import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />, // Reduced icon size for better mobile scaling
      url: 'https://github.com/krishmonga',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />, // Consistent icon sizing
      url: 'https://www.linkedin.com/in/krish-monga-8b397a2a8/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://x.com/KrishMonga77083',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <footer className={`py-6 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div 
          className="flex justify-center gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform transition-all duration-300 ${social.color}`}
              whileHover={{ scale: 1.2, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3 }}
          className={`mt-4 text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          © 2024 Krish Monga. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
