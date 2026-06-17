import React from 'react'
import CardSwap, { Card } from './CardSwap'
import SplitText from './SplitText'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Laravel, featuring payment integration, inventory management, and admin dashboard.",
    image: "https://picsum.photos/1080/720?random=1",
    tags: ["Laravel", "MySQL", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management application with Vue.js frontend and RESTful API backend.",
    image: "https://picsum.photos/1080/720?random=2",
    tags: ["Vue.js", "Node.js", "Socket.io"]
  },
  {
    title: "AI Dashboard",
    description: "Machine learning dashboard for data visualization and model training with React and Python backend.",
    image: "https://picsum.photos/1080/720?random=3",
    tags: ["React", "Python", "TensorFlow"]
  }
]

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <SplitText
          text="Project Showcase"
          className="text-4xl md:text-5xl font-bold mb-4"
          tag="h2"
          delay={30}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Some of my recent projects and applications
        </p>
      </div>

      <div className="relative h-[500px] flex items-center justify-center">
        <CardSwap
          width={400}
          height={300}
          cardDistance={60}
          verticalDistance={70}
          delay={4000}
          pauseOnHover={true}
          skewAmount={5}
          easing="elastic"
        >
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700">
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  )
}

export default Projects
