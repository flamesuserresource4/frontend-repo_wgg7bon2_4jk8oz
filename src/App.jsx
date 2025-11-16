import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

function App() {
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  // Prefill sample items into DB if empty (one-time on first open)
  useEffect(() => {
    const seed = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      try {
        const r = await fetch(`${baseUrl}/api/perfumes`)
        const data = await r.json()
        if (Array.isArray(data) && data.length === 0) {
          const samples = [
            {
              name: 'Citrus Bloom',
              brand: 'Aurora',
              description: 'Segar, cerah, dan memikat dengan sentuhan jeruk dan bunga putih.',
              price: 59.0,
              image: 'https://images.unsplash.com/photo-1623623495171-b55cc3d9ecc9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaXRydXMlMjBCbG9vbXxlbnwwfDB8fHwxNzYzMzEzODQ5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
              notes: ['bergamot', 'orange blossom', 'musk'],
              category: 'Eau de Parfum',
              gender: 'Unisex',
              rating: 4.8,
              stock: 20,
            },
            {
              name: 'Velvet Noir',
              brand: 'Maison Lumière',
              description: 'Hangat dan misterius, perpaduan vanilla dan amber.',
              price: 89.0,
              image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop',
              notes: ['vanilla', 'amber', 'patchouli'],
              category: 'Eau de Parfum',
              gender: 'Women',
              rating: 4.6,
              stock: 12,
            },
            {
              name: 'Forest Mist',
              brand: 'Nordic',
              description: 'Aroma segar hutan pagi, herbal dan menenangkan.',
              price: 72.0,
              image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1200&auto=format&fit=crop',
              notes: ['pine', 'sage', 'vetiver'],
              category: 'Eau de Toilette',
              gender: 'Men',
              rating: 4.7,
              stock: 15,
            },
            {
              name: 'Rose Aurora',
              brand: 'Fleur',
              description: 'Bunga mawar modern dengan sentuhan buah segar.',
              price: 64.0,
              image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
              notes: ['rose', 'pear', 'musk'],
              category: 'Eau de Parfum',
              gender: 'Women',
              rating: 4.5,
              stock: 18,
            },
          ]
          await Promise.all(
            samples.map((s) =>
              fetch(`${baseUrl}/api/perfumes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(s),
              })
            )
          )
        }
      } catch (e) {
        // ignore on first load if backend not ready
      }
    }
    seed()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white">
      <Navbar onSearch={setQuery} cartCount={cartCount} />
      <Hero />
      <ProductGrid query={query} />

      <footer className="border-t border-black/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AuraBloom. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
