import React from 'react'

export default function Loading() {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-screen-xl items-center px-4 py-16 sm:py-24 lg:py-32">
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
