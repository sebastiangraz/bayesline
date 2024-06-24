import { createFileRoute, ErrorComponent, ErrorComponentProps, Link } from '@tanstack/react-router';
import { entryMeta } from '@/pages/News/index.tsx';

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

export const Route = createFileRoute('/posts/$postId')({
  // loader: async ({ params }) => {
  //   console.log(params);
  //   const postId = params.postId;
  //   return { title: postId };
  // },
  loader: async ({ params }) => {
    const post = entryMeta.find((p) => p.id === params.postId);
    if (!post) throw new Error('Post not found');
    return post;
  },
  errorComponent: PostErrorComponent as any,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
  component: PostComponent
});

function PostComponent() {
  // const post = Route.useLoaderData();
  const { Page } = Route.useLoaderData();

  return (
    <div className="col" style={{ display: 'initial' }}>
      <h4>{Page.title}</h4>
      <h2> Post</h2>
      <Page />
    </div>
  );
}
