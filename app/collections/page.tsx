import { Suspense } from 'react'
import { getCollections } from '@/lib/cosmic'
import CollectionCard from '@/components/CollectionCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections - American Museum of Natural History',
  description: 'Explore our world-renowned collections of specimens and artifacts from around the globe.',
}

export default async function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Collections</h1>
          <p className="text-xl max-w-2xl">
            Explore our world-renowned collections spanning paleontology, anthropology, geology, astronomy, and biology.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <Suspense fallback={<LoadingSpinner />}>
            <CollectionsList />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

async function CollectionsList() {
  const collections = await getCollections()

  if (collections.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No collection items found.</p>
      </div>
    )
  }

  // Group collections by category
  const categories = ['paleontology', 'anthropology', 'geology', 'astronomy', 'biology'] as const
  const groupedCollections = categories.reduce((acc, category) => {
    acc[category] = collections.filter(item => item.metadata?.category?.key === category)
    return acc
  }, {} as Record<string, typeof collections>)

  return (
    <div className="space-y-16">
      {categories.map((category) => {
        const categoryItems = groupedCollections[category]
        if (categoryItems.length === 0) return null

        const categoryName = categoryItems[0]?.metadata?.category?.value || category

        return (
          <div key={category}>
            <h2 className="text-3xl font-bold text-primary mb-8 capitalize">{categoryName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryItems.map((item) => (
                <CollectionCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}