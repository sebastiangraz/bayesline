import { Footer, Navigation } from '@/components';
import style from './layout.module.css';
import { useMatchRoute, Link } from '@tanstack/react-router';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  theme?: string;
}

export const Layout = (props: LayoutProps) => {
  const { children, theme } = props;

  const showBackButton = ['/blog/$postId'];
  const matchRoute = useMatchRoute();
  const matchedShowBackButton = showBackButton.some((route) => matchRoute({ to: route }));

  return (
    <div data-theme={theme}>
      <main className={style.layoutgrid}>
        <Navigation backbutton={matchedShowBackButton} />
        {children}
        <Footer />
      </main>
    </div>
  );
};
