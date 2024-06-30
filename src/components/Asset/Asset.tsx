import React, { useState, useEffect } from 'react';
import seedrandom, { PRNG } from 'seedrandom';
import illustrationAlt from '@/assets/illustration-alt.svg';
import illustration from '@/assets/illustration.svg';

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
};

const themes: Theme = {
  colors: ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--foreground)', 'var(--background)']
};

export const Asset: React.FC<Props> = ({ seed }) => {
  const [svgs, setSvgs] = useState<SVGAsset[]>([]);

  useEffect(() => {
    generateSVGs(seed);
  }, [seed]);

  const generateSVGs = (seed: string) => {
    const rng = seedrandom(seed);
    const assets = [illustrationAlt, illustration];
    let subdivisions = divideSpace(0, 0, 100, 100, 2, rng); // Starting with 4 levels deep
    let svgAssets: SVGAsset[] = subdivisions.map((sub) => ({
      src: assets[Math.floor(rng() * assets.length)],
      width: sub.width,
      height: sub.height,
      x: sub.x,
      y: sub.y,
      fill: themes.colors[Math.floor(rng() * themes.colors.length)]
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
  ): { x: number; y: number; width: number; height: number }[] => {
    if (depth === 0) {
      return [{ x, y, width, height }];
    }
    let cutVertical = rng() > 0.5;
    let midpoint = (cutVertical ? width : height) * rng();
    let firstHalf, secondHalf;

    if (cutVertical) {
      firstHalf = divideSpace(x, y, midpoint, height, depth - 1, rng); //not gonna lie, they had us
      secondHalf = divideSpace(x + midpoint, y, width - midpoint, height, depth - 1, rng);
    } else {
      firstHalf = divideSpace(x, y, width, midpoint, depth - 1, rng);
      secondHalf = divideSpace(x, y + midpoint, width, height - midpoint, depth - 1, rng);
    }

    return firstHalf.concat(secondHalf);
  };

  return (
    <svg width="100%" height="auto" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      {svgs.map((svg, index) => (
        <g key={`rect-${index}`}>
          <rect x={svg.x} y={svg.y} width={svg.width} height={svg.height} fill={svg.fill} />
          <image href={svg.src} x={svg.x} y={svg.y} width={svg.width} height={svg.height} />
        </g>
      ))}
    </svg>
  );
};
