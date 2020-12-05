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
					let firstName = 'John Ludena';
					let age = 36;
					let employed = true;

					let fruits = ["apple", "mango", "pineapple"];
				</script>
				<script type="text/javascript">

				// Setup
				mocha.setup('bdd');
				
				console.log(firstName);
				
				// Assertion made below
				describe('Lesson checks', () => {
				
				  it('Name is a string', function() {
				    chai.expect(firstName).to.be.a('string'); // Recommended	
					});
					
					it('Age is an integer', function() {
				    chai.expect(age).to.be.a('number'); // Recommended	
					});

					it('Employment status is a boolean', function() {
				    chai.expect(employed).to.be.a('boolean'); // Recommended	
					});

					it('Fruits is an array', function() {
				    chai.expect(fruits).to.be.a('array'); // Recommended	
					});

					it('Array has 3 items', function() {
				    chai.expect(fruits).to.have.lengthOf(3); // Recommended	
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