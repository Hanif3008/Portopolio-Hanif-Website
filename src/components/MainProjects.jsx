import { useState, useMemo, memo } from 'react'

const categories = [
  { id: 'all', label: 'All Projects', count: 8 },
  { id: 'react', label: 'React & Modern UI', count: 2 },
  { id: 'certification', label: 'BNSP & Enterprise', count: 3 },
  { id: 'saas', label: 'SaaS & EdTech', count: 3 },
]

const projects = [
  {
    id: 'corecertx',
    title: 'CoreCertX',
    fullTitle: 'AI & Cybersecurity Certification Platform',
    badge: '✨ Flagship AI Platform',
    category: 'react',
    href: 'https://corecertx.staging.bisa.ai',
    role: 'Frontend Developer (Core Contributor)',
    period: 'Sep 2026 – Present · Production Platform',
    organization: 'PT BISA Artifisial Indonesia',
    image: '/images/corecertx.png',
    description:
      'Competency-based global certification platform in Artificial Intelligence, Generative AI, and Cybersecurity aligned with ISO/IEC 17024 standards, designed for professional credentialing and structured learning paths.',
    bullets: [
      'Built modern, component-driven responsive user interfaces using React.js, Vite, and Tailwind CSS.',
      'Architected structured learning paths, certification catalogs, and modular candidate dashboards.',
      'Integrated full-cycle RESTful APIs for certification enrollments, assessment workflows, and user authentication.',
      'Implemented mobile-first responsive architecture ensuring fast load times and clean cross-device navigation.',
    ],
    chips: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'RESTful APIs', 'Git'],
  },
  {
    id: 'lsptri',
    title: 'LSP TRI',
    fullTitle: 'BNSP National Certification Portal',
    badge: '🏛️ National BNSP System',
    category: 'certification',
    href: 'https://lsptri.id/',
    role: 'Frontend Developer & Module Engineer',
    period: 'Production System · PT BISA Artifisial Indonesia',
    organization: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    image: '/images/lsptri.png',
    description:
      'Official national certification portal managing thousands of certification candidates, registered assessors, and institutional schedules for information technology competencies.',
    bullets: [
      'Engineered core online examination engines with automated timer, state persistence, and anti-fraud monitoring.',
      'Developed real-time assessor scoring panels and evaluation matrices for candidate competency assessment.',
      'Automated administrative document generation for official SK (Surat Keputusan) and SPT (Surat Perintah Tugas).',
      'Seamlessly integrated frontend workflows with CodeIgniter 3 and Laravel REST endpoints.',
    ],
    chips: ['CodeIgniter 3', 'Laravel', 'Bootstrap', 'JavaScript', 'RESTful APIs', 'MySQL'],
  },
  {
    id: 'lsptrim',
    title: 'LSP TRIM',
    fullTitle: 'Vocational & Technical Certification Engine',
    badge: '🏛️ BNSP Certified Engine',
    category: 'certification',
    href: 'https://lsptrim.id/',
    role: 'Frontend Developer',
    period: 'Production System · PT BISA Artifisial Indonesia',
    organization: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    image: '/images/lsptrim.png',
    description:
      'National technical certification portal handling end-to-end certification candidate management, online test delivery, and assessor assignment across engineering competency schemes.',
    bullets: [
      'Built candidate registration, portfolio verification, and assessment assignment matrices.',
      'Implemented responsive scoring dashboards for assessors to evaluate technical candidates.',
      'Automated official administrative document generation and certification certificate pipelines.',
      'Optimized page load speed and cross-browser reliability for high-concurrency exam days.',
    ],
    chips: ['CodeIgniter 3', 'Bootstrap', 'JavaScript', 'RESTful APIs', 'MySQL'],
  },
  {
    id: 'doktermekanik',
    title: 'DokterMekanik.id',
    fullTitle: 'Engineering & Automotive Vocational Training',
    badge: '⚙️ Vocational & Training',
    category: 'saas',
    href: 'https://doktermekanik.id/',
    role: 'Frontend Developer',
    period: 'Production Platform · PT BISA Artifisial Indonesia',
    organization: 'PT BISA Artifisial Indonesia',
    image: '/images/doktermekanik.png',
    description:
      'Vocational engineering training and automotive certification platform serving mechanical engineering professionals, students, and workshop technicians.',
    bullets: [
      'Developed responsive workshop schedules, interactive course catalogs, and training registration funnels.',
      'Created clean participant dashboard flows for booking offline/online mechanical training sessions.',
      'Integrated registration workflows, participant progress tracking, and payment gateways with Laravel APIs.',
      'Implemented clean, mobile-first layouts tailored for workshop technicians on the go.',
    ],
    chips: ['Laravel', 'Bootstrap', 'JavaScript (ES6+)', 'RESTful APIs', 'Responsive UI'],
  },
  {
    id: 'nutreeat',
    title: 'Nutreeat.id',
    fullTitle: 'Corporate Wellness & Nutrition Management',
    badge: '⚡ Corporate Health Tech',
    category: 'react',
    href: 'https://nutreeat.id/',
    role: 'Frontend Developer',
    period: 'Production Platform · PT BISA Artifisial Indonesia',
    organization: 'PT BISA Artifisial Indonesia',
    image: '/images/nutreeat.png',
    description:
      'Digital nutrition platform featuring diet tracking tools, nutrition consultation portals, and corporate wellness dashboards with responsive, data-driven UI layouts.',
    bullets: [
      'Engineered data-driven interactive user dashboards using React.js and Tailwind CSS.',
      'Built responsive diet tracking tools, nutritional analytics calculators, and consultant booking interfaces.',
      'Delivered modular and reusable frontend components integrated with RESTful microservices.',
      'Focused on fast rendering speeds, accessible forms, and clear visual data feedback.',
    ],
    chips: ['React.js', 'Tailwind CSS', 'JavaScript', 'RESTful APIs', 'Responsive UI'],
  },
  {
    id: 'bisaai',
    title: 'BISA AI Academy',
    fullTitle: 'AI Learning & Upskilling Ecosystem',
    badge: '🎓 Enterprise EdTech',
    category: 'saas',
    href: 'https://bisa.ai/',
    role: 'Frontend Developer',
    period: 'Production System · PT BISA Artifisial Indonesia',
    organization: 'PT BISA Artifisial Indonesia',
    image: '/images/bisaai.png',
    description:
      'Flagship corporate education portal offering AI masterclasses, webinars, industrial certifications, and hands-on corporate talent upskilling programs.',
    bullets: [
      'Modernized core portal pages ensuring high UI consistency, rapid loading, and mobile accessibility.',
      'Streamlined course discovery, masterclass booking workflows, and user authentication flows.',
      'Collaborated closely with backend teams and designers via Git workflows for continuous delivery.',
      'Implemented clean layout structures supporting high-traffic event announcements and registration.',
    ],
    chips: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'CodeIgniter', 'RESTful APIs'],
  },
  {
    id: 'flungo',
    title: 'Flungo.id',
    fullTitle: 'Interactive Language Learning & Certification',
    badge: '🚀 Language LMS',
    category: 'saas',
    href: 'https://flungo.id/',
    role: 'Frontend Developer',
    period: 'Production Platform · PT BISA Artifisial Indonesia',
    organization: 'PT BISA Artifisial Indonesia',
    image: '/images/flungo.png',
    description:
      'Interactive foreign language learning platform featuring student progress tracking, live video sessions, and formal certification exams integrated with video session infrastructure.',
    bullets: [
      'Developed interactive learning modules, student study plans, and certification exams from scratch.',
      'Integrated course participant workflows with internal video conferencing session infrastructure.',
      'Delivered responsive participant, instructor, and administration dashboards.',
      'Designed structured learning steps covering dashboard peserta, pembelian kelas, and pembelajaran.',
    ],
    chips: ['Laravel', 'HTML5', 'Bootstrap', 'JavaScript', 'RESTful APIs'],
  },
  {
    id: 'tampil',
    title: 'Tampil.id',
    fullTitle: 'Video Conferencing & Webinar Platform',
    badge: '🎥 High-Traffic Platform',
    category: 'saas',
    href: 'https://tampil.id/',
    role: 'Frontend Redesign Lead',
    period: 'Production Platform · PT BISA Artifisial Indonesia',
    organization: 'PT BISA Artifisial Indonesia',
    image: '/images/tampil.png',
    description:
      'Large-scale webinar and video conferencing platform connecting thousands of event organizers, speakers, and participants across Indonesia with seamless ticketing and streaming.',
    bullets: [
      'Led frontend redesign across 100+ pages covering dashboards, event catalogs, and ticketing flows.',
      'Built responsive interfaces using HTML5, CSS3, JavaScript, and Bootstrap.',
      'Significantly elevated user experience, layout legibility, and cross-device performance.',
      'Integrated frontend flows with existing backend endpoints and authentication business logic.',
    ],
    chips: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'CodeIgniter 3', 'RESTful APIs'],
  },
]

