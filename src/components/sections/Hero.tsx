import DotGrid from '@/components/DotGrid'
import ProfileCard from '@/components/ProfileCard'
import TextType from '@/components/TextType'
import SplitText from '@/components/SplitText'
import profilePicture from '@/assets/profile_picture.png'
import patterURL from '@/assets/iconpattern.png'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={30}
          baseColor="#222222"
          activeColor="#444444"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
        />
      </div>

      {/* Content — stacked on mobile, side by side on desktop */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-2 md:gap-12 px-4">
        {/* ProfileCard — scale down on mobile to fit */}
        <div className="flex-shrink-0 scale-[0.65] md:scale-100 origin-center -my-10 md:my-0">
          <ProfileCard
            avatarUrl={profilePicture}
            name="Fadilah Muhammad"
            // title="Fullstack Developer & DevOps Engineer"
            handle="fadilahmuh"
            status="Online"
            contactText="Contact Me"
            iconUrl={patterURL}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={true}
            behindGlowEnabled={true}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>

        <div className="text-center md:text-left">
          <SplitText
            text="Hello, I'm Fadilah Muhammad"
            className="text-3xl md:text-5xl font-bold text-white"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="h1"
          />

          <div className="mt-2 md:mt-4 text-lg md:text-xl text-gray-300 flex items-center justify-center gap-2">
            <span>I&apos;m</span>
            <TextType
              text={["Fullstack Developer", "DevOps Engineer", "Ads Specialist"]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={2000}
              loop={true}
              className="text-blue-400 font-semibold"
              cursorCharacter="_"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
