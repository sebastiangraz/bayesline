import style from './button.module.css';
import { motion } from 'framer-motion';
interface ButtonProps {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

const outlineVariants = {
  default: {
    strokeDashoffset: 0,
    transition: { duration: 0.2, ease: [0.83, 0, 0.17, 1] }
  },
  hover: {
    strokeDashoffset: 6,
    transition: { duration: 1, ease: 'linear', repeat: Infinity }
  }
};

const dotVariants = {
  default: { strokeWidth: 5 },
  hover: (i: number) => {
    let index = i ? i : 1;
    let delay = index * 0.03;
    return {
      strokeWidth: [5, 2, 5],
      transition: { strokeWidth: { delay, duration: 0.45 } }
    };
  }
};

export const Button = (props: ButtonProps) => {
  const { children, type, ...rest } = props;

  const background = type === 'primary' ? style.primary : style.secondary;
  const className = rest.className ? rest.className : '';

  if (rest.href) {
    return (
      <motion.a
        {...rest}
        className={`${style.button} ${background} ${className}`}
        whileHover="hover"
        initial="default"
        animate="default"
      >
        {children}
        <ButtonNodes />
      </motion.a>
    );
  } else {
    return <button className={`${style.button} ${background} ${className}`}>{children}</button>;
  }
};

const ButtonNodes = () => {
  return (
    <motion.svg
      width="240"
      height="62"
      viewBox="0 0 240 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style.buttonNode}
      preserveAspectRatio="xMidYMin slice"
    >
      <svg width="240" height="62" viewBox="0 0 240 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={outlineVariants}
          d="M-316.655 416.103L-282.714 382.161M-316.655 416.103L-269.986 394.889M-316.655 416.103L-295.442 369.433L-261.5 335.492L-240.287 288.823L-172.405 220.941M-282.714 382.161L-236.045 360.948M-282.714 382.161L-248.773 348.22M-236.045 360.948L-202.103 327.007M-236.045 360.948L-269.986 394.889M-236.045 360.948L-189.376 339.735M-202.103 327.007L-155.434 305.794M-202.103 327.007L-248.773 348.22M-155.434 305.794L-108.765 284.581M-155.434 305.794L-121.493 271.853L-74.8243 250.64M-155.434 305.794L-189.376 339.735M-108.765 284.581L-74.8243 250.64M-108.765 284.581L-142.707 318.522L-189.376 339.735M-108.765 284.581L-62.0964 263.368L-28.1552 229.426M-108.765 284.581L-87.5522 237.912L-53.6111 203.971L-11.1847 110.632L-2.69942 51.2354M-74.8243 250.64L-28.1552 229.426M-74.8243 250.64L-15.4273 242.154L31.2417 220.941L65.1828 187M-28.1552 229.426L18.5138 208.213M18.5138 208.213L65.1828 187M18.5138 208.213L86.3961 140.331M65.1828 187L111.852 165.787M65.1828 187L86.3961 140.331M111.852 165.787L171.249 157.301L264.587 114.875L323.984 106.39L370.653 85.1766L430.05 76.6913L463.991 42.7502M111.852 165.787L251.859 102.147L311.256 93.6619L357.925 72.4487L417.322 63.9634L463.991 42.7502M463.991 42.7502L510.66 21.537L544.601 -12.4041L591.27 -33.6173L693.094 -135.441L574.3 -118.47L502.175 -122.713M463.991 42.7502L582.785 25.7796L629.454 4.56643L748.248 -12.4041L820.373 -8.16153M-269.986 394.889L-223.317 373.676L-189.376 339.735M86.3961 140.331L120.337 106.39M120.337 106.39L154.278 72.4487L200.947 51.2354L268.83 -16.6468M120.337 106.39L162.764 13.0517M268.83 -16.6468L290.043 -63.3158L391.866 -165.139L413.079 -211.808L480.962 -279.69L502.175 -326.36M268.83 -16.6468L222.161 4.56643L162.764 13.0517M268.83 -16.6468L328.227 -25.1321L374.896 -46.3452L408.837 -80.2864L502.175 -122.713M-248.773 348.22L-180.89 280.338L-159.677 233.669L-125.736 199.728L-104.523 153.059M-104.523 153.059L-83.3096 106.39M-104.523 153.059L-70.5816 119.118L162.764 13.0517M-104.523 153.059L-172.405 220.941M-83.3096 106.39L-49.3685 72.4487L14.2712 -67.5584L22.7564 -126.955M-83.3096 106.39L-36.6405 85.1766L-2.69942 51.2354M-83.3096 106.39L-151.192 174.272L-172.405 220.941M22.7564 -126.955L26.9991 -54.8305L18.5138 4.56643L-2.69942 51.2354M22.7564 -126.955L31.2417 -186.352L22.7564 -330.602L56.6975 -364.543L77.9107 -411.212L213.675 -546.977L260.344 -568.19M22.7564 -126.955L65.1828 -220.294L73.6681 -279.69L213.675 -343.33L273.072 -351.815L319.741 -373.029L438.535 -389.999M162.764 13.0517L183.977 -33.6173M183.977 -33.6173L192.462 -93.0143L213.675 -139.683L239.131 -317.874L234.888 -389.999L243.374 -449.396L234.888 -593.646M183.977 -33.6173L-2.69942 51.2354M183.977 -33.6173L277.315 -76.0437L396.109 -93.0143L442.778 -114.228L502.175 -122.713M502.175 -122.713L536.116 -156.654L582.785 -177.867L616.726 -211.808"
          stroke="currentColor"
          strokeDashoffset="0"
          strokeMiterlimit="4"
          strokeLinecap="round"
          strokeDasharray="2 4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <motion.path
        variants={dotVariants}
        custom={1}
        d="M 43.9697 30.0223 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={2}
        d="M 90.6388 8.80913 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={3}
        d="M 18.5139 4.56651 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={4}
        d="M 141.55 59.7208 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={5}
        d="M 69.4256 55.4782 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={6}
        d="M 162.764 13.0518 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={7}
        d="M 222.161 4.56647 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={8}
        d="M 200.947 51.2356 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <motion.path
        variants={dotVariants}
        custom={9}
        d="M 234.889 17.2944 l 0.0001 0"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </motion.svg>
  );
};
