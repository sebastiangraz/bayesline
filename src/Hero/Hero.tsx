import style from './hero.module.css';
import reactLogo from '@/assets/react.svg';
import utils from '@/utils.module.css';

export const Hero = () => {
  return (
    <div className={`${utils.section} ${style.hero}`}>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <div className="s-4 e-8">
        <h1>A new era of financial analytics</h1>
      </div>
    </div>
  );
};
