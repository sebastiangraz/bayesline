import utils from './utils.module.css';
import { Hero, Box, Button, Flex } from './components';

function App() {
  return (
    <main>
      <div className="tile"></div>

      <Hero />

      <Box bg="primary" className={`${utils.section} z-1`}>
        <div className="e-3 border-r">
          <Button type="primary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
            <p>Try for free</p>
          </Button>

          <p className="small e-4 padding-2">Get set up in minutes</p>
          <p className="small e-4 padding-2">
            We just started and made some functionality available. Sign-up only requires a valid corporate email. Click
            here for our API documentation, and an open-source python wrapper with an example notebook. For a demo of
            our UI, please contact <a href="mailto:info@bayesline.com">info@bayesline.com</a>
          </p>
        </div>
        <div className="s-3 e-12 sub padding-1">
          <div className="e-6">
            <Flex column gap={4}>
              <h3>We are reimagining financial analytics on Al infrastructure.</h3>
              <Flex column gap={2}>
                <p>
                  We deliver the analytics that investment managers are already familiar with, but hyper-customizable
                  and blazing fast.
                </p>
                <p>
                  Our first goal is to revolutionize equity risk models and analytics. Traditional models are inflexible
                  and fitted to generic, one-size-fits-all asset universes.
                </p>
                <p>
                  Through our user interface or API, users can specify models with a few clicks that truly fit their
                  portfolio, or current market events. 
                </p>
              </Flex>
            </Flex>
          </div>
        </div>
      </Box>

      <Box className={utils.section}>
        <div className="e-6 sub">
          <h2 className="e-2">card</h2>
          <h2 className="s-2 e-4">card</h2>
          <h2 className="s-4 e-6">card</h2>
        </div>
        <div className="s-8 e-12 sub">
          <h2 className="e-2">card</h2>
          <h2 className="s-2 e-4">card</h2>
        </div>
      </Box>

      <div className={utils.section}>
        <div className="s-2 e-10 sub">
          <h1 className="s-2 e-6">center sub text</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
