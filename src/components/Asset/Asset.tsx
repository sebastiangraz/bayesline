import React, { useRef, useMemo } from 'react';
import seedrandom, { PRNG } from 'seedrandom';
import style from './asset.module.css';
import { assets } from './assets';
import { motion, useInView } from 'framer-motion';

type Props = {
  seed: string;
};

type Theme = {
  [key: string]: { fg: string; bg: string }[];
};

type SVGAsset = {
  src: () => JSX.Element;
  width: number;
  height: number;
  x: number;
  y: number;
  visible: boolean;
  fg: string;
  bg: string;
};

type Subdivision = {
  x: number;
  y: number;
  width: number;
  height: number;
  visible: boolean;
};

const childVariant = {
  hidden: ({
    random
  }: {
    random: {
      clip: string;
      endClip: string;
    };
  }) => ({
    clipPath: random.clip
  }),
  show: ({ i }: { i: number }) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      delay: 0.05 * i,
      duration: 0.6,
      ease: [1, 0, 0.17, 1]
    }
  })
};

const themes: Theme = {
  theme1: [
    { fg: 'var(--accent-3)', bg: 'var(--accent-1)' },
    { fg: 'var(--accent-1)', bg: 'var(--accent-3)' },
    { fg: 'var(--accent-1)', bg: 'hsl(var(--brand-0))' }
  ],
  theme2: [
    { fg: 'var(--accent-2)', bg: 'hsl(var(--brand-2))' },
    { fg: 'var(--accent-3)', bg: 'hsl(var(--brand-1))' },
    { fg: 'var(--accent-3)', bg: 'hsl(var(--brand-1))' },
    { fg: 'hsl(var(--brand-2))', bg: 'var(--accent-2)' }
  ],
  theme3: [
    { fg: 'var(--background)', bg: 'var(--background-0)' },
    { fg: 'var(--accent-2)', bg: 'var(--background-1)' },
    { fg: 'var(--background-4)', bg: 'var(--background-2)' }
  ]
};

const visible = [true, false];
const width = 288;
const height = 288;

const createColorGenerator = (colors: { fg: string; bg: string }[], startIndex: number) => {
  let index = startIndex;
  return function () {
    const colorPair = colors[index];
    index = (index + 1) % colors.length;
    return colorPair;
  };
};

const divideSpace = (x: number, y: number, width: number, height: number, depth: number, rng: PRNG): Subdivision[] => {
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
        result = result.concat(divideSpace(x + countX * size, y, remainingWidth, height, depth - 1, rng));
      }

      let remainingHeight = height - countY * size;
      if (remainingHeight > 0) {
        result = result.concat(divideSpace(x, y + countY * size, width, remainingHeight, depth - 1, rng));
      }

      break;
    }
  }

  return result;
};

const generateSVGs = (seed: string) => {
  const rng = seedrandom(seed);
  const themeKeys = Object.keys(themes);
  const selectedTheme = themes[themeKeys[Math.floor(rng() * themeKeys.length)]];

  let getColor = createColorGenerator(selectedTheme, Math.floor(rng() * selectedTheme.length));

  let subdivisions = divideSpace(0, 0, width, height, 2, rng);

  return subdivisions.map((sub) => {
    const colorPair = getColor();
    return {
      src: assets[Math.floor(rng() * assets.length)].path,
      width: sub.width,
      height: sub.height,
      x: sub.x,
      y: sub.y,
      fg: colorPair.fg,
      bg: colorPair.bg,
      visible: sub.visible
    };
  });
};

export const Asset: React.FC<Props> = React.memo(
  ({ seed }) => {
    const directions = [
      { clip: 'inset(0% 0% 50% 0%)' },
      { clip: 'inset(50% 0% 0% 0%)' },
      { clip: 'inset(0% 50% 0% 0%)' },
      { clip: 'inset(0% 0% 0% 50%)' }
    ];

    const svgs = useMemo(() => generateSVGs(seed), [seed]);
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <svg
        ref={ref}
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className={`${style.asset}`}
        style={{ boxShadow: 'var(--shadow)' }}
      >
        {svgs.map((svg, index) => {
          return (
            <motion.g
              initial="hidden"
              variants={childVariant}
              animate={isInView ? 'show' : 'hidden'}
              custom={{ i: index, random: directions[index % directions.length] }}
              key={`svg-${index}`}
              style={{ display: svg.visible ? 'block' : 'none' }}
            >
              <rect
                x={svg.x}
                y={svg.y}
                width={svg.width}
                height={svg.height}
                fill={svg.bg}
                shapeRendering="crispEdges"
              ></rect>
              <svg
                width={svg.width}
                height={svg.height}
                preserveAspectRatio="xMidYMid meet"
                x={svg.x}
                y={svg.y}
                viewBox={`0 0 144 144`}
                style={{ color: svg.fg }}
                className={`${style.foregroundSvg}`}
              >
                {svg.src()}
              </svg>
            </motion.g>
          );
        })}
      </svg>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.seed === nextProps.seed;
  }
);
