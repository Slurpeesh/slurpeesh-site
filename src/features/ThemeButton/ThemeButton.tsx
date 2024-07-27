import { useAppDispatch, useAppSelector } from '@/app/hooks/useActions'
import { setDark, setIce, setLight } from '@/app/store/slices/themeSlice'
import { Moon, MountainSnow, Sun } from 'lucide-react'

export default function ThemeButton() {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  function changeThemeHandler() {
    switch (theme) {
      case 'dark':
        dispatch(setIce())
        return
      case 'ice':
        dispatch(setLight())
        return
      default:
        dispatch(setDark())
    }
  }
  return (
    <button
      className="w-10 h-10 p-1 rounded-full transition-colors hover:bg-muted"
      onClick={() => changeThemeHandler()}
    >
      {theme == 'light' && <Sun className="h-full w-full" />}
      {theme == 'dark' && <Moon className="h-full w-full" />}
      {theme == 'ice' && <MountainSnow className="h-full w-full" />}
    </button>
  )
}
