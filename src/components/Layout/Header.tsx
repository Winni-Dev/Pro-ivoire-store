// import { Link, useLocation } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useState } from 'react'
// import { useCurrency } from '../../hooks/useCurrency'
// import clsx from 'clsx'

// export function Header() {
//   const location = useLocation()
//   const { currency, toggleCurrency, isLoaded } = useCurrency()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navLinks = [
//     { path: '/', label: 'Accueil' },
//     { path: '/catalogue', label: 'Catalogue' },
//   ]

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 border-b bg-dark/95 backdrop-blur-md border-white/10">
//       <div className="container-custom">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <Link to="/" className="relative group">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="text-2xl font-bold">
//                 <span className="text-primary">PRO</span>
//                 <span className="text-white">IVOIRE</span>
//               </span>
//               <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="items-center hidden gap-8 md:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={clsx(
//                   'relative text-sm font-medium transition-colors duration-200',
//                   location.pathname === link.path
//                     ? 'text-primary'
//                     : 'text-gray-300 hover:text-white'
//                 )}
//               >
//                 {link.label}
//                 {location.pathname === link.path && (
//                   <motion.div
//                     layoutId="activeNav"
//                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//               </Link>
//             ))}
//           </nav>

//           {/* Currency Toggle */}
//           {isLoaded && (
//             <motion.button
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               onClick={toggleCurrency}
//               className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
//             >
//               <span className={clsx(
//                 'text-sm font-medium transition-colors',
//                 currency === 'XOF' ? 'text-primary' : 'text-gray-400'
//               )}>FCFA</span>
//               <span className="text-gray-600">/</span>
//               <span className={clsx(
//                 'text-sm font-medium transition-colors',
//                 currency === 'EUR' ? 'text-primary' : 'text-gray-400'
//               )}>€</span>
//             </motion.button>
//           )}

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 rounded-lg md:hidden bg-white/5"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="py-4 border-t md:hidden border-white/10"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={clsx(
//                   'block py-3 text-base transition-colors',
//                   location.pathname === link.path
//                     ? 'text-primary'
//                     : 'text-gray-300 hover:text-white'
//                 )}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <button
//               onClick={() => {
//                 toggleCurrency()
//                 setIsMenuOpen(false)
//               }}
//               className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5"
//             >
//               <span className={clsx(
//                 'text-sm font-medium',
//                 currency === 'XOF' ? 'text-primary' : 'text-gray-400'
//               )}>FCFA</span>
//               <span className="text-gray-600">/</span>
//               <span className={clsx(
//                 'text-sm font-medium',
//                 currency === 'EUR' ? 'text-primary' : 'text-gray-400'
//               )}>€</span>
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </header>
//   )
// }


import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useCurrency } from '../../hooks/useCurrency'
import clsx from 'clsx'

export function Header() {
  const location = useLocation()
  const { currency, toggleCurrency, isLoaded } = useCurrency()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/catalogue', label: 'Catalogue' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-dark/95 backdrop-blur-md border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo avec image */}
          <Link to="/" className="relative group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <img 
                src="/favicon.png" 
                alt="Pro Ivoire Store" 
                className="w-24 h-16 md:h-20 md:w-28"
              />
              <span className="text-xl font-bold md:text-2xl">
                {/* <span className="text-primary">PRO</span>
                <span className="text-white">IVOIRE</span> */}
              </span>
            </motion.div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'relative text-sm font-medium transition-colors duration-200',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Currency Toggle - Dynamique */}
          {isLoaded && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={toggleCurrency}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <span className={clsx(
                'text-sm font-medium transition-colors duration-200',
                currency === 'XOF' ? 'text-primary' : 'text-gray-400'
              )}>FCFA</span>
              <span className="text-gray-600">/</span>
              <span className={clsx(
                'text-sm font-medium transition-colors duration-200',
                currency === 'EUR' ? 'text-primary' : 'text-gray-400'
              )}>€</span>
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg md:hidden bg-white/5"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-4 border-t md:hidden border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  'block py-3 text-base transition-colors',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            {isLoaded && (
              <button
                onClick={() => {
                  toggleCurrency()
                }}
                className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5"
              >
                <span className={clsx(
                  'text-sm font-medium transition-colors duration-200',
                  currency === 'XOF' ? 'text-primary' : 'text-gray-400'
                )}>FCFA</span>
                <span className="text-gray-600">/</span>
                <span className={clsx(
                  'text-sm font-medium transition-colors duration-200',
                  currency === 'EUR' ? 'text-primary' : 'text-gray-400'
                )}>€</span>
              </button>
            )}
          </motion.div>
        )}
      </div>
    </header>
  )
}