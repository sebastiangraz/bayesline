import { Link } from '@tanstack/react-router';
import slugify from 'slugify';
import style from './news.module.css';

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/entries/*.mdx'], {
    eager: true
  })
);

function getFileName(path: string) {
  return path.split('/').pop()?.replace('.mdx', '');
}

export function News() {
  return (
    <div className="col bleed">
      <div className="col">
        <h2>News</h2>
      </div>

      <ul className={`col ${style.ul}`}>
        {entryMeta.map(({ title, fileName }) => {
          return (
            <li key={fileName} className={`col`}>
              <div className={`col`}>
                <Link
                  to={`/news/$postId`}
                  params={{
                    postId: `${fileName}`
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

export const entryMeta = globEntries.map(([url, module]) => {
  const Page = module.default;
  const title = module.frontmatter.title;
  const slug = slugify(title, { lower: true });
  const fileName = getFileName(url);

  return {
    title,
    slug,
    fileName,
    Page,
    id: `${fileName}`
  };
});
