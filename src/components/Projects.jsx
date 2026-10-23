import React from 'react';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 'apexmart',
    title: 'ApexMart',
    subtitle: 'Production Full-Stack E-Commerce Platform',
    status: 'Completed',
    projectType: 'Major Project 1',
    image: '/projects/apexmart.jpg',
    purpose:
      'A high-performance full-stack e-commerce web platform engineered with Django REST Framework and React/Redux. Features JWT authentication, catalog search/filtering, persistent shopping cart, multi-step checkout with simulated payments, order lifecycle tracking with invoices, and comprehensive administrator analytics with product/order CRUD.',
    technologies: ['Python', 'Django REST Framework', 'MySQL', 'React', 'Redux', 'JWT'],
    keyFeatures: [
      'JWT-based authentication, user profile management, and role-based permissions',
      'Product catalog search, category filtering, high-resolution galleries, and customer reviews',
      'Persistent Redux shopping cart, checkout shipping address validation, and tax/invoice calculations',
      'Administrator dashboard with revenue metrics, real-time product CRUD, and order status lifecycle dispatch',
    ],
    stackRole:
      'Django 5 and Django REST Framework backend with PyMySQL relational database; React and Redux client for high-performance stateful shopping workflows.',
    note: 'GUVI Major Project 1 demonstrating full stack enterprise e-commerce architecture.',
    githubUrl: 'https://github.com/Swetha1526/ApexMarT',
    repoNotice: 'GitHub: Swetha1526/ApexMarT',
  },
  {
    id: 'connectx',
    title: 'ConnectX',
    subtitle: 'Real-Time Social Media & Direct Messaging Platform',
    status: 'Completed',
    projectType: 'Major Project 2',
    image: '/projects/connectx.jpg',
    purpose:
      'A full-stack real-time social media platform designed for seamless user interaction, combining dynamic media-sharing feeds, optimistic like/comment engagements, user profiles, and low-latency duplex 1-on-1 messaging with live typing indicators and online presence tracking.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    keyFeatures: [
      'Low-latency 1-on-1 WebSocket chat with live typing indicators and online/offline status tracking',
      'Multimedia post creation, drag-and-drop uploads, and dynamic explore feed',
      'Optimistic like/unlike toggling with animations and nested post commenting',
      'Follow/unfollow network graph, debounced user search, and rich profile editing',
      'Real-time notification center for likes, comments, follows, and direct messages',
    ],
    stackRole:
      'Node.js & Express REST API with Socket.io duplex engine & MongoDB; React 18 client for responsive navigation and synchronized states.',
    note: 'GUVI Major Project 2 showcasing full-stack real-time MERN architecture with WebSockets.',
    githubUrl: 'https://github.com/Swetha1526/ConnectX',
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
    note: 'Major Project 3 demonstrating comprehensive end-to-end full stack web architecture.',
    liveUrl: 'https://workmate-brown.vercel.app/',
    repoNotice: 'Live on Vercel: workmate-brown.vercel.app',
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
            Full-stack systems and major capstone projects demonstrating robust architectures across Python, Django, React, Node.js, Express, MongoDB, and MySQL.
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
