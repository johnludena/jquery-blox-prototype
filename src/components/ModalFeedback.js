import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from 'react-modal';
import FeedbackForm from './FeedbackForm';

Modal.setAppElement('#root'); // set #root container to 'aria-hidden' while modal is active

const customModalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '800px',
    padding               : '30px'
  }
};


class ModalFeedback extends React.Component {
  constructor() {
    super();

    this.state = {
      modalActiveStatus: false
    }
  }

  openModal = () => {
    this.setState({
      modalActiveStatus: true
    })
  }

  closeModal = () => {
    this.setState({
      modalActiveStatus: false
    })
  }

  render = () => {

    return (
        <Modal isOpen={this.state.modalActiveStatus} style={customModalStyles} onRequestClose={this.closeModal}>
            <button onClick={this.closeModal}>close modal</button>
            <h1>Modal content test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus culpa exercitationem. Exercitationem explicabo sed quidem? Hic amet, reiciendis omnis, deleniti odio, voluptatem eos totam corporis ipsum illo fugit vel!</p>

            <FeedbackForm />
        </Modal>
    );
  };
}

const mapStateToProps = (state) => {
    const { lessons } = state.lessonsReducer;
    return { lessons }
}

export default connect(mapStateToProps)(ModalFeedback);
