import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";
// import IFrame from "./IFrame";

class Validator extends React.Component {
  constructor(props) {
    super(props);

    this.iframe = React.createRef();
		this.lessonIndex = this.props.lessonKey;
	
  }

  setData = () => {
    this.lessonData = this.props.lessons[this.props.lessonKey];
	};


	componentWillUnmount = () => {
		window.removeEventListener("message", this.catchIframeEvent);
	}

  componentDidMount = () => {
		this.setData();
		window.addEventListener("message", this.catchIframeEvent);
  };

  componentDidUpdate = () => {
		this.setData();
		window.addEventListener("message", this.catchIframeEvent);
	};


	shouldComponentUpdate = () => {

		let lessonData = this.props.lessons[this.props.lessonKey]; // replace with setData?

		// if lesson has already been submitted, stop re-rendering
		if (lessonData.lessonSubmitted) {
			return false;	
		}

		return true;
	}
	
	catchIframeEvent = (event) => {
		// exit for any other Message event coming from third parties (e.g. Redux Dev Tools, etc.)
    if (!event.data.jqueryBloxApp) {
      return;
		}

		let lessonPassedStatus = event.data.lessonComplete;
		let lessonIndex = this.lessonIndex;
		let lessonSubmittedStatus = false;

		if (event.data.lessonComplete) {
			console.log('LESSON COMPLETE: TRUE')
			 // otherwise, lessonPassed is 'true' and therefore we can update state
			 this.props.dispatch({
				type: "LESSON_PASSED",
				payload: {
					lessonPassedStatus,
					lessonIndex,
				},
			});
		
		} else {
			
			console.log('LESSON COMPLETE: FALSE')
		} 
	};

  render = () => {

		let lessonData = this.props.lessons[this.props.lessonKey];

    let userScript = `<script type="text/javascript">${lessonData.js}</script>`;

    let validationScript = `<script type="text/javascript">
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
					window.top.postMessage({
						jqueryBloxApp: true,
						lessonComplete: true,
					});
				} else {
					window.top.postMessage({
						jqueryBloxApp: true,
						lessonComplete: false,
					});
				}
			});

			prettify.toHTML(run(), document.body);
		</script>`;

    return (
      <div className="ValidatorIframe">
        <iframe ref={this.iframe}
          srcDoc={`
        <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Your Awesome Game!</title>
				<style>
					body {margin: 0; background: #15142a}
					.jest-lite-report {background: none !important}
				</style>
      
      </head>
			<body>
				<link rel="stylesheet" href="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.css"/>
				<script	crossorigin	src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
				<script	crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
				<script crossorigin	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/core.js"></script>
				<script	crossorigin	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/enzyme.js"></script>
				<script	crossorigin	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.js"></script>

				${lessonData.lessonSubmitted ? userScript : ''}

				${lessonData.lessonSubmitted ? validationScript : ''}
				
      </body>
      </html>
      `}
        />
      </div>
    );
  };
}

const mapStateToProps = function (state) {
  const { lessons } = state.lessonsReducer;
  return { lessons };
};

export default connect(mapStateToProps)(Validator);
