export default function Page({ params }: { params: { slug: string[] } }) {
  return <h1>This is a post page, params: {JSON.stringify(params)}</h1>
}
