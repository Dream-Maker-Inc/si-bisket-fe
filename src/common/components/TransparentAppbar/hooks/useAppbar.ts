import { useEffect, useState } from 'react'

export const useAppbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollMoved, setIsScrollMoved] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)

    if (position < 20) {
      setIsScrollMoved(false)
    } else {
      setIsScrollMoved(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPosition])

  return {
    isScrollMoved: isScrollMoved,
    boxShadow: isScrollMoved ? 2 : 0,
  }
}
