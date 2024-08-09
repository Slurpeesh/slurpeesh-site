import { useAppDispatch, useAppSelector } from '@/app/hooks/useActions'
import { cn } from '@/app/lib/utils'
import { setModal } from '@/app/store/slices/modalSlice'
import Modal from '@/shared/Modal/Modal'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../Carousel/Carousel'

interface IGallery {
  imageSrcs: Array<string>
  portalId: string
}

export default function Gallery({ imageSrcs, portalId }: IGallery) {
  const [api, setApi] = useState<CarouselApi>()
  const modal = useAppSelector((state) => state.modal.value)
  const dispatch = useAppDispatch()
  const chosenIndex = useRef(0)

  const breakpointTo3Cols = 4

  useEffect(() => {
    if (!api) return
    api.scrollTo(chosenIndex.current, true)
  }, [api])

  function handler(e: MouseEvent<HTMLButtonElement>) {
    chosenIndex.current = Number(e.currentTarget.getAttribute('data-key'))
    dispatch(setModal(portalId))
  }

  return (
    <>
      <div
        className={cn('h-full w-full flex lg:grid gap-1 grid-cols-2', {
          'grid-cols-3': imageSrcs.length > breakpointTo3Cols,
        })}
      >
        {imageSrcs.map((src, index, arr) => {
          return (
            <button
              key={index}
              data-key={index}
              className={cn(
                'relative w-full h-full rounded-lg overflow-hidden',
                {
                  'col-span-2':
                    (arr.length <= breakpointTo3Cols &&
                      index === arr.length - 1 &&
                      arr.length % 2 === 1) ||
                    (arr.length > breakpointTo3Cols &&
                      index === arr.length - 1 &&
                      arr.length % 3 === 2),
                  'col-span-3':
                    arr.length > breakpointTo3Cols &&
                    index == arr.length - 1 &&
                    arr.length % 3 === 1,
                }
              )}
              onClick={(e) => handler(e)}
            >
              <div
                className="absolute right-0 top-0 h-full w-full bg-cover bg-left scale-110 hover:scale-100 transition-transform"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </button>
          )
        })}
      </div>
      {modal === portalId &&
        createPortal(
          <Modal key={portalId} className="w-2/3">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {imageSrcs.map((src, index) => (
                  <CarouselItem
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <div className="relative h-[400px] sm:h-[500px] w-[900px]">
                      <div
                        className="absolute h-full w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${src})` }}
                      ></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-10" />
              <CarouselNext className="mr-10" />
            </Carousel>
          </Modal>,
          document.body,
          portalId
        )}
    </>
  )
}
