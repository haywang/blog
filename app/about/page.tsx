// MDXLayoutRenderer, more suffix er
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
// custom file
import { Authors, allAuthors } from 'contentlayer/generated'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  // find default author content
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
