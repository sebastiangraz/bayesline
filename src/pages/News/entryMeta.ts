import type { Toc } from '@stefanprobst/rehype-extract-toc';
import { getPrevPathFromExtension } from '@/helpers/utils';

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/entries/*/*.mdx'], {
    eager: true
  })
);

export const entryMeta = globEntries.map(([url, module]) => {
  const Page = module.default;
  const fileName = getPrevPathFromExtension(url, '.mdx');
  const title = module.frontmatter?.title || fileName;
  const excerpt = module.frontmatter?.excerpt;
  const theme = module.frontmatter?.theme;
  const featured = module.frontmatter?.featured;
  const published = module.frontmatter?.published;
  const toc = module.tableOfContents as Toc;
  const thumbnail = module.frontmatter?.thumbnail;

  return {
    title,
    fileName,
    Page,
    excerpt,
    theme,
    featured,
    published,
    toc,
    thumbnail,
    id: `${fileName}`
  };
});