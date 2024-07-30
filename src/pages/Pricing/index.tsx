import { Button, Icon, Text } from '@/components';
import style from './pricing.module.css';

export function Pricing() {
  return (
    <>
      <div className={`col ${style.page}`}>
        <Text.H2 className={`col ${style.title}`}>Transparent pricing.</Text.H2>
        <div className={`${style.tiers}`}>
          <div className={style.card}>
            <Icon name="experiment" />
            <Text.H4>Free</Text.H4>
            <Text.Body secondary balance>
              Try the platform with no strings attached. Granular controls and customization to scale and expand your
              portfolio globally.
            </Text.Body>
            <Button theme={1} type="secondary" href="https://app.bayesline.com/signup/" target="_blank">
              <Text.Caps>Start for free</Text.Caps>
            </Button>
            <ul>
              <li>Model Reports</li>
              <li>Automated expense management</li>
              <li>Real-time saving insights</li>
              <li>Custom controls and advanced user roles</li>
            </ul>
          </div>
          <hr />
          <div className={style.card}>
            <Icon name="enterprise" />
            <Text.H4>Enterprise</Text.H4>
            <Text.Body secondary balance>
              Where investors level up. Enhanced security, compliance, and dedicated support to operate efficiently.{' '}
            </Text.Body>
            <Button theme={1} type="secondary" href="http://schedule30.bayesline.com" target="_blank">
              <Text.Caps>Contact us</Text.Caps>
            </Button>
            <ul>
              <li>Custom controls and advanced user roles</li>
              <li>Unlimited customizations</li>
              <li>Procurement automation and PO management</li>
              <li>Advanced ERP integrations with multi-entity support</li>
              <li>Custom implementation</li>
              <li>Enterprise ERP integrations</li>
              <li>Local card issuance</li>
              <li>SOX compliance customizations</li>
              <li>Premium support</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
