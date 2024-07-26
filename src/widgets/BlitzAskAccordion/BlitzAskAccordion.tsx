import { useAppSelector } from '@/app/hooks/useActions'
import getText from '@/app/locale'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/Accordion/Accordion'

interface IBlitzAskAccordion {
  className?: string
}

export default function BlitzAskAccordion({ className }: IBlitzAskAccordion) {
  const lang = useAppSelector((state) => state.lang.value)
  return (
    <Accordion className={className} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p>{getText(lang, 'questionWhySlurpeesh')}</p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="lg:text-base">{getText(lang, 'answerWhySlurpeesh')}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p>{getText(lang, 'questionWhereAreYouFrom')}</p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="lg:text-base">
            {getText(lang, 'answerWhereAreYouFrom')}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <p>{getText(lang, 'questionHowDidYouStartLearningProgramming')}</p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="lg:text-base">
            {getText(lang, 'answerHowDidYouStartLearningProgramming')}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <p>{getText(lang, 'questionWhyWebDev')}</p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="lg:text-base">{getText(lang, 'answerWhyWebDev')}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <p>{getText(lang, 'questionDoYouHaveHobbies')}</p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="lg:text-base">
            {getText(lang, 'answerDoYouHaveHobbies')}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
