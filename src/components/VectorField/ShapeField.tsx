import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ShapeFieldProps {
  width?: number;
  height?: number;
  rows?: number;
  columns?: number;
  padding?: number;
  interpolationValue?: number;
  variant?: 'swirl' | 'dithered-gradient' | 'radial' | 'checker' | 'grid' | 'pcb';
  color1?: string;
  color2?: string;
}

interface ShapeProps {
  x: number;
  y: number;
  size: number;
  type: 'rect' | 'ellipse' | 'line' | null;
  opacity: number;
}

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
  const spiral = Math.sin(angle * 3 + radius / 0.7);
  return spiral;
};

const childVariants = {
  hidden: ({ shimmer }: { shimmer: number }) => ({
    opacity: 0,
    transition: {
      duration: 0.05 * shimmer
    }
  }),
  visible: ({ shimmer }: { shimmer: number }) => ({
    opacity: [1, 0.5, 1],
    transition: {
      repeat: 1,
      repeatType: 'loop',
      duration: 2,
      delay: shimmer * 0.003,
      ease: 'easeInOut'
    }
  })
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

const Shape = React.memo(({ x, y, type, size = 8, opacity }: ShapeProps) => {
  if (!type) return null;
  const commonProps = {
    stroke: 'currentColor',
    vectorEffect: 'non-scaling-stroke',
    strokeWidth: 1.25,
    strokeOpacity: opacity,
    fill: 'none'
  };
  switch (type) {
    case 'line':
      return <line x1={x} y1={y + size / 2} x2={x + size} y2={y + size / 2} {...commonProps} />;
    case 'rect':
      return <rect x={x} y={y} width={size} height={size} {...commonProps} />;
    case 'ellipse':
      return <ellipse cx={x + size / 2} cy={y + size / 2} rx={size / 2} ry={size / 2} {...commonProps} />;
    default:
      return null;
  }
});

export const ShapeField = React.memo(
  ({
    width = 240,
    height = 240,
    rows = 16,
    columns = 16,
    padding = 4.5,
    color1 = 'var(--foreground)',
    color2 = 'var(--foreground-accent)',
    variant = 'swirl'
  }: ShapeFieldProps) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const isInView = useInView(svgRef, {
      once: false,
      amount: 'some'
    });

    const paddedWidth = width - columns * padding; // Reduce total width by total horizontal padding
    const paddedHeight = height - rows * padding;

    const cellWidth = paddedWidth / columns;
    const cellHeight = paddedHeight / rows;

    const midX = width / 2 - cellWidth / 2;
    const midY = height / 2 - cellHeight / 2;

    const shapes = React.useMemo(
      () =>
        Array.from({ length: rows * columns }, (_, index) => {
          const col = index % columns;
          const row = Math.floor(index / columns);
          const x = col * (cellWidth + padding) + padding / 2;
          const y = row * (cellHeight + padding) + padding / 2;

          const shapeSize = Math.min(cellWidth, cellHeight) - padding;

          //radial tools
          const rx = (x - midX) / width;
          const ry = (y - midY) / height;
          // const rdistance = Math.sqrt(rx * rx + ry * ry);

          //linear tools
          const dx = col / columns;
          const dy = row / rows;
          // const interpolation = Math.abs(rx - ry);
          // const xdistance = x / width;
          const ydistance = y / height;
          //const diagDistance = Math.sqrt(dx * dx + dy * dy);

          //noise tools, noice indeed
          const baseNoise = (0.5 - Math.random()) * 0.66; // Between -0.1 and 0.1
          const noise = (Math.sin(dx * Math.PI) + Math.cos(ry * Math.PI)) / 2; // Oscillates between -1 and 1, normalized to 0-1

          let shapeType: ShapeProps['type'];

          function combinedType(value: number) {
            let shapeType: ShapeProps['type'];
            if (value <= 0.33) {
              shapeType = 'rect';
            } else if (value <= 0.66) {
              shapeType = 'ellipse';
            } else {
              shapeType = 'line';
            }
            return shapeType;
          }

          switch (variant) {
            case 'swirl':
              // add a twist to the swirl by increasing the index each revolution
              shapeType = tornado(col, row, rows, columns) > 0 ? 'line' : 'ellipse';
              break;

            case 'dithered-gradient':
              shapeType = combinedType(baseNoise + ydistance);
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

            case 'pcb':
              shapeType = pcbPattern(col, row) > 0.5 ? 'rect' : 'ellipse';
              break;

            default:
              shapeType = 'rect';
              break;
          }
          let opacity;
          const combinedNoise = baseNoise + noise;
          if (combinedNoise <= 0.33) {
            opacity = 0.2;
          } else if (combinedNoise <= 0.66) {
            opacity = 0.6;
          } else {
            opacity = 1;
          }

          const color = shapeType === 'rect' ? color1 : color2;

          return (
            <motion.g
              key={`${row}-${col}`}
              variants={childVariants as any}
              custom={{ shimmer: index * (index * 0.1) }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              style={{ color: color }}
            >
              <Shape x={x} y={y} type={shapeType} size={shapeSize} opacity={opacity} />
            </motion.g>
          );
        }),
      [rows, columns, cellWidth, padding, cellHeight, midX, width, midY, height, variant, color1, color2, isInView]
    );
    return (
      <motion.svg
        width={width}
        height={height}
        ref={svgRef}
        initial={{
          opacity: 0
        }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {shapes}
      </motion.svg>
    );
  }
);
