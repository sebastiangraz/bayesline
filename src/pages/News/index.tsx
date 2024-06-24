import { Link } from '@tanstack/react-router';
import slugify from 'slugify';

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/posts/*.mdx'], {
    eager: true
  })
);

export function News() {
  return (
    <div>
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
  );
}

export const entryMeta = globEntries.map(([, module]) => {
  const Page = module.default;
  const title = module.frontmatter.title;
  const slug = slugify(title, { lower: true });

  return {
    title,
    slug,
    Page,
    id: `${slug}`
  };
});
