export function getPrevPathFromExtension(path: string, extension = '.mdx') {
  const regex = new RegExp(`/[^/]+${extension}$`);
  const match = path.match(regex);
  return match
    ? path.slice(path.lastIndexOf('/', path.length - match[0].length - 1) + 1, path.length - match[0].length)
    : '';
}

export function isArrayofObjects(input: any): input is Array<object> {
  return Array.isArray(input) && input.every((item) => typeof item === 'object' && item !== null);
}

export const readableDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

export const themeClasses: { [key: number]: string } = {
  0: '',
  1: 'dark',
  2: 'accent',
  3: 'highlight'
};
