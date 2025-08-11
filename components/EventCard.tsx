import Link from 'next/link'
import { EventCardProps } from '@/types'

export default function EventCard({ event, className = '' }: EventCardProps) {
  const eventImage = event.metadata?.event_image
  const eventDate = event.metadata?.event_date
  const startTime = event.metadata?.start_time
  const location = event.metadata?.location
  const ticketPrice = event.metadata?.ticket_price
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  return (
    <div className={`card ${className}`}>
      {eventImage && (
        <div className="aspect-video">
          <img
            src={`${eventImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={event.metadata?.event_name || event.title}
            className="w-full h-full object-cover"
            width="400"
            height="225"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">
          {event.metadata?.event_name || event.title}
        </h3>
        
        {eventDate && (
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">
              {formatDate(eventDate)}
              {startTime && ` at ${startTime}`}
            </span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        )}
        
        {ticketPrice && (
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5z" />
            </svg>
            <span className="font-semibold">{ticketPrice}</span>
          </div>
        )}
        
        {event.metadata?.description && (
          <div 
            className="text-gray-600 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: event.metadata.description }}
          />
        )}
        
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center text-secondary font-medium hover:text-secondary-700 transition-colors"
        >
          Learn More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}