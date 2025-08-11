import { Suspense } from 'react'
import Hero from '@/components/Hero'
import FeaturedExhibitions from '@/components/FeaturedExhibitions'
import FeaturedCollections from '@/components/FeaturedCollections'
import UpcomingEvents from '@/components/UpcomingEvents'
import LoadingSpinner from '@/components/LoadingSpinner'

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Discover the Natural World"
        subtitle="Explore millions of years of natural history through our world-class exhibitions, collections, and educational programs"
        backgroundImage="https://imgix.cosmicjs.com/ea0b5810-7701-11f0-a051-23c10f41277a-photo-1578662996442-48f60103fc96-1754951054154.jpg?w=1920&h=1080&fit=crop&auto=format,compress"
      />
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedExhibitions />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedCollections />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <UpcomingEvents />
      </Suspense>
    </div>
  )
}