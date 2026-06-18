import DomeGallery from '@/components/DomeGallery'
import SplitText from '@/components/SplitText'

const techStack = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "Python",
  "Bootstrap", "Tailwind CSS", "Laravel", "Vue.js", "React",
  "Next.js", "Vite", "GitHub", "GitLab", "Postman",
  "Katalon Studio", "Proxmox", "MySQL", "PostgreSQL",
  "Google Colab", "PyTorch", "TensorFlow", "n8n"
]

// Simple SVG icons as data URIs (white, single tone)
const techLogos: Record<string, string> = {
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Katalon Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  "Proxmox": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Google Colab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "n8n": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
}

const galleryImages = techStack.map(tech => ({
  src: techLogos[tech] || `https://via.placeholder.com/100x100/111111/ffffff?text=${encodeURIComponent(tech)}`,
  alt: tech,
}))

export default function TechStack() {
  return (
    <section id="techstack" className="relative min-h-[70vh] md:min-h-screen py-12 md:py-20 px-4 md:px-8 bg-[#020202]">
      <div className="text-center mb-12">
        <SplitText
          text="Tech Stack"
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

      <div className="h-[400px] md:h-[600px]">
        <DomeGallery
          images={galleryImages}
          fit={0.7}
          grayscale={true}
          dragSensitivity={20}
          maxVerticalRotationDeg={30}
          overlayBlurColor="#020202"
        />
      </div>
    </section>
  )
}
