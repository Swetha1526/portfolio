import React, { useState } from 'react';
import { Mail, MapPin, Languages, Copy, Check, Send, ArrowUpRight, MessageSquare, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons/SocialIcons';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'swetha151105@gmail.com';
  const linkedInUrl = 'https://www.linkedin.com/in/swetha-baskar-5599963a8/';
  const githubUrl = 'https://github.com/Swetha1526';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = emailAddress;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact Swetha B">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let&apos;s Connect &amp; Collaborate</h2>
          <p className="section-subtitle">
            Open for MERN Stack Developer &amp; Full Stack Software Engineer internships and entry-level positions.
          </p>
        </div>

        <div className="contact-card-wrapper">
          <div className="contact-main-card surface-card">
            <div className="contact-intro">
              <h3 className="contact-callout-title">Direct Inquiries Welcome</h3>
              <p className="contact-callout-desc">
                Whether you have an internship opportunity, an entry-level software role, or want to discuss
                MERN stack architecture and full stack development, feel free to reach out directly via email or LinkedIn.
              </p>
            </div>

            {/* Email Action Box */}
            <div className="email-action-box">
              <div className="email-display-row">
                <div className="email-icon-badge">
                  <Mail size={22} />
                </div>
                <div className="email-text-wrap">
                  <span className="email-label">Primary Email</span>
                  <a href={`mailto:${emailAddress}`} className="email-link">
                    {emailAddress}
                  </a>
                </div>
              </div>

              <div className="email-button-group">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary email-action-btn"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-success" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}?subject=Interview%20/%20Opportunity%20Inquiry%20-%20Swetha%20B`}
                  className="btn btn-primary email-action-btn"
                >
                  <Send size={16} />
                  <span>Compose Email</span>
                </a>
              </div>
            </div>

            {/* Connect Cards Grid */}
            <div className="channels-grid">
              {/* LinkedIn */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                aria-label="Swetha's LinkedIn Profile (opens in new tab)"
              >
                <div className="channel-icon-wrap linkedin">
                  <LinkedinIcon size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">LinkedIn Profile</span>
                  <span className="channel-subtitle">Professional network &amp; recommendations</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                aria-label="Swetha's GitHub Profile (opens in new tab)"
              >
                <div className="channel-icon-wrap github">
                  <GithubIcon size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">GitHub Profile</span>
                  <span className="channel-subtitle">Repositories &amp; activity</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* Resume Download */}
              <a
                href="/B_Swetha_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                aria-label="Swetha's Professional Resume PDF (opens in new tab)"
              >
                <div className="channel-icon-wrap resume-card-icon">
                  <FileText size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">Professional Resume</span>
                  <span className="channel-subtitle">View &amp; download PDF</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* Portfolio Repository */}
              <a
                href="https://github.com/Swetha1526/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                aria-label="Swetha's Portfolio Repository on GitHub (opens in new tab)"
              >
                <div className="channel-icon-wrap portfolio-repo">
                  <GithubIcon size={22} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">Portfolio Repository</span>
                  <span className="channel-subtitle">Source code on GitHub</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>
            </div>

            {/* Details Footer: Location and Languages */}
            <div className="contact-metadata-row">
              <div className="meta-badge">
                <MapPin size={15} />
                <span>Chengalpattu, Tamil Nadu, India</span>
              </div>
              <div className="meta-badge">
                <Languages size={15} />
                <span>Tamil &amp; English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
