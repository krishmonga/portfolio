import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Hero = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/krishmonga',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/krish-monga-8b397a2a8/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://x.com/KrishMonga77083',
      color: 'hover:text-sky-500 dark:hover:text-sky-400'
    }
  ];

  return (
    <section className={`relative overflow-hidden ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
      {/* Background pattern - subtle overlay without changing your background color */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${isDarkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.15)'}, transparent)`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Profile Image with glow effect */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className={`absolute -inset-1 rounded-full blur-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 ${isDarkMode ? 'opacity-40' : 'opacity-20'}`}></div>
              <div className="relative">
                <img 
                  src="your-image-url" // Replace with your actual image URL
                  alt="Krish Monga"
                  className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover border-2 border-blue-500 ring-4 ring-blue-500/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
          
          {/* Content with improved styling */}
          <div className="md:w-2/3 text-center md:text-left space-y-6">
            <div>
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                isDarkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-800'
              }`}>
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="relative group">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Krish Monga
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl font-medium ${
              isDarkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              Creating digital experiences that matter
            </p>
            
            <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
             
            Passionate full-stack developer with expertise in modern web technologies. 
            Focused on creating efficient, scalable, and user-friendly applications. 
            Always eager to learn and adapt to new technologies.
            </p>
            
            {/* Social Links with improved styling */}
            <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-opacity-10 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/20 w-full sm:w-auto text-center justify-center"
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                  isDarkMode 
                    ? 'text-white bg-gray-800 hover:bg-gray-700' 
                    : 'text-gray-800 bg-gray-200 hover:bg-gray-300'
                } transition-colors shadow-lg w-full sm:w-auto text-center justify-center`}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;