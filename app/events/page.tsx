import { Suspense } from 'react'
import { getEvents } from '@/lib/cosmic'
import EventCard from '@/components/EventCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events - American Museum of Natural History',
  description: 'Join us for lectures, special programs, and exclusive museum experiences.',
}

export default async function EventsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-2xl">
            Join us for lectures, special programs, and exclusive museum experiences throughout the year.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <Suspense fallback={<LoadingSpinner />}>
            <EventsList />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

async function EventsList() {
  const events = await getEvents()

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No events found.</p>
      </div>
    )
  }

  // Sort events by date
  const sortedEvents = events.sort((a, b) => {
    const dateA = new Date(a.metadata?.event_date || '')
    const dateB = new Date(b.metadata?.event_date || '')
    return dateB.getTime() - dateA.getTime()
  })

  // Group events into upcoming and past
  const currentDate = new Date()
  const upcomingEvents = sortedEvents.filter(event => {
    if (!event.metadata?.event_date) return false
    const eventDate = new Date(event.metadata.event_date)
    return eventDate >= currentDate
  })
  
  const pastEvents = sortedEvents.filter(event => {
    if (!event.metadata?.event_date) return true
    const eventDate = new Date(event.metadata.event_date)
    return eventDate < currentDate
  })

  return (
    <div className="space-y-16">
      {upcomingEvents.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {pastEvents.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}