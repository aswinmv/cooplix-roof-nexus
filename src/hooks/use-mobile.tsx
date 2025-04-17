
import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Function to check if the window is mobile-sized
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check immediately on component mount
    checkIfMobile()
    
    // Set up event listener for window resize
    window.addEventListener("resize", checkIfMobile)
    
    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}
