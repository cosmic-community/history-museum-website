import Link from 'next/link'
import { ProgramCardProps } from '@/types'

export default function ProgramCard({ program, className = '' }: ProgramCardProps) {
  const programImage = program.metadata?.program_image
  const ageGroup = program.metadata?.age_group
  const duration = program.metadata?.duration
  const price = program.metadata?.price
  
  return (
    <div className={`card ${className}`}>
      {programImage && (
        <div className="aspect-video">
          <img
            src={`${programImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={program.metadata?.program_name || program.title}
            className="w-full h-full object-cover"
            width="400"
            height="225"
          />
        </div>
      )}
      
      <div className="p-6">
        {ageGroup && (
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-secondary-100 text-secondary-800">
            {ageGroup.value}
          </span>
        )}
        
        <h3 className="text-xl font-bold text-primary mb-3">
          {program.metadata?.program_name || program.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          {duration && (
            <div className="flex items-center text-gray-600 text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{duration}</span>
            </div>
          )}
          
          {price && (
            <div className="flex items-center text-gray-600 text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span className="font-semibold">{price}</span>
            </div>
          )}
        </div>
        
        {program.metadata?.description && (
          <div 
            className="text-gray-600 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: program.metadata.description }}
          />
        )}
        
        <Link
          href={`/programs/${program.slug}`}
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