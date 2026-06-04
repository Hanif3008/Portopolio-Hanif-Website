const skillGroups = [
  {
    title: 'Frontend Core',
    description: 'Daily tools for building responsive and scalable UI.',
    items: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend Collaboration',
    description: 'Experience integrating frontend with backend-driven systems.',
    items: ['Node.js', 'Express', 'Laravel', 'CodeIgniter 3', 'REST API', 'MySQL'],
  },
  {
    title: 'Workflow & Delivery',
    description: 'Tools and habits that support maintainable team delivery.',
    items: ['GitHub', 'GitLab', 'Figma', 'Jira', 'Responsive Design', 'UI Refactoring'],
  },
]

function MainProfileSkill() {
  return (
    <section className="profile-skill-section section-shell" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Technology stack and workflow that support reliable product delivery.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <div className="skill-card-head">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="skill-chip-list">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MainProfileSkill
