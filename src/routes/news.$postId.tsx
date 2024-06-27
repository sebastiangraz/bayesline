import { createFileRoute, ErrorComponent, ErrorComponentProps } from '@tanstack/react-router';
import { entryMeta } from '@/pages/News';
import { NewsEntry } from '@/pages/NewsEntry';

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div>
      <h3>404</h3>
      <ErrorComponent error={error} />
    </div>
  );
}

export const Route = createFileRoute('/news/$postId')({
  component: NewsEntry,
  beforeLoad: ({ params }) => {
    const post = entryMeta.find((p) => p.id === params.postId);

    return {
      themeValue: post?.theme
    };
  },
  loader: async ({ params }) => {
    const post = entryMeta.find((p) => p.id === params.postId);
    if (!post) throw new Error('Post not found');
    return { post };
  },
  errorComponent: PostErrorComponent as any,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  }
});
