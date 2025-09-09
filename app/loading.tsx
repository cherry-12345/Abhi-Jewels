export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-diamond via-white to-platinum-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gold-200 border-t-gold-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-rose-gold rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
          AJ Abhi Jewels
        </h2>
        <p className="text-gray-600">Loading your jewelry experience...</p>
      </div>
    </div>
  )
}