import { createFileRoute, ErrorComponent, ErrorComponentProps, Link } from '@tanstack/react-router';
import { posts } from '@/pages/News/index.tsx';

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => {
    console.log(params);

    const postId = params.postId;

    return { title: postId };
  },
  errorComponent: PostErrorComponent as any,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
  component: PostComponent
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function getPostContent(id: string) {
  const post = posts.find((p) => p.props.slug === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return post;
}

function PostComponent() {
  const post = Route.useLoaderData();
  console.log(post);

  return (
    <div className="space-y-2">
      <h4>{post.title}</h4>
      {getPostContent(post.title)}
      {/* <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div> */}
    </div>
  );
}
