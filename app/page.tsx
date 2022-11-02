import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <nav>
          <Link href={"/posts"}>List posts</Link>

          <Link href={"/create"}>Create a post</Link>
        </nav>
      </main>
    </>
  )
}
