import { gsap, Expo } from 'gsap'
import React, { useCallback, useLayoutEffect, useRef } from 'react'
import useInstance from '../hooks/useInstance'
import useTicker from '../hooks/useTicker'

const CursorFollow = ({ img }) => {
  const getScale = (diffX, diffY) => {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
    return Math.min(distance / 735, 0.35)
  }

  const getAngle = (diffX, diffY) => {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI
  }

  const jellyRef = useRef(null)
  const textRef = useRef(null)

  const pos = useInstance(() => ({ x: 0, y: 0 }))
  const vel = useInstance(() => ({ x: 0, y: 0 }))
  const set = useInstance()

  // Set GSAP quick setter Values on useLayoutEffect Update
  useLayoutEffect(() => {
    set.x = gsap.quickSetter(jellyRef.current, 'x', 'px')
    set.y = gsap.quickSetter(jellyRef.current, 'y', 'px')
    set.r = gsap.quickSetter(jellyRef.current, 'rotate', 'deg')
    set.sx = gsap.quickSetter(jellyRef.current, 'scaleX')
    set.sy = gsap.quickSetter(jellyRef.current, 'scaleY')
    set.width = gsap.quickSetter(jellyRef.current, 'width', 'px')
    set.rt = gsap.quickSetter(textRef.current, 'rotate', 'deg')
  }, [])

  // Start Animation loop
  const loop = useCallback(() => {
    // Calculate angle and scale based on velocity
    var rotation = getAngle(vel.x, vel.y) // Mouse Move Angle
    var scale = getScale(vel.x, vel.y) // Blob Squeeze Amount
    // Set GSAP quick setter Values on Loop Function
    set.x(pos.x)
    set.y(pos.y)
    set.width(100 + scale * 150)
    set.r(rotation)
    set.sx(1 + scale)
    set.sy(1 - scale)
    set.rt(-rotation)
  }, [])

  // Run on Mouse Move
  useLayoutEffect(() => {
    // Caluclate Everything Function
    const setFromEvent = (e) => {
      // Mouse X and Y
      const x = e.clientX
      const y = e.clientY

      // Animate Position and calculate Velocity with GSAP
      gsap.to(pos, {
        x: x,
        y: y,
        duration: 1.25,
        ease: Expo.easeOut,
        onUpdate: () => {
          vel.x = x - pos.x
          vel.y = y - pos.y
        },
      })

      loop()
    }

    window.addEventListener('mousemove', setFromEvent)
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  useTicker(loop)

  return (
    <div ref={jellyRef} id={'jelly-id'} className="jelly-blob">
      <div ref={textRef} id={'text-id'} className="inside-text">
        {img && <img className="jelly-img" src={img} alt="not found" />}
      </div>
    </div>
  )
}

export default CursorFollow
