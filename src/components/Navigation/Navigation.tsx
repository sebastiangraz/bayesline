import { Link } from '@tanstack/react-router';
import style from './navigation.module.css';

import { Logo } from '@/components';

export const Navigation = () => {
  return (
    <>
      <nav className={`${style.navigation}`}>
        <Link to="/" className={`${style.logo} ${style.link}`}>
          <Logo />
        </Link>
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
    </>
  );
};
