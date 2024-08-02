import { Flex, Card, Cards, Text, VectorField, Logo, ShapeField, Button, Asset } from '@/components';
import { ExposeProps } from './ExposeProps';
import style from './brand.module.css';

export function Brand() {
  return (
    <div className={`col theme ${style.page}`}>
      <div className={`col theme ${style.slide}`} data-theme="one">
        <Text.H3>Logotype</Text.H3>

        <ExposeProps className={`${style.grid}`}>
          <Logo type={true} />
          <Logo loop />
          <Logo type={false} />
          <Logo type={false} loop />
        </ExposeProps>
      </div>
      <div className={`col theme ${style.slide}`} data-theme="three">
        <Text.H3>Colors</Text.H3>
        <Text.Caps>Primary</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col3}`} ignoreProps={['theme', 'children']}>
          <Swatch color={getColor('accent-1')} />
          <Swatch color={getColor('accent-2')} />
          <Swatch color={getColor('accent-3')} />
        </ExposeProps>
        <Text.Caps>Secondary</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col3}`} ignoreProps={['theme', 'children']}>
          <Swatch color={getColor('foreground')} />
          <Swatch color={getColor('foreground-accent')} />
          <Swatch color={getColor('foreground-border')} />
        </ExposeProps>
        <Text.Caps>Background</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col3}`} ignoreProps={['theme', 'children']}>
          <Swatch color={getColor('background-4')} />
          <Swatch color={getColor('background-3')} />
          <Swatch color={getColor('background-2')} />
          <Swatch color={getColor('background-1')} />
          <Swatch color={getColor('background-0')} />
        </ExposeProps>{' '}
      </div>

      <div className={`col theme ${style.slide}`}>
        <Text.H3>Typography</Text.H3>
        <ExposeProps className={`${style.grid} ${style.col3}`} ignoreProps={['theme', 'children']}>
          <Text.H1>H1</Text.H1>
          <Text.H2>H2</Text.H2>
          <Text.H3>H3</Text.H3>
          <Text.H4>H4</Text.H4>
          <Text.H5>Header 5</Text.H5>
          <Text.H6>Header 6</Text.H6>
          <Text.Body>Body text</Text.Body>
          <Text.Small>Small text</Text.Small>
          <Text.Caps>Caps text</Text.Caps>
          <Text.SmallCaps>Small Caps text</Text.SmallCaps>
        </ExposeProps>
        <Text.Caps>Balance</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col2}`} ignoreProps={['theme', 'children']}>
          <Text.Body>
            Bayesline is a hyper customizable analytics tool that investment managers are already familiar with.
          </Text.Body>
          <Text.Body balance>
            {' '}
            Bayesline is a hyper customizable analytics tool that investment managers are already familiar with.
          </Text.Body>
        </ExposeProps>
      </div>
      <div className={`col theme ${style.slide}`} data-theme="two">
        <Text.H3>Fields</Text.H3>
        <ExposeProps className={`${style.grid}`}>
          <ShapeField variant="bayesian" rows={33} columns={33} padding={2.5} />
          <ShapeField isStatic variant="bayesian" rows={33} columns={33} padding={2.5} />
        </ExposeProps>
        <Text.Caps>variants</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col3}`} ignoreProps={['isStatic', 'rows', 'columns']}>
          <ShapeField isStatic variant="bayesian" rows={20} columns={20} />
          <ShapeField isStatic variant="checker" rows={20} columns={20} />
          <ShapeField isStatic variant="dithered-gradient" rows={20} columns={20} />
          <ShapeField isStatic variant="pcb" rows={20} columns={20} />
          <ShapeField isStatic variant="radial" rows={20} columns={20} />
          <ShapeField isStatic variant="swirl" rows={20} columns={20} />
        </ExposeProps>
        <Text.Caps>columns & rows</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col4}`} ignoreProps={['isStatic']}>
          <ShapeField isStatic rows={20} columns={20} />
          <ShapeField isStatic rows={20} columns={10} />
          <ShapeField isStatic rows={10} columns={20} />
          <ShapeField isStatic rows={10} columns={10} />
        </ExposeProps>
      </div>

      <div className={`col theme ${style.slide}`} data-theme="one">
        <Text.H3>Vector Fields</Text.H3>
        <ExposeProps className={`${style.grid} ${style.col4}`}>
          <VectorField variant="checker" />
          <VectorField variant="grid" />
          <VectorField variant="magnify" />
          <VectorField variant="radial" />
          <VectorField variant="straight" />
          <VectorField variant="swirl" />
          <VectorField variant="twist" />
          <VectorField variant="twist" loop />
        </ExposeProps>
      </div>

      <div className={`col theme ${style.slide}`}>
        <Text.H3>Buttons</Text.H3>
        <Text.Caps>Type</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col3}`} ignoreProps={['theme', 'children']}>
          <Button>Default</Button>
          <Button type="primary" theme={1}>
            Primary
          </Button>
          <Button type="secondary" theme={1}>
            Secondary
          </Button>
        </ExposeProps>
        <Text.Caps>Size</Text.Caps>
        <ExposeProps className={`${style.grid}`} ignoreProps={['theme', 'children']}>
          <Button size="default" theme={3}>
            Default
          </Button>
          <Button size="small" theme={3}>
            Small
          </Button>
        </ExposeProps>
        <Text.Caps>Theme</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col4}`} ignoreProps={['children', 'size']}>
          <Button theme={1} size="small">
            One
          </Button>
          <Button theme={2} size="small">
            Two
          </Button>
          <Button theme={3} size="small">
            Three
          </Button>
          <Button theme={4} size="small">
            Four
          </Button>
        </ExposeProps>
      </div>

      <div className={`col theme ${style.slide}`} data-theme="three">
        <Text.H3>Assets</Text.H3>
        <Text.Caps>Seed</Text.Caps>
        <ExposeProps className={`${style.grid} ${style.col3}`} ignoreProps={['theme', 'children']}>
          <Asset seed="0" />
          <Asset seed="77" />
          <Asset seed="25" />
          <Asset seed="30" />
          <Asset seed="888" />
          <Asset seed="BAYESLIN3" />
          <Asset seed="22" />
          <Asset seed="222" />
          <Asset seed="2222" />
        </ExposeProps>
      </div>
    </div>
  );
}

const getColor = (color: string) => {
  return `var(--${color})`;
};

const Swatch = ({ color }: { color: string }) => {
  return (
    <div className={`${style.colorblock}`}>
      <div style={{ background: color }} />
    </div>
  );
};
