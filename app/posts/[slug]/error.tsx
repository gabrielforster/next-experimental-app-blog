"use client";

export default function IssueErrorPage({ error }: { error: { message: string } }) {
  return <p>{error.message}</p>;
}
