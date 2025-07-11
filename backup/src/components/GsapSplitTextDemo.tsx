"use client"
import { useEffect, useRef } from "react"
// @ts-ignore
import { gsap } from "gsap"
// @ts-ignore
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText)

export const GsapSplitTextDemo = () => {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textRef.current) return
    // SplitText anima cada caractere
    const split = new SplitText(textRef.current, { type: "chars,words" })
    gsap.from(split.chars, {
      y: 80,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out"
    })
    return () => {
      split.revert && split.revert()
    }
  }, [])

  return (
    <h3
      ref={textRef}
      className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-10"
      tabIndex={0}
      aria-label="Demonstração de animação cinematográfica de texto com GSAP SplitText"
    >
      Experiência Cinematográfica GSAP SplitText
    </h3>
  )
} 