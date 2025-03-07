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
      title: "Data Analytics Dashboard",
      description: "A comprehensive platform for tracking and analyzing data with real-time insights and customizable dashboards.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/project-2.f578e93de9e9a9cfc0b5.png",
      liveLink: "https://example.com/project1",
      codeLink: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "AI Workflow Assistant",
      description: "An AI-powered tool that automates workflow processes and increases productivity through smart suggestions.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "/project-2.f578e93de9e9a9cfc0b5.png",
      liveLink: "https://example.com/project2",
      codeLink: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      description: "A mobile-first application designed to help users track their fitness goals with personalized recommendations.",
      technologies: ["React Native", "Firebase", "Node.js"],
      image: "/project-2.f578e93de9e9a9cfc0b5.png",
      liveLink: "https://example.com/project3",
      codeLink: "https://github.com/yourusername/project3",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "An e-commerce solution with advanced inventory management and customer analytics features.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "/project-2.f578e93de9e9a9cfc0b5.png",
      liveLink: "https://example.com/project4",
      codeLink: "https://github.com/yourusername/project4",
    },
    {
      id: 5,
      title: "Content Management System",
      description: "A modern CMS that simplifies the process of creating and publishing web content with powerful SEO tools.",
      technologies: ["Angular", "Express", "MongoDB", "AWS"],
      image: "/project-2.f578e93de9e9a9cfc0b5.png",
      liveLink: "https://example.com/project5",
      codeLink: "https://github.com/yourusername/project5",
    },
    {
      id: 6,
      title: "Professional Network",
      description: "A social networking platform focused on connecting professionals within specific industries.",
      technologies: ["React", "GraphQL", "Node.js", "MongoDB"],
      image: "/project-2.f578e93de9e9a9cfc0b5.png",
      liveLink: "https://example.com/project6",
      codeLink: "https://github.com/yourusername/project6",
    },
  ];

  // Split into two rows
  const firstRowProjects = projects.slice(0, 3);
  const secondRowProjects = projects.slice(3, 6);

  return (
    <section className="w-full py-20 bg-[#0a192f] text-[#8892b0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-[#ccd6f6]">
          My Projects
        </h2>
        <p className="text-xl text-center mb-12 text-[#8892b0]">
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
      className="relative rounded-lg overflow-hidden h-96 bg-[#112240] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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
        <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">{project.title}</h3>
        <p className="text-sm text-[#8892b0] line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies visible even without hover */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="bg-[#64ffda]/10 text-[#64ffda] text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-[#64ffda]">+{project.technologies.length - 3} more</span>
          )}
        </div>
        
        {/* Overlay with full details on hover */}
        <div 
          className={`absolute inset-0 flex flex-col justify-center items-center p-6 bg-[#112240]/95 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h3 className="text-2xl font-bold text-[#64ffda] mb-3">{project.title}</h3>
          <p className="text-center text-[#ccd6f6] mb-4 max-w-md">{project.description}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-[#64ffda]/10 text-[#64ffda] text-xs px-2 py-1 rounded"
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
              className="flex items-center gap-2 bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded text-sm font-medium hover:bg-[#64ffda]/90 transition-colors"
            >
              <FaExternalLinkAlt /> View Live
            </a>
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded text-sm font-medium hover:bg-[#64ffda]/10 transition-colors"
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