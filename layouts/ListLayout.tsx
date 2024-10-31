'use client'

import Link from '@/components/Link'
import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination: PaginationProps
}
function Pagination({ totalPages, currentPage }: PaginationProps) {
  const isHavePrevPage = currentPage - 1 > 0
  const isHaveNextPage = currentPage + 1 <= totalPages
  const pathName = usePathname()
  const basePath = pathName.split('/')[1]
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!isHavePrevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!isHavePrevPage}
          >
            Previous
          </button>
        )}
        {isHavePrevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {!isHaveNextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!isHaveNextPage}
          >
            Next
          </button>
        )}
        {isHaveNextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts,
  pagination
}: ListLayoutProps) {
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  return (
    <>
      <div className="pb-6 pt-6">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl dark:text-gray-100">
          {title}
        </h1>
      </div>
      <div className="flex sm:space-x-24">
        <div>
          <ul>
            {displayPosts.map((post) => {
              const { path, date, title, summary } = post // , tags
              return (
                <li key={path} className="py-5">
                  <article className="flex flex-col space-y-2 xl:space-y-0">
                    <dl>
                      {' '}
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date} suppressHydrationWarning>
                          {/* {formatDate(date, siteMetadata.locale)} */}
                          {date}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-3">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/${path}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {/* {tags?.map((tag) => <Tag key={tag} text={tag} />)} */}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  )
}
