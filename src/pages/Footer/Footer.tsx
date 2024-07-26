import { useAppSelector } from '@/app/hooks/useActions'
import getText from '@/app/locale'
import Link from '@/entities/Link/Link'
import Section from '@/entities/Section/Section'
import { Mail } from 'lucide-react'
import GithubSvg from './svg/GithubSvg'
import TelegramSvg from './svg/TelegramSvg'
import VkSvg from './svg/VkSvg'

export default function Footer() {
  const lang = useAppSelector((state) => state.lang.value)
  return (
    <footer className="flex flex-col bg-slate-400 snap-center snap-always">
      <Section
        sectionTitle={getText(lang, 'contacts')}
        id="Contacts"
        className="pb-0"
      >
        <div className="flex justify-center gap-10 pt-10">
          <Link href="mailto:goonmate10@gmail.com" className="w-16 h-16">
            <Mail className="w-full h-full" />
          </Link>
          <Link href="https://github.com/Slurpeesh/" className="w-16 h-16">
            <GithubSvg />
          </Link>
          <Link href="https://t.me/Slurpeesh" className="w-16 h-16">
            <TelegramSvg />
          </Link>
          <Link href="https://vk.com/id180296166" className="w-16 h-16">
            <VkSvg />
          </Link>
        </div>
      </Section>
      <p className="py-12 text-center font-semibold text-xl">
        &copy; Slava Shvedko (aka Slurpeesh), {new Date().getFullYear()}
      </p>
    </footer>
  )
}
