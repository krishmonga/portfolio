import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Layout, Terminal, Cloud } from 'lucide-react';

const Skills = ({ isDarkMode }) => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout size={24} />,
      items: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      items: ['Node.js', 'Express', 'Python', 'Java', 'RESTful APIs']
    },
    {
      category: 'Database',
      icon: <Database size={24} />,
      items: ['MongoDB', 'MySQL', ]
    },
    
    {
      category: 'Programming',
      icon: <Code size={24} />,
      items: ['JavaScript', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      category: 'Tools',
      icon: <Terminal size={24} />,
      items: ['VS Code', 'Git', 'Postman', 'Figma']
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' 
                  : 'bg-white border-gray-200 hover:border-blue-500/50'
              } transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-blue-400"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode
                        ? 'bg-blue-600/20 text-blue-400'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;