import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from 'react-modal';
import FeedbackForm from './FeedbackForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
  constructor(props) {
    super(props);

    this.state = {
      modalActiveStatus: this.props.isModalFeedbackVisible,
    }
  }

  closeModal = () => {
    this.props.dispatch({
      type: "TOGGLE_FEEDBACK_MODAL",
      payload: {
        isVisible: false,
      }
    });
  };

  render = () => {

    return (
        <Modal isOpen={this.props.isModalFeedbackVisible} style={customModalStyles} onRequestClose={this.closeModal}>
            <button onClick={this.closeModal} className="button--close-modal">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h1>I want to hear your feedback</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus culpa exercitationem. Exercitationem explicabo sed quidem? Hic amet, reiciendis omnis, deleniti odio, voluptatem eos totam corporis ipsum illo fugit vel!</p>

            <FeedbackForm />
        </Modal>
    );
  };
}

const mapStateToProps = (state) => {
  const { isModalFeedbackVisible } = state.modalsReducer;
  return { isModalFeedbackVisible }
};

export default connect(mapStateToProps)(ModalFeedback);
