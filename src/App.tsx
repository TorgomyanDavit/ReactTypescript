import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/pages/counter/Counter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
