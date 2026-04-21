

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   Grid3x3, 
//   LayoutGrid, 
//   Filter, 
//   ChevronDown, 
//   X,
//   Shirt,
//   Sparkles,
//   TrendingUp,
//   Clock,
//   Star,
//   ArrowRight
// } from 'lucide-react'
// import { ProductCard } from '../components/Product/ProductCard'
// import { products, Product } from '../data/products'

// export function Catalogue() {
//   const [selectedCategory, setSelectedCategory] = useState<string>('all')
//   const [isFilterOpen, setIsFilterOpen] = useState(false)
//   const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price-asc' | 'price-desc'>('popular')
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  
//   const categories = [
//     { id: 'all', label: 'Tous les produits', icon: LayoutGrid, count: products.length },
//     { id: 't-shirt', label: 'T-shirts', icon: Shirt, count: products.filter(p => p.category === 't-shirt').length },
//     { id: 'polo', label: 'Polos', icon: Sparkles, count: products.filter(p => p.category === 'polo').length },
//   ]
  
//   const sortOptions = [
//     { id: 'popular', label: 'Les plus populaires', icon: TrendingUp },
//     { id: 'newest', label: 'Nouveautés', icon: Clock },
//     { id: 'price-asc', label: 'Prix croissant', icon: null },
//     { id: 'price-desc', label: 'Prix décroissant', icon: null },
//   ]
  
//   useEffect(() => {
//     let result = [...products]
    
//     // Filter by category
//     if (selectedCategory !== 'all') {
//       result = result.filter(p => p.category === selectedCategory)
//     }
    
//     // Sort products
//     switch (sortBy) {
//       case 'popular':
//         result = result.filter(p => p.popular).concat(result.filter(p => !p.popular))
//         break
//       case 'price-asc':
//         result.sort((a, b) => a.priceXOF - b.priceXOF)
//         break
//       case 'price-desc':
//         result.sort((a, b) => b.priceXOF - a.priceXOF)
//         break
//       case 'newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//     }
    
//     setFilteredProducts(result)
//   }, [selectedCategory, sortBy])
  
//   const clearFilters = () => {
//     setSelectedCategory('all')
//     setSortBy('popular')
//   }
  
//   const hasActiveFilters = selectedCategory !== 'all' || sortBy !== 'popular'

//   return (
//     <div className="pt-20 pb-16 md:pt-24 bg-dark">
//       <div className="container-custom">
//         {/* Header - Premium & Épuré */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10">
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-xs font-semibold tracking-wider uppercase text-primary">Collection 2024</span>
//             </div>
//             <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
//               Notre <span className="text-primary">collection</span>
//             </h1>
//             <p className="text-lg text-gray-400">
//               Découvrez une sélection exclusive de t-shirts et polos d'exception,
//               conçus pour révéler votre élégance naturelle.
//             </p>
//           </div>
//         </motion.div>
        
