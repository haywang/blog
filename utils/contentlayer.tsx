import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

export function getSortedPosts() {
  const sortedPosts = sortPosts(allBlogs)
  return allCoreContent(sortedPosts)
}
