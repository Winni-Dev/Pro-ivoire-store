
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import { useRef } from 'react'
// import { 
//   ArrowRight, 
//   Play, 
//   Truck, 
//   MessageCircle, 
//   Gem, 
//   RefreshCw,
//   Star,
//   Shield,
//   Zap,
//   Users,
//   ThumbsUp,
//   Clock,
//   ChevronRight,
//   CheckCircle,
//   Award,
//   Globe
// } from 'lucide-react'
// import { Button } from '../components/UI/Button'
// import { ProductCard } from '../components/Product/ProductCard'
// import { products } from '../data/products'

// export function Home() {
//   const targetRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end start"]
//   })
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
//   const allProducts = products.slice(0, 8)

//   const advantages = [
//     {
//       icon: Truck,
//       title: "Livraison Express",
//       description: "48-72h dans toute la Côte d'Ivoire",
//       detail: "Suivi en temps réel",
//       color: "#FF6B00"
//     },
//     {
//       icon: MessageCircle,
//       title: "Commande WhatsApp",
//       description: "Commandez en quelques secondes",
//       detail: "Support 7j/7",
//       color: "#009E60"
//     },
//     {
//       icon: Gem,
//       title: "Qualité Premium",
//       description: "Certifié aux meilleurs standards",
//       detail: "100% satisfait",
//       color: "#FF6B00"
//     },
//     {
//       icon: RefreshCw,
//       title: "Retours Simplifiés",
//       description: "Échange sous 14 jours",
//       detail: "Sans frais",
//       color: "#009E60"
//     }
//   ]

//   const stats = [
//     { value: "5000+", label: "Clients satisfaits", icon: Users },
//     { value: "98%", label: "Taux de satisfaction", icon: ThumbsUp },
//     { value: "24/7", label: "Support client", icon: Clock },
//     { value: "100%", label: "Ivoirien", icon: Globe }
//   ]

//   const testimonials = [
//     {
//       name: "Kouadio Jean",
//       location: "Abidjan, Cocody",
//       text: "La qualité est exceptionnelle. Les t-shirts sont d'un confort inégalé et le design est magnifique. Pro Ivoire est devenu ma marque référence.",
//       rating: 5,
//       image: "https://randomuser.me/api/portraits/men/1.jpg"
//     },
//     {
//       name: "Fatima Touré",
//       location: "Abidjan, Plateau",
//       text: "Service client impeccable et livraison ultra-rapide. Le polo que j'ai commandé dépasse toutes mes attentes. Je recommande à 100% !",
//       rating: 5,
//       image: "https://randomuser.me/api/portraits/women/2.jpg"
//     },
//     {
//       name: "Marc Konan",
//       location: "Yamoussoukro",
//       text: "Enfin une marque ivoirienne qui rivalise avec les plus grandes enseignes internationales. Fier de porter Pro Ivoire.",
//       rating: 5,
//       image: "https://randomuser.me/api/portraits/men/3.jpg"
//     }
//   ]

//   const featuredBadges = [
//     { icon: Award, text: "Qualité Premium", color: "#FF6B00" },
//     { icon: Shield, text: "100% Authentique", color: "#009E60" },
//     { icon: Zap, text: "Livraison Express", color: "#FF6B00" }
//   ]

//   return (
//     <div className="pt-16 md:pt-20">
//       {/* Hero Section - Ultra Premium */}
//       <section ref={targetRef} className="relative flex items-center min-h-screen overflow-hidden">
//         {/* Background avec overlay plus sophistiqué */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1600')] bg-cover bg-center scale-110" />
//           <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/80" />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
        
