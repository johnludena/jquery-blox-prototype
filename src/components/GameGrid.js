import React from "react";

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

class GameGrid extends React.Component {
  constructor() {
    super();
    
    this.iframe = React.createRef(); // iframe node (new React 'refs' format)
  
  }

  componentDidUpdate() {
    console.log('GameGrid.js componentDidUpdate')
    this.updateGameGrid();
  }

  componentDidMount() {
    console.log('GameGrid.js componentDidMount');
    this.updateGameGrid();
    
  }

  updateGameGrid() {
    console.log('update GameGrid.js');
    const { html, css, js } = this.props.data;

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

      </div>

    );
  }
}

export default GameGrid;
