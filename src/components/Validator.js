import React, { useState , useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


function Validator(props) {

	const lessonData = useSelector(state => state.lessonsReducer.lessons[props.lessonKey]);

	const dispatch = useDispatch();

	function validateScript(event) {

		// exit if lessonPassed is false or if message originates from other windows
		if (!event.data.lessonPassed || event.origin !== window.location.origin) {
			return;
		}

		console.log('validateScript fn after internal check');

		let lessonPassedStatus = true;
		let lessonIndex = props.lessonKey;

		console.log({lessonPassedStatus, lessonIndex});

		// otherwise, lessonPassed is 'true' and therefore we can update state
		dispatch({
			type: 'LESSON_PASSED',
			payload: {
				lessonPassedStatus,
				 lessonIndex,
			}
		});
	}

	// set listener once component has been mounted
	useEffect(() => {
		console.log('useEffect triggered');
		
		window.addEventListener("message", validateScript);

		// clean up
		return () => window.removeEventListener("message", validateScript)
    
	}, [lessonData.lessonSubmitted]);

	const userScript = `<script type="text/javascript">${lessonData.js}</script>`;

	const validationScript = `<script type="text/javascript">
			console.log('init all iframe validation scripts');
			const {
				core: {describe, it, expect, run, afterAll, afterEach},
				enzyme: {mount},
				prettify,
			} = window.jestLite;

			let testStatus = false;
			let passTests = 0;
			let failedTest = 0;

			${lessonData.js_validation}

			afterEach(() => {
					if (testStatus) {
						passTests += 1;
					} else {
						failedTest += 1;
					}
			
					testStatus = false;
			});

			afterAll(() => {
				if (failedTest === 0) {
					console.log('iFrame says: PASS!');
					window.top.postMessage({
						lessonPassed: true,
					},
					window.location.origin
					);
				} else {
					console.log('iFrame says: FAIL');
				}
			});

			prettify.toHTML(run(), document.body);
		</script>`;
	
	return (
    <div className="ValidatorIframe">
      <iframe
        srcDoc={`
        <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Your Awesome Game!</title>
				<style>
					body {margin: 0; background: #15142a};
				</style>
      
      </head>
			<body>
				<link rel="stylesheet" href="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.css"/>
				<script	crossorigin	src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
				<script	crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
				<script crossorigin	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/core.js"></script>
				<script	crossorigin	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/enzyme.js"></script>
				<script	crossorigin	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.js"></script>

				${userScript}

				${validationScript}
				
      </body>
      </html>
      `}
      />
    </div>
  )
}

export default Validator;
