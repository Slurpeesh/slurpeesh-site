import { ReactNode } from 'react'

interface IAnchorLink {
  className?: string
  href: string
  children?: ReactNode
}

export default function AnchorLink({ href, className, children }: IAnchorLink) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.history.pushState(null, '', href)
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
