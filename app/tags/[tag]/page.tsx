import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import siteMeta from '@/data/siteMeta'
import ListLayout from '@/layouts/ListLayout'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  const title = tag[0].toUpperCase + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs.filter(
        (post) => post.tags && post.tags.map((t) => slug(t).includes(tag))
      )
    )
  )
  console.warn(title, filteredPosts)

  if (filteredPosts.length === 0) {
    return notFound()
  }

  return <ListLayout posts={filteredPosts} title={title} />
}
