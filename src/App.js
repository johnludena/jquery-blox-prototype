import React from 'react';
import GameGrid from './components/GameGrid';
import CodeEditor from './components/CodeEditor';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <div className="left-col col">
        <CodeEditor />
      </div>
      <div className="right-col col">
        <GameGrid />
      </div>
      
    </div>
  );
}

export default App;
