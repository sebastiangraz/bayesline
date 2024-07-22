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
      duration: 0.5 + i * 0.3,
      ease: [1, 0, 0.17, 1],
      opacity: {
        duration: 0.25
      }
    }
  })
};
const imageVariant = {
  hidden: ({
    random
  }: {
    random: {
      '--x': string;
      '--y': string;
    };
  }) => ({
    '--x': random['--x'],
    '--y': random['--y'],
    opacity: 0
  }),
  show: ({ i }: { i: number }) => ({
    '--x': '0px',
    '--y': '0px',
    opacity: 1,
    transition: {
      duration: 0.5 + i * 0.3,
      ease: [1, 0, 0.17, 1]
    }
  })
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

  let subdivisions = recursiveDivider(0, 0, width, height, rng);

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

const directionsArr = [
  { clip: 'inset(0% 0% 25% 0%)' },
  { clip: 'inset(25% 0% 0% 0%)' },
  { clip: 'inset(0% 25% 0% 0%)' },
  { clip: 'inset(0% 0% 0% 25%)' }
];

const imageDirectionsArr = [
  { '--y': '-4px', '--x': '0px' },
  { '--y': '4px', '--x': '0px' },
  { '--y': '0px', '--x': '-4px' },
  { '--y': '0px', '--x': '4px' }
];

export const Asset: React.FC<Props> = React.memo(
  ({ seed }) => {
    // const [count, setCount] = React.useState(Math.floor(Math.random() * 1000));
    // React.useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCount((count) => count + 1);
    //   }, 1500);
    //   return () => clearInterval(interval);
    // }, []);
    // seed = `${seed}-${count}`;
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
          const imageDirections = imageDirectionsArr[index % imageDirectionsArr.length];

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
              <motion.g
                variants={imageVariant}
                custom={{ i: index, random: imageDirections }}
                style={{ color: svg.fg, x: 'var(--x)', y: 'var(--y)' }}
              >
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
