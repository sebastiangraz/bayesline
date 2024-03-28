import utils from './utils.module.css';
import { Hero } from './Hero';

function App() {
  return (
    <main className={utils.debug}>
      <div className="tile"></div>

      <Hero />

      <div className={`${utils.section}`}>
        <div className="e-4 sub padding-1">
          <p className="e-4">We are reimagining financial analytics on Al infrastructure.</p>
        </div>
        <div className="s-4 e-12 sub padding-2">
          <h3 className="e-4">We are reimagining financial analytics on Al infrastructure.</h3>
        </div>
      </div>

      <div className={utils.section}>
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

      <div className={utils.section}>
        <div className="s-2 e-10 sub">
          <h1 className="s-2 e-6">center sub text</h1>
        </div>
      </div>

      {/*       <div className={utils.section}>
        <div className="e-4">
          <h1>A new era of center</h1>
        </div>
        <div className="s-4 e-12">
          <h1>A new era of center</h1>
        </div>
      </div>

      <div className={utils.section}>
        <div className="e-8">
          <h1>A new era of financial analytics</h1>
        </div>
        <div className="s-8 e-12">
          <h1>A new era of financial analytics</h1>
        </div>
      </div> */}
    </main>
  );
}

export default App;
