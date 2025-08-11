import { createBucketClient } from '@cosmicjs/sdk'
import type { 
  Exhibition, 
  CollectionItem, 
  EducationalProgram, 
  Event,
  CosmicResponse,
  ExhibitionStatus as ExhibitionStatusType,
  CollectionCategories,
  AgeGroups
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Exhibition functions
export async function getExhibitions(): Promise<Exhibition[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'exhibitions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Exhibition[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch exhibitions')
  }
}

export async function getExhibitionsByStatus(status: ExhibitionStatusType): Promise<Exhibition[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'exhibitions',
        'metadata.exhibition_status': status
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Exhibition[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error(`Failed to fetch ${status} exhibitions`)
  }
}

export async function getExhibitionBySlug(slug: string): Promise<Exhibition | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'exhibitions',
        slug
      })
      .depth(1)
    
    return response.object as Exhibition
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch exhibition')
  }
}

// Collection functions
export async function getCollections(): Promise<CollectionItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'collections' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as CollectionItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch collections')
  }
}

export async function getCollectionsByCategory(category: CollectionCategories): Promise<CollectionItem[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'collections',
        'metadata.category': category
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as CollectionItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error(`Failed to fetch ${category} collections`)
  }
}

export async function getCollectionBySlug(slug: string): Promise<CollectionItem | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'collections',
        slug
      })
      .depth(1)
    
    return response.object as CollectionItem
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch collection item')
  }
}

// Educational Program functions
export async function getEducationalPrograms(): Promise<EducationalProgram[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'educational-programs' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as EducationalProgram[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch educational programs')
  }
}

export async function getProgramsByAgeGroup(ageGroup: AgeGroups): Promise<EducationalProgram[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'educational-programs',
        'metadata.age_group': ageGroup
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as EducationalProgram[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error(`Failed to fetch programs for ${ageGroup}`)
  }
}

export async function getProgramBySlug(slug: string): Promise<EducationalProgram | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'educational-programs',
        slug
      })
      .depth(1)
    
    return response.object as EducationalProgram
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch educational program')
  }
}

// Event functions
export async function getEvents(): Promise<Event[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Event[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch events')
  }
}

export async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const events = response.objects as Event[]
    const currentDate = new Date()
    
    return events.filter(event => {
      if (!event.metadata?.event_date) return false
      const eventDate = new Date(event.metadata.event_date)
      return eventDate >= currentDate
    }).sort((a, b) => {
      const dateA = new Date(a.metadata?.event_date || '')
      const dateB = new Date(b.metadata?.event_date || '')
      return dateA.getTime() - dateB.getTime()
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch upcoming events')
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'events',
        slug
      })
      .depth(1)
    
    return response.object as Event
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch event')
  }
}