const MainProjects = memo(() => {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects
    return projects.filter((p) => p.category === activeTab)
  }, [activeTab])

  return (
    <section className="project-section section-shell" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Featured Projects</p>
        <h2>Production-Grade Web Platforms Delivered for Real Users.</h2>
        <p className="section-subheading">
          Explore battle-tested enterprise applications, national certification portals, and modern React products I have engineered and maintained.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="project-filters" role="tablist" aria-label="Project Categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeTab === cat.id}
            className={`filter-tab-btn ${activeTab === cat.id ? 'is-active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <span>{cat.label}</span>
            <span className="filter-count">
              {cat.id === 'all'
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Showcase List */}
      <div className="project-list">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-layout">
            {/* Left Column: Project Copy & Metadata */}
            <div className="project-copy">
              <div className="project-top-badge">
                <span className="project-badge-pill">{project.badge}</span>
                <span className="project-org-tag">{project.organization}</span>
              </div>

              <div className="project-kicker">
                <a 
                  className="project-title-link" 
                  href={project.href} 
                  target="_blank" 
                  rel="noreferrer"
                  title={`Visit ${project.title}`}
                >
                  <span>{project.title}</span>
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>

              <h3 className="project-headline">{project.role}</h3>
              <p className="project-subhead">{project.period}</p>
              <p className="project-summary">{project.description}</p>

              <ul className="project-points">
                {project.bullets.map((item) => (
                  <li key={item}>
                    <ion-icon name="checkmark-circle" className="point-icon"></ion-icon>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="project-stack">
                {project.chips.map((chip) => (
                  <span key={chip} className="project-chip">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  className="button-primary project-visit-btn" 
                  href={project.href} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <span>Visit Live Website</span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              </div>
            </div>

            {/* Right Column: Sleek Full-View Browser Mockup */}
            <div className="project-media">
              <div className="browser-mockup">
                {/* Browser Top Window Bar */}
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="b-dot b-dot-red"></span>
                    <span className="b-dot b-dot-yellow"></span>
                    <span className="b-dot b-dot-green"></span>
                  </div>

                  <div className="browser-address-bar">
                    <ion-icon name="lock-closed"></ion-icon>
                    <span className="browser-url-text">
                      {project.href.replace(/^https?:\/\//, '')}
                    </span>
                  </div>

                  <a 
                    className="browser-open-icon" 
                    href={project.href} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label={`Open ${project.title} in new tab`}
                  >
                    <ion-icon name="open-outline"></ion-icon>
                  </a>
                </div>

                {/* Full-View Screenshot Screen */}
                <div className="browser-screen">
                  <img
                    className="project-shot-full"
                    src={project.image}
                    alt={`${project.title} live interface preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="screen-lens-glow"></div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
})

export default MainProjects
