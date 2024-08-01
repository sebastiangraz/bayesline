import { Text } from '@/components';

import React, { ReactElement } from 'react';

interface ExposePropsProps {
  children: ReactElement | ReactElement[];
}

export const ExposeProps = ({ children }: ExposePropsProps) => {
  const formatProps = (props: any): string => {
    return Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  };

  return (
    <div>
      {React.Children.map(children, (child: any, index: number) => (
        <>
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '1em'
            }}
          >
            <div
              style={{
                width: '100%'
              }}
            >
              {child}
            </div>
            <Text.SmallCaps secondary>
              {`<${child.type.displayName || child.type.name} ${formatProps(child.props)} />`}
            </Text.SmallCaps>
          </div>
        </>
      ))}
    </div>
  );
};
