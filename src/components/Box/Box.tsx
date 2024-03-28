import style from './box.module.css';

interface BoxProps {
  bg?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export const Box = (props: BoxProps) => {
  const { children, bg, ...rest } = props;

  const background = bg === 'primary' ? style.bgPrimary : style.bgSecondary;

  return <div className={`${background} ${style.box} ${rest.className}`}>{children}</div>;
};
