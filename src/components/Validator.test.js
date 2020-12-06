test('JS basics', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span class="tagline">Adcetera Design Group</span>' +
    '</div>';

  const $ = require('jquery');

  let fruits = ['Pineapple', 'Mangoes', 'Bananas']
  
  expect(fruits).toHaveLength(3);
});

test('jQuery stuffs', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    ' <h1>Adcetera</h1>' +
    '  <span class="tagline">Adcetera Design Group</span>' +
    '</div>';

  const $ = require('jquery');

  let $headline = $('h1');
  let $tagline = $('.tagline');
  $tagline.addClass('active');
  
  expect($headline.text()).toEqual('Adcetera')
  expect($tagline).toBeDefined();
  expect($tagline).toMatchObject($('.tagline'));
  expect($tagline.hasClass('active')).toBe(true);
});

test('Testing string as JS', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    ' <button>Learn more</button>' +
    '</div>';

	const $ = require('jquery');
	var $button = $("button");

	
	expect($button.text()).toEqual('Learn more')

});