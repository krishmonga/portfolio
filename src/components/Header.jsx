import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-opacity-80 bg-gray-900 md:bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center gap-8 mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.href}
              className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-full"
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={isMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        exit={{ opacity: 0, height: 0 }}
        className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.href}
              className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
