'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  isMobile?: boolean
  onItemClick?: () => void
}

export default function Navigation({ isMobile = false, onItemClick }: NavigationProps) {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/exhibitions', label: 'Exhibitions' },
    { href: '/collections', label: 'Collections' },
    { href: '/programs', label: 'Education' },
    { href: '/events', label: 'Events' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const baseClasses = 'font-medium transition-all duration-300 relative group'
  const desktopClasses = 'px-4 py-2 rounded-xl hover:bg-primary/5'
  const mobileClasses = 'block px-4 py-3 rounded-xl hover:bg-primary/5'

  return (
    <nav>
      <ul className={isMobile ? 'space-y-2' : 'flex items-center space-x-2'}>
        {navItems.map((item) => {
          const active = isActive(item.href)
          
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  ${baseClasses} 
                  ${isMobile ? mobileClasses : desktopClasses}
                  ${active 
                    ? 'text-primary bg-primary/10' 
                    : 'text-neutral-700 hover:text-primary'
                  }
                `}
                onClick={onItemClick}
              >
                {item.label}
                
                {/* Active indicator for desktop */}
                {!isMobile && (
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 ${
                      active ? 'w-6' : 'group-hover:w-4'
                    }`}
                  />
                )}

                {/* Active indicator for mobile */}
                {isMobile && active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-r-full" />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}