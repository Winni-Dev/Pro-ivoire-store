
// export interface ProductVariant {
//   color: string
//   colorName: string
//   images: string[]
//   description: string
//   inStock: boolean
// }

// export interface Product {
//   id: number
//   name: string
//   baseDescription: string
//   priceXOF: number
//   priceEUR: number
//   variants: ProductVariant[]
//   sizes: string[]
//   popular?: boolean
//   category: 't-shirt' | 'polo'
//   features: string[]
//   materials: string
//   careInstructions: string
// }

// export const products: Product[] = [
//   {
//     id: 1,
//     name: "T-shirt Pro Ivoire",
//     baseDescription: "T-shirt premium en coton biologique. Design élégant aux couleurs de la Côte d'Ivoire.",
//     priceXOF: 8000,
//     priceEUR: 12,
//     variants: [
//       {
//         color: "#FF6B00",
//         colorName: "Orange Ivoirien",
//         images: [
//           "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
//           "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
//           "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
//           "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600",
//         ],
//         description: "T-shirt orange vibrant qui capture l'énergie et la passion de la Côte d'Ivoire.",
//         inStock: true
//       },
//       {
//         color: "#009E60",
//         colorName: "Vert Espoir",
//         images: [
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "T-shirt vert élégant symbolisant l'espoir et la prospérité.",
//         inStock: true
//       },
//       {
//         color: "#FFFFFF",
//         colorName: "Blanc Pur",
//         images: [
//           "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//           "https://images.unsplash.com/photo-1620799140408-edc6f79f6ff4?w=600",
//           "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
//         ],
//         description: "T-shirt blanc intemporel et polyvalent. La pièce essentielle de toute garde-robe.",
//         inStock: true
//       },
//       {
//         color: "#0B0B0B",
//         colorName: "Noir Élégant",
//         images: [
//           "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
//           "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600",
//           "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600",
//           "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
//         ],
//         description: "T-shirt noir sophistiqué qui allie élégance et caractère.",
//         inStock: true
//       }
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     popular: true,
//     category: "t-shirt",
//     features: ["Coton biologique 100%", "Coupe athlétique premium", "Fini anti-transpirant", "Logo brodé qualité supérieure"],
//     materials: "100% Coton biologique certifié GOTS",
//     careInstructions: "Lavage à 30°, séchage à l'ombre"
//   },
//   {
//     id: 2,
//     name: "Polo Elite Ivoirien",
//     baseDescription: "Polo chic et sportif. Coupe ajustée, col contrasté.",
//     priceXOF: 12000,
//     priceEUR: 18,
//     variants: [
//       {
//         color: "#FFFFFF",
//         colorName: "Blanc Royal",
//         images: [
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "Polo blanc élégant avec finitions premium. Le choix des connaisseurs.",
//         inStock: true
//       },
//       {
//         color: "#0B0B0B",
//         colorName: "Noir Prestige",
//         images: [
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "Polo noir au design sophistiqué. Parfait pour un look professionnel.",
//         inStock: true
//       },
//       {
//         color: "#009E60",
//         colorName: "Vert Émeraude",
//         images: [
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "Polo vert émeraude qui capture l'essence de la nature ivoirienne.",
//         inStock: true
//       },
//       {
//         color: "#FF6B00",
//         colorName: "Orange Flamboyant",
//         images: [
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "Polo orange flamboyant pour ceux qui veulent se démarquer avec style.",
//         inStock: true
//       }
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     popular: true,
//     category: "polo",
//     features: ["Piqué de coton premium", "Col contrasté brodé", "Boutons nacrés", "Coupe ajustée moderne"],
//     materials: "100% Coton piqué de haute qualité",
//     careInstructions: "Lavage à 30°, repassage à température moyenne"
//   },
//   {
//     id: 3,
//     name: "T-shirt Éléphant",
//     baseDescription: "T-shirt avec motif élégant de l'éléphant, symbole de force et de sagesse.",
//     priceXOF: 9000,
//     priceEUR: 14,
//     variants: [
//       {
//         color: "#FFFFFF",
//         colorName: "Blanc Pur",
//         images: [
//           "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//           "https://images.unsplash.com/photo-1620799140408-edc6f79f6ff4?w=600",
//           "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
//         ],
//         description: "T-shirt blanc avec motif éléphant. Symbole de force et de sagesse.",
//         inStock: true
//       },
//       {
//         color: "#0B0B0B",
//         colorName: "Noir Élégant",
//         images: [
//           "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600",
//           "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
//           "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "T-shirt noir au motif éléphant raffiné. Un design unique.",
//         inStock: true
//       },
//       {
//         color: "#FF6B00",
//         colorName: "Orange Tendance",
//         images: [
//           "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
//           "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
//           "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
//           "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600",
//         ],
//         description: "T-shirt orange tendance au motif éléphant. L'audace et l'élégance réunies.",
//         inStock: true
//       }
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     category: "t-shirt",
//     features: ["Motif éléphant brodé", "Coton doux et résistant", "Finition soignée", "Design exclusif"],
//     materials: "100% Coton premium",
//     careInstructions: "Lavage à 30°, séchage à l'ombre"
//   },
//   {
//     id: 4,
//     name: "Polo Premium Noir",
//     baseDescription: "Polo noir élégant, détails oranges. Le must-have pour un style moderne.",
//     priceXOF: 14000,
//     priceEUR: 21,
//     variants: [
//       {
//         color: "#0B0B0B",
//         colorName: "Noir Prestige",
//         images: [
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "Polo noir prestige avec détails oranges. L'alliance parfaite entre élégance et caractère.",
//         inStock: true
//       },
//       {
//         color: "#FF6B00",
//         colorName: "Orange Signature",
//         images: [
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "Polo orange signature aux finitions noires. Pour un look audacieux.",
//         inStock: true
//       },
//       {
//         color: "#FFFFFF",
//         colorName: "Blanc Élégant",
//         images: [
//           "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
//           "https://images.unsplash.com/photo-1586363104866-3c5e0b1122e6?w=600",
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
//           "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
//         ],
//         description: "Polo blanc élégant aux détails oranges. La fraîcheur et l'élégance réunies.",
//         inStock: true
//       }
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     popular: true,
//     category: "polo",
//     features: ["Détails orange contrastés", "Tissu premium respirant", "Boutons signature", "Coupe athlétique"],
//     materials: "100% Coton piqué de luxe",
//     careInstructions: "Lavage à 30°, repassage doux"
//   }
// ]


