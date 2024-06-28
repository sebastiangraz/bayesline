import { Flex } from '@/components';
import { MDXProvider } from '@mdx-js/react';
import { Route } from '@/routes/news.$postId';
import style from './newsentry.module.css';
import illustrationAlt from '@/assets/illustration-alt.svg';
import { readableDate } from '@/helpers/utils';

const components = {
  h1: (props: any) => (
    <div className={`${style.chapterHeader}`}>
      <h1 {...props}></h1>
      <p>{props.children}</p>
    </div>
  ),
  aside: (props: any) => <aside className={`${style.aside}`} {...props}></aside>
};

function tableOfContents(toc: any) {
  return (
    <div className={`${style.toc}`}>
      <p>Table of Contents</p>
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
  const { Page, title, excerpt, published, toc } = post;
  const date = readableDate(published);

  const tableOfContentsComponent = tableOfContents(toc);

  return (
    <div className={`col bleed`}>
      <div className={`col theme ${style.hero}`}>
        <h2 className={`col ${style.title}`}>
          {title}{' '}
          <span className={`${style.date}`}>
            <p>{date}</p>
          </span>
        </h2>

        <h5 className={`col ${style.excerpt}`}>{excerpt}</h5>
        <div className={`col ${style.image}`}>
          <img src={illustrationAlt} alt="temp" />
        </div>
        <div className={`col ${style.chapters}`}>{tableOfContentsComponent}</div>
      </div>

      <div className={`col ${style.prose}`}>
        <MDXProvider components={components}>
          <Page />
        </MDXProvider>
      </div>
    </div>
  );
}
