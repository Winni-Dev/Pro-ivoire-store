

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Star } from 'lucide-react'
import { Product } from '../../data/products'
import { PriceDisplay } from '../UI/PriceDisplay'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const defaultVariant = product.variants[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <Link to={`/produit/${product.id}`}>
        <div className="relative overflow-hidden transition-all duration-500 border rounded-2xl bg-white/5 border-white/10 hover:border-primary/30">
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-square">
            <motion.img
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              src={defaultVariant.images[0]}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            
            {/* Overlay gradient on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.6 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"
            />
            
            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="absolute flex gap-2 bottom-3 left-3 right-3"
            >
              <button className="flex-1 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-white/10 backdrop-blur-md hover:bg-primary">
                Voir détails
              </button>
            </motion.div>
          </div>
          
          {/* Info Container */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-semibold transition-colors group-hover:text-primary line-clamp-1">
                {product.name}
              </h3>
              <button className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Heart className="w-4 h-4 text-gray-400 transition-colors hover:text-primary" />
              </button>
            </div>
            
            <PriceDisplay 
              priceXOF={product.priceXOF} 
              priceEUR={product.priceEUR}
              className="text-lg font-bold text-primary"
            />
            
            {/* Couleurs disponibles */}
            <div className="flex gap-1.5 mt-3">
              {product.variants.slice(0, 4).map((variant) => (
                <div
                  key={variant.color}
                  className="w-3 h-3 rounded-full ring-1 ring-white/20"
                  style={{ backgroundColor: variant.color }}
                  title={variant.colorName}
                />
              ))}
              {product.variants.length > 4 && (
                <div className="flex items-center justify-center w-3 h-3 rounded-full bg-white/20">
                  <span className="text-[8px] text-white">+{product.variants.length - 4}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Badge populaire */}
          {product.popular && (
            <div className="absolute top-3 left-3">
              <div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-white rounded-full bg-primary">
                <Star className="w-3 h-3 fill-current" />
                <span>Populaire</span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
