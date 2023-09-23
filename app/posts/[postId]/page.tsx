interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  const { postId } = params;
  return <div>Post Detail Page {postId}</div>;
};

export default PostDetailPage;
