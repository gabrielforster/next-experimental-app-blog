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
      <body>
        <aside>
          <nav>
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <Link href={`/posts/${post.slug}`}>
                    See more about this post!
                  </Link>
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
