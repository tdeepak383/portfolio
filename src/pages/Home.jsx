import React from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import MovingStrip from '../components/MovingStrip'
import Skills from '../components/Skills'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
    <HeroSection/>
    <MovingStrip/>
    <Projects/>
    <Skills />
    <Education />
    <WorkExperience />
    <Contact />
    </>
  )
}

export default Home