

// import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper/modules'
// import { ColorSelector } from '../components/UI/ColorSelector'
// import { SizeSelector } from '../components/UI/SizeSelector'
// import { QuantitySelector } from '../components/UI/QuantitySelector'
// import { PriceDisplay } from '../components/UI/PriceDisplay'
// import { Button } from '../components/UI/Button'
// import { products } from '../data/products'
// import { useCurrency } from '../hooks/useCurrency'
// import { getWhatsAppLink } from '../utils/whatsapp'
// import { ProductCard } from '../components/Product/ProductCard'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

// export function Product() {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const { formatPrice, getRawPrice, currency } = useCurrency()
  
//   const product = products.find(p => p.id === Number(id))
  
//   const [selectedVariant, setSelectedVariant] = useState(product?.variants[0])
//   const [selectedColor, setSelectedColor] = useState(product?.variants[0]?.color || '')
//   const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
//   const [quantity, setQuantity] = useState(1)
//   const [customerName, setCustomerName] = useState('')
//   const [deliveryLocation, setDeliveryLocation] = useState('')
  
//   useEffect(() => {
//     if (product && selectedColor) {
//       const variant = product.variants.find(v => v.color === selectedColor)
//       if (variant) {
//         setSelectedVariant(variant)
//       }
//     }
//   }, [selectedColor, product])
  
//   useEffect(() => {
//     if (product) {
//       setSelectedColor(product.variants[0].color)
//       setSelectedSize(product.sizes[0])
//     }
//   }, [product])
  
//   if (!product) {
//     return (
//       <div className="pt-32 text-center">
//         <h1 className="text-2xl">Produit non trouvé</h1>
//         <Button onClick={() => navigate('/catalogue')} className="mt-4">
//           Retour au catalogue
//         </Button>
//       </div>
//     )
//   }
  
//   const handleOrder = () => {
//     if (!customerName || !deliveryLocation) {
//       alert('Veuillez remplir votre nom et votre lieu de livraison')
//       return
//     }
    
//     const price = getRawPrice(product.priceXOF, product.priceEUR)
//     const whatsappLink = getWhatsAppLink({
//       productName: `${product.name} - ${selectedVariant?.colorName}`,
//       color: selectedVariant?.colorName || '',
//       size: selectedSize,
//       quantity,
//       price,
//       currency,
//       customerName,
//       deliveryLocation,
//       productUrl: window.location.href
//     })
    
//     window.open(whatsappLink, '_blank')
//   }
  
//   const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
  
//   return (
//     <div className="pt-20 pb-16 md:pt-24">
//       <div className="container-custom">
//         {/* Product Main */}
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Gallery - change selon la couleur */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedVariant?.color}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Swiper
//                   modules={[Navigation, Pagination]}
//                   navigation
//                   pagination={{ clickable: true }}
//                   className="overflow-hidden rounded-2xl"
//                 >
//                   {selectedVariant?.images.map((image, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={image}
//                         alt={`${product.name} ${selectedVariant?.colorName} - ${index + 1}`}
//                         className="object-cover w-full aspect-square"
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
          
//           {/* Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             <div>
//               <h1 className="mb-2 text-3xl font-bold md:text-4xl">
//                 {product.name}
//                 <span className="ml-2 text-xl text-primary">- {selectedVariant?.colorName}</span>
//               </h1>
//               <PriceDisplay 
//                 priceXOF={product.priceXOF} 
//                 priceEUR={product.priceEUR}
//                 className="text-2xl text-primary"
//               />
//             </div>
            
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedVariant?.color}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <p className="leading-relaxed text-gray-300">
//                   {selectedVariant?.description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
            
//             {/* Caractéristiques */}
//             <div className="py-4 border-t border-b border-white/10">
//               <h3 className="mb-3 font-semibold">Caractéristiques</h3>
//               <ul className="space-y-2">
//                 {product.features.map((feature, index) => (
//                   <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
//                     <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Matières et entretien */}
//             <div className="space-y-2 text-sm">
//               <p><span className="font-semibold">Matière :</span> {product.materials}</p>
//               <p><span className="font-semibold">Entretien :</span> {product.careInstructions}</p>
//             </div>
            
