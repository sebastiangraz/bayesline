import { Box, Flex, Logo } from '@/components';
import { Link } from '@tanstack/react-router';
import style from './signup.module.css';
import { Widget } from '@typeform/embed-react';

export function Signup() {
  return (
    <>
      <div className={`${style.page}`}>
        {/*     <Hero title="Sign up for early access" /> */}
        <Box className={`z-1`}>
          <div className="e-12 padding-2">
            <Flex center column gap={4}>
              <Logo className={`${style.logo}`} />
              <h2 className="center">A new era in financial analytics is on its way</h2>
              <Link to="/">
                <p>Go back</p>
              </Link>
              <Widget
                inlineOnMobile
                hideHeaders
                noScrollbars
                autoResize
                opacity={0}
                hideFooter
                id="QMsSX0B4"
                className={`${style.widget}`}
              />
            </Flex>
          </div>
        </Box>
      </div>
    </>
  );
}
