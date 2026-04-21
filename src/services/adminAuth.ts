// // src/services/adminAuth.ts
// import { supabase } from './supabase'

// // Clé de session dans localStorage
// const ADMIN_SESSION_KEY = 'petal_admin_session'

// export interface AdminSession {
//   email: string
//   shopName: string
//   whatsappNumber: string
//   loggedInAt: string
// }

// export const adminAuthService = {
//   // Se connecter
//   async login(email: string, password: string): Promise<{
//     success: boolean
//     message: string
//     session?: AdminSession
//   }> {
//     try {
//       // Appeler la fonction PostgreSQL pour vérifier les identifiants
//       const { data, error } = await supabase.rpc('admin_login', {
//         p_email: email,
//         p_password: password
//       })

//       if (error) {
//         console.error('Login error:', error)
//         return {
//           success: false,
//           message: 'Erreur de connexion au serveur'
//         }
//       }

//       if (!data || data.length === 0) {
//         return {
//           success: false,
//           message: 'Erreur inconnue'
//         }
//       }

//       const result = data[0]

//       if (!result.success) {
//         return {
//           success: false,
//           message: result.message || 'Identifiants incorrects'
//         }
//       }

//       // Créer la session
//       const session: AdminSession = {
//         email,
//         shopName: result.shop_name,
//         whatsappNumber: result.whatsapp_number,
//         loggedInAt: new Date().toISOString()
//       }

//       // Sauvegarder la session
//       this.saveSession(session)

//       return {
//         success: true,
//         message: result.message,
//         session
//       }

//     } catch (error: any) {
//       console.error('Login exception:', error)
//       return {
//         success: false,
//         message: error.message || 'Erreur inattendue'
//       }
//     }
//   },

//   // Sauvegarder la session
//   saveSession(session: AdminSession): void {
//     localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session))
//   },

//   // Récupérer la session
//   getSession(): AdminSession | null {
//     try {
//       const sessionStr = localStorage.getItem(ADMIN_SESSION_KEY)
//       if (!sessionStr) return null

//       const session = JSON.parse(sessionStr)
      
//       // Vérifier que la session n'est pas trop vieille (24h max)
//       const loginTime = new Date(session.loggedInAt).getTime()
//       const now = Date.now()
//       const maxAge = 24 * 60 * 60 * 1000 // 24 heures

//       if (now - loginTime > maxAge) {
//         this.logout()
//         return null
//       }

//       return session
//     } catch (error) {
//       return null
//     }
//   },

//   // Se déconnecter
//   logout(): void {
//     localStorage.removeItem(ADMIN_SESSION_KEY)
//     window.location.href = '/admin/login'
//   },

//   // Vérifier si l'utilisateur est connecté
//   isAuthenticated(): boolean {
//     return this.getSession() !== null
//   },

//   // Changer le mot de passe
//   async changePassword(currentPassword: string, newPassword: string): Promise<{
//     success: boolean
//     message: string
//   }> {
//     try {
//       const session = this.getSession()
//       if (!session) {
//         return {
//           success: false,
//           message: 'Non authentifié'
//         }
//       }

//       const { data, error } = await supabase.rpc('change_admin_password', {
//         current_password: currentPassword,
//         new_password: newPassword
//       })

//       if (error) {
//         console.error('Change password error:', error)
//         return {
//           success: false,
//           message: 'Erreur lors du changement de mot de passe'
//         }
//       }

//       return {
//         success: true,
//         message: data || 'Mot de passe changé avec succès'
//       }

//     } catch (error: any) {
//       console.error('Change password exception:', error)
//       return {
//         success: false,
//         message: error.message || 'Erreur inattendue'
//       }
//     }
//   },

//   // Vérifier la connexion avec le serveur (optionnel)
//   async validateSession(): Promise<boolean> {
//     const session = this.getSession()
//     if (!session) return false

//     // Ici, vous pourriez appeler une fonction serveur
//     // pour vérifier que la session est toujours valide
//     return true
//   }
// }


// import { supabase } from './supabase'

// // Clé de session dans localStorage
// const ADMIN_SESSION_KEY = 'petal_admin_session_v2'

// export interface AdminSession {
//   email: string
//   shopName: string
//   whatsappNumber: string
//   loggedInAt: string
//   isAuthenticated: boolean
// }

// export const adminAuthService = {
//   // Se connecter
//   async login(email: string, password: string): Promise<{
//     success: boolean
//     message: string
//     session?: AdminSession
//   }> {
//     try {
//       console.log('Tentative de connexion avec:', email)
      
//       // Appeler la fonction PostgreSQL pour vérifier les identifiants
//       const { data, error } = await supabase.rpc('admin_login', {
//         p_email: email,
//         p_password: password
//       })

//       console.log('Réponse de Supabase:', data, error)

