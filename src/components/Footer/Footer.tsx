import style from './footer.module.css';
import utils from '@/utils.module.css';
import footer from '@/assets/footer.webp';
import { Button, Flex } from '@/components';
import { StaggerText } from '@/helpers/StaggerText';

export const Footer = () => {
  return (
    <>
      <div className={`${utils.section} ${style.wrapper}`}>
        <div className="s-2 e-10">
          <Flex center column gap={3}>
            <h1 className="w-title">
              <StaggerText>financial analytics rethought</StaggerText>
            </h1>

            <Button type="primary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
              <pre className="caps">Schedule a Demo</pre>
            </Button>
            <p className="w-prose balance center small">
              For general inquiries you can reach us at{' '}
              <a href="mailto:info@bayesline.com">info@bayesline.com</a>.
            </p>
            <p className="small balance center">© Copyright 2024 · Bayesline</p>
          </Flex>
        </div>
      </div>
      <div className={style.footer}>
        <img src={footer} alt="footer" />
      </div>
    </>
  );
};
