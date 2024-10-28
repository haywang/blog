import Link from './Link'
import siteMeta from '@/data/siteMeta'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        {
          <div className="mb-3 flex space-x-4">
            <SocialIcon
              kind="mail"
              href={`mailto:${siteMeta.email}`}
              size={6}
            />
            <SocialIcon kind="github" href={siteMeta.github} size={6} />
            <SocialIcon kind="facebook" href={siteMeta.facebook} size={6} />
            <SocialIcon kind="youtube" href={siteMeta.youtube} size={6} />
            <SocialIcon kind="linkedin" href={siteMeta.linkedin} size={6} />
            {/* <SocialIcon kind="twitter" href={siteMeta.twitter} size={6} /> */}
            <SocialIcon kind="x" href={siteMeta.x} size={6} />
            {/* <SocialIcon kind="instagram" href={siteMeta.instagram} size={6} /> */}
            {/* <SocialIcon kind="threads" href={siteMeta.threads} size={6} /> */}
          </div>
        }
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMeta.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMeta.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Inspired by Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
