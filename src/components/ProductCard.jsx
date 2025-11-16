import { Star } from 'lucide-react'

export default function ProductCard({ item }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <div className="aspect-square rounded-xl bg-gradient-to-br from-rose-50 to-amber-50 grid place-items-center overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl">🌸</div>
        )}
      </div>
      <div className="mt-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.brand}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-700">{(item.rating ?? 4.7).toFixed(1)}</span>
          </div>
        </div>
        <p className="mt-2 font-bold">${item.price.toFixed(2)}</p>
        {item.notes?.length ? (
          <p className="mt-1 text-xs text-gray-500 line-clamp-2">Notes: {item.notes.slice(0,3).join(', ')}</p>
        ) : null}
        <button className="mt-3 w-full rounded-full bg-rose-500 text-white py-2 font-semibold hover:bg-rose-600 transition">Tambah ke Keranjang</button>
      </div>
    </div>
  )
}
