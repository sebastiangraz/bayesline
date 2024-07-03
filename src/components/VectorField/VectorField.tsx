import { useMotionValue, useTransform, useSpring, motion } from 'framer-motion';
import { useRef } from 'react';
import style from './vectorfield.module.css';

interface VectorFieldProps {
  variant: 'swirl' | 'straight';
}

const arrowVariants = {
  hidden: {
    scale: 0
  },

  visible: ({ i }: { i: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1 + i * 0.015
    }
  })
};

export const VectorField = () => {
  const svgSize = 192; // Size of the SVG canvas
  const svgPadding = 10; // Padding around the canvas
  const size = svgSize - svgPadding * 2; // Size of the vector field

  const numArrows = 14; // Number of arrows along one dimension
  const arrowPadding = 6; // Padding between arrows
  const arrowSize = (size - arrowPadding * (numArrows - 1)) / numArrows;

  const mouseX = useMotionValue(size / 2 + svgPadding);
  const mouseY = useMotionValue(size / 2 + svgPadding);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = svgRef.current!.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  // Radius of the non-reactive buffer around the cursor

  const arrows = Array.from({ length: numArrows * numArrows }, (_, index) => {
    const x = (index % numArrows) * (arrowSize + arrowPadding) + svgPadding + arrowSize / 2;
    const y = Math.floor(index / numArrows) * (arrowSize + arrowPadding) + svgPadding + arrowSize / 2;

    const angle = useTransform<number, number>([mouseX, mouseY], ([latestX, latestY]) => {
      const dx = latestX - x;
      const dy = latestY - y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const baseAngle = Math.atan2(dy, dx);
      const bufferRadius = dist / 2;

      const offsetAngle = baseAngle + (bufferRadius / Math.max(dist, bufferRadius)) * (Math.PI / 2);

      return offsetAngle * (180 / Math.PI);
    });

    const x2 = useSpring(
      useTransform(angle, (a) => x + arrowSize * Math.cos((a * Math.PI) / 180)),
      { stiffness: 400, damping: 20 }
    );
    const y2 = useSpring(
      useTransform(angle, (a) => y + arrowSize * Math.sin((a * Math.PI) / 180)),
      { stiffness: 400, damping: 20 }
    );

    const radialIndex = Math.floor((angle.get() + 360) % 360);

    return { x, y, x2, y2, angle: radialIndex };
  });

  return (
    <svg ref={svgRef} width={svgSize} height={svgSize} onMouseMove={handleMouseMove}>
      {arrows.map((arrow, index) => (
        <motion.line
          vectorEffect={'non-scaling-stroke' as any}
          key={index}
          x1={arrow.x}
          y1={arrow.y}
          x2={arrow.x2}
          y2={arrow.y2}
          stroke="var(--background-3)"
          strokeWidth="1"
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
          custom={{ i: arrow.angle }}
        />
      ))}
    </svg>
  );
};
