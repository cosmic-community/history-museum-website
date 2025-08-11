import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About the Museum</h3>
            <p className="text-gray-300 mb-4">
              The American Museum of Natural History is one of the world's preeminent scientific and cultural institutions, dedicated to exploring the natural world.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <div>
                <h4 className="font-semibold">American Museum</h4>
                <p className="text-sm text-gray-300">Natural History</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/exhibitions" className="text-gray-300 hover:text-white transition-colors">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-300 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Educational Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-xl font-bold mb-4">Visit</h3>
            <div className="text-gray-300 space-y-2">
              <p>Central Park West & 79th St</p>
              <p>New York, NY 10024</p>
              <p>Phone: (212) 769-5100</p>
              <p className="mt-4">
                <span className="font-semibold text-white">Hours:</span><br />
                Daily 10am-5:30pm
              </p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Stay connected with the latest exhibitions, programs, and discoveries.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.553 3.708 13.402 3.708 12.105s.49-2.448 1.297-3.33c.882-.807 2.033-1.297 3.33-1.297s2.448.49 3.33 1.297c.807.882 1.297 2.033 1.297 3.33s-.49 2.448-1.297 3.33c-.882.808-2.033 1.298-3.33 1.298z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 American Museum of Natural History. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}