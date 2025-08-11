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
        subtitle="Journey through millions of years of natural history and unlock the secrets of our planet through world-class exhibitions, remarkable collections, and transformative educational experiences"
        backgroundImage="https://imgix.cosmicjs.com/ea0b5810-7701-11f0-a051-23c10f41277a-photo-1578662996442-48f60103fc96-1754951054154.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/exhibitions" 
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Exhibitions
          </a>
          <a 
            href="/collections" 
            className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary"
          >
            View Collections
          </a>
        </div>
      </Hero>
      
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