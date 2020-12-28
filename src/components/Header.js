import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.lessonKey)
  }

  render = () => {
    return (
        <div className="Header flex justify-content-between">
            <a id="logo" href="/">jQueryBlox</a>
            <div className="top-navigation">
                <Link className="btn secondary-btn" to={`/${this.props.lessonKey}`}>Previous</Link>
                <Link className="btn secondary-btn margin-left-20" to={`/${this.props.lessonKey + 2}`}>Next</Link>

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
