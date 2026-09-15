import { useState, memo } from 'react'

const channels = [
  {
    id: 'email',
    label: 'Email',
    detail: 'rizkihanifprasetyo@gmail.com',
    copyText: 'rizkihanifprasetyo@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rizkihanifprasetyo@gmail.com',
    icon: 'mail-outline',
    canCopy: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    detail: '+62 821-2090-9053',
    copyText: '+6282120909053',
    href: 'https://wa.me/6282120909053?text=Halo%20Rizki%20Hanif,%20kami%20tertarik%20untuk%20mendiskusikan%20peluang%20Frontend%20Developer',
    icon: 'logo-whatsapp',
    canCopy: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    detail: 'linkedin.com/in/rizki-hanif-prasetyo',
    copyText: 'https://www.linkedin.com/in/rizki-hanif-prasetyo-30759a254/',
    href: 'https://www.linkedin.com/in/rizki-hanif-prasetyo-30759a254/',
    icon: 'logo-linkedin',
    canCopy: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    detail: 'github.com/Hanif3008',
    href: 'https://github.com/Hanif3008',
    icon: 'logo-github',
    canCopy: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    detail: '@rizkihanifp',
    href: 'https://www.instagram.com/rizkihanifp/',
    icon: 'logo-instagram',
    canCopy: false,
  },
]

const MainContact = memo(() => {
  const [copiedKey, setCopiedKey] = useState(null)

  const handleCopy = (e, key, text) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key)
        setTimeout(() => setCopiedKey(null), 2000)
      })
    }
  }

  return (
    <section className="contact-section section-shell" id="contact">
      <div className="contact-wrapper">
        <div className="contact-grid-layout">
          {/* Left Column: Narrative, Availability & Direct Link */}
          <div className="contact-narrative">
            <div className="contact-availability">
              <span className="avail-dot">
                <span className="avail-ping"></span>
              </span>
              <span>Available for Full-Time Roles · Bandung / Jabodetabek</span>
            </div>

            <p className="section-kicker">Get In Touch</p>
            <h2 className="contact-heading">
              Let&apos;s build something <span className="contact-accent">exceptional</span> together.
            </h2>

            <p className="contact-subtext">
              I&apos;m actively seeking opportunities to engineer scalable, high-performance web interfaces. 
              Whether you are hiring for an engineering team, looking to modernize a product, or exploring collaboration—my inbox is always open.
            </p>

            <div className="contact-direct-card">
              <span className="direct-card-label">Preferred Direct Channel</span>
              <a 
                className="direct-card-email" 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rizkihanifprasetyo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>rizkihanifprasetyo@gmail.com</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Channel List */}
          <div className="contact-channels-deck">
            <div className="deck-header">
              <h3>Connect Directly</h3>
              <p>Choose your preferred channel</p>
            </div>

            <div className="deck-rows">
              {channels.map((item) => (
                <a
                  key={item.id}
                  className="channel-row"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="channel-icon-pill">
                    <ion-icon name={item.icon}></ion-icon>
                  </div>

                  <div className="channel-info">
                    <span className="channel-name">{item.label}</span>
                    <span className="channel-detail">{item.detail}</span>
                  </div>

                  <div className="channel-actions">
                    {item.canCopy && (
                      <button
                        type="button"
                        className={`channel-copy-btn ${copiedKey === item.id ? 'is-copied' : ''}`}
                        onClick={(e) => handleCopy(e, item.id, item.copyText)}
                        title={`Copy ${item.label}`}
                      >
                        <ion-icon name={copiedKey === item.id ? 'checkmark-outline' : 'copy-outline'}></ion-icon>
                        <span>{copiedKey === item.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}
                    <span className="channel-arrow">
                      <ion-icon name="open-outline"></ion-icon>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Minimalist Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <strong>Rizki Hanif Prasetyo</strong>
              <span>Frontend Developer | Web Engineer</span>
            </div>

            <p className="footer-copyright">
              © {new Date().getFullYear()} Rizki Hanif Prasetyo. All rights reserved. Built with React.js, Vite & Modern CSS.
            </p>

            <a className="footer-back-to-top" href="#home" title="Back to top">
              <ion-icon name="arrow-up-outline"></ion-icon>
              <span>Back to Top</span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
})

export default MainContact
