import { Footer } from '@/components';
import style from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  theme?: string;
}

export const Layout = (props: LayoutProps) => {
  const { children, theme } = props;
  return (
    <div data-theme={theme}>
      <main className={style.layoutgrid}>
        {children}
        <Footer />
      </main>
    </div>
  );
};
