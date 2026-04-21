import { motion } from 'framer-motion'
import clsx from 'clsx'

interface SizeSelectorProps {
  sizes: string[]
  selectedSize: string
  onSelect: (size: string) => void
}

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        Taille : <span className="text-primary">{selectedSize}</span>
      </label>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <motion.button
            key={size}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(size)}
            className={clsx(
              'w-12 h-12 rounded-lg font-semibold transition-all duration-200',
              selectedSize === size
                ? 'bg-primary text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            )}
          >
            {size}
          </motion.button>
        ))}
      </div>
    </div>
  )
}