import { Flex, Card, Cards, Text, VectorField, Logo, ShapeField, Button } from '@/components';
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
    </div>
  );
}
