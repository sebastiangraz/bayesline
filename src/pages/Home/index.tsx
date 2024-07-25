import style from './home.module.css';
import { Hero, Button, Card, Cards, Text, VectorField, ShapeField, Flex, Icon, Img } from '@/components';
import { Feature } from './Feature';

export function Home() {
  return (
    <>
      <Hero />
      <Cards layout="grid-left">
        <Card dataTheme={1}>
          <div className="card-header">
            <Text.H4>Ultimate flexibility</Text.H4>
            <Text.Body secondary>
              Bring your own data, hierarchies, factor exposures, or use our pre-canned and optimized models. Select
              from industry standard reports, or new ways to look at risk.
            </Text.Body>
            <Button type="secondary" href="https://calendar.app.google/qq4pjZcmDdzTjBme7" target="_blank">
              <Text.Caps>Schedule a Demo</Text.Caps>
            </Button>
          </div>

          <Img src="composition.png" />
        </Card>
        <Card dataTheme={3}>
          <div className="card-header">
            <Text.H4>Compare models</Text.H4>
            <Text.Body secondary>
              Run reports in comparison mode, zooming into the relative performance of different models and settings.
            </Text.Body>
          </div>
          <Img src="sidebar.png" className={style.cardImage} />
          <VectorField variant="straight" className={style.cardVectorField} />
        </Card>
        <Card.Secondary dataTheme={1}>
          <div className="card-header">
            <Text.H4>Automated suggestions</Text.H4>
            <Text.Body secondary>Seamless tips and approval flows.</Text.Body>
          </div>
          <ShapeField
            variant="dithered-gradient"
            rows={24}
            columns={24}
            padding={3}
            color1="var(--accent-3)"
            color2="hsl(var(--brand-2))"
            className={style.cardShapeField}
          />
        </Card.Secondary>
      </Cards>

      <Cards layout="grid-col">
        <Card dataTheme={0}>
          <Icon name="chart" />
          <Text.Body balance secondary>
            We are changing the way investment managers interact with financial analytics. From one-size-doesn't-fit-all
            to highly customizable and blazing fast.
          </Text.Body>
        </Card>
        <Card dataTheme={0}>
          <Icon name="layers" />
          <Text.Body balance secondary>
            Our first goal is to revolutionize equity risk models and analytics. Traditional models don't align with
            realistic investment universes or styles - we're changing that.
          </Text.Body>
        </Card>
        <Card dataTheme={0}>
          <Icon name="globe" />
          <Text.Body balance secondary>
            We are changing the way investment managers interact with financial analytics. From one-size-doesn't-fit-all
            to highly customizable and blazing fast.
          </Text.Body>
        </Card>
      </Cards>
      <Feature.Comparison />
      <Feature.CenterAsset />
      <Feature.Ticker />
    </>
  );
}
