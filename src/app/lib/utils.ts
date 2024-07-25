import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function throttle(callback: Function, timeout: number) {
  let timer: NodeJS.Timeout = null

  return function perform(...args: any[]) {
    if (timer) return

    timer = setTimeout(() => {
      callback(...args)
      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}
