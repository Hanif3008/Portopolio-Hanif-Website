import MainNavbar from './components/MainNavbar'
import MainHero from './components/MainHero'
import MainProfile from './components/MainProfile'
import MainProfileSkill from './components/MainProfileSkill'
import MainProjects from './components/MainProjects'
import MainContact from './components/MainContact'

import "./css/main.css"
import "./css/main_navbar.css"
import "./css/main_hero.css"
import "./css/main_profile.css"
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
        <MainProfileSkill />
        <MainProjects />
        <MainContact />
      </main>
    </div>
  )
}

export default App
