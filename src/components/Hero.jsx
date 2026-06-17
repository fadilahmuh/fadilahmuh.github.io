import React from 'react'
import DotGrid from './DotGrid'
import ProfileCard from './ProfileCard'
import TextType from './TextType'
import SplitText from './SplitText'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#333333"
          activeColor="#666666"
          proximity={120}
          shockRadius={200}
          shockStrength={3}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-20 max-w-7xl mx-auto">
        {/* Left side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <SplitText
            text="Hello, I'm Fannie Muhammad"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            tag="h1"
            delay={30}
            duration={1}
            ease="power3.out"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
          />

          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span>I'm a </span>
            <TextType
              text={["Fullstack Developer", "DevOps Engineer"]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={2000}
              className="text-blue-400 font-semibold"
              cursorCharacter="|"
              cursorClassName="text-blue-400"
            />
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            Building modern web applications with cutting-edge technologies.
            Passionate about creating efficient, scalable, and user-friendly solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right side - Profile Card */}
        <div className="flex-shrink-0">
          <ProfileCard
            avatarUrl="/profile_picture.jpg"
            name="Fannie Muhammad"
            title="Fullstack Developer"
            handle="fadilahmuh"
            status="Available"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            behindGlowEnabled={true}
            behindGlowColor="rgba(59, 130, 246, 0.5)"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}

export default Hero
