import { useAppSelector } from '@/app/hooks/useActions'
import getText from '@/app/locale'
import AnchorLink from '@/shared/AnchorLink/AnchorLink'

const links = ['about', 'skills', 'projects', 'contacts'] as const

export default function Navbar() {
  const lang = useAppSelector((state) => state.lang.value)
  return (
    <nav className="hidden sm:block">
      <ul className="flex justify-center gap-5 md:gap-20">
        {links.map((value, index) => {
          return (
            <li key={index}>
              <AnchorLink
                className="hover:underline hover:underline-offset-4"
                href={value == 'about' ? '#top' : `#${value}`}
              >
                {getText(lang, value)}
              </AnchorLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
