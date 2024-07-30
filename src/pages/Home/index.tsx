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
            <Text.H4>The Industry Standard<br />Just More Of It</Text.H4>
            <Text.Body secondary>
              Build on top of your existing risk model vendor data. 
              We use industry standard factor risk model methodologies without shortcuts.
              Use our analytics engine to create custom models with portfolio 
              aligned universes, factors and settings.
            </Text.Body>
            <Button type="secondary" href="http://schedule30.bayesline.com" target="_blank">
              <Text.Caps>Schedule a Demo</Text.Caps>
            </Button>
          </div>

          <Img src="composition.png" />
        </Card>
        <Card dataTheme={3}>
          <div className="card-header">
            <Text.H4>Bring Your Own Data</Text.H4>
            <Text.Body secondary>
              Proprietary crowding factors, third party alpha libraries, custom industry hierarchies. 
              Bring your own data with easy and use them in your risk models.
            </Text.Body>
          </div>
          <Img src="comparemodels.png" className={style.cardImage} />
          <VectorField variant="straight" className={style.cardVectorField} />
        </Card>
        <Card.Secondary dataTheme={1}>
          <div className="card-header">
            <Text.H4>Deploy On Your Cloud<br />Consume API First</Text.H4>
            <Text.Body secondary>Seamless tips and approval flows.</Text.Body>
          </div>
          <Img src="suggestions.png" className={style.cardImage} />
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

      <Cards layout="grid-col" className={`${style.threeup}`}>
        <Card dataTheme={0}>
          <Icon name="chart" />
          <Text.Body balance secondary>
            Research Alignment<br />Move with the speed of research. Iterate quickly on research and backtesting.
          </Text.Body>
        </Card>
        <Card dataTheme={0}>
          <Icon name="layers" />
          <Text.Body balance secondary>
            Market Alignment<br />
            React to changing market conditions and use reliable and relevant analytics when they are most needed.

          </Text.Body>
        </Card>
        <Card dataTheme={0}>
          <Icon name="globe" />
          <Text.Body balance secondary>
            Portfolio Alignment<br />
            Align your risk models with your universe, styles and preferences. 
            Gain a better sense of granularity, accuracy and performance.
          </Text.Body>
        </Card>
      </Cards>
      <Feature.Comparison />
      <Feature.CenterAsset />
      <Feature.Ticker />
    </>
  );
}
