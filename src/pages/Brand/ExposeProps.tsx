import { Text } from '@/components';
import React, { ReactElement } from 'react';
import style from './brand.module.css';

interface ExposePropsProps {
  children: ReactElement | ReactElement[];
}

const formatProps = (props: any): JSX.Element => {
  const entries = Object.entries(props).map(([key, value]: [string, any]) => {
    // Assume all values are strings for simplicity, handle special cases as needed
    return (
      <span key={key}>
        {key}="<span className={style.highlight}>{value.toString()}</span>"
      </span>
    );
  });

  return <>{entries.reduce<React.ReactNode[]>((acc, curr) => [...acc, ' ', curr], [])}</>;
};

export const ExposeProps = ({ children }: ExposePropsProps) => {
  return (
    <div>
      {React.Children.map(children, (child: any, index: number) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '1em'
          }}
        >
          <div style={{ width: '100%' }}>{child}</div>
          <Text.SmallCaps secondary className={style.syntax}>
            {'<'}
            {child.type.displayName || child.type.name} {formatProps(child.props)}
            {' />'}
          </Text.SmallCaps>
        </div>
      ))}
    </div>
  );
};
