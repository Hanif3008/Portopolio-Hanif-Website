const projects = [
  {
    title: 'Tampil.id',
    href: 'https://tampil.id/',
    role: 'Frontend Redesign & Development',
    period: 'Internship Project at BISA AI',
    description:
      'Led frontend redesign work across user-facing pages and admin flows, with a strong focus on consistency, responsiveness, and clearer user navigation.',
    bullets: [
      'Redesigned more than 100 pages across dashboard and public-facing areas.',
      'Built responsive interfaces using HTML, CSS, JavaScript, and Bootstrap.',
      'Integrated frontend flows with existing backend endpoints and business logic.',
    ],
    chips: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'CodeIgniter 3', 'REST API'],
    image: '/images/tampil.PNG',
  },
  {
    title: 'Flungo',
    href: 'https://flungo.id/',
    role: 'Frontend Development & Feature Delivery',
    period: 'Internship Project at BISA AI',
    description:
      'Built and refined the frontend for a learning platform, covering key user flows with attention to usability, responsiveness, and production readiness.',
    bullets: [
      'Developed learning, class, certification, and dashboard pages from scratch.',
      'Delivered participant flows such as enrollment, progress tracking, and scheduling interfaces.',
      'Supported a complete learning experience similar to dashboard peserta, pembelian kelas, and pembelajaran workflows.',
    ],
    chips: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    image: '/images/flungo.PNG',
  },
  {
    title: 'Finsdemy',
    href: 'https://finsdemy.id/',
    role: 'Frontend Development & API Integration',
    period: 'Production Project',
    description:
      'Built the complete frontend page flow for the platform and integrated existing APIs to support participant, class purchase, and learning workflows.',
    bullets: [
      'Developed all frontend pages using HTML, CSS, and JavaScript.',
      'Integrated the frontend with existing APIs on a CodeIgniter-based backend.',
      'Delivered responsive UI for dashboard peserta, sistem pengajaran kelas, pembelian kelas, and pembelajaran.',
    ],
    chips: ['CodeIgniter', 'HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    image: '/images/finsdemy.jpg',
  },
  {
    title: 'LSPTRI',
    href: 'https://lsptri.id/',
    role: 'Frontend Development & API Integration',
    period: 'Production Project',
    description:
      'Built the complete frontend page set for the platform and integrated existing APIs to support participant, learning, and class-related workflows.',
    bullets: [
      'Created all frontend pages using HTML, CSS, JavaScript, and Bootstrap.',
      'Integrated frontend flows with existing APIs on a CodeIgniter-based backend.',
      'Implemented responsive interfaces for dashboard peserta, sistem pengajaran kelas, pembelian kelas, and pembelajaran.',
    ],
    chips: ['CodeIgniter', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive UI'],
    image: '/images/lsptri.jpg',
  },
  {
    title: 'Nutreeat',
    href: 'https://nutreeat.id/',
    role: 'Frontend Development & API Integration',
    period: 'In Development',
    description:
      'Currently building the full frontend experience for the platform while integrating existing APIs for participant, class purchase, and learning features.',
    bullets: [
      'Developing all frontend pages using React JS, JavaScript, and Tailwind CSS.',
      'Integrating the frontend with existing APIs as part of the ongoing development process.',
      'Building responsive UI for dashboard peserta, sistem pengajaran kelas, pembelian kelas, and pembelajaran.',
    ],
    chips: ['React JS', 'Tailwind CSS', 'JavaScript', 'Responsive UI', 'API Integration'],
    image: '/images/nutreeat.jpg',
  },
]

function MainProjects() {
  return (
    <section className="project-section section-shell" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected work that shows practical frontend execution in real product environments.</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-layout">
            <div className="project-copy">
              <div className="project-kicker">
                <a className="project-title-link" href={project.href} target="_blank" rel="noreferrer">
                  <span>{project.title}</span>
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>

              <h3 className="project-headline">{project.role}</h3>
              <p className="project-subhead">{project.period}</p>
              <p className="project-summary">{project.description}</p>

              <ul className="project-points">
                {project.bullets.map((item) => (
                  <li key={item}>{item}</li>
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
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  Visit Website
                </a>
              </div>
            </div>

            <div className="project-media">
              <div className="project-shot">
                <img className="project-shot-main" src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MainProjects
