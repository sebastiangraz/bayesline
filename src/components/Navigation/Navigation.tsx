import { Link } from '@tanstack/react-router';
import style from './navigation.module.css';
import utils from '@/utils.module.css';
import { Logo } from '@/components';

export const Navigation = () => {
  return (
    <>
      <nav className={`${utils.row} ${style.navigation}`}>
        <div className={` ${style.links}`}>
          <Logo className={style.logo} />
          <Link to="/" className={style.link}>
            Home
          </Link>{' '}
          <Link to="/signup" className={style.link}>
            Sign up
          </Link>
        </div>
        <hr />
      </nav>
    </>
  );
};
