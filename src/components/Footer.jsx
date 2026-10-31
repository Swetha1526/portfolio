import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-monogram">SB</span>
            <div className="footer-brand-text">
              <span className="footer-name">Swetha B</span>
              <span className="footer-tag">MERN Stack &amp; Full Stack Developer</span>
            </div>
          </div>

          <div className="footer-social-links">
            <a
              href="https://github.com/Swetha1526"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Swetha's GitHub (opens in new tab)"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/swetha-baskar-5599963a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Swetha's LinkedIn (opens in new tab)"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:swetha151105@gmail.com"
              className="footer-social-icon"
              aria-label="Send email to Swetha"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top of page"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {currentYear} Swetha B. All rights reserved. B.E. Computer Science &amp; Engineering &bull; Class of 2027.
          </p>
          <div className="footer-meta-links">
            <a
              href="/resume/B_Swetha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-repo-link"
              title="Open Resume PDF in new tab"
            >
              <span>View Resume</span>
            </a>
            <span className="footer-meta-sep">&bull;</span>
            <a
              href="/resume/B_Swetha_Resume.pdf"
              download="B_Swetha_Resume.pdf"
              className="footer-repo-link"
              title="Download Resume PDF"
            >
              <span>Download CV</span>
            </a>
            <span className="footer-meta-sep">&bull;</span>
            <a
              href="https://github.com/Swetha1526/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-repo-link"
              title="View portfolio source code on GitHub"
            >
              <GithubIcon size={14} />
              <span>Portfolio Source</span>
            </a>
            <span className="footer-meta-sep">&bull;</span>
            <span className="footer-status">
              Asan Memorial College &bull; Chengalpattu
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
