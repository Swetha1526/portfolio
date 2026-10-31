import React, { useState } from 'react';
import { Layout, Server, Database, Zap, Wrench, Layers } from 'lucide-react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    icon: <Layout size={20} />,
    description: 'Component architecture, responsive layouts, modern state management, and client performance tooling.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React 19', 'Redux', 'Redux Toolkit', 'Vite.js', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: <Server size={20} />,
    description: 'Server-side application logic, middleware, RESTful API development, JWT authentication, and backend services.',
    skills: ['Node.js', 'Express.js', 'Python', 'Django REST Framework', 'REST APIs'],
  },
  {
    id: 'databases',
    title: 'Databases & Data Modeling',
    icon: <Database size={20} />,
    description: 'NoSQL document storage, schema modeling with Mongoose, relational data querying, and persistence.',
    skills: ['MongoDB', 'Mongoose', 'MySQL'],
  },
  {
    id: 'realtime',
    title: 'Real-Time Technologies',
    icon: <Zap size={20} />,
    description: 'Bidirectional client-server communication, event-driven socket handling, and low-latency data sync.',
    skills: ['Socket.io', 'WebSockets'],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Version Control',
    icon: <Wrench size={20} />,
    description: 'Version control workflows, API testing environments, development editors, and cloud deployment.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'databases', label: 'Databases' },
    { id: 'realtime', label: 'Real-Time' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredCategories = activeFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Core Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A verified inventory of technologies, frameworks, developer tools, and professional strengths utilized in coursework, internships, and production projects.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="skills-filter-nav" role="tablist" aria-label="Filter skills by domain">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === opt.id}
              className={`filter-btn ${activeFilter === opt.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card surface-card">
              <div className="cat-card-header">
                <div className="cat-icon-badge">{cat.icon}</div>
                <div>
                  <h3 className="cat-title">{cat.title}</h3>
                  <span className="cat-count">{cat.skills.length} skills &amp; competencies</span>
                </div>
              </div>

              <p className="cat-desc">{cat.description}</p>

              <div className="skills-tag-list" aria-label={`Skills for ${cat.title}`}>
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-pill">
                    <span className="pill-dot" />
                    <span className="pill-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
