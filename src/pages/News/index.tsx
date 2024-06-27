import { Link } from '@tanstack/react-router';
import slugify from 'slugify';
import style from './news.module.css';
import illustration from '@/assets/illustration.svg';
import { themeClasses } from '@/helpers/utils';

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/entries/*.mdx'], {
    eager: true
  })
);

function getFileName(path: string) {
  return path.split('/').pop()?.replace('.mdx', '');
}

export function News() {
  const entryByDate = entryMeta.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });

  return (
    <div className="col bleed">
      <div className={`col ${style.heading}`}>
        <h2>News</h2>
      </div>

      <ul className={`col ${style.ul}`}>
        {entryByDate.map(({ title, fileName, excerpt, theme, featured }) => {
          const themeValue = themeClasses[theme] || '';

          return (
            <li key={fileName} data-theme={themeValue} className={`col ${featured ? style.featured : ''}`}>
              <Link
                className={`col ${style.wrapper}`}
                to={`/news/$postId`}
                params={{
                  postId: `${fileName}`
                }}
              >
                <div className={`col ${style.thumbnail}`}>
                  <img src={illustration} />
                </div>
                <div className={`col ${style.meta}`}>
                  <div className={`col ${style.link}`}>{featured ? <h3>{title}</h3> : <h5>{title}</h5>}</div>
                  <div className={`col ${style.excerpt}`}>
                    <p>{excerpt}</p>
                  </div>
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
  const fileName = getFileName(url);
  const title = module.frontmatter?.title || fileName;
  const slug = slugify(title, { lower: true });
  const excerpt = module.frontmatter?.excerpt;
  const theme = module.frontmatter?.theme;
  const featured = module.frontmatter?.featured;
  const published = module.frontmatter?.published;

  return {
    title,
    slug,
    fileName,
    Page,
    excerpt,
    theme,
    featured,
    published,
    id: `${fileName}`
  };
});
