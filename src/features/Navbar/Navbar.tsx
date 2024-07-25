import AnchorLink from '@/shared/AnchorLink/AnchorLink'

const links = ['About', 'Skills', 'Projects', 'Contacts']

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center gap-20">
        {links.map((value, index) => {
          return (
            <li key={index}>
              <AnchorLink
                className="hover:underline hover:underline-offset-4"
                href={value == 'About' ? '#top' : `#${value.toLowerCase()}`}
              >
                {value}
              </AnchorLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
