import React from 'react';
import logo from './logo.svg';
import GameGrid from './components/GameGrid';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <div className="left-col col">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, at saepe eaque aperiam soluta culpa doloribus incidunt officiis, corrupti vel molestiae hic blanditiis, natus nesciunt! Adipisci aliquid architecto a quod.</p>
      </div>
      <div className="right-col col">
        <GameGrid />
      </div>
      
    </div>
  );
}

export default App;
