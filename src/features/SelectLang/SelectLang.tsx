import { useAppDispatch, useAppSelector } from '@/app/hooks/useActions'
import { setEn, setRu } from '@/app/store/slices/langSlice'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/Select/Select'

export default function SelectLang() {
  const lang = useAppSelector((state) => state.lang.value)
  const dispatch = useAppDispatch()

  function langChangeHandler(value: string) {
    if (value == 'en') {
      dispatch(setEn())
    } else {
      dispatch(setRu())
    }
  }

  return (
    <Select value={lang} onValueChange={(value) => langChangeHandler(value)}>
      <SelectTrigger className="w-20">
        <SelectValue placeholder="Select lang" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ru">RU</SelectItem>
      </SelectContent>
    </Select>
  )
}
