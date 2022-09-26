import { useState } from 'react';
import './App.scss';

function App() {

    const [count, setCount] = useState(0);

  return (
      <div className="App">
          <div>
              <h2>Счетчик):</h2>
              <h1>{count}</h1>
              <button disabled={count ? false : true} onClick={() => setCount(count-1)} id='minus' className="minus">- Минус</button>
              <button onClick={() => setCount(count+1)} className="plus">Плюс +</button>
          </div>
      </div>
  );
}

export default App;
