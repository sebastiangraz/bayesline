import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import style from './feature.module.css';
import { Button, Flex, Text, VectorField, Img, ShapeField, Logo } from '@/components';
import { useState } from 'react';
import debounce from 'lodash.debounce';

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
        <Img src="/src/assets/homepage-hero.png" deviceBorder />
      </div>
    </div>
  );
};

const FeaturePowerful = () => {
  return (
    <div data-theme="one" className={`theme col ${style.powerful}`}>
      <div className={`${style.copy}`}>
        <Text.H1>Powerful.</Text.H1>
        <Text.Body balance secondary as="span">
          <Text.Body as="span"> Traditional models don't align with realistic portfolios, </Text.Body>
          and can't be adjusted to reflect market changes
        </Text.Body>
      </div>
      <div className={style.cpu}>
        <Logo loop type={false} className={style.logo} />
        <ShapeField
          color1="var(--accent-1)"
          color2="var(--accent-3)"
          variant="pcb"
          rows={33}
          columns={19}
          padding={1.5}
          className={`col ${style.shapefield}`}
        />
      </div>
      <div className={`${style.copy}`}>
        <Button type="secondary" theme={4} to="/news" target="_blank">
          <Text.Caps>Learn more</Text.Caps>
        </Button>
      </div>
    </div>
  );
};

const selectorVariant = {
  hidden: {
    opacity: 0,
    y: 8
  },
  visible: {
    opacity: 1,
    y: 0
  },
  hide: {
    opacity: 0,
    y: -8
  }
};

const selectorImageVariant = {
  hidden: {
    y: 14,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  hide: {
    y: -14,
    opacity: 0
  }
};

const selectorTransitionDelay = {
  type: 'spring',
  duration: 0.5
};

const data = {
  header: "What's next",
  features: [
    {
      id: '1',
      featureTitle: 'Speed',
      featureDescription:
        'We deliver the analytics that investment managers are already familiar with, but hyper-customizable and blazing fast.',
      image: 'homepage-hero.png'
    },
    {
      id: '2',
      featureTitle: 'Powerful',
      featureDescription:
        "Traditional models don't align with realistic portfolios, and can't be adjusted to reflect market changes",
      image: 'homepage-hero.png'
    },
    {
      id: '3',
      featureTitle: 'Ticker',
      featureDescription:
        "Our ticker is a new way to view your portfolio, and it's built on top of our models. It's a great way to see how your portfolio is performing, and how it's doing compared to the market.",
      image: 'homepage-hero.png'
    }
  ]
};

const FeatureTicker = () => {
  const [selectedTab, setSelectedTab] = useState(data?.features[0]);
  return (
    <div className={`col ${style.ticker}`}>
      <nav>
        {data?.features.map((item) => {
          return (
            <button
              key={item.id}
              className={item === selectedTab ? 'selected' : ''}
              onClick={() => {
                setSelectedTab(item);
              }}
            >
              <Text.Body>{`${item.featureTitle}`}</Text.Body>

              {item === selectedTab ? <motion.div className={style.underline} layoutId="underline" /> : null}
            </button>
          );
        })}
      </nav>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab.id ? selectedTab.id : ''}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Flex>
            <Text.H4>{selectedTab ? selectedTab.featureDescription : ''}</Text.H4>
          </Flex>

          <motion.div
            variants={selectorImageVariant}
            transition={selectorTransitionDelay}
            initial="hidden"
            animate="visible"
            exit="hide"
          >
            <Img deviceBorder src={selectedTab.image} className={style.image} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const Feature = Object.assign(
  {},
  {
    Speed: FeatureSpeed,
    Powerful: FeaturePowerful,
    Ticker: FeatureTicker
  }
);
