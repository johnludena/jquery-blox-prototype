import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../images/logo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  setPrevButton = () => {

    let currentLessonIndex = this.props.lessonKey;
    
    // disable prev button on first lesson
    if (currentLessonIndex === 0) {
      return <Link className="btn secondary-btn disabled" to={`/${this.props.lessonKey}`}>Previous</Link>
    } else {
      return <Link className="btn secondary-btn" to={`/${this.props.lessonKey}`}>Previous</Link>
    }  
  }

  setNextButton = () => {

    let totalLessons = this.props.lessons.length;
    let currentLessonIndex = this.props.lessonKey;

    console.log({totalLessons, currentLessonIndex})

    
    // disable next button if we are already on last lesson
    if (currentLessonIndex === totalLessons - 1) {
      return <Link className="btn secondary-btn margin-left-20 disabled" to={`/${this.props.lessonKey + 2}`}>Next</Link>
    } else {
      return <Link className="btn secondary-btn margin-left-20" to={`/${this.props.lessonKey + 2}`}>Next</Link>
    }  
  }

  render = () => {

    let prevButton = this.setPrevButton();
    let nextButton = this.setNextButton();

    return (
        <div className="Header flex justify-content-between align-items-center">
            <div className="brand">
              <a id="logo" href="/"><img src={logo} alt="jQueryBlox" /></a>
              <span>An Interactive Javascript + jQuery Course for Beginners</span>
            </div> 
            <div className="top-navigation">
                {prevButton}
                {nextButton}
            </div>
        </div>
    );
  };
}

const mapStateToProps = (state) => {
    const { lessons } = state.lessonsReducer;
    return { lessons }
}

export default connect(mapStateToProps)(Header);
