import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'
import { ScrollToTop } from './components/UI/ScrollToTop'
import { Home } from './pages/Home'
import { Catalogue } from './pages/Catalogue'
import { Product } from './pages/Product'
import { CurrencyProvider } from './hooks/useCurrency'

function App() {
  return (
    <CurrencyProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-dark">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/produit/:id" element={<Product />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  )
}

export default App
