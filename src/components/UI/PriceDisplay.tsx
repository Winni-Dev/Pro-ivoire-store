// import { useCurrency } from '../../hooks/useCurrency'

// interface PriceDisplayProps {
//   priceXOF: number
//   priceEUR: number
//   className?: string
// }

// export function PriceDisplay({ priceXOF, priceEUR, className = '' }: PriceDisplayProps) {
//   const { formatPrice, isLoaded } = useCurrency()
  
//   if (!isLoaded) {
//     return <div className={`h-6 w-24 bg-white/10 rounded animate-pulse ${className}`} />
//   }
  
//   return (
//     <span className={`font-bold ${className}`}>
//       {formatPrice(priceXOF, priceEUR)}
//     </span>
//   )
// }

import { useCurrency } from '../../hooks/useCurrency'

interface PriceDisplayProps {
  priceXOF: number
  priceEUR: number
  className?: string
}

export function PriceDisplay({ priceXOF, priceEUR, className = '' }: PriceDisplayProps) {
  const { formatPrice, isLoaded } = useCurrency()
  
  if (!isLoaded) {
    return <div className={`h-6 w-24 bg-white/10 rounded animate-pulse ${className}`} />
  }
  
  return (
    <span className={`font-bold transition-all duration-200 ${className}`}>
      {formatPrice(priceXOF, priceEUR)}
    </span>
  )
}