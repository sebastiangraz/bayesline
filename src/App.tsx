import utils from './utils.module.css';
import style from './app.module.css';
import { Hero, Box, Button, Flex, Footer } from '@/components';
import { Illustration } from '@/components/';

function App() {
  return (
    <main>
      <div className="tile"></div>

      <Hero />
      {/*       <div className={`e-12 ${style.heroIllustration}`}>
        <Flex center>
          <Illustration />
        </Flex>
      </div> */}
      <Box bg="primary" className={`${utils.section} z-1`}>
        <Flex
          column
          between
          className={`e-3 ${style.sidebar}`}
          /*           style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} */
        >
          <div>
            <Button type="primary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
              <pre className="caps case-type">Try for free</pre>
            </Button>
            <div className="padding-05">
              <p className="small balance center">Schedule a demo with us</p>
            </div>
          </div>
          <Flex column gap={1} className={style.meta}>
            <p className="small balance">
              We just started and made some functionality available. Sign-up only requires a valid corporate email.
              Click here for our API documentation, and an open-source python wrapper with an example notebook.
            </p>
            <p className="small">
              For a demo of our UI, please contact <a href="mailto:info@bayesline.com">info@bayesline.com</a>
            </p>
          </Flex>
        </Flex>
        <div className="s-3 e-12 sub padding-1 padding-y-2">
          <div className="e-6">
            <Flex column gap={4}>
              <h3>We are reimagining financial analytics on Al infrastructure.</h3>
              <Flex column gap={2}>
                <p className="balance">
                  We deliver the analytics that investment managers are already familiar with, but hyper-customizable
                  and blazing fast.
                </p>
                <p className="balance">
                  Our first goal is to revolutionize equity risk models and analytics. Traditional models are inflexible
                  and fitted to generic, one-size-fits-all asset universes.
                </p>
                <p className="balance">
                  Through our user interface or API, users can specify models with a few clicks that truly fit their
                  portfolio, or current market events.
                </p>
              </Flex>
            </Flex>
          </div>
        </div>
      </Box>

      <Box bg="secondary" className={`${utils.section} z-1 `}>
        <div className="e-12 padding-2">
          <Flex column gap={4}>
            <h3>The Team</h3>

            <Flex gap={4} wrap>
              <Flex gap={2} className="w-prose">
                <Avatar></Avatar>
                <Flex column gap={1}>
                  <p className="caps">Sebastian Janisch</p>
                  <p className="small balance w-prose">
                    Bayesline was started by Sebastian Janisch and Misha van Beek on March 25th, 2024
                  </p>
                </Flex>
              </Flex>

              <Flex gap={2} className="w-prose">
                <Avatar></Avatar>
                <Flex column gap={1}>
                  <p className="caps">Misha van Beek</p>
                  <p className="small balance w-prose">
                    Through our user interface or API, users can specify models with a few clicks that truly fit their
                    portfolio, or current market events.
                  </p>
                </Flex>
              </Flex>
            </Flex>
            <hr />

            <Flex column gap={1}>
              <p className="caps">Contact</p>
              <p className="small balance w-prose">
                For general inquiries or to request a demo, you can reach us at{' '}
                <a href="mailto:info@bayesline.com">info@bayesline.com</a>.
              </p>
            </Flex>
          </Flex>
        </div>
      </Box>

      <Footer />
    </main>
  );
}

const Avatar = () => {
  return (
    <div className="avatar">
      <img src="https://via.placeholder.com/64" alt="avatar" style={{ borderRadius: '99em', overflow: 'hidden' }} />
    </div>
  );
};

export default App;
