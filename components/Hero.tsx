import { HeroProps } from '@/types'

export default function Hero({ title, subtitle, backgroundImage, children }: HeroProps) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${backgroundImage}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt=""
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}