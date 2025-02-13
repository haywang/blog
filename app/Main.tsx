import ListLayout from '@/layouts/ListLayout'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import POSTS_PER_PAGE from '@/data/pageNumber'
interface PostsProps {
  posts: CoreContent<Blog>[]
}

export default function Home({ posts }: PostsProps) {
  const pageNumber = 1
  // Home page show 0 - POSTS_PER_PAGE posts
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }
  // Home page don't show tags layout
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
