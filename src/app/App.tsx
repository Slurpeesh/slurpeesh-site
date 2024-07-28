import ScrollToTop from '@/entities/ScrollToTop/ScrollToTop'
import Footer from '@/pages/Footer/Footer'
import Header from '@/pages/Header/Header'
import Main from '@/pages/Main/Main'
import { useRef } from 'react'
import Snowfall from 'react-snowfall'
import { useAppSelector } from './hooks/useActions'

export default function App() {
  const showBackToTop = useAppSelector((state) => state.showBackToTop.value)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const theme = useAppSelector((state) => state.theme.value)

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory bg-background text-foreground"
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
