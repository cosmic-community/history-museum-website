import Link from 'next/link'
import { ExhibitionCardProps } from '@/types'

export default function ExhibitionCard({ exhibition, className = '' }: ExhibitionCardProps) {
  const featuredImage = exhibition.metadata?.featured_image
  const status = exhibition.metadata?.exhibition_status
  
  return (
    <div className={`card ${className}`}>
      {featuredImage && (
        <div className="aspect-video">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={exhibition.title}
            className="w-full h-full object-cover"
            width="400"
            height="225"
          />
        </div>
      )}
      
      <div className="p-6">
        {status && (
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
            status.key === 'current' 
              ? 'bg-green-100 text-green-800' 
              : status.key === 'upcoming'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {status.value}
          </span>
        )}
        
        <h3 className="text-xl font-bold text-primary mb-3">
          {exhibition.metadata?.title || exhibition.title}
        </h3>
        
        {exhibition.metadata?.description && (
          <div 
            className="text-gray-600 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: exhibition.metadata.description }}
          />
        )}
        
        <Link
          href={`/exhibitions/${exhibition.slug}`}
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