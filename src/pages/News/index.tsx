import { MDXProvider } from '@mdx-js/react';

export function News() {
  const components = {
    h1: (props: any) => <h3 {...props} />
  };

  const posts = Object.entries(
    import.meta.glob<string | string[] | any>(['@/pages/posts/*.mdx'], {
      eager: true
    })
  );

  const cases = posts
    .map(([relativePath, module]) => {
      const Page = module.default;
      const path = relativePath.replace('/src/pages/posts/', '');
      const slug = path.replace('.mdx', '');

      return {
        slug,
        path,
        Page
      };
    })
    .map(({ path, slug, Page }, i) => {
      console.log(path, slug);
      return (
        <MDXProvider components={components}>
          <Page></Page>
        </MDXProvider>
      );
    });

  return (
    <div className="bleed">
      <div className="col" style={{ '--c': 'start/13' }}>
        <h2>News</h2>
        <hr />
        {cases}
      </div>
    </div>
  );
}
