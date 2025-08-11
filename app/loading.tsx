import LoadingSpinner from '@/components/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner />
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  )
}