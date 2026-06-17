import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import SplitText from './SplitText'

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company: "Freelance",
    description: "Consulted with clients to design custom web solutions. Built CMS applications using Laravel, integrated secure payment systems, and developed RESTful APIs. Optimized performance, deployed apps on cloud services, and ensured smooth functionality.",
    icon: "💼"
  },
  {
    title: "Quality Assurance",
    company: "PT. Ihsan Solusi Informatika (2024)",
    description: "Performed manual and automated testing to ensure software quality. Identified, analyzed, and documented defects while maintaining test cases based on functional specifications.",
    icon: "🔍"
  },
  {
    title: "Full-Stack Web Developer & DevOps Engineer",
    company: "In House Developer - National Institute of Technology (2022-present)",
    description: "Handles the full lifecycle of web projects—from architecture and development to deployment and infrastructure management—ensuring reliability and efficiency across platforms.",
    icon: "🚀"
  },
  {
    title: "Ads Specialist",
    company: "Freelance",
    description: "Managed end-to-end campaigns across Meta, TikTok, and Google Ads—including audience targeting, keyword research, and budget allocation—while technically deploying Google Tag tracking across various websites.",
    icon: "📊"
  }
]

const Experiences = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <SplitText
          text="Experiences"
          className="text-4xl md:text-5xl font-bold mb-4"
          tag="h2"
          delay={30}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey and work experience
        </p>
      </div>

      <div className="h-[800px]">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={120}
          itemScale={0.03}
          itemStackDistance={40}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
        >
          {experiences.map((exp, index) => (
            <ScrollStackItem key={index}>
              <div className="flex flex-col md:flex-row gap-6 h-full">
                <div className="flex-shrink-0 text-5xl">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    {exp.company}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  )
}

export default Experiences
