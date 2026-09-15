import MainNavbar from './components/MainNavbar'
import MainHero from './components/MainHero'
import MainProfile from './components/MainProfile'
import MainExperience from './components/MainExperience'
import MainProfileSkill from './components/MainProfileSkill'
import MainProjects from './components/MainProjects'
import MainContact from './components/MainContact'

import "./css/main.css"
import "./css/main_navbar.css"
import "./css/main_hero.css"
import "./css/main_profile.css"
import "./css/main_experience.css"
import "./css/main_profileskill.css"
import "./css/main_project.css"
import "./css/main_contact.css"
import "./css/responsive.css"

function App() {
  return (
    <div className="site-shell">
      <MainNavbar />
      <main className="page-content">
        <MainHero />
        <MainProfile />
        <MainExperience />
        <MainProfileSkill />
        <MainProjects />
        <MainContact />
      </main>
    </div>
  )
}

export default App
