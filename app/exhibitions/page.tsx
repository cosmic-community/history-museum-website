import { Suspense } from 'react'
import { getExhibitions } from '@/lib/cosmic'
import ExhibitionCard from '@/components/ExhibitionCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exhibitions - American Museum of Natural History',
  description: 'Explore our current, upcoming, and past exhibitions featuring the wonders of natural history.',
}

export default async function ExhibitionsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exhibitions</h1>
          <p className="text-xl max-w-2xl">
            Discover our world-class exhibitions featuring natural history, science, and cultural artifacts from around the globe.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <Suspense fallback={<LoadingSpinner />}>
            <ExhibitionsList />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

async function ExhibitionsList() {
  const exhibitions = await getExhibitions()

  if (exhibitions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No exhibitions found.</p>
      </div>
    )
  }

  // Group exhibitions by status
  const current = exhibitions.filter(ex => ex.metadata?.exhibition_status?.key === 'current')
  const upcoming = exhibitions.filter(ex => ex.metadata?.exhibition_status?.key === 'upcoming')
  const past = exhibitions.filter(ex => ex.metadata?.exhibition_status?.key === 'past')

  return (
    <div className="space-y-16">
      {current.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Current Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {current.map((exhibition) => (
              <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
            ))}
          </div>
        </div>
      )}

      {upcoming.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Upcoming Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcoming.map((exhibition) => (
              <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
            ))}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Past Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {past.map((exhibition) => (
              <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}