//         <div className="relative z-10 container-custom">
//           <motion.div
//             style={{ opacity, scale }}
//             className="max-w-3xl"
//           >
//             {/* Badge premium */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="mb-8"
//             >
//               <div className="inline-flex items-center gap-3 px-4 py-2 border rounded-full bg-white/5 backdrop-blur-sm border-white/10">
//                 <span className="relative flex w-2 h-2">
//                   <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary"></span>
//                   <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
//                 </span>
//                 <span className="text-sm font-medium text-white/80">Collection Hiver 2024</span>
//                 <ChevronRight className="w-4 h-4 text-primary" />
//               </div>
//             </motion.div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]"
//             >
//               <span className="text-white">L'élégance</span>
//               <br />
//               <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
//                 à l'ivoirienne
//               </span>
//             </motion.h1>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-300 md:text-xl"
//             >
//               Découvrez notre collection premium de sportswear aux couleurs de la Côte d'Ivoire. 
//               Qualité internationale, design unique et fierté nationale réunis dans chaque pièce.
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-col gap-4 sm:flex-row"
//             >
//               <Link to="/catalogue">
//                 <Button size="lg" className="group">
//                   Explorer la collection
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//               <Button variant="outline" size="lg">
//                 <Play className="w-5 h-5 mr-2" />
//                 Voir la présentation
//               </Button>
//             </motion.div>

//             {/* Featured badges */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="flex flex-wrap gap-4 mt-12"
//             >
//               {featuredBadges.map((badge, index) => (
//                 <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
//                   <badge.icon className="w-4 h-4" style={{ color: badge.color }} />
//                   <span className="text-xs font-medium text-white/70">{badge.text}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
        
//         {/* Scroll indicator */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-xs tracking-wider text-gray-400 uppercase">Découvrir</span>
//             <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Stats Section - Élégant */}
//       <section className="py-16 border-b border-white/5 bg-white/2">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className="flex justify-center mb-3">
//                   <div className="p-3 transition-colors duration-300 rounded-full bg-white/5 group-hover:bg-primary/10">
//                     <stat.icon className="w-6 h-6 text-primary" />
//                   </div>
//                 </div>
//                 <div className="mb-1 text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
//                 <div className="text-sm text-gray-400">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Collection Section - Grille dense */}
//       <section className="py-20">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-12 text-center"
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10">
//               <Star className="w-4 h-4 text-primary" />
//               <span className="text-xs font-semibold tracking-wider uppercase text-primary">Collection</span>
//             </div>
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
//               Nos pièces <span className="text-primary">iconiques</span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-400">
//               Découvrez une sélection minutieuse de t-shirts et polos d'exception,
//               conçus pour révéler votre élégance naturelle.
//             </p>
//           </motion.div>
          
//           {/* Grille 2 colonnes mobile, 3 colonnes tablette, 4 colonnes desktop */}
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
//             {allProducts.map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//           </div>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="mt-12 text-center"
//           >
//             <Link to="/catalogue">
//               <Button variant="outline" size="lg">
//                 Voir toute la collection
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Avantages - Cartes élégantes */}
//       <section className="py-20 bg-white/5">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-12 text-center"
//           >
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl">
//               Une expérience <span className="text-primary">pensée pour vous</span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-400">
//               Découvrez pourquoi des milliers de clients nous font confiance
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {advantages.map((adv, index) => (
//               <motion.div
//                 key={adv.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="relative p-6 transition-all duration-300 border group rounded-2xl bg-dark border-white/10 hover:border-primary/30"
//               >
//                 <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl group-hover:opacity-100" />
//                 <div className="relative">
//                   <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors duration-300 rounded-xl bg-primary/10 group-hover:bg-primary/20">
//                     <adv.icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <h3 className="mb-2 text-lg font-semibold">{adv.title}</h3>
//                   <p className="mb-2 text-sm text-gray-400">{adv.description}</p>
//                   <div className="flex items-center gap-1 text-xs font-medium text-primary">
//                     <span>{adv.detail}</span>
//                     <ChevronRight className="w-3 h-3" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Témoignages - Design épuré */}
//       <section className="py-20">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-12 text-center"
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10">
//               <Users className="w-4 h-4 text-primary" />
//               <span className="text-xs font-semibold tracking-wider uppercase text-primary">Témoignages</span>
//             </div>
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl">
//               Ce que nos <span className="text-primary">clients pensent</span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-400">
//               Rejoignez une communauté de passionnés qui ont adopté le style Pro Ivoire
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="p-6 transition-all duration-300 border rounded-2xl bg-white/5 border-white/10 hover:border-primary/20"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="relative">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="object-cover w-12 h-12 rounded-full ring-2 ring-primary/20"
//                     />
//                     <div className="absolute flex items-center justify-center w-4 h-4 rounded-full -bottom-1 -right-1 bg-primary">
//                       <CheckCircle className="w-3 h-3 text-white" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-400">{testimonial.location}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-1 mb-3">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-current text-primary" />
//                   ))}
//                 </div>
//                 <p className="text-sm leading-relaxed text-gray-300">{testimonial.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Final - Élégant */}
//       <section className="py-20">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative p-12 overflow-hidden text-center border rounded-3xl bg-white/5 border-white/10"
//           >
//             <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
            
//             <div className="relative z-10 max-w-2xl mx-auto">
//               <h2 className="mb-4 text-3xl font-bold md:text-4xl">
//                 Prêt à élever votre style ?
//               </h2>
//               <p className="mb-8 text-gray-400">
//                 Rejoignez l'aventure Pro Ivoire et découvrez une nouvelle façon de porter 
//                 l'élégance ivoirienne.
//               </p>
//               <Link to="/catalogue">
//                 <Button size="lg" className="group">
//                   Commander maintenant
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import { 
  ArrowRight, 
  Truck, 
  MessageCircle, 
  Gem, 
  RefreshCw,
  Star,
  Users,
  Clock,
  CheckCircle,
  Shirt,
  Sparkles
} from 'lucide-react'
import { Button } from '../components/UI/Button'
import { ProductCard } from '../components/product/ProductCard'
import { products } from '../data/products'
import man from '../IMAGES/Geminiii.png'
import pologroup from '../IMAGES/pologroupe.jpeg'
import teegroup from '../IMAGES/teesirtgroup.jpeg'

// Composant Counter animé
function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, target, duration])

  return (
    <div ref={ref} className="text-3xl font-bold md:text-4xl text-primary">
      {count}{suffix}
    </div>
  )
}

