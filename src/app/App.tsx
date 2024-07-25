import ScrollToTop from '@/entities/ScrollToTop/ScrollToTop'
import Footer from '@/pages/Footer/Footer'
import Header from '@/pages/Header/Header'
import Main from '@/pages/Main/Main'
import { useEffect, useRef, useState } from 'react'
import { throttle } from './lib/utils'

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = throttle(() => {
    const firstSectionHeight =
      document.getElementById('about')?.offsetHeight || 0
    const scrollTop = scrollContainerRef.current?.scrollTop || 0
    console.log(
      `ScrollTop: ${scrollTop}, FirstSectionHeight: ${firstSectionHeight}`
    )
    if (scrollTop > firstSectionHeight) {
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }
  }, 600)
  console.log(showBackToTop)

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
      className="px-20 h-screen overflow-y-auto snap-y snap-mandatory"
    >
      <Header />
      <Main />
      <Footer />
      {showBackToTop ? (
        <ScrollToTop className="opacity-100" />
      ) : (
        <ScrollToTop className="opacity-0 invisible" />
      )}
    </div>
  )
}
