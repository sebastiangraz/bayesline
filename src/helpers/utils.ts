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
