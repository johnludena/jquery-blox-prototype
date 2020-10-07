// libs
import React from "react";

// assets
import successSound from "../../audio/success.wav";

// let finalJs = `var button = document.querySelector('button')`;

class GameGrid extends React.Component {
  constructor() {
    super();

    this.iframe = React.createRef(); // iframe node (new React 'refs' format)
    this.audioFile = React.createRef();
    this.evaluateCode = this.evaluateCode.bind(this);

    this.state = {
      lessonSubmitted: false
    }
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

  evaluateCode() {
    console.log('evaluateCode FN');
    
    this.setState({
      lessonSubmitted: true
    })
  }

  updateGameGrid() {
    const { html, css, js, js_validation } = this.props.data;

    console.log('js validation', js_validation)

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
          // this is where our validation scripts will run
          ${ this.state.lessonSubmitted ? js_validation : '' }
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
          <iframe title="Okama Game Sphere" className="iframe" ref={this.iframe} />

          <audio src={successSound} ref={this.audioFile}></audio>
        </div>

      </div>
      <section>
            <button onClick={this.evaluateCode} className="button" style={{backgroundColor: 'blue', fontSize: 20, fontColor: 'white'}}>Submit code</button>
        </section>
      </div>
    );
  }
}

export default GameGrid;
