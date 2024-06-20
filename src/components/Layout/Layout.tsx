import { Footer } from '@/components';
import style from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <div className="tile"></div>
      <main className={style.layoutgrid}>
        {children}
        <Footer />
      </main>
    </>
  );
};
