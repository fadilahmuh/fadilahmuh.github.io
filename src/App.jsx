import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="tech-stack" className="py-20">
          <TechStack />
        </section>
        <section id="experiences" className="py-20">
          <Experiences />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
