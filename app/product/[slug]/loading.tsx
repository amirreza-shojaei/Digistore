export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-6 sm:px-6">
      {/* Breadcrumb skeleton */}
      <div className="mb-6 h-4 w-48 rounded bg-gray-200" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Gallery skeleton */}
        <div className="lg:col-span-4">
          <div className="aspect-square rounded-2xl bg-gray-200" />
          <div className="mt-4 flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 w-20 rounded-xl bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Info skeleton */}
        <div className="space-y-6 lg:col-span-8">
          <div className="h-8 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-1/2 rounded bg-gray-200" />

          <div className="flex gap-4">
            <div className="h-6 w-20 rounded bg-gray-200" />
            <div className="h-6 w-24 rounded bg-gray-200" />
          </div>

          <div className="h-12 w-full rounded-xl bg-gray-200" />

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 rounded-xl bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}