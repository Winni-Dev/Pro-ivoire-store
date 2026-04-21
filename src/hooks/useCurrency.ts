import { createContext, createElement, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Currency = 'XOF' | 'EUR'

export interface CurrencyContextValue {
  currency: Currency
  toggleCurrency: () => void
  formatPrice: (priceXOF: number, priceEUR: number) => string
  getRawPrice: (priceXOF: number, priceEUR: number) => number
  isLoaded: boolean
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('XOF')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency') as Currency
    if (savedCurrency === 'XOF' || savedCurrency === 'EUR') {
      setCurrency(savedCurrency)
    } else {
      // Définit le Franc CFA comme devise par défaut pour tous les nouveaux visiteurs
      setCurrency('XOF')
    }
    setIsLoaded(true)
  }, [])

  const toggleCurrency = () => {
    setCurrency((currentCurrency) => {
      const newCurrency = currentCurrency === 'XOF' ? 'EUR' : 'XOF'
      localStorage.setItem('currency', newCurrency)
      return newCurrency
    })
  }

  const formatPrice = (priceXOF: number, priceEUR: number) => {
    if (currency === 'XOF') {
      return `${priceXOF.toLocaleString()} FCFA`
    }
    return `${priceEUR} €`
  }

  const getRawPrice = (priceXOF: number, priceEUR: number) => {
    return currency === 'XOF' ? priceXOF : priceEUR
  }

  const value = useMemo(
    () => ({ currency, toggleCurrency, formatPrice, getRawPrice, isLoaded }),
    [currency, isLoaded]
  )

  return createElement(CurrencyContext.Provider, { value }, children)
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used inside a CurrencyProvider')
  }

  return context
}