//         {/* Filters Bar - Moderne & Aéré */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="mb-8"
//         >
//           {/* Categories - Pills élégantes */}
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {categories.map((category) => {
//               const Icon = category.icon
//               const isActive = selectedCategory === category.id
//               return (
//                 <motion.button
//                   key={category.id}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`group relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
//                     isActive
//                       ? 'bg-primary text-white shadow-lg shadow-primary/25'
//                       : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
//                   }`}
//                 >
//                   <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
//                   <span>{category.label}</span>
//                   <span className={`text-xs px-1.5 py-0.5 rounded-full ${
//                     isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
//                   }`}>
//                     {category.count}
//                   </span>
//                 </motion.button>
//               )
//             })}
//           </div>
          
//           {/* Sort & Filter Row */}
//           <div className="flex flex-col items-center justify-between gap-4 py-4 border-t border-b sm:flex-row border-white/10">
//             <div className="text-sm text-gray-400">
//               <span className="font-semibold text-white">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
//             </div>
            
//             <div className="flex items-center gap-3">
//               {/* Sort dropdown */}
//               <div className="relative">
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value as any)}
//                   className="px-4 py-2 pr-8 text-sm text-white transition-colors border rounded-lg appearance-none cursor-pointer bg-white/5 border-white/10 hover:bg-white/10 focus:outline-none focus:border-primary"
//                 >
//                   {sortOptions.map(option => (
//                     <option key={option.id} value={option.id} className="bg-dark">
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 pointer-events-none right-3 top-1/2" />
//               </div>
              
//               {/* Filter button mobile */}
//               <button
//                 onClick={() => setIsFilterOpen(true)}
//                 className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg sm:hidden bg-white/5 border-white/10"
//               >
//                 <Filter className="w-4 h-4" />
//                 <span>Filtres</span>
//               </button>
              
//               {/* Active filters */}
//               {hasActiveFilters && (
//                 <button
//                   onClick={clearFilters}
//                   className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
//                 >
//                   <X className="w-3 h-3" />
//                   <span>Effacer les filtres</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </motion.div>
        
//         {/* Products Grid - Aéré & Premium */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`${selectedCategory}-${sortBy}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8"
//           >
//             {filteredProducts.map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//           </motion.div>
//         </AnimatePresence>
        
//         {/* Empty State - Élégant */}
//         {filteredProducts.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="py-20 text-center"
//           >
//             <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-white/5">
//               <Shirt className="w-10 h-10 text-gray-500" />
//             </div>
//             <h3 className="mb-2 text-xl font-semibold">Aucun produit trouvé</h3>
//             <p className="mb-6 text-gray-400">
//               Aucun produit ne correspond à vos critères de recherche.
//             </p>
//             <button
//               onClick={clearFilters}
//               className="inline-flex items-center gap-2 px-6 py-3 text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
//             >
//               <span>Voir tous les produits</span>
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </motion.div>
//         )}
        
//         {/* Newsletter Section - Premium */}
//         {filteredProducts.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="pt-10 mt-20 border-t border-white/10"
//           >
//             <div className="relative p-8 overflow-hidden text-center rounded-3xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 md:p-12">
//               <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
//               <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />
              
//               <div className="relative z-10 max-w-2xl mx-auto">
//                 <Star className="w-8 h-8 mx-auto mb-4 text-primary" />
//                 <h3 className="mb-3 text-2xl font-bold md:text-3xl">
//                   Ne manquez aucune nouveauté
//                 </h3>
//                 <p className="mb-6 text-gray-400">
//                   Inscrivez-vous à notre newsletter et recevez -10% sur votre première commande.
//                 </p>
//                 <div className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row">
//                   <input
//                     type="email"
//                     placeholder="Votre adresse email"
//                     className="flex-1 px-4 py-3 text-white placeholder-gray-400 transition-colors border rounded-lg bg-white/10 border-white/20 focus:border-primary focus:outline-none"
//                   />
//                   <button className="px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark">
//                     S'inscrire
//                   </button>
//                 </div>
//                 <p className="mt-4 text-xs text-gray-500">
//                   En vous inscrivant, vous acceptez notre politique de confidentialité
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
      
//       {/* Mobile Filter Modal */}
//       <AnimatePresence>
//         {isFilterOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-end sm:hidden"
//           >
//             <div className="absolute inset-0 bg-black/80" onClick={() => setIsFilterOpen(false)} />
//             <motion.div
//               initial={{ y: '100%' }}
//               animate={{ y: 0 }}
//               exit={{ y: '100%' }}
//               transition={{ type: 'spring', damping: 25 }}
//               className="relative w-full p-6 border-t bg-dark rounded-t-2xl border-white/10"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-semibold">Filtres</h3>
//                 <button onClick={() => setIsFilterOpen(false)} className="p-1">
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
              
//               <div className="space-y-6">
//                 <div>
//                   <label className="block mb-3 text-sm font-medium">Catégories</label>
//                   <div className="flex flex-wrap gap-2">
//                     {categories.map((category) => {
//                       const Icon = category.icon
//                       const isActive = selectedCategory === category.id
//                       return (
//                         <button
//                           key={category.id}
//                           onClick={() => {
//                             setSelectedCategory(category.id)
//                             setIsFilterOpen(false)
//                           }}
//                           className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
//                             isActive
//                               ? 'bg-primary text-white'
//                               : 'bg-white/10 text-gray-300'
//                           }`}
//                         >
//                           <Icon className="w-3 h-3" />
//                           <span>{category.label}</span>
//                         </button>
//                       )
//                     })}
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block mb-3 text-sm font-medium">Trier par</label>
//                   <div className="space-y-2">
//                     {sortOptions.map((option) => (
//                       <button
//                         key={option.id}
//                         onClick={() => {
//                           setSortBy(option.id as any)
//                           setIsFilterOpen(false)
//                         }}
//                         className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
//                           sortBy === option.id
//                             ? 'bg-primary/20 text-primary'
//                             : 'text-gray-300 hover:bg-white/5'
//                         }`}
//                       >
//                         {option.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               <button
//                 onClick={clearFilters}
//                 className="w-full px-4 py-3 mt-6 font-medium text-white transition-colors border rounded-lg border-white/20 hover:bg-white/5"
//               >
//                 Effacer tous les filtres
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutGrid, 
  Filter, 
  ChevronDown, 
  X,
  Shirt,
  Sparkles,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react'
import { ProductCard } from '../components/product/ProductCard'
import { products, Product } from '../data/products'

export function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price-asc' | 'price-desc'>('popular')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  
  const categories = [
    { id: 'all', label: 'Tous les produits', icon: LayoutGrid, count: products.length },
    { id: 't-shirt', label: 'T-shirts', icon: Shirt, count: products.filter(p => p.category === 't-shirt').length },
    { id: 'polo', label: 'Polos', icon: Sparkles, count: products.filter(p => p.category === 'polo').length },
  ]
  
  const sortOptions = [
    { id: 'popular', label: 'Les plus populaires', icon: TrendingUp },
    { id: 'newest', label: 'Nouveautés', icon: Clock },
    { id: 'price-asc', label: 'Prix croissant', icon: null },
    { id: 'price-desc', label: 'Prix décroissant', icon: null },
  ]
  
  useEffect(() => {
    let result = [...products]
    
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }
    
    switch (sortBy) {
      case 'popular':
        result = result.filter(p => p.popular).concat(result.filter(p => !p.popular))
        break
      case 'price-asc':
        result.sort((a, b) => a.priceXOF - b.priceXOF)
        break
      case 'price-desc':
        result.sort((a, b) => b.priceXOF - a.priceXOF)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
    }
    
    setFilteredProducts(result)
  }, [selectedCategory, sortBy])
  
  const clearFilters = () => {
    setSelectedCategory('all')
    setSortBy('popular')
  }
  
  const hasActiveFilters = selectedCategory !== 'all' || sortBy !== 'popular'

  return (
    <div className="min-h-screen pt-20 pb-16 md:pt-24 bg-dark">
      <div className="container-custom">
        {/* Header - Premium & Épuré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Collection 2024</span>
            </div> */}
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Notre <span className="text-primary">collection</span>
            </h1>
            <p className="text-lg text-gray-400">
              Découvrez une sélection exclusive de t-shirts et polos d'exception,
              conçus pour révéler votre élégance naturelle.
            </p>
          </div>
        </motion.div>
        
        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Categories Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = selectedCategory === category.id
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                  <span>{category.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              )
            })}
          </div>
          
          {/* Sort & Filter Row */}
          <div className="flex flex-col items-center justify-between gap-4 py-4 border-t border-b sm:flex-row border-white/10">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-white">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 pr-8 text-sm text-white transition-colors border rounded-lg appearance-none cursor-pointer bg-white/5 border-white/10 hover:bg-white/10 focus:outline-none focus:border-primary"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id} className="bg-dark">
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 pointer-events-none right-3 top-1/2" />
              </div>
              
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg sm:hidden bg-white/5 border-white/10"
              >
                <Filter className="w-4 h-4" />
                <span>Filtres</span>
              </button>
              
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
                >
                  <X className="w-3 h-3" />
                  <span>Effacer les filtres</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
        
        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-20 text-center"
          >
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-white/5">
              <Shirt className="w-10 h-10 text-gray-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Aucun produit trouvé</h3>
            <p className="mb-6 text-gray-400">
              Aucun produit ne correspond à vos critères de recherche.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-3 text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
            >
              <span>Voir tous les produits</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
      
      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:hidden"
          >
            <div className="absolute inset-0 bg-black/80" onClick={() => setIsFilterOpen(false)} />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full p-6 border-t bg-dark rounded-t-2xl border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filtres</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-3 text-sm font-medium">Catégories</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const Icon = category.icon
                      const isActive = selectedCategory === category.id
                      return (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.id)
                            setIsFilterOpen(false)
                          }}
                          className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
                            isActive
                              ? 'bg-primary text-white'
                              : 'bg-white/10 text-gray-300'
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          <span>{category.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
                
                <div>
                  <label className="block mb-3 text-sm font-medium">Trier par</label>
                  <div className="space-y-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSortBy(option.id as any)
                          setIsFilterOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          sortBy === option.id
                            ? 'bg-primary/20 text-primary'
                            : 'text-gray-300 hover:bg-white/5'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                onClick={clearFilters}
                className="w-full px-4 py-3 mt-6 font-medium text-white transition-colors border rounded-lg border-white/20 hover:bg-white/5"
              >
                Effacer tous les filtres
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}