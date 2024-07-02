import { Asset, Text } from '@/components';
import { MDXProvider } from '@mdx-js/react';
import { Route } from '@/routes/news.$postId';
import style from './newsentry.module.css';
import illustrationAlt from '@/assets/illustration-alt.svg';
import { readableDate } from '@/helpers/utils';
import { components } from './components';

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

  function getImageUrl(name: string) {
    return new URL(`../entries/${fileName}/${name}`, import.meta.url).href;
  }

  function Thumbnail() {
    return thumbnail ? <img src={getImageUrl(thumbnail)} /> : <Asset seed={seedValue} />;
  }

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
        <div className={`col ${style.image}`}>
          <Thumbnail />
        </div>
        <div className={`col ${style.chapters}`}>{toc.length >= 2 && tableOfContentsComponent}</div>
      </div>

      <div className={`col ${style.prose}`}>
        <MDXProvider components={components}>
          <Page />
        </MDXProvider>
      </div>
    </div>
  );
}
