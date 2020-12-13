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

  catchIframeEvent = (event) => {
    // exit for any other event that where the data property 'lessonPassed' is falsy
    if (!event.data.lessonPassed) {
      return;
    }

    let lessonPassedStatus = true;
    let lessonIndex = this.lessonIndex;

    // otherwise, lessonPassed is 'true' and therefore we can update state
    this.props.dispatch({
      type: "LESSON_PASSED",
      payload: {
        lessonPassedStatus,
        lessonIndex,
      },
    });
	};
	
	componentWillMount = () => {
		window.addEventListener("message", this.catchIframeEvent);
	}

  componentDidMount = () => {
    this.setData();
  };

  componentDidUpdate = () => {
    this.setData();
  };

  render = () => {

		let lessonData = this.props.lessons[this.props.lessonKey];

    let userScript = `<script type="text/javascript">${lessonData.js}</script>`;

    let validationScript = `<script type="text/javascript">
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
    );
  };
}

const mapStateToProps = function (state) {
  const { lessons } = state.lessonsReducer;
  return { lessons };
};

export default connect(mapStateToProps)(Validator);
