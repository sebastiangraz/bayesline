import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import { Button, Flex, Text, VectorField } from '@/components';
import hero from '@/assets/homepage-hero.png';

interface HeroProps {
  title?: string;
}

export const Hero = (props: HeroProps) => {
  const { title = 'Financial analytics rethought.' } = props;

  return (
    <div className={`col bleed`}>
      <div className={`col ${style.hero}`}>
        <Flex column gap={4}>
          <Text.H1>
            <StaggerText>{title}</StaggerText>
          </Text.H1>
          <Text.Body secondary balance>
            We deliver the analytics that investment managers are already familiar with, but hyper-customizable and
            blazing fast.
          </Text.Body>
          <Button
            theme={1}
            type="primary-interactive"
            href="https://calendar.app.google/qq4pjZcmDdzTjBme7"
            target="_blank"
          >
            <Text.Caps>Book a Demo</Text.Caps>
          </Button>
        </Flex>
      </div>
      <div className={`col ${style.ui}`}>
        <div className={`${style.cue}`}>
          <VectorField />
        </div>

        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};