export interface ProductVariant {
  color: string
  colorName: string
  images: string[]
  description: string
  inStock: boolean
}

export interface Product {
  id: number
  name: string
  baseDescription: string
  priceXOF: number
  priceEUR: number
  variants: ProductVariant[]
  sizes: string[]
  popular?: boolean
  category: 't-shirt' | 'polo'
  features: string[]
  materials: string
  careInstructions: string
}

// Import des images depuis le dossier src/IMAGES
// Tu pourras ajuster les chemins et noms de fichiers selon tes images

// T-shirt Pro Ivoire - Orange
import tshirtProOrange1 from '../IMAGES/teeO.jpeg'
// import tshirtProOrange2 from '../IMAGES/tshirt-pro-orange-2.jpg'
// import tshirtProOrange3 from '../IMAGES/tshirt-pro-orange-3.jpg'
// import tshirtProOrange4 from '../IMAGES/tshirt-pro-orange-4.jpg'

// T-shirt Pro Ivoire - Vert
import tshirtProVert1 from '../IMAGES/TEveravant.jpeg'
import tshirtProVert2 from '../IMAGES/TEEV.jpeg'
import tshirtProVert3 from '../IMAGES/TEEvertarr.jpeg'


// T-shirt Pro Ivoire - Blanc
import tshirtProBlanc1 from '../IMAGES/TEEblanAV.jpeg'
import tshirtProBlanc2 from '../IMAGES/TEEblanAR.jpeg'
// import tshirtProBlanc3 from '../IMAGES/TEEblanAR.jpeg'
// import tshirtProBlanc4 from '../IMAGES/tshirt-pro-blanc-4.jpg'

// T-shirt Pro Ivoire - Noir
// import tshirtProNoir1 from '../IMAGES/TEEblanAV2.jpeg'
// import tshirtProNoir2 from '../IMAGES/tshirt-pro-noir-2.jpg'
// import tshirtProNoir3 from '../IMAGES/tshirt-pro-noir-3.jpg'
// import tshirtProNoir4 from '../IMAGES/tshirt-pro-noir-4.jpg'

// Polo Elite Ivoirien - Blanc
import poloEliteBlanc1 from '../IMAGES/poloblancav.jpeg'
import poloEliteBlanc2 from '../IMAGES/poloblancarr.jpeg'
import poloEliteBlanc3 from '../IMAGES/poloblancdou.jpeg'
// import poloEliteBlanc4 from '../IMAGES/polo-elite-blanc-4.jpg'

