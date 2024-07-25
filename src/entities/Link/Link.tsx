import { ReactNode } from 'react'

interface ILink {
  href: string
  children: ReactNode
  className?: string
}

export default function Link({ href, className, children }: ILink) {
  return (
    <a href={href} target="_blank" className={className}>
      {children}
    </a>
  )
}
