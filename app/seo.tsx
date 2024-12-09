import { Metadata } from 'next'
import siteMeta from '@/data/siteMeta'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  //eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteMeta.description,
    openGraph: {
      title: `${title} | ${siteMeta.title}`,
      description: description || siteMeta.description,
      url: './',
      siteName: siteMeta.title,
      images: image ? [image] : [siteMeta.socialBanner],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      title: `${title} | ${siteMeta.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMeta.socialBanner]
    },
    ...rest
  }
}
