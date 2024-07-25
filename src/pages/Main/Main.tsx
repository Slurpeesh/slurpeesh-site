import Section from '@/entities/Section/Section'
import SkillCard from '@/entities/SkillCard/SkillCard'
import OtherSvg from '@/features/svg/OtherSvg'
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
import SassSvg from '../../features/svg/SassSvg1'
import TailwindSvg from '../../features/svg/TailwindSvg'
import TsSvg from '../../features/svg/TsSvg'
import WebpackSvg from '../../features/svg/WebpackSvg'

const skillsSvg = [
  <TsSvg />,
  <JsSvg />,
  <ReactSvg />,
  <ReactRouterSvg />,
  <WebpackSvg />,
  <ElectronSvg />,
  <NodejsSvg />,
  <TailwindSvg />,
  <SassSvg />,
  <ReduxSvg />,
  <HtmlSvg />,
  <CssSvg />,
  <PythonSvg />,
  <KotlinSvg />,
  <FigmaSvg />,
  <OtherSvg />,
]

export default function Main() {
  return (
    <main>
      <Section
        className="h-screen flex flex-col bg-green-300 snap-center snap-always"
        sectionTitle="Skills"
        id="Skills"
      >
        <div className="flex flex-wrap justify-between gap-10 mt-10">
          {skillsSvg.map((svg) => (
            <SkillCard>{svg}</SkillCard>
          ))}
        </div>
        <p className="flex-grow font-semibold text-center place-content-center text-5xl">
          Hover on icons to see more!
        </p>
      </Section>
      <Section
        className="h-screen flex flex-col bg-blue-300 snap-center snap-always"
        sectionTitle="Projects"
        id="Projects"
      >
        <CarouselProjects />
      </Section>
    </main>
  )
}
