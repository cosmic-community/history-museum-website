// app/collections/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getCollectionBySlug, getCollections } from '@/lib/cosmic'
import type { Metadata } from 'next'

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const collections = await getCollections()
  return collections.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params
  const item = await getCollectionBySlug(slug)
  
  if (!item) {
    return {
      title: 'Collection Item Not Found',
    }
  }
  
  return {
    title: `${item.metadata?.name || item.title} - American Museum of Natural History`,
    description: item.metadata?.description?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
  }
}

export default async function CollectionItemPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const item = await getCollectionBySlug(slug)

  if (!item) {
    notFound()
  }

  const image = item.metadata?.image
  const category = item.metadata?.category
  const timePeriod = item.metadata?.time_period
  const origin = item.metadata?.origin

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="space-y-6">
              {image && (
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={`${image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                    alt={item.metadata?.name || item.title}
                    className="w-full h-full object-cover"
                    width="800"
                    height="800"
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-6">
              {category && (
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
                  {category.value}
                </span>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                {item.metadata?.name || item.title}
              </h1>

              {/* Details */}
              <div className="space-y-4">
                {timePeriod && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Time Period</h3>
                    <p className="text-gray-600">{timePeriod}</p>
                  </div>
                )}
                
                {origin && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Origin</h3>
                    <p className="text-gray-600">{origin}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              {item.metadata?.description && (
                <div className="prose-custom">
                  <h3 className="text-2xl font-bold text-primary mb-4">Description</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.metadata.description }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}