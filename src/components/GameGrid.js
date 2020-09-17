import React from "react";

class GameGrid extends React.Component {
  constructor() {
    super();
    
    this.iframe = React.createRef(); // iframe node (new React refs format)
  
  }

  render() {
    return (
      // <div id="GameGrid">
      //   <div className="row">
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //   </div>

      //   <div className="row">
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //   </div>

      //   <div className="row">
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block pink"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //   </div>

      //   <div className="row">
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //   </div>

      //   <div className="row">
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //     <div className="block"></div>
      //   </div>
      // </div>
      <section className="result">
        <iframe title="result" className="iframe" ref={this.iframe} />
    </section>
    );
  }
}

export default GameGrid;
