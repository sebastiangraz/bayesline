import React, { useRef, useMemo } from 'react';
import seedrandom from 'seedrandom';
import style from './asset.module.css';
import { assets, themes } from './assets';
import { motion, useInView } from 'framer-motion';
import { recursiveDivider } from '@/helpers/utils';

type Props = {
  seed: string;
};

const childVariant = {
  hidden: ({
    random
  }: {
    random: {
      clip: string;
    };
  }) => ({
    clipPath: random.clip,
    opacity: 0
  }),
  show: ({ i }: { i: number }) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      delay: 0.05 * i,
      duration: 1,
      ease: [1, 0, 0.17, 1],
      opacity: {
        duration: 0.25
      }
    }
  }),
  exit: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [1, 0, 0.17, 1]
    }
  }
};

const createColorGenerator = (colors: string | any[], subdivisions: { visible: boolean }[]) => {
  let index = 0;
  let colorIndex = 0;

  return () => {
    while (!subdivisions[index].visible && index < subdivisions.length - 1) {
      index++;
    }

    const colorPair = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    index++;
    return colorPair;
  };
};

const width = 288;
const height = 288;

const generateSVGs = (seed: string) => {
  const rng = seedrandom(seed);
  const themeKeys = Object.keys(themes);
  const selectedTheme = themes[themeKeys[Math.floor(rng() * themeKeys.length)]];

  let subdivisions = recursiveDivider(0, 0, width, height, 2, rng);

  let getColor = createColorGenerator(selectedTheme, subdivisions);

  return subdivisions
    .filter((sub) => sub.visible)
    .map((sub) => {
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
    const directionsArr = [
      { clip: 'inset(0% 0% 50% 0%)' },
      { clip: 'inset(50% 0% 0% 0%)' },
      { clip: 'inset(0% 50% 0% 0%)' },
      { clip: 'inset(0% 0% 0% 50%)' }
    ];

    const svgs = useMemo(() => generateSVGs(seed).filter((svg) => svg.visible), [seed]);

    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      amount: 'some'
    });

    return (
      <svg
        ref={ref}
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className={`${style.asset}`}
      >
        {svgs.map((svg, index) => {
          const directions = directionsArr[index % directionsArr.length];
          return (
            <motion.g
              initial="hidden"
              variants={childVariant}
              animate={isInView ? 'show' : 'hidden'}
              custom={{ i: index, random: directions }}
              key={`svg-${index}`}
            >
              <rect
                x={svg.x}
                y={svg.y}
                width={svg.width}
                height={svg.height}
                fill={svg.bg}
                shapeRendering="crispEdges"
              />
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

{
  //rotate seed every 1 second
  /*
    const [count, setCount] = React.useState(Math.floor(Math.random() * 1000));
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1500);
      return () => clearInterval(interval);
    }, []);
    seed = `${seed}-${count}`;
  */
}
