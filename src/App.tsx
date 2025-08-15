import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FormData, Counters } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [counters, setCounters] = useState<Counters>({ projects: 0, experience: 0, technologies: 0 });
  const [showContent, setShowContent] = useState(false);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start scale-up animation shortly after loading completes
      setTimeout(() => setShowContent(true), 200);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isLoading) {
      const animateCounters = () => {
        const targets = { projects: 10, experience: 1, technologies: 12 };
        const duration = 2000;
        const increment = 50;

        Object.keys(targets).forEach(key => {
          let current = 0;
          const target = targets[key as keyof typeof targets];
          const step = target / (duration / increment);

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
          }, increment);
        });
      };

      const timer = setTimeout(animateCounters, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with EmailJS or your preferred email service
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-teal-800 to-emerald-900 flex items-center justify-center z-50 overflow-hidden">
        <div className="text-center space-y-8 px-4">
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 p-1 animate-spin">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  TJ
                </span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 animate-ping opacity-20"></div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Loading Portfolio...</h1>
            <div className="w-48 sm:w-64 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const themeClasses = isDarkMode
    ? 'bg-gradient-to-br from-slate-800 via-teal-900 to-emerald-900 text-white'
    : 'bg-gradient-to-br from-gray-50 via-teal-50 to-emerald-50 text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${themeClasses}`}>
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 ${isDarkMode ? 'bg-teal-400' : 'bg-emerald-400'} rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 95}%`, // Keep within 95% to avoid overflow
              top: `${Math.random() * 95}%`,  // Keep within 95% to avoid overflow
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      <div className={`transition-all duration-1000 ease-out transform ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
        <Hero isDarkMode={isDarkMode} counters={counters} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact
          isDarkMode={isDarkMode}
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
        />
        <Footer isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
      </div>
    </div>
  );
};

export default App;