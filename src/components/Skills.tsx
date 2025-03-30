'use client'

import React, { useRef, useEffect } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaDocker, 
  FaGitAlt, FaGithub, FaPython, FaBootstrap, FaFigma, FaSlack, FaDatabase,
  FaChartBar
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiTensorflow, SiPytorch, 
  SiNextdotjs, SiTailwindcss, SiFastapi, SiFlask, SiDjango, 
  SiNumpy, SiPandas, SiTableau, SiJupyter, SiGooglecolab, SiR
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

type Skill = {
  name: string;
  icon: React.ReactElement;
};

const Skills: React.FC = () => {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  // Define all 32 skills
  const allSkills: Skill[] = [
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" /> },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8" /> },
    { name: 'React.js', icon: <FaReact className="w-8 h-8" /> },
    { name: 'Angular', icon: <FaAngular className="w-8 h-8" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="w-8 h-8" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" /> },
    { name: 'Express.js', icon: <SiExpress className="w-8 h-8" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" /> },
    { name: 'FastAPI', icon: <SiFastapi className="w-8 h-8" /> },
    { name: 'SQL Server', icon: <FaDatabase className="w-8 h-8" /> },
    { name: 'Flask', icon: <SiFlask className="w-8 h-8" /> },
    { name: 'Django', icon: <SiDjango className="w-8 h-8" /> },
    { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
    { name: 'R', icon: <SiR className="w-8 h-8" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="w-8 h-8" /> },
    { name: 'PyTorch', icon: <SiPytorch className="w-8 h-8" /> },
    { name: 'Numpy', icon: <SiNumpy className="w-8 h-8" /> },
    { name: 'Pandas', icon: <SiPandas className="w-8 h-8" /> },
    { name: 'Tableau', icon: <SiTableau className="w-8 h-8" /> },
    { name: 'Power BI', icon: <FaChartBar className="w-8 h-8" /> },
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8" /> },
    { name: 'GitHub', icon: <FaGithub className="w-8 h-8" /> },
    { name: 'Docker', icon: <FaDocker className="w-8 h-8" /> },
    { name: 'Figma', icon: <FaFigma className="w-8 h-8" /> },
    { name: 'Slack', icon: <FaSlack className="w-8 h-8" /> },
    { name: 'Jupyter', icon: <SiJupyter className="w-8 h-8" /> },
    { name: 'Colab', icon: <SiGooglecolab className="w-8 h-8" /> },
    { name: 'VS Code', icon: <VscCode className="w-8 h-8" /> },
  ];

  // Split into two rows of 16 icons each
  const firstRowSkills = allSkills.slice(0, 16);
  const secondRowSkills = allSkills.slice(16, 32);

  // Instead of triple-duplicating, we'll implement a JS-based clone and reposition technique
  useEffect(() => {
    const setupSeamlessScroll = (containerRef: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
      const container = containerRef.current;
      if (!container) return;

      // Get the width of a single item (assuming all items have the same width)
      const itemsContainer = container.querySelector('.items-container') as HTMLElement;
      if (!itemsContainer) return;

      // Create animation
      const animate = () => {
        if (!itemsContainer) return;
        
        if (direction === 'left') {
          itemsContainer.style.transform = 'translateX(0)';
          itemsContainer.style.transition = 'none';
          
          void itemsContainer.offsetWidth; // Force reflow to make the removal of transition take effect
          
          itemsContainer.style.transform = 'translateX(-50%)';
          itemsContainer.style.transition = 'transform 15s linear';
          
          // Reset when the animation completes and create a seamless loop
          const transitionEndHandler = () => {
            animate();
          };
          
          itemsContainer.addEventListener('transitionend', transitionEndHandler, { once: true });
        } else {
          itemsContainer.style.transform = 'translateX(-50%)';
          itemsContainer.style.transition = 'none';
          
          void itemsContainer.offsetWidth; // Force reflow
          
          itemsContainer.style.transform = 'translateX(0)';
          itemsContainer.style.transition = 'transform 15s linear';
          
          const transitionEndHandler = () => {
            animate();
          };
          
          itemsContainer.addEventListener('transitionend', transitionEndHandler, { once: true });
        }
      };

      animate();
    };

    setupSeamlessScroll(firstRowRef, 'left');
    setupSeamlessScroll(secondRowRef, 'right');

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <section className="w-full bg-[var(--section-bg)] text-[var(--slate)] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[var(--light-slate)]">
          I work with...
        </h2>
        
        {/* First row – scrolls from right to left */}
        <div className="mb-12 relative" ref={firstRowRef}>
          <div className="overflow-hidden w-full relative">
            <div className="items-container flex space-x-8 py-4 will-change-transform">
              {/* Double the items for the first set */}
              {[...firstRowSkills, ...firstRowSkills].map((skill, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="flex flex-col items-center justify-center p-4 bg-[var(--card-bg)] rounded-md min-w-[100px] flex-shrink-0 transition-opacity duration-300"
                >
                  <div className="text-[var(--accent)] mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-center text-[var(--light-slate)]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Fade effects at the edges */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[var(--section-bg)] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[var(--section-bg)] to-transparent z-10"></div>
        </div>
        
        {/* Second row – scrolls from left to right */}
        <div className="relative" ref={secondRowRef}>
          <div className="overflow-hidden w-full relative">
            <div className="items-container flex space-x-8 py-4 will-change-transform">
              {/* Double the items for the second set */}
              {[...secondRowSkills, ...secondRowSkills].map((skill, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="flex flex-col items-center justify-center p-4 bg-[var(--card-bg)] rounded-md min-w-[100px] flex-shrink-0 transition-opacity duration-300"
                >
                  <div className="text-[var(--accent)] mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-center text-[var(--light-slate)]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Fade effects at the edges */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[var(--section-bg)] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[var(--section-bg)] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;