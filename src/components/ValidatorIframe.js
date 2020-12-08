import React from "react";
// import { createPortal } from "react-dom";
import { connect } from "react-redux";
// import store from "../redux/store";
import { Helmet } from "react-helmet";

import IFrame from "./IFrame";

import $ from "jquery";

// import {describe, it, expect, run} from 'jest-lite';

class ValidatorIframe extends React.Component {

	constructor() {
		super();

		this.iframe = React.createRef();
	}

	componentDidMount = () => {
		this.runValidator();
	}

	componentDidUpdate = () => {
		this.runValidator();
	}

	runValidator = () => {
		let lessonData = this.props.lessons[this.props.lessonKey];

		if(lessonData.lessonSubmitted) {
			console.log('lesson was just submitted')
		}
	}


  render = () => {
		let lessonData = this.props.lessons[this.props.lessonKey];

		let userScript = <script type="text/javascript">{lessonData.js}</script>;

		let validationScript = <script type="text/javascript">
			{lessonData.js_validation}
		</script>

    return (
      <div className="ValidatorIframe">
				<IFrame>
					<h1>Heading for IFrame component</h1>
					<div id="jest-lite-wrapper"></div>
					

					{lessonData.lessonSubmitted ? userScript : ''}
					{/* {lessonData.lessonSubmitted ? validationScript : ''} */}
				</IFrame>
        
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  const { lessons } = state.lessonsReducer;
  return { lessons };
};

export default connect(mapStateToProps)(ValidatorIframe);

