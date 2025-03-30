"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#0a192f]">
      <div 
        className={`relative border border-[#64ffda] rounded-md p-6 sm:p-10 md:p-16 max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto transition-all duration-300 ${
          isHovered ? 'shadow-[0_0_20px_rgba(100,255,218,0.5)]' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-200 mb-4 sm:mb-8">Let&apos;s connect</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-10 leading-relaxed max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate on something cool, or just feel like chatting about the latest in tech, I&apos;d love to hear from you!
          </p>
          <button 
            className={`border border-[#64ffda] text-[#64ffda] px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-[#64ffda]/10 transition-all duration-300 ${
              isHovered ? 'shadow-[0_0_10px_rgba(100,255,218,0.3)]' : ''
            }`}
          >
            Reach Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;