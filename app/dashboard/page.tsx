import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="h-[calc(100vh-8rem)]">
          <div className="flex h-full">
            <div className="content-center">
              <p className="text-3xl font-bold md:text-5xl">Hej! Ramon here</p>
              <p className="text-2xl font-semibold md:text-3xl">IT Staff at PT YMPA</p>
              <p className="text-xs italic text-slate-500 md:text-xl">
                p.s produly can make this web using Next.js and Tailwindcss!
              </p>
              <p className="mt-3 py-4 text-2xl font-semibold md:text-3xl">
                Read more{' '}
                <Link className="font-semibold text-lime-400" href={'/about'}>
                  About Me
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
