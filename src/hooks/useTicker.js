import { gsap } from 'gsap'
import React from 'react'

const useTicker = (callback, paused) => {
  React.useLayoutEffect(() => {
    if (!paused && callback) gsap.ticker.add(callback)
    return () => gsap.ticker.remove(callback)
  }, [callback, paused])
}

export default useTicker
