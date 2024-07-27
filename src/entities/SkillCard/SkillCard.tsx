import { ReactNode } from 'react'

interface ISkillCard {
  children: ReactNode
  className?: string
}

export default function SkillCard({ className, children }: ISkillCard) {
  return (
    <div className={'p-2 lg:p-4 rounded-xl' + ' ' + className}>{children}</div>
  )
}
