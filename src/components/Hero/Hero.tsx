import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flex, Illustration } from '@/components';

interface HeroProps {
  title?: string;
}

export const Hero = (props: HeroProps) => {
  const { scrollY } = useScroll();

  const yDistance = useTransform(scrollY, [0, 1000], [0, -40]);
  const headerOpacity = useTransform(scrollY, [300, 500], [1, 0]);

  const { title = 'Financial analytics rethought.' } = props;

  return (
    <div className="bleed">
      <div className={`col`} style={{ '--c': 'start/26' }}>
        <div className={`col ${style.hero}`} style={{ '--c': 'start/13' }}>
          <Flex column gap={4}>
            <h1>
              <motion.div style={{ y: yDistance, opacity: headerOpacity }}>
                <StaggerText>{title}</StaggerText>
              </motion.div>
            </h1>
            <p>
              We deliver the analytics that investment managers are already familiar with, but hyper-customizable and
              blazing fast.
            </p>
          </Flex>
          {/* <div className={`${style.illustration}`}>
            <Flex center>
              <Illustration />
            </Flex>
          </div> */}
        </div>
        <div className={`col ${style.ui}`} style={{ '--c': '11/25' }}>
          <h3>
            We deliver the analytics that investment managers are already familiar with, but hyper-customizable and
            blazing fast.
          </h3>
        </div>
      </div>
    </div>
  );
};
