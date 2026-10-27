import { ArrowDown, Mail, Terminal, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left Column: Headline and Pitch */}
        <div className="hero-content">
          {/* Status Indicator Pill */}
          <div className="hero-status-pill" role="status" aria-label="Availability Status">
            <span className="status-beacon">
              <span className="beacon-ping" />
              <span className="beacon-dot" />
            </span>
            <span className="status-text">
              Available for MERN &amp; Full Stack Internships (2027 Grad)
            </span>
          </div>

          {/* Main Title & Headline */}
          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Swetha B</span>
          </h1>

          <p className="hero-headline">
            MERN Stack Developer &amp; Full Stack Software Engineer
          </p>

          <p className="hero-description">
            Final-year B.E. Computer Science and Engineering student graduating in 2027.
            Specializing in high-performance MERN stack engineering (MongoDB, Express.js, React, Node.js)
            and Python/Django web services. Passionate about building real-time duplex applications,
            scalable REST APIs, stateful frontend architectures, and turning real-world needs into robust software solutions.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>Explore Projects</span>
              <ArrowDown size={18} />
            </a>
            <a
              href="/B_Swetha_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-btn hero-resume-btn"
              aria-label="View Swetha's Resume PDF (opens in new tab)"
              title="View & Download Resume PDF"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </a>
            <a href="#contact" className="btn btn-ghost hero-btn">
              <span>Contact Me</span>
              <Mail size={18} />
            </a>
          </div>

          {/* Social Proof & Direct Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-group">
              <a
                href="https://github.com/Swetha1526"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Swetha's GitHub Profile (opens in new tab)"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/swetha-baskar-5599963a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Swetha's LinkedIn Profile (opens in new tab)"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:swetha151105@gmail.com"
                className="social-icon-link"
                aria-label="Send email to Swetha"
                title="Email swetha151105@gmail.com"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="location-pill">
              <span>Chengalpattu, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Right Column: Distinctive Interactive Developer Card */}
        <div className="hero-card-col" aria-hidden="true">
          <div className="developer-showcase-card surface-card">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="term-dot dot-red" />
                <span className="term-dot dot-yellow" />
                <span className="term-dot dot-green" />
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>swetha_mern_profile.js</span>
              </div>
              <div className="terminal-tag">Node.js / MERN</div>
            </div>

            {/* Terminal Code Body */}
            <div className="terminal-code">
              <div className="code-line">
                <span className="c-keyword">const</span>{' '}
                <span className="c-var">developer</span> = &#123;
              </div>
              <div className="code-line indent-1">
                <span className="c-var">name</span>: <span className="c-str">&quot;Swetha B&quot;</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-var">degree</span>: <span className="c-str">&quot;B.E. Computer Science &amp; Eng&quot;</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-var">graduation</span>: <span className="c-num">2027</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-var">cgpa</span>: <span className="c-num">7.88</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-var">primaryStack</span>: [
                <span className="c-str">&quot;MongoDB&quot;</span>,{' '}
                <span className="c-str">&quot;Express.js&quot;</span>,{' '}
                <span className="c-str">&quot;React.js&quot;</span>,{' '}
                <span className="c-str">&quot;Node.js&quot;</span>],
              </div>
              <div className="code-line indent-1">
                <span className="c-var">backendEng</span>: [
                <span className="c-str">&quot;Python&quot;</span>,{' '}
                <span className="c-str">&quot;Django REST&quot;</span>,{' '}
                <span className="c-str">&quot;Socket.io&quot;</span>],
              </div>
              <div className="code-line indent-1">
                <span className="c-var">portfolio_repo</span>:{' '}
                <a
                  href="https://github.com/Swetha1526/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link"
                  title="View portfolio repository on GitHub"
                >
                  <span className="c-str">&quot;Swetha1526/portfolio&quot;</span>
                </a>,
              </div>
              <div className="code-line indent-1">
                <span className="c-var">status</span>:{' '}
                <span className="c-str">&quot;Ready for MERN &amp; Full Stack Roles&quot;</span>
              </div>
              <div className="code-line">
                &#125;;
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="hero-card-stats">
              <div className="stat-item">
                <div className="stat-number">7.88</div>
                <div className="stat-label">B.E. CGPA</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Major Projects</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Internship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
