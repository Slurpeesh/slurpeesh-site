import { ReactNode } from 'react'

interface ISkillCard {
  children: ReactNode
  className?: string
}

export default function SkillCard({ className, children }: ISkillCard) {
  return (
    <div className={'p-4 rounded-xl bg-red-500 w-32' + ' ' + className}>
      {children}
    </div>
  )
}