export function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
  const allProducts = products.slice(0, 8)

  const advantages = [
    {
      icon: Truck,
      title: "Livraison Express",
      description: "48-72h dans toute la Côte d'Ivoire",
      detail: "Suivi en temps réel",
      color: "#FF6B00"
    },
    {
      icon: MessageCircle,
      title: "Commande WhatsApp",
      description: "Commandez en quelques secondes",
      detail: "Support 7j/7",
      color: "#009E60"
    },
    {
      icon: Gem,
      title: "Qualité Premium",
      description: "Certifié aux meilleurs standards",
      detail: "100% satisfait",
      color: "#FF6B00"
    },
    {
      icon: RefreshCw,
      title: "Retours Simplifiés",
      description: "Échange sous 14 jours",
      detail: "Sans frais",
      color: "#009E60"
    }
  ]

  const testimonials = [
    {
      name: "Kouadio Jean",
      location: "Abidjan, Cocody",
      text: "La qualité est exceptionnelle. Les t-shirts sont d'un confort inégalé et le design est magnifique.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Fatima Touré",
      location: "Abidjan, Plateau",
      text: "Service client impeccable et livraison ultra-rapide. Je recommande à 100% !",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Marc Konan",
      location: "Yamoussoukro",
      text: "Enfin une marque ivoirienne qui rivalise avec les plus grandes enseignes.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ]

  return (
    <div className="bg-dark">
      {/* Hero Section avec image et dégradé */}
      <section ref={targetRef} className="relative flex items-center min-h-[90vh] overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          {/* <img 
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1600&q=80"
            alt="Hero background"
            className="object-cover w-full h-full scale-110"
          /> */}
           <img 
            src= {man}
            alt="Hero background"
            className="object-cover w-full h-full scale-110"
          />
          {/* Dégradé superposé */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 container-custom">
          <motion.div
            style={{ opacity, scale }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full bg-white/10 backdrop-blur-sm border-white/20"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-primary animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-white/90">Collection 2024</span>
            </motion.div> */}
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
            >
              <span className="text-white">L'élégance</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                à l'ivoirienne
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-8 text-base text-gray-200 md:text-lg drop-shadow-lg"
            >
              Découvrez notre collection premium de sportswear aux couleurs de la Côte d'Ivoire.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/catalogue">
                <Button size="lg" className="shadow-xl group">
                  Explorer la collection
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-wider text-gray-400 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Avec compteurs animés */}
      <section className="py-16 border-y border-white/5 bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
              </div>
              <AnimatedCounter target={5000} suffix="+" />
              <div className="mt-1 text-xs tracking-wider text-gray-500 uppercase">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Star className="w-5 h-5 text-primary" />
                </div>
              </div>
              <AnimatedCounter target={98} suffix="%" />
              <div className="mt-1 text-xs tracking-wider text-gray-500 uppercase">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
              </div>
              <AnimatedCounter target={24} suffix="/7" />
              <div className="mt-1 text-xs tracking-wider text-gray-500 uppercase">Support client</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
              </div>
              <AnimatedCounter target={48} suffix="h" />
              <div className="mt-1 text-xs tracking-wider text-gray-500 uppercase">Livraison express</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Avec icônes Lucide */}
     

      {/* Categories Section - Avec images de fond */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Parcourez nos <span className="text-primary">catégories</span>
            </h2>
            <p className="max-w-md mx-auto text-sm text-gray-400">
              Découvrez notre sélection de t-shirts et polos premium
            </p>
          </motion.div>
          
          <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
            {/* Carte T-shirts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Link to="/catalogue?category=t-shirt">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  {/* Image de fond T-shirts */}
                  <img 
                    src={teegroup}
                    alt="T-shirts collection"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay élégant */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary/20 to-transparent group-hover:opacity-100" />
                  
                  {/* Contenu */}
                  <div className="relative flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="mb-4">
                      <div className="p-4 transition-all duration-300 rounded-xl bg-white/10 backdrop-blur-md group-hover:bg-white/20">
                        <Shirt className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-primary">
                      T-shirts
                    </h3>
                    <p className="mb-3 text-sm text-gray-300">2 produits disponibles</p>
                    <div className="flex items-center gap-1 text-sm font-medium transition-opacity duration-300 translate-y-2 opacity-0 text-primary group-hover:opacity-100 group-hover:translate-y-0">
                      <span>Découvrir</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Carte Polos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Link to="/catalogue?category=polo">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  {/* Image de fond Polos */}
                  <img 
                    src={pologroup}
                    alt="Polos collection"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay élégant */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-secondary/20 to-transparent group-hover:opacity-100" />
                  
                  {/* Contenu */}
                  <div className="relative flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="mb-4">
                      <div className="p-4 transition-all duration-300 rounded-xl bg-white/10 backdrop-blur-md group-hover:bg-white/20">
                        <Sparkles className="w-12 h-12 text-secondary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-secondary">
                      Polos
                    </h3>
                    <p className="mb-3 text-sm text-gray-300">2 produits disponibles</p>
                    <div className="flex items-center gap-1 text-sm font-medium transition-opacity duration-300 translate-y-2 opacity-0 text-secondary group-hover:opacity-100 group-hover:translate-y-0">
                      <span>Découvrir</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 bg-white/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Collection</span>
            </div>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Nos pièces <span className="text-primary">iconiques</span>
            </h2>
            <p className="max-w-md mx-auto text-sm text-gray-400">
              Une sélection de nos produits les plus appréciés
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {allProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/catalogue">
              <Button variant="outline" size="lg">
                Voir toute la collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 transition-colors duration-300 rounded-xl bg-white/5 group-hover:bg-primary/10">
                    <adv.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-1 text-sm font-semibold">{adv.title}</h3>
                <p className="text-xs text-gray-500">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Témoignages</span>
            </div>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Ce que nos <span className="text-primary">clients disent</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 transition-all duration-300 border rounded-2xl bg-dark border-white/10 hover:border-primary/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-12 h-12 rounded-full ring-2 ring-primary/20"
                    /> */}
                    <div className="absolute flex items-center justify-center w-4 h-4 rounded-full -bottom-1 -right-1 bg-primary">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-400">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 overflow-hidden text-center rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"
          >
            <div className="relative z-10">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Prêt à élever votre style ?
              </h2>
              <p className="mb-6 text-sm text-gray-400">
                Rejoignez l'aventure Pro Ivoire
              </p>
              <Link to="/catalogue">
                <Button className="group">
                  Commander maintenant
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}