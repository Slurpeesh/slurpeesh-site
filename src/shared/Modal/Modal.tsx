import { useAppDispatch } from '@/app/hooks/useActions'
import { setModal } from '@/app/store/slices/modalSlice'
import { X } from 'lucide-react'
import { ReactNode, useEffect } from 'react'

interface IModal {
  children: ReactNode
  className?: string
}

export default function Modal({ className, children }: IModal) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    function escapeHandler(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        dispatch(setModal(null))
      }
    }
    addEventListener('keyup', escapeHandler)
    return () => {
      removeEventListener('keyup', escapeHandler)
    }
  }, [dispatch])

  function onHideModal() {
    dispatch(setModal(null))
  }
  return (
    <div
      className="absolute z-50 top-0 left-0 w-dvw h-dvh flex justify-center items-center bg-background/80 text-foreground"
      onClick={() => onHideModal()}
    >
      <button
        className="absolute top-5 right-5 md:right-10"
        onClick={() => onHideModal()}
      >
        <X className="w-10 h-10 hover:stroke-accent-hover transition-colors" />
      </button>
      <div className={className} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
