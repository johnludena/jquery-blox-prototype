import React from 'react';
import GameGrid from './components/GameGrid';
import CodeEditor from './components/CodeEditor';
import './App.scss';

let startHtml = `<button>hi</button>`;
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
