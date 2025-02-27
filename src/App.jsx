import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null); // Start as null to avoid hydration mismatch

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = storedTheme ? storedTheme === 'dark' : true; // Default to dark mode

    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  // Function to toggle theme
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  }, []);

  // Hide content until theme is set
  if (isDarkMode === null) {
    return <div className="min-h-screen bg-gray-900"></div>; // Temporary dark background
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
