import Link from 'next/link'
import { getExhibitionsByStatus } from '@/lib/cosmic'
import ExhibitionCard from '@/components/ExhibitionCard'
import type { ExhibitionStatus } from '@/types'

export default async function FeaturedExhibitions() {
  // Fix: Use proper ExhibitionStatus type values
  const currentExhibitions = await getExhibitionsByStatus('current' as ExhibitionStatus)
  const upcomingExhibitions = await getExhibitionsByStatus('upcoming' as ExhibitionStatus)
  
  const featuredExhibitions = [...currentExhibitions, ...upcomingExhibitions].slice(0, 3)

  if (featuredExhibitions.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-museum-stone/5">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Current & Upcoming
          </div>
          <h2 className="heading-section">
            Featured Exhibitions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in our carefully curated exhibitions showcasing the wonders and mysteries of the natural world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExhibitions.map((exhibition, index) => (
            <div key={exhibition.id} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <ExhibitionCard exhibition={exhibition} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/exhibitions" className="btn-secondary group">
            <span>View All Exhibitions</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}