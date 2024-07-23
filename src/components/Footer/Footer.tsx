import style from './footer.module.css';
import { Button, Flex, Logo, Text } from '@/components';
import footer from '@/assets/footer.svg';

export const Footer = () => {
  const currentTimestamp = Date.now();
  const date = new Date(currentTimestamp);
  return (
    <div className={`col theme ${style.footer}`} data-theme="one">
      <div className={`col ${style.content}`}>
        <div className={style.slogan}>
          <Text.H3>Financial analytics rethought</Text.H3>
        </div>
        <div className={`${style.logo}`}>
          <div className={style.logowrapper}>
            <Logo.Mark loop className={style.logomark} />
          </div>
          <img src={footer} className={style.logoimage} alt="radial" />
        </div>
        <hr />
        <div className={style.menu}>
          <Button type="secondary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
            <Text.Caps secondary>Schedule a Demo</Text.Caps>
          </Button>
        </div>
        <div className={style.copyright}>
          <Text.Caps secondary>© Copyright {date.getFullYear()} · Bayesline</Text.Caps>
        </div>
      </div>
    </div>
  );
};
