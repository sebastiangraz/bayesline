import { createFileRoute, ErrorComponent, ErrorComponentProps, Link } from '@tanstack/react-router';
import { entryMeta } from '@/pages/News/index.tsx';
import { MDXProvider } from '@mdx-js/react';

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return (
    <>
      <h3>404</h3>
      <div>
        <ErrorComponent error={error} />
      </div>
    </>
  );
}

const components = {
  h1: (props: any) => <h2 {...props} />
};

export const Route = createFileRoute('/posts/$postId')({
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
      <hr />

      <MDXProvider components={components}>
        <Page />
      </MDXProvider>
    </div>
  );
}
