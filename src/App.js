// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// components
import LeftCol from "./components/LeftCol";
import RightCol from "./components/RightCol";
import Header from "./components/Header";
import ChatBubble from "./components/ChatBubble";
import ModalFeedback from "./components/ModalFeedback";
import ModalSubscribe from "./components/ModalSubscribe";

// css
import "./App.scss";


class App extends React.Component {
  constructor() {
    super();
  }

  render = () => {

    let routesArr = this.props.lessonsReducer.lessons.map((lesson, index)=>{
      return (
        <Route path={`/${index + 1}`} key={index + 1}>
          <Header lessonKey={index}  />
          <main>
            <LeftCol lessonKey={index}  />
            <RightCol lessonKey={index} />
          </main>
        </Route>
      )
    });

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/1' />
          </Route>
          {routesArr}
        </Switch>
        <ChatBubble />

        <ModalFeedback />
        <ModalSubscribe />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { lessonsReducer } = state;
  return { lessonsReducer }
}

export default connect(mapStateToProps)(App)

