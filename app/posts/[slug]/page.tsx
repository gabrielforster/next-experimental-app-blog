import { PrismaClient } from "@prisma/client";

async function getPostFromDB(slug: string) {
  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return post;
}

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostFromDB(params.slug);

  if (!post) {
    throw new Error(`Post with ${params.slug} was not found!`);
  }

  return (
    <>
      <section className="text-white">
        <h1>{post.title}</h1>
        <h3>{post.author}</h3>
        <p>{post.body}</p>
      </section>
    </>
  );
}
