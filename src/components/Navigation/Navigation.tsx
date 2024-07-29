import { Link } from '@tanstack/react-router';
import style from './navigation.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '@/components';
import { useRef, useState } from 'react';
import { useStickyObserver } from '@/helpers/utils';

export const Navigation = ({ backbutton = false }: { backbutton?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isSticky = useStickyObserver(ref, {
    rootMargin: '-1px 0px 0px 0px',
    threshold: [1]
  });

  const entryStyle = backbutton ? style.entry : '';

  return (
    <div className={`col theme ${style.navigation} ${entryStyle}`}>
      <div ref={ref} className={`col bleed ${style.switch}`}>
        <DesktopNavigation isSticky={isSticky} />
        <MobileNavigation isSticky={isSticky} />
      </div>
      {backbutton && (
        <div className={`col ${style.back}`}>
          <svg width="13" height="14" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 11L2 6.5M2 6.5L11 6.5M2 6.5L6.5 2" stroke="currentColor" />
          </svg>

          <Link to="/news">{'Back to news'}</Link>
        </div>
      )}
    </div>
  );
};

const DesktopNavigation = (props: any) => {
  const { isSticky } = props;

  return (
    <nav className={`col ${style.desktop}`}>
      <div className={`${style.logowrapper}`}>
        <Link to="/" className={`${style.logo} ${style.link}`}>
          <div className={style.logosentinel}>
            <Logo type={!isSticky} />
          </div>
        </Link>
      </div>

      <div className={` ${style.links}`}>
        {navItems.map((item, index) => {
          const highlight = item.highlight ? style.highlight : '';
          const isLink = item.to.startsWith('http');
          return (
            <Link
              key={`${item.to}-${index}`}
              to={item.to}
              target={isLink ? '_blank' : ''}
              className={`${style.link} ${highlight}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const MobileNavigation = (props: any) => {
  const { isSticky } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpaque = isSticky || isMenuOpen ? style.isOpaque : '';

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`col ${style.mobile} ${isOpaque}`}>
      <Link to="/" className={`${style.mobilelogo} ${style.link}`} onClick={() => handleNavClick()}>
        <Logo.Mark className={`${style.link}`} />
      </Link>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`${style.mobilelinks}`}
            layout="size"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item, index) => {
              const highlight = item.highlight ? style.highlight : '';

              const isLink = item.to.startsWith('http');
              return (
                <Link
                  key={`${item.to}-${index}`}
                  to={item.to}
                  target={isLink ? '_blank' : ''}
                  className={`${style.mobilelink} ${highlight}`}
                  onClick={() => handleNavClick()}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${style.burger} ${isMenuOpen ? style.open : ''}`} onClick={() => handleMenuToggle()}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34 25.5L6 25.5M34 19.5L6 19.5M34 13.5H6"
            stroke="currentColor"
            vectorEffect={'non-scaling-stroke'}
            strokeWidth={1}
          />
        </svg>
      </div>
    </nav>
  );
};

export const navItems = [
  { to: '/mission', label: 'Mission' },
  { to: '/news', label: 'News' },
  { to: '/pricing', label: 'Pricing' },
  { to: 'https://app.bayesline.com/', label: 'Docs' },
  { to: 'https://app.bayesline.com/signup/', label: 'Sign up', highlight: true }
] as { to: string; label: string; highlight?: boolean }[];
