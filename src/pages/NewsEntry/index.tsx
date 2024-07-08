import { Asset, Text } from '@/components';
import { MDXProvider } from '@mdx-js/react';
import { Route } from '@/routes/news.$postId';
import style from './newsentry.module.css';
import { components } from './components';
import { entryMeta } from '@/pages/News/entryMeta';
import { Link } from '@tanstack/react-router';
import { readableDate, themeClasses } from '@/helpers/utils';
function tableOfContents(toc: any) {
  return (
    <div className={`${style.toc}`}>
      <Text.Caps>Chapters</Text.Caps>
      <ul>
        {toc.map((item: any) => {
          return (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.value}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function NewsEntry() {
  const { post } = Route.useLoaderData();
  const { Page, title, fileName, excerpt, published, toc, thumbnail, seed } = post;
  const date = readableDate(published);
  const tableOfContentsComponent = tableOfContents(toc);
  const seedValue = seed || `${title}-${published}`;
  const currentTimestamp = Date.now();

  function getImageUrl(name: string) {
    return new URL(`../entries/${fileName}/${name}`, import.meta.url).href;
  }

  function Thumbnail() {
    return thumbnail ? <img src={getImageUrl(thumbnail)} /> : <Asset seed={seedValue} />;
  }

  const entryByDate = entryMeta
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .filter((entry) => new Date(entry.published).getTime() <= currentTimestamp);

  const entryByDateExcludeCurrent = entryByDate.filter((entry) => entry.fileName !== fileName);

  return (
    <div className={`col bleed`}>
      <div className={`col theme ${style.hero}`}>
        <Text.H2 className={`col ${style.title}`}>
          {title}{' '}
          <span className={`${style.date}`}>
            <p>{date}</p>
          </span>
        </Text.H2>

        <Text.H5 className={`col ${style.excerpt}`}>{excerpt}</Text.H5>
        <div className={`col ${style.entryImage}`}>
          <Thumbnail />
        </div>
        <div className={`col ${style.chapters}`}>{toc.length >= 2 && tableOfContentsComponent}</div>
      </div>

      <div className={`col ${style.prose}`}>
        <MDXProvider components={components}>
          <Page />
        </MDXProvider>
      </div>

      {entryByDate.length > 0 && (
        <div className={`col ${style.more}`}>
          <Text.H5 className={`col`}>More articles</Text.H5>
          <ul className={`col`}>
            {entryByDateExcludeCurrent.slice(0, 3).map(({ title, fileName, theme, published, thumbnail, seed }) => {
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
                <li key={fileName} data-theme={themeValue} className={`col`}>
                  <Link
                    className={`col`}
                    to={`/news/$postId`}
                    params={{
                      postId: `${fileName}`
                    }}
                  >
                    <div className={`col  ${style.thumbnail}`}>
                      <Thumbnail />
                    </div>

                    <div className={`col ${style.meta}`}>
                      {<Text.Body>{title}</Text.Body>}
                      <Text.Caps className={`${style.date}`}>{date}</Text.Caps>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
