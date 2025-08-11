import Link from 'next/link'
import { CollectionCardProps } from '@/types'

export default function CollectionCard({ item, className = '' }: CollectionCardProps) {
  const image = item.metadata?.image
  const category = item.metadata?.category
  
  return (
    <div className={`card ${className}`}>
      {image && (
        <div className="aspect-square">
          <img
            src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={item.metadata?.name || item.title}
            className="w-full h-full object-cover"
            width="300"
            height="300"
          />
        </div>
      )}
      
      <div className="p-4">
        {category && (
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 bg-accent-100 text-accent-800">
            {category.value}
          </span>
        )}
        
        <h3 className="text-lg font-bold text-primary mb-2">
          {item.metadata?.name || item.title}
        </h3>
        
        {item.metadata?.time_period && (
          <p className="text-sm text-gray-500 mb-2">
            {item.metadata.time_period}
          </p>
        )}
        
        {item.metadata?.description && (
          <div 
            className="text-gray-600 text-sm mb-3 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: item.metadata.description }}
          />
        )}
        
        <Link
          href={`/collections/${item.slug}`}
          className="inline-flex items-center text-secondary text-sm font-medium hover:text-secondary-700 transition-colors"
        >
          View Details
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}