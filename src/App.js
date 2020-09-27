import React from 'react';
import GameGrid from './components/GameGrid';
import CodeEditor from './components/CodeEditor';
import './App.scss';

let startHtml = `<button class="block">btn</button>
<div class="block">div</div>
<p class="block">p</p>
<a class="block">a</a>
<img class="block" src="https://picsum.photos/125/125" />
<ul>
  <li class="block">li 1</li>
  <li class="block">li 2</li>
  <li class="block">li 3</li>
</ul>
`
;
let startCss = `button {
  grid-column-start: 3;
  grid-row-start: 3;
}
ul {
  grid-column-start: 2;
  grid-row-start: 4;
  grid-column-end: 5;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
}
ul li.block {
  flex: 1;
  max-width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
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
