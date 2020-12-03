import React from "react";
import { createPortal } from "react-dom";
import IFrame from "./IFrame";

class Validator extends React.Component {

	constructor() {
		super();

		this.iframe = React.createRef();
	}

	componentDidMount = () => {
		this.renderIframe();
	}

	renderIframe = () => {

		const iframe = this.iframe.current;
    const document = iframe.contentDocument;

		const documentContents = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Your Awesome Game!</title>
      
      </head>
			<body>
				<h1>Heading test</h1>
				<div id="mocha"></div>
				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.4.5/mocha.js"></script>
				<script type="text/javascript">
				// Setup
				mocha.setup('bdd');

				console.log(chai)
				
				// Let's test this function
				const addr = (a, b) =>  a + b;
				
				// Assertion made below
				describe('Addr adds two numbers', () => {
				
				  it('Adds two numbers', function() {
				    chai.assert.equal(addr(2, 2), 3);
				  });
				
				  it('Lesson 2 Tests', function() {
				
				    chai.expect("John").to.be.a('string'); // Recommended
				
				  });
				
				});
				
				mocha.run();
				
				</script>
				
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
	}

  render = () => {

    return (
      <div className="ValidatorIframe">
        <iframe
					title="Okama Game Sphere"
					name="GameGridIframe"
					id="mySpecialId"
					className="iframe"
					ref={this.iframe}
					/>
      </div>
    );
  }
}

export default Validator;