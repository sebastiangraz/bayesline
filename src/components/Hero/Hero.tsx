import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flex, Text } from '@/components';
import hero from '@/assets/homepage-hero.png';

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
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};
