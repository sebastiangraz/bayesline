import { warning } from 'framer-motion';
import style from './icon.module.css';

interface IconProps {
  name?: keyof typeof IconPaths;
  className?: string;
}

export const Icon = ({ name = 'chart', ...rest }: IconProps) => {
  const paths = IconPaths[name]?.path;

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={`${style.icon} ${rest.className}`}>
      {paths}
    </svg>
  );
};

const IconPaths = {
  chart: {
    path: (
      <>
        <path
          d="M29.5 36L29.5 10M23.5 36L23.5 16M17.5 36L17.5 22M11.5 36L11.5 28M35.5 36L35.5 4M5.5 32L5.5 36"
          stroke="currentColor"
          strokeOpacity="0.56"
          vectorEffect={'non-scaling-stroke'}
        />
      </>
    )
  },
  layers: {
    path: (
      <>
        <path
          d="M20.5 4V20V36M8.5 8V16M14.5 18L14.5 6M26.5 18V6M32.5 8V16M2.5 10V14M38.5 10V14M8.5 24V32M14.5 34L14.5 22M26.5 34V22M32.5 24V32M2.5 26V30M38.5 26V30"
          stroke="currentColor"
          strokeOpacity="0.56"
          vectorEffect={'non-scaling-stroke'}
        />
      </>
    )
  },
  globe: {
    path: (
      <>
        <path
          d="M36 11.5H4M2 17.5H38M4 29.5H36M30 35.5H10M2 23.5H38M30 5.5H10"
          stroke="currentColor"
          strokeOpacity="0.56"
          vectorEffect={'non-scaling-stroke'}
        />
      </>
    )
  },
  warning: {
    path: (
      <>
        <path
          d="M20.5 36V30M20.5 4V26M8.5 20V36M14.5 36L14.5 12M26.5 36V12M32.5 20V36M2.5 30V36M38.5 30V36"
          stroke="currentColor"
          strokeOpacity="0.56"
          vectorEffect={'non-scaling-stroke'}
        />
      </>
    )
  },
  experiment: {
    path: (
      <>
        <path d="M24 11H16M16 17H24M8 29H32M36 35H4M12 23H28M26 5H14" stroke="currentColor" />
      </>
    )
  },
  enterprise: {
    path: (
      <>
        <path d="M11 38L11 16M17 38L17 2M23 38L23 6M29 38L29 10M5 38L5 12M35 14L35 38" stroke="currentColor" />
      </>
    )
  }
} as { [key: string]: { path: JSX.Element } };
