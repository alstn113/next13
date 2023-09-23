'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex gap-2 text-cyan-700">
      <Link href={'/'}>Home</Link>
      <Link href={'/posts'}>Post List</Link>
      <Link href={'/posts/create'}>Create Post</Link>
    </div>
  );
};

export default Nav;
