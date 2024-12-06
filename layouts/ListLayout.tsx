'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'
import siteMeta from '@/data/siteMeta'
import { usePathname } from 'next/navigation'
import tagData from '@/app/tag-data.json'
import { slug } from 'github-slugger'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  isShowTag: boolean
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}
function Pagination({ totalPages, currentPage }: PaginationProps) {
  const isHavePrevPage = currentPage - 1 > 0
  const isHaveNextPage = currentPage + 1 <= totalPages
  const basePath = '/blog/page/'
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
          <Link href={`${basePath}${currentPage - 1}`} rel="prev">
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
          <Link href={`${basePath}${currentPage + 1}`} rel="next">
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
  isShowTag = false,
  initialDisplayPosts = [],
  pagination
}: ListLayoutProps) {
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="pb-6 pt-6">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {title}
        </h1>
      </div>
      <div className="flex sm:space-x-24">
        {isShowTag ? (
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              {pathname.startsWith('/blog') ? (
                <h3 className="font-bold uppercase text-primary-500">
                  All Posts
                </h3>
              ) : (
                <Link
                  href={`/blog`}
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                >
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3">
                      {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ) : (
          ''
        )}

        <div>
          <ul>
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags } = post //
              return (
                <li key={path} className="py-5">
                  <article className="flex flex-col space-y-2 xl:space-y-0">
                    <dl>
                      {' '}
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date} suppressHydrationWarning>
                          {formatDate(date, siteMeta.locale)}
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
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
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
