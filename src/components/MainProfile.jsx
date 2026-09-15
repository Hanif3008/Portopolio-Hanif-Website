import { memo } from 'react'

const keyPillars = [
  {
    icon: 'ribbon-outline',
    title: 'National BNSP Certification Systems',
    desc: 'Architected and engineered core modules for national certification portals (LSP TRI, LSP TRIM, CoreCertX)—including online examination engines, assessor scoring panels, and automated administrative SK/SPT document generation.',
  },
  {
    icon: 'code-slash-outline',
    title: 'Modern UI Architecture & React Ecosystem',
    desc: 'Specialized in crafting clean, scalable, and responsive component architectures using React.js, Tailwind CSS, Vite, and modern JavaScript (ES6+), ensuring high rendering speeds and intuitive UX.',
  },
  {
    icon: 'git-network-outline',
    title: 'Full-Stack Synergy & Seamless REST APIs',
    desc: 'Proficient in collaborating across full-stack environments (Laravel, CodeIgniter 3, Node.js/Express, MySQL). Focused on resilient API data flow, proper error handling, and robust state management.',
  },
]

const credentials = [
  {
    label: 'Current Role',
    value: 'Frontend Developer (Full-Time)',
    org: 'PT BISA Artifisial Indonesia (BISA AI Academy)',
    icon: 'briefcase-outline',
  },
  {
    label: 'Education',
    value: 'Bachelor of Computer Science (Informatics)',
    org: 'Diponegoro University (GPA: 3.35 / 4.00)',
    icon: 'school-outline',
  },
]

const MainProfile = memo(() => {
  return (
    <section className="profile-section section-shell" id="profile">
      <div className="section-heading profile-section-heading">
        <p className="section-kicker">About Me</p>
      </div>

      <div className="profile-container">
        {/* Left: Professional Card with Photo & Credentials */}
        <div className="profile-card-col">
          <div className="profile-photo-card">
            <div className="profile-photo-wrap">
              <img 
                src="/images/hanif.jpeg" 
                alt="Rizki Hanif Prasetyo" 
                loading="lazy" 
                decoding="async" 
              />
              <a 
                className="profile-linkedin-overlay" 
                href="https://www.linkedin.com/in/rizki-hanif-prasetyo-30759a254/" 
                target="_blank" 
                rel="noreferrer"
                title="Connect with Rizki Hanif Prasetyo on LinkedIn"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
                <span>Connect on LinkedIn</span>
                <ion-icon name="open-outline" className="ext-icon"></ion-icon>
              </a>
            </div>

            <div className="profile-credentials">
              {credentials.map((cred) => (
                <div key={cred.label} className="cred-item">
                  <div className="cred-icon">
                    <ion-icon name={cred.icon}></ion-icon>
                  </div>
                  <div className="cred-info">
                    <span className="cred-label">{cred.label}</span>
                    <strong className="cred-value">{cred.value}</strong>
                    <span className="cred-org">{cred.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Narrative Story & Key Pillars */}
        <div className="profile-info">
          <div className="profile-header-meta">
            <span className="profile-eyebrow">Rizki Hanif Prasetyo</span>
            <h3 className="profile-role">Frontend Developer | Web Engineer</h3>
          </div>

          <div className="profile-bio-box">
            <p className="profile-desc">
              I am a <strong>Frontend Developer</strong> with a Bachelor's degree in Computer Science from <strong>Diponegoro University</strong>. 
              Currently working full-time at <strong>PT BISA Artifisial Indonesia</strong>, I architect and maintain production-level web applications 
              ranging from national-standard BNSP certification systems to interactive corporate wellness and vocational platforms.
            </p>
            <p className="profile-desc">
              My core engineering philosophy centers on <strong>clean code, performance, and maintainable UI architecture</strong>. 
              Having delivered 200+ modernized web pages and mission-critical workflows, I bridge the gap between design vision and backend logic 
              to deliver experiences that are delightful for users and rock-solid in production.
            </p>
          </div>

          {/* 3 Pillars of Impact */}
          <div className="profile-pillars">
            {keyPillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-icon-box">
                  <ion-icon name={pillar.icon}></ion-icon>
                </div>
                <div className="pillar-copy">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default MainProfile
