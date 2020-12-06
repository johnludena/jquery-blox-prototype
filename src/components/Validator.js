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

				<div id="jest-lite-wrapper"></div>
				
				<script
					crossorigin
					src="https://unpkg.com/react@16/umd/react.production.min.js"
				></script>
				<script
					crossorigin
					src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
				></script>
				<script
					crossorigin
					src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/core.js"
				></script>
				<script
					crossorigin
					src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/enzyme.js"
				></script>
				<script
					crossorigin
					src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.js"
				></script>
				<script>
					let fruits = ['Pineapple', 'Mangoes', 'Bananas']
				</script>
				<script>
					const {
						core: {describe, it, expect, run},
						enzyme: {mount},
						prettify,
					} = window.jestLite;

					describe('Array', () => {
						it('has three items', () => {
						
							expect(fruits).toHaveLength(3);
						});
						
					});

					prettify.toHTML(run(), document.getElementById('jest-lite-wrapper'));
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