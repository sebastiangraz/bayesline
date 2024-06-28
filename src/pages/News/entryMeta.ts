import type { Toc } from '@stefanprobst/rehype-extract-toc';

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(['@/pages/entries/*.mdx'], {
    eager: true
  })
);

function getFileName(path: string) {
  return path.split('/').pop()?.replace('.mdx', '');
}

export const entryMeta = globEntries.map(([url, module]) => {
  const Page = module.default;
  const fileName = getFileName(url);
  const title = module.frontmatter?.title || fileName;
  const excerpt = module.frontmatter?.excerpt;
  const theme = module.frontmatter?.theme;
  const featured = module.frontmatter?.featured;
  const published = module.frontmatter?.published;
  const toc = module.tableOfContents as Toc;

  return {
    title,
    fileName,
    Page,
    excerpt,
    theme,
    featured,
    published,
    toc,
    id: `${fileName}`
  };
});
