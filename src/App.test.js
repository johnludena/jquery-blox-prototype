'use strict';

import $ from 'jquery';
// const $ = require('jquery');


// ============== USER CODE TESTING PLAYGROUND============ //

// console.log('i love my jammies');
let testStatus = false;

console.log = jest.fn(); // write your console.log below this line
console.log('yo my dudes');


// ============== TEST 2: Console.Log ================== //

// 2. Invoke the function below to actually run and output its message to the console
describe('Lesson 5b Test', () => {
  
  it('console.log the text "hello"', () => {
    // The first argument of the first call to the function was 'hello'
    expect(console.log).toHaveBeenCalledWith('yo my dudes');
  });
});

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
// function sayHelloBack() {
//   console.log('Hi there! Nice to meet you kind stranger.');
// }

// sayHelloBack();

// describe('Lesson 5b Test', () => {
  
//   it('function "sayHelloBack" returns string "Hi John"', () => {
//     // expect(sayHelloBack()).toBe('Hi John');
//     testStatus = true;
//   });

// });



