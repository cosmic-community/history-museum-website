import { HeroProps } from '@/types'

export default function Hero({ title, subtitle, backgroundImage, children }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 scale-110">
            <img
              src={`${backgroundImage}?w=2400&h=1600&fit=crop&auto=format,compress`}
              alt=""
              className="w-full h-full object-cover animate-slow-zoom"
              width="2400"
              height="1600"
            />
          </div>
          <div className="absolute inset-0 gradient-overlay-museum"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-float opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-float animation-delay-2000 opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-float animation-delay-4000 opacity-30"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-shadow leading-tight">
            <span className="inline-block animate-slide-up">{title}</span>
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-shadow-soft max-w-4xl mx-auto leading-relaxed font-light animate-slide-up animation-delay-500">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="animate-slide-up animation-delay-1000">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-sm font-medium mb-2 tracking-wider uppercase">Explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}