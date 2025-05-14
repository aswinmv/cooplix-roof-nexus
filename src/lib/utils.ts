
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last invocation.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  
  return function(...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

/**
 * Optimizes image loading by returning appropriate image parameters
 * based on device type and screen size
 */
export function getOptimizedImageUrl(
  baseUrl: string, 
  isMobile: boolean = false,
  options: {
    width?: number,
    height?: number,
    quality?: number
  } = {}
) {
  const width = options.width || (isMobile ? 640 : 1920)
  const quality = options.quality || (isMobile ? 60 : 80)
  const height = options.height || null
  
  let url = `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}`
  
  if (height) {
    url += `&h=${height}`
  }
  
  return url
}

/**
 * Performs shallow comparison of objects for memoization
 */
export function shallowEqual(objA: any, objB: any) {
  if (Object.is(objA, objB)) {
    return true
  }
  
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }
  
  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)
  
  if (keysA.length !== keysB.length) {
    return false
  }
  
  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false
    }
  }
  
  return true
}
