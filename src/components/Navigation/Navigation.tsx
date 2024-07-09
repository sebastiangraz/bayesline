import { Link } from '@tanstack/react-router';
import style from './navigation.module.css';

import { Logo } from '@/components';
import { useEffect, useRef, useState } from 'react';

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
          <Link to="/mission" className={style.link}>
            Mission
          </Link>
          <Link to="/news" className={style.link}>
            News
          </Link>
          <Link to="/pricing" className={style.link}>
            Pricing
          </Link>
          <Link to="https://app.bayesline.com/" target="_blank" className={style.link}>
            Docs
          </Link>
          <Link to="/signup" className={`${style.link} ${style.highlight}`}>
            Sign up
          </Link>
        </div>
      </nav>
      {backbutton && (
        <div className={`col ${style.back}`}>
          <Link to="/news">{'Back to news'}</Link>
        </div>
      )}
    </div>
  );
};
