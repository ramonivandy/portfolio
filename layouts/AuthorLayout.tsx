import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            {/* <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div> */}
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
            <p className="mb-3 text-xl font-semibold sm:text-2xl">Skills</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-400 px-1 text-black">Javascript</span>
              <span className="bg-green-600 px-1 text-white">Node.js</span>
              <span className="bg-indigo-600 px-1 text-white">PHP</span>
              <span className="bg-blue-500 px-1 text-white">Golang</span>
              <span className="bg-gray-700 px-1 text-white">Express.js</span>
              <span className="bg-red-600 px-1 text-white">Laravel</span>
              <span className="bg-red-500 px-1 text-white">CodeIgniter 3</span>
              <span className="bg-blue-600 px-1 text-white">Docker</span>
              <span className="bg-blue-600 px-1 text-white">Kubernetes</span>
              <span className="bg-gray-800 px-1 text-white">Kafka</span>
              <span className="bg-yellow-600 px-1 text-white">Mocha/chai</span>
              <span className="bg-orange-500 px-1 text-white">Postman</span>
              <span className="bg-sky-900 px-1 text-white">Linux / WSL</span>
              <span className="bg-red-700 px-1 text-white">Fortigate</span>
            </div>
            <p className="mt-3 font-extrabold">
              Download my Resume{' '}
              <span className="text-fuchsia-400">
                <Link
                  target="_blank"
                  href="/static/pdf/2024_CV_Ramon Ivandy Setiawan.pdf"
                  locale={false}
                >
                  Here!
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
