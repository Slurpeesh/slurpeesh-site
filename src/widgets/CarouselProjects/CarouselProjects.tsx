import { DescriptionKeys } from '@/app/locale'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/entities/Carousel/Carousel'
import ProjectArticle from '@/features/ProjectArticle/ProjectArticle'
import img1GuessWhoWar3 from '@/widgets/CarouselProjects/assets/guessWhoWar3/1.png'
import img2GuessWhoWar3 from '@/widgets/CarouselProjects/assets/guessWhoWar3/2.png'
import img3GuessWhoWar3 from '@/widgets/CarouselProjects/assets/guessWhoWar3/3.png'
import img4GuessWhoWar3 from '@/widgets/CarouselProjects/assets/guessWhoWar3/4.png'
import img5GuessWhoWar3 from '@/widgets/CarouselProjects/assets/guessWhoWar3/5.png'
import img6GuessWhoWar3 from '@/widgets/CarouselProjects/assets/guessWhoWar3/6.png'

import img1AnonChat from '@/widgets/CarouselProjects/assets/anonChat/1.png'
import img2AnonChat from '@/widgets/CarouselProjects/assets/anonChat/2.png'
import img3AnonChat from '@/widgets/CarouselProjects/assets/anonChat/3.png'
import img4AnonChat from '@/widgets/CarouselProjects/assets/anonChat/4.png'
import img5AnonChat from '@/widgets/CarouselProjects/assets/anonChat/5.png'
import img6AnonChat from '@/widgets/CarouselProjects/assets/anonChat/6.png'

import img1SkillInsight from '@/widgets/CarouselProjects/assets/skillInsight/1.png'
import img2SkillInsight from '@/widgets/CarouselProjects/assets/skillInsight/2.png'
import img3SkillInsight from '@/widgets/CarouselProjects/assets/skillInsight/3.png'
import img4SkillInsight from '@/widgets/CarouselProjects/assets/skillInsight/4.png'
import img5SkillInsight from '@/widgets/CarouselProjects/assets/skillInsight/5.png'
import img6SkillInsight from '@/widgets/CarouselProjects/assets/skillInsight/6.png'

import img1InteractiveCard from '@/widgets/CarouselProjects/assets/interactiveCard/1.png'
import img2InteractiveCard from '@/widgets/CarouselProjects/assets/interactiveCard/2.png'
import img3InteractiveCard from '@/widgets/CarouselProjects/assets/interactiveCard/3.png'
import img4InteractiveCard from '@/widgets/CarouselProjects/assets/interactiveCard/4.png'
import img5InteractiveCard from '@/widgets/CarouselProjects/assets/interactiveCard/5.png'

import img1Sapphire from '@/widgets/CarouselProjects/assets/sapphire/1.jpg'
import img2Sapphire from '@/widgets/CarouselProjects/assets/sapphire/2.png'
import img3Sapphire from '@/widgets/CarouselProjects/assets/sapphire/3.png'
import img4Sapphire from '@/widgets/CarouselProjects/assets/sapphire/4.png'

import img1DMUU from '@/widgets/CarouselProjects/assets/DMUU/1.png'
import img2DMUU from '@/widgets/CarouselProjects/assets/DMUU/2.png'
import img3DMUU from '@/widgets/CarouselProjects/assets/DMUU/3.png'
import img4DMUU from '@/widgets/CarouselProjects/assets/DMUU/4.png'

import img1NashEquilibrium from '@/widgets/CarouselProjects/assets/nashEquilibrium/1.png'
import img2NashEquilibrium from '@/widgets/CarouselProjects/assets/nashEquilibrium/2.png'
import img3NashEquilibrium from '@/widgets/CarouselProjects/assets/nashEquilibrium/3.png'
import img4NashEquilibrium from '@/widgets/CarouselProjects/assets/nashEquilibrium/4.png'

import img1WeatherCheck from '@/widgets/CarouselProjects/assets/weatherCheck/1.png'
import img2WeatherCheck from '@/widgets/CarouselProjects/assets/weatherCheck/2.png'

interface IProject {
  getTextDescriptionKey: DescriptionKeys
  imgSrcs: Array<string>
  skillNames: Array<string>
  title: string
  linkToProject: string
}

