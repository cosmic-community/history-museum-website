import Link from 'next/link'
import { getExhibitionsByStatus } from '@/lib/cosmic'
import ExhibitionCard from '@/components/ExhibitionCard'

export default async function FeaturedExhibitions() {
  const currentExhibitions = await getExhibitionsByStatus('current')
  const upcomingExhibitions = await getExhibitionsByStatus('upcoming')
  
  const featuredExhibitions = [...currentExhibitions, ...upcomingExhibitions].slice(0, 3)

  if (featuredExhibitions.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Exhibitions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our current and upcoming exhibitions showcasing the wonders of the natural world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExhibitions.map((exhibition) => (
            <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/exhibitions" className="btn-primary">
            View All Exhibitions
          </Link>
        </div>
      </div>
    </section>
  )
}