import { Link } from '@tanstack/react-router';
import style from './news.module.css';
import illustration from '@/assets/illustration.svg';
import { readableDate, themeClasses } from '@/helpers/utils';
import { entryMeta } from './entryMeta';

export function News() {
  const entryByDate = entryMeta.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });

  return (
    <div className="col bleed">
      <div className={`col ${style.heading}`}>
        <h2>News</h2>
      </div>

      <ul className={`col  ${style.ul}`}>
        {entryByDate.map(({ title, fileName, excerpt, theme, featured, published }) => {
          const themeValue = themeClasses[theme] || '';
          const date = readableDate(published);

          return (
            <li key={fileName} data-theme={themeValue} className={`col theme ${featured ? style.featured : ''}`}>
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
                  <div className={`col ${style.link}`}>
                    {featured ? <h3>{title}</h3> : <h5>{title}</h5>}
                    <span className={`${style.date}`}>{date}</span>
                  </div>

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
