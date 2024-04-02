import utils from '@/utils.module.css';
import style from '@/app.module.css';
import { Hero, Box, Button, Flex, Footer, Avatar, Icon } from '@/components';
import sebastian from '@/assets/sebastian.jpg';
import misha from '@/assets/misha.jpg';
import { createLazyFileRoute, Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <>
      <div className="tile"></div>
      <Hero />
      <Box bg="primary" className={`${utils.section} z-1`}>
        <Flex column between className={`e-3 ${style.sidebar}`}>
          <div>
            <Button type="primary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
              <pre className="caps case-type">Schedule a Demo</pre>
            </Button>
          </div>
          <Flex column gap={2} className={style.meta}>
            <p className="small balance">To be the first to know about our beta launch.</p>
            <Button
              type="secondary"
              to="/signup"
              bgColor="var(--background)"
              fgColor="var(--text)"
              nodeColor="var(--background)"
            >
              <p className="caps small"> Join&nbsp;waitlist</p>
            </Button>
          </Flex>
        </Flex>
        <div className={`s-3 e-12 sub ${style.box}`}>
          <div className="e-6">
            <Flex column gap={4}>
              <h3>We are reimagining financial analytics on AI infrastructure.</h3>
              <Flex column gap={2}>
                <Flex gap={2}>
                  <Icon name="chart" className={style.icon}></Icon>
                  <p className="balance">
                    We are changing the way investment managers interact with financial analytics. From
                    one-size-doesn't-fit-all to highly customizable and blazing fast.
                  </p>
                </Flex>
                <Flex gap={2}>
                  <Icon name="layers" className={style.icon}></Icon>
                  <p className="balance">
                    Our first goal is to revolutionize equity risk models and analytics. Traditional models don't align
                    with realistic investment universes or styles - we're changing that.
                  </p>
                </Flex>
                <Flex gap={2}>
                  <Icon name="border" className={style.icon}></Icon>
                  <p className="balance">
                    For example, if you run a mid-cap health care portfolio across the US and Europe, a geographically
                    and stylistically aligned model is only a few seconds away.
                  </p>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </div>
      </Box>

      <Box bg="secondary" className={`${utils.section} z-1 `}>
        <div className="e-12 padding-2">
          <Flex column gap={4}>
            <Flex column gap={3}>
              <h3>The Team</h3>
              <h4 className="balance w-prose">
                Bayesline was founded on March 25th 2024 by Sebastian Janisch and Misha van Beek, with a mission to
                reimagine financial analytics—putting flexibility and performance first.
              </h4>
            </Flex>

            <Flex gap={4} wrap between>
              <div>
                <Flex column gap={1}>
                  <Avatar url={sebastian} className={style.avatar}></Avatar>
                  <p></p>
                  <p className="caps">Sebastian Janisch, CFA</p>
                  <p className="small">
                    A software engineer with a passion for quant research, Sebastian has spent the last 10 years
                    leveraging the power of machine learning to challenge, innovate, and reshape how institutions think
                    about financial modeling.
                  </p>
                  <p className="small">
                    Prior to Bayesline, he was at Bloomberg where he incubated the next generation of customizable and
                    actionable quant products as part of the Quant & AI Research group.
                  </p>

                  <p className="small">
                    Sebastian built his expertise in quant research during his time as a Director in BlackRock’s
                    Financial Modeling Group where he researched and implemented equity risk models that analyze
                    trillions in assets.
                  </p>
                  <p className="small">
                    Sebastian holds a Bachelor of Science in Information Systems from University of Hamburg and a
                    Masters of Science in Finance & IT from Warwick Business School.
                  </p>
                </Flex>
              </div>
              <div>
                <Flex column gap={1}>
                  <Avatar url={misha} className={style.avatar}></Avatar>
                  <p></p>
                  <p className="caps">Misha van Beek, PhD</p>
                  <p className="small">
                    Misha has spent the past 10 years coupling his professional quant training with his personal
                    interest in all things AI and hands-on engineering.
                  </p>
                  <p className="small">
                    Before co-founding Bayesline, Misha was a Managing Director at BlackRock where he evolved Aladdin’s
                    portfolio risk models spanning tens of trillions in assets.
                  </p>
                  <p className="small">
                    Under his leadership, his team also developed Aladdin’s economic scenario engine, as well as
                    investment models that run roughly $400 billion in strategic asset allocations.
                  </p>

                  <p className="small">
                    Prior to BlackRock, he worked as a quant analyst at Rabobank. Misha holds a Master of Science in
                    Finance & Economics from the London School of Economics and a PhD in Financial Mathematics from the
                    University of Amsterdam.
                  </p>
                </Flex>
              </div>
            </Flex>
            <hr />
            <Flex column gap={1}>
              <p className="caps">Contact</p>
              <p className="small balance w-prose">
                For general inquiries you can reach us at <a href="mailto:info@bayesline.com">info@bayesline.com</a>.
              </p>
            </Flex>
          </Flex>
        </div>
      </Box>

      <Footer />
    </>
  );
}
