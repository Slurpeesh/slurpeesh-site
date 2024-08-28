import { En } from '@/app/locale/en'
import { Ru } from '@/app/locale/ru'

export type LangKeys = keyof typeof En

export type DescriptionKeys = Extract<LangKeys, `description${string}`>

export default function getText(lang: string, context: LangKeys) {
  return lang == 'en' ? En[context] : Ru[context]
}
