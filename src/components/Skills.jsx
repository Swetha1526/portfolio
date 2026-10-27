import React, { useState } from 'react';
import { Code, Layout, Server, Database, Wrench, Layers, Users } from 'lucide-react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: <Code size={20} />,
    description: 'Core languages utilized for algorithmic problem solving, backend engineering, data querying, and scripting.',
    skills: ['Python', 'JavaScript (ES6+)', 'SQL', 'C'],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    icon: <Layout size={20} />,
    description: 'Component architecture, reactive state management, modern styling, and client-side tooling.',
    skills: ['React.js (v18/19)', 'JavaScript', 'Redux / Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite.js'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs (MERN & Python)',
    icon: <Server size={20} />,
    description: 'Scalable RESTful API development, real-time WebSocket communication, authentication, and MVC architecture.',
    skills: ['Node.js', 'Express.js', 'Django REST Framework', 'Django', 'Socket.io (WebSockets)', 'JWT Auth', 'Flask'],
  },
  {
    id: 'databases',
    title: 'Databases & Data Modeling',
    icon: <Database size={20} />,
    description: 'Document-oriented NoSQL storage, schema validation, and normalized relational databases.',
    skills: ['MongoDB (Mongoose)', 'MySQL', 'SQLite', 'Database Design'],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Version Control',
    icon: <Wrench size={20} />,
    description: 'Distributed version control workflows, API testing environments, and cloud deployment platforms.',
    skills: ['Git (Version Control)', 'GitHub', 'Postman (API Testing)', 'VS Code', 'Vercel', 'Render'],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills & Professional Strengths',
    icon: <Users size={20} />,
    description: 'Core professional interpersonal traits, agile collaboration methods, problem solving, and effective engineering communication.',
    skills: [
      'Problem Solving & Algorithmic Thinking',
      'Team Collaboration',
      'Agile & Scrum Methodologies',
      'Technical Communication',
      'Code Review & Best Practices',
      'Time Management & Sprint Delivery',
      'Adaptability & Rapid Learning',
    ],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'programming', label: 'Programming' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & Version Control' },
    { id: 'soft-skills', label: 'Soft Skills' },
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
