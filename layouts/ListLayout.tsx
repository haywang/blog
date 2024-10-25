'use client'

import Link from '@/components/Link'
import { usePathname } from 'next/navigation'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

// interface ListLayoutProps {
//   posts:
//   title: string
//   initialDisplayPosts:
// }
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
  return (
    <>
      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  )
}
