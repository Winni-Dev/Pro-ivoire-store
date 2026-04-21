const WHATSAPP_NUMBER = '225712613361' // À remplacer par le vrai numéro

interface OrderData {
  productName: string
  color: string
  size: string
  quantity: number
  price: number
  currency: string
  customerName: string
  deliveryLocation: string
  productUrl: string
}

export function generateWhatsAppMessage(data: OrderData): string {
  const message = `Bonjour, je souhaite commander :

*Produit :* ${data.productName}
*Couleur :* ${data.color}
*Taille :* ${data.size}
*Quantité :* ${data.quantity}
*Prix total :* ${data.price.toLocaleString()} ${data.currency}

*Nom :* ${data.customerName}
*Lieu de livraison :* ${data.deliveryLocation}

*Lien produit :* ${data.productUrl}`

  return encodeURIComponent(message)
}

export function getWhatsAppLink(data: OrderData): string {
  const message = generateWhatsAppMessage(data)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}