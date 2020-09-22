import React from "react";
import successSound from '../audio/success.wav';

console.log({successSound})

let engineCSS = `body > * {
  background: #444444;
      width: 125px;
      height: 125px;
      margin: 10px;
      transition: 0.2s ease-out all;
      border: 2px solid #444444;
      color: white;
}

button {
  transition: .2s ease-out all;
}
`

let finalJs = `var button = document.querySelector('button');`


class GameGrid extends React.Component {
  constructor() {
    super();
    
    this.iframe = React.createRef(); // iframe node (new React 'refs' format)
    this.audioFile = React.createRef();
  
  }

  componentDidUpdate() {
    this.updateGameGrid();

    if (this.props.data.js === finalJs) {
      this.audioFile.current.play();
      console.log('YOU DID IT!')
    }
  }

  componentDidMount() {
    this.updateGameGrid();

    // this.audioFile.current.play();
    
  }

  updateGameGrid() {
    const { html, css, js } = this.props.data;

    const iframe = this.iframe.current;
    const document = iframe.contentDocument;

    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${engineCSS}
        </style>
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
  }

  render() {
    return (
      <div id="GameGrid">
        <iframe title="result" className="iframe" ref={this.iframe} />
        {/* <div className="row">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>

        <div className="row">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>

        <div className="row">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block pink"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>

        <div className="row">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>

        <div className="row">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div> */}
        <audio src={successSound} ref={this.audioFile}></audio>

      </div>

    );
  }
}

export default GameGrid;
