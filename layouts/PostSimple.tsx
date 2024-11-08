import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import siteMeta from '@/data/siteMeta'
// import Comments from '@/components/Comments'
// import PageTitle from '@/components/PageTitle'
// import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  pre?: { path: string; title: string }
}

export default function PostLayout({
  content,
  children,
  next,
  pre
}: LayoutProps) {
  const { path, slug, date, title } = content
  return (
    <SectionContainer>
      <article>Post</article>
    </SectionContainer>
  )
}
