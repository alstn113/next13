import { notFound } from 'next/navigation';

import { Post } from '@prisma/client';

import DeletePostButton from '@/app/posts/[postId]/delete-post-button';

import { BASE_URL } from '@/constants';
interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

export const dynamicParams = true;

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { postId } = params;

  const post: Post = await fetch(`${BASE_URL}/posts/${postId}`, {
    cache: 'no-store',
  }).then((res) => res.json());

  if (!post) notFound();

  return (
    <div>
      <h1>Post Detail Page</h1>
      <h2>Post ID: {postId}</h2>
      <p>Post Title: {post.title}</p>
      <p>Post Content: {post.content}</p>
      <DeletePostButton postId={postId} />
    </div>
  );
};

export default PostDetailPage;
