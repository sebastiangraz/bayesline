import { MDXProvider } from '@mdx-js/react';
import { Link } from '@tanstack/react-router';
const components = {
  h1: (props: any) => <h3 {...props} />
};

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/posts/*.mdx'], {
    eager: true
  })
);

const entryMeta = globEntries.map(([relativePath, module]) => {
  const Page = module.default;
  const path = relativePath.replace('/src/pages/posts/', '');
  const slug = path.replace('.mdx', '');
  return {
    slug,
    path,
    Page
  };
});

export const posts = entryMeta.map(({ path, slug, Page }, i) => {
  console.log(path, slug);

  return (
    <MDXProvider components={components}>
      <Page></Page>
    </MDXProvider>
  );
});

export function News() {
  return (
    <div className="bleed">
      <div className="col" style={{ '--c': 'start/13' }}>
        <h2>News</h2>
        <hr />
        {entryMeta.map(({ path, slug, Page }, i) => {
          return (
            <Link
              to={`/posts/$postId`}
              key={slug}
              params={{
                postId: `${slug}-${i}`
              }}
            >
              {slug}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
