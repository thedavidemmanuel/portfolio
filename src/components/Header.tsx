'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  // Clear any URL hash on initial load (except for home) to prevent auto-scrolling
  useEffect(() => {
    if (window.location.hash && window.location.hash !== '#home') {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Simplified theme detection that matches ThemeToggle implementation
  useEffect(() => {
    // Function to check if light theme is active
    const checkTheme = () => {
      // Check data-theme attribute on documentElement (this is what ThemeToggle uses)
      const dataTheme = document.documentElement.getAttribute('data-theme');
      if (dataTheme === 'light') {
        setIsLightTheme(true);
        return;
      }
      
      // If no data-theme attribute or it's set to dark, check localStorage
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
        setIsLightTheme(true);
        return;
      }
      
      // Finally check system preference if no explicit theme
      setIsLightTheme(
        window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: light)').matches
      );
    };

    // Initial check
    checkTheme();
    
    // Set up a mutation observer to watch for data-theme attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' && 
          mutation.attributeName === 'data-theme'
        ) {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    // Also check periodically (as a fallback)
    const intervalId = setInterval(checkTheme, 1000);
    
    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  // Enhanced smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Update URL without causing a page reload
      window.history.pushState({}, '', `#${sectionId}`);
    }
  };

  return (
    <header className="fixed w-full bg-[var(--color-background)] text-[var(--color-foreground)] flex justify-between items-center px-6 md:px-20 py-3 z-[1000] shadow-sm">
      {/* Logo */}
      <div
        className="cursor-pointer"
        onClick={() => {
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', '/');
        }}
      >
        <Image 
          src={isLightTheme ? "/logo.png" : "/logo-main.png"} 
          alt="Logo" 
          width={isLightTheme ? 120 : 100} 
          height={isLightTheme ? 120 : 100}
          priority
        />
      </div>

      {/* Navigation Items */}
      <nav className="hidden md:flex items-center">
        <ul className="flex items-center space-x-8">
          <li>
            <a 
              href="#about" 
              className="text-[var(--color-foreground)] hover:text-[#64ffda] transition-colors"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              <span className="text-[#64ffda] mr-1">00.</span>
              <span>About</span>
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="text-[var(--color-foreground)] hover:text-[#64ffda] transition-colors"
              onClick={(e) => scrollToSection(e, 'experience')}
            >
              <span className="text-[#64ffda] mr-1">01.</span>
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className="text-[var(--color-foreground)] hover:text-[#64ffda] transition-colors"
              onClick={(e) => scrollToSection(e, 'portfolio')}
            >
              <span className="text-[#64ffda] mr-1">10.</span>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-[var(--color-foreground)] hover:text-[#64ffda] transition-colors"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span className="text-[#64ffda] mr-1">11.</span>
              <span>Reach Out</span>
            </a>
          </li>
          <li className="ml-4">
            <a 
              href="https://drive.google.com/file/d/1YLcC0qim67ksa6iUNlVKYWzQC2TtAerJ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10 transition-colors"
            >
              Resume
            </a>
          </li>
          <li className="ml-4">
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      {/* Mobile Header Right Side (Theme Toggle + Hamburger) */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <div
          className="text-[#64ffda] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[1001]"
            onClick={() => setMenuOpen(false)}
          ></div>
          <nav className="fixed right-0 top-0 w-[60%] h-full bg-[var(--mobile-menu-bg)] flex flex-col items-center justify-center z-[1002] p-6 text-[var(--color-foreground)]">
            <button 
              className="absolute top-6 right-6 text-[#64ffda] text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              <li className="text-center">
                <a 
                  href="#about" 
                  className="text-[var(--color-foreground)] text-lg hover:text-[#64ffda] transition-colors inline-block"
                  onClick={(e) => scrollToSection(e, 'about')}
                >
                  <span className="text-[#64ffda] block text-sm mb-1">00.</span>
                  <span>About</span>
                </a>
              </li>
              <li className="text-center">
                <a 
                  href="#experience" 
                  className="text-[var(--color-foreground)] text-lg hover:text-[#64ffda] transition-colors inline-block"
                  onClick={(e) => scrollToSection(e, 'experience')}
                >
                  <span className="text-[#64ffda] block text-sm mb-1">01.</span>
                  <span>Experience</span>
                </a>
              </li>
              <li className="text-center">
                <a 
                  href="#portfolio" 
                  className="text-[var(--color-foreground)] text-lg hover:text-[#64ffda] transition-colors inline-block"
                  onClick={(e) => scrollToSection(e, 'portfolio')}
                >
                  <span className="text-[#64ffda] block text-sm mb-1">10.</span>
                  <span>Projects</span>
                </a>
              </li>
              <li className="text-center">
                <a 
                  href="#contact" 
                  className="text-[var(--color-foreground)] text-lg hover:text-[#64ffda] transition-colors inline-block"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  <span className="text-[#64ffda] block text-sm mb-1">11.</span>
                  <span>Reach Out</span>
                </a>
              </li>
              <li className="pt-4">
                <a 
                  href="https://drive.google.com/file/d/1YLcC0qim67ksa6iUNlVKYWzQC2TtAerJ/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded hover:bg-[#64ffda]/10 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;