import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = ({ isDarkMode }) => {
  const handleDownload = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className={`py-20 px-4 md:px-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="about.png"
              alt="About Me"
              className="rounded-2xl shadow-lg w-full max-w-sm mx-auto md:mx-0"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
              My journey in web development started with a curiosity to create meaningful digital experiences.
            </p>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              I specialize in building responsive web applications using modern technologies like React, Node.js, and JavaScript.
              I'm always excited to learn new technologies and solve complex problems.
            </p>
            
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className={`flex items-center justify-center md:justify-start gap-2 px-6 py-3 rounded-lg transition-all duration-300 w-full md:w-auto mx-auto md:mx-0 ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
