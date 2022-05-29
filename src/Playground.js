import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

export default function Home() {
  let tl = gsap.timeline()
  let cursor = useRef(null)
  let posX = 0
  let posY = 0
  let mouseX = 0
  let mouseY = 0

  useEffect(() => {
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 10
        posY += (mouseY - posY) / 10
        tl.set(cursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        })
      },
    })
    document.addEventListener('mousemove', (e) => {
      mouseX = e.pageX
      mouseY = e.pageY
    })
  }, [])
  return (
    <div>
      {' '}
      <div className="content">
        <h1>Savage</h1>
        <h1>Shady</h1>
        <h1>Sensitive</h1>
        <Link to="/xy">XY</Link>
        <div className="cursor-follow" ref={(el) => (cursor = el)}></div>
      </div>
    </div>
  )
}