//       if (error) {
//         console.error('Login error:', error)
//         return {
//           success: false,
//           message: 'Erreur de connexion au serveur: ' + error.message
//         }
//       }

//       if (!data || data.length === 0) {
//         return {
//           success: false,
//           message: 'Aucune réponse du serveur'
//         }
//       }

//       const result = data[0]

//       if (!result.success) {
//         return {
//           success: false,
//           message: result.message || 'Identifiants incorrects'
//         }
//       }

//       // Créer la session
//       const session: AdminSession = {
//         email,
//         shopName: result.shop_name,
//         whatsappNumber: result.whatsapp_number,
//         loggedInAt: new Date().toISOString(),
//         isAuthenticated: true
//       }

//       // Sauvegarder la session
//       this.saveSession(session)

//       return {
//         success: true,
//         message: result.message,
//         session
//       }

//     } catch (error: any) {
//       console.error('Login exception:', error)
//       return {
//         success: false,
//         message: error.message || 'Erreur inattendue'
//       }
//     }
//   },

//   // Sauvegarder la session
//   saveSession(session: AdminSession): void {
//     localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session))
//   },

//   // Récupérer la session
//   getSession(): AdminSession | null {
//     try {
//       const sessionStr = localStorage.getItem(ADMIN_SESSION_KEY)
//       if (!sessionStr) return null

//       const session = JSON.parse(sessionStr) as AdminSession
      
//       // Vérifier que la session n'est pas trop vieille (24h max)
//       const loginTime = new Date(session.loggedInAt).getTime()
//       const now = Date.now()
//       const maxAge = 24 * 60 * 60 * 1000 // 24 heures

//       if (now - loginTime > maxAge) {
//         this.logout()
//         return null
//       }

//       return session
//     } catch (error) {
//       console.error('Error parsing session:', error)
//       return null
//     }
//   },

//   // Se déconnecter
//   logout(): void {
//     localStorage.removeItem(ADMIN_SESSION_KEY)
//     window.location.href = '/admin/login'
//   },

//   // Vérifier si l'utilisateur est connecté
//   isAuthenticated(): boolean {
//     const session = this.getSession()
//     return !!(session && session.isAuthenticated)
//   },

//   // Changer le mot de passe
//   async changePassword(currentPassword: string, newPassword: string): Promise<{
//     success: boolean
//     message: string
//   }> {
//     try {
//       const session = this.getSession()
//       if (!session) {
//         return {
//           success: false,
//           message: 'Non authentifié'
//         }
//       }

//       const { data, error } = await supabase.rpc('change_admin_password', {
//         current_password: currentPassword,
//         new_password: newPassword
//       })

//       if (error) {
//         console.error('Change password error:', error)
//         return {
//           success: false,
//           message: 'Erreur lors du changement de mot de passe: ' + error.message
//         }
//       }

//       return {
//         success: true,
//         message: data || 'Mot de passe changé avec succès'
//       }

//     } catch (error: any) {
//       console.error('Change password exception:', error)
//       return {
//         success: false,
//         message: error.message || 'Erreur inattendue'
//       }
//     }
//   },

//   // Fonction de secours pour créer un admin si nécessaire
//   async createInitialAdmin(email: string, password: string): Promise<{
//     success: boolean
//     message: string
//   }> {
//     try {
//       const { data, error } = await supabase.rpc('setup_admin', {
//         p_email: email,
//         p_password: password
//       })

//       if (error) {
//         return {
//           success: false,
//           message: 'Erreur: ' + error.message
//         }
//       }

//       return {
//         success: true,
//         message: data || 'Admin créé avec succès'
//       }

//     } catch (error: any) {
//       return {
//         success: false,
//         message: error.message || 'Erreur inattendue'
//       }
//     }
//   }
// }


// IMPORTANT: Ne pas importer depuis supabase.ts, créer un client séparé
import { createClient } from '@supabase/supabase-js'

// Créer un client dédié pour l'auth
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variables d\'environnement Supabase manquantes')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Clé de session dans localStorage
const ADMIN_SESSION_KEY = 'petal_admin_session_v3'

export interface AdminSession {
  email: string
  shopName: string
  whatsappNumber: string
  loggedInAt: string
  isAuthenticated: boolean
}

