'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed w-full bg-[#0a192f] flex justify-between items-center px-6 md:px-20 py-3 z-[1000]">
      {/* Logo */}
      <div className="cursor-pointer" onClick={() => router.push('/')}>
        <Image 
          src="/logo-main.png" 
          alt="Logo" 
          width={100} 
          height={100}
          priority
        />
      </div>

      {/* Navigation Items */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <li>
            <Link href="#about" className="text-white hover:text-[#64ffda] transition-colors">
              <span className="text-[#64ffda] mr-1">00.</span>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-white hover:text-[#64ffda] transition-colors">
              <span className="text-[#64ffda] mr-1">01.</span>
              <span>Experience</span>
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="text-white hover:text-[#64ffda] transition-colors">
              <span className="text-[#64ffda] mr-1">10.</span>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-[#64ffda] transition-colors">
              <span className="text-[#64ffda] mr-1">11.</span>
              <span>Reach Out</span>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="#resume" className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10 transition-colors">
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu Button */}
      <div className="md:hidden text-[#64ffda] cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[1001]" onClick={() => setMenuOpen(false)}></div>
          <nav className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#112240] p-6 z-[1002] flex flex-col justify-center">
            <button 
              className="absolute top-6 right-6 text-[#64ffda] text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            
            <ul className="flex flex-col items-center space-y-8">
              <li>
                <Link 
                  href="#about" 
                  className="text-white text-lg hover:text-[#64ffda] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#64ffda] mr-1 block text-sm mb-1">00.</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#experience" 
                  className="text-white text-lg hover:text-[#64ffda] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#64ffda] mr-1 block text-sm mb-1">01.</span>
                  <span>Experience</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#portfolio" 
                  className="text-white text-lg hover:text-[#64ffda] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#64ffda] mr-1 block text-sm mb-1">10.</span>
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-white text-lg hover:text-[#64ffda] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#64ffda] mr-1 block text-sm mb-1">11.</span>
                  <span>Reach Out</span>
                </Link>
              </li>
              <li className="pt-4">
                <Link 
                  href="#resume" 
                  className="border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded hover:bg-[#64ffda]/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;