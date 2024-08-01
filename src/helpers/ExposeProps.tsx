import { Text } from '@/components';

import React, { ReactElement } from 'react';

interface ExposePropsProps {
  children: ReactElement | ReactElement[];
}

export const ExposeProps = ({ children }: ExposePropsProps) => {
  // Function to format props into a readable string
  const formatProps = (props: any): string => {
    return Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  };

  //   const formatProps = (props: any): JSX.Element => {
  //     const entries = Object.entries(props).map(([key, value]: [string, any]) => (
  //       // Wrap each prop in a span, and ensure the value is also encapsulated properly
  //       <span key={key}>
  //         {key}=" <span className="highlight">{value.toString()}</span> "
  //       </span>
  //     ));

  //     return <>{entries.reduce<React.ReactNode[]>((acc, curr) => acc.concat(curr, ' '), [])}</>;
  //   };

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
