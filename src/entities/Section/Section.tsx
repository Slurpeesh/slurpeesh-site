import { ReactNode } from 'react'

interface ISection {
  sectionTitle: string
  children: ReactNode
  id: string
  className?: string
}

export default function Section({
  sectionTitle,
  id,
  children,
  className,
}: ISection) {
  return (
    <section className={'p-5' + ' ' + className} id={id.toLowerCase()}>
      {sectionTitle != 'About' && (
        <header className="relative z-10 text-center text-3xl font-bold mb-5">
          <h2>{sectionTitle}</h2>
        </header>
      )}

      {children}
    </section>
  )
}
