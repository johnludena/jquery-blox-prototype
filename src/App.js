import React from 'react';
import GameGrid from './components/GameGrid';
import CodeEditor from './components/CodeEditor';
import './App.scss';

let startHtml = `<button class="block">btn</button>
<div class="block">div</div>`;
let startCss = `button {
  border: 2px dashed #de7186;
}

button.active {
  background: #de7186;
}`;
let startJs = ``;

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      html: startHtml,
      css: startCss,
      js: startJs,
    };
  }

  updateUi = (codeType, payload) => {

    this.setState({
      [codeType]: payload
    });

   }


  render() {
    return (
      <div className="App">
        
        <div className="left-col col">
          <h1>Lesson 1</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde minus eos hic consectetur dolorum facere maxime nihil repellendus facilis nam, eveniet fugit consequuntur ipsa harum atque rerum maiores iusto est.</p>
          <CodeEditor data={this.state} refreshCode={this.updateUi} />
        </div>
        <div className="right-col col">
          <GameGrid data={this.state} />
        </div>
        
      </div>
    );
  }
}

export default App;
