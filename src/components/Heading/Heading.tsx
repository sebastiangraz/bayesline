import React from 'react';
import styles from './heading.module.css';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: HeadingComponent;
  ref?: React.Ref<HTMLElement>;
}

type HeadingComponent = React.FC<HeadingProps> & {
  H1: React.FC<HeadingProps>;
  H2: React.FC<HeadingProps>;
  H3: React.FC<HeadingProps>;
  H4: React.FC<HeadingProps>;
  H5: React.FC<HeadingProps>;
  H6: React.FC<HeadingProps>;
  Body: React.FC<HeadingProps>;
  SmallCaps: React.FC<HeadingProps>;
};

const createHeading = (tag: string): React.FC<HeadingProps> => {
  const Component = React.forwardRef<HTMLElement, HeadingProps>(({ children, className, as, ...props }, ref) => {
    const HeadingTag = as || tag;
    const tagClass = styles[tag as keyof typeof styles] || ''; // Ensure the style exists

    console.log(styles);

    const finalClassName = `${styles.heading} ${tagClass} ${className || ''}`.trim();

    return (
      <HeadingTag ref={ref} className={finalClassName} {...props}>
        {children}
      </HeadingTag>
    );
  });

  Component.displayName = `Heading.${tag.toUpperCase()}`;
  return React.memo(Component);
};

export const Heading: HeadingComponent = createHeading('h1') as HeadingComponent;

Heading.H1 = createHeading('h1');
Heading.H2 = createHeading('h2');
Heading.H3 = createHeading('h3');
Heading.H4 = createHeading('h4');
Heading.H5 = createHeading('h5');
Heading.H6 = createHeading('h6');
Heading.Body = createHeading('p');
Heading.SmallCaps = createHeading('span');
