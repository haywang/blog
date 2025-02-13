import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import POSTS_PER_PAGE from '@/data/pageNumber'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString()
  }))

  // console.warn(paths)

  return paths
}

export default async function Page(props: {
  params: Promise<{ page: string }>
}) {
  console.log('props: ', props)
  // props: { params: { page: '1' }, searchParams: { key: val }}
  const params = await props.params
  const posts = allCoreContent(sortPosts(allBlogs))
  // get pageNumber from params's page props
  const pageNumber = parseInt(params.page as string)
  // get the show posts from the pageNumber
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  // bug: when pageNumber > totalPages, expect show 404 page
  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }

  const pagination = {
    currentPage: pageNumber,
    totalPages
  }

  // console.log(initialDisplayPosts, pagination)

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      isShowTag={false}
      pagination={pagination}
      title="All Posts"
    />
  )
}
