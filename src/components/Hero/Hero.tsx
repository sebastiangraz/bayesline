import { StaggerText } from '@/helpers/StaggerText';
import utils from '@/utils.module.css';
import style from './hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flex, Illustration, Logo } from '@/components';

interface HeroProps {
  title?: string;
}

export const Hero = (props: HeroProps) => {
  const { scrollY } = useScroll();

  const yDistance = useTransform(scrollY, [0, 1000], [0, -40]);
  const headerOpacity = useTransform(scrollY, [300, 500], [1, 0]);
  const logoOpacity = useTransform(scrollY, [400, 600], [1, 0]);

  const { title = 'A new era of financial analytics' } = props;

  return (
    <>
      <div className={`${utils.section} ${style.hero}`}>
        <span className="s-4 e-8">
          <motion.div className="logo" style={{ opacity: logoOpacity }}>
            <Logo />
          </motion.div>
        </span>

        <div className="s-2 e-10">
          <motion.div style={{ y: yDistance, opacity: headerOpacity }}>
            <h1>
              <StaggerText>{title}</StaggerText>
            </h1>
          </motion.div>
        </div>
        <div className={`e-12 ${style.illustration}`}>
          <Flex center>
            <Illustration />
          </Flex>
        </div>
      </div>
    </>
  );
};
