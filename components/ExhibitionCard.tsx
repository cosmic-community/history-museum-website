import Link from 'next/link'
import { ExhibitionCardProps } from '@/types'

export default function ExhibitionCard({ exhibition, className = '' }: ExhibitionCardProps) {
  const featuredImage = exhibition.metadata?.featured_image
  const status = exhibition.metadata?.exhibition_status
  
  const getStatusBadge = (status: any) => {
    if (!status) return null
    
    switch (status.key) {
      case 'current':
        return <span className="badge-success">Current Exhibition</span>
      case 'upcoming':
        return <span className="badge-info">Coming Soon</span>
      case 'past':
        return <span className="badge bg-neutral-100 text-neutral-700">Past Exhibition</span>
      default:
        return <span className="badge bg-neutral-100 text-neutral-700">{status.value}</span>
    }
  }
  
  return (
    <article className={`card-museum group ${className}`}>
      {featuredImage && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={exhibition.title}
            className="w-full h-full object-cover image-hover-zoom"
            width="400"
            height="225"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            {getStatusBadge(status)}
          </div>
        </div>
      )}
      
      <div className="p-6 relative z-10">        
        <h3 className="text-xl font-display font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
          {exhibition.metadata?.title || exhibition.title}
        </h3>
        
        {exhibition.metadata?.description && (
          <div 
            className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: exhibition.metadata.description }}
          />
        )}
        
        <Link
          href={`/exhibitions/${exhibition.slug}`}
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