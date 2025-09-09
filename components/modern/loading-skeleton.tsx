export function ProductCardSkeleton() {
  return (
    <div className="card overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-200 shimmer"></div>
      <div className="p-4 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 w-3 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="h-5 bg-gray-200 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-card p-6">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-card p-6">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}