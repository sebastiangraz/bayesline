import { useMotionValue, useTransform, useSpring, motion, useInView } from 'framer-motion';
import { useCallback, useRef } from 'react';
import style from './vectorfield.module.css';

interface VectorFieldProps {
  variant?: 'swirl' | 'straight' | 'radial' | 'checker';
  className?: string;
}

const arrowVariants = {
  hidden: {
    scale: 0
  },
  visible: ({ i }: { i: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5 + i * 0.01,
      ease: [1, 0.2, 0, 0.2]
    }
  })
};

export const VectorField = ({ variant = 'swirl', className }: VectorFieldProps) => {
  const svgSize = 192; // Size of the SVG canvas
  const svgPadding = 6; // Padding around the canvas
  const size = svgSize - svgPadding * 2; // Size of the vector field

  const numArrows = 14; // Number of arrows along one dimension
  const arrowPadding = 6; // Padding between arrows
  const arrowSize = (size - arrowPadding * (numArrows - 1)) / numArrows;

  const mouseX = useMotionValue(size / 2 + svgPadding);
  const mouseY = useMotionValue(size / 2 + svgPadding);
  const svgRef = useRef<SVGSVGElement>(null);

  const isInView = useInView(svgRef, {
    amount: 'some'
  });

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = svgRef.current!.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  // Radius of the non-reactive buffer around the cursor

  const arrows = Array.from({ length: numArrows * numArrows }, (_, index) => {
    const x = (index % numArrows) * (arrowSize + arrowPadding) + svgPadding + arrowSize / 2;
    const y = Math.floor(index / numArrows) * (arrowSize + arrowPadding) + svgPadding + arrowSize / 2;
    let bufferVariable = null;
    const angle = useTransform<number, number>([mouseX, mouseY], ([latestX, latestY]) => {
      const dx = latestX - x;
      const dy = latestY - y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const baseAngle = Math.atan2(dy, dx);

      switch (variant) {
        case 'swirl':
          bufferVariable = dist / 2;
          break;

        case 'straight':
          bufferVariable = 0 - Math.min(0, dist);
          break;

        case 'radial':
          bufferVariable = 100 - Math.min(100, dist);
          break;

        case 'checker':
          bufferVariable = ((index % numArrows) * 45 + Math.floor(index / numArrows) * 45) % 90;
          break;

        default:
          bufferVariable = 0;
          break;
      }

      const bufferRadius = bufferVariable;

      const offsetAngle = baseAngle + (bufferRadius / Math.max(dist, bufferRadius)) * (Math.PI / 2);

      return offsetAngle * (180 / Math.PI);
    });

    const x2 = useSpring(
      useTransform(angle, (a) => x + arrowSize * Math.cos((a * Math.PI) / 180)),
      { stiffness: 400, damping: 20, mass: 0.1 }
    );
    const y2 = useSpring(
      useTransform(angle, (a) => y + arrowSize * Math.sin((a * Math.PI) / 180)),
      { stiffness: 400, damping: 20, mass: 0.1 }
    );

    const radialIndex = Math.floor((225 + angle.get()) % 180);

    return { x, y, x2, y2, angle: radialIndex };
  });

  const classNames = `${style.vectorfield} ${className}`;
  return (
    <svg ref={svgRef} width={svgSize} height={svgSize} onMouseMove={handleMouseMove} className={classNames}>
      {arrows.map((arrow, index) => (
        <motion.line
          vectorEffect={'non-scaling-stroke' as any}
          key={index}
          x1={arrow.x}
          y1={arrow.y}
          x2={arrow.x2}
          y2={arrow.y2}
          stroke="currentColor"
          strokeWidth={1.33}
          variants={arrowVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={{ i: arrow.angle }}
        />
      ))}
    </svg>
  );
};
