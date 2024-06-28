import { Flex } from '@/components';
import { MDXProvider } from '@mdx-js/react';
import { Route } from '@/routes/news.$postId';
import style from './newsentry.module.css';
import illustrationAlt from '@/assets/illustration-alt.svg';
import { readableDate } from '@/helpers/utils';

const components = {
  h1: (props: any) => (
    <h1 className={`${style.chapterHeader}`} {...props}>
      <p>{props.children}</p>
    </h1>
  ),
  aside: (props: any) => <aside className={`${style.aside}`} {...props}></aside>
};

export function NewsEntry() {
  const { post } = Route.useLoaderData();
  const { Page, title, excerpt, published } = post;
  const date = readableDate(published);

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
        <div className={`col ${style.chapters}`}></div>
      </div>
      <hr className={`col`} />
      <div className={`col ${style.prose}`}>
        <MDXProvider components={components}>
          <Page />
        </MDXProvider>
      </div>
    </div>
  );
}
