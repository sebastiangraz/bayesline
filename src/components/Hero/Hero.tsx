import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import utils from '@/utils.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();

  const yDistance = useTransform(scrollY, [0, 1000], [0, -40]);
  const headerOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const logoOpacity = useTransform(scrollY, [200, 300], [1, 0]);

  return (
    <div className={`${utils.section} ${style.hero}`}>
      <span className="logo s-4 e-8">
        <motion.div style={{ opacity: logoOpacity }}>
          <Logo />
        </motion.div>
      </span>

      <div className="s-2 e-10">
        <motion.div style={{ y: yDistance, opacity: headerOpacity }}>
          <h1>
            <StaggerText>A new era of financial analytics</StaggerText>
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <svg width="152" height="23" viewBox="0 0 152 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.811321 2.47358H7.69434C8.72478 2.47358 9.62642 2.66679 10.3992 3.0532C11.1721 3.42352 11.7598 3.93069 12.1623 4.57471C12.5809 5.21874 12.7902 5.95937 12.7902 6.7966C12.7902 7.50503 12.6533 8.14906 12.3796 8.72868C12.122 9.2922 11.7598 9.75912 11.2928 10.1294C10.8259 10.4836 10.3107 10.7252 9.74717 10.854V10.5883C10.359 10.6849 10.9306 10.9184 11.4619 11.2887C12.0093 11.6429 12.444 12.134 12.766 12.7619C13.1042 13.3737 13.2732 14.0741 13.2732 14.863C13.2732 15.7647 13.0559 16.5697 12.6211 17.2781C12.2025 17.9704 11.5746 18.5179 10.7374 18.9204C9.91623 19.3068 8.91799 19.5 7.74264 19.5H0.811321V2.47358ZM7.40453 17.0366C8.29006 17.0366 8.96629 16.8192 9.43321 16.3845C9.91623 15.9498 10.1577 15.338 10.1577 14.5491C10.1577 13.7601 9.91623 13.1322 9.43321 12.6653C8.95019 12.1984 8.27396 11.9649 7.40453 11.9649H3.37132V9.59811H7.35623C7.87145 9.59811 8.31422 9.50151 8.68453 9.3083C9.07094 9.11509 9.36076 8.84138 9.55396 8.48717C9.74717 8.13295 9.84378 7.71434 9.84378 7.23132C9.84378 6.7483 9.74717 6.33773 9.55396 5.99962C9.36076 5.64541 9.07094 5.37975 8.68453 5.20264C8.31422 5.02553 7.87145 4.93698 7.35623 4.93698H3.78189V17.0366H7.40453ZM20.1719 2.47358H24.0843L29.4459 19.5H26.3304L24.7364 14.1385L24.5915 13.5347L22.0315 4.98528L19.5198 13.6072L19.3266 14.2592L17.8292 19.5H14.907L20.1719 2.47358ZM18.8194 12.8826H25.2919L25.9681 15.2736H18.1674L18.8194 12.8826ZM36.1272 12.4238L30.4759 2.47358H33.6638L37.7211 9.59811L41.7302 2.47358H44.7974L39.1702 12.4238V19.5H36.1272V12.4238ZM47.5421 2.47358H59.2553V4.96113H50.5609V9.62226H58.4825V12.0615H50.5609V16.9883H59.2553V19.5H47.5421V2.47358ZM68.5691 19.8623C67.2327 19.8623 66.0896 19.6369 65.1396 19.186C64.1897 18.7352 63.4571 18.1153 62.9419 17.3264C62.4267 16.5375 62.1288 15.6439 62.0483 14.6457H64.9706C65.035 15.1448 65.196 15.6036 65.4536 16.0223C65.7112 16.4409 66.0976 16.787 66.6128 17.0608C67.1281 17.3345 67.7721 17.4713 68.5449 17.4713C69.2694 17.4713 69.8813 17.3506 70.3804 17.1091C70.8956 16.8675 71.2659 16.5536 71.4913 16.1672C71.7328 15.7808 71.8536 15.3702 71.8536 14.9355C71.8536 14.2431 71.6523 13.6877 71.2498 13.2691C70.8473 12.8504 70.1469 12.5445 69.1487 12.3513L67.434 12.0132C65.7595 11.6912 64.5439 11.1277 63.7872 10.3226C63.0465 9.51761 62.6762 8.43082 62.6762 7.06226C62.6762 6.17673 62.9016 5.35559 63.3525 4.59887C63.8194 3.84214 64.4795 3.23836 65.3328 2.78754C66.1862 2.33673 67.1844 2.11132 68.3276 2.11132C70.2757 2.11132 71.765 2.57824 72.7955 3.51207C73.842 4.44591 74.4297 5.63736 74.5585 7.08641H71.6121C71.4994 6.24918 71.1774 5.60515 70.646 5.15434C70.1147 4.70352 69.3419 4.47811 68.3276 4.47811C67.6996 4.47811 67.1764 4.59887 66.7577 4.84037C66.3391 5.06578 66.0252 5.36365 65.8159 5.73396C65.6226 6.08817 65.526 6.45044 65.526 6.82075C65.526 7.51308 65.7193 8.03635 66.1057 8.39056C66.4921 8.74478 67.1683 9.01849 68.1343 9.2117L69.8491 9.52566C71.4913 9.83157 72.7472 10.4192 73.6166 11.2887C74.486 12.142 74.9208 13.2771 74.9208 14.694C74.9208 15.6922 74.6632 16.5858 74.1479 17.3747C73.6488 18.1636 72.9162 18.7755 71.9502 19.2102C71.0003 19.6449 69.8732 19.8623 68.5691 19.8623ZM82.6406 0.179243H85.2972V22.6879H82.6406V0.179243ZM94.3453 2.47358H97.3883V16.8917H105.406V19.5H94.3453V2.47358ZM113.344 2.47358H116.387V19.5H113.344V2.47358ZM110.276 17.0125H119.454V19.5H110.276V17.0125ZM110.276 2.47358H119.454V4.96113H110.276V2.47358ZM124.203 2.47358H128.285L133.525 15.2011L133.501 2.47358H136.423V19.5H132.68L127.125 6.09622V19.5H124.203V2.47358ZM140.231 2.47358H151.944V4.96113H143.25V9.62226H151.171V12.0615H143.25V16.9883H151.944V19.5H140.231V2.47358Z"
        fill="currentColor"
      />
    </svg>
  );
};
