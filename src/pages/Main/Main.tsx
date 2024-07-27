import { useAppSelector } from '@/app/hooks/useActions'
import getText from '@/app/locale'
import Section from '@/entities/Section/Section'
import SkillCard from '@/entities/SkillCard/SkillCard'
import OtherSvg from '@/features/svg/OtherSvg'
import bgQuestions from '@/pages/Main/assets/bgQuestions.png'
import bgSkills from '@/pages/Main/assets/bgSkills.png'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/Tooltip/Tooltip'
import BlitzAskAccordion from '@/widgets/BlitzAskAccordion/BlitzAskAccordion'
import CarouselProjects from '@/widgets/CarouselProjects/CarouselProjects'
import CssSvg from '../../features/svg/CssSvg'
import ElectronSvg from '../../features/svg/ElectronSvg'
import FigmaSvg from '../../features/svg/FigmaSvg'
import HtmlSvg from '../../features/svg/HtmlSvg'
import JsSvg from '../../features/svg/JsSvg'
import KotlinSvg from '../../features/svg/KotlinSvg'
import NodejsSvg from '../../features/svg/NodejsSvg'
import PythonSvg from '../../features/svg/PythonSvg'
import ReactRouterSvg from '../../features/svg/ReactRouterSvg'
import ReactSvg from '../../features/svg/ReactSvg'
import ReduxSvg from '../../features/svg/ReduxSvg'
import SassSvg from '../../features/svg/SassSvg'
import TailwindSvg from '../../features/svg/TailwindSvg'
import TsSvg from '../../features/svg/TsSvg'
import WebpackSvg from '../../features/svg/WebpackSvg'

const skillsSvg = [
  [<TsSvg />, 'TypeScript', 'tooltipTypeScript'],
  [<JsSvg />, 'JavaScript', 'tooltipJavaScript'],
  [<ReactSvg />, 'React', 'tooltipReact'],
  [<ReactRouterSvg />, 'React Router', 'tooltipReactRouter'],
  [<WebpackSvg />, 'Webpack', 'tooltipWebpack'],
  [<ElectronSvg />, 'Electron', 'tooltipElectron'],
  [<NodejsSvg />, 'Node.JS', 'tooltipNodeJS'],
  [<TailwindSvg />, 'TailwindCSS', 'tooltipTailwind'],
  [<SassSvg />, 'Sass', 'tooltipSass'],
  [<ReduxSvg />, 'Redux', 'tooltipRedux'],
  [<HtmlSvg />, 'HTML', 'tooltipHTML'],
  [<CssSvg />, 'CSS', 'tooltipCSS'],
  [<PythonSvg />, 'Python', 'tooltipPython'],
  [<KotlinSvg />, 'Kotlin', 'tooltipKotlin'],
  [<FigmaSvg />, 'Figma', 'tooltipFigma'],
  [<OtherSvg />, 'Others', 'tooltipOther'],
] as const

export default function Main() {
  const lang = useAppSelector((state) => state.lang.value)
  return (
    <main>
      <Section
        className="relative flex md:hidden h-screen flex-col p-0 sm:p-5 snap-center snap-always bg-gradient-to-tl from-accent/0 to-background"
        sectionTitle={getText(lang, 'questions')}
        id="Questions"
      >
        <div
          className="absolute right-0 top-0 h-full w-full bg-cover bg-left mix-blend-color-burn blur-[2px]"
          style={{ backgroundImage: `url(${bgQuestions})` }}
        ></div>
        <div className="relative z-10 flex-grow flex justify-center items-center">
          <BlitzAskAccordion className="flex-grow" />
        </div>
      </Section>
      <Section
        className="relative h-screen flex flex-col justify-center p-0 sm:p-5 snap-center snap-always bg-gradient-to-tl from-accent/0 to-background"
        sectionTitle={getText(lang, 'skills')}
        id="Skills"
      >
        <div
          className="absolute right-0 top-0 h-full w-full bg-cover bg-left mix-blend-multiply blur-[2px]"
          style={{ backgroundImage: `url(${bgSkills})` }}
        ></div>
        <div className="relative z-10 flex flex-wrap justify-between gap-2 sm:gap-5 md:gap-10 md:mt-10">
          {skillsSvg.map((list, index) => (
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
        className="h-screen px-10 md:px-16 flex flex-col snap-center snap-always"
        sectionTitle={getText(lang, 'projects')}
        id="Projects"
      >
        <CarouselProjects />
      </Section>
    </main>
  )
}