const projectList: Array<IProject> = [
  {
    title: 'GuessWhoWar3',
    getTextDescriptionKey: 'descriptionGuessWhoWar3',
    imgSrcs: [
      img1GuessWhoWar3,
      img2GuessWhoWar3,
      img3GuessWhoWar3,
      img4GuessWhoWar3,
      img5GuessWhoWar3,
      img6GuessWhoWar3,
    ],
    skillNames: [
      'TypeScript',
      'JavaScript',
      'React',
      'React Router',
      'Webpack',
      'Node.JS',
      'Socket.IO',
      'Redux',
      'TailwindCSS',
      'HTML',
      'CSS',
    ],
    linkToProject: 'https://guess-who-war3.vercel.app/',
  },
  {
    title: 'AnonChat',
    getTextDescriptionKey: 'descriptionAnonChat',
    imgSrcs: [
      img1AnonChat,
      img2AnonChat,
      img3AnonChat,
      img4AnonChat,
      img5AnonChat,
      img6AnonChat,
    ],
    skillNames: [
      'TypeScript',
      'JavaScript',
      'React',
      'Webpack',
      'Node.JS',
      'Socket.IO',
      'Redux',
      'TailwindCSS',
      'HTML',
      'CSS',
    ],
    linkToProject: 'https://anon-chat-slurpeesh.vercel.app/',
  },
  {
    title: 'Skill Insight',
    getTextDescriptionKey: 'descriptionSkillInsight',
    imgSrcs: [
      img1SkillInsight,
      img2SkillInsight,
      img3SkillInsight,
      img4SkillInsight,
      img5SkillInsight,
      img6SkillInsight,
    ],
    skillNames: [
      'Electron',
      'TypeScript',
      'JavaScript',
      'React',
      'Webpack',
      'Node.JS',
      'Redux',
      'TailwindCSS',
      'HTML',
      'CSS',
    ],
    linkToProject: 'https://github.com/Slurpeesh/Skill-Insight',
  },
  {
    title: 'Interactive Card',
    getTextDescriptionKey: 'descriptionInteractiveCard',
    imgSrcs: [
      img1InteractiveCard,
      img2InteractiveCard,
      img3InteractiveCard,
      img4InteractiveCard,
      img5InteractiveCard,
    ],
    skillNames: [
      'TypeScript',
      'JavaScript',
      'React',
      'Webpack',
      'Redux',
      'TailwindCSS',
      'HTML',
      'CSS',
    ],
    linkToProject: 'https://interactive-test-details-form.vercel.app/',
  },
  {
    title: 'Sapphire',
    getTextDescriptionKey: 'descriptionSapphire',
    imgSrcs: [img1Sapphire, img2Sapphire, img3Sapphire, img4Sapphire],
    skillNames: [
      'TypeScript',
      'JavaScript',
      'React',
      'React Router',
      'Webpack',
      'Sass',
      'HTML',
      'CSS',
    ],
    linkToProject: 'https://sapphire-main.vercel.app/',
  },
  {
    title: 'DMUU',
    getTextDescriptionKey: 'descriptionDMUU',
    imgSrcs: [img1DMUU, img2DMUU, img3DMUU, img4DMUU],
    skillNames: ['JavaScript', 'HTML', 'CSS'],
    linkToProject: 'https://slurpeesh.github.io/DMUU/',
  },
  {
    title: 'NashEquilibrium',
    getTextDescriptionKey: 'descriptionNash',
    imgSrcs: [
      img1NashEquilibrium,
      img2NashEquilibrium,
      img3NashEquilibrium,
      img4NashEquilibrium,
    ],
    skillNames: ['JavaScript', 'HTML', 'CSS'],
    linkToProject: 'https://slurpeesh.github.io/Nash-equilibrium/',
  },
  {
    title: 'WeatherCheck',
    getTextDescriptionKey: 'descriptionWeatherCheck',
    imgSrcs: [img1WeatherCheck, img2WeatherCheck],
    skillNames: ['Kotlin', 'Android Studio', 'XML'],
    linkToProject: 'https://github.com/Slurpeesh/WeatherCheck',
  },
]

export default function CarouselProjects() {
  return (
    <Carousel className="h-full">
      <CarouselContent className="h-full">
        {projectList.map((project, index) => {
          return (
            <CarouselItem key={index}>
              <ProjectArticle
                getTextDescriptionKey={project.getTextDescriptionKey}
                imgSrcs={project.imgSrcs}
                portalId={index.toString()}
                skillNames={project.skillNames}
                title={project.title}
                linkToProject={project.linkToProject}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
