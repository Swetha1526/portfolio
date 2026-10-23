import React, { useState } from 'react';
import { Code, Layout, Server, Database, Wrench, Layers } from 'lucide-react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: <Code size={20} />,
    description: 'Core languages utilized for algorithmic problem solving, backend engineering, data querying, and scripting.',
    skills: ['Python', 'C', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layout size={20} />,
    description: 'Component architecture, semantic markup, responsive design, JavaScript programming, and modern client tooling.',
    skills: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Vite.js'],
  },
  {
    id: 'backend',
    title: 'Backend Frameworks',
    icon: <Server size={20} />,
    description: 'Server-side application logic, RESTful API design, routing, and controller architectures.',
    skills: ['Django', 'Flask', 'Node.js'],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    icon: <Database size={20} />,
    description: 'Relational schema design, queries, and document-oriented data persistence.',
    skills: ['MySQL', 'SQLite', 'MongoDB'],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: <Wrench size={20} />,
    description: 'Version control workflows, repository hosting, and code editing environments.',
    skills: ['Git', 'GitHub', 'Visual Studio Code'],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    { id: 'programming', label: 'Programming' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
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
            A verified inventory of technologies utilized in coursework, internships, and full stack projects.
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
                  <span className="cat-count">{cat.skills.length} technologies</span>
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
