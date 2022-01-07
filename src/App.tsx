import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>

      <ClickCounter count={10}/>
   
    </div>
  );
}

export default App;
