import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import siteMeta from '@/data/siteMeta'
import ListLayout from '@/layouts/ListLayout'
import { allBlogs } from 'contentlayer/generated'
import tagData from '@/app/tag-data.json'
import { notFound } from 'next/navigation'
// import POSTS_PER_PAGE from '@/data/pageNumber'

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  return tagKeys.map((tag) => {
    tag: encodeURI(tag)
  })
}

export default async function TagPage(props: { params: { tag: string } }) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  // first letter to UpperCase, replace space to '-'
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs.filter((post) => {
        const tags = post.tags.map((t) => slug(t))
        return post.tags && tags.includes(tag)
      })
    )
  )

  if (filteredPosts.length === 0) {
    return notFound()
  }

  // tag page add pagination, but when jump the next page, it don't show normal post, now don't add
  // const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  // const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE)
  // const pagination = {
  //   currentPage: 1,
  //   totalPages
  // }
  return (
    <ListLayout
      posts={filteredPosts}
      // initialDisplayPosts={initialDisplayPosts}
      // pagination={pagination}
      title={title}
      isShowTag={true}
    />
  )
}
