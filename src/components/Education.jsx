import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import './Education.css';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Web Technologies & Full Stack Development',
    'Operating Systems',
    'Software Engineering & System Design',
  ];

  return (
    <section id="education" className="section education-section" aria-label="Education Details">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education &amp; Computer Science Foundations</h2>
          <p className="section-subtitle">
            Formal undergraduate engineering curriculum establishing strong algorithmic and systems foundations.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="education-card surface-card">
          <div className="edu-main-grid">
            {/* Degree and College Details */}
            <div className="edu-primary-info">
              <div className="edu-badge-row">
                <span className="badge edu-degree-badge">B.E. Undergraduate</span>
                <span className="edu-grad-year">
                  <Calendar size={13} />
                  <span>Class of 2027</span>
                </span>
              </div>

              <h3 className="edu-degree-title">Bachelor of Engineering (B.E.)</h3>
              <div className="edu-branch-title">Computer Science and Engineering</div>

              <div className="edu-college-name">
                <BookOpen size={16} />
                <span>Asan Memorial College of Engineering and Technology</span>
              </div>

              <div className="edu-location">
                <MapPin size={15} />
                <span>Chengalpattu, Tamil Nadu, India</span>
              </div>
            </div>

            {/* CGPA Score Highlight */}
            <div className="edu-score-panel">
              <div className="score-ring-wrap">
                <div className="score-ring">
                  <span className="score-value">7.88</span>
                  <span className="score-max">/ 10</span>
                </div>
                <div className="score-label">Cumulative GPA</div>
                <div className="score-pill">
                  <Award size={13} />
                  <span>Consistent Standing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Foundations & Coursework */}
          <div className="edu-coursework-section">
            <h4 className="coursework-heading">Foundational Academic Modules</h4>
            <div className="coursework-grid">
              {coursework.map((course, idx) => (
                <div key={idx} className="coursework-item">
                  <CheckCircle2 size={15} className="coursework-check" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
