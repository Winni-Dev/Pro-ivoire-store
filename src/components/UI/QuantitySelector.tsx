import { motion } from 'framer-motion'

interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">Quantité</label>
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDecrease}
          className="w-10 h-10 font-bold text-white transition-colors rounded-lg bg-white/10 hover:bg-white/20"
        >
          -
        </motion.button>
        <span className="w-12 text-xl font-semibold text-center">{quantity}</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onIncrease}
          className="w-10 h-10 font-bold text-white transition-colors rounded-lg bg-white/10 hover:bg-white/20"
        >
          +
        </motion.button>
      </div>
    </div>
  )
}