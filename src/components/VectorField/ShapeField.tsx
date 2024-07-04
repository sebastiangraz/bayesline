import React from 'react';
import { motion } from 'framer-motion';

interface ShapeFieldProps {
  width?: number;
  height?: number;
  rows?: number;
  columns?: number;
  interpolationValue?: number;
}

interface ShapeProps {
  x: number;
  y: number;
  type: 'rect' | 'ellipse';
}

const Shape = ({ x, y, type }: ShapeProps) => {
  switch (type) {
    case 'rect':
      return <rect x={x} y={y} width={10} height={10} fill="blue" />;
    case 'ellipse':
      return <ellipse cx={x + 5} cy={y + 5} rx={5} ry={5} fill="red" />;
    default:
      return null;
  }
};

export const ShapeField = ({
  width = 288,
  height = 288,
  rows = 10,
  columns = 10,
  interpolationValue = 0
}: ShapeFieldProps) => {
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  const shapes = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = col * cellWidth;
      const y = row * cellHeight;

      // Example formula to determine shape visibility and type
      const randomValue = Math.random();
      let shapeType: 'rect' | 'ellipse' | null = null;

      if (interpolationValue > randomValue) {
        shapeType = interpolationValue > 0.5 ? 'rect' : 'ellipse';
      }

      if (shapeType) {
        shapes.push(
          <motion.g
            key={`${row}-${col}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Shape x={x} y={y} type={shapeType} />
          </motion.g>
        );
      }
    }
  }

  return (
    <svg width={width} height={height}>
      {shapes}
    </svg>
  );
};
