import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/entities/Carousel/Carousel'
import AnonChatArticle from '@/features/AnonChatArticle/AnonChatArticle'
import DMUUArticle from '@/features/DMUUArticle/DMUUArticle'
import GuessWhoWar3Article from '@/features/GuessWhoWar3Article/GuessWhoWar3Article'
import InteractiveCardArticle from '@/features/InteractiveCardArticle/InteractiveCardArticle'
import NashEquilibriumArticle from '@/features/NashEquilibriumArticle/NashEquilibriumArticle'
import SapphireArticle from '@/features/SapphireArticle/SapphireArticle'
import SkillInsightArticle from '@/features/SkillInsightArticle/SkillInsightArticle'
import WeatherCheckArticle from '@/features/WeatherCheckArticle/WeatherCheckArticle'

export default function CarouselProjects() {
  return (
    <Carousel className="h-full">
      <CarouselContent className="h-full">
        <CarouselItem>
          <GuessWhoWar3Article
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
        <CarouselItem>
          <AnonChatArticle
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
        <CarouselItem>
          <SkillInsightArticle
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
        <CarouselItem>
          <InteractiveCardArticle
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
        <CarouselItem>
          <SapphireArticle
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
        <CarouselItem>
          <DMUUArticle
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
        <CarouselItem>
          <NashEquilibriumArticle
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
        <CarouselItem>
          <WeatherCheckArticle
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
