import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Languages, BookOpen, UserCheck } from 'lucide-react';
import './About.css';

export default function About() {
  const academicFacts = [
    {
      icon: <GraduationCap size={22} className="about-fact-icon" />,
      label: 'Degree & Branch',
      value: 'B.E. Computer Science & Engineering',
      subtext: 'Final Year Student',
    },
    {
      icon: <BookOpen size={22} className="about-fact-icon" />,
      label: 'Institution',
      value: 'Asan Memorial College of Eng. & Tech.',
      subtext: 'Chengalpattu, Tamil Nadu',
    },
    {
      icon: <Award size={22} className="about-fact-icon" />,
      label: 'Academic Performance',
      value: '7.88 / 10 CGPA',
      subtext: 'Consistent academic standing',
    },
    {
      icon: <Calendar size={22} className="about-fact-icon" />,
      label: 'Expected Graduation',
      value: '2027',
      subtext: 'Available for immediate internship',
    },
    {
      icon: <MapPin size={22} className="about-fact-icon" />,
      label: 'Location',
      value: 'Chengalpattu, Tamil Nadu',
      subtext: 'Open to on-site & remote roles',
    },
    {
      icon: <Languages size={22} className="about-fact-icon" />,
      label: 'Languages',
      value: 'Tamil & English',
      subtext: 'Fluent verbal & written communication',
    },
  ];

  return (
    <section id="about" className="section about-section" aria-label="About Swetha B">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <UserCheck size={14} />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="section-title">Bridging Theory &amp; Practical Web Engineering</h2>
          <p className="section-subtitle">
            A dedicated computer science student focused on full stack development and Python engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Narrative */}
          <div className="about-narrative surface-card">
            <h3 className="about-narrative-title">Who I Am</h3>
            <p className="about-narrative-paragraph">
              I am a final-year Bachelor of Engineering student specializing in Computer Science and Engineering
              at Asan Memorial College of Engineering and Technology, graduating in 2027. My coursework and
              hands-on projects have built a disciplined foundation in core computer science—including data
              structures, relational database modeling, and scalable web architecture.
            </p>
            <p className="about-narrative-paragraph">
              My engineering focus centers on developing reliable, end-to-end applications. Through hands-on
              implementation, I have constructed production-ready systems using React, Vite.js, Node.js, and MongoDB
              (such as <em>Workmate</em>), as well as Python and Django web services (such as the <em>AI Resume Analyzer</em>).
            </p>
            <p className="about-narrative-paragraph">
              I am seeking <strong>Python Developer</strong> and <strong>Full Stack Developer</strong> internship
              and entry-level opportunities where I can apply my development skills, collaborate with experienced
              engineers, and contribute to production codebases.
            </p>

            <div className="about-pillars">
              <div className="pillar-item">
                <span className="pillar-dot" />
                <span className="pillar-text">Disciplined core programming in C, Java, and JavaScript</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-dot" />
                <span className="pillar-text">Modern component-driven frontends with React &amp; Vite</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-dot" />
                <span className="pillar-text">Structured backend services with Django, Flask, and Node.js</span>
              </div>
            </div>
          </div>

          {/* Academic & Geographic Quick-Facts Grid */}
          <div className="about-facts-column">
            <div className="facts-grid">
              {academicFacts.map((fact, index) => (
                <div key={index} className="fact-card surface-card">
                  <div className="fact-icon-wrap">{fact.icon}</div>
                  <div className="fact-content">
                    <span className="fact-label">{fact.label}</span>
                    <strong className="fact-value">{fact.value}</strong>
                    <span className="fact-subtext">{fact.subtext}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
