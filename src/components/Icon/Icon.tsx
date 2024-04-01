import style from './icon.module.css';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon = (props: IconProps) => {
  const { name, ...rest } = props;

  const paths = IconPaths[name].path;

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className={`${style.icon} ${rest.className}`}>
      {paths}
    </svg>
  );
};

const IconPaths = {
  chart: {
    path: (
      <>
        <path
          d="M33.8949 6L34.1449 5.56699L34.0289 5.5L33.8949 5.5L33.8949 6ZM44.1051 11.8949L44.5381 11.6449L44.4711 11.5289L44.3551 11.4619L44.1051 11.8949ZM50 22.1051H50.5V21.9711L50.433 21.8551L50 22.1051ZM49.5 31.8949C49.5 32.171 49.7239 32.3949 50 32.3949C50.2761 32.3949 50.5 32.171 50.5 31.8949H49.5ZM22.1051 50L21.8551 50.433L21.9711 50.5H22.1051V50ZM11.8949 44.1051L11.4619 44.3551L11.5289 44.4711L11.6449 44.5381L11.8949 44.1051ZM6 33.8949L5.5 33.8949L5.5 34.0289L5.56699 34.1449L6 33.8949ZM6 22.1051L5.56699 21.8551L5.5 21.9711L5.5 22.1051L6 22.1051ZM11.8949 11.8949L11.6449 11.4619L11.5289 11.5289L11.4619 11.6449L11.8949 11.8949ZM22.1051 6L22.1051 5.5L21.9711 5.5L21.8551 5.56699L22.1051 6ZM33.6449 6.43301L43.8551 12.3279L44.3551 11.4619L34.1449 5.56699L33.6449 6.43301ZM43.6721 12.1449L49.567 22.3551L50.433 21.8551L44.5381 11.6449L43.6721 12.1449ZM49.5 22.1051V31.8949H50.5V22.1051H49.5ZM31.8949 49.5H22.1051V50.5H31.8949V49.5ZM22.3551 49.567L12.1449 43.6721L11.6449 44.5381L21.8551 50.433L22.3551 49.567ZM12.3279 43.8551L6.43301 33.6449L5.56699 34.1449L11.4619 44.3551L12.3279 43.8551ZM6.5 33.8949L6.5 22.1051L5.5 22.1051L5.5 33.8949L6.5 33.8949ZM6.43301 22.3551L12.3279 12.1449L11.4619 11.6449L5.56699 21.8551L6.43301 22.3551ZM12.1449 12.3279L22.3551 6.43301L21.8551 5.56699L11.6449 11.4619L12.1449 12.3279ZM22.1051 6.5L33.8949 6.5L33.8949 5.5L22.1051 5.5L22.1051 6.5Z"
          fill="currentColor"
        />
        <path
          opacity="0.56"
          d="M47 30.091V22.909L41.909 14.091L33.091 9L22.909 9L14.091 14.091L9 22.909L9 33.091L14.091 41.909L22.909 47H30.091"
          stroke="currentColor"
        />
        <path
          opacity="0.24"
          d="M32.2872 12L32.5372 11.567L32.4212 11.5L32.2872 11.5L32.2872 12ZM39.7128 16.2872L40.1458 16.0372L40.0788 15.9212L39.9628 15.8542L39.7128 16.2872ZM44 23.7128H44.5V23.5788L44.433 23.4628L44 23.7128ZM43.5 28.2872C43.5 28.5633 43.7239 28.7872 44 28.7872C44.2761 28.7872 44.5 28.5633 44.5 28.2872H43.5ZM23.7128 44L23.4628 44.433L23.5788 44.5H23.7128V44ZM16.2872 39.7128L15.8542 39.9628L15.9212 40.0788L16.0372 40.1458L16.2872 39.7128ZM12 32.2872L11.5 32.2872L11.5 32.4212L11.567 32.5372L12 32.2872ZM12 23.7128L11.567 23.4628L11.5 23.5788L11.5 23.7128L12 23.7128ZM16.2872 16.2872L16.0372 15.8542L15.9212 15.9212L15.8542 16.0372L16.2872 16.2872ZM23.7128 12L23.7128 11.5L23.5788 11.5L23.4628 11.567L23.7128 12ZM32.0372 12.433L39.4628 16.7202L39.9628 15.8542L32.5372 11.567L32.0372 12.433ZM39.2798 16.5372L43.567 23.9628L44.433 23.4628L40.1458 16.0372L39.2798 16.5372ZM43.5 23.7128V28.2872H44.5V23.7128H43.5ZM28.2872 43.5H23.7128V44.5H28.2872V43.5ZM23.9628 43.567L16.5372 39.2798L16.0372 40.1458L23.4628 44.433L23.9628 43.567ZM16.7202 39.4628L12.433 32.0372L11.567 32.5372L15.8542 39.9628L16.7202 39.4628ZM12.5 32.2872L12.5 23.7128L11.5 23.7128L11.5 32.2872L12.5 32.2872ZM12.433 23.9628L16.7202 16.5372L15.8542 16.0372L11.567 23.4628L12.433 23.9628ZM16.5372 16.7202L23.9628 12.433L23.4628 11.567L16.0372 15.8542L16.5372 16.7202ZM23.7128 12.5L32.2872 12.5L32.2872 11.5L23.7128 11.5L23.7128 12.5Z"
          fill="currentColor"
        />
        <path
          d="M43.8494 28L49.6506 31.3494L53 37.1506V43.8494L49.6506 49.6506L43.8494 53H37.1506L31.3494 49.6506L28 43.8494L28 37.1506L31.3494 31.3494L37.1506 28L43.8494 28Z"
          stroke="currentColor"
          stroke-dasharray="4 4"
        />
        <path opacity="0.56" d="M30 46.5H36L41 40L46.5 42L48 35H52.5" stroke="currentColor" />
      </>
    )
  },
  layers: {
    path: (
      <>
        <path opacity="0.56" d="M12 23L28 14L44 23L28 32L12 23Z" stroke="currentColor" stroke-linejoin="round" />
        <path opacity="0.24" d="M12 33L28 24L44 33L28 42L12 33Z" stroke="currentColor" stroke-linejoin="round" />
        <path d="M20 11.5H36" stroke="currentColor" stroke-dasharray="2 4" />
        <path d="M20 44.5H36" stroke="currentColor" stroke-dasharray="2 4" />
        <path d="M11.5 36V20" stroke="currentColor" stroke-dasharray="2 4" />
        <path d="M44.5 36V20" stroke="currentColor" stroke-dasharray="2 4" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 9.5L12 7.78571V3H11V7.78571L8 9.5V11H3V12H8V13.5L11 15.2143V20H12V15.2143L15 13.5V12H20V11H15V9.5ZM11.5 8.65175L9 10.0803V12.9197L11.5 14.3482L14 12.9197V10.0803L11.5 8.65175Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 42.5L12 40.7857V36H11V40.7857L8 42.5V44H3V45H8V46.5L11 48.2143V53H12V48.2143L15 46.5V45H20V44H15V42.5ZM11.5 41.6518L9 43.0803V45.9197L11.5 47.3482L14 45.9197V43.0803L11.5 41.6518Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48 9.5L45 7.78571V3H44V7.78571L41 9.5V11H36V12H41V13.5L44 15.2143V20H45V15.2143L48 13.5V12H53V11H48V9.5ZM44.5 8.65175L42 10.0803V12.9197L44.5 14.3482L47 12.9197V10.0803L44.5 8.65175Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48 42.5L45 40.7857V36H44V40.7857L41 42.5V44H36V45H41V46.5L44 48.2143V53H45V48.2143L48 46.5V45H53V44H48V42.5ZM44.5 41.6518L42 43.0803V45.9197L44.5 47.3482L47 45.9197V43.0803L44.5 41.6518Z"
          fill="currentColor"
        />
      </>
    )
  },
  border: {
    path: (
      <>
        <path d="M8 16L16 8" stroke="black" stroke-linecap="round" />
        <path d="M8 40L16 32" stroke="black" stroke-linecap="round" />
        <path d="M8 48L16 40" stroke="black" stroke-linecap="round" />
        <path d="M16 48L24 40" stroke="black" stroke-linecap="round" />
        <path d="M24 48L32 40" stroke="black" stroke-linecap="round" />
        <path d="M40 48L48 40" stroke="black" stroke-linecap="round" />
        <path d="M40 32L48 24" stroke="black" stroke-linecap="round" />
        <path d="M40 24L48 16" stroke="black" stroke-linecap="round" />
        <path d="M40 16L48 8" stroke="black" stroke-linecap="round" />
        <path d="M32 16L40 8" stroke="black" stroke-linecap="round" />
        <path d="M24 16L32 8" stroke="black" stroke-linecap="round" />
        <path d="M48 48L48.5 47.5" stroke="black" stroke-linecap="round" />
        <path d="M8 24L24 8" stroke="black" stroke-linecap="round" />
        <path d="M32 48L48 32" stroke="black" stroke-linecap="round" />
        <path d="M8 32L16 24" stroke="black" stroke-linecap="round" />
        <path opacity="0.56" d="M25 24.5L28.5 26.5V30.5L25 32.5L21.5 30.5V26.5L25 24.5Z" stroke="black" />
        <path d="M19.5 31.75L25 35H31L36.5 31.75V25.25L31 22H25L19.5 25.25V31.75Z" stroke="currentColor" />
      </>
    )
  }
} as { [key: string]: { path: JSX.Element } };
