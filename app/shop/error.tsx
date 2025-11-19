"use client";

export default function ShopError({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shop page failed to load 😢</h2>
      <button
        onClick={() => reset()}
        className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
      >
        Try Again
      </button>
    </div>
  );
}
