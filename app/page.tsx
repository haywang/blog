// pages/index.tsx
import Main from './Main'
import { getSortedPosts } from '@/utils/contentlayer'

export default function Page() {
  const posts = getSortedPosts()
  return <Main posts={posts} />
}
