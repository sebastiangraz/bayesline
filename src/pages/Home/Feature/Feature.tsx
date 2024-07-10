import { StaggerText } from '@/helpers/StaggerText';
import style from './feature.module.css';
import { Flex, Text, VectorField } from '@/components';
import hero from '@/assets/homepage-hero.png';

interface HeroProps {
  title?: string;
}

export const Feature = (props: HeroProps) => {
  const { title = 'Financial analytics rethought.' } = props;

  return (
    <div className={`col bleed`}>
      <div className={`${style.cue}`}>
        <Text.H4>Invest in time.</Text.H4>
        <VectorField />
        <VectorField variant="twist" />
      </div>
      <div className={`col ${style.feature}`}>
        <Flex column gap={4}>
          <Text.H1>
            <StaggerText>{title}</StaggerText>
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
