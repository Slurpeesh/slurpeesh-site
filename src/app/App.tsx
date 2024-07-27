import ScrollToTop from '@/entities/ScrollToTop/ScrollToTop'
import Footer from '@/pages/Footer/Footer'
import Header from '@/pages/Header/Header'
import Main from '@/pages/Main/Main'
import { useEffect, useRef, useState } from 'react'
import { Snowfall } from 'react-snowfall'
import { useAppSelector } from './hooks/useActions'
import { throttle } from './lib/utils'

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const theme = useAppSelector((state) => state.theme.value)

  const handleScroll = throttle(() => {
    const firstSectionHeight =
      document.getElementById('about')?.offsetHeight || 0
    const scrollTop = scrollContainerRef.current?.scrollTop || 0

    if (scrollTop > firstSectionHeight) {
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }
  }, 600)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div
      ref={scrollContainerRef}
      className="px-5 md:px-10 lg:px-20 h-screen overflow-y-auto snap-y snap-mandatory bg-background text-foreground"
    >
      <Header />
      <Main />
      <Footer />
      {theme == 'ice' && <Snowfall wind={[7.0, 15.0]} />}

      {showBackToTop ? (
        <ScrollToTop className="opacity-100" />
      ) : (
        <ScrollToTop className="opacity-0 invisible" />
      )}
    </div>
  )
}
