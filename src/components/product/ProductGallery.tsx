import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div className="space-y-4">
      {/* Main Image Swiper */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="overflow-hidden rounded-2xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={image}
              alt={`${productName} - ${index + 1}`}
              className="object-cover w-full aspect-square"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
          freeMode
          watchSlidesProgress
          slidesPerView={4}
          spaceBetween={10}
          className="product-thumbs"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="transition-opacity rounded-lg cursor-pointer opacity-60 hover:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}