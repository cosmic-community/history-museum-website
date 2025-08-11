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
    <section className="section-padding bg-gradient-to-br from-accent/5 via-white to-secondary/5">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            What's Coming Up
          </div>
          <h2 className="heading-section">
            Upcoming Events
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Join us for lectures, special programs, and exclusive museum experiences that bring science and natural history to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/events" className="btn-outline group">
            <span>View All Events</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}