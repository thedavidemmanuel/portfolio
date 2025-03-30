'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email] = useState('david.emmanuel@example.com');
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a192f] text-[#8892b0] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/thedavidemmanuel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={22} />
            </a>
          </div>
          
          {/* Email with copy button */}
          <div className="flex items-center mb-4 md:mb-0">
            <span className="mr-2">{email}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(email);
                alert('Email copied to clipboard!');
              }}
              className="text-[#64ffda] hover:text-[#ccd6f6] transition-colors"
              aria-label="Copy email to clipboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
            </button>
          </div>
          
          {/* Copyright */}
          <div className="text-sm">
            <p>Designed & Built by David Emmanuel</p>
            <p>© {year} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;