import React from "react";
// import { createPortal } from "react-dom";
import { connect } from "react-redux";
// import store from "../redux/store";
import IFrame from "./IFrame";

import $ from "jquery";

// import {describe, it, expect, run} from 'jest-lite';

class ValidatorIframe extends React.Component {

	constructor() {
		super();

		this.iframe = React.createRef();
	}

	componentDidMount = () => {
		console.log('store:', this.props.lessons);
		this.runValidator();
	}

	componentDidUpdate = () => {
		this.runValidator();
	}

	runValidator = () => {
		console.log('runValidator');
		let lessonData = this.props.lessons[this.props.lessonKey];

		if(lessonData.lessonSubmitted) {
			console.log('lesson was just submitted')
		}
	}


  render = () => {
		let lessonData = this.props.lessons[this.props.lessonKey];

		let userScript = <script type="text/javascript">
			{lessonData.js}
		</script>;

		let validationScript = <script type="text/javascript">
			{lessonData.js_validation}
		</script>

    return (
      <div className="ValidatorIframe">
				<IFrame>
					<h1>Heading for IFrame component</h1>
					<div id="jest-lite-wrapper"></div>
					<script	crossOrigin="true"	src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
					<script	crossOrigin="true"	src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
					<script	crossOrigin="true"	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/core.js"></script>
					<script	crossOrigin="true"	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/enzyme.js"></script>
					<script	crossOrigin="true"	src="http://unpkg.com/jest-lite@1.0.0-alpha.4/dist/prettify.js"></script>

					{lessonData.lessonSubmitted ? userScript : ''}
					{lessonData.lessonSubmitted ? validationScript : ''}
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

