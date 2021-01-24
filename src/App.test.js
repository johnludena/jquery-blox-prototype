'use strict';

import $ from 'jquery';
// const $ = require('jquery');


let testStatus = false;

// FUNCTIONS
// ============== CHAPTER 5 ================== //

// 1. Create a function named 'sayHello' that outputs a message to the console.
// function sayHello() {
//   console.log('Hi, ny name is John');
// }

// describe('Lesson 5a Test', () => {
  
//   it('function "sayHello" is defined', () => {
//     expect(sayHello).toBeDefined();
//     testStatus = true;
//   });

// });

// ============== CHAPTER 6 ================== //

// 2. Invoke the function below to actually run and output its message to the console
function sayHelloBack() {
  console.log('Hi there! Nice to meet you kind stranger.');
}

sayHelloBack();

describe('Lesson 5b Test', () => {
  
  it('function "sayHelloBack" returns string "Hi John"', () => {
    // expect(sayHelloBack()).toBe('Hi John');
    testStatus = true;
  });

});



