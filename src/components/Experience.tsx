'use client'

import React, { useState, useRef, useEffect } from 'react';
import experienceData from './experienceData';
import type { Experience } from './experienceData';
import styles from '../styles/experience.module.css';

const Experience: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('upstatement');
  const [tabFocus, setTabFocus] = useState<number>(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightPosition = `${experienceData.findIndex(({ id }) => id === activeTabId) * 48}px`;

  // Update CSS variable on the container element instead of using inline style
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--highlight-position', highlightPosition);
    }
  }, [highlightPosition]);

  // Focus on tabs when using keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        setTabFocus(prev => {
          const direction = e.key === 'ArrowUp' ? -1 : 1;
          const length = tabs.current.filter(Boolean).length;
          return (prev + direction + length) % length;
        });
      }
    };

    const currentTabs = tabs.current;
    currentTabs.forEach(tab => tab?.addEventListener('keydown', handleKeyDown));
    return () => currentTabs.forEach(tab => tab?.removeEventListener('keydown', handleKeyDown));
  }, []);

  // Focus on active tab
  useEffect(() => {
    if (tabs.current[tabFocus]) tabs.current[tabFocus]?.focus();
  }, [tabFocus]);

  return (
    <section className="w-full py-20 bg-[#0a192f] text-[#8892b0]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-16 flex items-center text-[#ccd6f6]">
          <span className="text-[#64ffda] mr-2 font-mono text-xl">02.</span> 
          Where I&apos;ve Worked
          <div className="h-px bg-[#233554] flex-grow ml-6"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row">
          {/* Left - Company tabs */}
          <div className={`${styles.tabContainer} relative mb-10 md:mb-0 md:w-1/4 md:max-w-[200px]`} ref={containerRef}>
            {/* Highlight indicator for active tab; now reads CSS property */}
            <div className={styles.highlightIndicator}></div>
            
            <div className={styles.tabRow} role="tablist">
              {experienceData.map(({ id, company }, i) => {
                // Pre-compute the selected state to use it directly in aria-selected
                const isSelected = activeTabId === id;
                return (
                  <button
                    key={id}
                    className={`${styles.tab} ${
                      isSelected ? styles.tabActive : styles.tabInactive
                    }`}
                    onClick={() => setActiveTabId(id)}
                    role="tab"
                    tabIndex={isSelected ? 0 : -1}
                    ref={el => { tabs.current[i] = el; }}
                    id={`tab-${id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${id}`}
                  >
                    {company}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Right - Job details */}
          <div className="md:w-3/4 md:ml-8">
            {experienceData.map(({ id, title, company, url, date, responsibilities }) => (
              <div
                key={id}
                className={activeTabId === id ? styles.tabContentActive : styles.tabContent}
                role="tabpanel"
                id={`panel-${id}`}
                aria-labelledby={`tab-${id}`}
              >
                <h3 className="text-2xl font-medium text-[#ccd6f6]">
                  <span>{title}</span>
                  <span className="text-[#64ffda]"> @ </span>
                  <a 
                    href={url} 
                    className="text-[#64ffda] hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {company}
                  </a>
                </h3>
                
                <p className="font-mono text-sm text-[#a8b2d1] mt-1 mb-6">{date}</p>
                
                <ul className="space-y-4">
                  {responsibilities.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
