import style from './feature.module.css';
import { Button, Flex, Text, VectorField, Img } from '@/components';

const FeatureSpeed = () => {
  return (
    <div className={`col bleed ${style.speed}`}>
      <div className={`${style.cue}`}>
        <Flex column>
          <Text.H5>Move with the markets.</Text.H5>
          <Text.Small secondary balance>
            Build models and reports in real-time
          </Text.Small>
        </Flex>
        <section>
          <VectorField loop />
          <Flex center gap={1}>
            <Text.Small>Bayesline</Text.Small>
            <Text.Small secondary>Seconds</Text.Small>
          </Flex>
        </section>
        <section>
          <VectorField variant="twist" loop />
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
          <Button type="secondary" theme={1} href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
            <Text.Caps>Book a Demo</Text.Caps>
          </Button>
          <Text.Small balance secondary>
            Be the first to know about our beta launch.
          </Text.Small>
        </Flex>
      </Flex>
      <div className={`col ${style.ui}`}>
        <Img src="homepage-hero.png" deviceBorder />
      </div>
    </div>
  );
};

const FeaturePowerful = () => {
  return (
    <div data-theme="one" className={`theme ${style.powerful}`}>
      <Text.H1>Powerful.</Text.H1>
      <Text.Body balance>
        Traditional models don't align with realistic portfolios, and can't be adjusted to reflect market changes
      </Text.Body>
    </div>
  );
};

export const Feature = Object.assign(
  {},
  {
    Speed: FeatureSpeed,
    Powerful: FeaturePowerful
  }
);
