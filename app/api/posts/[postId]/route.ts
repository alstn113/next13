import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  },
) => {
  try {
    const post = await db.post.findUnique({
      where: {
        id: params.postId,
      },
    });

    if (!post) {
      return new NextResponse('Not found', { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log('[POSTS_GET]', error);
    return NextResponse.json('Internal server error', { status: 500 });
  }
};

export const PATCH = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  },
) => {
  try {
    const { title, content } = await req.json();

    const post = await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log('[POSTS_PATCH]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  },
) => {
  try {
    await db.post.delete({
      where: {
        id: params.postId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log('[POSTS_DELETE]', error);
    return NextResponse.json('Internal server error', { status: 500 });
  }
};
