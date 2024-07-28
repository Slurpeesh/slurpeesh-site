import { useAppDispatch, useAppSelector } from '@/app/hooks/useActions'
import skillsSvg from '@/app/lib/skillsSvg'
import getText from '@/app/locale'
import { setShow } from '@/app/store/slices/showBackToTopSlice'
import Section from '@/entities/Section/Section'
import SkillCard from '@/entities/SkillCard/SkillCard'
import bgQuestions from '@/pages/Main/assets/bgQuestions.png'
import bgSkills from '@/pages/Main/assets/bgSkills.jpg'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/Tooltip/Tooltip'
import BlitzAskAccordion from '@/widgets/BlitzAskAccordion/BlitzAskAccordion'
import CarouselProjects from '@/widgets/CarouselProjects/CarouselProjects'
import { useEffect, useMemo, useRef } from 'react'

export default function Main() {
  const lang = useAppSelector((state) => state.lang.value)
  const showBackToTop = useAppSelector((state) => state.showBackToTop.value)
  const dispatch = useAppDispatch()
  const skillsSection = useRef(null)
  const questionsSection = useRef(null)

  const skills = useMemo(
    () => skillsSvg.filter((list) => list.length === 3),
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (showBackToTop) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setShow())
          }
        })
      },
      {
        root: null,
        threshold: 0.5,
      }
    )

    const skills = skillsSection.current
    const questions = questionsSection.current
    if (skills) {
      observer.observe(skills)
    }
    if (questions) {
      observer.observe(questions)
    }

    return () => {
      if (skills) {
        observer.unobserve(skills)
      }
      if (questions) {
        observer.unobserve(questions)
      }
    }
  }, [])

  return (
    <main>
      <Section
        className="relative flex md:hidden h-dvh flex-col p-0 sm:p-5 snap-start snap-always bg-gradient-to-tl from-accent/0 to-background"
        sectionTitle={getText(lang, 'questions')}
        id="Questions"
      >
        <div
          ref={questionsSection}
          className="absolute right-0 top-0 h-full w-full bg-cover bg-left mix-blend-color-burn blur-[2px]"
          style={{ backgroundImage: `url(${bgQuestions})` }}
        ></div>
        <div className="relative z-10 flex-grow flex justify-center items-center">
          <BlitzAskAccordion className="flex-grow" />
        </div>
      </Section>
      <Section
        className="relative h-dvh flex flex-col justify-center p-0 sm:p-5 snap-start snap-always bg-gradient-to-tl from-accent/0 to-background"
        sectionTitle={getText(lang, 'skills')}
        id="Skills"
      >
        <div
          ref={skillsSection}
          className="absolute right-0 top-0 h-full w-full bg-cover bg-left mix-blend-multiply blur-[2px]"
          style={{ backgroundImage: `url(${bgSkills})` }}
        ></div>
        <div className="relative z-10 flex flex-wrap justify-between gap-2 sm:gap-5 md:gap-10 md:mt-10">
          {skills.map((list, index) => (
            <TooltipProvider key={index} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <SkillCard className="w-14 xs:w-16 sm:w-24 xl:w-32 min-h-14 xs:min-h-16 sm:min-h-24 xl:min-h-32 flex">
                    {list[0]}
                  </SkillCard>
                </TooltipTrigger>
                <TooltipContent className="max-w-64 sm:max-w-80">
                  <h5 className="font-medium text-base">{list[1]}</h5>
                  <p>{getText(lang, list[2])}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <p className="relative z-10 hidden lg:block flex-grow font-extrabold text-center place-content-center text-5xl">
          {getText(lang, 'hoverToSeeMore')}
        </p>
      </Section>
      <Section
        className="h-dvh px-10 md:px-16 flex flex-col snap-start snap-always"
        sectionTitle={getText(lang, 'projects')}
        id="Projects"
      >
        <CarouselProjects />
      </Section>
    </main>
  )
}
