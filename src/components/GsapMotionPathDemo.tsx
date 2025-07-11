"use client"
import { useEffect, useRef } from "react"
// @ts-ignore
import { gsap } from "gsap"
// @ts-ignore
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)

export const GsapMotionPathDemo = () => {
  const iconRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (!iconRef.current) return
    gsap.to(iconRef.current, {
      duration: 4,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: "#motionPathDemoPath",
        align: "#motionPathDemoPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    })
  }, [])

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="text-white text-lg font-semibold mb-2">MotionPath - Ícone Animado</div>
      <svg width="220" height="120" viewBox="0 0 220 120" aria-label="MotionPath Demo" className="bg-white/5 rounded-xl">
        <path
          id="motionPathDemoPath"
          d="M20,100 Q110,10 200,100"
          fill="none"
          stroke="#38bdf8"
          strokeWidth={4}
        />
        <circle
          ref={iconRef}
          r={14}
          fill="#a21caf"
          stroke="#fff"
          strokeWidth={3}
        />
      </svg>
    </div>
  )
} 