'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">American Museum</h1>
              <p className="text-sm text-gray-600">Natural History</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-primary hover:border-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
            <Navigation isMobile={true} onItemClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  )
}