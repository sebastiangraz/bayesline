import { Button, Icon, Illustration, ShapeField, Text } from '@/components';
import style from './mission.module.css';

export function Mission() {
  return (
    <>
      <div className={`col ${style.page}`}>
        <div className={`col ${style.missionHero}`}>
          <div className={`col ${style.intro}`}>
            <Text.H3 balance>
              We are reimagining <Text secondary>financial analytics on AI infrastructure.</Text>
            </Text.H3>
          </div>

          <div className={`col ${style.illustration1}`}>
            <ShapeField
              color1="var(--accent-3)"
              color2="hsl(var(--brand-2))"
              variant="dithered-gradient"
              rows={24}
              columns={24}
              padding={3}
            />
          </div>

          <div className={`col ${style.illustration2}`}>
            <ShapeField
              variant="radial"
              color1="var(--accent-3)"
              color2="var(--accent-3)"
              rows={28}
              columns={28}
              padding={3}
            />
          </div>

          <div className={`col ${style.valueprops}`}>
            <ul>
              <li>
                <Icon name="chart" />
                <Text.Small secondary balance>
                  We are changing the way investment managers interact with financial analytics. From
                  one-size-doesn't-fit-all to highly customizable and blazing fast.
                </Text.Small>
              </li>
              <li>
                <Icon name="layers" />
                <Text.Small secondary balance>
                  Our first goal is to revolutionize equity risk models and analytics. Traditional models don't align
                  with realistic investment universes or styles - we're changing that.
                </Text.Small>
              </li>
              <li>
                <Icon name="enterprise" />
                <Text.Small secondary balance>
                  For example, if you run a mid-cap health care portfolio across the US and Europe, a geographically and
                  stylistically aligned model is only a few seconds away.
                </Text.Small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
