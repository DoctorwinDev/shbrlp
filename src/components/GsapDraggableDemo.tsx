"use client"
import { useEffect, useRef } from "react"
// @ts-ignore
import { gsap } from "gsap"
// @ts-ignore
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)

export const GsapDraggableDemo = () => {
  const dragRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dragRef.current) return
    Draggable.create(dragRef.current, {
      type: "x,y",
      inertia: true,
      edgeResistance: 0.65,
      bounds: dragRef.current.parentElement,
      onPress() {
        gsap.to(dragRef.current, { scale: 1.1, boxShadow: "0 0 0 6px #38bdf8aa" })
      },
      onRelease() {
        gsap.to(dragRef.current, { scale: 1, boxShadow: "0 2px 16px #0004" })
      }
    })
  }, [])

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="text-white text-lg font-semibold mb-2">Draggable - Arraste o Elemento</div>
      <div className="relative w-full flex justify-center h-40">
        <div
          ref={dragRef}
          className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl cursor-grab focus:outline-none focus:ring-4 focus:ring-blue-400"
          tabIndex={0}
          aria-label="Arraste este elemento premium com GSAP Draggable"
        >
          Drag
        </div>
      </div>
    </div>
  )
} 