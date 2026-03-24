import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import MainNavbar from './components/MainNavbar'
import MainHero from './components/MainHero'
import MainLoadingScreen from './components/MainLoadingScreen'

import "./css/main.css"
import "./css/main_navbar.css"
import "./css/main_hero.css"
import "./css/main_loadingscreen.css"
import "./css/main_profile.css"
import "./css/main_profileskill.css"
import "./css/main_project.css"
import "./css/main_contact.css"
import "./css/responsive.css"

const MainProfile = lazy(() => import('./components/MainProfile'))
const MainProfileSkill = lazy(() => import('./components/MainProfileSkill'))
const MainProjects = lazy(() => import('./components/MainProjects'))
const MainContact = lazy(() => import('./components/MainContact'))
const MotionDiv = motion.div

function App() {
  const [showMain, setShowMain] = useState(false)
  const [profileVisible, setProfileVisible] = useState(false)
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [pendingScrollId, setPendingScrollId] = useState(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!scrollEnabled) return

    let ticking = false

    const handleScroll = () => {
      if (ticking) return

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const docHeight = document.documentElement.scrollHeight

        if (scrollY + windowHeight >= docHeight - 50 && !profileVisible && !transitioning) {
          triggerCinematicTransition(true)
        } else if (scrollY <= 10 && profileVisible && !transitioning) {
          triggerCinematicTransition(false)
        }

        ticking = false
      })

      ticking = true
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollEnabled, profileVisible, transitioning])

  const handleContinue = () => {
    setShowMain(true)
    setProfileVisible(false)
    setScrollEnabled(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
      setScrollEnabled(true)
    }, 1200)
  }

  const triggerCinematicTransition = (openProfile) => {
    setTransitioning(true)
    setTimeout(() => {
      setProfileVisible(openProfile)
    }, 400)
    setTimeout(() => {
      setTransitioning(false)
    }, 1000)
  }

  const scrollOverlayToId = (id) => {
    if (!id) return
    if (!profileVisible) {
      setPendingScrollId(id)
      triggerCinematicTransition(true)
      return
    }
    setPendingScrollId(id)
  }

  useEffect(() => {
    if (!profileVisible) return
    if (!pendingScrollId) return

    let cancelled = false
    let tries = 0

    const attempt = () => {
      if (cancelled) return
      const container = overlayRef.current
      const el = document.getElementById(pendingScrollId)
      if (container && el) {
        const top = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop
        container.scrollTo({ top, behavior: 'smooth' })
        setPendingScrollId(null)
        return
      }
      tries += 1
      if (tries < 12) {
        setTimeout(attempt, 120)
      } else {
        setPendingScrollId(null)
      }
    }

    attempt()
    return () => {
      cancelled = true
    }
  }, [profileVisible, pendingScrollId])

  return (
    <AnimatePresence mode="wait">
      {!showMain ? (
        <MotionDiv key="loading" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
          <MainLoadingScreen onContinue={handleContinue} />
        </MotionDiv>
      ) : (
        <MotionDiv key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="main-wrapper">
          <MotionDiv
            className="main-content"
            animate={{
              filter: profileVisible ? 'blur(10px)' : 'blur(0px)',
              opacity: profileVisible ? 0.6 : 1,
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <MainNavbar
              onProfileClick={() => scrollOverlayToId('profile')}
              onProjectsClick={() => scrollOverlayToId('projects')}
              onContactClick={() => scrollOverlayToId('contact')}
            />
            <MainHero />
          </MotionDiv>

          {scrollEnabled && (
            <MotionDiv
              className="profile-overlay"
              animate={{ y: profileVisible ? 0 : '100%' }}
              initial={{ y: '100%' }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              ref={overlayRef}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <MainProfile />
                <MainProfileSkill />
                <MainProjects />
                <MainContact />
              </Suspense>
            </MotionDiv>
          )}

          <AnimatePresence>
            {transitioning && (
              <MotionDiv
                key="cinematic"
                className="cinematic-overlay"
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                exit={{ clipPath: 'circle(0% at 50% 50%)' }}
                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              >
                <div className="cinematic-bg"></div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

export default App
