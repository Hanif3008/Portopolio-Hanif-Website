import { memo } from 'react'

const highlights = [
  'Build responsive interfaces that stay clean across devices.',
  'Translate business needs into production-ready frontend flows.',
  'Focus on readability, maintainability, and performance.',
]

const metrics = [
  { value: '200+', label: 'Pages built and redesigned' },
  { value: '6 mo', label: 'Hands-on internship experience' },
  { value: '3', label: 'Production projects delivered' },
]

const MainHero = memo(() => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">Frontend Developer based in Indonesia</p>
          <h1>
            Building polished web interfaces that feel professional, fast, and ready for production.
          </h1>
          <p className="hero-description">
            I help turn complex product ideas into clean, responsive experiences using React and modern
            frontend practices. My focus is simple: make interfaces easier to use, easier to maintain,
            and easier to trust.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View Projects
            </a>
            <a className="button-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <ul className="hero-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-spotlight">
          <div className="hero-card hero-profile-card">
            <div className="hero-card-top">
              <span className="status-dot"></span>
              <p>Open to frontend opportunities</p>
            </div>
            <div className="hero-avatar">
              <img src="/images/profilepic1.jpeg" alt="Rizki Hanif Prasetyo" fetchPriority="high" />
            </div>
            <div className="hero-card-copy">
              <h2>Rizki Hanif Prasetyo</h2>
              <p>React-focused frontend developer with experience redesigning and delivering real product interfaces.</p>
            </div>
          </div>

          <div className="hero-metrics">
            {metrics.map((item) => (
              <div key={item.label} className="hero-card metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default MainHero
