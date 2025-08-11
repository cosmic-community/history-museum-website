import Link from 'next/link'

interface NavigationProps {
  isMobile?: boolean
  onItemClick?: () => void
}

export default function Navigation({ isMobile = false, onItemClick }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/exhibitions', label: 'Exhibitions' },
    { href: '/collections', label: 'Collections' },
    { href: '/programs', label: 'Education' },
    { href: '/events', label: 'Events' },
  ]

  const baseClasses = 'font-medium transition-colors duration-200 hover:text-primary'
  const desktopClasses = 'text-gray-700 px-4 py-2'
  const mobileClasses = 'text-gray-700 block px-4 py-3 border-b border-gray-100 last:border-b-0'

  return (
    <nav>
      <ul className={isMobile ? 'space-y-0' : 'flex items-center space-x-2'}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}