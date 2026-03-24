function MainContact() {
  const contacts = [
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rizkihanifprasetyo@gmail.com",
      icon: "mail-outline",
      desc: "Primary contact method. I check emails daily.",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6282120909053",
      icon: "logo-whatsapp",
      desc: "Fastest way to reach me for quick chats.",
    },
    {
      label: "Discord",
      href: "https://discord.com/channels/hanif5404",
      icon: "logo-discord",
      desc: "For real-time conversation and collaboration.",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rizkihanifp/",
      icon: "logo-instagram",
      desc: "Follow my daily updates and stories.",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rizki-hanif-prasetyo-30759a254/",
      icon: "logo-linkedin",
      desc: "Professional background and experience.",
    },
    {
      label: "Github",
      href: "https://github.com/Hanif3008",
      icon: "logo-github",
      desc: "Open-source projects and contributions.",
    },
  ]

  return (
    <section className="profile-section project-section contact-section" id="contact">
      <div className="profile-darklayer"></div>
      <div className="contact-container">
        <div className="contact-hero">
          <h1 className="contact-title">CONTACT</h1>
          <h2 className="contact-subtitle">Stay In Touch</h2>
          <p className="contact-lead">
            If you're interested in hiring or collaborating, feel free to reach out for recruitment,
            partnership, or follow to stay in touch.
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
      <div className="triangle-bg"></div>
    </section>
  )
}

export default MainContact
