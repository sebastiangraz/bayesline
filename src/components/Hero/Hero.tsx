import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import { Button, Flex, Text, VectorField } from '@/components';
import hero from '@/assets/homepage-hero.png';
import nvidia from '@/assets/nvidia.svg';
import ycomb from '@/assets/ycomb.svg';
interface HeroProps {
  title?: string;
}

export const Hero = (props: HeroProps) => {
  const { title = '' } = props;

  return (
    <div className={`col bleed`}>
      <div className={`col ${style.hero}`}>
        <div className={`${style.content}`}>
          <Text.H1>
            <StaggerText>Financial analytics rethought.</StaggerText>
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
          <div className={`${style.badges}`}>
            <div className={`${style.badge}`}>
              <img src={ycomb} alt="badge" />
              <Text.Small>YCombinator 24</Text.Small>
            </div>
            <div className={`${style.badge}`}>
              <img src={nvidia} alt="badge" />
              <Text.Small>Nvidia Inception</Text.Small>
            </div>
          </div>
        </div>
      </div>
      <div className={`col ${style.ui}`}>
        <div className={`col ${style.cue}`}>
          <VectorField />
        </div>

        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};
