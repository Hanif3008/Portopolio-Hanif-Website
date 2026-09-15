import { memo } from 'react'

const coreHighlights = [
  { name: 'React.js', icon: 'logo-react', badge: 'Primary UI' },
  { name: 'Laravel', icon: 'cube-outline', badge: 'Backend & API' },
  { name: 'Tailwind CSS', icon: 'color-palette-outline', badge: 'Styling & Design' },
  { name: 'RESTful APIs', icon: 'git-network-outline', badge: 'Integration' },
]

const skillGroups = [
  {
    title: 'Frontend Engineering',
    categoryIcon: 'code-slash-outline',
    description: 'Building modular, accessible, and high-performance user interfaces with modern web tooling.',
    items: [
      { name: 'React.js', icon: 'logo-react' },
      { name: 'TypeScript', icon: 'document-text-outline' },
      { name: 'JavaScript (ES6+)', icon: 'logo-javascript' },
      { name: 'Tailwind CSS', icon: 'color-palette-outline' },
      { name: 'Vite', icon: 'flash-outline' },
      { name: 'Bootstrap', icon: 'grid-outline' },
      { name: 'HTML5 & CSS3', icon: 'logo-html5' },
      { name: 'Responsive UI', icon: 'phone-portrait-outline' },
    ],
  },
  {
    title: 'Backend & Database Integration',
    categoryIcon: 'server-outline',
    description: 'Connecting rich frontend experiences with secure, robust backend systems and resilient APIs.',
    items: [
      { name: 'PHP', icon: 'code-working-outline' },
      { name: 'Laravel', icon: 'cube-outline' },
      { name: 'CodeIgniter 3', icon: 'layers-outline' },
      { name: 'RESTful APIs', icon: 'git-network-outline' },
      { name: 'Node.js', icon: 'logo-nodejs' },
      { name: 'Express.js', icon: 'git-commit-outline' },
      { name: 'MySQL', icon: 'file-tray-full-outline' },
      { name: 'API Error Handling', icon: 'sync-outline' },
    ],
  },
  {
    title: 'Development Tools & Workflow',
    categoryIcon: 'construct-outline',
    description: 'Leveraging modern version control, design-to-code bridges, and Agile sprint collaboration.',
    items: [
      { name: 'Git & GitHub', icon: 'logo-github' },
      { name: 'GitLab', icon: 'logo-gitlab' },
      { name: 'Postman', icon: 'paper-plane-outline' },
      { name: 'Figma to Code', icon: 'logo-figma' },
      { name: 'Jira & Kanban', icon: 'checkbox-outline' },
      { name: 'VS Code', icon: 'terminal-outline' },
      { name: 'Laragon & XAMPP', icon: 'hardware-chip-outline' },
      { name: 'Clean Architecture', icon: 'sparkles-outline' },
    ],
  },
  {
    title: 'Domain & Enterprise Competencies',
    categoryIcon: 'ribbon-outline',
    description: 'Delivering mission-critical platforms with complex business logic and national compliance.',
    items: [
      { name: 'BNSP Certification Portals', icon: 'shield-checkmark-outline' },
      { name: 'Online Exam Engines', icon: 'timer-outline' },
      { name: 'Automated SK/SPT Docs', icon: 'document-attach-outline' },
      { name: 'Assessor Scoring Panels', icon: 'analytics-outline' },
      { name: 'Video Session Integration', icon: 'videocam-outline' },
      { name: 'EdTech & Corporate Portals', icon: 'business-outline' },
    ],
  },
]

const MainProfileSkill = memo(() => {
  return (
    <section className="profile-skill-section section-shell" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Skills & Toolkit</p>
        <h2>Modern Tech Stack & Engineering Toolkit.</h2>
        <p className="section-subheading">
          Battle-tested frameworks, tools, and architecture patterns I leverage to deliver resilient, production-grade web applications.
        </p>
      </div>

      {/* Core Specialties Spotlight Bar */}
      <div className="skills-spotlight-strip">
        <span className="spotlight-tag">Core Daily Stack:</span>
        <div className="spotlight-items">
          {coreHighlights.map((item) => (
            <div key={item.name} className="spotlight-card">
              <div className="spotlight-icon-box">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <div className="spotlight-copy">
                <strong>{item.name}</strong>
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Category Grid (2x2) */}
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <div className="skill-card-head">
              <div className="skill-category-icon">
                <ion-icon name={group.categoryIcon}></ion-icon>
              </div>
              <div className="skill-head-text">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>

            <div className="skill-chip-list">
              {group.items.map((item) => (
                <span key={item.name} className="skill-chip">
                  <ion-icon name={item.icon}></ion-icon>
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
})

export default MainProfileSkill
