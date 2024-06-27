import { Flex } from '@/components';
import { MDXProvider } from '@mdx-js/react';
import { Route } from '@/routes/news.$postId';
import style from './newsentry.module.css';
import illustrationAlt from '@/assets/illustration-alt.svg';
import { readableDate } from '@/helpers/utils';

const components = {
  h1: (props: any) => <h2 {...props} />
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
          <h5 className={`${style.date}`}>
            <p>{date}</p>
          </h5>
        </h2>

        <h5 className={`col ${style.excerpt}`}>{excerpt}</h5>
        <div className={`col ${style.image}`}>
          <img src={illustrationAlt} alt="temp" />
        </div>
        <div className={`col ${style.chapters}`}></div>
      </div>
      <hr className={`col`} />
      <Flex column className={`col ${style.prose}`}>
        <MDXProvider components={components}>
          <Page />
        </MDXProvider>
      </Flex>
    </div>
  );
}
