import { memo } from 'react'

const keyHighlights = [
  'Architecting production-ready frontend interfaces with React.js & Laravel.',
  'Engineered core BNSP national certification portals (LSP TRI & TRIM) & online exam engines.',
  'Translating complex product requirements into fast, responsive, and high-converting UI.',
]

const techStackChips = [
  'React.js',
  'Laravel',
  'Tailwind CSS',
  'TypeScript',
  'CodeIgniter',
  'RESTful APIs',
]

const metrics = [
  { value: '1+ Years', label: 'Production Experience', sublabel: 'Enterprise & Full-Time' },
  { value: '6+', label: 'Live Platforms Delivered', sublabel: 'BNSP, LMS & Corporate Portals' },
  { value: '200+', label: 'Web Pages Modernized', sublabel: 'Responsive & Scalable UI' },
  { value: '10k+', label: 'Users Supported', sublabel: 'National Certification Candidates' },
]

const MainHero = memo(() => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Strong Narrative & Positioning */}
          <div className="hero-copy">
            <div className="hero-badge-wrap">
              <span className="hero-eyebrow-badge">
                <span className="sparkle-icon">✨</span>
                <span>Frontend Engineer · Based in Indonesia</span>
              </span>
            </div>

            <h1 className="hero-title">
              Crafting <span className="hero-gradient-text">High-Performance</span> Web Applications That Scale in Production.
            </h1>

            <p className="hero-description">
              Frontend Developer specializing in <strong>React.js</strong>, <strong>Laravel</strong>, and <strong>Modern UI Architectures</strong>. 
              Proven track record delivering national-standard BNSP certification portals, interactive SaaS platforms, and enterprise digital solutions with exceptional user experiences.
            </p>

            {/* Call to Actions */}
            <div className="hero-actions">
              <a className="button-primary hero-btn-primary" href="#projects">
                <span>View Selected Works</span>
                <ion-icon name="arrow-down-outline"></ion-icon>
              </a>

              <a className="button-secondary hero-btn-secondary" href="#contact">
                <span>Get in Touch</span>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </a>

              <a 
                className="button-resume hero-btn-resume" 
                href="/cv.html" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View & Download Curriculum Vitae"
              >
                <ion-icon name="document-text-outline"></ion-icon>
                <span>View Resume</span>
              </a>
            </div>

            {/* Quick Tech Stack Chips */}
            <div className="hero-tech-strip">
              <span className="tech-strip-label">Core Tech:</span>
              <div className="tech-chips-group">
                {techStackChips.map((tech) => (
                  <span key={tech} className="tech-chip-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights List */}
            <ul className="hero-highlights">
              {keyHighlights.map((item) => (
                <li key={item}>
                  <ion-icon name="checkmark-circle" className="highlight-icon"></ion-icon>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Interactive Profile Card with Floating Pills */}
          <div className="hero-spotlight">
            <div className="hero-card hero-profile-card">
              {/* Status Badge */}
              <div className="hero-card-top">
                <span className="status-dot">
                  <span className="status-dot-ping"></span>
                </span>
                <p>Open to frontend opportunities</p>
              </div>

              {/* Avatar Frame */}
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar">
                  <img 
                    src="/images/hanif.jpeg" 
                    alt="Rizki Hanif Prasetyo" 
                    fetchPriority="high" 
                  />
                  <div className="avatar-glow-overlay"></div>
                </div>
              </div>

              {/* Card Meta & Quick Bio */}
              <div className="hero-card-copy">
                <div className="card-name-row">
                  <h2>Rizki Hanif Prasetyo</h2>
                </div>
                <p className="card-role-title">Frontend Developer | Web Engineer</p>
                <p className="card-bio-text">
                  Delivering production-level web applications at PT BISA Artifisial Indonesia. Focused on clean code, responsive layouts, and rock-solid API integration.
                </p>

                {/* Direct Card Social Links */}
                <div className="card-quick-links">
                  <a 
                    href="https://github.com/Hanif3008" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rizki-hanif-prasetyo-30759a254/" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rizkihanifprasetyo@gmail.com" 
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Send Email"
                    title="Send Email via Gmail"
                  >
                    <ion-icon name="mail-outline"></ion-icon>
                  </a>
                  <a 
                    href="https://wa.me/6282120909053" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="WhatsApp Contact"
                    title="WhatsApp"
                  >
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Strip Bar */}
        <div className="hero-metrics-bar">
          {metrics.map((item) => (
            <div key={item.label} className="metric-box">
              <strong className="metric-number">{item.value}</strong>
              <span className="metric-title">{item.label}</span>
              <span className="metric-sub">{item.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default MainHero
