import { StaggerText } from '@/helpers/StaggerText';
import style from './feature.module.css';
import { Button, Flex, Text, VectorField, Img } from '@/components';
import hero from '@/assets/homepage-hero.png';
import y from '@/assets/x.png';
import x from '@/assets/y.png';

interface HeroProps {
  title?: string;
}

export const Feature = (props: HeroProps) => {
  return (
    <div className={`col bleed ${style.feature}`}>
      <div className={`${style.cue}`}>
        <Flex column>
          <Text.H5>Move with the markets.</Text.H5>
          <Text.Small secondary balance>
            Build models and reports in real-time
          </Text.Small>
        </Flex>
        <section>
          <VectorField />
          <Flex center gap={1}>
            <Text.Small>Bayesline</Text.Small>
            <Text.Small secondary>Seconds</Text.Small>
          </Flex>
        </section>
        <section>
          <VectorField variant="twist" />
          <Flex center gap={1}>
            <Text.Small>Traditional tools</Text.Small>
            <Text.Small secondary>Weeks</Text.Small>
          </Flex>
        </section>
      </div>
      <Flex column gap={4} className={`col ${style.text}`}>
        <Text.Body balance>
          We deliver the analytics that investment managers are already familiar with, but hyper-customizable and
          blazing fast.
        </Text.Body>
        <Flex gap={4}>
          <Button type="primary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
            <Text.Caps>Book a Demo</Text.Caps>
          </Button>
          <Text.Small balance secondary>
            Be the first to know about our beta launch.
          </Text.Small>
        </Flex>
      </Flex>
      <div className={`col ${style.ui}`}>
        {/* <img src={hero} alt="hero" /> */}

        <Img src={hero} deviceBorder />
      </div>
    </div>
  );
};
