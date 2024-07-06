import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-5 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    </div>
  );
}
