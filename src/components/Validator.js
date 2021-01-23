import React from "react";
import { connect } from "react-redux";

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
  };

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
  };

  catchIframeEvent = (event) => {
    // exit for any other Message event coming from third parties (e.g. Redux Dev Tools, etc.)
    if (!event.data.jqueryBloxApp) {
      return;
    }

    let lessonPassedStatus = event.data.lessonComplete;
    let lessonIndex = this.lessonIndex;
    // let lessonSubmittedStatus = false;

    // otherwise, lessonComplete is 'true' and therefore we can update state
    if (event.data.lessonComplete) {
      // first mark submission as complete
      this.props.dispatch({
        type: "LESSON_PASSED",
        payload: {
          lessonPassedStatus,
          lessonIndex,
        },
			});

			let lessonCompletedStatus = true;
			
			this.props.dispatch({
				type: "LESSON_COMPLETED",
				payload: {
					lessonCompletedStatus,
					lessonIndex,
				},
			});
    } else {
      console.log("Incorrect answer.");
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
        <iframe
          ref={this.iframe}
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
					.jest-lite-report__errors {display: none !important}

					// Custom scrollbar
					::-webkit-scrollbar {
						width: 20px;
					}

					::-webkit-scrollbar-track {
						background-color: transparent;
					}

					::-webkit-scrollbar-thumb {
						background-color: #403e65;
						border-radius: 20px;
						border: 6px solid transparent;
						background-clip: content-box;
					}

					// Hover
					::-webkit-scrollbar-thumb:hover {
						background-color: #a8bbbf;
					}
				</style>
      
      </head>
      <body>

        <div class="html-container" style="display: none">
        ${lessonData.html ? lessonData.html : ""}
        </div>
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
				<link rel="stylesheet" href="https://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.css"/>
				<script	crossorigin	src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
				<script	crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
				<script crossorigin	src="https://unpkg.com/jest-lite@1.0.0-alpha.4/dist/core.js"></script>
				<script	crossorigin	src="https://unpkg.com/jest-lite@1.0.0-alpha.4/dist/enzyme.js"></script>
				<script	crossorigin	src="https://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.js"></script>

				${lessonData.lessonSubmitted ? userScript : ""}

				${lessonData.lessonSubmitted ? validationScript : ""}
				
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
