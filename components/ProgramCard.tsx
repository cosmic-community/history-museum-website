import Link from 'next/link'
import { ProgramCardProps } from '@/types'

export default function ProgramCard({ program, className = '' }: ProgramCardProps) {
  const programImage = program.metadata?.program_image
  const ageGroup = program.metadata?.age_group
  const duration = program.metadata?.duration
  const price = program.metadata?.price
  
  const getAgeGroupColor = (ageGroup: any) => {
    if (!ageGroup) return 'bg-neutral-100 text-neutral-700'
    
    switch (ageGroup.key) {
      case 'children':
        return 'bg-blue-100 text-blue-800'
      case 'teens':
        return 'bg-purple-100 text-purple-800'
      case 'adults':
        return 'bg-green-100 text-green-800'
      case 'families':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-neutral-100 text-neutral-700'
    }
  }
  
  return (
    <article className={`card-museum group ${className}`}>
      {programImage && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={`${programImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={program.metadata?.program_name || program.title}
            className="w-full h-full object-cover image-hover-zoom"
            width="400"
            height="225"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Age Group Badge */}
          {ageGroup && (
            <div className="absolute top-4 left-4">
              <span className={`badge ${getAgeGroupColor(ageGroup)} font-semibold shadow-soft`}>
                {ageGroup.value}
              </span>
            </div>
          )}

          {/* Price Badge */}
          {price && (
            <div className="absolute top-4 right-4">
              <span className="badge bg-secondary text-white font-semibold shadow-medium">
                {price}
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 relative z-10">        
        <h3 className="text-xl font-display font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
          {program.metadata?.program_name || program.title}
        </h3>
        
        {duration && (
          <div className="flex items-center text-neutral-600 mb-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{duration}</span>
          </div>
        )}
        
        {program.metadata?.description && (
          <div 
            className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: program.metadata.description }}
          />
        )}
        
        <Link
          href={`/programs/${program.slug}`}
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