import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const About = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

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
    <section 
      id="about" 
      className={`py-24 px-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center justify-center mb-3">
              <div className="h-px w-8 bg-blue-500 mr-3"></div>
              <span className={`text-sm uppercase tracking-wider font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>About Me</span>
              <div className="h-px w-8 bg-blue-500 ml-3"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                My Journey
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative group">
                {/* Image subtle enhancement */}
                <div className="relative">
                  <img
                    src="about.png"
                    alt="About Me"
                    className="rounded-2xl shadow-lg w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
                </div>
              </div>
            </div>
            
            <div className={`space-y-6 text-center md:text-left transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-x-8'}`}>
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a <span className="font-semibold text-blue-500">Full Stack Developer</span> with a passion for crafting exceptional digital experiences that blend aesthetics with functionality.
                </p>
                
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  My development journey began with curiosity and has evolved into expertise across the entire web application stack. I bring ideas to life through clean code and thoughtful architecture.
                </p>
                
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I specialize in building responsive web applications using <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>React</span>, <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Node.js</span>, and modern JavaScript. My approach focuses on creating scalable, maintainable solutions that deliver exceptional user experiences.
                </p>
                
                <div className="pt-6 flex flex-wrap gap-3">
                  {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((skill) => (
                    <span 
                      key={skill} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-6">
                <button
                  onClick={handleDownload}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md ${
                    isDarkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Download size={18} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;