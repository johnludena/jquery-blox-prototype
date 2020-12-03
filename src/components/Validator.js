import React from "react";
import { createPortal } from "react-dom";


class Validator extends React.Component {

	constructor() {
		super();

		this.iframe = React.createRef();
	}

  render = () => {
    return (
      <div className="Validator">
        <iframe name="GameGridIframe" className="ValidatorIframe" ref={this.iframe}>
					<h1>Heading 1</h1>
				</iframe>
      </div>
    );
  }
}

export default Validator;

// import { expect, assert } from 'chai';
// import mocha from 'mocha';

// // Lesson 1: Variables for assertion testing
// let age = 36;
// let testNumber = 2;

// // Lesson 2: jQuery selection
// let userJsStr = "var johnnyboy = 5; alert(johnnyboy)";
// eval(userJsStr);

// // ================
// // Setup
// mocha.setup('bdd');

// // Let's test this function
// const addr = (a, b) =>  a + b;

// // Assertion made below
// describe('Addr adds two numbers', () => {

//   it('Adds two numbers', function() {
//     assert.equal(addr(1, 2), 3);
//   });

//   it('Lesson 2 Tests', function() {

//     expect("John").to.be.a('string'); // Recommended

//     // Uncomment below to see Failing test
//     // assert.equal(addr(3, 3), -6);
//   });

// });

// mocha.run();
