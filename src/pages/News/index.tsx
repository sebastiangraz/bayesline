import { Link } from '@tanstack/react-router';
import style from './news.module.css';
import { Text, Asset } from '@/components';

import { readableDate, themeClasses } from '@/helpers/utils';
import { entryMeta } from './entryMeta';

export function News() {
  const currentTimestamp = Date.now();

  const entryByDate = entryMeta
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .filter((entry) => new Date(entry.published).getTime() <= currentTimestamp);

  return (
    <div className="col bleed">
      <div className={`col ${style.heading}`}>
        <Text.H2>News</Text.H2>
      </div>

      <ul className={`col  ${style.ul}`}>
        {entryByDate.map(({ title, fileName, excerpt, theme, featured, published, thumbnail, seed }) => {
          const themeValue = themeClasses[theme] || '';
          const date = readableDate(published);
          const seedValue = seed || `${title}-${published}`;

          function getImageUrl(name: string) {
            return new URL(`../entries/${fileName}/${name}`, import.meta.url).href;
          }

          function Thumbnail() {
            return thumbnail ? <img src={getImageUrl(thumbnail)} /> : <Asset seed={seedValue} />;
          }

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
                  <Thumbnail />
                </div>
                <div className={`col ${style.meta}`}>
                  <div className={`col ${style.link}`}>
                    {featured ? <Text.H3>{title}</Text.H3> : <Text.H5>{title}</Text.H5>}
                    <Text.Body className={`${style.date}`}>{date}</Text.Body>
                  </div>

                  <div className={`col ${style.excerpt}`}>
                    <Text.Body secondary>{excerpt}</Text.Body>
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
