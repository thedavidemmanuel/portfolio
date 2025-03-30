'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const texts = ["Software Engineer.", "Full Stack Developer.", "Machine Learning Enthusiast.", "Data Scientist."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      if (!typingTextRef.current) return;
      
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingTextRef.current.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTextRef.current.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        timeoutRef.current = setTimeout(type, 1500); // Wait before starting to delete
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        timeoutRef.current = setTimeout(type, 500); // Wait before typing next text
      } else {
        timeoutRef.current = setTimeout(type, isDeleting ? 50 : 100); // Typing speed
      }
    };

    // Start the typing effect
    type();

    // Cleanup function
    return () => {
      // Clear any remaining timeout if component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-[var(--section-bg)] px-4 sm:px-6 md:px-16 pt-24 pb-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-8 w-64 h-64 bg-[var(--accent)]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-8 w-96 h-96 bg-[var(--accent)]/10 rounded-full filter blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        {/* Main content - order-2 on mobile, order-1 on md+ screens */}
        <div className="w-full pt-8 order-2 md:order-1 flex flex-col">
          <p className="text-[var(--slate)] text-lg md:text-xl mb-4">Hello, it&apos;s me (Not Adele)</p>
          <h1 className="text-[var(--color-foreground)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">David Emmanuel</h1>
          <div className="mb-6 flex items-center">
            <p className="text-[var(--slate)] text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              I am a <span className="text-[var(--accent)]" ref={typingTextRef}></span>
            </p>
            <span className="text-[var(--accent)] animate-pulse text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-1">|</span>
          </div>
          <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
            <Link 
              href="https://drive.google.com/file/d/1YLcC0qim67ksa6iUNlVKYWzQC2TtAerJ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[var(--accent)] text-[var(--accent)] px-5 py-2.5 md:px-6 md:py-3 rounded hover:bg-[var(--accent)]/10 transition-colors"
            >
              View Resume
            </Link>
            <Link 
              href="#about" 
              className="bg-[var(--accent)] text-[var(--card-bg)] px-5 py-2.5 md:px-6 md:py-3 rounded hover:bg-[var(--accent)]/90 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Image container - order-1 on mobile, order-2 on md+ screens */}
        <div className="w-full flex justify-center items-center order-1 md:order-2">
          <div className="w-full max-w-[400px] md:max-w-full relative">
            <Image 
              src="/hero-image.png" 
              alt="David Emmanuel with circuit background" 
              width={500} 
              height={500}
              priority
              className="object-contain relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;