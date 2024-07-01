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
};

type Subdivision = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const Asset: React.FC<Props> = ({ seed }) => {
  const gridUnit = 48; // Define grid size (48x48 pixels)
  const width = 336;
  const height = 336;
  const [svgs, setSvgs] = useState<SVGAsset[]>([]);

  useEffect(() => {
    generateSVGs(seed);
  }, [seed]);

  const generateSVGs = (seed: string) => {
    const rng = seedrandom(seed);
    const assets = [illustrationAlt, illustration];
    let subdivisions = divideSpace(0, 0, width, height, 5, rng);
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

  const divideSpace: DivideSpace = (x, y, width, height, depth, rng) => {
    let availableSpace = [{ x, y, width, height }];
    const sizes = [192, 96, 48]; // Sizes must be multiples of gridUnit
    let subdivisions = [];

    while (availableSpace.length > 0 && depth > 0) {
      let spaceIndex = Math.floor(rng() * availableSpace.length);
      let space = availableSpace[spaceIndex];
      let size = sizes.find((size) => size <= space.width && size <= space.height);

      if (!size) {
        availableSpace.splice(spaceIndex, 1); // Remove unusable space
        continue;
      }

      // Ensure alignment to grid
      let posX = Math.floor(rng() * Math.floor((space.width - size) / gridUnit)) * gridUnit + space.x;
      let posY = Math.floor(rng() * Math.floor((space.height - size) / gridUnit)) * gridUnit + space.y;

      subdivisions.push({ x: posX, y: posY, width: size, height: size });

      // Update available space by excluding the new square area
      updateAvailableSpace(space, posX, posY, size, availableSpace);
      depth--;
    }

    return subdivisions;
  };

  const updateAvailableSpace = (space, x, y, size, availableSpace) => {
    // Exclude the placed square's space
    // This is simplified and needs to be expanded to properly manage all space around the placed square
    availableSpace.push({ x: space.x, y: space.y, width: x - space.x, height: space.height });
    availableSpace.push({ x: x + size, y: space.y, width: space.width - size - (x - space.x), height: space.height });
    availableSpace.push({ x: space.x, y: space.y, width: space.width, height: y - space.y });
    availableSpace.push({ x: space.x, y: y + size, width: space.width, height: space.height - size - (y - space.y) });
  };

  const themes: Theme = {
    colors: ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--foreground)', 'var(--background)']
  };

  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" className={style.asset}>
      {svgs.map((svg, index) => (
        <g key={`svg-${index}`}>
          <rect x={svg.x} y={svg.y} width={svg.width} height={svg.height} fill={svg.fill} shapeRendering="crispEdges" />
          <image href={svg.src} x={svg.x} y={svg.y} width={svg.width} height={svg.height} />
        </g>
      ))}
    </svg>
  );
};
