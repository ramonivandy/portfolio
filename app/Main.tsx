import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="h-[calc(100vh-19rem)]">
        <div className="flex h-full">
          <div className="content-center">
            <p className="text-3xl font-bold md:text-5xl">Hej! Ramon's here!</p>
            <p className="text-2xl font-semibold md:text-3xl">Backend Developer</p>
            <p className="mt-2 py-4 text-xl font-semibold md:text-2xl">
              Read more{' '}
              <Link className="font-semibold text-lime-400" href={'/about'}>
                About Me
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
