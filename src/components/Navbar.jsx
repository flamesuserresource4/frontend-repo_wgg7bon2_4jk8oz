import { ShoppingBag, Search } from 'lucide-react'

export default function Navbar({ onSearch, cartCount }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-black tracking-tight text-2xl">
          Aura
          <span className="text-rose-500">Bloom</span>
        </a>

        <div className="hidden md:flex items-center gap-2 w-full max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari parfum..."
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-rose-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="/test" className="text-sm text-gray-500 hover:text-gray-700">Status</a>
          <button className="relative inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-4 py-2 shadow hover:bg-rose-600 transition">
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Keranjang</span>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 grid place-items-center rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
