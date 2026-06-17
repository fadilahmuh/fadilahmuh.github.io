import React from 'react'
import ChromaGrid from './ChromaGrid'
import SplitText from './SplitText'

const contactItems = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    title: "Email",
    subtitle: "fadilahmuhammad800@gmail.com",
    handle: "@email",
    borderColor: "#EA4335",
    gradient: "linear-gradient(145deg, #EA4335, #000)",
    url: "mailto:fadilahmuhammad800@gmail.com"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg",
    title: "Instagram",
    subtitle: "@fadilahmuh",
    handle: "@fadilahmuh",
    borderColor: "#E4405F",
    gradient: "linear-gradient(145deg, #E4405F, #000)",
    url: "https://instagram.com/fadilahmuh"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg",
    title: "Discord",
    subtitle: "@alm8tyy",
    handle: "@alm8tyy",
    borderColor: "#5865F2",
    gradient: "linear-gradient(145deg, #5865F2, #000)",
    url: "https://discord.com"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/telegram/telegram-original.svg",
    title: "Telegram",
    subtitle: "@fadilahmuh",
    handle: "@fadilahmuh",
    borderColor: "#26A5E4",
    gradient: "linear-gradient(145deg, #26A5E4, #000)",
    url: "https://t.me/fadilahmuh"
  }
]

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <SplitText
          text="Get in Touch"
          className="text-4xl md:text-5xl font-bold mb-4"
          tag="h2"
          delay={30}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Feel free to reach out through any of these platforms
        </p>
      </div>

      <div className="h-[400px]">
        <ChromaGrid
          items={contactItems}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Fannie Muhammad. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Contact
