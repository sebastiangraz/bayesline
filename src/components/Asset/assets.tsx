type AssetObject = {
  name: string;
  path: () => JSX.Element;
};

export const assets = [
  {
    name: 'illustration-5',
    path: () => (
      <svg width="144" height="144" fill="none">
        <path
          stroke="#F6D684"
          stroke-linecap="round"
          d="m76.46 76.46-.74-.74m.74-8.18-.74.74m-8.18-.74.74.74m-.74 8.18.74-.74m12.74 5.3-.94-.94M84.76 72h-1.34m-2.4-9.02-.94.94M72 59.24v1.34m-9.02 2.4.94.94M59.24 72h1.34m2.4 9.02.94-.94M72 84.76v-1.34m13.6 2.18-1.17-1.17m6.14-7.45a7284 7284 0 0 0-1.58-.43m1.58-9.52-1.58.42M85.6 58.4l-1.17 1.17m-7.46-6.14-.42 1.58m-9.52-1.58.42 1.58M58.4 58.4l1.17 1.17m-6.14 7.46 1.58.42m-1.58 9.53 1.58-.43m3.39 9.05 1.17-1.17m7.46 6.14.42-1.58m9.52 1.58-.42-1.58m13.61 1.17-1.37-1.37m6.93-6.96-1.78-.74M97.68 72h-1.93m-.03-9.83-1.78.74m-3.78-9.07-1.37 1.37m-6.96-6.93-.74 1.78M72 46.32v1.93m-9.83.03.74 1.78m-9.07 3.78 1.37 1.37m-6.93 6.96 1.78.74M46.32 72h1.93m.03 9.83 1.78-.74m3.78 9.07 1.37-1.37m6.96 6.93.74-1.78M72 97.68v-1.93m9.83-.03-.74-1.78m13.63.78-1.57-1.57m7.49-6.56-2-1.01m5.1-8.55-2.2-.35m2.2-9.71-2.2.35m-.9-9.91-2 1.01m-3.92-9.14-1.57 1.57m-6.56-7.48-1.01 1.98m-8.55-5.09-.35 2.2m-9.71-2.2.35 2.2m-9.91.91 1.01 1.98m-9.14 3.93 1.57 1.57m-7.48 6.56 1.98 1.01m-5.09 8.55 2.2.35m-2.2 9.71 2.2-.35m.91 9.91 1.98-1.01m3.93 9.14 1.57-1.57m6.56 7.49 1.01-2m8.55 5.1.35-2.2m9.71 2.2-.35-2.2m9.91-.9-1.01-2m13.72.66-1.8-1.8m7.92-6.2-2.19-1.27m6.05-8.04-2.44-.66M110.6 72h-2.53m1.21-9.99-2.44.66m-1.42-9.97-2.19 1.27M99.3 44.7l-1.8 1.8m-6.2-7.92-1.27 2.18m-8.04-6.04-.66 2.44M72 33.4v2.53m-9.99-1.21.66 2.44m-9.97 1.42 1.27 2.18M44.7 44.7l1.8 1.8m-7.92 6.2 2.18 1.27m-6.04 8.04 2.44.66M33.4 72h2.53m-1.21 9.99 2.44-.66m1.42 9.97 2.18-1.27m3.94 9.27 1.8-1.8m6.2 7.92 1.27-2.19m8.04 6.05.66-2.44M72 110.6v-2.53m9.99 1.21-.65-2.44m9.96-1.42-1.27-2.19m13.83.63-2-2m8.29-5.89-2.4-1.5m6.78-7.59-2.67-.93m4.91-8.91-2.8-.31m2.8-9.77-2.8.31m.56-10.15-2.67.93m-1.71-10.02-2.4 1.5m-3.89-9.39-2 2m-5.89-8.29-1.5 2.4m-7.59-6.78-.93 2.67m-8.91-4.91-.31 2.8m-9.77-2.8.31 2.8m-10.15-.56.93 2.67m-10.02 1.71 1.5 2.4m-9.39 3.89 2 2m-8.29 5.89 2.4 1.5m-6.78 7.59 2.67.93m-4.91 8.91 2.8.31m-2.8 9.77 2.8-.31m-.56 10.15 2.67-.93m1.71 10.02 2.4-1.5m3.89 9.39 2-2m5.89 8.29 1.5-2.4m7.59 6.78.93-2.67m8.91 4.91.31-2.8m9.77 2.8-.31-2.8m10.15.56-.93-2.67m10.02-1.71-1.5-2.4m13.95.67-2.2-2.2m8.61-5.6-2.6-1.74m7.37-7.17-2.9-1.2m5.82-8.46-3.06-.61m4.05-9.44h-3.12m2.13-10.05-3.06.61m.14-10.27-2.9 1.2m-1.87-10.11-2.6 1.74m-3.81-9.54-2.2 2.2m-5.6-8.61-1.74 2.6m-7.17-7.37-1.2 2.9m-8.46-5.82-.61 3.06M72 20.49v3.12m-10.05-2.13.61 3.06m-10.27-.14 1.2 2.9m-10.11 1.87 1.74 2.6m-9.54 3.81 2.2 2.2m-8.61 5.6 2.6 1.74m-7.37 7.17 2.9 1.2m-5.82 8.46 3.06.61M20.49 72h3.12m-2.13 10.05 3.06-.61m-.14 10.27 2.9-1.2m1.87 10.11 2.6-1.74m3.81 9.54 2.2-2.2m5.6 8.61 1.74-2.6m7.17 7.37 1.2-2.9m8.46 5.82.61-3.06m9.44 4.05v-3.12m10.05 2.13-.61-3.06m10.27.14-1.2-2.9m10.11-1.87-1.74-2.6M113 113l-2.43-2.43m8.92-5.32-2.8-1.96m7.85-6.79-3.1-1.45M128 87l-3.3-.88m5.05-9.07-3.4-.3m3.4-9.8-3.4.3M128 57l-3.3.88m-.16-10.38-3.1 1.45m-1.95-10.2-2.8 1.96M113 31l-2.43 2.43m-5.32-8.92-1.96 2.8m-6.79-7.85-1.45 3.1M87 16l-.88 3.3m-9.07-5.05-.3 3.4m-9.8-3.4.3 3.4M57 16l.88 3.3m-10.38.16 1.45 3.1m-10.2 1.95 1.96 2.8M31 31l2.43 2.43m-8.92 5.32 2.8 1.96m-7.85 6.79 3.1 1.45M16 57l3.3.88m-5.05 9.07 3.4.3m-3.4 9.8 3.4-.3M16 87l3.3-.88m.16 10.38 3.1-1.45m1.95 10.2 2.8-1.96M31 113l2.43-2.43m5.32 8.92 1.96-2.8m6.79 7.85 1.45-3.1M57 128l.88-3.3m9.07 5.05.3-3.4m9.8 3.4-.3-3.4M87 128l-.88-3.3m10.38-.16-1.45-3.1m10.2-1.95-1.96-2.8"
        />
      </svg>
    )
  },
  {
    name: 'illustration-4',
    path: () => (
      <svg width="144" height="144" fill="none">
        <g fill="#F6D684" clip-path="url(#a)">
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 2.1 -36.58)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -6.55 -35.06)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 37.72 -112.14)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 .97 -49.79)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 35.48 -143.76)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -2.77 -53.26)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 18.03 -84.75)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 28.93 -121.36)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -31.87 -28.66)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 17.46 -96.98)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 25.56 -146.7)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -8.54 -54.26)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -32.7 -39.87)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -14.17 -55.77)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 1 -74.49)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 11.97 -95.98)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 18.48 -119.22)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -48.46 -36.4)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -30 -47.93)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -14.11 -63.16)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -1.21 -80.57)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 8.19 -100.29)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 13.95 -121.8)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 15.67 -143.58)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -52.85 -39.5)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -36.15 -49.58)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -21.78 -62.2)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -9.57 -77.05)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 .17 -93.93)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 6.65 -111.96)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 10.05 -130.8)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 10.25 -149.97)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -57.42 -42.92)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -45.22 -49.54)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -34.27 -57.59)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -24.4 -66.75)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -15.62 -77.02)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -8.09 -88.73)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -2.1 -100.85)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 1.99 -114.03)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 4.72 -127.3)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 5.59 -140.79)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 5.11 -154.37)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -65.1 -44.98)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -44.6 -55.96)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -35.6 -62.88)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -27.17 -70.78)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -19.81 -79.79)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -13.35 -89.59)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -8.09 -99.98)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -4.05 -110.98)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -1.35 -122.06)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 .32 -133.42)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 .45 -145.19)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -.58 -156.72)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -74.65 -47.27)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -33.13 -72.1)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -14.22 -98.6)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -8.24 -113.75)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -5.01 -129.9)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -4.3 -145.9)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -6.27 -162.09)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -80.57 -50.77)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -72.3 -52.95)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -63.95 -56.48)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -56.29 -60.46)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -49 -65.1)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -29.92 -83.05)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -24.65 -90.42)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -20.22 -97.74)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -9.95 -130.95)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -9.48 -139.88)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -9.65 -148.44)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -10.53 -157.46)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -12.38 -165.92)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -15.07 -174.33)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -89 -54.13)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -81.2 -55.6)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -73.77 -57.74)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -66.7 -60.51)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -59.7 -64.12)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -53.4 -68.2)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -46.95 -72.79)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -41.2 -77.83)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -35.83 -83.53)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -31.16 -89.7)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -27 -96)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -23.22 -102.94)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -19.95 -110.02)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -15.97 -124.88)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -14.75 -132.51)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -14.36 -140.1)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -14.49 -147.82)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -15.45 -155.49)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -16.93 -163.3)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -19.38 -170.54)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -21.83 -177.79)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="matrix(.5 .86603 .86603 -.5 -1.6 119)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -96.14 -58.24)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -88.47 -59.2)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -81.17 -60.82)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -73.93 -63.27)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -66.87 -66.05)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -60.38 -69.8)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -53.74 -74.06)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -47.81 -78.78)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -42.58 -83.97)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -37.2 -89.67)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -33.05 -95.96)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -28.9 -102.26)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -25.95 -109.16)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -23.19 -116.38)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -21.27 -123.55)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -20.04 -131.19)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -19.27 -146.35)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -20.24 -154.02)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -21.53 -161.5)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -23.98 -168.75)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -111.75 -63.52)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -101.98 -63.1)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -91.93 -63.7)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -82.64 -65.6)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -73.26 -68.85)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -64.11 -73.27)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -55.86 -78.47)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -48.35 -84.97)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -41.73 -92.25)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -36 -100.32)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -31.48 -109)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -27.66 -118.13)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -25.38 -127.67)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -24.53 -147.21)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -25.97 -157.2)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -28.39 -166.64)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -116.8 -69.26)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -111.21 -68.6)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -105.81 -68.24)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -100.42 -67.9)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -95.07 -68.38)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -89.59 -69.39)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -84.1 -70.39)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -79 -72.04)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -74.07 -74.01)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -69.15 -75.99)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -64.28 -78.8)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -59.92 -81.75)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -55.42 -85.21)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -51.44 -88.81)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -47.64 -92.74)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -44.36 -96.8)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -41.12 -101.7)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -38.54 -106.22)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -36.14 -111.07)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -33.74 -115.92)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -32.05 -121.23)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -30.86 -126.67)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -30 -131.93)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -29.65 -137.33)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -29.3 -142.73)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -29.47 -148.26)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -30.28 -153.42)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -31.28 -158.9)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -32.93 -164.01)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -37.07 -174.18)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -39.37 -178.92)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -42.51 -183.6)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -45.78 -187.77)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -49.06 -191.94)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -52.98 -195.74)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -122.22 -75.66)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -107.79 -73.17)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -89.05 -74.46)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -84.08 -75.6)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -79.62 -76.87)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -75.2 -78.99)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -70.8 -81.1)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -66.9 -83.35)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -62.68 -85.79)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -58.83 -88.87)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -55.5 -92.1)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -51.84 -95.5)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -48.88 -99.38)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -46.25 -103.07)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -43.47 -107.27)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -41.35 -111.1)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -39.28 -115.75)" />
          <rect width="1.5" height="1.5" rx=".75" transform="scale(1 -1) rotate(-60 -37.53 -120.22)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -36.3 -124.83)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -35.38 -129.26)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -34.66 -134)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -34.45 -138.89)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -34.24 -143.78)" />
          <rect width="1.5" height="1.5" opacity=".72" rx=".75" transform="scale(1 -1) rotate(-60 -34.87 -148.61)" />
          <rect width="1.5" height="1.5" opacity=".56" rx=".75" transform="scale(1 -1) rotate(-60 -35.3 -153.12)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -36.26 -157.77)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -37.72 -162.55)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -39 -167.01)" />
          <rect width="1.5" height="1.5" opacity=".24" rx=".75" transform="scale(1 -1) rotate(-60 -41.1 -171.42)" />
          <rect width="1.5" height="1.5" opacity=".88" rx=".75" transform="scale(1 -1) rotate(-60 -43.22 -175.83)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -48.56 -183.57)" />
          <rect width="1.5" height="1.5" opacity=".4" rx=".75" transform="scale(1 -1) rotate(-60 -51.64 -187.42)" />
          <rect width="1.5" height="1.5" opacity=".08" rx=".75" transform="scale(1 -1) rotate(-60 -54.87 -190.75)" />
        </g>
        <defs>
          <clipPath id="a">
            <rect width="144" height="144" fill="none" rx="1.5" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    name: 'illustration-3',
    path: () => (
      <svg width="144" height="144" fill="none">
        <g stroke="#F6D684" stroke-linecap="round" stroke-width="2" clip-path="url(#a)">
          <path d="M143.82 143.82s0 0 0 0m0 0s0 0 0 0" />
          <path d="M143.82 143.82s0 0 0 0" opacity=".88" />
          <path d="M143.82 143.82s0 0 0 0m0 0s0 0 0 0" />
          <path d="M143.82 143.82s0 0 0 0" opacity=".56" />
          <path d="M143.82 143.82s0 0 0 0" />
          <path d="M142.87 137.65s0 0 0 0" opacity=".24" />
          <path d="M140.11 138.8s0 0 0 0" opacity=".56" />
          <path d="M138.2 141.1s0 0 0 0" opacity=".72" />
          <path d="M137.58 144.02s0 0 0 0" />
          <path d="M142.4 131.42s0 0 0 0" opacity=".08" />
          <path d="M133.53 136.77s0 0 0 0" opacity=".88" />
          <path d="M131.96 139.95s0 0 0 0" opacity=".56" />
          <path d="M131.35 143.45s0 0 0 0" />
          <path d="M142.18 125.17s0 0 0 0" opacity=".72" />
          <path d="M138.21 125.96s0 0 0 0" opacity=".24" />
          <path d="M131.23 129.97s0 0 0 0m-2.68 3.03s0 0 0 0m-1.97 3.53s0 0 0 0m-1.16 3.87s0 0 0 0m-.31 4.04s0 0 0 0" />
          <path d="M138.56 119.42s0 0 0 0" opacity=".24" />
          <path d="M125.22 127.18s0 0 0 0" opacity=".56" />
          <path d="M120.99 133.74s0 0 0 0" opacity=".72" />
          <path d="M119 141.29s0 0 0 0" opacity=".56" />
          <path d="M142.24 112.66s0 0 0 0" />
          <path d="M137.62 113.25s0 0 0 0" opacity=".08" />
          <path d="M133.13 114.51s0 0 0 0" />
          <path d="M114.24 133.9s0 0 0 0" opacity=".56" />
          <path d="M113.1 138.42s0 0 0 0" opacity=".72" />
          <path d="M112.63 143.06s0 0 0 0" opacity=".88" />
          <path d="M143.32 106.39s0 0 0 0" />
          <path d="M138.12 106.82s0 0 0 0" opacity=".56" />
          <path d="M133.02 107.98s0 0 0 0" opacity=".24" />
          <path d="M128.14 109.83s0 0 0 0" opacity=".72" />
          <path d="M123.56 112.34s0 0 0 0" opacity=".24" />
          <path d="M112.5 123.3s0 0 0 0m-2.54 4.56s0 0 0 0" opacity=".08" />
          <path d="M108.06 132.73s0 0 0 0" opacity=".24" />
          <path d="M106.87 137.81s0 0 0 0" opacity=".56" />
          <path d="M106.4 143.01s0 0 0 0" opacity=".88" />
          <path d="M140.08 100.3s0 0 0 0" />
          <path d="M134.54 101.14s0 0 0 0" opacity=".88" />
          <path d="M129.16 102.68s0 0 0 0" opacity=".08" />
          <path d="M124.02 104.9s0 0 0 0m-4.82 2.84s0 0 0 0m-4.4 3.45s0 0 0 0" opacity=".56" />
          <path d="M107.47 119.61s0 0 0 0" opacity=".08" />
          <path d="M100.27 140.57s0 0 0 0" />
          <path d="M144.96 93.92s0 0 0 0" opacity=".88" />
          <path d="M140.28 94.03s0 0 0 0" opacity=".56" />
          <path d="M135.63 94.58s0 0 0 0" opacity=".72" />
          <path d="M131.06 95.57s0 0 0 0m-4.46 1.4s0 0 0 0" opacity=".56" />
          <path d="M122.28 98.8s0 0 0 0" opacity=".72" />
          <path d="M114.26 103.6s0 0 0 0m-3.63 2.94s0 0 0 0" opacity=".24" />
          <path d="M107.28 109.81s0 0 0 0m-3.02 3.57s0 0 0 0" />
          <path d="M101.58 117.22s0 0 0 0" opacity=".24" />
          <path d="M99.28 121.3s0 0 0 0m-3.42 8.7s0 0 0 0m-1.09 4.55s0 0 0 0" opacity=".56" />
          <path d="M93.9 143.85s0 0 0 0" />
          <path d="M144.75 87.67s0 0 0 0" opacity=".08" />
          <path d="M140.05 87.8s0 0 0 0" opacity=".72" />
          <path d="M135.38 88.3s0 0 0 0" opacity=".88" />
          <path d="M130.76 89.2s0 0 0 0" opacity=".24" />
          <path d="M126.24 90.49s0 0 0 0" />
          <path d="M121.84 92.15s0 0 0 0" opacity=".56" />
          <path d="M117.59 94.17s0 0 0 0" />
          <path d="M113.53 96.54s0 0 0 0" opacity=".08" />
          <path d="M109.68 99.24s0 0 0 0" opacity=".72" />
          <path d="M102.72 105.56s0 0 0 0m-3.06 3.57s0 0 0 0m-2.74 3.82s0 0 0 0" opacity=".56" />
          <path d="M94.5 116.98s0 0 0 0" opacity=".24" />
          <path d="M92.42 121.2s0 0 0 0" opacity=".08" />
          <path d="M90.71 125.58s0 0 0 0m-2.3 9.12s0 0 0 0" />
          <path d="M137.19 81.78s0 0 0 0" opacity=".08" />
          <path d="M129.3 83.14s0 0 0 0" opacity=".72" />
          <path d="M121.67 85.5s0 0 0 0" />
          <path d="M114.39 88.8s0 0 0 0m-6.79 4.22s0 0 0 0" opacity=".56" />
          <path d="M95.9 103.87s0 0 0 0" />
          <path d="M91.18 110.33s0 0 0 0" opacity=".56" />
          <path d="M87.33 117.33s0 0 0 0m-4.87 15.2s0 0 0 0" opacity=".08" />
          <path d="M144.74 75.2s0 0 0 0" opacity=".56" />
          <path d="M139.95 75.3s0 0 0 0" opacity=".08" />
          <path d="M135.18 75.73s0 0 0 0" opacity=".88" />
          <path d="M130.45 76.5s0 0 0 0" opacity=".24" />
          <path d="M125.78 77.6s0 0 0 0" />
          <path d="M121.2 79.02s0 0 0 0" opacity=".24" />
          <path d="M116.74 80.75s0 0 0 0" />
          <path d="M112.41 82.8s0 0 0 0" opacity=".08" />
          <path d="M108.23 85.14s0 0 0 0" opacity=".24" />
          <path d="M100.41 90.66s0 0 0 0m-6.98 6.56s0 0 0 0" />
          <path d="M90.3 100.85s0 0 0 0" opacity=".24" />
          <path d="M87.44 104.69s0 0 0 0" />
          <path d="M84.85 108.71s0 0 0 0" opacity=".08" />
          <path d="M82.54 112.91s0 0 0 0" />
          <path d="M80.53 117.26s0 0 0 0" opacity=".08" />
          <path d="M78.84 121.74s0 0 0 0m-1.39 4.59s0 0 0 0M76.4 131s0 0 0 0m-.73 4.74s0 0 0 0" />
          <path d="M144.1 68.95s0 0 0 0" opacity=".88" />
          <path d="M139.21 69.1s0 0 0 0" />
          <path d="M134.33 69.55s0 0 0 0" opacity=".24" />
          <path d="M129.5 70.33s0 0 0 0" opacity=".56" />
          <path d="M124.72 71.43s0 0 0 0" />
          <path d="M120.03 72.83s0 0 0 0" opacity=".08" />
          <path d="M115.43 74.54s0 0 0 0" />
          <path d="M110.96 76.54s0 0 0 0" opacity=".88" />
          <path d="M106.63 78.84s0 0 0 0" opacity=".72" />
          <path d="M102.46 81.4s0 0 0 0m-3.99 2.85s0 0 0 0" opacity=".08" />
          <path d="M91.08 90.67s0 0 0 0m-3.36 3.57s0 0 0 0" />
          <path d="M84.6 98.01s0 0 0 0" opacity=".24" />
          <path d="M81.73 101.98s0 0 0 0" opacity=".08" />
          <path d="M79.12 106.14s0 0 0 0m-2.32 4.31s0 0 0 0" />
          <path d="M74.76 114.9s0 0 0 0m-1.74 4.58s0 0 0 0" opacity=".08" />
          <path d="M71.58 124.16s0 0 0 0" opacity=".56" />
          <path d="M70.44 128.93s0 0 0 0" opacity=".08" />
          <path d="M142.3 62.72s0 0 0 0m-5.6.3s0 0 0 0m-5.55.68s0 0 0 0" opacity=".72" />
          <path d="M125.65 64.77s0 0 0 0" />
          <path d="M120.24 66.21s0 0 0 0" opacity=".56" />
          <path d="M114.94 68.02s0 0 0 0m-5.16 2.18s0 0 0 0" opacity=".72" />
          <path d="M104.78 72.72s0 0 0 0" opacity=".56" />
          <path d="M99.97 75.58s0 0 0 0" opacity=".24" />
          <path d="M95.37 78.77s0 0 0 0" opacity=".08" />
          <path d="M91 82.27s0 0 0 0m-4.12 3.79s0 0 0 0" opacity=".24" />
          <path d="M83.03 90.13s0 0 0 0" opacity=".56" />
          <path d="M79.47 94.45s0 0 0 0M76.21 99s0 0 0 0" />
          <path d="M73.28 103.78s0 0 0 0" opacity=".56" />
          <path d="M68.44 113.87s0 0 0 0m-1.88 5.27s0 0 0 0" />
          <path d="M65.04 124.53s0 0 0 0" opacity=".24" />
          <path d="M142.3 56.48s0 0 0 0" opacity=".88" />
          <path d="M133.75 57.05s0 0 0 0" />
          <path d="M125.3 58.46s0 0 0 0" opacity=".88" />
          <path d="M117.02 60.68s0 0 0 0" />
          <path d="M109 63.71s0 0 0 0" opacity=".56" />
          <path d="M101.31 67.51s0 0 0 0" opacity=".08" />
          <path d="M94.04 72.04s0 0 0 0" opacity=".72" />
          <path d="M87.24 77.27s0 0 0 0" opacity=".08" />
          <path d="M81 83.13s0 0 0 0" opacity=".56" />
          <path d="M75.35 89.58s0 0 0 0" opacity=".24" />
          <path d="M70.36 96.56s0 0 0 0m-4.28 7.42s0 0 0 0" opacity=".56" />
          <path d="M62.55 111.8s0 0 0 0m-2.75 8.12s0 0 0 0" />
          <path d="M57.87 128.26s0 0 0 0" opacity=".08" />
          <path d="M56.76 136.76s0 0 0 0" opacity=".56" />
          <path d="M140.11 50.3s0 0 0 0m-5.23.36s0 0 0 0" opacity=".72" />
          <path d="M129.67 51.3s0 0 0 0" opacity=".88" />
          <path d="M124.5 52.25s0 0 0 0" opacity=".24" />
          <path d="M119.4 53.47s0 0 0 0" opacity=".72" />
          <path d="M114.37 54.99s0 0 0 0" opacity=".88" />
          <path d="M109.44 56.78s0 0 0 0m-4.83 2.06s0 0 0 0" />
          <path d="M99.9 61.17s0 0 0 0m-4.56 2.6s0 0 0 0" opacity=".56" />
          <path d="M90.93 66.6s0 0 0 0" opacity=".24" />
          <path d="M86.68 69.7s0 0 0 0" opacity=".88" />
          <path d="M82.62 73.02s0 0 0 0" opacity=".08" />
          <path d="M78.74 76.56s0 0 0 0" opacity=".56" />
          <path d="M75.07 80.31s0 0 0 0" opacity=".88" />
          <path d="M71.62 84.27s0 0 0 0m-3.22 4.14s0 0 0 0" />
          <path d="M65.4 92.73s0 0 0 0m-2.73 4.47s0 0 0 0" opacity=".56" />
          <path d="M60.18 101.83s0 0 0 0" opacity=".24" />
          <path d="M57.96 106.58s0 0 0 0" />
          <path d="M56 111.46s0 0 0 0" opacity=".24" />
          <path d="M54.33 116.43s0 0 0 0m-2.5 10.19s0 0 0 0" />
          <path d="M51 131.8s0 0 0 0" opacity=".56" />
          <path d="M50.48 137.03s0 0 0 0" opacity=".24" />
          <path d="M50.24 142.28s0 0 0 0" />
          <path d="M142.59 44s0 0 0 0" opacity=".72" />
          <path d="M137.37 44.2s0 0 0 0" opacity=".88" />
          <path d="M132.16 44.68s0 0 0 0m-5.17.74s0 0 0 0" />
          <path d="M121.86 46.44s0 0 0 0" opacity=".72" />
          <path d="M116.8 47.72s0 0 0 0" opacity=".88" />
          <path d="M111.8 49.27s0 0 0 0" opacity=".72" />
          <path d="M106.9 51.07s0 0 0 0" />
          <path d="M102.1 53.13s0 0 0 0" opacity=".24" />
          <path d="M97.4 55.44s0 0 0 0" />
          <path d="M92.84 57.99s0 0 0 0" opacity=".72" />
          <path d="M88.42 60.77s0 0 0 0" opacity=".08" />
          <path d="M84.15 63.79s0 0 0 0" opacity=".24" />
          <path d="M80.05 67.02s0 0 0 0" />
          <path d="M76.11 70.46s0 0 0 0" opacity=".72" />
          <path d="M72.37 74.1s0 0 0 0m-3.55 3.84s0 0 0 0m-6.48 8.2s0 0 0 0" />
          <path d="M59.43 90.49s0 0 0 0" opacity=".24" />
          <path d="M56.76 94.97s0 0 0 0m-2.44 4.63s0 0 0 0m-2.19 4.74s0 0 0 0" opacity=".72" />
          <path d="M50.19 109.2s0 0 0 0" opacity=".08" />
          <path d="M48.5 114.14s0 0 0 0m-1.42 5.03s0 0 0 0" />
          <path d="M45.93 124.27s0 0 0 0m-.89 5.15s0 0 0 0" opacity=".24" />
          <path d="M44.42 134.6s0 0 0 0" opacity=".72" />
          <path d="M44.07 139.82s0 0 0 0" opacity=".56" />
          <path d="M44 145.05s0 0 0 0" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h144v144H0z" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    name: 'illustration-2',
    path: () => (
      <svg width="100%" viewBox="0 0 122 122" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          stroke="#99958A"
          d="M3.62 1.45 1.45 3.62m8.27-2.23-2.06 2.3m8.14-2.36-1.9 2.41m7.97-2.47L20.13 3.8m7.79-2.6-1.54 2.67m7.59-2.72-1.32 2.78M40 1.1l-1.07 2.88M46 1.05l-.78 2.97m6.78-3-.47 3.04"
        />
        <path stroke="#EDECE8" d="m58 1-.16 3.07M64 1l.16 3.07" />
        <path
          stroke="#99958A"
          d="m70 1.02.47 3.04M76 1.05l.78 2.97M82 1.1l1.07 2.88m4.96-2.83 1.32 2.78m4.73-2.73 1.54 2.67m4.51-2.6 1.74 2.54m4.33-2.48 1.9 2.41m4.18-2.35 2.05 2.3m4.05-2.24 2.17 2.17M3.68 7.66 1.4 9.72M9.78 7.6 7.6 9.78m8.26-2.24-2.03 2.3m8.1-2.37L20.06 9.9m7.93-2.5-1.67 2.58m7.71-2.65-1.44 2.72m7.46-2.78-1.17 2.84m7.17-2.9-.87 2.96m6.86-2.99-.54 3.03"
        />
        <path stroke="#EDECE8" d="m58.01 7.15-.18 3.08m6.16-3.08.18 3.08" />
        <path
          stroke="#99958A"
          d="m69.96 7.18.54 3.03m5.45-3 .87 2.96m5.13-2.9 1.18 2.84m4.84-2.78 1.44 2.72m4.6-2.65 1.67 2.58m4.39-2.51 1.87 2.44m4.2-2.37 2.03 2.3m4.05-2.24 2.18 2.18m3.92-2.12 2.29 2.06M3.74 13.9l-2.41 1.9m8.51-1.97-2.3 2.03m8.39-2.1-2.17 2.17M22 13.68l-2 2.33m8.06-2.41-1.82 2.49m7.86-2.56-1.58 2.63m7.59-2.71-1.3 2.79m7.29-2.86-.97 2.92m6.94-2.96-.6 3.01"
        />
        <path stroke="#EDECE8" d="m58.03 13.31-.2 3.07m6.14-3.07.2 3.07" />
        <path
          stroke="#99958A"
          d="m69.93 13.34.6 3.01m5.37-2.97.97 2.92m5.02-2.85 1.3 2.79m4.71-2.71 1.58 2.63m4.46-2.56 1.82 2.49m4.24-2.41 2 2.33m4.07-2.25 2.17 2.17m3.92-2.1 2.3 2.03m3.8-1.96 2.41 1.9M3.8 20.13l-2.53 1.74m8.64-1.81-2.44 1.87M16 20l-2.32 2m8.41-2.09L19.9 22.1m8.25-2.28-2 2.35m8.03-2.44-1.75 2.53m7.76-2.62-1.46 2.71m7.44-2.79-1.1 2.87m7.04-2.93-.69 3"
        />
        <path stroke="#EDECE8" d="m58.04 19.46-.24 3.07m6.16-3.07.23 3.07" />
        <path
          stroke="#99958A"
          d="m69.89 19.5.69 3m5.25-2.94 1.1 2.87m4.88-2.79 1.46 2.71m4.55-2.62 1.75 2.53m4.28-2.44 2 2.35m4.06-2.26 2.18 2.18M106 20l2.32 2m3.77-1.94 2.44 1.87m3.67-1.8 2.53 1.74M3.87 26.38 1.2 27.92m8.78-1.6L7.4 27.99m8.69-1.75-2.49 1.82m8.57-1.9-2.35 1.99m8.42-2.09-2.18 2.18m8.22-2.28-1.95 2.38m7.96-2.49-1.66 2.6m7.62-2.7-1.27 2.8m7.19-2.88-.8 2.97"
        />
        <path stroke="#EDECE8" d="m58.06 25.62-.28 3.06m6.16-3.06.28 3.06" />
        <path
          stroke="#99958A"
          d="m69.83 25.67.8 2.97m5.12-2.89 1.27 2.8m4.69-2.7 1.66 2.6m4.35-2.49 1.95 2.38m4.09-2.28 2.18 2.18m3.89-2.08 2.35 1.99m3.74-1.91 2.48 1.82m3.62-1.74 2.58 1.67m3.53-1.61 2.67 1.54M3.93 32.65l-2.78 1.32m8.9-1.38-2.72 1.44m8.83-1.51-2.63 1.58m8.73-1.67-2.53 1.75m8.61-1.85-2.38 1.95m8.44-2.06-2.18 2.17m8.18-2.29-1.88 2.42m7.84-2.56-1.5 2.7m7.4-2.81-.98 2.92"
        />
        <path stroke="#EDECE8" d="m58.1 31.78-.35 3.06m6.15-3.06.35 3.06" />
        <path
          stroke="#99958A"
          d="m69.74 31.85.98 2.92m4.92-2.81 1.5 2.7m4.46-2.56 1.88 2.42m4.12-2.3 2.18 2.17m3.88-2.06 2.38 1.95m3.7-1.85 2.53 1.75m3.57-1.66 2.63 1.58m3.48-1.51 2.72 1.44m3.4-1.38 2.78 1.32M3.98 38.93l-2.89 1.06m9.02-1.11-2.84 1.17m8.97-1.24-2.79 1.3m8.9-1.38-2.7 1.46m8.8-1.56-2.6 1.66m8.67-1.77L32.1 40.4m8.45-2.03-2.18 2.18m8.13-2.35-1.78 2.51m7.65-2.66-1.2 2.83"
        />
        <path stroke="#EDECE8" d="m58.14 37.94-.43 3.04m6.15-3.04.43 3.04" />
        <path
          stroke="#99958A"
          d="m69.63 38.05 1.2 2.83m4.67-2.68 1.78 2.51m4.17-2.34 2.18 2.18m3.85-2.03 2.43 1.89m3.64-1.78 2.6 1.66m3.5-1.56 2.7 1.46m3.41-1.38 2.79 1.3m3.34-1.23 2.84 1.17m3.29-1.12 2.89 1.06M4.02 45.22l-2.97.79m9.12-.83-2.96.87m9.09-.92-2.92.97m9.05-1.04-2.87 1.1m8.99-1.18-2.8 1.27m8.9-1.38-2.69 1.5m8.75-1.65-2.5 1.79m8.49-1.98-2.17 2.17m8.03-2.4-1.58 2.63"
        />
        <path stroke="#EDECE8" d="m58.22 44.1-.6 3.02m6.16-3.02.6 3.02" />
        <path
          stroke="#99958A"
          d="m69.44 44.3 1.58 2.63m4.28-2.4 2.17 2.17m3.82-1.98 2.5 1.79m3.56-1.64 2.69 1.5m3.41-1.39 2.8 1.27m3.32-1.19 2.87 1.1m3.26-1.03 2.91.97m3.22-.92 2.95.87m3.2-.83 2.97.79M4.06 51.53 1.02 52m9.18-.5-3.02.54m9.17-.57-3.01.6m9.16-.65-3 .7m9.14-.76-2.97.81m9.1-.89-2.92.98m9.02-1.1-2.82 1.22m8.88-1.4-2.63 1.58m8.56-1.88-2.18 2.18"
        />
        <path stroke="#EDECE8" d="m58.4 50.31-.96 2.92m6.15-2.92.97 2.92" />
        <path
          stroke="#99958A"
          d="m69.14 50.68 2.18 2.18m3.75-1.88 2.63 1.58m3.43-1.4 2.82 1.22m3.28-1.1 2.92.98m3.21-.9 2.97.81m3.17-.75 3 .7m3.15-.65 3.01.6m3.14-.57 3.03.54m3.11-.51 3.04.48"
        />
        <path
          stroke="#EDECE8"
          d="M4.07 57.84 1 58m9.23-.17-3.08.18m9.23-.19-3.07.2m9.22-.22-3.07.24m9.22-.26-3.06.28m9.22-.31-3.06.34m9.2-.39-3.04.44m9.18-.52-3.01.6m9.12-.78-2.92.97m8.7-1.57L56.84 59m6.15-2.16L65.17 59m3.6-1.56 2.92.97m3.19-.79 3.01.6m3.13-.52 3.04.44m3.1-.39 3.06.34m3.1-.31 3.06.28m3.09-.26 3.06.24m3.09-.22 3.07.2m3.08-.19 3.08.18m3.08-.17L121 58M4.07 64.16 1 64m9.23.17-3.08-.18m9.23.19-3.07-.2m9.22.22-3.07-.24m9.22.26-3.06-.28m9.22.31-3.06-.34m9.2.39-3.04-.44m9.18.52-3.01-.6m9.12.78-2.92-.97m8.7 1.58-2.17-2.18m6.15 2.18 2.18-2.18m3.6 1.57 2.92-.97m3.19.79 3.01-.6m3.13.52 3.04-.44m3.1.39 3.06-.34m3.1.31 3.06-.28m3.09.26 3.06-.24m3.09.22 3.07-.2m3.08.19 3.08-.18m3.08.17L121 64"
        />
        <path
          stroke="#99958A"
          d="M4.06 70.47 1.02 70m9.18.5-3.02-.54m9.17.57-3.01-.6m9.16.65-3-.7m9.14.76-2.97-.81m9.1.89-2.92-.98m9.02 1.1-2.82-1.22m8.88 1.4-2.63-1.58m8.56 1.88-2.18-2.18"
        />
        <path stroke="#EDECE8" d="M58.4 71.7c-.31-.98-.64-1.96-.96-2.93m6.15 2.93.97-2.93" />
        <path
          stroke="#99958A"
          d="m69.14 71.32 2.18-2.18m3.75 1.88 2.63-1.58m3.43 1.4 2.82-1.22m3.28 1.1 2.92-.98m3.21.9 2.97-.81m3.17.75 3-.7m3.15.65 3.01-.6m3.14.57 3.03-.54m3.11.51 3.04-.48M4.02 76.78l-2.97-.79m9.12.83-2.96-.87m9.09.92-2.92-.97m9.05 1.04-2.87-1.1m8.99 1.18-2.8-1.27m8.9 1.38-2.69-1.5m8.75 1.65-2.5-1.79m8.49 1.98-2.17-2.17m8.03 2.4-1.58-2.63"
        />
        <path stroke="#EDECE8" d="m58.22 77.9-.6-3.02m6.16 3.02.6-3.02" />
        <path
          stroke="#99958A"
          d="m69.44 77.7 1.58-2.63m4.28 2.4 2.17-2.17m3.82 1.98 2.5-1.79m3.56 1.64 2.69-1.5m3.41 1.39 2.8-1.27m3.32 1.19 2.87-1.1m3.26 1.03 2.91-.97m3.22.92 2.95-.87m3.2.83 2.97-.79M3.98 83.07l-2.89-1.06m9.02 1.12-2.84-1.18m8.97 1.24-2.79-1.3m8.9 1.38-2.7-1.46m8.8 1.56-2.6-1.66m8.67 1.77L32.1 81.6m8.45 2.03-2.18-2.18m8.13 2.35-1.78-2.51m7.65 2.66-1.2-2.83"
        />
        <path stroke="#EDECE8" d="m58.14 84.06-.43-3.04m6.15 3.04.43-3.04" />
        <path
          stroke="#99958A"
          d="m69.63 83.95 1.2-2.83m4.67 2.68 1.78-2.51m4.17 2.34 2.18-2.18m3.85 2.03 2.43-1.89m3.64 1.78 2.6-1.66m3.5 1.56 2.7-1.46m3.41 1.38 2.79-1.3m3.34 1.24 2.84-1.18m3.29 1.12 2.89-1.06M3.93 89.35l-2.78-1.32m8.9 1.38-2.72-1.44m8.83 1.51-2.63-1.58m8.73 1.67-2.53-1.75m8.61 1.85-2.38-1.95m8.44 2.06-2.18-2.17m8.18 2.29-1.88-2.42m7.84 2.56-1.5-2.7m7.4 2.81-.98-2.92"
        />
        <path stroke="#EDECE8" d="m58.1 90.22-.35-3.06m6.15 3.06.35-3.06" />
        <path
          stroke="#99958A"
          d="m69.74 90.15.98-2.92m4.92 2.81 1.5-2.7m4.46 2.56 1.88-2.42m4.12 2.3 2.18-2.17m3.88 2.06 2.38-1.95m3.7 1.85 2.53-1.75m3.57 1.66 2.63-1.58m3.48 1.51 2.72-1.44m3.4 1.38 2.78-1.32M3.87 95.62 1.2 94.08m8.78 1.6L7.4 94.01m8.69 1.75-2.49-1.82m8.57 1.9-2.35-1.99m8.42 2.09-2.18-2.18m8.22 2.28-1.95-2.38m7.96 2.49-1.66-2.6m7.62 2.7-1.27-2.8m7.19 2.88-.8-2.97"
        />
        <path stroke="#EDECE8" d="m58.06 96.38-.28-3.07m6.16 3.07.28-3.07" />
        <path
          stroke="#99958A"
          d="m69.83 96.33.8-2.97m5.12 2.89 1.27-2.8m4.69 2.7 1.66-2.6m4.35 2.49 1.95-2.38m4.09 2.28 2.18-2.18m3.89 2.08 2.35-1.99m3.74 1.91 2.48-1.82m3.62 1.74 2.58-1.67m3.53 1.61 2.67-1.54m-117 7.79-2.53-1.74m8.64 1.81-2.44-1.87M16 102l-2.32-2m8.41 2.09L19.9 99.9m8.25 2.28-2-2.35m8.03 2.44-1.75-2.53m7.76 2.62-1.46-2.71m7.44 2.79-1.1-2.87m7.04 2.93-.69-3"
        />
        <path stroke="#EDECE8" d="m58.04 102.53-.24-3.06m6.16 3.06.23-3.06" />
        <path
          stroke="#99958A"
          d="m69.89 102.5.69-3m5.25 2.94 1.1-2.87m4.88 2.79 1.46-2.71m4.55 2.62 1.75-2.53m4.28 2.44 2-2.35m4.06 2.26 2.18-2.18M106 102l2.32-2m3.77 1.94 2.44-1.87m3.67 1.8 2.53-1.74M3.74 108.1l-2.41-1.9m8.51 1.97-2.3-2.03m8.39 2.1-2.17-2.17m8.24 2.25-2-2.33m8.06 2.41-1.82-2.48m7.86 2.55-1.58-2.63m7.59 2.71-1.3-2.79m7.29 2.85-.97-2.91m6.94 2.96-.6-3.01"
        />
        <path stroke="#EDECE8" d="m58.03 108.7-.2-3.08m6.14 3.08.2-3.08" />
        <path
          stroke="#99958A"
          d="m69.93 108.66.6-3.01m5.37 2.96.97-2.91m5.02 2.85 1.3-2.79m4.71 2.71 1.58-2.63m4.46 2.56 1.82-2.48m4.24 2.4 2-2.33m4.07 2.25 2.17-2.17m3.92 2.1 2.3-2.03m3.8 1.96 2.41-1.9M3.68 114.33l-2.29-2.05m8.39 2.12-2.18-2.18m8.26 2.24-2.03-2.3m8.1 2.37-1.87-2.44m7.93 2.51-1.67-2.58m7.71 2.65-1.44-2.72m7.46 2.78-1.17-2.84m7.17 2.89-.87-2.95m6.86 3-.54-3.04"
        />
        <path stroke="#EDECE8" d="m58.01 114.85-.18-3.08m6.16 3.08.18-3.08" />
        <path
          stroke="#99958A"
          d="m69.96 114.83.54-3.04m5.45 2.99.87-2.95m5.13 2.9 1.18-2.84m4.84 2.78 1.44-2.72m4.6 2.65 1.67-2.58m4.39 2.51 1.87-2.44m4.2 2.37 2.03-2.3m4.05 2.24 2.18-2.18m3.92 2.11 2.29-2.05M3.62 120.55l-2.17-2.17m8.27 2.23-2.06-2.3m8.14 2.36-1.9-2.41m7.97 2.47-1.74-2.54m7.79 2.61-1.54-2.67m7.59 2.72-1.32-2.78M40 120.9l-1.07-2.88m7.07 2.93c-.25-1-.52-1.98-.78-2.97m6.78 3-.47-3.04"
        />
        <path stroke="#EDECE8" d="m58 121-.16-3.07M64 121l.16-3.07" />
        <path
          stroke="#99958A"
          d="m70 120.98.47-3.04m5.53 3.01c.25-1 .52-1.98.78-2.97M82 120.9l1.07-2.88m4.96 2.83 1.32-2.78m4.73 2.73 1.54-2.67m4.51 2.6 1.74-2.54m4.33 2.48 1.9-2.41m4.18 2.35 2.05-2.3m4.05 2.24 2.17-2.17"
        />
      </svg>
    )
  },
  {
    name: 'illustration-1',
    path: () => (
      <svg width="144" height="144" fill="none">
        <path stroke="#F6F6F5" stroke-linecap="round" d="M77.63 77.82v-.37" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".74" d="m79.97 73.4-.22-.3" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".62" d="m79.27 68.45-.36-.11" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".38" d="m75.79 64.86-.36.12" />

        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".26" d="m70.87 64-.23.3" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="M66.37 66.2v.37" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".74" d="m64.03 70.61.22.3" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".62" d="m64.73 75.56.36.12" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".38" d="m68.2 79.16.37-.12" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".26" d="m73.13 80.02.23-.3" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m83.71 78.32-.26-.82" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".74" d="M85.27 73c-.2-.2-.39-.42-.58-.63" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".62" d="m84.53 67.53-.8-.35m-2.11-4.36h-.86" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".5" d="m77.05 59.7-.79.35" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".38" d="m71.6 58.7-.57.65" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".26" d="m66.23 60.02-.26.82" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m61.85 63.4.1.86" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m59.23 68.27.43.75" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".74" d="m58.81 73.79.7.5" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".62" d="m60.68 79 .84.18" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".5" d="m64.5 83 .84-.18" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".38" d="m69.62 85.1.7-.51m4.83.34.43-.74" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".26" d="m80.13 82.54.1-.86" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m90.21 75.38-.8-1.1" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".74" d="m90.36 69.58-1.1-.8m-.55-4.75-1.28-.42" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".62" d="M85.43 59.25h-1.35m-3.25-3.52-1.28.42" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".5" d="m75.37 53.8-1.1.8" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m69.57 53.65-.79 1.09m-4.76.56-.42 1.28"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".26" d="M59.25 58.58v1.35m-3.53 3.25.42 1.28" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m53.79 68.64.8 1.1" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".74" d="m53.64 74.43 1.1.8m.55 4.76 1.28.41" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".62" d="M58.57 84.76h1.35m3.25 3.53 1.28-.42" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".5" d="m68.63 90.22 1.1-.8" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".38" d="m74.42 90.37.8-1.1m4.76-.55.42-1.28" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".26" d="M84.75 85.44v-1.35m3.53-3.25-.42-1.29" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m95.53 68.94-1.48-1.08" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m94.12 63.4-1.7-.7m-1.01-4.35-1.82-.26m-2.01-3.99-1.83.18"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m82.84 50.9-1.73.6m-3.64-2.59-1.53 1.01"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".5" d="m71.79 48.27-1.25 1.35m-4.42-.6-.9 1.6" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m60.78 51.1-.48 1.76m-4.2 1.52-.04 1.84"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m52.35 58.7.4 1.8m-3.02 3.29.82 1.65m-2.14 3.92 1.19 1.4"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m48.47 75.08 1.48 1.08" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m49.88 80.62 1.7.7m1.01 4.34c.6.1 1.21.18 1.82.27m2.01 3.98 1.83-.18"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".62" d="m61.16 93.12 1.73-.61m3.63 2.59 1.54-1" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".5" d="m72.21 95.74 1.25-1.35m4.42.61.9-1.6" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".38" d="m83.21 92.92.49-1.77m4.2-1.52.04-1.84" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m91.65 85.32-.4-1.8m3.01-3.29-.81-1.65m2.13-3.92-1.18-1.4"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m98.16 59.6-2.22-.72m-.82-4.28-2.3-.27" />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".74" d="m91.14 50.3-2.31.2m-2.45-3.62-2.22.68" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m81.03 44.5-2.05 1.11m-3.68-2.36-1.77 1.5m-4.08-1.58L68.01 45"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m63.7 44.27-1.05 2.08m-4.36.16-.6 2.25m-4.25 1.04-.15 2.32"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".38" d="m49.34 53.99.33 2.3m-3.49 2.63.79 2.19" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m44.07 64.38 1.21 1.99m-2.17 3.79 1.59 1.7m-1.37 4.15 1.9 1.35"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m44.72 81.7 2.13.94" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m47.23 87 2.28.49" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m50.76 91.67 2.32.03m2.07 3.85 2.28-.45m2.8 3.36 2.15-.9"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m65.8 100.28 1.92-1.3m3.9 1.97 1.62-1.67"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m77.45 100.44 1.25-1.96m4.36.28.83-2.17m4.33-.61.38-2.3"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m92.72 92.23-.1-2.33m3.74-2.26-.56-2.25m3.21-2.97-1-2.1"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m100.55 76.77-1.4-1.85m1.78-4c-.59-.5-1.17-1.02-1.75-1.53"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m100.12 65.12-2.02-1.15" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="M96.85 48.56h-2.81M92.4 44.6l-2.77.5" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m87.33 41.48-2.64.96m-2.89-3.16-2.44 1.4m-3.39-2.6-2.16 1.8"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m70.01 37.9-1.8 2.16m-4.09-1.29-1.4 2.43m-4.25-.56-.96 2.64"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m53.23 43.46-.5 2.78m-4.17.92v2.81M44.6 51.6l.49 2.78"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m41.47 56.67.96 2.65m-3.16 2.88 1.4 2.45m-2.6 3.39 1.8 2.16"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m37.9 74 2.15 1.8m-1.29 4.09 2.43 1.4m-.56 4.25 2.64.96"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m43.46 90.78 2.77.49" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="M47.15 95.45h2.81m1.64 3.96 2.77-.49" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m56.67 102.54 2.64-.97m2.89 3.16 2.44-1.4m3.39 2.61 2.16-1.8"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m73.99 106.11 1.8-2.15m4.09 1.29 1.4-2.44m4.25.57.96-2.65"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m90.77 100.55.49-2.77m4.18-.92v-2.82m3.96-1.64-.49-2.76"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m102.53 87.34-.96-2.64m3.16-2.9-1.4-2.43m2.6-3.4-1.8-2.15"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m106.1 70.02-2.15-1.8m1.29-4.09-2.43-1.4m.56-4.25-2.65-.96"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m100.54 53.24-2.77-.5" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m90.9 37.47-3.13 1.02m-2.22-3.46-2.95 1.48" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m79.89 33.43-2.7 1.9m-3.14-2.65-2.39 2.28m-3.49-2.14-2.02 2.6m-3.78-1.59-1.61 2.88"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m56.78 35.69-1.16 3.09m-4.08-.42-.69 3.23m-4.09.2-.2 3.3"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m42.53 45.89.3 3.28m-3.86 1.4.78 3.2m-3.61 1.96 1.25 3.06m-3.27 2.47 1.7 2.83"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m32.94 67.02 2.1 2.55m-2.41 3.33 2.46 2.21m-1.89 3.65 2.76 1.82"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m34.64 84.47 3 1.38m-.72 4.05 3.17.92m-.11 4.1 3.27.45m.5 4.07 3.3-.05"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m48.15 103.34 3.26-.54" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m53.1 106.55 3.13-1.02m2.22 3.45 2.95-1.48" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m64.11 110.59 2.7-1.9m3.14 2.64 2.39-2.28m3.49 2.15 2.02-2.61m3.78 1.6 1.6-2.88"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="M87.21 108.33c.4-1.03.78-2.06 1.16-3.1m4.09.42.68-3.23m4.1-.19.2-3.3"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m101.47 98.13-.3-3.29m3.86-1.4-.78-3.2m3.61-1.96-1.26-3.05m3.28-2.47-1.7-2.84"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m111.06 76.99-2.1-2.55m2.41-3.33-2.46-2.2m1.89-3.65-2.76-1.82"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m109.35 59.55-3-1.39m.73-4.04-3.17-.92m.11-4.1-3.27-.45m-.5-4.07-3.3.04"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m95.84 40.67-3.25.54" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m80.3 28.2-3.07 2.22m-2.85-2.94-2.74 2.61" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m68.43 27.56-2.37 2.96m-3.53-2.09-1.95 3.25m-3.78-1.6-1.5 3.48m-3.94-1.08-1.03 3.65"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m46.27 35.59-.53 3.75m-4.09 0-.03 3.79m-4.06.55.48 3.76m-3.94 1.08.97 3.66"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m31.3 53.78 1.46 3.5m-3.52 2.09 1.9 3.27m-3.21 2.54 2.33 2.99m-2.84 2.95 2.7 2.65"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m27.7 77.07 3.03 2.26m-1.96 3.6 3.3 1.84M30.6 88.6c1.18.45 2.36.91 3.53 1.38m-.94 3.98 3.68.9"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m36.46 98.94 3.76.4m.14 4.1 3.8-.1m.68 4.03 3.74-.6m1.22 3.91c1.2-.37 2.4-.74 3.62-1.1"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".14"
          d="m55.14 113.3 3.45-1.58m2.21 3.45 3.2-2.02"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m66.65 116.28 2.9-2.43m3.05 2.75 2.56-2.8" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="M78.54 116.12 80.7 113m3.66 1.85 1.73-3.37m3.87 1.34 1.26-3.57m4.02.82.78-3.71"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m100.1 106.63.28-3.78m4.09-.27-.23-3.79m4.01-.81-.73-3.72m3.87-1.35-1.22-3.59"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m113.82 87.48-1.68-3.4m3.37-2.32-2.12-3.14m3.03-2.74-2.52-2.83m2.64-3.13-2.87-2.46"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m115.87 64-3.18-2.06m1.71-3.71-3.42-1.62m1.22-3.91-3.62-1.15m.68-4.04-3.73-.65"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m105.66 42.76-3.78-.15m-.41-4.07-3.78.35m-.95-3.98-3.69.85m-1.47-3.82-3.55 1.34"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m86.06 29.7-3.33 1.79" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m65.7 22.6-2.5 3.46m-3.4-2.34-2.08 3.74" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m54.06 25.54-1.6 3.96m-3.86-1.46-1.13 4.13m-4-.98-.62 4.23m-4.1-.5-.1 4.28m-4.13 0 .42 4.26"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m30.84 43.96.93 4.17m-4.01.99 1.42 4.04m-3.85 1.46 1.9 3.83m-3.66 1.92 2.34 3.58"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m22.52 66.3 2.76 3.26M22.2 72.3l3.13 2.91M22.6 78.3l3.45 2.52m-2.34 3.39 3.74 2.08m-1.92 3.65 3.96 1.62"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m28.04 95.41 4.12 1.13m-.98 4 4.23.62m-.5 4.09 4.28.1m.01 4.13 4.25-.41"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m43.95 113.16 4.17-.92m.99 4 4.04-1.41m1.46 3.85 3.84-1.9m1.92 3.66 3.57-2.35m2.35 3.39 3.27-2.75"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m72.3 121.81 2.9-3.13" />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m78.3 121.42 2.5-3.46m3.4 2.34 2.08-3.74" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m89.93 118.47 1.62-3.96m3.85 1.46 1.13-4.12m4 .98.62-4.23m4.1.5.1-4.28m4.12-.01-.4-4.25"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m113.16 100.06-.93-4.18m4.01-.98-1.42-4.04m3.85-1.46-1.9-3.84m3.66-1.92-2.35-3.57"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m121.48 77.72-2.76-3.27m3.08-2.74-3.13-2.9m2.73-3.1-3.45-2.51m2.34-3.4-3.74-2.07m1.91-3.66-3.96-1.61"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m115.96 48.6-4.12-1.12m.98-4.01-4.23-.61m.49-4.1-4.27-.1m-.01-4.13-4.25.42"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m100.05 30.85-4.17.92m-1-4-4.03 1.42m-1.46-3.85-3.84 1.89m-1.92-3.65-3.57 2.34m-2.35-3.39-3.27 2.76"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" stroke-opacity=".14" d="m71.7 22.2-2.9 3.13" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          d="m48.53 22.24-1.47 4.53m-3.86-1.64-.96 4.66m-4.02-1.21-.45 4.74"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m33.65 32.56.07 4.76m-4.18-.3.6 4.72m-4.19.16 1.12 4.63m-4.16.62 1.63 4.48"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m20.48 52.7 2.1 4.27m-3.91 1.51 2.56 4.02m-3.73 1.93 2.99 3.71M17 70.48l3.38 3.35m-3.21 2.7 3.72 2.97"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m18 82.54 4.03 2.54m-2.55 3.34 4.29 2.08m-2.17 3.6 4.5 1.6m-1.76 3.8 4.64 1.1m-1.32 3.98 4.72.58"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m31.5 109.26 4.77.05m-.42 4.18 4.74-.47m.04 4.19 4.66-.99m.51 4.17 4.52-1.5m.96 4.09 4.33-1.99"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="m57.01 124.95 4.09-2.45m1.83 3.78 3.79-2.89m2.23 3.55 3.45-3.28m2.61 3.29 3.07-3.65m2.96 2.98 2.65-3.96"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".14"
          d="m86.95 124.96 2.2-4.23m3.54 2.27 1.72-4.45"
        />
        <path stroke="#F6F6F5" stroke-linecap="round" d="m98.17 120.4 1.22-4.6m3.95 1.43.7-4.7" />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".74"
          d="m108.12 113.51.19-4.76m4.16.53-.34-4.75m4.19.07-.86-4.68m4.18-.39-1.37-4.56m4.11-.85-1.87-4.38"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".62"
          d="m124.5 88.45-2.33-4.15m3.83-1.73-2.78-3.87m3.61-2.13-3.19-3.54M127 70.5l-3.56-3.16m3.06-2.87-3.88-2.76"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".5"
          d="m125.34 58.52-4.16-2.32m2.35-3.47-4.39-1.84m1.96-3.71-4.57-1.35m1.54-3.9-4.69-.84m1.1-4.05-4.75-.31"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".38"
          d="m110.38 32.58-4.76.21m.18-4.19-4.7.73m-.27-4.19-4.6 1.25m-.73-4.13L91.06 24m-1.18-4.03-4.21 2.22"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".26"
          d="M84.05 18.32 80.1 21m-2.03-3.68-3.63 3.1m-2.42-3.43c-1.1 1.15-2.18 2.3-3.27 3.47m-2.79-3.14-2.86 3.8"
        />
        <path
          stroke="#F6F6F5"
          stroke-linecap="round"
          stroke-opacity=".14"
          d="m59.98 18.31-2.42 4.1m-3.41-2.45-1.96 4.34"
        />
      </svg>
    )
  }
];
