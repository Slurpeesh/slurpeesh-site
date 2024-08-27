import { useAppDispatch, useAppSelector } from '@/app/hooks/useActions'
import getText from '@/app/locale'
import { setHide } from '@/app/store/slices/showBackToTopSlice'
import Section from '@/entities/Section/Section'
import Logo from '@/features/Logo/Logo'
import Navbar from '@/features/Navbar/Navbar'
import SelectLang from '@/features/SelectLang/SelectLang'
import ThemeButton from '@/features/ThemeButton/ThemeButton'
import bgHeader from '@/pages/Header/assets/bgHeader.jpg'
import AnchorLink from '@/shared/AnchorLink/AnchorLink'
import BlitzAskAccordion from '@/widgets/BlitzAskAccordion/BlitzAskAccordion'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Header() {
  const lang = useAppSelector((state) => state.lang.value)
  const dispatch = useAppDispatch()
  const headerRef = useRef(null)

  const fadeInVariants = {
    fromTop: {
      y: [-50, 0],
      opacity: [0, 1],
      transition: { type: 'tween', duration: 0.6 },
    },
    fromBottom: {
      y: [50, 0],
      opacity: [0, 1],
      transition: { type: 'tween', duration: 0.6 },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setHide())
          }
        })
      },
      {
        root: null,
        threshold: 0.5,
      }
    )

    const header = headerRef.current
    if (header) {
      observer.observe(header)
    }

    return () => {
      if (header) {
        observer.unobserve(header)
      }
    }
  }, [dispatch])

  return (
    <header
      ref={headerRef}
      className="relative h-dvh p-5 sm:p-10 snap-start snap-always bg-gradient-to-tl from-accent/0 to-background"
    >
      <div
        className="absolute right-0 top-0 h-full w-full bg-cover bg-left mix-blend-soft-light blur-[2px]"
        style={{ backgroundImage: `url(${bgHeader})` }}
      ></div>
      <motion.div
        variants={fadeInVariants}
        animate={'fromTop'}
        className="z-10 relative flex items-center justify-between"
      >
        <Logo />
        <Navbar />
        <div className="flex items-center gap-2">
          <SelectLang />
          <ThemeButton />
        </div>
      </motion.div>
      <motion.div
        variants={fadeInVariants}
        animate={'fromBottom'}
        className="z-10 relative h-full md:grid grid-flow-col grid-cols-2 gap-5 md:gap-10"
      >
        <Section
          className="flex flex-col h-full justify-evenly md:justify-center gap-4 pb-5 md:gap-8 mb-0 sm:mb-10 lg:mb-20"
          sectionTitle="About"
          id="About"
        >
          <h1 className="font-extrabold text-4xl lg:text-5xl">
            {getText(lang, 'greeting')}
          </h1>
          <p className="font-medium text-lg sm:text-xl lg:text-2xl">
            {getText(lang, 'aboutGreeting')}
          </p>
          <div className="flex justify-center">
            <AnchorLink
              className="text-lg md:text-2xl p-2 rounded-lg bg-accent hover:bg-accent-hover"
              href="#contacts"
            >
              {getText(lang, 'contactMe')}
            </AnchorLink>
          </div>
        </Section>
        <div className="hidden md:flex flex-col justify-center gap-4 md:gap-8 p-5 mb-5 sm:mb-10 lg:mb-20">
          <BlitzAskAccordion />
        </div>
      </motion.div>
    </header>
  )
}
