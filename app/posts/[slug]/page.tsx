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
  // await wait(3);
  if (!post) {
    throw new Error(`Post with ${params.slug} was not found!`);
  }

  return (
    <>
      <section>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <div>
          <h3>Some links from the post:</h3>
          <div>
            {post.links.map((link, index) => {
              return (
                <a href={link} target="_blank" rel="noreferrer" key={index}>
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
