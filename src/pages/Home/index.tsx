import style from './home.module.css';
import { Hero, Button, Card, Cards, Text, VectorField, ShapeField, Flex } from '@/components';
import composition from '@/assets/composition.png';
import sidebar from '@/assets/sidebar.png';

export function Home() {
  return (
    <>
      <Hero />

      <Cards layout="grid-left">
        <Card dataTheme={1}>
          <div className="card-header">
            <Text.H4>Ultimate flexibility</Text.H4>
            <Text.Body>
              Bring your own data, hierarchies, factor exposures, or use our pre-canned and optimized models. Select
              from industry standard reports, or new ways to look at risk.
            </Text.Body>
            <Button
              bgColor="hsl(var(--brand-2))"
              fgColor="var(--foreground)"
              type="primary"
              href="https://calendar.app.google/qq4pjZcmDdzTjBme7"
              target="_blank"
            >
              <Text.Caps>Schedule a Demo</Text.Caps>
            </Button>
          </div>
          <img src={composition} />
        </Card>
        <Card.Secondary dataTheme={3}>
          <div className="card-header">
            <Text.H4>Compare models</Text.H4>
            <Text.Body>
              Run reports in comparison mode, zooming into the relative performance of different models and settings.
            </Text.Body>
          </div>
          <img src={sidebar} className={style.cardImage} />
          <VectorField variant="straight" className={style.cardField} />
        </Card.Secondary>
        <Card.Secondary dataTheme={1}>
          <div className="card-header">
            <Text.H4>Automated suggestions</Text.H4>
            <Text.Body>Seamless tips and approval flows.</Text.Body>
            <ShapeField variant="bayesian" rows={32} columns={32} padding={2} isStatic />
          </div>
        </Card.Secondary>
      </Cards>

      <Cards layout="grid-col">
        <Card dataTheme={0}>
          <Text.Body>
            We are changing the way investment managers interact with financial analytics. From one-size-doesn't-fit-all
            to highly customizable and blazing fast.
          </Text.Body>

          <img src={sidebar} className={style.cardImage} />
        </Card>
        <Card dataTheme={0}>
          <Text.Body>
            Our first goal is to revolutionize equity risk models and analytics. Traditional models don't align with
            realistic investment universes or styles - we're changing that.
          </Text.Body>

          <img src={sidebar} className={style.cardImage} />
        </Card>
        <Card.Secondary dataTheme={0}>
          <Text.Body>
            We are changing the way investment managers interact with financial analytics. From one-size-doesn't-fit-all
            to highly customizable and blazing fast.
          </Text.Body>

          <img src={sidebar} className={style.cardImage} />
        </Card.Secondary>
      </Cards>
    </>
  );
}
