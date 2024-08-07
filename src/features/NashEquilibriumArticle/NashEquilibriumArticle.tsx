import { useAppSelector } from '@/app/hooks/useActions'
import skillsSvg from '@/app/lib/skillsSvg'
import getText from '@/app/locale'
import SkillCard from '@/entities/SkillCard/SkillCard'
import bgArticle from '@/features/assets/bgArticle.jpg'
import nashEquilibriumImg from '@/features/NashEquilibriumArticle/assets/nash.png'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/Tooltip/Tooltip'
import { motion } from 'framer-motion'
import { forwardRef, LegacyRef, useMemo } from 'react'

const skillNames = ['JavaScript', 'HTML', 'CSS']

const NashEquilibriumArticle = forwardRef(function NashEquilibriumArticle(
  props,
  ref: LegacyRef<HTMLElement>
) {
  const lang = useAppSelector((state) => state.lang.value)

  const svgs = useMemo(
    () => skillsSvg.filter((list) => skillNames.includes(list[1])),
    []
  )

  return (
    <article
      ref={ref}
      className="relative flex-grow h-full overflow-hidden lg:grid grid-cols-2 gap-3 grid-rows-3 rounded-2xl p-0 sm:p-5 sm:bg-muted"
    >
      <div
        className="hidden sm:block absolute right-0 top-0 h-full w-full bg-cover bg-left mix-blend-soft-light"
        style={{ backgroundImage: `url(${bgArticle})` }}
      ></div>
      <h3 className="relative z-10 flex justify-center items-center text-center font-medium mb-2 lg:mb-0 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
        Nash equilibrium
      </h3>
      <div className="relative z-10 row-span-2">
        <div className="m-auto w-full h-full lg:grid">
          <img
            src={nashEquilibriumImg}
            alt="Window of Skill Insight application"
            className="max-h-40 sm:max-h-56 md:max-h-[40vh] lg:max-h-[52vh] max-w-full m-auto rounded-2xl"
          />
        </div>
      </div>

      <div className="relative z-10 row-span-2">
        <h4 className="text-center text-lg sm:text-xl lg:text-2xl font-medium">
          {getText(lang, 'description')}
        </h4>
        <p className="text-sm sm:text-base xl:text-xl">
          {getText(lang, 'descriptionNash')}
        </p>
      </div>
      <div className="relative z-10 flex flex-col">
        <h4 className="text-center text-lg sm:text-xl lg:text-2xl font-medium">
          {getText(lang, 'tools')}
        </h4>
        <div className="flex flex-wrap">
          {svgs.map((list, index) => (
            <TooltipProvider key={index} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <SkillCard className="p-2 w-[2.5rem] sm:w-[3.5rem] lg:w-[4.5rem] min-h-[2.5rem] sm:min-h-[3.5rem] lg:min-h-[4.5rem]">
                    {list[0]}
                  </SkillCard>
                </TooltipTrigger>
                <TooltipContent>{list[1]}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </article>
  )
})

export default motion(NashEquilibriumArticle)
