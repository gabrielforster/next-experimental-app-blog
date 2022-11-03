import { PrismaClient } from "@prisma/client";
import Link from "next/link";

async function getPostsFromDB() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return posts;
}

export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPostsFromDB();

  return (
    <html lang="pt">
      <head>
        <title>Next Blog | Posts</title>
        <meta name="description" content="Posts page" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen w-full flex">
        <aside className="flex min-h-screen w-1/4 border-r-2">
          <nav className="w-full">
            <h1 className="text-3xl mb-4">Post list</h1>
            {posts.map((post) => {
              return (
                <div key={post.id} className="border-b-[1px]">
                  <div className="my-2">
                    <h1 className="text-2xl">{post.title}</h1>
                    <p className="text-zinc-300">{post.body}</p>
                    <Link href={`/posts/${post.slug}`}>
                      See more about this post!
                    </Link>
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>
        {children}
      </body>
    </html>
  );
}