// Polo Elite Ivoirien - Noir
import poloEliteNoir1 from '../IMAGES/polonoirArr.jpeg'
// import poloEliteNoir2 from '../IMAGES/polo-elite-noir-2.jpg'
// import poloEliteNoir3 from '../IMAGES/polo-elite-noir-3.jpg'
// import poloEliteNoir4 from '../IMAGES/polo-elite-noir-4.jpg'

// Polo Elite Ivoirien - Vert
// import poloEliteVert1 from '../IMAGES/polonoirArr.jpeg'
// import poloEliteVert2 from '../IMAGES/polo-elite-vert-2.jpg'
// import poloEliteVert3 from '../IMAGES/polo-elite-vert-3.jpg'
// import poloEliteVert4 from '../IMAGES/polo-elite-vert-4.jpg'

// Polo Elite Ivoirien - Orange
import poloEliteOrange1 from '../IMAGES/poloOravv.jpeg'
import poloEliteOrange2 from '../IMAGES/poloOrarr.jpeg'
import poloEliteOrange3 from '../IMAGES/poloOrdou.jpeg'
// import poloEliteOrange4 from '../IMAGES/polo-elite-orange-4.jpg'

// T-shirt Éléphant - Blanc
import tshirtElephantBlanc1 from '../IMAGES/TEEblanAV2.jpeg'
import tshirtElephantBlanc2 from '../IMAGES/TEEblanAR.jpeg'
// import tshirtElephantBlanc3 from '../IMAGES/tshirt-elephant-blanc-3.jpg'
// import tshirtElephantBlanc4 from '../IMAGES/tshirt-elephant-blanc-4.jpg'

// T-shirt Éléphant - Noir
// import tshirtElephantNoir1 from '../IMAGES/TEEnoirAV.jpeg'
// import tshirtElephantNoir2 from '../IMAGES/tshirt-elephant-noir-2.jpg'
// import tshirtElephantNoir3 from '../IMAGES/tshirt-elephant-noir-3.jpg'
// import tshirtElephantNoir4 from '../IMAGES/tshirt-elephant-noir-4.jpg'

// T-shirt Éléphant - Orange
import tshirtElephantOrange1S from '../IMAGES/TEEorangeSimpl.jpeg'
// import tshirtElephantOrange2 from '../IMAGES/tshirt-elephant-orange-2.jpg'
// import tshirtElephantOrange3 from '../IMAGES/tshirt-elephant-orange-3.jpg'
// import tshirtElephantOrange4 from '../IMAGES/tshirt-elephant-orange-4.jpg'

// Polo Premium Noir - Noir
import poloPremiumNoir1 from '../IMAGES/polonoirArr.jpeg'
// import poloPremiumNoir2 from '../IMAGES/polo-premium-noir-2.jpg'
// import poloPremiumNoir3 from '../IMAGES/polo-premium-noir-3.jpg'
// import poloPremiumNoir4 from '../IMAGES/polo-premium-noir-4.jpg'

// Polo Premium Noir - Orange
import poloPremiumOrange1 from '../IMAGES/poloOrarr.jpeg'
import poloPremiumOrange2 from '../IMAGES/poloOravv.jpeg'
import poloPremiumOrange3 from '../IMAGES/poloOrdou.jpeg'
// import poloPremiumOrange4 from '../IMAGES/polo-premium-orange-4.jpg'

// Polo Premium Noir - Blanc
import poloPremiumBlanc1 from '../IMAGES/poloblancav.jpeg'
import poloPremiumBlanc2 from '../IMAGES/poloblancarr.jpeg'
import poloPremiumBlanc3 from '../IMAGES/poloblancdou.jpeg'
// import poloPremiumBlanc4 from '../IMAGES/polo-premium-blanc-4.jpg'

// Chemise Premium - Blanc
import CheB from '../IMAGES/ChemiseB.jpeg'
// Chemise Premium - R
import CheR from '../IMAGES/ChemiseR.jpeg'
// Chemise Premium - Orange
import CheO from '../IMAGES/ChemiseO.jpeg'

