function MainContact() {
  const contacts = [
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rizkihanifprasetyo@gmail.com",
      icon: "mail-outline",
      desc: "Best channel for recruitment discussions and formal inquiries.",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6282120909053",
      icon: "logo-whatsapp",
      desc: "Fast response for quick communication and interview coordination.",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rizki-hanif-prasetyo-30759a254/",
      icon: "logo-linkedin",
      desc: "Professional profile, background, and work history.",
    },
    {
      label: "GitHub",
      href: "https://github.com/Hanif3008",
      icon: "logo-github",
      desc: "Code samples, repositories, and ongoing development work.",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rizkihanifp/",
      icon: "logo-instagram",
      desc: "Additional social presence and personal updates.",
    },
  ]

  return (
    <section className="contact-section section-shell" id="contact">
      <div className="contact-container">
        <div className="section-heading contact-hero">
          <p className="section-kicker">Contact</p>
          <h2 className="contact-title">Available for frontend roles, collaboration, and product-focused projects.</h2>
          <p className="contact-lead">
            If you are hiring, reviewing candidates, or looking for someone who can help improve product UI,
            feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map((c) => (
            <a key={c.label} className="contact-card" href={c.href} target="_blank" rel="noreferrer">
              <div className="contact-card-head">
                <div className="contact-icon">
                  <ion-icon name={c.icon}></ion-icon>
                </div>
                <h3 className="contact-label">{c.label}</h3>
                <ion-icon className="contact-open" name="open-outline"></ion-icon>
              </div>
              <p className="contact-desc">{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainContact
