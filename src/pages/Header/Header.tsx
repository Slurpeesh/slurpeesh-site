import Section from '@/entities/Section/Section'
import Logo from '@/features/Logo/Logo'
import Navbar from '@/features/Navbar/Navbar'
import ThemeButton from '@/features/ThemeButton/ThemeButton'
import AnchorLink from '@/shared/AnchorLink/AnchorLink'

export default function Header() {
  return (
    <header className="h-screen bg-slate-400 py-5 snap-center snap-always">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar />
        <ThemeButton />
      </div>
      <div className="h-full grid grid-flow-col grid-cols-2 gap-10">
        <Section
          className="flex flex-col justify-center gap-8 mb-20"
          sectionTitle="About"
          id="About"
        >
          <h1 className="font-extrabold text-5xl">
            Hi, I'm Slava (aka Slurpeesh)!
          </h1>
          <p className="font-medium text-2xl">
            I'm glad you took the time to visit this page. Nice to meet you! I
            am a Frontend Developer but my work is not limited to websites, I
            also develop desktop applications and mobile applications.
          </p>
          <div className="flex justify-center">
            <AnchorLink
              className="text-2xl p-2 rounded-lg bg-white hover:bg-slate-50"
              href="#contacts"
            >
              Contact me!
            </AnchorLink>
          </div>
        </Section>
        <p>Here is some helpful image or information</p>
      </div>
    </header>
  )
}
