import CardSwap, { Card } from '@/components/CardSwap'
import SplitText from '@/components/SplitText'
import hhwImg from '@/assets/HHW.png'
import sikeuImg from '@/assets/sikeu.jpeg'
import simbaImg from '@/assets/simba.jpeg'
import wrmxImg from '@/assets/wardrobe MX 2.png'

const projects = [
  {
    title: "HongHandWood",
    description: "Handcrafted wooden furniture e-commerce platform",
    image: hhwImg,
  },
  {
    title: "SIKEU",
    description: "Financial management system for Institutions",
    image: sikeuImg,
  },
  {
    title: "SIMBA",
    description: "Academic information system",
    image: simbaImg,
  },
  {
    title: "Wardrobe MX",
    description: "MotoCross shop e-commerce platform",
    image: wrmxImg,
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div className="text-center mb-12">
        <SplitText
          text="Projects"
          className="text-4xl md:text-5xl font-bold text-white"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="h2"
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Text — left side */}
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 px-2">
          <SplitText
          text="Punchy, concise, and looks great if you want a clean, modern UI feel."
          className="text-2xl md:text-4xl font-medium text-white leading-tight"
          delay={50}
          duration={1.0}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="h3"
        />
        </div>

        {/* CardSwap — right side */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center order-1 md:order-2">
          <CardSwap
            width="min(400px, 90vw)"
            height="225px"
            cardDistance={20}
            verticalDistance={20}
            delay={3000}
            pauseOnHover={true}
          >
            {projects.map((project, i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  )
}
