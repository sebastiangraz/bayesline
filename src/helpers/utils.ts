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

const templates = [
  //prettier-ignore
  [ 
    2, 2, 1, 
    2, 2, 0, 
    0, 0, 1
  ],
  //prettier-ignore
  [ 
    1, 2, 2, 
    0, 2, 2, 
    0, 0, 1
  ],
  //prettier-ignore
  [ 
    1, 1, 0, 
    1, 2, 2, 
    0, 2, 2
  ],
  //prettier-ignore
  [ 
    1, 0, 0, 
    2, 2, 0, 
    2, 2, 1
  ],
  //prettier-ignore
  [ 
    0, 2, 2, 
    0, 2, 2, 
    1, 0, 0
  ],
  //prettier-ignore
  [ 
    0, 0, 1, 
    2, 2, 0, 
    2, 2, 0
  ],
  //prettier-ignore
  [ 
    1, 2, 2, 
    2, 2, 2, 
    2, 2, 0
  ],
  //prettier-ignore
  [ 
    0, 0, 1, 
    0, 2, 2, 
    1, 2, 2
  ],
  //prettier-ignore
  [ 
    0, 0, 1, 
    0, 1, 0, 
    1, 0, 1
  ]
];

export const recursiveDivider = (
  x: number,
  y: number,
  width: number,
  height: number,
  rng: () => number
): Subdivision[] => {
  const TILE_SIZE = 96;
  const GRID_SIZE = 3;
  const MIN_SIZE = TILE_SIZE;
  if (width < MIN_SIZE || height < MIN_SIZE) {
    return [];
  }

  let result: Subdivision[] = [];

  // Randomly select a template
  const template = templates[Math.floor(rng() * templates.length)];

  // Convert the template into actual tile placements
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const value = template[i * GRID_SIZE + j];
      if (value === 2) {
        // Ensure we only add the top-left corner of the 2x2 tile to avoid duplication
        if (
          i + 1 < GRID_SIZE &&
          j + 1 < GRID_SIZE &&
          template[i * GRID_SIZE + j + 1] === 2 &&
          template[(i + 1) * GRID_SIZE + j] === 2 &&
          template[(i + 1) * GRID_SIZE + j + 1] === 2
        ) {
          result.push({
            x: x + j * TILE_SIZE,
            y: y + i * TILE_SIZE,
            width: TILE_SIZE * 2,
            height: TILE_SIZE * 2,
            visible: true
            // visible: true
          });
        }
      } else if (value === 1) {
        result.push({
          x: x + j * TILE_SIZE,
          y: y + i * TILE_SIZE,
          width: TILE_SIZE,
          height: TILE_SIZE,
          visible: true
        });
      } else {
        result.push({
          x: x + j * TILE_SIZE,
          y: y + i * TILE_SIZE,
          width: TILE_SIZE,
          height: TILE_SIZE,
          visible: false
        });
      }
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
