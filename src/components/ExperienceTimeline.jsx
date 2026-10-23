import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Clock } from 'lucide-react';
import './ExperienceTimeline.css';

export default function ExperienceTimeline() {
  const experiences = [
    {
      type: 'internship',
      role: 'Python Full Stack Intern',
      organization: 'Inetz Technologies',
      duration: 'December 18, 2025 – January 18, 2026',
      status: 'Completed',
      description:
        'Engaged in focused full stack engineering with Python. Learned Python fundamentals and architected and developed the AI Resume Analyzer application.',
      highlights: [
        'Learned core Python fundamentals and object-oriented backend programming',
        'Engineered the AI Resume Analyzer individual application utilizing Python and Django',
      ],
      tags: ['Python', 'Django', 'React.js', 'Full Stack Development'],
    },
  ];

  const trainings = [
    {
      program: 'MERN Stack Development',
      provider: 'GUVI',
      status: 'Completed',
      statusType: 'success',
      description: 'Comprehensive curriculum covering MongoDB, Express.js, React.js, and Node.js for modern web applications.',
    },
    {
      program: 'Java Full Stack Development',
      provider: 'QSpiders',
      status: 'In Progress',
      statusType: 'active',
      description: 'Structured enterprise program covering core Java, object-oriented paradigms, SQL databases, and web services.',
    },
  ];

  return (
    <section id="experience" className="section experience-section" aria-label="Experience and Professional Training">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">Experience &amp; Industry Training</h2>
          <p className="section-subtitle">
            Hands-on internship experience combined with specialized developer training programs.
          </p>
        </div>

        <div className="experience-layout">
          {/* Work / Internship Experience Column */}
          <div className="experience-col">
            <h3 className="sub-section-heading">
              <Briefcase size={18} />
              <span>Internship Experience</span>
            </h3>

            <div className="timeline-container">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-card surface-card">
                  <div className="timeline-header">
                    <div>
                      <span className="timeline-badge badge">{exp.status}</span>
                      <h4 className="timeline-role">{exp.role}</h4>
                      <div className="timeline-org">{exp.organization}</div>
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="timeline-desc">{exp.description}</p>

                  <ul className="timeline-bullets">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="bullet-item">
                        <CheckCircle2 size={15} className="bullet-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="timeline-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="badge-tech">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Training Column */}
          <div className="training-col">
            <h3 className="sub-section-heading">
              <Award size={18} />
              <span>Specialized Technical Training</span>
            </h3>

            <div className="training-cards-list">
              {trainings.map((tr, idx) => (
                <div key={idx} className="training-card surface-card">
                  <div className="training-header">
                    <div className="training-info">
                      <h4 className="training-title">{tr.program}</h4>
                      <span className="training-provider">Organization: {tr.provider}</span>
                    </div>
                    <span className={`status-pill status-${tr.statusType}`}>
                      {tr.statusType === 'active' ? <Clock size={12} /> : <CheckCircle2 size={12} />}
                      <span>{tr.status}</span>
                    </span>
                  </div>

                  <p className="training-desc">{tr.description}</p>
                </div>
              ))}

              {/* Practical Learning Commitment Callout */}
              <div className="learning-callout">
                <span className="callout-title">Continuous Growth</span>
                <p className="callout-text">
                  Combining formal academic computer science with industry training to ensure rapid adaptability
                  to enterprise engineering stacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