export const products: Product[] = [
  {
    id: 1,
    name: "T-shirt Pro Ivoire",
    baseDescription: "T-shirt premium en coton biologique. Design élégant aux couleurs de la Côte d'Ivoire.",
    priceXOF: 7000,
    priceEUR: 12,
    variants: [
      {
        color: "#FF6B00",
        colorName: "Orange Ivoirien",
        images: [
          tshirtProOrange1,
        //   tshirtProOrange2,
        //   tshirtProOrange3,
        //   tshirtProOrange4,
        ],
        description: "T-shirt orange vibrant qui capture l'énergie et la passion de la Côte d'Ivoire.",
        inStock: true
      },
      // {
      //   color: "#009E60",
      //   colorName: "Vert Espoir",
      //   images: [
      //     tshirtProVert1,
      //     tshirtProVert2,
      //     tshirtProVert3,
      //   //   tshirtProVert4,
      //   ],
      //   description: "T-shirt vert élégant symbolisant l'espoir et la prospérité.",
      //   inStock: true
      // },
      {
        color: "#FFFFFF",
        colorName: "Blanc Pur",
        images: [
          tshirtProBlanc1,
          tshirtProBlanc2,
        //   tshirtProBlanc3,
        //   tshirtProBlanc4,
        ],
        description: "T-shirt blanc intemporel et polyvalent. La pièce essentielle de toute garde-robe.",
        inStock: true
      },
    //   {
    //     color: "#0B0B0B",
    //     colorName: "Noir Élégant",
    //     images: [
    //       tshirtProNoir1,
    //       tshirtProNoir2,
    //       tshirtProNoir3,
    //       tshirtProNoir4,
    //     ],
    //     description: "T-shirt noir sophistiqué qui allie élégance et caractère.",
    //     inStock: true
    //   }
    ],
    sizes: ["S", "M", "L", "XL"],
    popular: true,
    category: "t-shirt",
    features: ["Coton biologique 100%", "Coupe athlétique premium", "Fini anti-transpirant", "Logo brodé qualité supérieure"],
    materials: "100% Coton biologique certifié GOTS",
    careInstructions: "Lavage à 30°, séchage à l'ombre"
  },
  {
    id: 2,
    name: "Polo Elite Ivoirien",
    baseDescription: "Polo chic et sportif. Coupe ajustée, col contrasté.",
    priceXOF: 8000,
    priceEUR: 18,
    variants: [
      {
        color: "#FFFFFF",
        colorName: "Blanc Royal",
        images: [
          poloEliteBlanc1,
          poloEliteBlanc2,
           poloEliteBlanc3,
        //   poloEliteBlanc4,
        ],
        description: "Polo blanc élégant avec finitions premium. Le choix des connaisseurs.",
        inStock: true
      },
      {
        color: "#0B0B0B",
        colorName: "Noir Prestige",
        images: [
          poloEliteNoir1,
        //   poloEliteNoir2,
        //   poloEliteNoir3,
        //   poloEliteNoir4,
        ],
        description: "Polo noir au design sophistiqué. Parfait pour un look professionnel.",
        inStock: true
      },
    //   {
    //     color: "#009E60",
    //     colorName: "Vert Émeraude",
    //     images: [
    //       poloEliteVert1,
    //     //   poloEliteVert2,
    //     //   poloEliteVert3,
    //     //   poloEliteVert4,
    //     ],
    //     description: "Polo vert émeraude qui capture l'essence de la nature ivoirienne.",
    //     inStock: true
    //   },
      {
        color: "#FF6B00",
        colorName: "Orange Flamboyant",
        images: [
          poloEliteOrange1,
          poloEliteOrange2,
          poloEliteOrange3,
        //   poloEliteOrange4,
        ],
        description: "Polo orange flamboyant pour ceux qui veulent se démarquer avec style.",
        inStock: true
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    popular: true,
    category: "polo",
    features: ["Piqué de coton premium", "Col contrasté brodé", "Boutons nacrés", "Coupe ajustée moderne"],
    materials: "100% Coton piqué de haute qualité",
    careInstructions: "Lavage à 30°, repassage à température moyenne"
  },
  {
    id: 3,
    name: "T-shirt Éléphant",
    baseDescription: "T-shirt avec motif élégant de l'éléphant, symbole de force et de sagesse.",
    priceXOF: 7000,
    priceEUR: 14,
    variants: [
      {
        color: "#FFFFFF",
        colorName: "Blanc Pur",
        images: [
          tshirtElephantBlanc1,
          tshirtElephantBlanc2,
        //   tshirtElephantBlanc3,
        //   tshirtElephantBlanc4,
        ],
        description: "T-shirt blanc avec motif éléphant. Symbole de force et de sagesse.",
        inStock: true
      },
    //   {
    //     color: "#0B0B0B",
    //     colorName: "Noir Élégant",
    //     images: [
    //       tshirtElephantNoir1,
    //       tshirtElephantNoir2,
    //       tshirtElephantNoir3,
    //       tshirtElephantNoir4,
    //     ],
    //     description: "T-shirt noir au motif éléphant raffiné. Un design unique.",
    //     inStock: true
    //   },
    {
        color: "#009E60",
        colorName: "Vert Espoir",
        images: [
          tshirtProVert1,
          tshirtProVert2,
          tshirtProVert3,
        //   tshirtProVert4,
        ],
        description: "T-shirt vert élégant symbolisant l'espoir et la prospérité.",
        inStock: true
      },
      {
        color: "#FF6B00",
        colorName: "Orange Tendance",
        images: [
          tshirtElephantOrange1S,
        //   tshirtElephantOrange2,
        //   tshirtElephantOrange3,
        //   tshirtElephantOrange4,
        ],
        description: "T-shirt orange tendance au motif éléphant. L'audace et l'élégance réunies.",
        inStock: true
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    category: "t-shirt",
    features: ["Motif éléphant brodé", "Coton doux et résistant", "Finition soignée", "Design exclusif"],
    materials: "100% Coton premium",
    careInstructions: "Lavage à 30°, séchage à l'ombre"
  },
  {
    id: 4,
    name: "Polo Premium ",
    baseDescription: "Polo noir élégant, détails oranges. Le must-have pour un style moderne.",
    priceXOF: 10000,
    priceEUR: 21,
    variants: [
      {
        color: "#0B0B0B",
        colorName: "Noir Prestige",
        images: [
          poloPremiumNoir1,
        //   poloPremiumNoir2,
        //   poloPremiumNoir3,
        //   poloPremiumNoir4,
        ],
        description: "Polo noir prestige avec détails oranges. L'alliance parfaite entre élégance et caractère.",
        inStock: true
      },
      {
        color: "#FF6B00",
        colorName: "Orange Signature",
        images: [
          poloPremiumOrange1,
          poloPremiumOrange2,
          poloPremiumOrange3,
        //   poloPremiumOrange4,
        ],
        description: "Polo orange signature aux finitions noires. Pour un look audacieux.",
        inStock: true
      },
      {
        color: "#FFFFFF",
        colorName: "Blanc Élégant",
        images: [
          poloPremiumBlanc1,
          poloPremiumBlanc2,
          poloPremiumBlanc3,
        //   poloPremiumBlanc4,
        ],
        description: "Polo blanc élégant aux détails oranges. La fraîcheur et l'élégance réunies.",
        inStock: true
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    popular: true,
    category: "polo",
    features: ["Détails orange contrastés", "Tissu premium respirant", "Boutons signature", "Coupe athlétique"],
    materials: "100% Coton piqué de luxe",
    careInstructions: "Lavage à 30°, repassage doux"
  },
    {
    id: 5,
    name: "Chemise Pro Ivoire",
    baseDescription: "Chemise premium en coton biologique. Design élégant aux couleurs de la Côte d'Ivoire.",
    priceXOF: 15000,
    priceEUR: 12,
    variants: [
      {
        color: "#FF6B00",
        colorName: "Orange Ivoirien",
        images: [
          CheO,
        //   tshirtProOrange2,
        //   tshirtProOrange3,
        //   tshirtProOrange4,
        ],
        description: "Chemise orange vibrant qui capture l'énergie et la passion de la Côte d'Ivoire.",
        inStock: true
      },
      // {
      //   color: "#009E60",
      //   colorName: "Vert Espoir",
      //   images: [
      //     tshirtProVert1,
      //     tshirtProVert2,
      //     tshirtProVert3,
      //   //   tshirtProVert4,
      //   ],
      //   description: "T-shirt vert élégant symbolisant l'espoir et la prospérité.",
      //   inStock: true
      // },
      {
        color: "#FFFFFF",
        colorName: "Blanc Pur",
        images: [
          CheB,
          // tshirtProBlanc2,
        //   tshirtProBlanc3,
        //   tshirtProBlanc4,
        ],
        description: "Chemise blanc intemporelle et polyvalente. La pièce essentielle de toute garde-robe.",
        inStock: true
      },
      {
        color: "#F4B4C4",
        colorName: "Rose Élégant",
        images: [
         CheR
        ],
        description: "Chemise à rayures rose sophistiquée qui allie élégance et caractère.",
        inStock: true
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    popular: true,
    category: "t-shirt",
    features: ["Coton biologique 100%", "Coupe athlétique premium", "Fini anti-transpirant", "Logo brodé qualité supérieure"],
    materials: "100% Coton biologique certifié GOTS",
    careInstructions: "Lavage à 30°, séchage à l'ombre"
  },
]
