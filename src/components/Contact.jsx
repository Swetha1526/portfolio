import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Languages,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
  Loader2,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons/SocialIcons';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'unconfigured'
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Spam honeypot detection
    if (formData._gotcha) {
      setSubmitStatus('success');
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Check if endpoint is not configured
    if (!endpoint || endpoint.trim() === '' || endpoint.includes('your_form_id')) {
      setSubmitStatus('unconfigured');
      return;
    }

    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.name.trim(),
          'Email Address': formData.email.trim(),
          'Subject': formData.subject.trim(),
          'Message': formData.message.trim(),
          _replyto: formData.email.trim(),
          _subject: `[Portfolio Inquiry] ${formData.subject.trim()} — ${formData.name.trim()}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          _gotcha: '',
        });
        setErrors({});
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitStatus('error');
        setErrorMessage(
          data?.errors?.[0]?.message ||
            'Unable to deliver your message at this time. Please try again or reach out directly at swetha151105@gmail.com.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitStatus('error');
      setErrorMessage(
        'A network connection error occurred while submitting your message. Please reach out directly at swetha151105@gmail.com.'
      );
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
            Open for MERN Stack Developer &amp; Full Stack Developer opportunities, engineering internships, and technical inquiries.
          </p>
        </div>

        <div className="contact-card-wrapper">
          <div className="contact-layout-grid">
            {/* Left Column: Interactive Contact Form */}
            <div className="contact-form-card surface-card">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Send a Direct Message</h3>
                <p className="contact-form-desc">
                  Have an internship or developer role, project collaboration, or question? Send a message directly.
                </p>
              </div>

              {submitStatus === 'unconfigured' && (
                <div className="contact-alert alert-warning" role="alert">
                  <AlertTriangle size={20} className="alert-icon" />
                  <div className="alert-body">
                    <strong className="alert-heading">Form Endpoint Not Configured</strong>
                    <p className="alert-text">
                      The contact form endpoint is not yet configured. To enable direct inbox delivery via Formspree, set the <code>VITE_FORMSPREE_ENDPOINT</code> environment variable in your Vercel project settings or <code>.env</code> file with your Formspree endpoint (e.g., <code>https://formspree.io/f/your_form_id</code>). You can also email Swetha directly at{' '}
                      <a href={`mailto:${emailAddress}`} className="alert-link">
                        {emailAddress}
                      </a>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="btn btn-secondary alert-dismiss-btn"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="contact-alert alert-success" role="alert">
                  <CheckCircle2 size={20} className="alert-icon" />
                  <div className="alert-body">
                    <strong className="alert-heading">Message Sent Successfully!</strong>
                    <p className="alert-text">
                      Thank you for reaching out! Your message has been dispatched to Swetha&apos;s inbox. She will respond as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="btn btn-secondary alert-dismiss-btn"
                    >
                      <RotateCcw size={14} />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact-alert alert-error" role="alert">
                  <AlertCircle size={20} className="alert-icon" />
                  <div className="alert-body">
                    <strong className="alert-heading">Message Delivery Issue</strong>
                    <p className="alert-text">{errorMessage}</p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="btn btn-secondary alert-dismiss-btn"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              {submitStatus !== 'success' && (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        <span>Full Name</span>
                        <span className="required-star" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`form-input ${errors.name ? 'has-error' : ''}`}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        disabled={submitStatus === 'loading'}
                        required
                      />
                      {errors.name && (
                        <span id="contact-name-error" className="field-error">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        <span>Email Address</span>
                        <span className="required-star" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className={`form-input ${errors.email ? 'has-error' : ''}`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        disabled={submitStatus === 'loading'}
                        required
                      />
                      {errors.email && (
                        <span id="contact-email-error" className="field-error">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      <span>Subject</span>
                      <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. MERN Developer Role / Opportunity"
                      className={`form-input ${errors.subject ? 'has-error' : ''}`}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      disabled={submitStatus === 'loading'}
                      required
                    />
                    {errors.subject && (
                      <span id="contact-subject-error" className="field-error">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      <span>Message</span>
                      <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project details, role description, or questions..."
                      className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      disabled={submitStatus === 'loading'}
                      required
                    />
                    {errors.message && (
                      <span id="contact-message-error" className="field-error">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={submitStatus === 'loading'}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 size={18} className="spin-icon" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels & Information */}
            <div className="contact-sidebar-card surface-card">
              <div className="contact-sidebar-header">
                <h3 className="contact-sidebar-title">Direct Inquiries</h3>
                <p className="contact-sidebar-desc">
                  Prefer direct outreach? You can email me directly or connect through LinkedIn and GitHub.
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
                        <span>Copied!</span>
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
                    <span>Compose</span>
                  </a>
                </div>
              </div>

              {/* Channels Grid */}
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
                    <span className="channel-subtitle">Repositories &amp; open-source code</span>
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
                  <span>Fluent in Tamil &amp; English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
