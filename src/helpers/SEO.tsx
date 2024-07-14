import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO = (props: SEOProps) => {
  const { title, description } = props;

  const siteTitle = 'Bayesline';

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title data-rh="true">{metaTitle}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta property="og:title" content={metaTitle} data-rh="true" />
      {/* <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} /> */}
    </Helmet>
  );
};