export const adminAuthService = {
  // Se connecter
  async login(email: string, password: string): Promise<{
    success: boolean
    message: string
    session?: AdminSession
  }> {
    try {
      console.log('🔐 Tentative de connexion admin:', email)
      
      // Appeler la fonction PostgreSQL pour vérifier les identifiants
      const { data, error } = await supabase.rpc('admin_login', {
        p_email: email,
        p_password: password
      })

      console.log('📡 Réponse de admin_login:', data, error)

      if (error) {
        console.error('❌ Erreur RPC:', error)
        return {
          success: false,
          message: 'Erreur technique: ' + error.message
        }
      }

      if (!data || data.length === 0) {
        return {
          success: false,
          message: 'Aucune réponse du serveur'
        }
      }

      // Supabase RPC may return a single object or an array of rows.
      const result = Array.isArray(data) ? data[0] : data

      if (!result) {
        console.error('Login failed: unexpected RPC result shape', data)
        return {
          success: false,
          message: 'Réponse inattendue du serveur'
        }
      }

      if (!result.success) {
        return {
          success: false,
          message: result.message || 'Identifiants incorrects'
        }
      }

      // Créer la session
      const session: AdminSession = {
        email,
        shopName: result.shop_name || 'Petal',
        whatsappNumber: result.whatsapp_number || '+225712613361',
        loggedInAt: new Date().toISOString(),
        isAuthenticated: true
      }

      // Sauvegarder la session
      this.saveSession(session)

      console.log('✅ Connexion réussie pour:', email)
      return {
        success: true,
        message: result.message,
        session
      }

    } catch (error: any) {
      console.error('💥 Exception lors de la connexion:', error)
      return {
        success: false,
        message: error.message || 'Erreur inattendue'
      }
    }
  },

  // Sauvegarder la session
  saveSession(session: AdminSession): void {
    try {
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session))
      console.log('💾 Session sauvegardée pour:', session.email)
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la session:', error)
    }
  },

  // Récupérer la session
  getSession(): AdminSession | null {
    try {
      const sessionStr = localStorage.getItem(ADMIN_SESSION_KEY)
      if (!sessionStr) {
        console.log('📭 Aucune session trouvée')
        return null
      }

      const session = JSON.parse(sessionStr) as AdminSession
      
      // Vérifier que la session n'est pas trop vieille (24h max)
      const loginTime = new Date(session.loggedInAt).getTime()
      const now = Date.now()
      const maxAge = 24 * 60 * 60 * 1000 // 24 heures

      if (now - loginTime > maxAge) {
        console.log('⏰ Session expirée')
        this.logout()
        return null
      }

      console.log('📖 Session récupérée pour:', session.email)
      return session
    } catch (error) {
      console.error('❌ Erreur lors du parsing de la session:', error)
      return null
    }
  },

  // Se déconnecter
  logout(): void {
    localStorage.removeItem(ADMIN_SESSION_KEY)
    console.log('🚪 Déconnexion')
    window.location.href = '/admin/login'
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    const session = this.getSession()
    const authenticated = !!(session && session.isAuthenticated)
    console.log('🔍 Vérification auth:', authenticated ? 'Connecté' : 'Non connecté')
    return authenticated
  },

  // Changer le mot de passe
  async changePassword(currentPassword: string, newPassword: string): Promise<{
    success: boolean
    message: string
  }> {
    try {
      const session = this.getSession()
      if (!session) {
        return {
          success: false,
          message: 'Non authentifié'
        }
      }

      const { data, error } = await supabase.rpc('change_admin_password', {
        current_password: currentPassword,
        new_password: newPassword
      })

      if (error) {
        console.error('❌ Erreur lors du changement de mot de passe:', error)
        return {
          success: false,
          message: 'Erreur technique: ' + error.message
        }
      }

      console.log('✅ Mot de passe changé pour:', session.email)
      return {
        success: true,
        message: data || 'Mot de passe changé avec succès'
      }

    } catch (error: any) {
      console.error('💥 Exception lors du changement de mot de passe:', error)
      return {
        success: false,
        message: error.message || 'Erreur inattendue'
      }
    }
  },

  // Fonction de secours pour créer un admin
  async createInitialAdmin(email: string, password: string): Promise<{
    success: boolean
    message: string
  }> {
    try {
      console.log('👤 Création admin initial:', email)
      
      const { data, error } = await supabase.rpc('setup_admin', {
        p_email: email,
        p_password: password
      })

      if (error) {
        console.error('❌ Erreur création admin:', error)
        return {
          success: false,
          message: 'Erreur: ' + error.message
        }
      }

      console.log('✅ Admin créé:', data)
      return {
        success: true,
        message: data || 'Admin créé avec succès'
      }

    } catch (error: any) {
      console.error('💥 Exception création admin:', error)
      return {
        success: false,
        message: error.message || 'Erreur inattendue'
      }
    }
  },

  // Test de connexion
  async testConnection(): Promise<boolean> {
    try {
      const { error } = await supabase.rpc('test_connection')
      if (error && !error.message.includes('does not exist')) {
        console.error('❌ Test connection RPC:', error)
        return false
      }
      console.log('✅ Test connection OK')
      return true
    } catch (error) {
      console.error('💥 Test connection exception:', error)
      return false
    }
  }
}

// Exporter par défaut aussi
export default adminAuthService