import { Link } from '@tanstack/react-router';
import slugify from 'slugify';

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/posts/*.mdx'], {
    eager: true
  })
);

export function News() {
  return (
    <div className="bleed">
      <div className="col">
        <h2>News</h2>
        <hr />
        <ul>
          {entryMeta.map(({ slug, title }) => {
            return (
              <li key={slug}>
                <Link
                  to={`/posts/$postId`}
                  params={{
                    postId: `${slug}`
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export const entryMeta = globEntries.map(([relativePath, module]) => {
  const Page = module.default;
  const title = module.frontmatter.title;
  const slug = slugify(title, { lower: true });
  // const path = relativePath.replace('/src/pages/posts/', '');
  // const slug = path.replace('.mdx', '');

  return {
    title,
    slug,
    Page,
    id: `${slug}`
  };
});
