import TimelineExperiences from '@/components/TimelineExperiences'
import SplitText from '@/components/SplitText'

const experiences = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance",
    description:
      "Consulted with clients to design custom web solutions. Built CMS applications using Laravel, integrated secure payment systems, and developed RESTful APIs. Optimized performance, deployed apps on cloud services, and ensured smooth functionality.",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    role: "Quality Assurance",
    company: "PT. Ihsan Solusi Informatika (2024)",
    description:
      "Performed manual and automated testing to ensure software quality. Identified, analyzed, and documented defects while maintaining test cases based on functional specifications.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    role: "Full-Stack Web Developer & DevOps Engineer",
    company: "In House Developer — National Institute of Technology (2022–present)",
    description:
      "Handles the full lifecycle of web projects — from architecture and development to deployment and infrastructure management — ensuring reliability and efficiency across platforms.",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    role: "Ads Specialist",
    company: "Freelance",
    description:
      "Managed end-to-end campaigns across Meta, TikTok, and Google Ads — including audience targeting, keyword research, and budget allocation — while technically deploying Google Tag tracking across various websites.",
    image: "https://picsum.photos/600/400?random=4",
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-20 px-4 md:px-8">
      <div className="text-center mb-16">
        <SplitText
          text="Experiences"
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

      <TimelineExperiences items={experiences} />
    </section>
  )
}
