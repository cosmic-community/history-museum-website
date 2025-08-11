import { Suspense } from 'react'
import { getEducationalPrograms } from '@/lib/cosmic'
import ProgramCard from '@/components/ProgramCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educational Programs - American Museum of Natural History',
  description: 'Discover our educational programs for all ages, from children\'s camps to adult workshops.',
}

export default async function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Educational Programs</h1>
          <p className="text-xl max-w-2xl">
            Discover learning opportunities for all ages through our diverse educational programs and workshops.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <Suspense fallback={<LoadingSpinner />}>
            <ProgramsList />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

async function ProgramsList() {
  const programs = await getEducationalPrograms()

  if (programs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No educational programs found.</p>
      </div>
    )
  }

  // Group programs by age group
  const ageGroups = ['children', 'teens', 'adults', 'families', 'all'] as const
  const groupedPrograms = ageGroups.reduce((acc, ageGroup) => {
    acc[ageGroup] = programs.filter(program => program.metadata?.age_group?.key === ageGroup)
    return acc
  }, {} as Record<string, typeof programs>)

  return (
    <div className="space-y-16">
      {ageGroups.map((ageGroup) => {
        const ageGroupPrograms = groupedPrograms[ageGroup]
        // Fix: Add null check for ageGroupPrograms
        if (!ageGroupPrograms || ageGroupPrograms.length === 0) return null

        const ageGroupName = ageGroupPrograms[0]?.metadata?.age_group?.value || ageGroup

        return (
          <div key={ageGroup}>
            <h2 className="text-3xl font-bold text-primary mb-8">{ageGroupName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ageGroupPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}