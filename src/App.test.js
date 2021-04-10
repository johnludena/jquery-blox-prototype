'use strict';

import $ from 'jquery';
// const $ = require('jquery');



// create a function into global context for Jest
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
}


// ============== USER CODE TESTING PLAYGROUND============ //

let testStatus = false; // never changes, always runs befor user script

console.log('hi');




// ============== JEST TESTS ================== //
describe('Tests my console.log', () => {
  it('should console a message saying "hi"', () => {

    expect(global.console.log).toHaveBeenCalledWith(
      'hi'
    )
  })
})


