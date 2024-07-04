import React from 'react';
import { motion } from 'framer-motion';

interface ShapeFieldProps {
  width?: number;
  height?: number;
  rows?: number;
  columns?: number;
  padding?: number;
  interpolationValue?: number;
  variant?: 'swirl' | 'dithered-gradient' | 'radial' | 'checker' | 'grid' | 'plus' | 'pcb';
}

interface ShapeProps {
  x: number;
  y: number;
  size: number;
  type: 'rect' | 'ellipse';
}

const Shape = ({ x, y, type, size = 8 }: ShapeProps) => {
  switch (type) {
    case 'rect':
      return <rect x={x} y={y} width={size} height={size} stroke="none" fill="var(--accent-1)" strokeWidth={1} />;
    case 'ellipse':
      return (
        <ellipse
          cx={x + size / 2}
          cy={y + size / 2}
          rx={size / 2}
          ry={size / 2}
          stroke="none"
          fill="var(--accent-3)"
          strokeWidth={1}
        />
      );
    default:
      return null;
  }
};

export const ShapeField = ({
  width = 288,
  height = 288,
  rows = 16,
  columns = 16,
  padding = 4,
  variant = 'swirl'
}: ShapeFieldProps) => {
  const paddedWidth = width - columns * padding; // Reduce total width by total horizontal padding
  const paddedHeight = height - rows * padding;

  const cellWidth = paddedWidth / columns;
  const cellHeight = paddedHeight / rows;

  const midX = width / 2 - cellWidth / 2;
  const midY = height / 2 - cellHeight / 2;

  const shapes = Array.from({ length: rows * columns }, (_, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = col * (cellWidth + padding) + padding / 2;
    const y = row * (cellHeight + padding) + padding / 2;

    const shapeSize = Math.min(cellWidth, cellHeight) - padding;

    //radial tools
    const rx = (x - midX) / width;
    const ry = (y - midY) / height;
    const rdistance = Math.sqrt(rx * rx + ry * ry);

    //linear tools
    const dx = col / columns;
    const dy = row / rows;
    const interpolation = Math.abs(rx - ry);
    const xdistance = x / width;
    const ydistance = y / height;
    const diagDistance = Math.sqrt(dx * dx + dy * dy);

    //noise tools, noice indeed
    const baseNoise = (0.5 - Math.random()) * 0.66; // Between -0.1 and 0.1
    const noise = (Math.sin(rx * Math.PI) + Math.cos(ry * Math.PI)) / 2; // Oscillates between -1 and 1, normalized to 0-1

    function gaussian(x: number, mean: number, variance: number) {
      return (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(-Math.pow(x - mean, 2) / (2 * variance));
    }

    function bayesianCurve(col: number, row: number, rows: number, columns: number) {
      const mean = columns / 2;
      const variance = Math.pow(columns / 7, 3.2); // Adjust this for wider/narrower curves
      const baseHeight = gaussian(col, mean, variance);
      const normalizedHeight = baseHeight * row; // Normalize height to fit rows
      return normalizedHeight;
    }
    const tornado = (col: number, row: number, rows: number, columns: number) => {
      const angle = Math.atan2(row - rows / 2, col - columns / 2);
      const radius = Math.sqrt(Math.pow(row - rows / 2, 2) + Math.pow(col - columns / 2, 2));
      const spiral = Math.sin(angle * 3 + radius / 10);
      return spiral;
    };
    const softenedPlus = (col: number, row: number, rows: number, columns: number) => {
      const center = Math.abs(col - columns / 2) < 2 || Math.abs(row - rows / 2) < 2;
      const blurEffect = gaussian(baseNoise, (rx + ry * dx - dy) * noise, 0.08);
      return center ? blurEffect : blurEffect * 0.3549;
    };

    function pcbPattern(col: number, row: number) {
      // Variability in the grid spacing
      let gridSizes = [2, 5, 9, 27, 1, 1, 1];
      const gridSize = gridSizes[Math.floor(Math.random() * gridSizes.length * 0.2)];

      // Establish connections based on variable grid sizes
      const connections =
        col % gridSizes[(col % gridSize) * 1] > gridSize || row % gridSizes[(row % gridSize) * 8] === 0 ? 1 : 0;

      // Looks like generated text
      // const connections =
      // col % gridSizes[(col % gridSize) * 20] > gridSize || row % gridSizes[(row % gridSize) * 8] === 0 ? 1 : 0;

      // Looks like icons with text
      //   const connections =
      //     col % gridSizes[(row % gridSize) * 2] < 2 || row % gridSizes[gridSize * 12 + col] === 0 ? 0 : 0.6;

      return connections;
    }

    let shapeType: 'rect' | 'ellipse' = 'rect'; // Default to 'rect'

    switch (variant) {
      case 'swirl':
        // add a twist to the swirl by increasing the index each revolution
        shapeType = tornado(col, row, rows, columns) > 0 ? 'rect' : 'ellipse';
        break;

      case 'dithered-gradient':
        shapeType = baseNoise + ydistance <= 0.5 ? 'rect' : 'ellipse';
        break;

      case 'radial':
        shapeType = baseNoise + noise <= 0.5 ? 'rect' : 'ellipse';
        break;

      case 'grid':
        shapeType = bayesianCurve(col, row, rows, columns) < 0.5 ? 'rect' : 'ellipse'; // Alternates every row
        break;

      case 'checker':
        shapeType = index % 2 === 0 ? 'rect' : 'ellipse'; // Alternates every cell
        break;

      case 'plus':
        shapeType = softenedPlus(col, row, rows, columns) > 0.5 ? 'rect' : 'ellipse'; // Alternates every cell
        break;

      case 'pcb':
        shapeType = pcbPattern(col, row) > 0.5 ? 'rect' : 'ellipse';
        break;

      default:
        shapeType = 'rect';
        break;
    }

    return (
      <motion.g
        key={`${row}-${col}`}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Shape x={x} y={y} type={shapeType} size={shapeSize} />
      </motion.g>
    );
  });

  return (
    <svg width={width} height={height}>
      {shapes}
    </svg>
  );
};
