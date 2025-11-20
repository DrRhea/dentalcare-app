'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Tentang' },
    { href: '/edukasi', label: 'Edukasi' },
    { href: '/status', label: 'Status' },
    { href: '/contact', label: 'Kontak' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-accent hover:text-accent/80 transition-colors duration-200">
            SI BUNDA GIGI
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative font-semibold text-secondary
                    transition-all duration-300 ease-in-out
                    hover:text-accent
                    ${isActive ? 'text-accent' : ''}
                    group
                  `}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Underline animation */}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-0.5 bg-accent
                      transition-all duration-300 ease-in-out
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>
          <div className="md:hidden">
            <button className="text-secondary font-semibold hover:text-accent transition-colors duration-200">
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

