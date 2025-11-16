import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-accent">
            SI BUNDA GIGI
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-secondary hover:text-secondary/80 transition">
              Home
            </Link>
            <Link href="/about" className="text-secondary hover:text-secondary/80 transition">
              Tentang
            </Link>
            <Link href="/edukasi" className="text-secondary hover:text-secondary/80 transition">
              Edukasi
            </Link>
            <Link href="/status" className="text-secondary hover:text-secondary/80 transition">
              Status
            </Link>
            <Link href="/contact" className="text-secondary hover:text-secondary/80 transition">
              Kontak
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

