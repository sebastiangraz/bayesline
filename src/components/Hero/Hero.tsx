import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import { motion, useMotionValue, useScroll, useTransform, useSpring } from 'framer-motion';
import { Flex, Text } from '@/components';
import hero from '@/assets/homepage-hero.png';
import { useRef } from 'react';

const VectorField = () => {
  const size = 288; // Size of the SVG canvas
  const numArrows = 12; // Number of arrows along one dimension

  const arrowPadding = 12; // Padding between arrows
  const arrowSize = (size - arrowPadding * (numArrows - 1)) / numArrows;

  const mouseX = useMotionValue(size / 2);
  const mouseY = useMotionValue(size / 2);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = svgRef.current!.getBoundingClientRect();
    if (rect) {
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    }
  };

  const arrows = Array.from({ length: numArrows * numArrows }, (_, index) => {
    const x = (index % numArrows) * (arrowSize + arrowPadding);
    const y = Math.floor(index / numArrows) * (arrowSize + arrowPadding);

    const angle = useTransform<number, number>([mouseX, mouseY], ([latestX, latestY]) => {
      return Math.atan2(latestY - y, latestX - x) * (180 / Math.PI);
    });
    return { x, y, angle };
  });
  return (
    <svg ref={svgRef} width={size} height={size} onMouseMove={handleMouseMove}>
      {arrows.map((arrow, index) => (
        <motion.line
          key={index}
          x1={arrow.x}
          y1={arrow.y}
          x2={useTransform(arrow.angle, (a) => arrow.x + arrowSize * Math.cos((a * Math.PI) / 180))}
          y2={useTransform(arrow.angle, (a) => arrow.y + arrowSize * Math.sin((a * Math.PI) / 180))}
          stroke="var(--background-3)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: index * 0.01
          }}
        />
      ))}
    </svg>
  );
};

interface HeroProps {
  title?: string;
}

export const Hero = (props: HeroProps) => {
  const { scrollY } = useScroll();

  const yDistance = useTransform(scrollY, [0, 1000], [0, -40]);
  const headerOpacity = useTransform(scrollY, [300, 500], [1, 0]);

  const { title = 'Financial analytics rethought.' } = props;

  return (
    <div className={`col bleed`}>
      <div className={`col ${style.hero}`}>
        <Flex column gap={4}>
          <Text.H1>
            <motion.div style={{ y: yDistance, opacity: headerOpacity }}>
              <StaggerText>{title}</StaggerText>
            </motion.div>
          </Text.H1>
          <Text.Body>
            We deliver the analytics that investment managers are already familiar with, but hyper-customizable and
            blazing fast.
          </Text.Body>
        </Flex>
      </div>
      <div className={`col ${style.ui}`}>
        <div className={`${style.cue}`}>
          <VectorField />
        </div>
        <img src={hero} alt="hero" />
      </div>
      {/* <div className={`col ${style.cue}`}>
        <ReactP5Wrapper sketch={sketch} />
      </div> */}
    </div>
  );
};
