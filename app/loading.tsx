import React from "react";

export default function Loading() {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32 min-h-[calc(100vh-128px)] flex items-center">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
