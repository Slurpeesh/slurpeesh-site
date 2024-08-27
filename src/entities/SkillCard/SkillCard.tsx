import { motion } from 'framer-motion'
import { forwardRef, LegacyRef, ReactNode } from 'react'

interface ISkillCard {
  children: ReactNode
  className?: string
}

const SkillCard = motion(
  forwardRef(function SkillCard(
    { className, children }: ISkillCard,
    ref: LegacyRef<HTMLDivElement>
  ) {
    return (
      <div ref={ref} className={'p-2 lg:p-4 rounded-xl' + ' ' + className}>
        {children}
      </div>
    )
  })
)

export default SkillCard
