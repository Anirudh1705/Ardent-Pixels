"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedCard } from "./animated-card"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

export function ImageCarousel({ images, autoSlide = true, autoSlideInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1))
  }

  const next = () => {
    setCurrentIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1))
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  return (
    <AnimatedCard>
      <div className="relative h-full overflow-hidden rounded-xl">
        <div className="relative h-[300px] md:h-[400px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/70"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/70"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-4 bg-purple-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </AnimatedCard>
  )
}
