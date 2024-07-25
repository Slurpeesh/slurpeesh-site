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
  return (
    <article className="flex-grow grid grid-cols-2 gap-3 grid-rows-3 rounded-2xl p-5 bg-yellow-300">
      <h3 className="flex justify-center items-center text-center font-medium text-6xl">
        Sapphire
      </h3>
      <div className="row-span-2">
        <div className="m-auto w-full h-full grid">
          <img
            src={sapphireImg}
            alt="Window of Skill Insight application"
            className="max-h-[52vh] max-w-full m-auto rounded-2xl"
          />
        </div>
      </div>

      <div className="row-span-2">
        <h4 className="text-center text-2xl font-medium">Description</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          distinctio ratione perferendis recusandae nobis tenetur cum id,
          laudantium dolorum provident aperiam. Quibusdam nostrum fugiat
          perferendis, rem nam eveniet consequatur maxime nulla dicta, eligendi,
          ab expedita necessitatibus neque? Nisi minima ut inventore distinctio
          placeat hic eaque alias est sunt, sapiente ratione itaque optio quos,
          esse deserunt! Possimus velit inventore, qui, voluptates ratione est
          provident obcaecati quo debitis culpa ex autem quasi eaque, eos enim
          eveniet aut quam nam mollitia! Odit quas quaerat temporibus quasi
          blanditiis veritatis quos nemo quidem dolorum aut delectus neque, fuga
          eligendi quae voluptate ab voluptatum. Rem, eligendi.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-center text-2xl font-medium">Tools</h4>
        <div className="flex flex-wrap">
          {svgs.map((svg) => (
            <SkillCard className="p-2 w-[4.5rem]">{svg}</SkillCard>
          ))}
        </div>
      </div>
    </article>
  )
}
