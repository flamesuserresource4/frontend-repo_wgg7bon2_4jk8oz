import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl bg-white/70 backdrop-blur rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">E-commerce Parfum</p>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Temukan aroma yang mencerminkan
            <span className="text-rose-600"> kepribadianmu</span>
          </h1>
          <p className="mt-4 text-gray-600">Koleksi parfum curated dengan sentuhan vintage yang elegan. Interaktif, menawan, dan siap dikirim.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#products" className="inline-flex rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800 transition">Belanja Sekarang</a>
            <a href="#about" className="inline-flex rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition">Pelajari</a>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
      </div>
    </section>
  )
}
