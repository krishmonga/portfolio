import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ isDarkMode }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/krishmonga',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-24 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold pb-2
            bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-400 to-purple-500 leading-normal"
>
     Krish Monga
</motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-lg sm:text-xl mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Full Stack Developer & Tech Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Passionate full-stack developer with expertise in modern web technologies. 
            Focused on creating efficient, scalable, and user-friendly applications. 
            Always eager to learn and adapt to new technologies.
          </motion.p>

          {/* Social Icons (Moved below the description) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center md:justify-start gap-4 mt-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 ${social.color}`}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Developer workspace"
            className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
