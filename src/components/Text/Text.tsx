import React from 'react';
import styles from './text.module.css';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: keyof typeof styles; // Now optional, because the specific heading components will provide it
  ref?: React.Ref<HTMLElement>;
}

const TextBase = React.forwardRef<HTMLElement, TextProps>(
  ({ children, className, as: Component = 'span', variant, ...props }, ref) => {
    const finalClassName = `${variant ? styles[variant] : ''} ${className || ''}`.trim();

    return (
      <Component ref={ref} className={finalClassName} {...props}>
        {children}
      </Component>
    );
  }
);

const createStyledText = (variant: keyof typeof styles, defaultTag: React.ElementType = 'span') => {
  return React.forwardRef<HTMLElement, Omit<TextProps, 'variant'>>((props, ref) => (
    <TextBase ref={ref} as={defaultTag} variant={variant} {...props} />
  ));
};

export const Text = {
  H1: createStyledText('h1', 'h1'),
  H2: createStyledText('h2', 'h2'),
  H3: createStyledText('h3', 'h3'),
  H4: createStyledText('h4', 'h4'),
  H5: createStyledText('h5', 'h5'),
  H6: createStyledText('h6', 'h6'),
  Body: createStyledText('body', 'p'),
  Small: createStyledText('small', 'span'),
  Caps: createStyledText('caps', 'span')
};
