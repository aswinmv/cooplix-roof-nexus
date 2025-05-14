
import { useState, useEffect, useCallback } from "react"

const MOBILE_BREAKPOINT = 768
// Added debounce delay to improve performance during resize events
const RESIZE_DEBOUNCE_DELAY = 100

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  // Using debounced resize handler for better performance
  useEffect(() => {
    let debounceTimeout: ReturnType<typeof setTimeout> | null = null
    
    // Function to check if the window is mobile-sized with debounce
    const handleResize = () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
      
      debounceTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }, RESIZE_DEBOUNCE_DELAY)
    }
    
    // Check immediately on component mount
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Set up event listener for window resize
    window.addEventListener("resize", handleResize, { passive: true })
    
    // Clean up event listener and any pending timeout
    return () => {
      window.removeEventListener("resize", handleResize)
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
    }
  }, [])

  return isMobile
}
