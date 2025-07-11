"use client"
import { useEffect, useRef } from "react"
// @ts-ignore
import { gsap } from "gsap"
// @ts-ignore
import { ScrollSmoother } from "gsap/ScrollSmoother"
// @ts-ignore
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export const GsapScrollSmootherDemo = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return
    // Inicializa ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true
    })
    // Parallax simples
    gsap.to("#parallax-gsap", {
      yPercent: 30,
      scrollTrigger: {
        trigger: "#parallax-gsap",
        start: "top bottom",
        scrub: true
      }
    })
    return () => {
      smoother.kill && smoother.kill()
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative overflow-hidden rounded-2xl mb-10 border border-blue-500/30">
      <div ref={contentRef} className="relative min-h-[300px] bg-gradient-to-br from-blue-900 via-black to-purple-900 p-10">
        <div className="text-center text-white text-xl font-semibold mb-6">ScrollSmoother + Parallax</div>
        <div id="parallax-gsap" className="w-full h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl font-bold text-black shadow-lg">
          Parallax Premium GSAP
        </div>
        <div className="h-32" />
      </div>
    </div>
  )
} 