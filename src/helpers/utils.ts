export const themeClasses: { [key: number]: string } = {
  0: '',
  1: 'dark',
  2: 'accent',
  3: 'highlight'
};

export const readableDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
