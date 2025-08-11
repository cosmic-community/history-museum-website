import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-800 to-accent text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pattern-stone opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full -translate-y-32"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full translate-y-48"></div>
      
      <div className="relative z-10">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-strong">
                  <span className="text-white font-display font-bold text-2xl">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">American Museum</h3>
                  <p className="text-white/80 font-medium">Natural History</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed text-lg mb-8 max-w-lg">
                One of the world's preeminent scientific and cultural institutions, dedicated to exploring and understanding the natural world through groundbreaking research and inspiring exhibitions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: 'facebook', href: '#', label: 'Facebook' },
                  { icon: 'twitter', href: '#', label: 'Twitter' },
                  { icon: 'instagram', href: '#', label: 'Instagram' },
                  { icon: 'youtube', href: '#', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-secondary/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon === 'facebook' && (
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      )}
                      {social.icon === 'twitter' && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      )}
                      {social.icon === 'instagram' && (
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.553 3.708 13.402 3.708 12.105s.49-2.448 1.297-3.33c.882-.807 2.033-1.297 3.33-1.297s2.448.49 3.33 1.297c.807.882 1.297 2.033 1.297 3.33s-.49 2.448-1.297 3.33c-.882.808-2.033 1.298-3.33 1.298z"/>
                      )}
                      {social.icon === 'youtube' && (
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-display font-semibold mb-6">Explore</h4>
              <ul className="space-y-3">
                {[
                  { href: '/exhibitions', label: 'Exhibitions' },
                  { href: '/collections', label: 'Collections' },
                  { href: '/programs', label: 'Educational Programs' },
                  { href: '/events', label: 'Events & Lectures' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit Info */}
            <div>
              <h4 className="text-xl font-display font-semibold mb-6">Visit Us</h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-medium text-white mb-1">Address</p>
                  <p className="leading-relaxed">
                    Central Park West & 79th St<br />
                    New York, NY 10024
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <p>(212) 769-5100</p>
                </div>
                
                <div>
                  <p className="font-medium text-white mb-1">Hours</p>
                  <p>Daily 10:00 AM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-white/60 text-sm">
                © 2024 American Museum of Natural History. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { href: '#', label: 'Privacy Policy' },
                  { href: '#', label: 'Terms of Use' },
                  { href: '#', label: 'Accessibility' },
                  { href: '#', label: 'Contact Us' },
                ].map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}