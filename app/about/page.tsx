import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayouterRender } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import AuthorLayout from '@/layouts/AuthorLayout'

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayouterRender code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
