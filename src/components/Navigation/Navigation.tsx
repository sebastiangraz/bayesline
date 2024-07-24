import { Link } from '@tanstack/react-router';
import style from './navigation.module.css';

import { Logo } from '@/components';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { to: '/mission', label: 'Mission' },
  { to: '/news', label: 'News' },
  { to: '/pricing', label: 'Pricing' },
  { to: 'https://app.bayesline.com/', label: 'Docs' },
  { to: 'https://app.bayesline.com/signup/', label: 'Sign up', highlight: true }
];

export const Navigation = ({ backbutton = false }: { backbutton?: boolean }) => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (async () => {
      const observer = new IntersectionObserver(
        ([e]) => {
          if (document.body) {
            document.body.dataset.sticky = e.intersectionRatio < 1 ? 'true' : 'false';
            setIsSticky(e.intersectionRatio < 1);
          }
        },
        { rootMargin: '-1px 0px 0px 0px', threshold: [1] }
      );
      observer.observe(headerRef.current as HTMLDivElement);
      return () => observer.disconnect();
    })();
  }, []);

  const entryStyle = backbutton ? style.entry : '';
  const stickyStyle = isSticky ? style.sticky : '';

  return (
    <div className={`col theme ${style.navigation} ${entryStyle} ${stickyStyle}`}>
      <nav ref={headerRef} className={`col ${style.nav}`}>
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
