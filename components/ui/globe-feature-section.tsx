"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe as GlobeIcon } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function GlobeFeatureSection() {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl px-6 py-16 md:px-16 md:py-24 mb-12">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
            SoloTax: <span className="text-blue-600">Global Tax Copilot</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Stop guessing your tax bill. Calculate accurate 2025/2026 tax estimates for the US, UK, Canada, Australia, and Germany. 
            Maximize your take-home pay with our pro-level tools.
          </p>
          <Button 
            onClick={scrollToCalculator}
            className="inline-flex items-center gap-2 rounded-full px-6 py-6 text-base font-semibold transition hover:scale-105"
          >
            Start Calculating <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative h-[300px] md:h-[400px] w-full max-w-xl flex items-center justify-center">
          <Globe className="scale-125 md:scale-150" />
        </div>
      </div>
    </section>
  );
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [37 / 255, 99 / 255, 235 / 255], // Blue 600
  glowColor: [0.9, 0.9, 0.9],
  markers: [
    { location: [37.0902, -95.7129], size: 0.1 }, // US
    { location: [55.3781, -3.4360], size: 0.08 }, // UK
    { location: [56.1304, -106.3468], size: 0.08 }, // Canada
    { location: [-25.2744, 133.7751], size: 0.08 }, // Australia
    { location: [51.1657, 10.4515], size: 0.08 }, // Germany
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => globe.destroy()
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
