import reactLogo from './assets/react.svg';
import style from './utils.module.css';

function App() {
  return (
    <main>
      <div className="tile"></div>
      <div className={`${style.section}`}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className={style.section}>
        <div className="s-6 e-12">
          <h1>A new era of financial analytics</h1>
        </div>
      </div>

      <div className={style.section}>
        <div className="e-6 sub">
          <h1 className="e-4">A new era of financial analytics</h1>
        </div>
      </div>

      <div className={style.section}>
        <div className="e-6 sub">
          <h2 className="e-2">card</h2>
          <h2 className="s-2 e-4">card</h2>
          <h2 className="s-4 e-6">card</h2>
        </div>
        <div className="s-8 e-12 sub">
          <h2 className="e-2">card</h2>
          <h2 className="s-2 e-4">card</h2>
        </div>
      </div>

      <div className={style.section}>
        <div className="s-2 e-10 sub">
          <h1 className="s-2 e-6">center sub text</h1>
        </div>
      </div>

      <div className={style.section}>
        <div className="e-4">
          <h1>A new era of center</h1>
        </div>
        <div className="s-4 e-12">
          <h1>A new era of center</h1>
        </div>
      </div>

      <div className={style.section}>
        <div className="e-8">
          <h1>A new era of financial analytics</h1>
        </div>
        <div className="s-8 e-12">
          <h1>A new era of financial analytics</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
