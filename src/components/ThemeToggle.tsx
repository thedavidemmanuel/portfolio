'use client'

import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  // Theme state (default to 'dark' until we check localStorage and system preference)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  
  // Initialize theme on component mount
  useEffect(() => {
    // Check if theme value exists in localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    
    if (savedTheme) {
      // If localStorage has a theme, use it
      setTheme(savedTheme)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // If no localStorage value but system prefers light mode
      setTheme('light')
    }
    // Note: we don't need to set the data-theme attribute here
    // since that will be handled by the next useEffect
  }, []) // Empty dependency array means this only runs on mount
  
  // Update theme when state changes (including after initialization)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  
  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-[var(--color-foreground)] hover:text-[#64ffda] transition-colors focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon size={18} />
      ) : (
        <FaSun size={18} />
      )}
    </button>
  )
}

export default ThemeToggle