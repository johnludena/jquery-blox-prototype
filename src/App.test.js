// __tests__/displayUser-test.js
'use strict';

// import $ from 'jquery';
const $ = require('jquery');


// jest.mock('./fetchCurrentUser');

// test('displays a user after a click', () => {
//   // Set up our document body
//   document.body.innerHTML =
//     '<div>' +
//     '  <span id="username" />' +
//     '  <button id="button" />' +
//     '</div>';

//   // This module has a side-effect
//   require('./displayUser');

//   const $ = require('jquery');
//   const fetchCurrentUser = require('./fetchCurrentUser');

//   // Tell the fetchCurrentUser mock function to automatically invoke
//   // its callback with some data
//   fetchCurrentUser.mockImplementation(cb => {
//     cb({
//       fullName: 'John Ludena',
//       loggedIn: false,
//     });
//   });

//   // Use jquery to emulate a click on our button
//   $('#button').trigger('click');

//   // Assert that the fetchCurrentUser function was called, and that the
//   // #username span's inner text was updated as we'd expect it to.
//   expect(fetchCurrentUser).toBeCalled();
//   expect($('#username').text()).toEqual('John Ludena - Logged Out');
// });

// Set up our document body

document.body.innerHTML = `
  <button class="blue btn">learn more</button>
  <button class="red btn">learn more</button>
`

var blueButton = $('.red');
var testStatus = false;

describe('Lesson 4 Test', () => {
  
  test('variable "blueButton" is defined', () => {
    expect(blueButton[0]).toBeDefined();
    testStatus = true;
  });

  test('var "blueButton" has the correct DOM node assigned to it', () => {

    let blueButtonAnswer = $('.btn.blue');

    expect(blueButton).toMatchObject(blueButtonAnswer);
    testStatus = true;
  });

});



