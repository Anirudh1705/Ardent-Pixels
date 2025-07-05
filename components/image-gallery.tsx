"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatedCard } from "./animated-card"
import { X } from "lucide-react"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  columns?: 2 | 3 | 4
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const getColumnClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    }
  }

  return (
    <>
      <div className={`grid gap-4 ${getColumnClass()}`}>
        {images.map((image, index) => (
          <AnimatedCard key={index} delay={0.1 * index}>
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-48 w-full sm:h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"></div>
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
          <button
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition-colors duration-300 hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[80vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[60vh] w-full max-w-[1200px]">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            {images[selectedImage].caption && (
              <div className="mt-2 text-center text-white">
                <p>{images[selectedImage].caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
