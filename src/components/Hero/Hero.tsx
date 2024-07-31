import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import { Button, Flex, Img, Text, VectorField } from '@/components';
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
            <StaggerText>Unlock alpha in your risk models.</StaggerText>
          </Text.H1>
          <Text.Body secondary balance>
            Use our next generation infrastructure to build more insightful equity risk models in seconds. 
            Configure your own universe, bring custom factors, run backtests and reports on the fly.
          </Text.Body>
          <div className={`${style.ctas}`}>
            <Button size="small" theme={1} type="primary-interactive" href="https://app.bayesline.com" target="_blank">
              <Text.Caps>Try for Free</Text.Caps>
            </Button>
            <Button size="small" theme={3} type="primary" href="http://schedule30.bayesline.com" target="_blank">
              <Text.Caps>Book a Demo</Text.Caps>
            </Button>
          </div>
          <div className={`${style.badges}`}>
            <div className={`${style.badge}`}>
              <img src={ycomb} alt="badge" />
              <Text.Small>YCombinator S24</Text.Small>
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

        <Img src="homepage-hero.png" alt="hero" className={style.image} />
      </div>
    </div>
  );
};
