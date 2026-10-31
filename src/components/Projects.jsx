import React from 'react';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 'apexmart',
    title: 'ApexMart',
    subtitle: 'Full-Stack E-Commerce Application',
    status: 'Completed',
    projectType: 'Major Project 1',
    image: '/projects/apexmart.jpg',
    purpose:
      'A full-stack e-commerce application engineered to deliver complete online retail functionality with separate customer shopping workflows and comprehensive administrator controls.',
    technologies: ['React 19', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'BcryptJS'],
    keyFeatures: [
      'Developed a full-stack e-commerce platform with separate customer and administrator roles',
      'Implemented JWT authentication, BcryptJS password hashing, product search, category filtering, and a persistent shopping cart',
      'Built REST APIs for user authentication, product management, customer reviews, and order processing',
      'Created an admin dashboard with product CRUD operations, order management, user management, and sales metrics',
    ],
    stackRole:
      'Client engineered with React 19 and Redux for stateful shopping workflows; backend REST API powered by Node.js, Express.js, and MongoDB with Mongoose.',
    note: 'GUVI Major Project 1 demonstrating full stack MERN e-commerce architecture.',
    githubUrl: 'https://github.com/Swetha1526/ApexMarT',
    liveUrl: 'https://apex-mar-t.vercel.app/',
    repoNotice: 'GitHub: Swetha1526/ApexMarT',
  },
  {
    id: 'connectx',
    title: 'ConnectX',
    subtitle: 'Real-Time Social Media Platform',
    status: 'Completed',
    projectType: 'Major Project 2',
    image: '/projects/connectx.jpg',
    purpose:
      'A full-stack social media application built on MERN stack architecture to facilitate interactive peer networking, multimedia content feeds, engagement tracking, and instant communication.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    keyFeatures: [
      'Developed a full-stack social media platform with MERN stack architecture',
      'Integrated real-time bidirectional communication using Socket.io for instant interactions',
      'Engineered responsive, mobile-optimized user interfaces using React.js and Tailwind CSS',
      'Built backend REST APIs and MongoDB database integration for user profiles, posts, likes, and direct messaging',
    ],
    stackRole:
      'Node.js and Express.js REST API with Socket.io duplex engine & MongoDB; React.js and Tailwind CSS client for synchronized states and responsive UX.',
    note: 'GUVI Major Project 2 showcasing full-stack real-time MERN architecture with WebSockets.',
    githubUrl: 'https://github.com/Swetha1526/ConnectX',
    liveUrl: 'https://connect-x-xfpe.vercel.app/',
    repoNotice: 'GitHub: Swetha1526/ConnectX',
  },
  {
    id: 'workmate',
    title: 'Workmate',
    subtitle: 'Hourly Worker Hiring Platform',
    status: 'Completed',
    projectType: 'Major Project 3',
    image: '/projects/workmate.jpg',
    purpose:
      'A full-stack platform designed to connect customers with local hourly workers such as plumbers, electricians, fitters, and helpers for quick community hiring.',
    technologies: ['React.js', 'Vite.js', 'Node.js', 'MongoDB'],
    keyFeatures: [
      'Developed a full-stack platform connecting customers with local hourly workers including plumbers, electricians, fitters, and helpers',
      'Built responsive user interfaces using React.js and Vite.js with clear service categorization',
      'Developed backend services with Node.js and MongoDB to manage workers, customers, and platform data',
      'Implemented structured worker profiles, search filters, and hourly service tags',
    ],
    stackRole:
      'Client built with React.js & Vite.js for responsive performance; Node.js handles backend service logic with MongoDB for worker schemas.',
    note: 'Major Project 3 demonstrating comprehensive end-to-end full stack web architecture.',
    githubUrl: 'https://github.com/Swetha1526/workmate',
    liveUrl: 'https://workmate-brown.vercel.app/',
    repoNotice: 'GitHub: Swetha1526/workmate',
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
            Full-stack systems and major capstone projects demonstrating robust architectures across React 19, Node.js, Express.js, MongoDB, Socket.io, and Vite.
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
