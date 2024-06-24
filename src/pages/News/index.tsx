import { Link } from '@tanstack/react-router';
import slugify from 'slugify';
import style from './news.module.css';

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/posts/*.mdx'], {
    eager: true
  })
);

export function News() {
  return (
    <div className="col bleed">
      <div className="col">
        <h2>News</h2>
      </div>

      <ul className={`col ${style.ul}`}>
        {entryMeta.map(({ slug, title }) => {
          return (
            <li key={slug} className={`col`}>
              <div className={`col`}>
                <Link
                  to={`/posts/$postId`}
                  params={{
                    postId: `${slug}`
                  }}
                >
                  <h5>{title}</h5>
                </Link>
              </div>
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
