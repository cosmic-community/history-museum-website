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
    <article className={`card-museum group ${className}`}>
      {eventImage && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={`${eventImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={event.metadata?.event_name || event.title}
            className="w-full h-full object-cover image-hover-zoom"
            width="400"
            height="225"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Price Badge */}
          {ticketPrice && (
            <div className="absolute top-4 right-4">
              <span className="badge bg-secondary text-white font-semibold shadow-medium">
                {ticketPrice}
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-display font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
          {event.metadata?.event_name || event.title}
        </h3>
        
        <div className="space-y-3 mb-6">
          {eventDate && (
            <div className="flex items-center text-neutral-600">
              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-sm">
                  {formatDate(eventDate)}
                </div>
                {startTime && (
                  <div className="text-xs text-neutral-500">{startTime}</div>
                )}
              </div>
            </div>
          )}
          
          {location && (
            <div className="flex items-center text-neutral-600">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium">{location}</span>
            </div>
          )}
        </div>
        
        {event.metadata?.description && (
          <div 
            className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: event.metadata.description }}
          />
        )}
        
        <Link
          href={`/events/${event.slug}`}
          className="link-museum"
        >
          <span>Learn More</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}