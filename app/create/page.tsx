"use client";
import { useState } from "react";
import styles from "./create.module.css";

export default function CreatePostPage() {
  const [title, setTitle] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  async function createPost() {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        slug,
        body,
        author,
      }),
    });
    const json = await res.json();
    console.log(json);
  }

  function getDivStyle() {
    return "flex flex-col mt-1";
  }

  function getInputStyle() {
    return "border border-gray-300 rounded-lg text-zinc-800 p-1";
  }

  return (
    <>
      <main className="grid place-items-center min-h-screen">
        <form method="POST" className="flex flex-col justify-center">
          <h1 className="text-3xl">Create a Post!</h1>
          <div className={getDivStyle()}>
            <label htmlFor="title">Title</label>
            <input
              className={getInputStyle()}
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              type="text"
              name="title"
              id="title"
            />
          </div>

          <div className={getDivStyle()}>
            <label htmlFor="slug">Slug</label>
            <input
              className={getInputStyle()}
              value={slug}
              onChange={({ target }) => setSlug(target.value)}
              type="text"
              name="slug"
              id="slug"
            />
          </div>

          <div className={getDivStyle()}>
            <label htmlFor="body">Body</label>
            <textarea
              className={getInputStyle()}
              value={body}
              onChange={({ target }) => setBody(target.value)}
              name="body"
              id="body"
              cols={30}
              rows={10}
            />
          </div>

          <div className={getDivStyle()}>
            <label htmlFor="author">Author</label>
            <input
              className={getInputStyle()}
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
              type="text"
              name="author"
              id="author"
            />
          </div>

          <button
            onClick={createPost}
            type="submit"
            className="mt-4 w-full border border-gray-300 rounded-lg"
          >
            Create Post
          </button>
        </form>
      </main>
    </>
  );
}
