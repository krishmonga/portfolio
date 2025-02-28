import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB',
    //   image:"",
    //   category: 'fullstack',
    //   github: '#',
    //   demo: '#'
    // },
    {
      title: 'Task Management App',
      description: 'React-based task management application with drag-and-drop functionality',
      image:  "task.png",
      category: 'frontend',
      github: 'https://github.com/krishmonga/taskflow',
      demo: 'https://taskflow-git-main-krish-mongas-projects.vercel.app/'
    },
    {
      title: 'SIAM-JUIT',
      description: 'Website for the SIAM JUIT organisation',
      image:  "siam.png",
      category: 'frontend',
      // github: '#',
      demo: 'https://siamjuit.vercel.app/'
    },
    {
      title: 'Book Store ',
      description:  " 📚 A bookstore where you can find a wide variety of books.",
      image:  "bookstore.png",
      category: 'frontend',
      github: 'https://github.com/krishmonga/Book-Store-with-JWT-Auth/tree/main',
      demo: 'https://book-store-with-jwt-auth.vercel.app/'
    },
    {
      title: 'AI assistant ',
      description: "Personal AI assistant with speech recognition and smart task execution with Python.",
      image:"ai.png",
      category: 'backend',
      github: 'https://github.com/krishmonga/ai-assistant',
      demo: 'STILL WORKING'
    },
    {
      title: 'OutPass Managemnt  ',
      description: "outpass management app for the juit students ",
      image: "outpass.png",
      category: 'fullstack',
      github: 'https://github.com/krishmonga/outpass_management',
      demo: 'STILL WORKING'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Featured Projects
        </motion.h2>

        {/* Tab Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'frontend', 'backend', 'fullstack'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/40'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => activeTab === 'all' || project.category === activeTab)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20' 
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Links (GitHub & Demo) */}
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github}
                      whileHover={{ x: -2 }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={20} />
                      Code
                    </motion.a>
                    <motion.a 
                    href={project.demo !== 'STILL WORKING' ? project.demo : '#'}
                    target={project.demo !== 'STILL WORKING' ? "_blank" : undefined}
                    rel={project.demo !== 'STILL WORKING' ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => {
                   if (project.demo === 'STILL WORKING') {
                   e.preventDefault();
                    alert("Still Working 🚧");
    }
  }}
>
  <ExternalLink size={20} />
  Demo
</motion.a>

                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
