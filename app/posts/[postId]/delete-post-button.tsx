'use client';

import { useRouter } from 'next/navigation';

import axios from 'axios';

interface DeletePostButtonProps {
  postId: string;
}

const DeletePostButton = ({ postId }: DeletePostButtonProps) => {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      router.push('/posts');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={onDelete}
      className="bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeletePostButton;
