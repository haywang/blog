// pages/index.tsx
import Main from './Main'
// import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'

export default function Page() {
  // Mock
  const posts = [
    {
      path: 'posts/post1',
      date: '2024-10-25',
      title: 'how to develop a blog',
      summary: 'this is a guide to develop a blog',
      tags: ['blog', 'develop']
    },
    {
      path: 'posts/post2',
      date: '2024-10-24',
      title: 'how to learn frontend technic',
      summary: 'this is a guide to how to learn frontend',
      tags: ['frontend', 'learn']
    },
    {
      path: 'posts/post3',
      date: '2024-10-21',
      title: 'how to design a blog',
      summary: 'this is a guide to how to design a blog',
      tags: ['design', 'blog']
    }
  ]
  // const posts = allCoreContent(sortPosts(allBlogs))
  return <Main posts={posts} />
}
