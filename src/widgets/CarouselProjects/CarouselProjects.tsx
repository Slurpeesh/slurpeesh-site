import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/entities/Carousel/Carousel'
import DMUUArticle from '@/features/DMUUArticle/DMUUArticle'
import NashEquilibriumArticle from '@/features/NashEquilibriumArticle/NashEquilibriumArticle'
import SapphireArticle from '@/features/SapphireArticle/SapphireArticle'
import SkillInsightArticle from '@/features/SkillInsightArticle/SkillInsightArticle'
import WeatherCheckArticle from '@/features/WeatherCheckArticle/WeatherCheckArticle'

export default function CarouselProjects() {
  return (
    <Carousel>
      <CarouselContent>
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
