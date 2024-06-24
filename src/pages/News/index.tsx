import { Link } from '@tanstack/react-router';
import slugify from 'slugify';
import style from './news.module.css';
import hero from '@/assets/homepage-hero.png';

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
        {entryMeta.map(({ title, fileName, excerpt }) => {
          return (
            <li key={fileName} className={`col`}>
              <Link
                className={`col ${style.wrapper}`}
                to={`/news/$postId`}
                params={{
                  postId: `${fileName}`
                }}
              >
                <img src={hero} className={`col ${style.thumbnail}`} />
                <div className={`col ${style.link}`}>
                  <h5>{title}</h5>
                </div>
                <div className={`col ${style.excerpt}`}>
                  <p>{excerpt}</p>
                </div>
              </Link>
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
  const excerpt = module.frontmatter.excerpt;

  return {
    title,
    slug,
    fileName,
    Page,
    excerpt,
    id: `${fileName}`
  };
});
