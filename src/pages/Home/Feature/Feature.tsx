import { StaggerText } from '@/helpers/StaggerText';
import style from './feature.module.css';
import { Button, Flex, Text, VectorField } from '@/components';
import hero from '@/assets/homepage-hero.png';

interface HeroProps {
  title?: string;
}

export const Feature = (props: HeroProps) => {
  return (
    <div className={`col bleed ${style.feature}`}>
      <div className={`${style.cue}`}>
        <section>
          <Text.H5>Invest in time.</Text.H5>
          <Text.Body>Build model reports 56% faster</Text.Body>
        </section>
        <section>
          <VectorField />
          <Text.Small>Build model reports 56% faster</Text.Small>
        </section>
        <section>
          <VectorField variant="twist" />
          <Text.Small>Build model reports 56% faster</Text.Small>
        </section>
      </div>
      <Flex column gap={4} className={`col ${style.text}`}>
        <Text.Body balance>
          We deliver the analytics that investment managers are already familiar with, but hyper-customizable and
          blazing fast.
        </Text.Body>
        <Flex gap={4} center>
          <Button type="primary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
            <Text.Caps>Book a Demo</Text.Caps>
          </Button>
          <Text.Small balance>Be the first to know about our beta launch.</Text.Small>
        </Flex>
      </Flex>
      <div className={`col ${style.ui}`}>
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};
