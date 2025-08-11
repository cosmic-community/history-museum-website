'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-strong border-b border-neutral-200/50' 
          : 'bg-white/90 backdrop-blur-sm shadow-soft'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-display font-bold text-2xl">M</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                American Museum
              </h1>
              <p className="text-sm text-neutral-600 font-medium">Natural History</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border-2 border-neutral-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 focus-museum"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute inset-x-0 top-2 h-0.5 bg-primary transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                }`}
              />
              <span 
                className={`absolute inset-x-0 top-1/2 -translate-y-0.5 h-0.5 bg-primary transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`absolute inset-x-0 bottom-2 h-0.5 bg-primary transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="border-t border-neutral-200 pt-6">
            <Navigation isMobile={true} onItemClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  )
}