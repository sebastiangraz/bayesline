import { Box, Button, Card, Cards, Flex, Logo, Text } from '@/components';
import { Link } from '@tanstack/react-router';
import style from './pricing.module.css';

export function Pricing() {
  return (
    <>
      <div className={`col ${style.page}`}>
        <Text.H2 className={`col ${style.title}`}>Transparent pricing.</Text.H2>
        <Cards layout="grid-left" className={`${style.tiers}`}>
          <Card dataTheme={0}>
            <div className="card-header">
              <Text.H4>Free</Text.H4>
              <Text.Body secondary>
                We are changing the way investment managers interact with financial analytics. From
                one-size-doesn't-fit-all to highly customizable and blazing fast.
              </Text.Body>
              <Button type="secondary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
                <Text.Caps>Start for free</Text.Caps>
              </Button>
              <ul>
                <li>Unlimited users</li>
                <li>Unlimited reports</li>
                <li>Unlimited data</li>
              </ul>
            </div>
          </Card>
          <Card.Secondary dataTheme={0}>
            <div className="card-header">
              <Text.H4>Enterprise</Text.H4>
              <Text.Body secondary>
                Our enterprise pricing is tailored to your needs. From one-size-doesn't-fit-all to highly customizable.
              </Text.Body>
              <Button type="secondary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
                <Text.Caps>Schedule a Demo</Text.Caps>
              </Button>
              <ul>
                <li>Unlimited users</li>
                <li>Unlimited reports</li>
                <li>Unlimited data</li>
                <li>Unlimited models</li>
                <li>Unlimited users</li>
                <li>Unlimited reports</li>
                <li>Unlimited data</li>
                <li>Unlimited models</li>
              </ul>
            </div>
          </Card.Secondary>
        </Cards>
      </div>
    </>
  );
}
