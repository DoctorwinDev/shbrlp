"use client"
import { useEffect, useRef } from "react"
// @ts-ignore
import { gsap } from "gsap"
// @ts-ignore
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
// @ts-ignore
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin)

export const GsapSvgMorphDrawDemo = () => {
  const morphRef = useRef<SVGPathElement>(null)
  const drawRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    // MorphSVG: anima de um path para outro
    if (morphRef.current) {
      gsap.to(morphRef.current, {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        morphSVG: {
          shape: "#morphTarget"
        }
      })
    }
    // DrawSVG: desenha o path
    if (drawRef.current) {
      gsap.fromTo(drawRef.current, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "0% 100%",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
      {/* MorphSVG */}
      <svg width="120" height="120" viewBox="0 0 120 120" aria-label="MorphSVG Demo" className="bg-white/5 rounded-xl">
        <path
          ref={morphRef}
          d="M60,10 L110,110 L10,110 Z"
          fill="#38bdf8"
        />
        <path
          id="morphTarget"
          d="M60,60 Q110,10 110,110 Q60,90 10,110 Q10,10 60,60 Z"
          fill="#a21caf"
          opacity={0.3}
        />
      </svg>
      {/* DrawSVG */}
      <svg width="120" height="120" viewBox="0 0 120 120" aria-label="DrawSVG Demo" className="bg-white/5 rounded-xl">
        <path
          ref={drawRef}
          d="M20,60 Q60,10 100,60 Q60,110 20,60 Z"
          fill="none"
          stroke="#f59e42"
          strokeWidth={6}
        />
      </svg>
    </div>
  )
} 