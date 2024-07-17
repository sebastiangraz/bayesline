import { useState, useEffect } from 'react';
import seedrandom, { PRNG } from 'seedrandom';

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

export const recursiveDivider = (
  x: number,
  y: number,
  width: number,
  height: number,
  depth: number,
  rng: PRNG
): Subdivision[] => {
  const visible = [true, false];

  if (width < 48 || height < 48 || depth === 0) {
    return [];
  }

  let sizes = [192, 96, 48];
  let result = [] as Subdivision[];

  for (let size of sizes) {
    if (size <= width && size <= height) {
      let countX = Math.floor(width / size);
      let countY = Math.floor(height / size);

      for (let i = 0; i < countX; i++) {
        for (let j = 0; j < countY; j++) {
          result.push({
            x: x + i * size,
            y: y + j * size,
            width: size,
            height: size,
            visible: true
          });
        }
      }

      if (size !== sizes[0]) {
        result.forEach((sub) => {
          sub.visible = visible[Math.floor(rng() * visible.length)];
        });
      }

      let remainingWidth = width - countX * size;
      if (remainingWidth > 0) {
        result = result.concat(recursiveDivider(x + countX * size, y, remainingWidth, height, depth - 1, rng));
      }

      let remainingHeight = height - countY * size;
      if (remainingHeight > 0) {
        result = result.concat(recursiveDivider(x, y + countY * size, width, remainingHeight, depth - 1, rng));
      }

      break;
    }
  }

  return result;
};

export const themeClasses: Record<number, string> = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four'
};

type Subdivision = {
  x: number;
  y: number;
  width: number;
  height: number;
  visible: boolean;
};
