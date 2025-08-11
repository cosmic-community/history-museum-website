import Link from 'next/link'
import { getUpcomingEvents } from '@/lib/cosmic'
import EventCard from '@/components/EventCard'

export default async function UpcomingEvents() {
  const events = await getUpcomingEvents()
  const featuredEvents = events.slice(0, 3)

  if (featuredEvents.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for lectures, special programs, and exclusive museum experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/events" className="btn-primary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}