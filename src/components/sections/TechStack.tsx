import DomeGallery from '@/components/DomeGallery'
import SplitText from '@/components/SplitText'

const techStack = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", filter: "none" as const },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", filter: "none" as const },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/javascript/default.svg", filter: "none" as const },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", filter: "none" as const },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", filter: "none" as const },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", filter: "none" as const },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", filter: "none" as const },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", filter: "none" as const },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", filter: "none" as const },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", filter: "none" as const },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", filter: "none" as const },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", filter: "none" as const },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/github/dark.svg", filter: "none" as const },
  { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", filter: "none" as const },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", filter: "none" as const },
  { name: "Katalon Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Katalon-logo-vector.svg/960px-Katalon-logo-vector.svg.png?_=20230927024859", filter: "white" as const },
  { name: "Proxmox", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", filter: "none" as const },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", filter: "none" as const },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", filter: "none" as const },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", filter: "none" as const },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", filter: "none" as const },
  { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", filter: "none" as const },
  { name: "debian", logo: "https://thesvg.org/icons/debian/default.svg", filter: "none" as const },
  { name: "SonarQube", logo: "https://thesvg.org/icons/sonarqube/default.svg", filter: "none" as const },
  { name: "zapproxy", logo: "https://thesvg.org/icons/zap/default.svg", filter: "white" as const },
  { name: "nginx proxy", logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nginx-proxy-manager/default.svg", filter: "white" as const },
]

const filterMap: Record<string, string> = {
  white: 'grayscale(1) brightness(0) invert(1)',
  grayscale: 'grayscale(1)',
}

const galleryImages = techStack.map(tech => ({
  src: tech.logo,
  alt: tech.name,
  filter: filterMap[tech.filter],
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

      <div className="h-[280px] md:h-[600px]">
        <DomeGallery
          images={galleryImages}
          fit={0.7}
          grayscale={false}
          dragSensitivity={20}
          maxVerticalRotationDeg={30}
          overlayBlurColor="#020202"
        />
      </div>
    </section>
  )
}
