import React from 'react';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 'workmate',
    title: 'Workmate',
    subtitle: 'Hourly Worker Hiring Platform',
    status: 'Completed',
    projectType: 'Individual Project',
    image: '/projects/workmate.jpg',
    purpose:
      'A full stack platform designed to help people hire hourly workers in their region, including plumbers, fitters, electricians, and helpers with transparent skill categorization and local discovery.',
    technologies: ['React', 'Vite.js', 'Node.js', 'MongoDB'],
    keyFeatures: [
      'Regional discovery for plumbers, fitters, electricians, and general helpers',
      'Structured worker catalog with hourly rate clarity and service tags',
      'Responsive client interface engineered using React and Vite.js',
      'RESTful API layer powered by Node.js backed by MongoDB document storage',
    ],
    stackRole:
      'Client built with React & Vite for responsive performance; Node.js handles data operations with MongoDB for worker schemas.',
    note: 'Individual full stack capstone project demonstrating end-to-end web architecture.',
    liveUrl: 'https://workmate-brown.vercel.app/',
    repoNotice: 'Live on Vercel: workmate-brown.vercel.app',
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    subtitle: 'Intelligent Resume Evaluation & ATS Matcher',
    status: 'Completed',
    projectType: 'Individual Project',
    image: '/projects/resume_analyzer.jpg',
    purpose:
      'An application that analyzes resumes, evaluates their alignment against job requirements, provides a structured ATS compatibility score, and suggests actionable content and formatting improvements.',
    technologies: ['Python', 'Django', 'React.js'],
    keyFeatures: [
      'Resume content parsing and text extraction',
      'Automated ATS scoring algorithm assessing keyword relevance',
      'Identification of missing critical competencies and skill gap recommendations',
      'Clean interactive dashboard built with React.js powered by Django APIs',
    ],
    stackRole:
      'Python and Django handle text parsing logic and scoring algorithms; React provides the user-facing report dashboard.',
    note: 'Developed during Python Full Stack Internship at Inetz Technologies.',
    repoNotice: 'Repository: Code available upon request',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FolderGit2 size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">Production-Oriented Projects</h2>
          <p className="section-subtitle">
            Independently built web systems demonstrating full stack workflows across React, Node.js, Python, and Django.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
