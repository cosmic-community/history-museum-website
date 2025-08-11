import Link from 'next/link'
import { CollectionCardProps } from '@/types'

export default function CollectionCard({ item, className = '' }: CollectionCardProps) {
  const image = item.metadata?.image
  const category = item.metadata?.category
  
  return (
    <article className={`card-museum group ${className}`}>
      {image && (
        <div className="relative aspect-museum overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={item.metadata?.name || item.title}
            className="w-full h-full object-cover image-hover-zoom"
            width="400"
            height="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="badge bg-white/95 backdrop-blur-sm text-primary font-semibold shadow-soft">
                {category.value}
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-display font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
          {item.metadata?.name || item.title}
        </h3>
        
        {item.metadata?.time_period && (
          <div className="flex items-center text-sm text-neutral-500 mb-3">
            <svg className="w-4 h-4 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{item.metadata.time_period}</span>
          </div>
        )}
        
        {item.metadata?.description && (
          <div 
            className="text-neutral-600 text-sm mb-6 line-clamp-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.metadata.description }}
          />
        )}
        
        <Link
          href={`/collections/${item.slug}`}
          className="link-museum"
        >
          <span>View Details</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}