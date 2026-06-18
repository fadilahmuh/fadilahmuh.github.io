import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TimelineItem {
  role: string
  company: string
  description: string
  image?: string
}

interface TimelineExperiencesProps {
  items: TimelineItem[]
}

export default function TimelineExperiences({ items }: TimelineExperiencesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const mql = window.matchMedia('(min-width: 768px)')

    const ctx = gsap.context(() => {
      const cards = containerRef.current!.querySelectorAll('.timeline-card')
      const lines = containerRef.current!.querySelectorAll('.timeline-line-fill')
      const dots = containerRef.current!.querySelectorAll('.timeline-dot')

      // Animate the vertical line fill
      gsap.fromTo(
        lines,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      )

      // Animate each card
      cards.forEach((card, i) => {
        const isLeft = i % 2 === 0
        const fromLeft = mql.matches && isLeft

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: fromLeft ? -80 : 80,
            y: 30,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Animate dots
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.4,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Vertical line — left on mobile, center on desktop */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-white/10">
        <div
          className="timeline-line-fill absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 origin-top"
        />
      </div>

      {/* Timeline items */}
      <div className="flex flex-col gap-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0

          return (
            <div key={i} className="relative flex items-start">
              {/* Dot — left on mobile, center on desktop */}
              <div className="timeline-dot absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              </div>

              {/* Card — always right on mobile, alternate on desktop */}
              <div
                className={`timeline-card ml-auto pl-10 w-full md:w-[calc(50%-2rem)] ${
                  isLeft ? 'md:ml-0 md:mr-auto md:pr-8 md:pl-0' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-blue-500/30 hover:bg-white/[0.08] transition-all duration-300">
                  {/* Accent bar */}
                  <div
                    className={`absolute top-6 ${
                      isLeft ? 'md:-right-px -left-px' : '-left-px md:-left-px'
                    } w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-purple-500`}
                  />

                  {/* Image placeholder */}
                  {item.image && (
                    <div className="mb-4 rounded-xl overflow-hidden h-40">
                      <img
                        src={item.image}
                        alt={item.role}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-blue-400 font-medium mt-1 text-sm">{item.company}</p>
                  <p className="text-gray-400 mt-3 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
