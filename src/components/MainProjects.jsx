import { useEffect, useState } from 'react'

function ProjectSection({
  id,
  title,
  href,
  headline,
  subhead,
  bullets,
  chips,
  images,
  swapIntervalMs = 6500,
}) {
  const [isSwapped, setIsSwapped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((v) => !v)
    }, swapIntervalMs)
    return () => clearInterval(interval)
  }, [swapIntervalMs])

  const mainSrc = isSwapped ? images[0] : images[1]
  const floatSrc = isSwapped ? images[1] : images[0]

  return (
    <section className="profile-section project-section" id={id}>
      <div className="profile-darklayer"></div>
      <div className="myprofile-menu">
        <h2>Projects</h2>
      </div>
      <div className="project-layout">
        <div className="project-copy">
          <div className="project-kicker">
            {href ? (
              <a className="project-title-link" href={href} target="_blank" rel="noreferrer">
                <span>{title}</span>
                <ion-icon name="open-outline"></ion-icon>
              </a>
            ) : (
              <a className="project-title-link" href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                <span>{title}</span>
              </a>
            )}
          </div>

          <h1 className="project-headline">{headline}</h1>
          <h2 className="project-subhead">{subhead}</h2>

          <div className="project-panel">
            <ul className="project-points">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-stack">
              {chips.map((chip) => (
                <span key={chip} className="project-chip">{chip}</span>
              ))}
            </div>

            {href && (
              <div className="project-actions">
                <a className="project-link" href={href} target="_blank" rel="noreferrer">
                  <span>Visit Website</span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="project-media">
          <div className="project-shot">
            <img key={mainSrc} className="project-shot-main project-swap-anim" src={mainSrc} alt={`${title} preview`} loading="lazy" decoding="async" />
            <img key={floatSrc} className="project-shot-float project-swap-anim" src={floatSrc} alt={`${title} screen`} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
      <div className="triangle-bg"></div>
    </section>
  );
}

function MainProjects() {
  return (
    <>
      <ProjectSection
        id="projects"
        title="Tampil.id"
        href="https://tampil.id/"
        headline="Frontend Redesign & Development"
        subhead="Internship Project at BISA AI | 2025 - 2026"
        bullets={[
          'Redesigned 100+ web pages across admin dashboard and user interface to improve UI consistency and usability.',
          'Built responsive and interactive interfaces using HTML, CSS, JavaScript, and Bootstrap.',
          'Integrated frontend with backend using CodeIgniter 3 and REST APIs.',
          'Optimized layout structure and components for better user experience.',
          'Used by enterprise and government clients, including national-scale events.',
        ]}
        chips={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'CodeIgniter 3', 'REST API']}
        images={['/images/tampil.PNG', '/images/tampil2.PNG']}
      />

      <ProjectSection
        id="projects-flungo"
        title="Flungo"
        href="https://flungo.id/"
        headline="Frontend Development & Feature Enhancement"
        subhead="Internship Project at BISA AI | 2025 - 2026"
        bullets={[
          'Redesigned and developed frontend from scratch, covering learning, class, and certification pages.',
          'Implemented core features including class enrollment, student dashboard, learning progress tracking, and class scheduling.',
          'Built responsive and user-friendly interfaces using Laravel, HTML, CSS, and JavaScript.',
          'Improved overall user experience for a broad audience of language learners.',
          'Integrated platform with Tampil.id for online class sessions.',
          'Delivered production-ready features used in real learning and certification workflows.',
        ]}
        chips={['Laravel', 'HTML', 'CSS', 'JavaScript']}
        images={['/images/flungo.PNG', '/images/flungo1.PNG']}
      />
    </>
  )
}

export default MainProjects;
