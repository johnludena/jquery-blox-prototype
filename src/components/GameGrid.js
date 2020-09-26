import React from "react";
import successSound from '../audio/success.wav';

let finalJs = `var button = document.querySelector('button')`


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
        <title>Your Awesome Game!</title>
        <link rel="stylesheet" href="${process.env.PUBLIC_URL + '/GameBlocks.css'}">
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
       
        <audio src={successSound} ref={this.audioFile}></audio>

      </div>

    );
  }
}

export default GameGrid;
