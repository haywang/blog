'use client'

import { Comments as CommentsComponent, CommentsConfig } from 'pliny/comments'
import { useState } from 'react'
import siteMeta from '@/data/siteMeta'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  if (!siteMeta.comments?.provider) {
    return null
  }
  return (
    <>
      {loadComments ? (
        <CommentsComponent
          commentsConfig={siteMeta.comments as CommentsConfig}
          slug={slug}
        />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
