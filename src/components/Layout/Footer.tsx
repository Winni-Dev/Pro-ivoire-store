import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 mt-16 border-t bg-dark border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">
              <span className="text-primary">PRO</span>
              <span className="text-white">IVOIRE</span>
            </h3>
            <p className="text-sm text-gray-400">
              La référence du sportswear premium en Côte d'Ivoire. Qualité et style pour les vrais sportifs.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 font-semibold">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="transition-colors hover:text-primary">Accueil</a></li>
              <li><a href="/catalogue" className="transition-colors hover:text-primary">Catalogue</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +225 07 12 61 33 61</li>
              <li>✉️ proivoirestore@gmail.com</li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="mb-3 font-semibold">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-primary">Instagram</a>
              <a href="#" className="text-gray-400 transition-colors hover:text-primary">Facebook</a>
              <a href="#" className="text-gray-400 transition-colors hover:text-primary">TikTok</a>
            </div>
          </div> */}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-8 mt-8 text-sm text-center text-gray-500 border-t border-white/10"
        >
          <p>&copy; {currentYear} PRO IVOIRE STORE. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  )
}