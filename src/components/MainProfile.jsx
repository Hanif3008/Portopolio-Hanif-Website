const profilePoints = [
  'Experienced in redesigning and developing large sets of responsive pages for production web platforms.',
  'Comfortable collaborating with backend teams and adapting interfaces to real product requirements.',
  'Prioritizes clean code, reusable UI structure, and maintainable frontend architecture.',
]

function MainProfile() {
  return (
    <section className="profile-section section-shell" id="profile">
      <div className="section-heading">
        <p className="section-kicker">About Me</p>
        <h2>Frontend developer who balances visual polish with practical implementation.</h2>
      </div>

      <div className="profile-container">
        <div className="profile-photo">
          <img src="/images/profilepic1.jpeg" alt="Rizki Hanif Prasetyo" loading="lazy" decoding="async" />
        </div>

        <div className="profile-info">
          <p className="profile-intro">Rizki Hanif Prasetyo</p>
          <h3 className="profile-role">React JS Frontend Developer</h3>
          <p className="profile-desc">
            I enjoy building interfaces that are structured, dependable, and easy to understand. My recent
            experience includes redesigning and delivering web pages for products such as Tampil.id and
            Flungo, where usability, consistency, and maintainability mattered as much as visual quality.
          </p>
          <p className="profile-desc">
            I work best when translating design intent into a frontend that is clean in code, clear in user
            flow, and stable enough to support real business needs. I am especially interested in roles where
            I can contribute to product quality through modern React development and thoughtful UI execution.
          </p>

          <div className="profile-points">
            {profilePoints.map((item) => (
              <div key={item} className="profile-point">
                <span></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainProfile
