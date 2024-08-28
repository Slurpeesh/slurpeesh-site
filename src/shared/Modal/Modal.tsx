import { useAppDispatch } from '@/app/hooks/useActions'
import { setModal } from '@/app/store/slices/modalSlice'
import FocusTrap from 'focus-trap-react'
import { X } from 'lucide-react'
import { MutableRefObject, ReactNode, useEffect, useRef } from 'react'

interface IModal {
  children: ReactNode
  className?: string
}

export default function Modal({ className, children }: IModal) {
  const dispatch = useAppDispatch()
  const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        dispatch(setModal(null))
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [dispatch])

  function onHideModal() {
    dispatch(setModal(null))
  }

  return (
    <FocusTrap
      active
      focusTrapOptions={{
        onDeactivate: () => modalRef.current?.focus(),
      }}
    >
      <div
        aria-modal="true"
        role="dialog"
        ref={modalRef}
        tabIndex={-1}
        className="fixed z-50 top-0 left-0 w-dvw h-dvh flex justify-center items-center bg-background/80 text-foreground"
        onClick={onHideModal}
      >
        <button
          className="absolute top-5 right-5 md:right-10"
          onClick={onHideModal}
        >
          <X className="w-10 h-10 hover:stroke-accent-hover transition-colors" />
        </button>
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </FocusTrap>
  )
}
