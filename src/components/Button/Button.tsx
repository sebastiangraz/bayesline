import style from './button.module.css';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

export const Button = (props: ButtonProps) => {
  const { children, type, ...rest } = props;

  const background = type === 'primary' ? style.primary : style.secondary;
  const className = rest.className ? rest.className : '';

  if (rest.href) {
    return (
      <a {...rest} className={`${style.button} ${background} ${className}`}>
        {children}
      </a>
    );
  } else {
    return <button className={`${style.button} ${background} ${className}`}>{children}</button>;
  }
};
