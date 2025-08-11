// app/exhibitions/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getExhibitionBySlug, getExhibitions } from '@/lib/cosmic'
import type { Metadata } from 'next'

interface ExhibitionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const exhibitions = await getExhibitions()
  return exhibitions.map((exhibition) => ({
    slug: exhibition.slug,
  }))
}

export async function generateMetadata({ params }: ExhibitionPageProps): Promise<Metadata> {
  const { slug } = await params
  const exhibition = await getExhibitionBySlug(slug)
  
  if (!exhibition) {
    return {
      title: 'Exhibition Not Found',
    }
  }
  
  return {
    title: `${exhibition.metadata?.title || exhibition.title} - American Museum of Natural History`,
    description: exhibition.metadata?.description?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
  }
}

export default async function ExhibitionPage({ params }: ExhibitionPageProps) {
  const { slug } = await params
  const exhibition = await getExhibitionBySlug(slug)

  if (!exhibition) {
    notFound()
  }

  const featuredImage = exhibition.metadata?.featured_image
  const gallery = exhibition.metadata?.gallery || []
  const status = exhibition.metadata?.exhibition_status

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {featuredImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={`${featuredImage.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`}
              alt={exhibition.metadata?.title || exhibition.title}
              className="w-full h-full object-cover"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 gradient-overlay"></div>
          </div>
        )}

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {status && (
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              status.key === 'current' 
                ? 'bg-green-500 text-white' 
                : status.key === 'upcoming'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-500 text-white'
            }`}>
              {status.value}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-shadow">
            {exhibition.metadata?.title || exhibition.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          {exhibition.metadata?.description && (
            <div 
              className="prose-custom mb-12"
              dangerouslySetInnerHTML={{ __html: exhibition.metadata.description }}
            />
          )}

          {/* Dates */}
          {(exhibition.metadata?.start_date || exhibition.metadata?.end_date) && (
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-primary mb-4">Exhibition Dates</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {exhibition.metadata?.start_date && (
                  <div>
                    <span className="font-medium text-gray-700">Start Date:</span>
                    <p className="text-gray-600">
                      {new Date(exhibition.metadata.start_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                {exhibition.metadata?.end_date && (
                  <div>
                    <span className="font-medium text-gray-700">End Date:</span>
                    <p className="text-gray-600">
                      {new Date(exhibition.metadata.end_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Gallery */}
          {gallery.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gallery.map((image, index) => (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                      alt={`${exhibition.metadata?.title || exhibition.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width="400"
                      height="225"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}