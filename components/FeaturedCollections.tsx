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
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our world-renowned collection of specimens and artifacts from around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCollections.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/collections" className="btn-primary">
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  )
}