import { useAppSelector } from '@/app/hooks/useActions'
import getText from '@/app/locale'
import SkillCard from '@/entities/SkillCard/SkillCard'
import sapphireImg from '@/features/SapphireArticle/assets/sapphire.png'
import CssSvg from '../svg/CssSvg'
import HtmlSvg from '../svg/HtmlSvg'
import JsSvg from '../svg/JsSvg'
import ReactRouterSvg from '../svg/ReactRouterSvg'
import ReactSvg from '../svg/ReactSvg'
import SassSvg from '../svg/SassSvg1'
import TsSvg from '../svg/TsSvg'
import WebpackSvg from '../svg/WebpackSvg'

const svgs = [
  <TsSvg />,
  <JsSvg />,
  <ReactSvg />,
  <ReactRouterSvg />,
  <WebpackSvg />,
  <SassSvg />,
  <HtmlSvg />,
  <CssSvg />,
]

export default function SapphireArticle() {
  const lang = useAppSelector((state) => state.lang.value)
  return (
    <article className="flex-grow lg:grid grid-cols-2 gap-3 grid-rows-3 rounded-2xl p-5 bg-yellow-300">
      <h3 className="flex justify-center items-center text-center font-medium text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
        Sapphire
      </h3>
      <div className="row-span-2">
        <div className="m-auto w-full h-full lg:grid">
          <img
            src={sapphireImg}
            alt="Window of Skill Insight application"
            className="max-h-40 sm:max-h-56 md:max-h-[52vh] max-w-full m-auto rounded-2xl"
          />
        </div>
      </div>

      <div className="row-span-2">
        <h4 className="text-center text-lg sm:text-xl lg:text-2xl font-medium">
          {getText(lang, 'description')}
        </h4>
        <p>{getText(lang, 'descriptionSapphire')}</p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-center text-lg sm:text-xl lg:text-2xl font-medium">
          {getText(lang, 'tools')}
        </h4>
        <div className="flex flex-wrap">
          {svgs.map((svg) => (
            <SkillCard className="p-2 w-[3.5rem] lg:w-[4.5rem] min-h-[3.5rem] lg:min-h-[4.5rem]">
              {svg}
            </SkillCard>
          ))}
        </div>
      </div>
    </article>
  )
}
