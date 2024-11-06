import ListLayout from '@/layouts/ListLayout'

const POSTS_PER_PAGE = 2

interface PostProps {
  path: string
  date: string
  title: string
  summary: string
  tags: string[]
}

interface PostsProps {
  posts: PostProps[]
}

export default function Home({ posts }: PostsProps) {
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }
  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
