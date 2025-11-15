import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DentalCare
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              Tentang
            </Link>
            <Link href="/report" className="text-gray-700 hover:text-blue-600 transition">
              Raport Digital
            </Link>
            <Link href="/edukasi" className="text-gray-700 hover:text-blue-600 transition">
              Edukasi
            </Link>
            <Link href="/pretest" className="text-gray-700 hover:text-blue-600 transition">
              Pretest
            </Link>
            <Link href="/konsultasi" className="text-gray-700 hover:text-blue-600 transition">
              Konsultasi
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Kontak
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700">
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

