import Hero from '@/components/sections/Hero'
import TechStack from '@/components/sections/TechStack'
import Experiences from '@/components/sections/Experiences'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import GooeyNav from '@/components/GooeyNav'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Experience', href: '#experiences' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 bg-background/60 backdrop-blur-md overflow-hidden">
        <GooeyNav
          items={navItems}
          animationTime={600}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          initialActiveIndex={0}
        />
      </div>
      <Hero />
      <TechStack />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
