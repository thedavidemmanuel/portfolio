'use client'

import React, { useState, useRef, useEffect } from 'react';
import experienceData from './experienceData';
import type { Experience } from './experienceData';
import styles from '../styles/experience.module.css';

const Experience: React.FC = () => {
  // Set the default active tab to the first item in experienceData
  const [activeTabId, setActiveTabId] = useState<string>(experienceData[0].id);
  const [tabFocus, setTabFocus] = useState<number>(0);
  // New: state for mobile detection
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightPosition = `${experienceData.findIndex(({ id }) => id === activeTabId) * 48}px`;

  // New: update isMobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update CSS variable on the container element
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

  // Focus on active tab without causing scroll
  useEffect(() => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus({ preventScroll: true });
    }
  }, [tabFocus]);

  return (
    <section className="w-full py-20 bg-[var(--section-bg)] text-[var(--slate)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-2xl font-bold mb-16 flex items-center text-[var(--light-slate)]">
          My Experience
          <div className="h-px bg-[var(--card-bg)] flex-grow ml-6"></div>
        </h2>

        <div className="relative">
          {/* Moved: Mobile swipe icon */}
          {isMobile && (
            <div className={`${styles.swipeIcon} absolute -top-8 right-0`}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M16 8L19 11M19 11L16 14M19 11H5" 
                  stroke="var(--accent)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <div className="flex flex-col md:flex-row">
            {/* Left - Company tabs */}
            <div className={`${styles.tabContainer} relative mb-10 md:mb-0 md:w-1/4 md:max-w-[200px]`} ref={containerRef}>
              {/* For desktop only, display vertical highlight */}
              {!isMobile && (
                <div className={styles.highlightIndicator}></div>
              )}
              <div className={styles.tabRow} role="tablist">
                {experienceData.map(({ id, company }, i) => {
                  const isSelected = activeTabId === id;
                  return (
                    <button
                      key={id}
                      className={`${styles.tab} ${isSelected ? styles.tabActive : styles.tabInactive}`}
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
                  <h3 className="text-lg md:text-xl font-medium text-[var(--light-slate)]">
                    <span>{title}</span>
                    <span className="text-[var(--accent)]"> @ </span>
                    <a 
                      href={url} 
                      className="text-[var(--accent)] hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {company}
                    </a>
                  </h3>
                  
                  <p className="font-mono text-sm text-[var(--slate)] mt-1 mb-6">{date}</p>
                  
                  <ul className="space-y-4">
                    {responsibilities.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-[var(--accent)] mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;