import React, { useState } from 'react';
import { Layers, CheckCircle2, ChevronDown, ChevronUp, Server, Info, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card surface-card" aria-labelledby={`project-title-${project.id}`}>
      {/* Visual Showcase Thumbnail */}
      <div className="project-media-wrap">
        <img
          src={project.image}
          alt={`Visual representation of ${project.title}`}
          className="project-image"
          loading="lazy"
        />
        <div className="project-media-badge">
          <span className="project-status-dot" />
          <span>{project.status}</span>
        </div>
        <div className="project-category-badge">{project.projectType}</div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        <div className="project-header">
          <div className="project-title-row">
            <h3 id={`project-title-${project.id}`} className="project-title">
              {project.liveUrl || project.githubUrl ? (
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title-link"
                >
                  <span>{project.title}</span>
                  <ExternalLink size={18} className="title-external-icon" />
                </a>
              ) : (
                project.title
              )}
            </h3>
            <div className="project-header-badges">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-status-pill"
                  title={`Open ${project.title} Live Demo (opens in new tab)`}
                >
                  <span className="live-dot" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-status-pill"
                  title={`View ${project.title} GitHub Repository (opens in new tab)`}
                >
                  <GithubIcon size={12} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
          <p className="project-tagline">{project.subtitle}</p>
        </div>

        <p className="project-purpose">{project.purpose}</p>

        {/* Technology Stack Tags */}
        <div className="project-tech-tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge-tech">
              {tech}
            </span>
          ))}
        </div>

        {/* Architectural Breakdown Toggle */}
        <div className="project-details-wrap">
          <button
            type="button"
            className="project-expand-btn"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`project-breakdown-${project.id}`}
          >
            <span>{expanded ? 'Hide Technical Architecture' : 'View Technical Architecture'}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expanded && (
            <div id={`project-breakdown-${project.id}`} className="project-breakdown-panel">
              <div className="breakdown-grid">
                <div className="breakdown-block">
                  <div className="breakdown-block-title">
                    <Layers size={15} />
                    <span>Key Engineering Focus</span>
                  </div>
                  <ul className="breakdown-list">
                    {project.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="breakdown-item">
                        <CheckCircle2 size={14} className="breakdown-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="breakdown-block">
                  <div className="breakdown-block-title">
                    <Server size={15} />
                    <span>System Stack Role</span>
                  </div>
                  <div className="stack-role-text">{project.stackRole}</div>
                </div>
              </div>

              {project.note && (
                <div className="project-note-badge">
                  <Info size={14} />
                  <span>{project.note}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Footer: Repository Link Status & Actions */}
        <div className="project-footer">
          <div className="repo-status-notice">
            <span className="notice-dot" />
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-notice-link"
                title="Open GitHub Repository"
              >
                {project.repoNotice}
              </a>
            ) : (
              <span>{project.repoNotice}</span>
            )}
          </div>
          <div className="project-btns-group">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary project-github-btn"
                aria-label={`Open GitHub repository for ${project.title} (opens in new tab)`}
              >
                <GithubIcon size={15} />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary project-live-btn"
                aria-label={`Open live demo of ${project.title} (opens in new tab)`}
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}
            <a
              href="#contact"
              className="btn btn-ghost project-contact-btn"
              title="Inquire about this project"
            >
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
