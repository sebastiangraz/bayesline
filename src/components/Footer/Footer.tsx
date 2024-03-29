import style from './footer.module.css';
import utils from '@/utils.module.css';
import { Button, Flex } from '..';

export const Footer = () => {
  return (
    <div className={`${utils.section} ${style.hero}`}>
      <div className="s-2 e-10">
        <Flex center column gap={3}>
          <h1>
            financial
            <br />
            analytics
            <br />
            rethought
          </h1>

          <Button type="primary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
            <p className="caps">Try for free</p>
          </Button>
          <p className="w-prose balance center">
            For general inquiries or to request a demo, you can reach us at info@bayesline.com.
          </p>
        </Flex>
      </div>
    </div>
  );
};
