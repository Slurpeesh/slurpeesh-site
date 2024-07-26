import { useAppDispatch, useAppSelector } from '@/app/hooks/useActions'
import { setDark, setLight } from '@/app/store/slices/themeSlice'
import { Moon, Sun } from 'lucide-react'

export default function ThemeButton() {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  function changeThemeHandler() {
    if (theme == 'dark') {
      dispatch(setLight())
    } else {
      dispatch(setDark())
    }
  }
  return (
    <button
      className="w-7 h-7 xs:w-10 xs:h-10 p-1 rounded-full transition-colors hover:bg-white"
      onClick={() => changeThemeHandler()}
    >
      {theme == 'light' && <Sun className="h-full w-full" />}
      {theme == 'dark' && <Moon className="h-full w-full" />}
    </button>
  )
}