//             <ColorSelector
//               colors={product.variants.map(v => v.color)}
//               selectedColor={selectedColor}
//               onSelect={setSelectedColor}
//             />
            
//             <SizeSelector
//               sizes={product.sizes}
//               selectedSize={selectedSize}
//               onSelect={setSelectedSize}
//             />
            
//             <QuantitySelector
//               quantity={quantity}
//               onIncrease={() => setQuantity(q => Math.min(q + 1, 10))}
//               onDecrease={() => setQuantity(q => Math.max(q - 1, 1))}
//             />
            
//             {/* Stock */}
//             <div className="flex items-center gap-2 text-sm">
//               <div className={`w-2 h-2 rounded-full ${selectedVariant?.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
//               <span className="text-gray-400">
//                 {selectedVariant?.inStock ? 'En stock' : 'Rupture de stock'}
//               </span>
//             </div>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block mb-2 text-sm font-medium">Votre nom</label>
//                 <input
//                   type="text"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   placeholder="Ex: Jean Kouadio"
//                   className="w-full px-4 py-3 transition-colors border rounded-lg bg-white/10 border-white/20 focus:border-primary focus:outline-none"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-2 text-sm font-medium">Lieu de livraison</label>
//                 <input
//                   type="text"
//                   value={deliveryLocation}
//                   onChange={(e) => setDeliveryLocation(e.target.value)}
//                   placeholder="Ex: Abidjan, Cocody"
//                   className="w-full px-4 py-3 transition-colors border rounded-lg bg-white/10 border-white/20 focus:border-primary focus:outline-none"
//                 />
//               </div>
//             </div>
            
//             <Button onClick={handleOrder} size="lg" fullWidth>
//               Commander sur WhatsApp 💬
//             </Button>
            
