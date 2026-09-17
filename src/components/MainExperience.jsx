import { memo } from 'react'

const experiences = [
  {
    id: 'bisaai-fulltime',
    type: 'work',
    role: 'Frontend Developer (Full-Time)',
    company: 'PT BISA Artifisial Indonesia',
    subCompany: 'BISA AI Academy & Enterprise Digital Solutions',
    period: 'Apr 2026 – Present', // [Gambar 4: April 2026 - Now]
    badge: 'Current Role',
    location: 'Bandung, Indonesia · On-site',
    summary: 'Spearheading frontend architecture and user interface engineering for national-scale BNSP certification portals, interactive SaaS products, and educational management platforms.',
    achievements: [
      'Architected and delivered scalable frontend systems for official BNSP certification engines (LSP TRI, LSP TRIM, CoreCertX) compliant with ISO/IEC 17024 and national regulatory workflows.',
      'Developed 200+ modernized responsive web pages across diverse digital portals, ensuring sub-second load times and seamless usability across desktop and mobile devices.',
      'Engineered mission-critical features: online timed examination engine with automated session timers, assessor live-scoring rubrics, and automated legal SK/SPT certification document generators.',
      'Collaborated seamlessly in cross-functional Agile sprints alongside UI/UX designers, backend developers, and product leads, ensuring robust RESTful API integration and error handling.',
    ],
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'Laravel', 'CodeIgniter 3', 'RESTful APIs', 'Bootstrap', 'Agile / Scrum'],
  },
  {
    id: 'bisaai-intern',
    type: 'intern',
    role: 'Frontend Developer Intern',
    company: 'PT BISA Artifisial Indonesia',
    subCompany: 'MagangHub Program · Ministry of Education & Culture',
    period: 'Oct 2025 – Apr 2026', // [Gambar 3: October 2025 - April 2026]
    badge: 'Internship',
    location: 'Bandung, Indonesia · On-Site',
    summary: 'Contributed to developing and modernizing production-ready web interfaces across multiple company platforms including event tech, edtech, and language learning.',
    achievements: [
      'Tampil.id (Video Conferencing & Event Platform): Redesigned and rebuilt core admin dashboards and user-facing interfaces using HTML5, CSS3, JavaScript, Bootstrap, and CodeIgniter 3 for private and government sector clients.',
      'Finsdemy (Accounting Certification Platform): Developed modern, component-driven frontend modules using React.js and Vite to deliver a modular, responsive, and scalable user experience.',
      'Flungo (Language Learning Platform): Redesigned frontend layouts in Laravel, integrating course certification workflows with the company\'s video meeting infrastructure.',
      'Responsive & Cross-Browser Design: Converted UI/UX wireframes into responsive, mobile-first web layouts, ensuring high performance, clean DOM hierarchy, and cross-browser stability.',
    ],
    techStack: ['React.js', 'Vite', 'Laravel', 'CodeIgniter 3', 'Bootstrap', 'JavaScript', 'HTML5 / CSS3', 'REST APIs'],
  },
  {
    id: 'mutiara-intern',
    type: 'intern',
    role: 'Web Developer Intern',
    company: 'PT Mutiara Medical Service',
    subCompany: 'Healthcare & Medical Solutions',
    period: 'Dec 2022 – Feb 2023', // [Gambar 2: Desember 2022 - Februari 2023]
    badge: 'Internship',
    location: 'Jakarta, Indonesia · On-site',
    summary: 'Conducted requirements analysis and developed intuitive frontend features for company healthcare platforms and patient digital information systems.',
    achievements: [
      'Conducted requirements analysis with medical stakeholders and engineered responsive user-facing features using semantic HTML5, modern CSS3, and JavaScript.',
      'Optimized page asset delivery and interface responsiveness across mobile and desktop viewports, enhancing patient onboarding and appointment scheduling experience.',
      'Collaborated with senior engineers to implement UI enhancements, perform cross-browser testing, and debug interface regressions.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'UI Optimization', 'Cross-Browser Testing'],
  },
  {
    id: 'undip-education',
    type: 'education',
    role: 'Bachelor of Computer Science (S1 Informatika)',
    company: 'Diponegoro University',
    subCompany: 'Faculty of Science and Mathematics',
    period: 'Aug 2018 – Mar 2025', // [Gambar 1: Agustus 2018 - Maret 2025]
    badge: 'GPA 3.35 / 4.00',
    location: 'Semarang, Indonesia',
    summary: 'Graduated with a strong academic foundation in Software Engineering, Web Systems Architecture, Algorithm Design, and Database Management.',
    achievements: [
      'Earned a cumulative GPA of 3.35 / 4.00 with specialized focus on modern web application architectures and distributed systems.',
      'Actively built software engineering and web development capstone projects using modern JavaScript, PHP ecosystems, and relational databases.',
      'Collaborated in diverse academic development teams, mastering software development lifecycles (SDLC) and version control workflows.',
    ],
    techStack: ['Computer Science', 'Software Engineering', 'Web Development', 'Algorithms', 'Database Systems', 'Git'],
  },
]


const MainExperience = memo(() => {
  return (
    <section className="experience-section section-shell" id="experience">
      <div className="section-heading experience-heading">
        <p className="section-kicker">Career Journey</p>
        <h2>Work Experience &amp; Education.</h2>
        <p className="experience-subtext">
          A track record of engineering production-ready web platforms, leading frontend architectures, and delivering measurable business impact.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((item) => (
          <div key={item.id} className={`timeline-item timeline-${item.type}`}>
            {/* Timeline track node */}
            <div className="timeline-marker">
              <div className="timeline-dot">
                <span className="timeline-dot-ping"></span>
              </div>
              <div className="timeline-line"></div>
            </div>

            {/* Timeline content card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-title-wrap">
                  <div className="timeline-role-row">
                    <h3 className="timeline-role">{item.role}</h3>
                    {item.badge && (
                      <span className={`timeline-status-badge ${item.type === 'work'
                        ? 'badge-active'
                        : item.type === 'intern'
                          ? 'badge-intern'
                          : 'badge-edu'
                        }`}>
                        {item.type === 'work' && <span className="status-indicator-dot"></span>}
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="timeline-company-row">
                    <strong className="timeline-company">{item.company}</strong>
                    {item.subCompany && <span className="timeline-subcompany">· {item.subCompany}</span>}
                  </div>
                </div>

                <div className="timeline-meta-wrap">
                  <span className="timeline-period">
                    <ion-icon name="calendar-outline"></ion-icon>
                    {item.period}
                  </span>
                  <span className="timeline-location">
                    <ion-icon name="location-outline"></ion-icon>
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="timeline-summary">{item.summary}</p>

              <div className="timeline-achievements">
                <h4 className="achievements-label">Key Responsibilities &amp; Impact:</h4>
                <ul className="achievements-list">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="achievement-item">
                      <ion-icon name="checkmark-circle-outline" className="achievement-icon"></ion-icon>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="timeline-tech-stack">
                {item.techStack.map((tech) => (
                  <span key={tech} className="timeline-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

export default MainExperience
