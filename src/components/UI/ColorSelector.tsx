import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ColorSelectorProps {
  colors: string[]
  selectedColor: string
  onSelect: (color: string) => void
}

const colorNames: Record<string, string> = {
  '#FF6B00': 'Orange',
  '#009E60': 'Vert',
  '#FFFFFF': 'Blanc',
  '#0B0B0B': 'Noir',
}

export function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        Couleur : <span className="text-primary">{colorNames[selectedColor]}</span>
      </label>
      <div className="flex gap-3">
        {colors.map((color) => (
          <motion.button
            key={color}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(color)}
            className={clsx(
              'w-10 h-10 rounded-full transition-all duration-200',
              selectedColor === color && 'ring-2 ring-white ring-offset-2 ring-offset-dark'
            )}
            style={{ backgroundColor: color, border: color === '#FFFFFF' ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
          />
        ))}
      </div>
    </div>
  )
}