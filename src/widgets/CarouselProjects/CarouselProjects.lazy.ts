import { lazy } from 'react'

const LazyCarouselProjects = lazy(
  () => import('@/widgets/CarouselProjects/CarouselProjects')
)
export default LazyCarouselProjects
