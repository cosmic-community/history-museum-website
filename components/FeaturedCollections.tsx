import Link from 'next/link'
import { getCollections } from '@/lib/cosmic'
import CollectionCard from '@/components/CollectionCard'

export default async function FeaturedCollections() {
  const collections = await getCollections()
  const featuredCollections = collections.slice(0, 4)

  if (featuredCollections.length === 0) {
    return null
  }

  return (
    <section className="section-padding pattern-stone">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Featured Collections
          </div>
          <h2 className="heading-section">
            Discover Our Treasures
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore our world-renowned collection of specimens and artifacts, each piece telling a unique story of our planet's incredible history
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {featuredCollections.map((item, index) => (
            <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CollectionCard item={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/collections" className="btn-primary group">
            <span>Explore All Collections</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}