import { useEffect, useState, useMemo } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ query }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${baseUrl}/api/perfumes`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError('Gagal memuat produk')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    if (!query) return items
    const q = query.toLowerCase()
    return items.filter((i) =>
      i.name.toLowerCase().includes(q) || i.brand.toLowerCase().includes(q)
    )
  }, [items, query])

  if (loading) return <p className="text-center text-gray-500">Memuat produk...</p>
  if (error) return <p className="text-center text-red-600">{error}</p>

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black">Koleksi Terbaru</h2>
          <p className="text-gray-500">Aroma pilihan untuk setiap momen.</p>
        </div>
        <p className="text-sm text-gray-500">{filtered.length} produk</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
