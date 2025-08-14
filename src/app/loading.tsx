export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative mx-auto mb-6">
          <div className="w-16 h-16 border-4 border-pink-200 border-solid rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-700">Carregando...</h2>
          <p className="text-sm text-gray-500">Aguarde enquanto preparamos o conteúdo</p>
        </div>

        {/* Skeleton content */}
        <div className="mt-8 space-y-3 max-w-md mx-auto">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
      </div>
    </div>
  )
}