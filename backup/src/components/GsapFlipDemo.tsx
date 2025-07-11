"use client"
import { useRef, useState } from "react"
// @ts-ignore
import { gsap } from "gsap"
// @ts-ignore
import { Flip } from "gsap/Flip"
gsap.registerPlugin(Flip)

const cardsData = [
  { id: 1, label: "Card 1", color: "bg-blue-500" },
  { id: 2, label: "Card 2", color: "bg-green-500" },
  { id: 3, label: "Card 3", color: "bg-purple-500" },
]

export const GsapFlipDemo = () => {
  const [order, setOrder] = useState([0, 1, 2])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleShuffle = () => {
    if (!containerRef.current) return
    const state = Flip.getState(containerRef.current.querySelectorAll(".flip-card"))
    setOrder((prev) => [...prev].reverse())
    setTimeout(() => {
      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        absolute: true,
        stagger: 0.1
      })
    }, 0)
  }

  return (
    <div className="mb-10">
      <div className="flex justify-center mb-4">
        <button
          onClick={handleShuffle}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold shadow-lg hover:scale-105 transition"
          aria-label="Embaralhar cards com animação FLIP"
        >
          Embaralhar Cards (FLIP)
        </button>
      </div>
      <div ref={containerRef} className="flex gap-6 justify-center">
        {order.map((idx) => (
          <div
            key={cardsData[idx].id}
            className={`flip-card w-32 h-32 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-xl ${cardsData[idx].color}`}
            tabIndex={0}
            aria-label={`Card ${cardsData[idx].label}`}
          >
            {cardsData[idx].label}
          </div>
        ))}
      </div>
    </div>
  )
} 