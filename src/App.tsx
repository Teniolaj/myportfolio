import Navbar from "./components/Navbar"
import { AboutSection } from "./components/sections/AboutSection"
import { HeroSection } from "./components/sections/HeroSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import Footer from "./components/Footer"
import SkillsSection from "./components/sections/SkillsSection"
import ContactSection from "./components/sections/ContactSection"
import { useRef } from "react"

function App() {
  const skillRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null)

  const handleSmoothScroll = ( ref: React.RefObject<HTMLDivElement | null> ) => {
    ref.current?.scrollIntoView({ behavior: 'smooth'})
  }


  return (
    <>
     <Navbar 
      onSkillClick = {() => handleSmoothScroll(skillRef)}
      onHeroClick = {() => handleSmoothScroll(heroRef)}
      onAboutClick = {() => handleSmoothScroll(aboutRef)}
      onProjectsClick = {() => handleSmoothScroll(projectsRef)}
      onExperienceClick = {() => handleSmoothScroll(experienceRef)}
      onContactClick = {() => handleSmoothScroll(contactRef)}
     />
     <HeroSection ref={heroRef}/>
     <AboutSection ref={aboutRef} />
     <ProjectsSection ref={projectsRef} />
     <ExperienceSection ref={experienceRef} />
     <SkillsSection ref={skillRef} />
     <ContactSection ref={contactRef} />

     <Footer />
    </>
  )
}

export default App
