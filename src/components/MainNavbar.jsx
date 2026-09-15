import { useState, useEffect, memo } from 'react'

const navItems = [
  { label: 'About', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialItems = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rizki-hanif-prasetyo-30759a254/', icon: 'logo-linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/rizkihanifp/', icon: 'logo-instagram' },
  { label: 'GitHub', href: 'https://github.com/Hanif3008', icon: 'logo-github' },
]

const MainNavbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#profile')

  // Automatically close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Active Scroll Spy: track visible section based on scroll position
  useEffect(() => {
    const sectionIds = ['profile', 'experience', 'skills', 'projects', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      // If near bottom of the page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('#contact')
        return
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${id}`)
          return
        }
      }

      // Default to first section if scrolled to top
      setActiveSection('#profile')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="site-header">
      <nav className="portopolio-nav">
        {/* Brand Mark */}
        <a className="brand-mark" href="#home" aria-label="Go to home" onClick={() => setIsOpen(false)}>
          <img src="/images/logo-nobg.png" alt="Rizki Hanif Prasetyo" decoding="async" />
          <div className="brand-copy">
            <strong>Rizki Hanif</strong>
            <span>Frontend Developer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-mid">
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? 'is-active' : ''}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        {/* Desktop Socials */}
        <div className="nav-right">
          {socialItems.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <ion-icon name={item.icon}></ion-icon>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`mobile-menu-toggle ${isOpen ? 'is-active' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ion-icon name={isOpen ? 'close-outline' : 'menu-outline'}></ion-icon>
        </button>
      </nav>

      {/* Mobile Nav Dropdown Drawer */}
      {isOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              )
            })}
          </div>

          <div className="mobile-nav-socials">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="mobile-social-btn"
                onClick={() => setIsOpen(false)}
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
})

export default MainNavbar
