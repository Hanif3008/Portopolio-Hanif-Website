import { memo } from 'react'

const navItems = [
  { label: 'About', href: '#profile' },
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
  return (
    <header className="site-header">
      <nav className="portopolio-nav">
        <a className="brand-mark" href="#home" aria-label="Go to home">
          <img src="/images/logo-nobg.png" alt="Rizki Hanif Prasetyo" decoding="async" />
          <div className="brand-copy">
            <strong>Rizki Hanif</strong>
            <span>Frontend Developer</span>
          </div>
        </a>

        <div className="nav-mid">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          {socialItems.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <ion-icon name={item.icon}></ion-icon>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
})

export default MainNavbar
  
