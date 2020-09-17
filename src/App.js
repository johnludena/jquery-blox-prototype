import React from 'react';
import GameGrid from './components/GameGrid';
import CodeEditor from './components/CodeEditor';
import './App.scss';

let startHtml = `<button>hi</button>`;
let startCss = `button {
  padding: 10px 20px;
  background: blue;
  color: white;
}

button.active {
    background: red;
}`;
let startJs = `var button = document.querySelector('button');
button.addEventListener('click', ()=> {
button.classList.toggle('active');
});`


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      html: startHtml,
      css: startCss,
      js: startJs,
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    
    // trigger an update when user adds new code
    this.runCode();
  }

  componentDidMount() {
      console.log('componentDidMount')

    // initial load
    this.runCode();
  }

  runCode = () => {
    const { html, css, js } = this.state;

    const iframe = this.iframe.current;
    const document = iframe.contentDocument;

    console.log(document)
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  render() {
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
}

export default App;
