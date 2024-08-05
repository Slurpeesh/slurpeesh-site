import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/entities/Carousel/Carousel'
import AnonChatArticle from '@/features/AnonChatArticle/AnonChatArticle'
import DMUUArticle from '@/features/DMUUArticle/DMUUArticle'
import NashEquilibriumArticle from '@/features/NashEquilibriumArticle/NashEquilibriumArticle'
import SapphireArticle from '@/features/SapphireArticle/SapphireArticle'
import SkillInsightArticle from '@/features/SkillInsightArticle/SkillInsightArticle'
import WeatherCheckArticle from '@/features/WeatherCheckArticle/WeatherCheckArticle'

export default function CarouselProjects() {
  return (
    <Carousel className="h-full">
      <CarouselContent className="h-full">
        <CarouselItem>
          <AnonChatArticle />
        </CarouselItem>
        <CarouselItem>
          <SkillInsightArticle />
        </CarouselItem>
        <CarouselItem>
          <SapphireArticle />
        </CarouselItem>
        <CarouselItem>
          <DMUUArticle />
        </CarouselItem>
        <CarouselItem>
          <NashEquilibriumArticle />
        </CarouselItem>
        <CarouselItem>
          <WeatherCheckArticle />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
