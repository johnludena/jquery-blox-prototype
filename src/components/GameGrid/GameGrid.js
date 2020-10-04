// libs
import React from "react";

// assets
import successSound from "../../audio/success.wav";

let finalJs = `var button = document.querySelector('button')`;

class GameGrid extends React.Component {
  constructor() {
    super();

    this.iframe = React.createRef(); // iframe node (new React 'refs' format)
    this.audioFile = React.createRef();
  }

  componentDidUpdate() {
    this.updateGameGrid();

    // if (this.props.data.js === finalJs) {
    //   this.audioFile.current.play();
      
    // }
  }

  componentDidMount() {
    this.updateGameGrid();
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
        <link rel="stylesheet" href="${
          process.env.PUBLIC_URL + "/GameBlocks.css"
        }">
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
        <script type="text/javascript">
          if (typeof buttonNode !== 'undefined') {
            console.log('Nice, we got a node selection');
            var isEqualNode = buttonNode.isEqualNode(document.querySelector('button.block'));
            if (isEqualNode) {
              console.log('awesome! nodes match!');
            }
            else {
              console.log('sorry, you selected the wrong node');
            }
          } else {
            console.log('Sorry, try again');
          }
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  }

  render() {

    let blocksNumber = 25;
    let divsArr = [];

    for(let i = 0; i < blocksNumber; i++) {
      divsArr.push(<div key={i}></div>);
    }

    return (
      <div className="right-col col">
        <div className="grids-outter-wrapper">
        <div id="GameGrid">
          {divsArr} 
        </div>

        <div id="iFrameWrapper">
          <iframe title="result" className="iframe" ref={this.iframe} />

          <audio src={successSound} ref={this.audioFile}></audio>
        </div>
      </div>
      </div>
    );
  }
}

export default GameGrid;
