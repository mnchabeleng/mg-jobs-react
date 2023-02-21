import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollRestoration() {
  const { pathname } = useLocation()
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos({ x: window.scrollX, y: window.scrollY })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(scrollPos.x, scrollPos.y)
  }, [pathname, scrollPos])

  return null
}