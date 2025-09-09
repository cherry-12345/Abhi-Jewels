'use client'

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Optimize scroll performance
    let ticking = false
    
    const updateScroll = () => {
      ticking = false
      // Add any scroll-based animations here
    }
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', requestTick)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
  
  return null
}