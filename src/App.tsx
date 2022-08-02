
import { Counter } from './features/pages/counter/Counter';
import './App.scss';
import { typeScriptFile } from './features/typeScript/typeScript';

function App() {
  typeScriptFile()

  


  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
