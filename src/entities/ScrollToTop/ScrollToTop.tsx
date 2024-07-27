import AnchorLink from '@/shared/AnchorLink/AnchorLink'
import { ChevronUp } from 'lucide-react'

interface IScrollToTop {
  className?: string
}

export default function ScrollToTop({ className }: IScrollToTop) {
  return (
    <AnchorLink
      href="#about"
      className={
        'absolute bottom-5 right-10 w-10 h-10 p-1 rounded-full transition-opacity bg-accent hover:bg-accent-hover' +
        ' ' +
        className
      }
    >
      <ChevronUp className="w-full h-full" />
    </AnchorLink>
  )
}
