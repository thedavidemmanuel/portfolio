'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  codeLink: string;
};

const Projects: React.FC = () => {
  // Define projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Antwise",
      description: "A financial lifestyle companion designed for African students and young professionals. Features include gamified financial literacy, AI-powered budgeting, smart savings with guardian locks, and USD virtual cards integrated with mobile money systems.",
      technologies: ["React Native", "TypeScript", "PostgreSQL", "Supabase"],
      image: "/antwise.png",
      liveLink: "https://www.antwise.app/",
      codeLink: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Financial Literacy Grid DQN",
      description: "A reinforcement learning simulation where an AI agent navigates a grid-based financial world, making decisions about savings, investments, and expenses. Features real-time visualization, dynamic investment systems, and financial literacy scoring using PyTorch and Stable-Baselines3.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "/dqn.png",
      liveLink: "https://github.com/thedavidemmanuel/MissionAgent-DQN",
      codeLink: "https://github.com/thedavidemmanuel/MissionAgent-DQN",
    },
    {
      id: 3,
      title: "GitHub Helper Bot",
      description: "A simple, intuitive chatbot trained on a custom dataset that answers your questions about GitHub.",
      technologies: ["Python", "Streamlit", "Hugging Face", "Tensorflow", "Pytorch"],
      image: "/gitbot.png",
      liveLink: "https://chatbot-with-transformers.streamlit.app/",
      codeLink: "https://github.com/thedavidemmanuel/chatbot-with-transformers",
    },
    {
      id: 4,
      title: "Iris Flower Classification",
      description: "A machine learning project that classifies iris flowers into three species based on their features using a decision tree classifier.",
      technologies: ["React", "Python", "FastAPI", "Scikit-learn"],
      image: "/iris.png",
      liveLink: "https://iris-species-classification-5e23.vercel.app/",
      codeLink: "https://github.com/thedavidemmanuel/Iris_Species_Classification",
    },
    {
      id: 5,
      title: "NoteKeeper App",
      description: "A web application for taking and organizing notes, with features like tagging, searching, and sharing notes.",
      technologies: ["React", "Vite", "PostgreSQL", "Supabase"],
      image: "/notekeeper.png",
      liveLink: "https://notekeeper-app-nine.vercel.app/",
      codeLink: "https://notekeeper-app-nine.vercel.app/",
    },
    {
      id: 6,
      title: "Goal Keeper App",
      description: "An app that helps you track your goals and keep you motivated to achieve them.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "/goal-keeper-app.png",
      liveLink: "https://github.com/thedavidemmanuel/flutter_firebase_auth",
      codeLink: "https://github.com/thedavidemmanuel/flutter_firebase_auth",
    },
  ];

  // Split into two rows
  const firstRowProjects = projects.slice(0, 3);
  const secondRowProjects = projects.slice(3, 6);

  return (
    <section className="w-full py-20 bg-[var(--section-bg)] text-[var(--slate)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-[var(--light-slate)]">
          My Projects
        </h2>
        <p className="text-xl text-center mb-12 text-[var(--slate)]">
          Here are a few cool projects I&apos;ve worked on. Hover over any project to learn more!
        </p>
        
        {/* First row of projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {firstRowProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Second row of projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondRowProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project card component with hover effect
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-lg overflow-hidden h-96 bg-[var(--card-bg)] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className={`object-cover transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-100'}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--light-slate)] mb-2">{project.title}</h3>
        <p className="text-sm text-[var(--slate)] line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies visible even without hover */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)] text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-[var(--accent)]">+{project.technologies.length - 3} more</span>
          )}
        </div>
        
        {/* Overlay with full details on hover */}
        <div 
          className={`absolute inset-0 flex flex-col justify-center items-center p-6 bg-[var(--card-bg)]/95 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h3 className="text-2xl font-bold text-[var(--accent)] mb-3">{project.title}</h3>
          <p className="text-center text-[var(--light-slate)] mb-4 max-w-md">{project.description}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)] text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--accent)] text-[var(--card-bg)] px-4 py-2 rounded text-sm font-medium hover:bg-[var(--accent)]/90 transition-colors"
            >
              <FaExternalLinkAlt /> View Live
            </a>
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] px-4 py-2 rounded text-sm font-medium hover:bg-[rgba(var(--accent-rgb),0.1)] transition-colors"
            >
              <FaGithub /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;