import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMeta from '@/data/siteMeta'
import headerNavLinks from '@/data/headerNavLinks'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMeta.siteUrl

  // filter publish post, and return url and lastMod
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date
    }))

  const routes = headerNavLinks
    .filter((route) => !route.href.includes('http')) // External link don't generate sitemap
    .map((route) => ({
      url: `${siteUrl}${route.href}`,
      lastModified: new Date().toISOString().split('T')[0]
    }))

  return [...routes, ...blogRoutes]
}
