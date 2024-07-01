import React, { useState, useEffect } from 'react';
import seedrandom, { PRNG } from 'seedrandom';
import illustrationAlt from '@/assets/illustration-alt.svg';
import illustration from '@/assets/illustration.svg';
import style from './asset.module.css';

type Props = {
  seed: string;
};

type Theme = {
  colors: string[];
};

type SVGAsset = {
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
  fill: string;
  visible: boolean;
};

type Subdivision = {
  x: number;
  y: number;
  width: number;
  height: number;
  visible: boolean;
};

const themes: Theme = {
  colors: ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--foreground)', 'var(--background)']
};

const visible = [true, true, false];

export const Asset: React.FC<Props> = (props) => {
  let { seed } = props;

  //rotate seed every 1 second
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  seed = `${seed}-${count}`;

  const width = 288;
  const height = 288;

  const [svgs, setSvgs] = useState<SVGAsset[]>([]);

  useEffect(() => {
    generateSVGs(seed);
  }, [seed]);

  const generateSVGs = (seed: string) => {
    const rng = seedrandom(seed);
    const assets = [illustrationAlt, illustration];
    let subdivisions = divideSpace(0, 0, width, height, 2, rng);
    let svgAssets: SVGAsset[] = subdivisions.map((sub) => ({
      src: assets[Math.floor(rng() * assets.length)],
      width: sub.width,
      height: sub.height,
      x: sub.x,
      y: sub.y,
      fill: themes.colors[Math.floor(rng() * themes.colors.length)],
      visible: sub.visible
    }));
    setSvgs(svgAssets);
  };

  const divideSpace = (
    x: number,
    y: number,
    width: number,
    height: number,
    depth: number,
    rng: PRNG
  ): Subdivision[] => {
    if (width < 48 || height < 48 || depth === 0) {
      return [];
    }

    let sizes = [192, 96, 48]; // Size options
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
              visible: true // Default visibility is true
            });
          }
        }

        if (size !== sizes[0]) {
          // Set visibility randomly for non-largest divisions
          result.forEach((sub) => {
            // Use the RNG to decide visibility without altering dimensions
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

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className={`${style.asset}`}
    >
      {svgs.map((svg, index) => {
        return (
          <g key={`svg-${index}`} style={{ display: svg.visible ? 'block' : 'none' }}>
            <rect
              x={svg.x}
              y={svg.y}
              width={svg.width}
              height={svg.height}
              fill={svg.fill}
              shapeRendering="crispEdges"
            />
            <image href={svg.src} x={svg.x} y={svg.y} width={svg.width} height={svg.height} />
          </g>
        );
      })}
    </svg>
  );
};