//             <div className="grid grid-cols-3 gap-4 pt-4 text-sm text-center text-gray-400">
//               <div className="flex flex-col items-center gap-1">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span>Livraison 48h</span>
//               </div>
//               <div className="flex flex-col items-center gap-1">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//                 <span>Paiement sécurisé</span>
//               </div>
//               <div className="flex flex-col items-center gap-1">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                 </svg>
//                 <span>Retour 14 jours</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <div className="mt-20">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-8 text-2xl font-bold text-center md:text-3xl"
//             >
//               Vous aimerez <span className="text-primary">aussi</span>
//             </motion.h2>
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {relatedProducts.map((relatedProduct, index) => (
//                 <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
      
//       {/* Sticky button mobile */}
//       <div className="fixed bottom-0 left-0 right-0 z-50 p-4 border-t bg-dark/95 backdrop-blur-md border-white/10 lg:hidden">
//         <Button onClick={handleOrder} fullWidth>
//           Commander sur WhatsApp 💬
//         </Button>
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { X, Calendar, MapPin, User, ArrowLeft } from 'lucide-react'
import { ColorSelector } from '../components/UI/ColorSelector'
import { SizeSelector } from '../components/UI/SizeSelector'
import { QuantitySelector } from '../components/UI/QuantitySelector'
import { PriceDisplay } from '../components/UI/PriceDisplay'
import { Button } from '../components/UI/Button'
import { products } from '../data/products'
import { useCurrency } from '../hooks/useCurrency'
import { getWhatsAppLink } from '../utils/whatsapp'
import { ProductCard } from '../components/product/ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Composant Modal
function OrderModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  productName, 
  colorName, 
  size, 
  quantity, 
  price, 
  currency 
}: { 
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; deliveryLocation: string; deliveryDate: string }) => void
  productName: string
  colorName: string
  size: string
  quantity: number
  price: number
  currency: string
}) {
  const [name, setName] = useState('')
  const [deliveryLocation, setDeliveryLocation] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [errors, setErrors] = useState<{ name?: string; deliveryLocation?: string; deliveryDate?: string }>({})

  const validate = () => {
    const newErrors: { name?: string; deliveryLocation?: string; deliveryDate?: string } = {}
    if (!name.trim()) newErrors.name = 'Veuillez entrer votre nom'
    if (!deliveryLocation.trim()) newErrors.deliveryLocation = 'Veuillez entrer le lieu de livraison'
    if (!deliveryDate) newErrors.deliveryDate = 'Veuillez choisir une date de livraison'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validate()) {
      onSubmit({ name, deliveryLocation, deliveryDate })
      onClose()
      setName('')
      setDeliveryLocation('')
      setDeliveryDate('')
    }
  }

  if (!isOpen) return null

  return (
//    <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//   onClick={onClose}
// >
//   <motion.div
//     initial={{ scale: 0.9, opacity: 0, y: 20 }}
//     animate={{ scale: 1, opacity: 1, y: 0 }}
//     exit={{ scale: 0.9, opacity: 0, y: 20 }}
//     transition={{ type: 'spring', damping: 25 }}
//    className="relative w-full max-w-sm overflow-hidden border shadow-2xl rounded-2xl bg-dark border-white/10"
//     onClick={(e) => e.stopPropagation()}
//   >
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
  onClick={onClose}
>
  <motion.div
    initial={{ scale: 0.9, opacity: 0, y: 20 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    exit={{ scale: 0.9, opacity: 0, y: 20 }}
    transition={{ type: 'spring', damping: 25 }}
    className="relative w-full max-w-sm overflow-y-auto max-h-[90vh] border shadow-2xl rounded-2xl bg-dark border-white/10"
    onClick={(e) => e.stopPropagation()}
  >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-gradient-to-r from-primary/10 to-secondary/10">
          <h2 className="text-xl font-bold">Finaliser votre commande</h2>
          <button
            onClick={onClose}
            className="p-1 transition-colors rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Résumé de la commande */}
        <div className="p-5 space-y-3 bg-white/5">
          <h3 className="text-sm font-semibold text-primary">Récapitulatif</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Produit :</span>
              <span className="font-medium">{productName} - {colorName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Taille / Quantité :</span>
              <span className="font-medium">{size} / {quantity}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-white/10">
              <span className="text-gray-400">Total :</span>
              <span className="text-lg font-bold text-primary">{(price * quantity).toLocaleString()} {currency}</span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              <User className="inline w-4 h-4 mr-1" />
              Votre nom complet
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Jean Kouadio"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-colors focus:outline-none focus:border-primary ${
                errors.name ? 'border-red-500' : 'border-white/20'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              <MapPin className="inline w-4 h-4 mr-1" />
              Lieu de livraison
            </label>
            <input
              type="text"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              placeholder="Ex: Abidjan, Cocody, Rue 12"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-colors focus:outline-none focus:border-primary ${
                errors.deliveryLocation ? 'border-red-500' : 'border-white/20'
              }`}
            />
            {errors.deliveryLocation && <p className="mt-1 text-xs text-red-500">{errors.deliveryLocation}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              <Calendar className="inline w-4 h-4 mr-1" />
              Date de livraison souhaitée
            </label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-colors focus:outline-none focus:border-primary ${
                errors.deliveryDate ? 'border-red-500' : 'border-white/20'
              }`}
            />
            {errors.deliveryDate && <p className="mt-1 text-xs text-red-500">{errors.deliveryDate}</p>}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 p-5 border-t border-white/10">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 font-medium text-white transition-colors border rounded-lg border-white/20 hover:bg-white/5"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-3 font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
          >
            Confirmer la commande
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getRawPrice, currency } = useCurrency()
  
  const product = products.find(p => p.id === Number(id))
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0])
  const [selectedColor, setSelectedColor] = useState(product?.variants[0]?.color || '')
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    if (product && selectedColor) {
      const variant = product.variants.find(v => v.color === selectedColor)
      if (variant) {
        setSelectedVariant(variant)
      }
    }
  }, [selectedColor, product])
  
  useEffect(() => {
    if (product) {
      setSelectedColor(product.variants[0].color)
      setSelectedSize(product.sizes[0])
    }
  }, [product])
  
  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl">Produit non trouvé</h1>
        <Button onClick={() => navigate('/catalogue')} className="mt-4">
          Retour au catalogue
        </Button>
      </div>
    )
  }
  
  const handleOrderSubmit = (orderData: { name: string; deliveryLocation: string; deliveryDate: string }) => {
    const price = getRawPrice(product.priceXOF, product.priceEUR)
    const totalPrice = price * quantity
    const whatsappLink = getWhatsAppLink({
      productName: `${product.name} - ${selectedVariant?.colorName}`,
      color: selectedVariant?.colorName || '',
      size: selectedSize,
      quantity,
      price: totalPrice,
      currency,
      customerName: orderData.name,
      deliveryLocation: orderData.deliveryLocation,
      productUrl: window.location.href
    })
    
    // Ajouter la date de livraison au message
    const encodedMessage = encodeURIComponent(
      decodeURIComponent(whatsappLink.split('text=')[1]) + 
      `\n*Date de livraison souhaitée :* ${orderData.deliveryDate}`
    )
    const finalLink = `https://wa.me/2250712613361?text=${encodedMessage}`
    
    window.open(finalLink, '_blank')
  }
  
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
  
  return (
    <div className="min-h-screen pt-20 pb-16 md:pt-24 bg-dark">
      <div className="container-custom">
        {/* Bouton retour */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/catalogue')}
          className="flex items-center gap-2 mb-6 text-sm text-gray-400 transition-colors hover:text-primary group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Retour au catalogue</span>
        </motion.button>
        
        {/* Product Main */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Image principale */}
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedVariant?.color}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="rounded-2xl"
                  >
                    {selectedVariant?.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="aspect-square">
                          <img
                            src={image}
                            alt={`${product.name} ${selectedVariant?.colorName} - ${index + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sélecteurs - Positionnés sous l'image sur mobile */}
            <div className="space-y-5 lg:hidden">
              <ColorSelector
                colors={product.variants.map(v => v.color)}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
              />
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(q => Math.min(q + 1, 10))}
                onDecrease={() => setQuantity(q => Math.max(q - 1, 1))}
              />
            </div>
          </motion.div>
          
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">
                {product.name}
                <span className="ml-2 text-xl text-primary">- {selectedVariant?.colorName}</span>
              </h1>
              <PriceDisplay 
                priceXOF={product.priceXOF} 
                priceEUR={product.priceEUR}
                className="text-2xl text-primary"
              />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVariant?.color}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="leading-relaxed text-gray-300">
                  {selectedVariant?.description}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Sélecteurs - Cachés sur mobile car déjà sous l'image */}
            <div className="hidden space-y-6 lg:block">
              <ColorSelector
                colors={product.variants.map(v => v.color)}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
              />
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(q => Math.min(q + 1, 10))}
                onDecrease={() => setQuantity(q => Math.max(q - 1, 1))}
              />
            </div>
            
            {/* Caractéristiques */}
            <div className="py-4 border-t border-b border-white/10">
              <h3 className="mb-3 font-semibold">Caractéristiques</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Matières et entretien */}
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Matière :</span> {product.materials}</p>
              <p><span className="font-semibold">Entretien :</span> {product.careInstructions}</p>
            </div>
            
            {/* Stock */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${selectedVariant?.inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="text-gray-400">
                {selectedVariant?.inStock ? 'En stock - Livraison rapide' : 'Rupture de stock'}
              </span>
            </div>
            
            {/* Bouton commander */}
            <Button onClick={() => setIsModalOpen(true)} size="lg" fullWidth>
              Commander sur WhatsApp 💬
            </Button>
            
            {/* Garanties */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-sm text-center text-gray-400">
              <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Livraison 48h</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Retour 14 jours</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Related Products - Ce qui peut vous intéresser */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-2xl font-bold text-center md:text-3xl"
            >
              Ce qui peut vous <span className="text-primary">intéresser</span>
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Sticky button mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 border-t bg-dark/95 backdrop-blur-md border-white/10 lg:hidden">
        <Button onClick={() => setIsModalOpen(true)} fullWidth>
          Commander sur WhatsApp 💬
        </Button>
      </div>

      {/* Modal de commande */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleOrderSubmit}
        productName={product.name}
        colorName={selectedVariant?.colorName || ''}
        size={selectedSize}
        quantity={quantity}
        price={getRawPrice(product.priceXOF, product.priceEUR)}
        currency={currency}
      />
    </div>
  )
}
